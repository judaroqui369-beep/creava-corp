import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  Globe, 
  Maximize2, 
  Printer, 
  Share2, 
  Users, 
  Code, 
  FileText, 
  Image, 
  Sparkles, 
  Lock, 
  ExternalLink,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Link as LinkIcon
} from 'lucide-react';
import { DesignDocument } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: DesignDocument;
  onExportPng: () => void;
  onExportJpeg: () => void;
  onExportSvg: () => void;
  onExportJson: () => void;
  onPrint: () => void;
  onOpenPresentation: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  document: doc,
  onExportPng,
  onExportJpeg,
  onExportSvg,
  onExportJson,
  onPrint,
  onOpenPresentation,
}) => {
  const [activeTab, setActiveTab] = useState<'share' | 'download' | 'embed' | 'website'>('share');
  const [downloadFormat, setDownloadFormat] = useState<'png' | 'jpeg' | 'svg' | 'json' | 'pdf'>('png');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmbed, setCopiedEmbed] = useState(false);
  const [accessLevel, setAccessLevel] = useState<'view' | 'edit' | 'comment'>('view');
  const [inviteEmail, setInviteEmail] = useState('');
  const [invitedUsers, setInvitedUsers] = useState<Array<{ email: string; role: string }>>([
    { email: 'cifra.ecuador@gmail.com', role: 'Propietario' }
  ]);
  const [inviteSuccess, setInviteSuccess] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const currentUrl = window.location.href.split('?')[0];
  const shareableUrl = `${currentUrl}#share=${doc.id}`;
  const embedCode = `<iframe src="${shareableUrl}" width="100%" height="650" style="border:none;border-radius:16px;box-shadow:0 10px 30px rgba(0,0,0,0.1);" title="${doc.title}" allow="fullscreen"></iframe>`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    setCopiedEmbed(true);
    setTimeout(() => setCopiedEmbed(false), 2500);
  };

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail.trim()) return;
    setInvitedUsers(prev => [...prev, { email: inviteEmail.trim(), role: 'Editor' }]);
    setInviteEmail('');
    setInviteSuccess(true);
    setTimeout(() => setInviteSuccess(false), 3000);
  };

  const executeDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      if (downloadFormat === 'png') onExportPng();
      else if (downloadFormat === 'jpeg') onExportJpeg();
      else if (downloadFormat === 'svg') onExportSvg();
      else if (downloadFormat === 'json') onExportJson();
      else if (downloadFormat === 'pdf') {
        // High quality print/pdf
        onPrint();
      }
      setIsDownloading(false);
    }, 400);
  };

  const shareToSocial = (platform: 'whatsapp' | 'twitter' | 'facebook' | 'linkedin') => {
    const text = encodeURIComponent(`¡Mira este diseño "${doc.title}" creado en Creava Studio!`);
    const url = encodeURIComponent(shareableUrl);
    let targetUrl = '';
    if (platform === 'whatsapp') targetUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
    if (platform === 'twitter') targetUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    if (platform === 'facebook') targetUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if (platform === 'linkedin') targetUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(targetUrl, '_blank', 'width=600,height=450');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        id="share-modal-container"
        className="w-full max-w-lg bg-white dark:bg-[#161922] text-slate-800 dark:text-slate-100 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-150"
      >
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#161922]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-[#7d2ae8] dark:text-purple-400 flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white leading-none">
                Compartir este diseño
              </h2>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-xs block mt-0.5">
                {doc.title}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation (Canva Style) */}
        <div className="flex items-center gap-1 px-5 pt-3 pb-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-[#1a1e2a] text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setActiveTab('share')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'share'
                ? 'bg-white dark:bg-[#232839] text-[#7d2ae8] dark:text-purple-300 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Colaboración</span>
          </button>

          <button
            onClick={() => setActiveTab('download')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'download'
                ? 'bg-white dark:bg-[#232839] text-[#7d2ae8] dark:text-purple-300 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Descargar</span>
          </button>

          <button
            onClick={() => setActiveTab('website')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'website'
                ? 'bg-white dark:bg-[#232839] text-[#7d2ae8] dark:text-purple-300 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Publicar Web</span>
          </button>

          <button
            onClick={() => setActiveTab('embed')}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'embed'
                ? 'bg-white dark:bg-[#232839] text-[#7d2ae8] dark:text-purple-300 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Insertar</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4 custom-scrollbar text-xs">
          {/* TAB 1: COLLABORATION & LINK SHARING */}
          {activeTab === 'share' && (
            <div className="space-y-4">
              {/* Add Collaborators Form */}
              <form onSubmit={handleInvite} className="flex gap-2">
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  placeholder="Añadir personas por correo electrónico..."
                  className="flex-1 bg-slate-50 dark:bg-[#1c202d] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-[#7d2ae8]"
                />
                <button
                  type="submit"
                  disabled={!inviteEmail.trim()}
                  className="px-4 py-2 bg-[#7d2ae8] hover:bg-[#6a24c5] disabled:opacity-50 text-white font-bold rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Send className="w-3 h-3" />
                  <span>Invitar</span>
                </button>
              </form>

              {inviteSuccess && (
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-[11px] flex items-center gap-2">
                  <Check className="w-3.5 h-3.5" />
                  <span>¡Invitación enviada con éxito!</span>
                </div>
              )}

              {/* Members with access */}
              <div className="space-y-2 pt-1">
                <span className="font-bold text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider block">
                  Personas con acceso
                </span>
                <div className="space-y-2">
                  {invitedUsers.map((u, i) => (
                    <div key={i} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-[#1c202d] border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-[11px]">
                          {u.email[0].toUpperCase()}
                        </div>
                        <div>
                          <span className="font-semibold text-slate-800 dark:text-slate-200 block text-xs truncate max-w-[200px]">
                            {u.email}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-purple-100 dark:bg-purple-900/50 text-[#7d2ae8] dark:text-purple-300 px-2 py-0.5 rounded-full">
                        {u.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Public Link Controls */}
              <div className="p-3.5 rounded-2xl bg-purple-50/50 dark:bg-[#1c202d]/80 border border-purple-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#7d2ae8] dark:text-purple-400" />
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white block text-xs">
                        Enlace de colaboración
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        Cualquier persona con el enlace
                      </span>
                    </div>
                  </div>

                  <select
                    value={accessLevel}
                    onChange={(e) => setAccessLevel(e.target.value as any)}
                    className="bg-white dark:bg-[#232839] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-[11px] font-semibold rounded-lg px-2.5 py-1 focus:outline-none focus:border-[#7d2ae8]"
                  >
                    <option value="view">Puede ver</option>
                    <option value="edit">Puede editar</option>
                    <option value="comment">Puede comentar</option>
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={shareableUrl}
                    className="flex-1 bg-white dark:bg-[#161922] border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-[11px] text-slate-600 dark:text-slate-300 truncate select-all"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="px-3.5 py-2 bg-[#7d2ae8] hover:bg-[#6a24c5] text-white font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs flex-shrink-0"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Quick Share */}
              <div>
                <span className="font-bold text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider block mb-2">
                  Compartir en redes sociales
                </span>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    onClick={() => shareToSocial('whatsapp')}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-bold">WhatsApp</span>
                  </button>

                  <button
                    onClick={() => shareToSocial('twitter')}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950/30 text-sky-500 transition-colors"
                  >
                    <Twitter className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-bold">X / Twitter</span>
                  </button>

                  <button
                    onClick={() => shareToSocial('facebook')}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-blue-600 transition-colors"
                  >
                    <Facebook className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-bold">Facebook</span>
                  </button>

                  <button
                    onClick={() => shareToSocial('linkedin')}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 mb-1" />
                    <span className="text-[10px] font-bold">LinkedIn</span>
                  </button>
                </div>
              </div>

              {/* Fast Action Buttons */}
              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => {
                    onClose();
                    onOpenPresentation();
                  }}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2 font-semibold transition-colors"
                >
                  <Maximize2 className="w-4 h-4 text-purple-600" />
                  <span>Presentar en vivo</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onPrint();
                  }}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2 font-semibold transition-colors"
                >
                  <Printer className="w-4 h-4 text-purple-600" />
                  <span>Imprimir diseño</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: DOWNLOAD EXPORT OPTIONS (Canva Download Panel) */}
          {activeTab === 'download' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="font-bold text-slate-700 dark:text-slate-300 block text-xs">
                  Tipo de archivo
                </label>
                <div className="space-y-2">
                  <div
                    onClick={() => setDownloadFormat('png')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      downloadFormat === 'png'
                        ? 'border-[#7d2ae8] bg-purple-50/50 dark:bg-purple-950/30 ring-1 ring-[#7d2ae8]'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#7d2ae8]/15 text-[#7d2ae8] dark:text-purple-400 flex items-center justify-center font-extrabold text-xs">
                        PNG
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block text-xs">
                          Imagen PNG (Sugerido)
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                          Imágenes complejas e ilustraciones de alta resolución
                        </span>
                      </div>
                    </div>
                    {downloadFormat === 'png' && <Check className="w-4 h-4 text-[#7d2ae8]" />}
                  </div>

                  <div
                    onClick={() => setDownloadFormat('jpeg')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      downloadFormat === 'jpeg'
                        ? 'border-[#7d2ae8] bg-purple-50/50 dark:bg-purple-950/30 ring-1 ring-[#7d2ae8]'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-extrabold text-xs">
                        JPG
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block text-xs">
                          Imagen JPG
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                          Ideal para compartir en redes con tamaño de archivo ligero
                        </span>
                      </div>
                    </div>
                    {downloadFormat === 'jpeg' && <Check className="w-4 h-4 text-[#7d2ae8]" />}
                  </div>

                  <div
                    onClick={() => setDownloadFormat('pdf')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      downloadFormat === 'pdf'
                        ? 'border-[#7d2ae8] bg-purple-50/50 dark:bg-purple-950/30 ring-1 ring-[#7d2ae8]'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center font-extrabold text-xs">
                        PDF
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block text-xs">
                          PDF Estándar / Para impresión
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                          Documentos nítidos con soporte de múltiples páginas
                        </span>
                      </div>
                    </div>
                    {downloadFormat === 'pdf' && <Check className="w-4 h-4 text-[#7d2ae8]" />}
                  </div>

                  <div
                    onClick={() => setDownloadFormat('svg')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      downloadFormat === 'svg'
                        ? 'border-[#7d2ae8] bg-purple-50/50 dark:bg-purple-950/30 ring-1 ring-[#7d2ae8]'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-extrabold text-xs">
                        SVG
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block text-xs">
                          Vector SVG
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                          Gráficos escalables sin pérdida de resolución para diseñadores
                        </span>
                      </div>
                    </div>
                    {downloadFormat === 'svg' && <Check className="w-4 h-4 text-[#7d2ae8]" />}
                  </div>

                  <div
                    onClick={() => setDownloadFormat('json')}
                    className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      downloadFormat === 'json'
                        ? 'border-[#7d2ae8] bg-purple-50/50 dark:bg-purple-950/30 ring-1 ring-[#7d2ae8]'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-extrabold text-xs">
                        JSON
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block text-xs">
                          Proyecto Editable (JSON de Creava)
                        </span>
                        <span className="text-[10px] text-slate-500 dark:text-slate-400">
                          Guarda una copia de respaldo con todas tus capas y páginas
                        </span>
                      </div>
                    </div>
                    {downloadFormat === 'json' && <Check className="w-4 h-4 text-[#7d2ae8]" />}
                  </div>
                </div>
              </div>

              {/* Resolution Info */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-1">
                <span>Dimensiones originales:</span>
                <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                  {doc.width} × {doc.height} px
                </span>
              </div>

              {/* Download Action Button */}
              <button
                id="btn-confirm-download"
                onClick={executeDownload}
                disabled={isDownloading}
                className="w-full py-3 bg-[#7d2ae8] hover:bg-[#6a24c5] active:bg-[#581da8] disabled:opacity-75 text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                {isDownloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Preparando tu descarga...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Descargar {downloadFormat.toUpperCase()}</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* TAB 3: PUBLISH AS A LIVE WEBSITE */}
          {activeTab === 'website' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-200/80 dark:border-indigo-800 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                      Publicar como Página Web
                    </h3>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300">
                      Convierte tu diseño en un sitio web público interactivo con un solo clic.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-indigo-200/60 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Dominio público:</span>
                    <span className="font-mono font-semibold text-indigo-700 dark:text-indigo-300">
                      creava.site/{doc.id.replace('doc-', 'web-')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Navegación:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      {doc.pages.length} {doc.pages.length === 1 ? 'Sección / Página' : 'Secciones'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-600 dark:text-slate-400">Diseño responsivo:</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> Activado
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    window.open(shareableUrl, '_blank');
                  }}
                  className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Abrir sitio web publicado</span>
                </button>
                <button
                  onClick={handleCopyLink}
                  className="px-4 py-2.5 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-semibold transition-colors flex items-center gap-1.5"
                  title="Copiar enlace directo"
                >
                  <Copy className="w-4 h-4 text-slate-500" />
                  <span>{copiedLink ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: EMBED CODE (IFRAME) */}
          {activeTab === 'embed' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Pega este código HTML en tu blog de WordPress, Notion, Squarespace, Medium o en tu sitio web personal para mostrar este diseño interactivo en vivo:
              </p>

              <div className="relative">
                <textarea
                  readOnly
                  rows={4}
                  value={embedCode}
                  className="w-full bg-slate-900 text-purple-300 font-mono text-[11px] p-3.5 rounded-xl border border-slate-800 select-all focus:outline-none"
                />
                <button
                  onClick={handleCopyEmbed}
                  className="absolute top-3 right-3 px-3 py-1.5 bg-[#7d2ae8] hover:bg-[#6a24c5] text-white text-[10px] font-bold rounded-lg transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                >
                  {copiedEmbed ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-300" />
                      <span>Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copiar código</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#1c202d] border border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                💡 Los cambios que guardes en el editor se actualizarán automáticamente en la ventana insertada sin necesidad de volver a pegar el código.
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-slate-50 dark:bg-[#13161e] border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#7d2ae8]" />
            <span>Creava Studio Cloud Sync</span>
          </span>
          <button
            onClick={onClose}
            className="font-semibold text-slate-700 dark:text-slate-300 hover:underline cursor-pointer"
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  );
};
