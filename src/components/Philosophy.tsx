import React from 'react';
import { Sun, Feather, RefreshCw, Sparkles } from 'lucide-react';
import { BRAND_MANIFESTO } from '../data/products';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-32 border-b border-[#2C2926]/10 relative bg-[#F7F4EE]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-[#857D74] font-sans-clean">
            Brand Philosophy · 品牌哲学与溯源
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#221F1C] tracking-tight font-serif-brand">
            器物归于本真，
            <span className="italic">素物合集</span>
          </h2>
          <p className="text-base text-[#615A52] font-serif-brand leading-relaxed">
            Nulli 源自拉丁语 <span className="font-sans italic">nullus</span>，意为“去冗余，无多余”。我们跳出快消式图案印花，以自然光影与真实材质，对抗快时尚的审美消耗。
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="p-8 bg-[#FAF8F5] border border-[#2C2926]/10 space-y-4">
            <div className="w-9 h-9 flex items-center justify-center text-[#242220] bg-[#EFE9DF]">
              <Sun className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-medium text-[#221F1C] font-serif-brand">捕捉光影，而非印花</h3>
            <p className="text-xs text-[#6B645D] leading-relaxed font-sans-clean">
              不印刷死板的自然图案，而是让器物通透承光，将清晨、正午、黄昏的光束与山林树影自然投射在居室墙面。
            </p>
          </div>

          <div className="p-8 bg-[#FAF8F5] border border-[#2C2926]/10 space-y-4">
            <div className="w-9 h-9 flex items-center justify-center text-[#242220] bg-[#EFE9DF]">
              <Feather className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-medium text-[#221F1C] font-serif-brand">物归本真，去冗余</h3>
            <p className="text-xs text-[#6B645D] leading-relaxed font-sans-clean">
              不打醒目品牌大标，不做繁杂的多余装饰。让手握的触感、器物重心与材质原味成为主角，经得起漫长岁月的使用。
            </p>
          </div>

          <div className="p-8 bg-[#FAF8F5] border border-[#2C2926]/10 space-y-4">
            <div className="w-9 h-9 flex items-center justify-center text-[#242220] bg-[#EFE9DF]">
              <RefreshCw className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-medium text-[#221F1C] font-serif-brand">全链路闭环可持续</h3>
            <p className="text-xs text-[#6B645D] leading-relaxed font-sans-clean">
              拒绝不可降解的复合塑料覆膜与化学涂层。坚持使用植物基PLA、有机高支亚麻、竹木与秸秆纸，实现回归自然的降解循环。
            </p>
          </div>

          <div className="p-8 bg-[#FAF8F5] border border-[#2C2926]/10 space-y-4">
            <div className="w-9 h-9 flex items-center justify-center text-[#242220] bg-[#EFE9DF]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-lg font-medium text-[#221F1C] font-serif-brand">虚实相生，长效治愈</h3>
            <p className="text-xs text-[#6B645D] leading-relaxed font-sans-clean">
              器物为实，光影为虚。将山野、湖海、云天的瞬息流动带入室内，成为都市日常中随时可随身携带、可居家沉浸的长效治愈。
            </p>
          </div>
        </div>

        {/* Deep Manifesto Narrative Split with User Images */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Images Duo */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="overflow-hidden border border-[#2C2926]/10 bg-[#FAF8F5]">
                <img
                  src="/assets/aistudio/2679451f-4790-448f-9fcd-2428f4fca08d_19172bd2.png"
                  alt="草木日影透光黄铜挂屏"
                  className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] text-[#78716A] text-center font-serif-brand">
                窗前日影游移 · 不印刷自然，而是捕捉自然
              </p>
            </div>

            <div className="space-y-3 pt-8">
              <div className="overflow-hidden border border-[#2C2926]/10 bg-[#FAF8F5]">
                <img
                  src="/assets/aistudio/cdaa491e-81a1-4bc8-902c-c21ca3b78438_78fefdc9.png"
                  alt="浮光绿叶凝露晶体"
                  className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-[11px] text-[#78716A] text-center font-serif-brand">
                澄泉净意 · 植物基水纹与原叶共生
              </p>
            </div>
          </div>

          {/* Manifesto Text Block */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <div className="inline-block border-b border-[#2C2926]/20 pb-1">
              <span className="text-xs uppercase tracking-widest text-[#7C746C] font-mono">
                Manifesto · 品牌宣言
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-[#221F1C] font-serif-brand leading-snug">
              {BRAND_MANIFESTO.title}
              <br />
              <span className="text-[#696159] text-xl font-normal">
                {BRAND_MANIFESTO.subtitle}
              </span>
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#575048] leading-relaxed font-serif-brand">
              <p>{BRAND_MANIFESTO.p1}</p>
              <p className="font-light">{BRAND_MANIFESTO.p2}</p>
              <p className="border-l border-[#2C2926]/30 pl-4 text-[#2E2B27] italic font-normal">
                {BRAND_MANIFESTO.p3}
              </p>
              <p className="text-xs sm:text-sm text-[#736B62] font-sans-clean leading-normal">
                {BRAND_MANIFESTO.p4}
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-[#7A726A] font-sans-clean">
              <div>
                <span className="block text-xl font-light text-[#221F1C] font-serif-brand">0%</span>
                <span>冗余塑料复合涂层</span>
              </div>
              <div className="w-px h-8 bg-[#2C2926]/10" />
              <div>
                <span className="block text-xl font-light text-[#221F1C] font-serif-brand">100%</span>
                <span>植物基与循环天然材</span>
              </div>
              <div className="w-px h-8 bg-[#2C2926]/10" />
              <div>
                <span className="block text-xl font-light text-[#221F1C] font-serif-brand">360°</span>
                <span>全天候自然动态光影</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
