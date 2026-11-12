import React from 'react';
import { Product } from '../types';
import { Eye, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
}) => {
  return (
    <article className="group relative flex flex-col bg-[#FAF8F5] border border-[#2C2926]/10 transition-all duration-300 hover:border-[#2C2926]/30 hover:shadow-sm">
      {/* Product Image Container */}
      <div 
        className="relative aspect-[4/5] w-full overflow-hidden bg-[#F2EDE4] cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Hover Quick Actions */}
        <div className="absolute inset-0 bg-[#1F1C19]/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
          <div className="w-full flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onQuickView(product);
              }}
              className="flex-1 py-2 px-3 text-xs tracking-wider uppercase font-medium bg-[#FAF8F5] text-[#242220] hover:bg-white transition-colors flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>器物详情</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              aria-label={`加入选物袋 ${product.name}`}
              className="p-2 bg-[#242220] text-[#FAF8F5] hover:bg-[#3E3A36] transition-colors shadow-sm"
              title="加入选物袋"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Metadata & Typography (Zero-Pill Discipline) */}
      <div className="flex flex-1 flex-col justify-between p-5 space-y-3">
        <div className="space-y-1.5">
          {/* Unboxed metadata with typographic separator */}
          <div className="flex items-center gap-2 text-xs text-[#878077] font-sans-clean">
            <span>{product.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{product.series}</span>
          </div>

          <h3 
            onClick={() => onQuickView(product)}
            className="text-base font-medium text-[#242220] font-serif-brand tracking-tight cursor-pointer hover:text-[#575048] transition-colors line-clamp-1"
          >
            {product.name}
          </h3>

          <p className="text-xs text-[#736B63] font-serif-brand line-clamp-2 leading-relaxed">
            {product.summary}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-[#2C2926]/10 flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-xs text-[#857D74]">¥</span>
            <span className="text-base font-semibold text-[#242220] font-mono tabular-nums">
              {product.price}
            </span>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="text-xs font-medium text-[#4A443E] hover:text-[#1F1C19] hover:underline underline-offset-4 transition-colors"
          >
            入袋 +
          </button>
        </div>
      </div>
    </article>
  );
};
