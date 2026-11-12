import React, { useState } from 'react';
import { Product } from '../types';
import { X, Sparkles, Check, ShoppingBag, Leaf } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number, giftWrapping: boolean) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [giftWrapping, setGiftWrapping] = useState<boolean>(false);
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity, giftWrapping);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#1F1C19]/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#FAF8F5] border border-[#2C2926]/15 shadow-2xl my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="关闭器物详情"
          className="absolute top-4 right-4 z-10 p-2 bg-[#FAF8F5]/80 text-[#242220] hover:bg-[#242220] hover:text-[#FAF8F5] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Product Image */}
          <div className="md:col-span-6 bg-[#F2EDE4] relative flex items-center justify-center min-h-[380px] p-6 border-b md:border-b-0 md:border-r border-[#2C2926]/10">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-[500px] w-auto max-w-full object-contain shadow-md"
              referrerPolicy="no-referrer"
            />
            {product.dimensions && (
              <span className="absolute bottom-4 left-6 text-[11px] text-[#7A736B] font-mono">
                规格：{product.dimensions}
              </span>
            )}
          </div>

          {/* Right Column: Narrative, Details & Contiguous Purchase Module */}
          <div className="md:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Category & Series */}
              <div className="flex items-center gap-2 text-xs text-[#878077] font-sans-clean">
                <span>{product.categoryLabel}</span>
                <span aria-hidden="true">/</span>
                <span>{product.series}</span>
              </div>

              {/* Title & EN */}
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-medium text-[#221F1C] font-serif-brand">
                  {product.name}
                </h2>
                <p className="text-xs uppercase tracking-wider text-[#8A837C] font-sans-clean">
                  {product.enName}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 pt-1 pb-3 border-b border-[#2C2926]/10">
                <span className="text-sm text-[#7D766E]">¥</span>
                <span className="text-2xl font-semibold text-[#242220] font-mono tabular-nums">
                  {product.price}
                </span>
                <span className="text-xs text-[#857E75] ml-3">（含自然素白环保包装）</span>
              </div>

              {/* Description */}
              <div className="text-xs sm:text-sm text-[#5C554E] font-serif-brand leading-relaxed space-y-2">
                <p>{product.description}</p>
              </div>

              {/* Light & Shadow Feature */}
              <div className="p-3.5 bg-[#F4EFE9] border border-[#2C2926]/10 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#242220]">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>动态光影特性：</span>
                </div>
                <p className="text-xs text-[#6B635A] font-serif-brand">
                  {product.lightFeature}
                </p>
              </div>

              {/* Materials Breakdown */}
              <div className="space-y-2 pt-1">
                <span className="text-xs uppercase tracking-wider text-[#8A837C] block font-sans-clean">
                  天然材质溯源：
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((m, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2.5 py-1 bg-[#EFE9DF] text-[#423C36] font-sans-clean border border-[#2C2926]/5"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sustainable Note */}
              <div className="flex items-start gap-2 text-xs text-[#59524B] bg-[#EFEBE4] p-3 border-l-2 border-[#242220]">
                <Leaf className="w-3.5 h-3.5 text-[#242220] shrink-0 mt-0.5" />
                <p>{product.sustainableNote}</p>
              </div>
            </div>

            {/* Purchase Action Module */}
            <div className="pt-4 border-t border-[#2C2926]/10 space-y-4">
              {/* Gift Wrap Toggle */}
              <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#524B44] select-none">
                <input
                  type="checkbox"
                  checked={giftWrapping}
                  onChange={(e) => setGiftWrapping(e.target.checked)}
                  className="rounded-none border-[#2C2926]/30 text-[#242220] focus:ring-0 w-4 h-4"
                />
                <span>需极简礼赠包装（雾面半透纸 + 黄铜铆钉手写笺）</span>
              </label>

              {/* Quantity & CTA */}
              <div className="flex items-center gap-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#2C2926]/20 bg-[#FAF8F5]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm text-[#453F39] hover:bg-[#EAE4DC] transition-colors"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-mono font-semibold tabular-nums text-[#242220]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm text-[#453F39] hover:bg-[#EAE4DC] transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Primary Button */}
                <button
                  onClick={handleAdd}
                  disabled={addedNotice}
                  className="flex-1 py-3 px-6 bg-[#242220] text-[#FAF8F5] hover:bg-[#3D3934] transition-all text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2 shadow-sm"
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>已加入典藏选物袋</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>加入选物袋 · ¥{product.price * quantity}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
