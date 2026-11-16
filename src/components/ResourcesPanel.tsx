import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { GRAPHIC_RESOURCES_DATABASE } from '../data/graphicResources';
import { CanvasElement, GraphicResource } from '../types';

interface ResourcesPanelProps {
  onAddElement: (element: Omit<CanvasElement, 'id' | 'zIndex'>) => void;
}

const RESOURCE_CATEGORIES = [
  'Todos',
  'Fotos',
  'Fondos',
  'Ilustraciones',
  'Mockups',
  'Texturas'
];

export const ResourcesPanel: React.FC<ResourcesPanelProps> = ({ onAddElement }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filteredResources = GRAPHIC_RESOURCES_DATABASE.filter(res => {
    const matchesSearch = res.name.toLowerCase().includes(search.toLowerCase()) ||
                          res.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = selectedCategory === 'Todos' || res.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddResource = (res: GraphicResource) => {
    onAddElement({
      type: 'image',
      src: res.url,
      alt: res.name,
      x: 120,
      y: 120,
      width: 440,
      height: 330,
      rotation: 0,
      opacity: 1,
      borderRadius: 16,
      objectFit: 'cover'
    });
  };

  return (
    <div className="space-y-3.5">
      {/* Search */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar fotos, mockups, fondos..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
        />
      </div>

      {/* Category Pills */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {RESOURCE_CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-2.5 py-1 rounded-full text-[11px] whitespace-nowrap font-medium transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-purple-600 text-white shadow-2xs font-bold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Grid */}
      <div className="pr-0.5">
        <div className="grid grid-cols-2 gap-2.5">
          {filteredResources.map(res => (
            <div
              key={res.id}
              id={`resource-item-${res.id}`}
              onClick={() => handleAddResource(res)}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer border border-slate-200 bg-slate-100 hover:border-purple-600 hover:ring-2 ring-purple-600/20 transition-all hover:scale-[1.02] shadow-2xs"
            >
              <img
                src={res.url}
                alt={res.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2">
                <span className="text-[10px] font-bold text-white truncate drop-shadow-sm">
                  {res.name}
                </span>
                <span className="text-[9px] text-purple-200">
                  {res.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
