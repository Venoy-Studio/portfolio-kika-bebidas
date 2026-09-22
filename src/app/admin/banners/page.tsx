'use client';

import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { Banner } from '@/types';
import { Plus, Edit2, Trash2, X, Image as ImageIcon, Eye, EyeOff } from 'lucide-react';

export default function AdminBannersPage() {
  const { dataset, upsertBanner, deleteBanner } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBanner, setEditingBanner] = useState<Partial<Banner> | null>(null);

  const handleOpenAdd = () => {
    setEditingBanner({
      id: `banner-${Date.now()}`,
      title: 'Nova Campanha',
      subtitle: 'Descrição da campanha',
      ctaLabel: 'Ver oferta',
      href: '/produtos',
      theme: {
        bg: '#141210',
        accent: '#D9A55B',
        ink: '#FFFFFF',
      },
      imageDesktop: '/banners/arte-cerveja-gelada-desktop.webp',
      imageMobile: '/banners/arte-cerveja-gelada-mobile.webp',
      storeIds: null,
      order: dataset.banners.length + 1,
      active: true,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (banner: Banner) => {
    setEditingBanner({ ...banner });
    setIsModalOpen(true);
  };

  const handleToggleActive = (banner: Banner) => {
    upsertBanner({ ...banner, active: !banner.active });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBanner?.title || !editingBanner?.id) return;
    upsertBanner(editingBanner as Banner);
    setIsModalOpen(false);
    setEditingBanner(null);
  };

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Deseja excluir o banner "${title}"?`)) {
      deleteBanner(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-foreground">Banners do Carrossel</h1>
          <p className="mt-1 text-[13.5px] text-ink-muted">
            Gerencie as campanhas em destaque na página inicial.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="btn btn-ink flex items-center gap-1.5 text-xs font-semibold"
        >
          <Plus className="h-4 w-4" />
          Novo banner
        </button>
      </div>

      {/* Grid of Banners */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dataset.banners.map((banner) => (
          <div
            key={banner.id}
            className={`flex flex-col overflow-hidden rounded-2xl border bg-surface shadow-sm transition ${
              banner.active ? 'border-line' : 'border-line opacity-60'
            }`}
          >
            {/* Banner preview */}
            <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
              <img
                src={banner.imageDesktop}
                alt={banner.title}
                className="h-full w-full object-cover"
              />
              <span
                className={`absolute top-3 left-3 pill text-[10px] font-bold ${
                  banner.active ? 'bg-ok text-white' : 'bg-ink text-white/70'
                }`}
              >
                {banner.active ? 'Ativo na Vitrine' : 'Pausado'}
              </span>
              <span className="absolute top-3 right-3 pill bg-black/60 text-white text-[10px] font-bold">
                Ordem #{banner.order}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-bold text-sm text-foreground line-clamp-1">
                {banner.title}
              </h3>
              {banner.subtitle && (
                <p className="mt-0.5 text-xs text-ink-muted line-clamp-1">
                  {banner.subtitle}
                </p>
              )}
              <p className="mt-2 text-[11px] text-ink-muted">
                Link: <span className="text-foreground font-mono">{banner.href}</span>
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                <button
                  type="button"
                  onClick={() => handleToggleActive(banner)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-ink-muted hover:text-foreground"
                >
                  {banner.active ? (
                    <>
                      <EyeOff className="h-3.5 w-3.5" />
                      Pausar
                    </>
                  ) : (
                    <>
                      <Eye className="h-3.5 w-3.5" />
                      Ativar
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEdit(banner)}
                    className="icon-btn h-8 w-8 text-ink-muted hover:bg-surface-2 hover:text-foreground"
                  >
                    <Edit2 className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(banner.id, banner.title)}
                    className="icon-btn h-8 w-8 text-ink-muted hover:bg-sale/10 hover:text-sale"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && editingBanner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-surface p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h3 className="text-base font-bold text-foreground">
                {editingBanner.title ? 'Editar Banner' : 'Novo Banner'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="icon-btn h-8 w-8 text-ink-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="mt-4 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-foreground mb-1">
                  Título da Campanha *
                </label>
                <input
                  type="text"
                  required
                  value={editingBanner.title || ''}
                  onChange={(e) =>
                    setEditingBanner({ ...editingBanner, title: e.target.value })
                  }
                  className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                />
              </div>

              <div>
                <label className="block font-semibold text-foreground mb-1">
                  Subtítulo / Descrição
                </label>
                <input
                  type="text"
                  value={editingBanner.subtitle || ''}
                  onChange={(e) =>
                    setEditingBanner({ ...editingBanner, subtitle: e.target.value })
                  }
                  className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Link de Destino
                  </label>
                  <input
                    type="text"
                    value={editingBanner.href || '/produtos'}
                    onChange={(e) =>
                      setEditingBanner({ ...editingBanner, href: e.target.value })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Ordem de Exibição
                  </label>
                  <input
                    type="number"
                    value={editingBanner.order || 1}
                    onChange={(e) =>
                      setEditingBanner({
                        ...editingBanner,
                        order: parseInt(e.target.value, 10) || 1,
                      })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-foreground mb-1">
                  Imagem Desktop
                </label>
                <input
                  type="text"
                  value={editingBanner.imageDesktop || ''}
                  onChange={(e) =>
                    setEditingBanner({ ...editingBanner, imageDesktop: e.target.value })
                  }
                  className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="banner-active"
                  checked={editingBanner.active ?? true}
                  onChange={(e) =>
                    setEditingBanner({ ...editingBanner, active: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-line text-ink"
                />
                <label htmlFor="banner-active" className="font-semibold text-foreground">
                  Banner Ativo no Carrossel
                </label>
              </div>

              <div className="flex justify-end gap-2 border-t border-line pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-outline text-xs"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-ink text-xs font-semibold">
                  Salvar Banner
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
