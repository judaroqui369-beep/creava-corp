import React, { useState, useRef, useEffect } from 'react';
import { RotateCw, Upload, RefreshCw, Trash2, Image as ImageIcon } from 'lucide-react';
import { CanvasElement } from '../types';

interface CanvasElementItemProps {
  element: CanvasElement;
  isSelected: boolean;
  scale: number;
  onSelect: (e: React.MouseEvent) => void;
  onUpdate: (updates: Partial<CanvasElement>) => void;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  canvasWidth: number;
  canvasHeight: number;
  onShowGuides?: (x: number | null, y: number | null) => void;
}

export const CanvasElementItem: React.FC<CanvasElementItemProps> = ({
  element: el,
  isSelected,
  scale,
  onSelect,
  onUpdate,
  onDragStart,
  onDragEnd,
  canvasWidth,
  canvasHeight,
  onShowGuides,
}) => {
  const [isEditingText, setIsEditingText] = useState(false);
  const textEditRef = useRef<HTMLTextAreaElement>(null);
  const frameFileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOverFrame, setIsDragOverFrame] = useState(false);

  const handleFrameFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onUpdate({ src: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
    if (frameFileInputRef.current) {
      frameFileInputRef.current.value = '';
    }
  };

  const handleFrameDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOverFrame(true);
  };

  const handleFrameDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOverFrame(false);
  };

  const handleFrameDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOverFrame(false);

    // Check files from computer
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          onUpdate({ src: reader.result as string });
        };
        reader.readAsDataURL(file);
        return;
      }
    }

    // Check text/uri transfer
    const imageUrl = e.dataTransfer.getData('text/plain') || e.dataTransfer.getData('image-src');
    if (imageUrl && (imageUrl.startsWith('http') || imageUrl.startsWith('data:image'))) {
      onUpdate({ src: imageUrl });
    }
  };

  // Dragging state
  const isDraggingRef = useRef(false);
  const dragStartPos = useRef({ mouseX: 0, mouseY: 0, elX: el.x, elY: el.y });

  // Resizing state
  const isResizingRef = useRef(false);
  const resizeHandleRef = useRef<string | null>(null);
  const resizeStartPos = useRef({
    mouseX: 0,
    mouseY: 0,
    x: el.x,
    y: el.y,
    width: el.width,
    height: el.height,
    fontSize: el.fontSize || 24,
    isTextLike: el.type === 'text' || Boolean(el.content),
  });

  // Rotating state
  const isRotatingRef = useRef(false);
  const rotateCenterRef = useRef({ cx: 0, cy: 0 });

  useEffect(() => {
    if (isEditingText && textEditRef.current) {
      textEditRef.current.focus();
      textEditRef.current.select();
    }
  }, [isEditingText]);

  // Execute Resize logic (shared between Mouse and Touch events)
  const executeResize = (clientX: number, clientY: number) => {
    if (!isResizingRef.current) return;
    const handleType = resizeHandleRef.current;
    if (!handleType) return;

    const dx = (clientX - resizeStartPos.current.mouseX) / scale;
    const dy = (clientY - resizeStartPos.current.mouseY) / scale;
    const start = resizeStartPos.current;
    const isCorner = ['tl', 'tr', 'bl', 'br'].includes(handleType);

    // 1. Text elements: when dragging any of the 4 corner handles, scale text AND fontSize proportionally (Canva behavior)
    if (start.isTextLike && isCorner) {
      let scaleX = 1;
      let scaleY = 1;

      if (handleType === 'br') {
        scaleX = (start.width + dx) / start.width;
        scaleY = (start.height + dy) / start.height;
      } else if (handleType === 'bl') {
        scaleX = (start.width - dx) / start.width;
        scaleY = (start.height + dy) / start.height;
      } else if (handleType === 'tr') {
        scaleX = (start.width + dx) / start.width;
        scaleY = (start.height - dy) / start.height;
      } else if (handleType === 'tl') {
        scaleX = (start.width - dx) / start.width;
        scaleY = (start.height - dy) / start.height;
      }

      // Pick dominant movement axis to decide overall scale factor
      const chosenScale = Math.abs(dx) / start.width >= Math.abs(dy) / start.height ? scaleX : scaleY;
      const clampedScale = Math.max(0.12, Math.min(10, chosenScale));

      // Calculate new font size proportionally clamped to safe range
      const newFontSize = Math.max(6, Math.min(350, Math.round(start.fontSize * clampedScale)));
      const actualRatio = newFontSize / start.fontSize;

      // Scale width and height strictly along with font size
      const newWidth = Math.max(24, Math.round(start.width * actualRatio));
      const newHeight = Math.max(16, Math.round(start.height * actualRatio));

      let newX = start.x;
      let newY = start.y;

      if (handleType === 'tl') {
        newX = start.x + (start.width - newWidth);
        newY = start.y + (start.height - newHeight);
      } else if (handleType === 'tr') {
        newX = start.x;
        newY = start.y + (start.height - newHeight);
      } else if (handleType === 'bl') {
        newX = start.x + (start.width - newWidth);
        newY = start.y;
      } else if (handleType === 'br') {
        newX = start.x;
        newY = start.y;
      }

      onUpdate({
        x: Math.round(newX),
        y: Math.round(newY),
        width: Math.round(newWidth),
        height: Math.round(newHeight),
        fontSize: newFontSize,
      });
      return;
    }

    // 2. Standard box resizing (or text box side handles 'l' / 'r' adjusting text wrapping width)
    let newX = start.x;
    let newY = start.y;
    let newWidth = start.width;
    let newHeight = start.height;

    if (handleType.includes('r')) {
      newWidth = Math.max(20, start.width + dx);
    }
    if (handleType.includes('b')) {
      newHeight = Math.max(20, start.height + dy);
    }
    if (handleType.includes('l')) {
      const potentialWidth = Math.max(20, start.width - dx);
      newX = start.x + (start.width - potentialWidth);
      newWidth = potentialWidth;
    }
    if (handleType.includes('t')) {
      const potentialHeight = Math.max(20, start.height - dy);
      newY = start.y + (start.height - potentialHeight);
      newHeight = potentialHeight;
    }

    onUpdate({
      x: Math.round(newX),
      y: Math.round(newY),
      width: Math.round(newWidth),
      height: Math.round(newHeight),
    });
  };

  // Handle Drag Move
  const handleMouseDown = (e: React.MouseEvent) => {
    if (el.locked || isEditingText) return;
    if (e.button !== 0) return; // Only primary button
    e.stopPropagation();
    onSelect(e);

    isDraggingRef.current = true;
    dragStartPos.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      elX: el.x,
      elY: el.y,
    };
    onDragStart?.();

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = (moveEvent.clientX - dragStartPos.current.mouseX) / scale;
      const dy = (moveEvent.clientY - dragStartPos.current.mouseY) / scale;

      let newX = Math.round(dragStartPos.current.elX + dx);
      let newY = Math.round(dragStartPos.current.elY + dy);

      // Smart magnetic snap guides to canvas center
      const centerX = canvasWidth / 2;
      const centerY = canvasHeight / 2;
      const elCenterX = newX + el.width / 2;
      const elCenterY = newY + el.height / 2;

      let guideX: number | null = null;
      let guideY: number | null = null;

      if (Math.abs(elCenterX - centerX) < 8) {
        newX = centerX - el.width / 2;
        guideX = centerX;
      }
      if (Math.abs(elCenterY - centerY) < 8) {
        newY = centerY - el.height / 2;
        guideY = centerY;
      }

      onShowGuides?.(guideX, guideY);
      onUpdate({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      onShowGuides?.(null, null);
      onDragEnd?.();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Handle Resize Move
  const handleResizeStart = (e: React.MouseEvent, handle: string) => {
    if (el.locked) return;
    e.stopPropagation();
    isResizingRef.current = true;
    resizeHandleRef.current = handle;

    resizeStartPos.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      x: el.x,
      y: el.y,
      width: el.width,
      height: el.height,
      fontSize: el.fontSize || 24,
      isTextLike: el.type === 'text' || Boolean(el.content),
    };

    const handleMouseMove = (moveEvent: MouseEvent) => {
      executeResize(moveEvent.clientX, moveEvent.clientY);
    };

    const handleMouseUp = () => {
      isResizingRef.current = false;
      resizeHandleRef.current = null;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Handle Rotation
  const handleRotateStart = (e: React.MouseEvent) => {
    if (el.locked) return;
    e.stopPropagation();
    isRotatingRef.current = true;

    // Calculate center of element on screen
    const elementNode = e.currentTarget.closest('[data-element-id]') as HTMLElement;
    if (elementNode) {
      const rect = elementNode.getBoundingClientRect();
      rotateCenterRef.current = {
        cx: rect.left + rect.width / 2,
        cy: rect.top + rect.height / 2,
      };
    }

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isRotatingRef.current) return;
      const angleRad = Math.atan2(
        moveEvent.clientY - rotateCenterRef.current.cy,
        moveEvent.clientX - rotateCenterRef.current.cx
      );
      let angleDeg = Math.round((angleRad * 180) / Math.PI) + 90;
      if (angleDeg < 0) angleDeg += 360;

      // Snap to 0, 45, 90, 180, 270 degrees
      const snapAngles = [0, 45, 90, 135, 180, 225, 270, 315, 360];
      for (const snap of snapAngles) {
        if (Math.abs(angleDeg - snap) < 4) {
          angleDeg = snap % 360;
          break;
        }
      }

      onUpdate({ rotation: angleDeg });
    };

    const handleMouseUp = () => {
      isRotatingRef.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Handle Touch Drag Move
  const handleTouchStart = (e: React.TouchEvent) => {
    if (el.locked || isEditingText) return;
    if (e.touches.length !== 1) return;
    e.stopPropagation();
    onSelect(e as unknown as React.MouseEvent);

    const touch = e.touches[0];
    isDraggingRef.current = true;
    dragStartPos.current = {
      mouseX: touch.clientX,
      mouseY: touch.clientY,
      elX: el.x,
      elY: el.y,
    };
    onDragStart?.();

    const handleTouchMove = (moveEvent: TouchEvent) => {
      if (!isDraggingRef.current || moveEvent.touches.length !== 1) return;
      const t = moveEvent.touches[0];
      const dx = (t.clientX - dragStartPos.current.mouseX) / scale;
      const dy = (t.clientY - dragStartPos.current.mouseY) / scale;

      let newX = Math.round(dragStartPos.current.elX + dx);
      let newY = Math.round(dragStartPos.current.elY + dy);

      const centerX = canvasWidth / 2;
      const centerY = canvasHeight / 2;
      const elCenterX = newX + el.width / 2;
      const elCenterY = newY + el.height / 2;

      let guideX: number | null = null;
      let guideY: number | null = null;

      if (Math.abs(elCenterX - centerX) < 8) {
        newX = centerX - el.width / 2;
        guideX = centerX;
      }
      if (Math.abs(elCenterY - centerY) < 8) {
        newY = centerY - el.height / 2;
        guideY = centerY;
      }

      onShowGuides?.(guideX, guideY);
      onUpdate({ x: newX, y: newY });
    };

    const handleTouchEnd = () => {
      isDraggingRef.current = false;
      onShowGuides?.(null, null);
      onDragEnd?.();
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };

  // Handle Touch Resize Move
  const handleTouchResizeStart = (e: React.TouchEvent, handle: string) => {
    if (el.locked) return;
    if (e.touches.length !== 1) return;
    e.stopPropagation();
    isResizingRef.current = true;
    resizeHandleRef.current = handle;

    const touch = e.touches[0];
    resizeStartPos.current = {
      mouseX: touch.clientX,
      mouseY: touch.clientY,
      x: el.x,
      y: el.y,
      width: el.width,
      height: el.height,
      fontSize: el.fontSize || 24,
      isTextLike: el.type === 'text' || Boolean(el.content),
    };

    const handleTouchMove = (moveEvent: TouchEvent) => {
      if (!isResizingRef.current || moveEvent.touches.length !== 1) return;
      const t = moveEvent.touches[0];
      executeResize(t.clientX, t.clientY);
    };

    const handleTouchEnd = () => {
      isResizingRef.current = false;
      resizeHandleRef.current = null;
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };

  // Handle Touch Rotation
  const handleTouchRotateStart = (e: React.TouchEvent) => {
    if (el.locked) return;
    if (e.touches.length !== 1) return;
    e.stopPropagation();
    isRotatingRef.current = true;

    const elementNode = e.currentTarget.closest('[data-element-id]') as HTMLElement;
    if (elementNode) {
      const rect = elementNode.getBoundingClientRect();
      rotateCenterRef.current = {
        cx: rect.left + rect.width / 2,
        cy: rect.top + rect.height / 2,
      };
    }

    const handleTouchMove = (moveEvent: TouchEvent) => {
      if (!isRotatingRef.current || moveEvent.touches.length !== 1) return;
      const t = moveEvent.touches[0];
      const angleRad = Math.atan2(
        t.clientY - rotateCenterRef.current.cy,
        t.clientX - rotateCenterRef.current.cx
      );
      let angleDeg = Math.round((angleRad * 180) / Math.PI) + 90;
      if (angleDeg < 0) angleDeg += 360;

      const snapAngles = [0, 45, 90, 135, 180, 225, 270, 315, 360];
      for (const snap of snapAngles) {
        if (Math.abs(angleDeg - snap) < 4) {
          angleDeg = snap % 360;
          break;
        }
      }

      onUpdate({ rotation: angleDeg });
    };

    const handleTouchEnd = () => {
      isRotatingRef.current = false;
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };

  // Base positioning & transforms
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    left: el.x,
    top: el.y,
    width: el.width,
    height: el.height,
    transform: `rotate(${el.rotation}deg)`,
    opacity: el.opacity,
    zIndex: el.zIndex,
    cursor: el.locked ? 'default' : isDraggingRef.current ? 'grabbing' : 'grab',
    display: el.hidden ? 'none' : 'block',
  };

  const getGraphicFilter = () => {
    const filters: string[] = [];
    if (el.shadowEffect && el.shadowEffect !== 'none') {
      const color = el.shadowColor || 'rgba(0,0,0,0.38)';
      const blur = el.shadowBlur ?? 8;
      const ox = el.shadowOffsetX ?? 4;
      const oy = el.shadowOffsetY ?? 4;
      if (el.shadowEffect === 'drop') {
        filters.push(`drop-shadow(${ox}px ${oy}px ${blur}px ${color})`);
      } else if (el.shadowEffect === 'lift') {
        filters.push(`drop-shadow(0px ${Math.max(6, oy * 2)}px ${blur * 1.5}px ${color})`);
      } else if (el.shadowEffect === 'glow') {
        filters.push(`drop-shadow(0 0 ${blur}px ${color}) drop-shadow(0 0 ${Math.round(blur / 2)}px ${color})`);
      } else if (el.shadowEffect === 'outline') {
        filters.push(`drop-shadow(0 0 2px ${color}) drop-shadow(0 0 4px ${color})`);
      } else if (el.shadowEffect === 'neon') {
        filters.push(`drop-shadow(0 0 5px ${color}) drop-shadow(0 0 15px ${color})`);
      }
    }
    if (el.graphicBlur && el.graphicBlur > 0) {
      filters.push(`blur(${el.graphicBlur}px)`);
    }
    if (el.duotoneFilter === 'warm') {
      filters.push('sepia(60%) saturate(140%) hue-rotate(-20deg)');
    } else if (el.duotoneFilter === 'cool') {
      filters.push('hue-rotate(180deg) saturate(130%)');
    } else if (el.duotoneFilter === 'vintage') {
      filters.push('sepia(80%) contrast(90%)');
    } else if (el.duotoneFilter === 'mono') {
      filters.push('grayscale(100%) contrast(120%)');
    }
    return filters.length > 0 ? filters.join(' ') : undefined;
  };

  return (
    <div
      data-element-id={el.id}
      style={containerStyle}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(e);
      }}
      className={`group select-none ${isSelected ? 'z-40' : ''}`}
    >
      {/* 1. Element Render Content */}
      <div className="w-full h-full relative overflow-visible">
        {/* TEXT ELEMENT */}
        {el.type === 'text' && (
          <div className="w-full h-full flex items-center justify-center">
            {isEditingText ? (
              <textarea
                ref={textEditRef}
                value={el.content || ''}
                onChange={(e) => onUpdate({ content: e.target.value })}
                onBlur={() => setIsEditingText(false)}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') setIsEditingText(false);
                }}
                style={{
                  fontSize: el.fontSize,
                  fontFamily: el.fontFamily,
                  color: el.color,
                  textAlign: el.textAlign || 'left',
                  fontWeight: el.bold ? 700 : 400,
                  fontStyle: el.italic ? 'italic' : 'normal',
                  lineHeight: el.lineHeight || 1.2,
                  letterSpacing: el.letterSpacing ? `${el.letterSpacing}px` : 'normal',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
                className="w-full h-full bg-transparent resize-none border-none outline-none overflow-hidden p-0"
              />
            ) : (
              <div
                onDoubleClick={() => !el.locked && setIsEditingText(true)}
                style={{
                  fontSize: el.fontSize,
                  fontFamily: el.fontFamily,
                  color: el.color,
                  textAlign: el.textAlign || 'left',
                  fontWeight: el.bold ? 700 : 400,
                  fontStyle: el.italic ? 'italic' : 'normal',
                  textDecoration: el.underline ? 'underline' : 'none',
                  letterSpacing: el.letterSpacing ? `${el.letterSpacing}px` : 'normal',
                  lineHeight: el.lineHeight || 1.2,
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  textShadow: el.effect === 'neon'
                    ? `0 0 10px ${el.effectColor || '#8B3DFF'}, 0 0 20px ${el.effectColor || '#8B3DFF'}, 0 0 30px ${el.effectColor || '#8B3DFF'}`
                    : el.effect === 'shadow'
                    ? '2px 2px 4px rgba(0,0,0,0.5)'
                    : el.effect === 'lift'
                    ? '0 8px 16px rgba(0,0,0,0.3)'
                    : el.effect === 'hollow'
                    ? `1px 1px 0 ${el.color}, -1px -1px 0 ${el.color}, 1px -1px 0 ${el.color}, -1px 1px 0 ${el.color}`
                    : 'none',
                  whiteSpace: 'pre-wrap',
                }}
                className={`w-full h-full cursor-text ${
                  el.effect === 'background' ? 'p-2 rounded-lg' : ''
                }`}
              >
                {el.content}
              </div>
            )}
          </div>
        )}

        {/* SHAPE ELEMENT */}
        {el.type === 'shape' && (
          <div className="w-full h-full relative" style={{ filter: getGraphicFilter() }}>
            {el.shapeType === 'rectangle' && (
              <div
                style={{
                  backgroundColor: el.fillColor,
                  borderColor: el.strokeColor || 'transparent',
                  borderWidth: el.strokeWidth || 0,
                  borderStyle: el.strokeWidth ? 'solid' : 'none',
                  borderRadius: `${el.borderRadius || 0}px`,
                }}
                className="w-full h-full shadow-2xs"
              />
            )}
            {el.shapeType === 'circle' && (
              <div
                style={{
                  backgroundColor: el.fillColor,
                  borderColor: el.strokeColor || 'transparent',
                  borderWidth: el.strokeWidth || 0,
                  borderStyle: el.strokeWidth ? 'solid' : 'none',
                }}
                className="w-full h-full rounded-full shadow-2xs"
              />
            )}
            {el.shapeType === 'triangle' && (
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs">
                <polygon
                  points="50,5 95,95 5,95"
                  fill={el.fillColor || '#8B3DFF'}
                  stroke={el.strokeColor || 'none'}
                  strokeWidth={el.strokeWidth || 0}
                />
              </svg>
            )}
            {el.shapeType === 'star' && (
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs">
                <polygon
                  points="50,5 64,35 98,35 70,57 81,91 50,70 19,91 30,57 2,35 36,35"
                  fill={el.fillColor || '#FFB800'}
                  stroke={el.strokeColor || 'none'}
                  strokeWidth={el.strokeWidth || 0}
                />
              </svg>
            )}
            {el.shapeType === 'heart' && (
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs">
                <path
                  d="M50,85 C20,60 5,40 5,25 C5,12 15,5 28,5 C37,5 45,10 50,18 C55,10 63,5 72,5 C85,5 95,12 95,25 C95,40 80,60 50,85 Z"
                  fill={el.fillColor || '#FF2A68'}
                  stroke={el.strokeColor || 'none'}
                  strokeWidth={el.strokeWidth || 0}
                />
              </svg>
            )}
            {el.shapeType === 'arrow' && (
              <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-xs">
                <polygon
                  points="0,20 60,20 60,5 100,25 60,45 60,30 0,30"
                  fill={el.fillColor || '#8B3DFF'}
                  stroke={el.strokeColor || 'none'}
                  strokeWidth={el.strokeWidth || 0}
                />
              </svg>
            )}
            {el.shapeType === 'badge' && (
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs">
                <path
                  d="M50,0 L61,11 L77,7 L83,23 L98,28 L97,44 L108,56 L100,70 L103,86 L88,92 L82,107 L66,104 L55,115 L45,115 L34,104 L18,107 L12,92 L-3,86 L0,70 L-8,56 L3,44 L2,28 L17,23 L23,7 L39,11 Z"
                  fill={el.fillColor || '#00C4CC'}
                  transform="scale(0.85) translate(8, 0)"
                />
              </svg>
            )}
            {el.shapeType === 'speech-bubble' && (
              <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs">
                <path
                  d="M10,20 Q10,10 20,10 L80,10 Q90,10 90,20 L90,65 Q90,75 80,75 L40,75 L20,95 L25,75 L20,75 Q10,75 10,65 Z"
                  fill={el.fillColor || '#8B3DFF'}
                  stroke={el.strokeColor || 'none'}
                  strokeWidth={el.strokeWidth || 0}
                />
              </svg>
            )}

            {/* In-shape Text Layer like Canva */}
            {Boolean(el.content) && (
              <div 
                className="absolute inset-0 flex items-center justify-center p-2.5 pointer-events-auto text-center overflow-hidden z-10"
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  if (!el.locked) setIsEditingText(true);
                }}
              >
                {isEditingText ? (
                  <textarea
                    ref={textEditRef}
                    value={el.content || ''}
                    onChange={(e) => onUpdate({ content: e.target.value })}
                    onBlur={() => setIsEditingText(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') setIsEditingText(false);
                    }}
                    style={{
                      fontSize: el.fontSize || 18,
                      fontFamily: el.fontFamily,
                      color: el.color || '#FFFFFF',
                      fontWeight: el.bold ? 700 : 400,
                      fontStyle: el.italic ? 'italic' : 'normal',
                      textAlign: el.textAlign || 'center',
                      lineHeight: el.lineHeight || 1.2,
                    }}
                    className="w-full h-full bg-transparent resize-none border-none outline-none overflow-hidden p-0 text-center"
                  />
                ) : (
                  <span
                    style={{
                      fontSize: el.fontSize || 18,
                      fontFamily: el.fontFamily,
                      color: el.color || '#FFFFFF',
                      fontWeight: el.bold ? 700 : 400,
                      fontStyle: el.italic ? 'italic' : 'normal',
                      textAlign: el.textAlign || 'center',
                      textDecoration: el.underline ? 'underline' : 'none',
                      lineHeight: el.lineHeight || 1.2,
                    }}
                    className="select-none break-words max-w-full"
                  >
                    {el.content}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* IMAGE ELEMENT */}
        {el.type === 'image' && (
          <div
            style={{
              borderRadius: el.borderRadius ? `${el.borderRadius}px` : 0,
              overflow: 'hidden',
              filter: getGraphicFilter(),
            }}
            className="w-full h-full pointer-events-none"
          >
            <img
              src={el.src}
              alt={el.alt || ''}
              style={{
                objectFit: el.objectFit || 'cover',
                filter: el.filter ? `
                  brightness(${el.filter.brightness ?? 100}%)
                  contrast(${el.filter.contrast ?? 100}%)
                  saturate(${el.filter.saturation ?? 100}%)
                  blur(${el.filter.blur ?? 0}px)
                  grayscale(${el.filter.grayscale ?? 0}%)
                  sepia(${el.filter.sepia ?? 0}%)
                ` : 'none',
                transform: `${el.flipH ? 'scaleX(-1)' : ''} ${el.flipV ? 'scaleY(-1)' : ''}`,
              }}
              className="w-full h-full"
              draggable={false}
            />
          </div>
        )}

        {/* STICKER / PIXEL ART ELEMENT */}
        {el.type === 'sticker' && (
          <div 
            className="w-full h-full flex items-center justify-center relative pointer-events-none select-none"
            style={{ 
              filter: getGraphicFilter(),
              imageRendering: el.isPixelArt ? 'pixelated' : undefined,
            }}
          >
            {el.svgContent ? (
              <div 
                className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full"
                style={{ 
                  imageRendering: el.isPixelArt ? 'pixelated' : 'auto',
                  transform: `${el.flipH ? 'scaleX(-1)' : ''} ${el.flipV ? 'scaleY(-1)' : ''}`
                }}
                dangerouslySetInnerHTML={{ __html: el.svgContent }}
              />
            ) : el.src ? (
              <img
                src={el.src}
                alt={el.alt || el.name || 'sticker'}
                style={{
                  objectFit: el.objectFit || 'contain',
                  imageRendering: el.isPixelArt ? 'pixelated' : undefined,
                  transform: `${el.flipH ? 'scaleX(-1)' : ''} ${el.flipV ? 'scaleY(-1)' : ''}`,
                }}
                className="w-full h-full pointer-events-none"
                draggable={false}
              />
            ) : null}
          </div>
        )}

        {/* VECTOR / SVG ELEMENT */}
        {((el.type === 'vector' && !el.svgContent) || (Boolean(el.svgPath) && !el.svgContent && el.type !== 'sticker')) && (
          <div 
            className="w-full h-full flex items-center justify-center relative"
            style={{ filter: getGraphicFilter() }}
          >
            <svg
              viewBox={el.svgViewBox || '0 0 100 100'}
              className="w-full h-full drop-shadow-xs pointer-events-none"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d={el.svgPath}
                fill={el.fillColor || '#7d2ae8'}
                stroke={el.strokeColor || 'none'}
                strokeWidth={el.strokeWidth || 0}
              />
            </svg>

            {/* In-vector Text Layer if present */}
            {Boolean(el.content) && (
              <div 
                className="absolute inset-0 flex items-center justify-center p-2.5 pointer-events-auto text-center overflow-hidden z-10"
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  if (!el.locked) setIsEditingText(true);
                }}
              >
                {isEditingText ? (
                  <textarea
                    ref={textEditRef}
                    value={el.content || ''}
                    onChange={(e) => onUpdate({ content: e.target.value })}
                    onBlur={() => setIsEditingText(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') setIsEditingText(false);
                    }}
                    style={{
                      fontSize: el.fontSize || 16,
                      fontFamily: el.fontFamily,
                      color: el.color || '#FFFFFF',
                      fontWeight: el.bold ? 700 : 400,
                      fontStyle: el.italic ? 'italic' : 'normal',
                      textAlign: el.textAlign || 'center',
                      lineHeight: el.lineHeight || 1.2,
                    }}
                    className="w-full h-full bg-transparent resize-none border-none outline-none overflow-hidden p-0 text-center"
                  />
                ) : (
                  <span
                    style={{
                      fontSize: el.fontSize || 16,
                      fontFamily: el.fontFamily,
                      color: el.color || '#FFFFFF',
                      fontWeight: el.bold ? 700 : 400,
                      fontStyle: el.italic ? 'italic' : 'normal',
                      textAlign: el.textAlign || 'center',
                      textDecoration: el.underline ? 'underline' : 'none',
                      lineHeight: el.lineHeight || 1.2,
                    }}
                    className="select-none break-words max-w-full"
                  >
                    {el.content}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* FRAME ELEMENT (Canva Style Photo Frame) */}
        {el.type === 'frame' && (
          <div
            className="w-full h-full relative select-none"
            style={{ filter: getGraphicFilter() }}
            onDragOver={handleFrameDragOver}
            onDragLeave={handleFrameDragLeave}
            onDrop={handleFrameDrop}
          >
            {/* Hidden file input for uploading photo into frame */}
            <input
              type="file"
              ref={frameFileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFrameFileChange}
            />

            {el.src ? (
              /* Photo inserted into frame */
              <div className="w-full h-full relative overflow-hidden">
                <svg
                  viewBox={el.frameViewBox || '0 0 100 100'}
                  className="w-full h-full block overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <clipPath id={`frame-clip-${el.id}`}>
                      <path d={el.frameClipPath || 'M 0,0 H 100 V 100 H 0 Z'} />
                    </clipPath>
                  </defs>
                  <image
                    href={el.src}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#frame-clip-${el.id})`}
                    style={{
                      filter: el.filter ? `
                        brightness(${el.filter.brightness ?? 100}%)
                        contrast(${el.filter.contrast ?? 100}%)
                        saturate(${el.filter.saturation ?? 100}%)
                        blur(${el.filter.blur ?? 0}px)
                        grayscale(${el.filter.grayscale ?? 0}%)
                        sepia(${el.filter.sepia ?? 0}%)
                      ` : 'none',
                      transform: `${el.flipH ? 'scaleX(-1)' : ''} ${el.flipV ? 'scaleY(-1)' : ''}`,
                    }}
                  />
                  {/* Optional frame stroke / border */}
                  {Boolean(el.strokeWidth && el.strokeWidth > 0) && (
                    <path
                      d={el.frameClipPath}
                      fill="none"
                      stroke={el.strokeColor || '#7d2ae8'}
                      strokeWidth={el.strokeWidth}
                    />
                  )}
                </svg>

                {/* Optional decorative overlay (e.g. Phone bezel, Polaroid paper border, Browser bar) */}
                {el.frameOverlaySvg && (
                  <div
                    className="absolute inset-0 pointer-events-none w-full h-full [&>svg]:w-full [&>svg]:h-full"
                    dangerouslySetInnerHTML={{ __html: el.frameOverlaySvg }}
                  />
                )}

                {/* Quick floating action buttons on hover/selected */}
                {isSelected && (
                  <div className="absolute top-2 right-2 flex items-center gap-1 z-30 pointer-events-auto bg-black/65 backdrop-blur-md rounded-lg p-1 text-white shadow-lg border border-white/20">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        frameFileInputRef.current?.click();
                      }}
                      title="Cambiar foto del marco"
                      className="p-1 hover:bg-white/20 rounded transition-colors text-xs flex items-center gap-1 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-sky-300" />
                      <span className="text-[10px] font-medium pr-0.5">Cambiar</span>
                    </button>
                    <div className="w-px h-3 bg-white/30" />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onUpdate({ src: undefined });
                      }}
                      title="Quitar foto (dejar marco vacío)"
                      className="p-1 hover:bg-rose-500/80 rounded transition-colors text-xs cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5 text-rose-300 hover:text-white" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Empty Canva Frame Placeholder (Rolling Hills & Blue Sky with Cloud) */
              <div
                className={`w-full h-full relative overflow-hidden group cursor-pointer transition-all ${
                  isDragOverFrame ? 'ring-4 ring-sky-400 ring-offset-2 scale-[1.02]' : ''
                }`}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  frameFileInputRef.current?.click();
                }}
              >
                {/* The SVG Canvas Landscape */}
                <svg viewBox={el.frameViewBox || '0 0 100 100'} className="w-full h-full block pointer-events-none" preserveAspectRatio="none">
                  <defs>
                    <clipPath id={`ph-clip-${el.id}`}>
                      <path d={el.frameClipPath || 'M 0,0 H 100 V 100 H 0 Z'} />
                    </clipPath>
                    <linearGradient id={`ph-sky-${el.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4bb2f6" />
                      <stop offset="60%" stopColor="#89d1fc" />
                      <stop offset="100%" stopColor="#c5e6fe" />
                    </linearGradient>
                    <linearGradient id={`ph-hill1-${el.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#66bb6a" />
                      <stop offset="100%" stopColor="#43a047" />
                    </linearGradient>
                    <linearGradient id={`ph-hill2-${el.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4caf50" />
                      <stop offset="100%" stopColor="#2e7d32" />
                    </linearGradient>
                  </defs>
                  <g clipPath={`url(#ph-clip-${el.id})`}>
                    <rect width="100%" height="100%" fill={`url(#ph-sky-${el.id})`} />
                    <circle cx="78%" cy="26%" r="14%" fill="#fff59d" opacity="0.9" />
                    <circle cx="78%" cy="26%" r="9%" fill="#ffee58" />
                    <path d="M 16,32 Q 22,22 32,24 Q 38,14 50,22 Q 60,16 68,25 Q 75,24 78,32 Q 81,40 72,46 L 18,46 Q 10,40 16,32 Z" fill="#ffffff" fillOpacity="0.88" />
                    <path d="M -20,70 Q 30,44 75,60 T 150,52 L 150,150 L -20,150 Z" fill={`url(#ph-hill1-${el.id})`} />
                    <path d="M -20,86 Q 25,62 65,78 T 150,70 L 150,150 L -20,150 Z" fill={`url(#ph-hill2-${el.id})`} />
                  </g>
                  {Boolean(el.strokeWidth && el.strokeWidth > 0) && (
                    <path
                      d={el.frameClipPath}
                      fill="none"
                      stroke={el.strokeColor || '#7d2ae8'}
                      strokeWidth={el.strokeWidth}
                    />
                  )}
                </svg>

                {/* Optional decorative overlay */}
                {el.frameOverlaySvg && (
                  <div
                    className="absolute inset-0 pointer-events-none w-full h-full [&>svg]:w-full [&>svg]:h-full"
                    dangerouslySetInnerHTML={{ __html: el.frameOverlaySvg }}
                  />
                )}

                {/* Center Upload CTA Pill */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2 pointer-events-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      frameFileInputRef.current?.click();
                    }}
                    className={`px-3 py-1.5 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md text-white flex items-center gap-1.5 shadow-lg border border-white/25 transition-all cursor-pointer hover:scale-105 ${
                      isDragOverFrame ? 'bg-sky-600 border-white text-white' : ''
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5 text-sky-300" />
                    <span className="text-[11px] font-semibold whitespace-nowrap">
                      {isDragOverFrame ? '¡Suelta la foto!' : 'Poner foto'}
                    </span>
                  </button>
                  <span className="text-[9px] text-white font-medium drop-shadow-md mt-1 opacity-85 pointer-events-none text-center">
                    o presiona <kbd className="px-1 py-0.5 bg-black/40 rounded border border-white/20 font-mono text-[8px]">Ctrl+V</kbd> para pegar
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 2. Professional Polish Purple Selection Bounding Box & Handles */}
      {isSelected && !el.locked && (
        <div className="absolute inset-0 border-2 border-[#7d2ae8] pointer-events-none">
          {/* Corner Handles (Pill/Circle style) */}
          <div
            onMouseDown={(e) => handleResizeStart(e, 'tl')}
            onTouchStart={(e) => handleTouchResizeStart(e, 'tl')}
            onClick={(e) => e.stopPropagation()}
            className="absolute -top-1.5 -left-1.5 w-3.5 h-3.5 bg-white border-2 border-[#7d2ae8] rounded-full pointer-events-auto cursor-nwse-resize shadow-xs hover:scale-125 transition-transform"
          />
          <div
            onMouseDown={(e) => handleResizeStart(e, 'tr')}
            onTouchStart={(e) => handleTouchResizeStart(e, 'tr')}
            onClick={(e) => e.stopPropagation()}
            className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-white border-2 border-[#7d2ae8] rounded-full pointer-events-auto cursor-nesw-resize shadow-xs hover:scale-125 transition-transform"
          />
          <div
            onMouseDown={(e) => handleResizeStart(e, 'bl')}
            onTouchStart={(e) => handleTouchResizeStart(e, 'bl')}
            onClick={(e) => e.stopPropagation()}
            className="absolute -bottom-1.5 -left-1.5 w-3.5 h-3.5 bg-white border-2 border-[#7d2ae8] rounded-full pointer-events-auto cursor-nesw-resize shadow-xs hover:scale-125 transition-transform"
          />
          <div
            onMouseDown={(e) => handleResizeStart(e, 'br')}
            onTouchStart={(e) => handleTouchResizeStart(e, 'br')}
            onClick={(e) => e.stopPropagation()}
            className="absolute -bottom-1.5 -right-1.5 w-3.5 h-3.5 bg-white border-2 border-[#7d2ae8] rounded-full pointer-events-auto cursor-nwse-resize shadow-xs hover:scale-125 transition-transform"
          />

          {/* Middle Edge Handles (Horizontal & Vertical) */}
          <div
            onMouseDown={(e) => handleResizeStart(e, 't')}
            onTouchStart={(e) => handleTouchResizeStart(e, 't')}
            onClick={(e) => e.stopPropagation()}
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-white border border-[#7d2ae8] rounded-full pointer-events-auto cursor-ns-resize shadow-xs"
          />
          <div
            onMouseDown={(e) => handleResizeStart(e, 'b')}
            onTouchStart={(e) => handleTouchResizeStart(e, 'b')}
            onClick={(e) => e.stopPropagation()}
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-white border border-[#7d2ae8] rounded-full pointer-events-auto cursor-ns-resize shadow-xs"
          />
          <div
            onMouseDown={(e) => handleResizeStart(e, 'l')}
            onTouchStart={(e) => handleTouchResizeStart(e, 'l')}
            onClick={(e) => e.stopPropagation()}
            className="absolute top-1/2 -translate-y-1/2 -left-1 w-1.5 h-4 bg-white border border-[#7d2ae8] rounded-full pointer-events-auto cursor-ew-resize shadow-xs"
          />
          <div
            onMouseDown={(e) => handleResizeStart(e, 'r')}
            onTouchStart={(e) => handleTouchResizeStart(e, 'r')}
            onClick={(e) => e.stopPropagation()}
            className="absolute top-1/2 -translate-y-1/2 -right-1 w-1.5 h-4 bg-white border border-[#7d2ae8] rounded-full pointer-events-auto cursor-ew-resize shadow-xs"
          />

          {/* Rotation Handle with stem line */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-auto">
            <div className="w-0.5 h-4 bg-[#7d2ae8]"></div>
            <div
              onMouseDown={handleRotateStart}
              onTouchStart={handleTouchRotateStart}
              onClick={(e) => e.stopPropagation()}
              className="w-6 h-6 rounded-full bg-white border-2 border-[#7d2ae8] flex items-center justify-center cursor-grab active:cursor-grabbing shadow-md hover:scale-110 transition-transform"
              title={`Rotación: ${el.rotation}°`}
            >
              <RotateCw className="w-3 h-3 text-[#7d2ae8]" />
            </div>
          </div>
        </div>
      )}

      {/* Locked badge if locked */}
      {isSelected && el.locked && (
        <div className="absolute inset-0 border-2 border-amber-400 border-dashed pointer-events-none flex items-start justify-end p-1">
          <span className="bg-amber-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm shadow-xs">
            Bloqueado
          </span>
        </div>
      )}
    </div>
  );
};
