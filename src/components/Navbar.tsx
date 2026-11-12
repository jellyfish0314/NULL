import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#2C2926]/10 bg-[#FAF8F5]/90 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6 lg:px-12">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex items-baseline gap-2 text-xl tracking-wider text-[#242220] transition-opacity hover:opacity-80 whitespace-nowrap shrink-0 font-serif-brand"
        >
          <span className="font-medium tracking-widest text-2xl">Nulli</span>
          <span className="text-sm font-normal text-[#6E6862] tracking-widest">物本集</span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-widest text-[#5C5650] uppercase font-sans-clean">
          <a 
            href="#philosophy" 
            className="hover:text-[#1F1C19] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#2C2926]"
          >
            品牌哲学
          </a>
          <a 
            href="#collections" 
            className="hover:text-[#1F1C19] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#2C2926]"
          >
            系列器物
          </a>
          <a 
            href="#materials" 
            className="hover:text-[#1F1C19] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#2C2926]"
          >
            材质溯源
          </a>
          <a 
            href="#matrix" 
            className="hover:text-[#1F1C19] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#2C2926]"
          >
            品牌差异
          </a>
          <a 
            href="#gifting" 
            className="hover:text-[#1F1C19] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#2C2926]"
          >
            礼赠美学
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenCart}
            aria-label="打开选物袋"
            className="group flex items-center gap-2.5 px-4 py-2 text-xs font-medium tracking-wider text-[#FAF8F5] bg-[#242220] rounded-none hover:bg-[#3E3A36] transition-all whitespace-nowrap shrink-0"
          >
            <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />
            <span>选物袋</span>
            <span className="font-mono tabular-nums text-[11px] text-[#D8D2CA]">
              ({cartCount})
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
