import React, { useState } from 'react';
import { Gift, Check, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface GiftingSectionProps {
  onAddToCart: (product: Product, quantity: number, giftWrapping: boolean, giftMessage?: string) => void;
}

export const GiftingSection: React.FC<GiftingSectionProps> = ({ onAddToCart }) => {
  const [recipient, setRecipient] = useState<string>('致 珍视的挚友');
  const [message, setMessage] = useState<string>('愿这缕来自山野的北国雪松与自然晨光，能为你日常的生活带来温润的安宁。物归本，无繁饰。');
  const [selectedPackaging, setSelectedPackaging] = useState<string>('frosted');
  const [addedNotice, setAddedNotice] = useState<boolean>(false);

  // Default featured gift set (Northern Cedar EDP + Hand Care Set)
  const giftProduct = PRODUCTS.find(p => p.id === 'frosted-shadow-gift-box') || PRODUCTS[0];

  const handleAddGift = () => {
    onAddToCart(giftProduct, 1, true, `${recipient}: ${message}`);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  return (
    <section id="gifting" className="py-24 lg:py-32 bg-[#F6F2EA] border-b border-[#2C2926]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#878077] font-sans-clean block">
            Minimal Gifting Aesthetic · 极简礼赠美学
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#221F1C] tracking-tight font-serif-brand">
            虚实相生，
            <span className="italic">以器物赠时光</span>
          </h2>
          <p className="text-sm sm:text-base text-[#69625A] font-serif-brand leading-relaxed">
            摒弃浮夸的覆膜烫金与臃肿包装。Nulli 以雾面半透装裱、纯铜铆钉与手写棉纸，呈现最克制、最深邃的赠礼心意。
          </p>
        </div>

        {/* 2-Column Split: Visual Packaging Show + Interactive Gift Preview */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Packaging Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden bg-[#FAF8F5] border border-[#2C2926]/10 shadow-sm">
              <img
                src="./assets/aistudio/QQ__20261014170318_8__fcaebec8.png"
                alt="雾影半透自然装裱典藏礼盒"
                className="w-full h-auto object-cover max-h-[520px]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Tag overlay */}
              <div className="absolute top-4 left-4 bg-[#FAF8F5]/90 backdrop-blur-xs px-3 py-1.5 text-xs font-serif-brand text-[#242220] border border-[#2C2926]/10">
                雾面半透装裱 · 内部器物剪影若隐若现
              </div>
            </div>

            <p className="mt-3 text-xs text-[#857E75] text-center font-serif-brand">
              可降解半透 PLA 硬壳 · 废弃后可长效作为案头首饰收纳盒
            </p>
          </div>

          {/* Right Column: Interactive Card Customizer */}
          <div className="lg:col-span-6 p-8 bg-[#FAF8F5] border border-[#2C2926]/10 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#2C2926]/10">
              <span className="text-xs uppercase tracking-wider text-[#8A837B] font-mono">
                Custom Gifting · 定制礼赠寄语
              </span>
              <Gift className="w-4 h-4 text-[#242220]" />
            </div>

            {/* Packaging Option */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#242220] block">
                选择装裱形式：
              </label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedPackaging('frosted')}
                  className={`p-3 text-left border transition-all ${
                    selectedPackaging === 'frosted'
                      ? 'border-[#242220] bg-[#242220] text-[#FAF8F5]'
                      : 'border-[#2C2926]/15 hover:border-[#2C2926]/40 text-[#47413A]'
                  }`}
                >
                  <div className="font-serif-brand font-medium">雾影半透典藏礼盒</div>
                  <div className="text-[10px] opacity-80 mt-0.5">半透硬盒 + 甘蔗渣内托</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedPackaging('linen')}
                  className={`p-3 text-left border transition-all ${
                    selectedPackaging === 'linen'
                      ? 'border-[#242220] bg-[#242220] text-[#FAF8F5]'
                      : 'border-[#2C2926]/15 hover:border-[#2C2926]/40 text-[#47413A]'
                  }`}
                >
                  <div className="font-serif-brand font-medium">素白棉麻束口礼袋</div>
                  <div className="text-[10px] opacity-80 mt-0.5">未漂白有机亚麻 + 纯铜标</div>
                </button>
              </div>
            </div>

            {/* Recipient Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#242220] block">
                收礼者称谓：
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F7F4EE] border border-[#2C2926]/15 text-[#242220] focus:outline-none focus:border-[#242220]"
                placeholder="例如：致 珍视的某某"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#242220] block">
                手写棉纸寄语（将由书法师手写大豆墨打印于秸秆纸）：
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#F7F4EE] border border-[#2C2926]/15 text-[#242220] focus:outline-none focus:border-[#242220] leading-relaxed font-serif-brand"
                placeholder="写下你真挚的赠言..."
              />
            </div>

            {/* Live Card Preview Box */}
            <div className="p-4 bg-[#F2EDE4] border border-dashed border-[#2C2926]/20 relative">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-700/60 mx-auto mb-2" title="纯铜铆钉固定" />
              <div className="text-center space-y-2">
                <p className="text-xs font-serif-brand font-medium text-[#242220]">
                  {recipient}
                </p>
                <p className="text-[11px] font-serif-brand text-[#635C53] italic leading-relaxed px-4">
                  “{message}”
                </p>
                <p className="text-[10px] font-mono text-[#8C847B] pt-1">
                  —— Nulli 物本集 · 手作封笺
                </p>
              </div>
            </div>

            {/* Add Gift to Bag CTA */}
            <button
              onClick={handleAddGift}
              disabled={addedNotice}
              className="w-full py-3.5 px-6 bg-[#242220] text-[#FAF8F5] hover:bg-[#3D3934] transition-all text-xs tracking-wider uppercase font-medium flex items-center justify-center gap-2 shadow-sm"
            >
              {addedNotice ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>礼盒与定制寄语已存入选物袋</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>定制此专属礼盒并加入选物袋 · ¥{giftProduct.price}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
