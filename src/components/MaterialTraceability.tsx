import React, { useState } from 'react';
import { MATERIAL_SPECS } from '../data/products';
import { Leaf, Recycle, ShieldCheck, Clock } from 'lucide-react';

interface TimelineStage {
  day: number;
  label: string;
  plaState: string;
  plasticState: string;
  soilImpact: string;
}

const TIMELINE_STAGES: TimelineStage[] = [
  {
    day: 0,
    label: '第 0 天 · 弃置堆肥',
    plaState: '完整植物基器物形态，无任何有害塑化剂挥发。',
    plasticState: '传统石油基塑料，表面惰性不吸水，抗微生物侵蚀。',
    soilImpact: '微生物开始附着于玉米淀粉高分子链。',
  },
  {
    day: 60,
    label: '第 60 天 · 微生物水解',
    plaState: '酶水解反应发生，分子链崩解脆化，碎裂为微细有机质。',
    plasticState: '结构毫无变化，微塑料开始随风蚀和紫外线脱落。',
    soilImpact: '真菌与细菌加速吸收碳水化合物养分。',
  },
  {
    day: 120,
    label: '第 120 天 · 深度腐殖化',
    plaState: '转化为腐殖质与有机营养土，无重金属残留。',
    plasticState: '持续残留千年，释放邻苯二甲酸酯等内分泌干扰物。',
    soilImpact: '土壤微生物菌群多样性健康活跃。',
  },
  {
    day: 180,
    label: '第 180 天 · 完全循环闭环',
    plaState: '100% 降解为水 (H₂O) 与二氧化碳 (CO₂)，重归自然循环。',
    plasticState: '仍需 450 年以上方能物理碎化，永久污染水体生态。',
    soilImpact: '转化为肥沃堆肥土，可直接用于新植物培育。',
  },
];

export const MaterialTraceability: React.FC = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(3);
  const currentStage = TIMELINE_STAGES[selectedDayIndex];

  return (
    <section id="materials" className="py-24 lg:py-32 bg-[#F6F2EA] border-b border-[#2C2926]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#878077] font-sans-clean block">
            Material Traceability & Sustainability · 全链路可持续材质
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#221F1C] tracking-tight font-serif-brand">
            视觉自然，
            <span className="italic">材质亦回归自然</span>
          </h2>
          <p className="text-sm sm:text-base text-[#69625A] font-serif-brand leading-relaxed">
            全线拒绝石化树脂复合涂层、拒绝覆膜包装、拒绝化学增塑剂。以植物基、天然纤维与大豆油墨呈现最本真的肌理，建立真实的可持续闭环。
          </p>
        </div>

        {/* 5 Core Materials Showcase */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATERIAL_SPECS.map((mat, i) => (
            <div
              key={i}
              className="p-6 bg-[#FAF8F5] border border-[#2C2926]/10 space-y-4 hover:border-[#2C2926]/30 transition-colors"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#2C2926]/10">
                <span className="text-xs font-mono text-[#8C847B]">0{i + 1}</span>
                <span className="text-[11px] text-[#696259] font-sans-clean">{mat.origin}</span>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#221F1C] font-serif-brand">
                  {mat.name}
                </h3>
                <p className="text-[11px] text-[#8C847B] font-mono mt-0.5">
                  {mat.enName}
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#5E574F] font-sans-clean">
                <p className="font-medium text-[#242220] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-800" />
                  <span>{mat.features}</span>
                </p>
                <p className="text-[#7A736B]">应用范围：{mat.application}</p>
              </div>

              <div className="pt-3 border-t border-dashed border-[#2C2926]/15 text-[11px] text-[#827A71] bg-[#F3EDE3] p-2.5">
                <span className="font-semibold text-[#544E47]">对比传统：</span>
                {mat.contrast}
              </div>
            </div>
          ))}

          {/* 6th Card: Zero Compromise Standard */}
          <div className="p-6 bg-[#242220] text-[#FAF8F5] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#B5ADA3] font-mono">
                Nulli Standard
              </span>
              <h3 className="text-xl font-light font-serif-brand leading-snug">
                拒绝“网红式伪环保”
                <br />
                做真实可查证的去冗余
              </h3>
              <p className="text-xs text-[#C2BBB2] font-sans-clean leading-relaxed">
                许多快消品牌以所谓环保纸袋为噱头，内层却依然附带难以降解的复合塑料覆膜。Nulli 坚持从原材料到封签黄铜螺栓，均做到单一材料可分离降解。
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-[#E5DFD6]">
              <Recycle className="w-4 h-4 text-emerald-400" />
              <span>全系通过 EN 13432 生物可降解测试</span>
            </div>
          </div>
        </div>

        {/* Interactive Biodegradation Timeline Simulator */}
        <div className="mt-16 p-8 bg-[#FAF8F5] border border-[#2C2926]/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#2C2926]/10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#242220]">
                <Clock className="w-4 h-4" />
                <span>自然降解周期对照试验模拟（180天闭环）</span>
              </div>
              <p className="text-xs text-[#7A7269] font-serif-brand">
                点击切换降解周期节点，直观观察植物基材料与传统塑料的自然演变。
              </p>
            </div>

            {/* Stage Selector Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#EFE9DF] border border-[#2C2926]/10">
              {TIMELINE_STAGES.map((stage, idx) => (
                <button
                  key={stage.day}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all ${
                    selectedDayIndex === idx
                      ? 'bg-[#242220] text-[#FAF8F5]'
                      : 'text-[#635C54] hover:text-[#242220]'
                  }`}
                >
                  {stage.day}天
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Comparison View */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* PLA & Botanical Degradation */}
            <div className="p-6 bg-[#F3EFE7] border border-[#2C2926]/15 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-900 tracking-wider flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-emerald-800" />
                  Nulli 植物基 PLA 与农秸纸
                </span>
                <span className="text-xs font-mono font-medium text-[#4D4740]">
                  {currentStage.label}
                </span>
              </div>

              <p className="text-sm font-serif-brand text-[#2E2A26] leading-relaxed">
                {currentStage.plaState}
              </p>

              <div className="pt-3 border-t border-[#2C2926]/10 text-xs text-[#6B635A]">
                <span className="font-medium text-[#242220]">土壤生态反馈：</span>
                {currentStage.soilImpact}
              </div>
            </div>

            {/* Traditional Plastic Persistence */}
            <div className="p-6 bg-[#ECE8DF] border border-[#2C2926]/15 space-y-4 opacity-80">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#665F57] tracking-wider">
                  传统化纤与覆膜塑料
                </span>
                <span className="text-xs font-mono text-[#8C847B]">
                  无法在自然中降解
                </span>
              </div>

              <p className="text-sm font-serif-brand text-[#47413A] leading-relaxed">
                {currentStage.plasticState}
              </p>

              <div className="pt-3 border-t border-[#2C2926]/10 text-xs text-[#7A736B]">
                <span className="font-medium text-[#47413A]">生态代价：</span>
                需几百年形成微塑料，渗透进地下水与食物链循环。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
