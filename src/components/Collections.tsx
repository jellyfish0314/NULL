import React, { useState } from 'react';
import { CategoryId, Product } from '../types';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

interface CollectionsProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: 'all', label: '全部素物合集 (9)' },
  { id: 'light-artifacts', label: '动态光影器物 (3)' },
  { id: 'botanical-care', label: '植萃素香手护 (3)' },
  { id: 'textile-living', label: '天然织物生活 (1)' },
  { id: 'minimal-gifting', label: '极简礼赠纸品 (2)' },
];

export const Collections: React.FC<CollectionsProps> = ({
  onQuickView,
  onAddToCart,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="collections" className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#2C2926]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#2C2926]/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C847C] font-sans-clean block">
              Curated Collections · 五大系列器物故事
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#221F1C] tracking-tight font-serif-brand">
              物本矩阵，
              <span className="italic">日用常美</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E6760] font-serif-brand">
              从晨起梳洗、通勤撑伞，到案头沉思、归家小憩。每一件器物均以捕捉自然光影为语言，天然材质为骨肉。
            </p>
          </div>

          {/* Interactive Filter Tabs (functional segmented controls per anti-slop guidelines) */}
          <div className="flex flex-wrap gap-1 p-1 bg-[#F1ECE4] border border-[#2C2926]/10">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wider transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#242220] text-[#FAF8F5] shadow-xs'
                      : 'text-[#615A52] hover:text-[#242220] hover:bg-[#FAF8F5]/50'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid: 3-column desktop layout with generous whitespace */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Curatorial Annotation below grid */}
        <div className="mt-16 p-8 border border-[#2C2926]/10 bg-[#F5F0E8] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-widest text-[#857E75] font-mono">
              Traceability & Craft · 工艺溯源承诺
            </p>
            <p className="text-base font-serif-brand text-[#2E2A26]">
              所有器物均附带可追溯原料产地标牌与自然降解指南，不含石化微塑料与挥发性有毒溶剂。
            </p>
          </div>
          <a
            href="#materials"
            className="px-5 py-2.5 text-xs tracking-wider uppercase bg-[#242220] text-[#FAF8F5] hover:bg-[#3D3833] transition-colors whitespace-nowrap"
          >
            查验可持续材质溯源
          </a>
        </div>
      </div>
    </section>
  );
};
