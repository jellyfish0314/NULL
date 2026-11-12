import React from 'react';
import { Sparkles, Check } from 'lucide-react';

interface CompetitorRow {
  brand: string;
  category: string;
  competitorLimitation: string;
  nulliDifferentiation: string;
  advantage: string;
}

const COMPARISONS: CompetitorRow[] = [
  {
    brand: '蕉下 / WPC',
    category: '防晒工具与配件',
    competitorLimitation: '局限于功能性防晒工具，黑胶涂层厚重，缺乏艺术叙事与生活美学。',
    nulliDifferentiation: '跳出工具防晒，定位自然光影艺术轻奢，拥有独家动态透光伞与全降解生态材质体系。',
    advantage: '动态光影艺术 + 轻奢生活方式',
  },
  {
    brand: 'Marimekko / SOU·SOU',
    category: '北欧 / 日式印花文创',
    competitorLimitation: '均为织物与器物表面的二维静态印花，印花图案成本高且存在审美疲劳。',
    nulliDifferentiation: '不印刷自然，而是「捕捉自然光影」。随阳光角度变化流动投射，光与器物共同创作。',
    advantage: '光动艺术（非印花）+ 零审美损耗',
  },
  {
    brand: '国家地理 (National Geographic)',
    category: '图片文创衍生',
    competitorLimitation: '依赖摄影照片直接喷绘印花，缺乏器物本身的通透材质感与系统成套性。',
    nulliDifferentiation: '将自然山林的光影折射与真植物标本融入器物肌理，艺术高级感与成套性更强。',
    advantage: '真材质肌理 + 空间光影融合',
  },
  {
    brand: 'Patagonia',
    category: '户外环保硬核机能',
    competitorLimitation: '强调硬核户外机能场景，设计偏粗粝工装，无法满足精致都市日常与室内居家。',
    nulliDifferentiation: '贯彻同样严苛的全链路可持续标准，同时无缝覆盖都市通勤、居家美学、礼赠与穿搭全场景。',
    advantage: '全场景覆盖（都市/居家/礼赠）',
  },
  {
    brand: '传统高端家纺家居',
    category: '单一家居软装',
    competitorLimitation: '仅局限于卧室或客厅单一静态单品，缺乏随身携带与外出场景的延展。',
    nulliDifferentiation: '实现「随身器物 + 案头书写 + 居家沉浸」统一的自然光影美学闭环。',
    advantage: '随身+居家 全生命周期闭环',
  },
];

export const CompetitiveMatrix: React.FC = () => {
  return (
    <section id="matrix" className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#2C2926]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C847C] font-sans-clean block">
            Competitive Differentiation · 行业独家差异化
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#221F1C] tracking-tight font-serif-brand">
            跳出传统赛道，
            <span className="italic">开辟光影生活美学</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6E6760] font-serif-brand leading-relaxed">
            融合 Marimekko 艺术叙事、SOU·SOU 极简质感、Patagonia 环保价值观与高端家居留白视觉，铸就独一无二的品牌壁垒。
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-14 overflow-x-auto border border-[#2C2926]/10 bg-[#FAF8F5]">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="border-b border-[#2C2926]/15 bg-[#F4EFE9] text-xs font-mono text-[#5A544D]">
                <th className="py-4 px-6 font-semibold">对比赛道与代表品牌</th>
                <th className="py-4 px-6 font-semibold">传统竞品局限</th>
                <th className="py-4 px-6 font-semibold text-[#1F1C19]">
                  Nulli 物本集 独家突破
                </th>
                <th className="py-4 px-6 font-semibold text-right">核心价值优势</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2C2926]/10 text-xs font-sans-clean">
              {COMPARISONS.map((row, idx) => (
                <tr 
                  key={idx}
                  className="hover:bg-[#F7F3EC] transition-colors"
                >
                  <td className="py-5 px-6 font-medium text-[#242220]">
                    <div className="font-serif-brand text-sm font-semibold">{row.brand}</div>
                    <div className="text-[11px] text-[#857E75] font-sans-clean mt-0.5">{row.category}</div>
                  </td>
                  <td className="py-5 px-6 text-[#706860] leading-relaxed max-w-xs">
                    {row.competitorLimitation}
                  </td>
                  <td className="py-5 px-6 text-[#242220] font-medium leading-relaxed max-w-sm bg-[#F8F4ED]/60">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                      <span>{row.nulliDifferentiation}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 text-right">
                    <span className="inline-block text-[11px] font-mono font-medium text-[#2E2924] bg-[#EFE9DF] px-2.5 py-1 border border-[#2C2926]/5">
                      {row.advantage}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Banner */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-[#242220] text-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-xs sm:text-sm font-serif-brand tracking-wider">
              国内首个动态自然光影 + 全场景高端生活方式集合
            </span>
          </div>
          <span className="text-xs text-[#C7C0B6] font-mono">
            拒绝网红快消 · 只为真实与长久审美买单
          </span>
        </div>
      </div>
    </section>
  );
};
