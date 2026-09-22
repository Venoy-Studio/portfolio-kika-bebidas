'use client';

import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { Promotion } from '@/types';
import { Plus, Edit2, Trash2, X, Tag, Eye, EyeOff } from 'lucide-react';

export default function AdminPromocoesPage() {
  const { dataset, upsertPromotion, deletePromotion } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPromo, setEditingPromo] = useState<Partial<Promotion> | null>(null);

  const handleOpenAdd = () => {
    setEditingPromo({
      id: `promo-${Date.now()}`,
      title: 'Nova Promoção',
      badge: 'Oferta Especial',
      type: 'discount',
      productId: dataset.products[0]?.id || '',
      storeIds: null,
      active: true,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (promo: Promotion) => {
    setEditingPromo({ ...promo });
    setIsModalOpen(true);
  };

  const handleToggleActive = (promo: Promotion) => {
    upsertPromotion({ ...promo, active: !promo.active });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPromo?.title || !editingPromo?.id) return;
    upsertPromotion(editingPromo as Promotion);
    setIsModalOpen(false);
    setEditingPromo(null);
  };

  const handleDelete = (id: string, title?: string) => {
    if (confirm(`Deseja excluir a promoção "${title || 'Promoção'}"?`)) {
      deletePromotion(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-foreground">Promoções</h1>
          <p className="mt-1 text-[13.5px] text-ink-muted">
            Configure selos promocionais, descontos especiais e campanhas por unidade ({dataset.promotions.length} cadastradas).
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="btn btn-ink flex items-center gap-1.5 text-xs font-semibold"
        >
          <Plus className="h-4 w-4" />
          Nova promoção
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-line text-[11px] uppercase tracking-wider text-ink-muted bg-surface-sunken/40">
                <th className="p-3.5">Título</th>
                <th className="p-3.5">Selo / Badge</th>
                <th className="p-3.5">Produto Vinculado</th>
                <th className="p-3.5">Unidades</th>
                <th className="p-3.5 text-center">Status</th>
                <th className="p-3.5 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {dataset.promotions.map((promo) => {
                const linkedProduct = dataset.products.find(
                  (p) => p.id === promo.productId
                );

                return (
                  <tr
                    key={promo.id}
                    className="border-b border-line last:border-b-0 hover:bg-surface-2/40 transition"
                  >
                    <td className="p-3.5 font-semibold text-foreground">
                      {promo.title || promo.label || 'Promoção'}
                    </td>

                    <td className="p-3.5">
                      <span className="pill bg-primary text-white font-bold text-[10px]">
                        {promo.badge || promo.label || 'Oferta'}
                      </span>
                    </td>

                    <td className="p-3.5 text-ink-muted">
                      {linkedProduct ? (
                        <span className="text-foreground font-medium">
                          {linkedProduct.name}
                        </span>
                      ) : (
                        <span>Todos os produtos</span>
                      )}
                    </td>

                    <td className="p-3.5 text-ink-muted">
                      {promo.storeIds && promo.storeIds.length > 0 ? (
                        <span>{promo.storeIds.length} lojas selecionadas</span>
                      ) : (
                        <span>Todas as 5 lojas</span>
                      )}
                    </td>

                    <td className="p-3.5 text-center">
                      <span
                        className={`pill text-[10px] font-bold ${
                          promo.active ? 'bg-ok-soft text-ok' : 'bg-surface-2 text-ink-muted'
                        }`}
                      >
                        {promo.active ? 'Ativa' : 'Inativa'}
                      </span>
                    </td>

                    <td className="p-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          type="button"
                          onClick={() => handleToggleActive(promo)}
                          className="icon-btn h-8 w-8 text-ink-muted hover:text-foreground"
                          title={promo.active ? 'Pausar' : 'Ativar'}
                        >
                          {promo.active ? (
                            <EyeOff className="h-3.5 w-3.5" />
                          ) : (
                            <Eye className="h-3.5 w-3.5" />
                          )}
                        </button>
                        <button
                          onClick={() => handleOpenEdit(promo)}
                          className="icon-btn h-8 w-8 text-ink-muted hover:text-foreground"
                          title="Editar"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(promo.id, promo.title)}
                          className="icon-btn h-8 w-8 text-ink-muted hover:bg-sale/10 hover:text-sale"
                          title="Excluir"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && editingPromo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-surface p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h3 className="text-base font-bold text-foreground">
                {editingPromo.title ? 'Editar Promoção' : 'Nova Promoção'}
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
                  Título da Promoção *
                </label>
                <input
                  type="text"
                  required
                  value={editingPromo.title || ''}
                  onChange={(e) =>
                    setEditingPromo({ ...editingPromo, title: e.target.value })
                  }
                  className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Texto do Selo / Badge *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Leve 2, Só na São Sebastião"
                    value={editingPromo.badge || ''}
                    onChange={(e) =>
                      setEditingPromo({ ...editingPromo, badge: e.target.value })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Produto Vinculado
                  </label>
                  <select
                    value={editingPromo.productId || ''}
                    onChange={(e) =>
                      setEditingPromo({ ...editingPromo, productId: e.target.value })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  >
                    <option value="">Nenhum (promoção geral)</option>
                    {dataset.products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} ({p.volume})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="promo-active"
                  checked={editingPromo.active ?? true}
                  onChange={(e) =>
                    setEditingPromo({ ...editingPromo, active: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-line text-ink"
                />
                <label htmlFor="promo-active" className="font-semibold text-foreground">
                  Promoção Ativa
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
                  Salvar Promoção
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
