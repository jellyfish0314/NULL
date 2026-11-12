import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#242220] text-[#FAF8F5] pt-20 pb-14 border-t border-[#38332E]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main Brand Creed & Epilogue */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#3E3832]">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-2xl sm:text-3xl font-light tracking-wider font-serif-brand block">
                Nulli 物本集
              </span>
              <p className="text-xs uppercase tracking-widest text-[#9C948A] font-sans-clean">
                Natural Care For A Longer Beauty · 物归本，无繁饰
              </p>
            </div>

            <p className="text-sm font-serif-brand text-[#D1C9BE] leading-relaxed max-w-lg">
              以「把自然融入生活」为核心，以透光光影艺术为独有语言，以天然可降解材质为底层标准，打造国内首个动态自然光影与全场景高端生活方式品牌。让山野、湖海、云天的瞬息之美，成为都市日常可随身携带、可居家沉浸的长效治愈美学。
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#B0A79A]">
              <span>纯粹</span>
              <span aria-hidden="true">·</span>
              <span>真实</span>
              <span aria-hidden="true">·</span>
              <span>自然</span>
              <span aria-hidden="true">·</span>
              <span>简洁</span>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs font-sans-clean">
            <div className="space-y-3">
              <p className="uppercase tracking-widest text-[#8A8175] text-[11px] font-semibold">
                五大系列
              </p>
              <ul className="space-y-2 text-[#C4BCB0]">
                <li><a href="#collections" className="hover:text-white transition-colors">光影透光器物</a></li>
                <li><a href="#collections" className="hover:text-white transition-colors">北国雪松香氛</a></li>
                <li><a href="#collections" className="hover:text-white transition-colors">晨露植萃手护</a></li>
                <li><a href="#collections" className="hover:text-white transition-colors">花野之境立绒地毯</a></li>
                <li><a href="#collections" className="hover:text-white transition-colors">澄澈雨雾晴雨伞</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="uppercase tracking-widest text-[#8A8175] text-[11px] font-semibold">
                理念与溯源
              </p>
              <ul className="space-y-2 text-[#C4BCB0]">
                <li><a href="#philosophy" className="hover:text-white transition-colors">品牌哲学宣言</a></li>
                <li><a href="#light-simulator" className="hover:text-white transition-colors">动态光影实验室</a></li>
                <li><a href="#materials" className="hover:text-white transition-colors">180天降解闭环</a></li>
                <li><a href="#materials" className="hover:text-white transition-colors">0复合涂层标准</a></li>
                <li><a href="#gifting" className="hover:text-white transition-colors">极简礼赠定制</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="uppercase tracking-widest text-[#8A8175] text-[11px] font-semibold">
                线下空间
              </p>
              <ul className="space-y-2 text-[#C4BCB0]">
                <li><span className="text-[#E0D8CD]">上海安福路「日影之隙」</span></li>
                <li><span className="text-[#E0D8CD]">北京东四「素物澄境」</span></li>
                <li><span className="text-[#E0D8CD]">杭州天目里「山野流光」</span></li>
                <li><span className="text-[10px] text-[#8A8175] block mt-1">周二至周日预约制开放</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Baseline Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8277] font-sans-clean">
          <p>© {new Date().getFullYear()} Nulli 物本集. All rights reserved. 沪ICP备20268899号.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#FAF8F5] transition-colors cursor-pointer">环保协议</span>
            <span className="hover:text-[#FAF8F5] transition-colors cursor-pointer">材质溯源查验</span>
            <span className="hover:text-[#FAF8F5] transition-colors cursor-pointer">隐私与礼赠服务</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
