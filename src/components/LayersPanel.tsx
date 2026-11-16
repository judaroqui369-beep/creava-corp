import React, { useState } from 'react';
import { 
  Layers, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock, 
  Trash2, 
  ChevronUp, 
  ChevronDown, 
  ChevronsUp, 
  ChevronsDown, 
  FolderPlus, 
  FolderMinus, 
  Type, 
  Square, 
  Image as ImageIcon, 
  Sparkles, 
  Plus, 
  Edit2, 
  Check, 
  Copy,
  Boxes
} from 'lucide-react';
import { CanvasElement, CanvasPage } from '../types';

interface LayersPanelProps {
  currentPage: CanvasPage;
  selectedElementId: string | null;
  onSelectElement: (id: string | null) => void;
  onUpdateElement: (id: string, updates: Partial<CanvasElement>) => void;
  onDeleteElementById: (id: string) => void;
  onReorderElements: (elements: CanvasElement[]) => void;
  onAddElement: (element: Omit<CanvasElement, 'id' | 'zIndex'>) => void;
}

export const LayersPanel: React.FC<LayersPanelProps> = ({
  currentPage,
  selectedElementId,
  onSelectElement,
  onUpdateElement,
  onDeleteElementById,
  onReorderElements,
  onAddElement,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [editingLabelId, setEditingLabelId] = useState<string | null>(null);
  const [tempLabel, setTempLabel] = useState<string>('');

  // Sorted layers from top to bottom (highest zIndex first)
  const sortedElements = [...currentPage.elements].sort((a, b) => b.zIndex - a.zIndex);

  const handleToggleSelect = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (e.shiftKey || e.ctrlKey || e.metaKey) {
      if (selectedIds.includes(id)) {
        setSelectedIds(selectedIds.filter(i => i !== id));
      } else {
        setSelectedIds([...selectedIds, id]);
      }
    } else {
      setSelectedIds([id]);
      onSelectElement(id);
    }
  };

  // Move a layer one step up (higher zIndex)
  const handleMoveUp = (elementId: string) => {
    const elements = [...currentPage.elements].sort((a, b) => a.zIndex - b.zIndex);
    const index = elements.findIndex(el => el.id === elementId);
    if (index < elements.length - 1) {
      const currentZ = elements[index].zIndex;
      const nextZ = elements[index + 1].zIndex;
      elements[index].zIndex = nextZ;
      elements[index + 1].zIndex = currentZ;
      onReorderElements(elements);
    }
  };

  // Move a layer one step down (lower zIndex)
  const handleMoveDown = (elementId: string) => {
    const elements = [...currentPage.elements].sort((a, b) => a.zIndex - b.zIndex);
    const index = elements.findIndex(el => el.id === elementId);
    if (index > 0) {
      const currentZ = elements[index].zIndex;
      const prevZ = elements[index - 1].zIndex;
      elements[index].zIndex = prevZ;
      elements[index - 1].zIndex = currentZ;
      onReorderElements(elements);
    }
  };

  // Bring layer all the way to top
  const handleBringToTop = (elementId: string) => {
    const maxZ = currentPage.elements.reduce((max, el) => Math.max(max, el.zIndex), 0);
    onUpdateElement(elementId, { zIndex: maxZ + 1 });
  };

  // Send layer all the way to bottom
  const handleSendToBottom = (elementId: string) => {
    const minZ = currentPage.elements.reduce((min, el) => Math.min(min, el.zIndex), 0);
    onUpdateElement(elementId, { zIndex: Math.max(0, minZ - 1) });
  };

  // Group selected layers
  const handleGroup = () => {
    const targetIds = selectedIds.length > 0 ? selectedIds : (selectedElementId ? [selectedElementId] : []);
    if (targetIds.length === 0) return;

    const newGroupId = `group-${Date.now().toString(36)}`;
    targetIds.forEach(id => {
      onUpdateElement(id, { groupId: newGroupId });
    });
  };

  // Ungroup selected layers
  const handleUngroup = () => {
    const targetIds = selectedIds.length > 0 ? selectedIds : (selectedElementId ? [selectedElementId] : []);
    targetIds.forEach(id => {
      onUpdateElement(id, { groupId: undefined });
    });
  };

  const getElementLabel = (el: CanvasElement) => {
    if (el.type === 'text') {
      return el.content ? `"${el.content.slice(0, 24)}${el.content.length > 24 ? '...' : ''}"` : 'Texto sin contenido';
    }
    if (el.type === 'shape') {
      return `Forma: ${el.shapeType || 'Rectángulo'}`;
    }
    if (el.type === 'frame') {
      return el.name ? `Marco: ${el.name}` : 'Marco para Foto';
    }
    if (el.type === 'sticker') {
      return el.name ? `Sticker: ${el.name}` : 'Sticker';
    }
    if (el.type === 'vector' || el.svgPath) {
      return el.name ? `Vector: ${el.name}` : 'Elemento Vectorial';
    }
    if (el.type === 'image') {
      return el.alt ? `Foto: ${el.alt}` : 'Foto / Imagen';
    }
    return 'Capa';
  };

  return (
    <div className="space-y-3.5">
      {/* 1. Header Toolbar with actions */}
      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <Layers className="w-4 h-4 text-purple-600" />
            <span>Capas ({currentPage.elements.length})</span>
          </div>

          {/* Quick Add Layer Button */}
          <button
            id="btn-add-layer-quick"
            onClick={() => onAddElement({
              type: 'shape',
              shapeType: 'rectangle',
              x: 150,
              y: 150,
              width: 200,
              height: 120,
              rotation: 0,
              opacity: 1,
              fillColor: '#7d2ae8',
              borderRadius: 12
            })}
            className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-purple-700 bg-purple-100/70 hover:bg-purple-200/80 rounded-lg transition-colors shadow-2xs cursor-pointer"
            title="Añadir nueva capa rápida"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Nueva capa</span>
          </button>
        </div>

        {/* Action Buttons: Group, Ungroup, Move Top/Bottom */}
        <div className="flex items-center gap-1 pt-1 border-t border-slate-200/70">
          <button
            id="btn-layer-group"
            onClick={handleGroup}
            disabled={selectedIds.length < 1 && !selectedElementId}
            className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 text-[11px] font-semibold rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-slate-700 shadow-2xs cursor-pointer"
            title="Agrupar capas seleccionadas"
          >
            <FolderPlus className="w-3.5 h-3.5 text-purple-600" />
            <span>Agrupar</span>
          </button>

          <button
            id="btn-layer-ungroup"
            onClick={handleUngroup}
            disabled={selectedIds.length < 1 && !selectedElementId}
            className="flex-1 flex items-center justify-center gap-1 py-1.5 px-2 text-[11px] font-semibold rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-slate-700 shadow-2xs cursor-pointer"
            title="Desagrupar capas"
          >
            <FolderMinus className="w-3.5 h-3.5 text-amber-600" />
            <span>Desagrupar</span>
          </button>

          {selectedElementId && (
            <div className="flex items-center gap-0.5">
              <button
                onClick={() => handleBringToTop(selectedElementId)}
                className="p-1.5 text-slate-600 hover:text-purple-700 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 transition-colors cursor-pointer"
                title="Traer al frente total"
              >
                <ChevronsUp className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleSendToBottom(selectedElementId)}
                className="p-1.5 text-slate-600 hover:text-purple-700 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 transition-colors cursor-pointer"
                title="Enviar al fondo total"
              >
                <ChevronsDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 2. Instruction Banner */}
      <div className="text-[11px] text-slate-500 bg-purple-50/60 border border-purple-100 rounded-lg px-2.5 py-1.5 flex items-center justify-between">
        <span>Organizadas de arriba (frontal) hacia abajo (fondo)</span>
        <span className="text-[10px] text-purple-700 font-semibold">Shift+Click para multi-selección</span>
      </div>

      {/* 3. Layers List (Interactive Stack) */}
      <div className="space-y-1.5 pr-0.5">
        {sortedElements.length === 0 ? (
          <div className="text-center py-12 px-4 text-slate-400">
            <Boxes className="w-10 h-10 mx-auto mb-2 opacity-30 text-purple-600" />
            <p className="text-xs font-medium">No hay capas en el lienzo</p>
            <p className="text-[11px] text-slate-400 mt-1">Añade elementos, texto o imágenes para empezar a gestionar tus capas.</p>
          </div>
        ) : (
          sortedElements.map((el, index) => {
            const isSelected = selectedElementId === el.id || selectedIds.includes(el.id);
            const isTop = index === 0;
            const isBottom = index === sortedElements.length - 1;

            return (
              <div
                key={el.id}
                id={`layer-item-${el.id}`}
                onClick={(e) => handleToggleSelect(el.id, e)}
                className={`group relative p-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                  isSelected
                    ? 'border-purple-500 bg-purple-50/90 shadow-xs ring-1 ring-purple-500/20 text-purple-900'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                }`}
              >
                {/* Left section: Icon + Label + Group Badge */}
                <div className="flex items-center gap-2.5 min-w-0 flex-1 mr-2">
                  {/* Visual Type Icon */}
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs shadow-2xs ${
                      isSelected
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 border border-slate-200 text-slate-600 group-hover:border-purple-300'
                    }`}
                  >
                    {el.type === 'text' && <Type className="w-4 h-4" />}
                    {el.type === 'shape' && <Square className="w-4 h-4" />}
                    {el.type === 'image' && <ImageIcon className="w-4 h-4" />}
                    {el.type === 'frame' && <ImageIcon className="w-4 h-4 text-sky-500" />}
                    {el.type === 'sticker' && <Sparkles className="w-4 h-4 text-amber-500" />}
                    {(el.type === 'vector' || el.svgPath) && el.type !== 'sticker' && el.type !== 'frame' && <Sparkles className="w-4 h-4" />}
                  </div>

                  {/* Element Name / Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold truncate block">
                        {getElementLabel(el)}
                      </span>
                      {el.groupId && (
                        <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-200">
                          Grupo
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-400 block truncate">
                      z-index: {el.zIndex} • {el.locked ? 'Bloqueado' : el.hidden ? 'Oculto' : 'Visible'}
                    </span>
                  </div>
                </div>

                {/* Right section: Actions (Order, Hide, Lock, Delete) */}
                <div className="flex items-center gap-0.5 flex-shrink-0">
                  {/* Reorder: Move Up */}
                  <button
                    id={`layer-btn-up-${el.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMoveUp(el.id);
                    }}
                    disabled={isTop}
                    className="p-1 text-slate-400 hover:text-purple-700 hover:bg-slate-200/60 rounded-md disabled:opacity-20 disabled:hover:bg-transparent transition-colors"
                    title="Subir capa"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                  </button>

                  {/* Reorder: Move Down */}
                  <button
                    id={`layer-btn-down-${el.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMoveDown(el.id);
                    }}
                    disabled={isBottom}
                    className="p-1 text-slate-400 hover:text-purple-700 hover:bg-slate-200/60 rounded-md disabled:opacity-20 disabled:hover:bg-transparent transition-colors"
                    title="Bajar capa"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>

                  {/* Toggle Visibility */}
                  <button
                    id={`layer-btn-visibility-${el.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateElement(el.id, { hidden: !el.hidden });
                    }}
                    className={`p-1 rounded-md transition-colors ${
                      el.hidden
                        ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                        : 'text-slate-400 hover:text-slate-700 hover:bg-slate-200/60'
                    }`}
                    title={el.hidden ? 'Mostrar capa' : 'Ocultar capa'}
                  >
                    {el.hidden ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  </button>

                  {/* Toggle Lock */}
                  <button
                    id={`layer-btn-lock-${el.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateElement(el.id, { locked: !el.locked });
                    }}
                    className={`p-1 rounded-md transition-colors ${
                      el.locked
                        ? 'text-amber-600 bg-amber-50 hover:bg-amber-100'
                        : 'text-slate-400 hover:text-slate-700 hover:bg-slate-200/60'
                    }`}
                    title={el.locked ? 'Desbloquear capa' : 'Bloquear capa'}
                  >
                    {el.locked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                  </button>

                  {/* Delete Layer */}
                  <button
                    id={`layer-btn-delete-${el.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteElementById(el.id);
                    }}
                    className="p-1 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    title="Eliminar capa"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
