import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onMaterialsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onMaterialsClick }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-[#2C2926]/10">
      {/* Subtle organic light gradient & caustics backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-[#EFE9DF] blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] rounded-full bg-[#E5DFD5] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top subtle brand metadata / phonetic origin */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#2C2926]/10 text-xs tracking-widest text-[#78716A]">
          <div className="flex items-center gap-2">
            <span>Nulli</span>
            <span aria-hidden="true">/</span>
            <span>/ˈnuːli/</span>
            <span aria-hidden="true">·</span>
            <span>拉丁语 nullus (无多余)</span>
          </div>
          <div className="flex items-center gap-3">
            <span>器物归于本真</span>
            <span aria-hidden="true">·</span>
            <span>素物合集</span>
            <span aria-hidden="true">·</span>
            <span>自然光影生活美学</span>
          </div>
        </div>

        {/* Main 2-column editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-center">
          {/* Left Column: Philosophical Manifesto & Typographic Core */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8C847C] font-sans-clean block">
                Pure · Authentic · Natural · Minimal
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-[#221F1C] font-serif-brand">
                物归本，
                <br />
                <span className="italic font-light text-[#57514B]">无繁饰。</span>
              </h1>
            </div>

            <div className="space-y-4 max-w-lg text-[#554F49] text-base lg:text-lg leading-relaxed font-serif-brand">
              <p className="text-xl lg:text-2xl font-light text-[#2A2724]">
                “不印刷自然，而是捕捉自然。”
              </p>
              <p className="text-sm lg:text-base text-[#6E6760] font-sans-clean leading-relaxed">
                大众开始反感快消式的过度印花与包装噱头。器物不该是图案的承载体，光影亦不是印刷上去的纹路，而是太阳角度与真实材质自然生成的诗意共创。
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3.5 text-xs tracking-widest uppercase font-medium text-[#FAF8F5] bg-[#242220] hover:bg-[#3D3934] transition-all whitespace-nowrap shadow-sm"
              >
                浏览五大系列器物
              </button>
              <button
                onClick={onMaterialsClick}
                className="group flex items-center gap-2 px-6 py-3.5 text-xs tracking-widest uppercase font-medium text-[#242220] border border-[#242220]/25 hover:border-[#242220] bg-transparent hover:bg-[#FAF8F5] transition-all whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8C847C] group-hover:text-[#242220] transition-colors" />
                <span>探寻可持续材质溯源</span>
              </button>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-6 border-t border-[#2C2926]/10 grid grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#8A837B]">材质标准</p>
                <p className="text-sm font-medium text-[#2A2724] mt-1 font-serif-brand">100% 植物基与天然源</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#8A837B]">光学表现</p>
                <p className="text-sm font-medium text-[#2A2724] mt-1 font-serif-brand">360° 自然焦散与折射</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-[#8A837B]">设计准则</p>
                <p className="text-sm font-medium text-[#2A2724] mt-1 font-serif-brand">零无谓印花 · 去冗余</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with authentic user imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Visual: Brand Philosophy Card with brass pin and sunlight caustics */}
              <div className="relative overflow-hidden bg-[#F2EDE4] border border-[#2C2926]/10 shadow-sm transition-transform duration-700 hover:scale-[1.01]">
                <img
                  src="/assets/aistudio/0a8f1ae5-ff57-4f6c-bf1b-78c6c777eab5_b00770dc.png"
                  alt="Nulli 物本集品牌哲学手札与日影"
                  className="w-full h-auto object-cover max-h-[580px]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating caption overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1F1C19]/80 via-[#1F1C19]/40 to-transparent p-6 text-[#FAF8F5]">
                  <p className="text-xs uppercase tracking-widest text-[#D9D3CA] font-sans-clean">
                    Capturing Light & Shadow · 捕捉自然
                  </p>
                  <p className="text-base lg:text-lg font-serif-brand font-light mt-1 text-[#F5F2ED]">
                    【虚与实】【光与影】 让山野的瞬息之美，融入都市日常。
                  </p>
                </div>
              </div>

              {/* Secondary Floating Accent Card: Northern Cedar EDP in foliage light */}
              <div className="hidden sm:block absolute -bottom-8 -left-8 w-44 lg:w-48 bg-[#FAF8F5] p-2.5 border border-[#2C2926]/15 shadow-md">
                <img
                  src="/assets/aistudio/QQ__20261014170318_11__fb4dc56f.png"
                  alt="北国雪松香水与冷翠松影"
                  className="w-full h-44 object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="pt-2 text-center">
                  <p className="text-[11px] text-[#423D38] font-serif-brand">北国雪松 · 纯萃浓香水</p>
                  <p className="text-[10px] text-[#8C847C] font-mono">50ml / 纯天然精油</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet scroll indicator */}
        <div className="flex justify-center pt-16">
          <a
            href="#philosophy"
            className="group flex flex-col items-center gap-1.5 text-[11px] tracking-widest uppercase text-[#8C847C] hover:text-[#242220] transition-colors"
          >
            <span>探索物本理念</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
