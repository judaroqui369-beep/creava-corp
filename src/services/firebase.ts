import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  deleteDoc, 
  query, 
  orderBy,
  onSnapshot,
  getDocFromServer,
  Firestore
} from 'firebase/firestore';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser,
  Auth
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';
import { DesignDocument, UserProfile } from '../types';

// Initialize Firebase app singleton
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore with specific databaseId as required by Firebase skill
export const db: Firestore = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Initialize Firebase Auth
export const auth: Auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

// Validate Connection to Firestore on boot
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error("Please check your Firebase configuration.");
    }
  }
}
testConnection();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export interface SavedProjectSummary {
  id: string;
  title: string;
  width: number;
  height: number;
  pageCount: number;
  previewBg: string;
  updatedAt: number;
  document: DesignDocument;
}

/**
 * Format a UserProfile object from a FirebaseUser
 */
export function formatUserProfile(fbUser: FirebaseUser, overrideName?: string, plan: 'Gratuito' | 'Pro' = 'Pro'): UserProfile {
  const displayName = overrideName || fbUser.displayName || fbUser.email?.split('@')[0] || 'Usuario Creava';
  const nameParts = displayName.trim().split(/\s+/);
  const initials = nameParts.length === 1 
    ? nameParts[0].substring(0, 2).toUpperCase() 
    : (nameParts[0][0] + nameParts[1][0]).toUpperCase();

  return {
    id: fbUser.uid,
    name: displayName,
    email: fbUser.email || '',
    avatarUrl: fbUser.photoURL || undefined,
    avatarColor: 'from-[#7d2ae8] to-[#00c4cc]',
    initials: initials || 'CR',
    plan,
    isLoggedIn: true,
    createdAt: Date.now(),
    lastLoginAt: Date.now(),
  };
}

/**
 * Recursively removes all `undefined` values from objects and nested structures.
 * Firestore strictly rejects documents containing `undefined` values.
 */
export function sanitizeForFirestore<T>(data: T): T {
  if (data === undefined) {
    return null as unknown as T;
  }
  if (data === null || typeof data !== 'object') {
    return data;
  }
  if (Array.isArray(data)) {
    return data
      .filter(item => item !== undefined)
      .map(item => sanitizeForFirestore(item)) as unknown as T;
  }
  const cleanObj: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
    if (value !== undefined) {
      cleanObj[key] = sanitizeForFirestore(value);
    }
  }
  return cleanObj as T;
}

/**
 * Save a design to the user's private Firestore collection:
 * /users/{userId}/designs/{designId}
 */
export async function saveUserDesignToFirestore(userId: string, targetDoc: DesignDocument): Promise<void> {
  if (!userId || userId === 'guest' || !auth.currentUser || auth.currentUser.uid !== userId) return;

  const path = `users/${userId}/designs/${targetDoc.id}`;
  try {
    const designRef = doc(db, 'users', userId, 'designs', targetDoc.id);
    const summaryData: SavedProjectSummary = {
      id: targetDoc.id,
      title: targetDoc.title || 'Diseño sin título',
      width: targetDoc.width,
      height: targetDoc.height,
      pageCount: targetDoc.pages.length,
      previewBg: targetDoc.pages[0]?.background?.value || '#ffffff',
      updatedAt: Date.now(),
      document: targetDoc,
    };

    const sanitizedData = sanitizeForFirestore(summaryData);
    await setDoc(designRef, sanitizedData, { merge: true });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}

/**
 * Load all designs belonging to a specific user from Firestore
 */
export async function getUserDesignsFromFirestore(userId: string): Promise<SavedProjectSummary[]> {
  if (!userId || userId === 'guest' || !auth.currentUser || auth.currentUser.uid !== userId) return [];

  const path = `users/${userId}/designs`;
  try {
    const designsCol = collection(db, 'users', userId, 'designs');
    const q = query(designsCol, orderBy('updatedAt', 'desc'));
    const snapshot = await getDocs(q);

    const projects: SavedProjectSummary[] = [];
    snapshot.forEach(docSnap => {
      const data = docSnap.data() as SavedProjectSummary;
      if (data && data.document) {
        projects.push(data);
      }
    });

    return projects;
  } catch (error) {
    handleFirestoreError(error, OperationType.LIST, path);
    return [];
  }
}

/**
 * Real-time listener for user designs (only attaches if auth is ready and user is authenticated)
 */
export function subscribeToUserDesigns(
  userId: string, 
  onUpdate: (projects: SavedProjectSummary[]) => void,
  onError?: (err: Error) => void
): () => void {
  if (!userId || userId === 'guest' || !auth.currentUser || auth.currentUser.uid !== userId) {
    onUpdate([]);
    return () => {};
  }

  const path = `users/${userId}/designs`;
  const designsCol = collection(db, 'users', userId, 'designs');
  const q = query(designsCol, orderBy('updatedAt', 'desc'));

  return onSnapshot(
    q, 
    (snapshot) => {
      const projects: SavedProjectSummary[] = [];
      snapshot.forEach(docSnap => {
        const data = docSnap.data() as SavedProjectSummary;
        if (data && data.document) {
          projects.push(data);
        }
      });
      onUpdate(projects);
    },
    (err) => {
      // If code is unavailable (e.g. offline/network glitch in sandbox), Firestore operates offline gracefully
      if ((err as any)?.code === 'unavailable') {
        console.info('Firestore operates in offline cache mode until connection is re-established.');
      } else {
        handleFirestoreError(err, OperationType.LIST, path);
      }
      if (onError) onError(err);
    }
  );
}

/**
 * Delete a design from the user's Firestore collection
 */
export async function deleteUserDesignFromFirestore(userId: string, designId: string): Promise<void> {
  if (!userId || userId === 'guest' || !auth.currentUser || auth.currentUser.uid !== userId) return;

  const path = `users/${userId}/designs/${designId}`;
  try {
    const designRef = doc(db, 'users', userId, 'designs', designId);
    await deleteDoc(designRef);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

/**
 * Clear all designs for a user in Firestore
 */
export async function clearAllUserDesignsFromFirestore(userId: string, designIds: string[]): Promise<void> {
  if (!userId || userId === 'guest' || !auth.currentUser || auth.currentUser.uid !== userId) return;

  const path = `users/${userId}/designs`;
  try {
    const deletePromises = designIds.map(id => 
      deleteDoc(doc(db, 'users', userId, 'designs', id))
    );
    await Promise.all(deletePromises);
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}
