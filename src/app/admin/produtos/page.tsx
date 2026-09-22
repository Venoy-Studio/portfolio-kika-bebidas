'use client';

import React, { useState } from 'react';
import { useData } from '@/context/DataContext';
import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';
import { Plus, Search, Edit2, Trash2, X, Check, Wine } from 'lucide-react';

export default function AdminProdutosPage() {
  const { dataset, upsertProduct, deleteProduct } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Partial<Product> | null>(null);

  const filteredProducts = dataset.products.filter((p) => {
    if (selectedCategory) {
      const cat = dataset.categories.find((c) => c.slug === selectedCategory);
      if (p.categoryId !== cat?.id && p.category !== selectedCategory) return false;
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        (p.categoryId && p.categoryId.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const handleOpenAdd = () => {
    setEditingProduct({
      id: `p-custom-${Date.now()}`,
      name: '',
      brand: '',
      volume: '',
      categoryId: dataset.categories[0]?.id || 'cat-cervejas',
      category: dataset.categories[0]?.slug || 'cervejas',
      slug: `custom-${Date.now()}`,
      priceCents: 1000,
      regularPriceCents: 1000,
      salePriceCents: null,
      image: '/products/heineken-330.webp',
      description: '',
      active: true,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (prod: Product) => {
    setEditingProduct({ ...prod });
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct?.name || !editingProduct?.id) return;
    upsertProduct(editingProduct as Product);
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Deseja realmente excluir o produto "${name}"?`)) {
      deleteProduct(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-[24px] font-bold text-foreground">Produtos</h1>
          <p className="mt-1 text-[13.5px] text-ink-muted">
            Gerencie o catálogo completo de bebidas e itens de conveniência ({dataset.products.length} itens cadastrados).
          </p>
        </div>
        <button
          onClick={handleOpenAdd}
          className="btn btn-ink flex items-center gap-1.5 text-xs font-semibold"
        >
          <Plus className="h-4 w-4" />
          Novo produto
        </button>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nome, marca ou categoria..."
            className="w-full rounded-xl border border-line bg-surface pl-10 pr-4 py-2.5 text-xs text-foreground outline-none focus:border-ink"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-xl border border-line bg-surface px-3 py-2.5 text-xs text-foreground outline-none focus:border-ink w-full sm:w-auto"
        >
          <option value="">Todas as categorias</option>
          {dataset.categories.map((c) => (
            <option key={c.id} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Products Table */}
      <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-line text-[11px] uppercase tracking-wider text-ink-muted bg-surface-sunken/40">
                <th className="p-3.5">Produto</th>
                <th className="p-3.5">Categoria</th>
                <th className="p-3.5 text-right">Preço Normal</th>
                <th className="p-3.5 text-right">Preço Oferta</th>
                <th className="p-3.5 text-center">Status</th>
                <th className="p-3.5 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-line last:border-b-0 hover:bg-surface-2/40 transition"
                >
                  <td className="p-3.5">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-surface-2 p-1">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground truncate max-w-[200px]">
                          {product.name}
                        </p>
                        <p className="text-[11px] text-ink-muted">
                          {product.brand} · {product.volume}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-3.5">
                    <span className="pill bg-surface-2 text-foreground capitalize">
                      {dataset.categories.find(
                        (c) => c.id === product.categoryId || c.slug === product.category
                      )?.name || product.categoryId}
                    </span>
                  </td>

                  <td className="p-3.5 text-right font-medium text-foreground tabular-nums">
                    {formatPrice(product.regularPriceCents ?? product.priceCents)}
                  </td>

                  <td className="p-3.5 text-right tabular-nums">
                    {product.salePriceCents ? (
                      <span className="font-bold text-sale">
                        {formatPrice(product.salePriceCents)}
                      </span>
                    ) : (
                      <span className="text-ink-muted">—</span>
                    )}
                  </td>

                  <td className="p-3.5 text-center">
                    <span
                      className={`pill text-[10px] font-bold ${
                        product.active
                          ? 'bg-ok-soft text-ok'
                          : 'bg-surface-2 text-ink-muted'
                      }`}
                    >
                      {product.active ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>

                  <td className="p-3.5 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => handleOpenEdit(product)}
                        className="icon-btn h-8 w-8 text-ink-muted hover:bg-surface-2 hover:text-foreground"
                        title="Editar"
                      >
                        <Edit2 className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(product.id, product.name)}
                        className="icon-btn h-8 w-8 text-ink-muted hover:bg-sale/10 hover:text-sale"
                        title="Excluir"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit / Add Modal */}
      {isModalOpen && editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl bg-surface p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <h3 className="text-base font-bold text-foreground">
                {editingProduct.name ? 'Editar Produto' : 'Novo Produto'}
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
                  Nome do Produto *
                </label>
                <input
                  type="text"
                  required
                  value={editingProduct.name || ''}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Marca
                  </label>
                  <input
                    type="text"
                    value={editingProduct.brand || ''}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, brand: e.target.value })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Volume / Tamanho
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: 350ml, 1L, 5kg"
                    value={editingProduct.volume || ''}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, volume: e.target.value })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Categoria
                  </label>
                  <select
                    value={editingProduct.categoryId || editingProduct.category || dataset.categories[0]?.id}
                    onChange={(e) => {
                      const cat = dataset.categories.find((c) => c.id === e.target.value);
                      setEditingProduct({
                        ...editingProduct,
                        categoryId: e.target.value,
                        category: cat?.slug || e.target.value,
                      });
                    }}
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  >
                    {dataset.categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Caminho da Imagem
                  </label>
                  <input
                    type="text"
                    value={editingProduct.image || ''}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, image: e.target.value })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Preço Regular (em centavos)
                  </label>
                  <input
                    type="number"
                    value={editingProduct.regularPriceCents ?? editingProduct.priceCents ?? 0}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10) || 0;
                      setEditingProduct({
                        ...editingProduct,
                        priceCents: val,
                        regularPriceCents: val,
                      });
                    }}
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                  <span className="text-[10px] text-ink-muted">
                    {formatPrice(editingProduct.regularPriceCents ?? editingProduct.priceCents ?? 0)}
                  </span>
                </div>
                <div>
                  <label className="block font-semibold text-foreground mb-1">
                    Preço de Oferta (centavos, ou deixe vazio)
                  </label>
                  <input
                    type="number"
                    value={editingProduct.salePriceCents ?? ''}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        salePriceCents: e.target.value ? parseInt(e.target.value, 10) : null,
                      })
                    }
                    className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                  />
                  <span className="text-[10px] text-ink-muted">
                    {editingProduct.salePriceCents
                      ? formatPrice(editingProduct.salePriceCents)
                      : 'Sem desconto'}
                  </span>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-foreground mb-1">
                  Descrição
                </label>
                <textarea
                  rows={2}
                  value={editingProduct.description || ''}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, description: e.target.value })
                  }
                  className="w-full rounded-xl border border-line bg-surface-2 px-3 py-2 text-foreground outline-none focus:border-ink"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="prod-active"
                  checked={editingProduct.active ?? true}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, active: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-line text-ink"
                />
                <label htmlFor="prod-active" className="font-semibold text-foreground">
                  Produto Ativo na Vitrine
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
                  Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
