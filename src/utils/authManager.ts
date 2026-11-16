import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  User as FirebaseUser,
  updateProfile
} from 'firebase/auth';
import { auth, googleProvider, formatUserProfile } from '../services/firebase';
import { UserProfile } from '../types';

const STORAGE_KEY_PROFILE = 'creava_user_profile';
const STORAGE_KEY_FIRST_VISIT = 'creava_has_visited';

export const DEFAULT_GUEST_USER: UserProfile = {
  id: 'guest',
  name: 'Invitado Creava',
  email: '',
  avatarColor: 'from-purple-600 to-indigo-600',
  initials: 'CR',
  plan: 'Gratuito',
  isLoggedIn: false,
  createdAt: Date.now(),
};

/**
 * Returns initials from a full name (e.g. "Cifra Studio" -> "CS")
 */
export function getInitials(name: string): string {
  if (!name) return 'CR';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

/**
 * Checks if the user is visiting Creava for the very first time
 */
export function isFirstVisit(): boolean {
  try {
    const hasVisited = localStorage.getItem(STORAGE_KEY_FIRST_VISIT);
    return hasVisited === null;
  } catch {
    return false;
  }
}

/**
 * Marks the first visit as seen so the dropdown doesn't auto-open continuously
 */
export function markFirstVisitCompleted(): void {
  try {
    localStorage.setItem(STORAGE_KEY_FIRST_VISIT, 'true');
  } catch (err) {
    console.warn('Failed to save first visit flag to localStorage:', err);
  }
}

/**
 * Retrieves the currently active user profile
 */
export function getUserProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROFILE);
    if (!raw) return DEFAULT_GUEST_USER;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_GUEST_USER,
      ...parsed,
    };
  } catch {
    return DEFAULT_GUEST_USER;
  }
}

/**
 * Saves a user profile to localStorage and notifies listeners
 */
export function saveUserProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY_PROFILE, JSON.stringify(profile));
    if (profile.isLoggedIn) {
      markFirstVisitCompleted();
    }
    window.dispatchEvent(new CustomEvent('creava_auth_changed', { detail: profile }));
  } catch (err) {
    console.warn('Failed to save user profile:', err);
  }
}

/**
 * Real Firebase Sign In with Email and Password
 */
export async function firebaseSignIn(email: string, pass: string): Promise<UserProfile> {
  const userCredential = await signInWithEmailAndPassword(auth, email.trim().toLowerCase(), pass);
  const fbUser = userCredential.user;
  const profile = formatUserProfile(fbUser, fbUser.displayName || undefined, 'Pro');
  saveUserProfile(profile);
  return profile;
}

/**
 * Real Firebase Sign Up / Register with Email and Password
 */
export async function firebaseSignUp(name: string, email: string, pass: string): Promise<UserProfile> {
  const userCredential = await createUserWithEmailAndPassword(auth, email.trim().toLowerCase(), pass);
  const fbUser = userCredential.user;
  
  if (name.trim()) {
    try {
      await updateProfile(fbUser, { displayName: name.trim() });
    } catch (e) {
      console.warn('Could not update displayName:', e);
    }
  }

  const profile = formatUserProfile(fbUser, name.trim() || undefined, 'Pro');
  saveUserProfile(profile);
  return profile;
}

/**
 * Real Firebase Google Sign-In with popup
 */
export async function firebaseGoogleSignIn(): Promise<UserProfile> {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const fbUser = userCredential.user;
    const profile = formatUserProfile(fbUser, fbUser.displayName || undefined, 'Pro');
    saveUserProfile(profile);
    return profile;
  } catch (error: any) {
    // If popup is blocked or closed by user in preview iframe, throw error
    console.error('Firebase Google popup error:', error);
    throw error;
  }
}

/**
 * Real Firebase Sign Out
 */
export async function firebaseSignOut(): Promise<UserProfile> {
  try {
    await signOut(auth);
  } catch (e) {
    console.warn('SignOut warning:', e);
  }
  saveUserProfile(DEFAULT_GUEST_USER);
  return DEFAULT_GUEST_USER;
}

/**
 * Listen to Firebase Auth state changes
 */
export function initAuthListener(onUserChanged: (user: UserProfile) => void): () => void {
  return onAuthStateChanged(auth, (fbUser: FirebaseUser | null) => {
    if (fbUser) {
      const profile = formatUserProfile(fbUser, fbUser.displayName || undefined, 'Pro');
      saveUserProfile(profile);
      onUserChanged(profile);
    } else {
      // User is logged out
      const current = getUserProfile();
      if (current.isLoggedIn) {
        saveUserProfile(DEFAULT_GUEST_USER);
        onUserChanged(DEFAULT_GUEST_USER);
      }
    }
  });
}
