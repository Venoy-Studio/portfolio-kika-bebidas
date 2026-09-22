'use client';

import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { Combo } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Plus, Edit2, Trash2, X, Package, Users, Eye, EyeOff } from 'lucide-react';

export default function AdminCombosPage() {
  const { dataset, upsertCombo, deleteCombo } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCombo, setEditingCombo] = useState<Partial<Combo> | null>(null);

  const handleOpenAdd = () => {
    setEditingCombo({
      id: `combo-${Date.now()}`,
      slug: `combo-custom-${Date.now()}`,
      name: 'Novo Combo',
      subtitle: 'Kit especial',
      description: 'Descrição completa dos itens inclusos no combo.',
      items: [],
      priceCents: 9990,
      image: '/combos/combo-churrasco.webp',
      theme: {
        bg: '#141210',
        accent: '#D9A55B',
        ink: '#FFFFFF',
      },
      storeIds: null,
      featured: true,
      serves: '4 a 6 pessoas',
      active: true,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (combo: Combo) => {
    setEditingCombo({ ...combo });
    setIsModalOpen(true);
  };

  const handleToggleActive = (combo: Combo) => {
    upsertCombo({ ...combo, active: !combo.active });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCombo?.name || !editingCombo?.id) return;
    upsertCombo(editingCombo as Combo);
    setIsModalOpen(false);
    setEditingCombo(null);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Deseja realmente excluir o combo "${name}"?`)) {
      deleteCombo(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-foreground">Combos e Kits</h1>
          <p className="mt-1 text-[13.5px] text-ink-muted">
            Gerencie os kits de bebidas prontos para churrasco, esquenta e eventos.
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="btn btn-ink flex items-center gap-1.5 text-xs font-semibold"
        >
          <Plus className="h-4 w-4" />
          Novo combo
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dataset.combos.map((combo) => (
          <div
            key={combo.id}
            className={`flex flex-col overflow-hidden rounded-2xl border bg-surface shadow-sm transition ${
              combo.active ? 'border-line' : 'border-line opacity-60'
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
              <img
                src={combo.image}
                alt={combo.name}
                className="h-full w-full object-cover"
              />
              <span
                className={`absolute top-3 left-3 pill text-[10px] font-bold ${
                  combo.active ? 'bg-ok text-white' : 'bg-ink text-white/70'
                }`}
              >
                {combo.active ? 'Ativo na Loja' : 'Pausado'}
              </span>
              <span className="absolute top-3 right-3 pill bg-black/60 text-white text-[10px] font-bold flex items-center gap-1">
                <Users className="h-3 w-3" />
                {combo.serves}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-bold text-base text-foreground">{combo.name}</h3>
              <p className="mt-1 text-xs text-ink-muted line-clamp-2">
                {combo.description}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                <div>
                  <span className="text-[10px] text-ink-muted block">Preço</span>
                  <span className="font-display text-base font-bold text-foreground">
                    {formatPrice(combo.priceCents)}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleToggleActive(combo)}
                    className="icon-btn h-8 w-8 text-ink-muted hover:text-foreground"
                    title={combo.active ? 'Pausar' : 'Ativar'}
                  >
                    {combo.active ? (
                      <EyeOff className="h-3.5 w-3.5" />
                    ) : (
                      <Eye className="h-3.5 w-3.5" />
                    )}
                  </button>
                  <button
                    onClick={() => handleOpenEdit(combo)}
                    className="icon-btn h-8 w-8 text-ink-muted hover:bg-surface-2 hover:text-foreground"
                    title="Editar"
                  >
                    <Edit2 className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(combo.id, combo.name)}
                    className="icon-btn h-8 w-8 text-ink-muted hover:bg-sale/10 hover:text-sale"
                    title="Excluir"
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
      {isModalOpen && editingCombo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-surface p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h3 className="text-base font-bold text-foreground">
                {editingCombo.name ? 'Editar Combo' : 'Novo Combo'}
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
                  Nome do Combo *
                </label>
                <input
                  type="text"
                  required
                  value={editingCombo.name || ''}
                  onChange={(e) =>
                    setEditingCombo({ ...editingCombo, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Preço (em centavos) *
                  </label>
                  <input
                    type="number"
                    required
                    value={editingCombo.priceCents || 0}
                    onChange={(e) =>
                      setEditingCombo({
                        ...editingCombo,
                        priceCents: parseInt(e.target.value, 10) || 0,
                      })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                  <span className="text-[10px] text-ink-muted">
                    {formatPrice(editingCombo.priceCents || 0)}
                  </span>
                </div>

                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Porção / Serve
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 6 a 8 pessoas"
                    value={editingCombo.serves || ''}
                    onChange={(e) =>
                      setEditingCombo({ ...editingCombo, serves: e.target.value })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-foreground mb-1">
                  Descrição
                </label>
                <textarea
                  rows={3}
                  value={editingCombo.description || ''}
                  onChange={(e) =>
                    setEditingCombo({ ...editingCombo, description: e.target.value })
                  }
                  className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="combo-active"
                  checked={editingCombo.active ?? true}
                  onChange={(e) =>
                    setEditingCombo({ ...editingCombo, active: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-line text-ink"
                />
                <label htmlFor="combo-active" className="font-semibold text-foreground">
                  Combo Ativo na Vitrine
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
                  Salvar Combo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
