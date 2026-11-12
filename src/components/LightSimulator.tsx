import React, { useState, useId } from 'react';
import { Sun, Sparkles, Sliders, Volume2, VolumeX, Eye } from 'lucide-react';
import { LIGHT_PRESETS } from '../data/products';

interface Artifact {
  id: string;
  name: string;
  material: string;
  refractiveIndex: number;
  image: string;
  causticType: 'geometric' | 'botanical' | 'prism' | 'canopy';
  description: string;
}

const ARTIFACTS: Artifact[] = [
  {
    id: 'suncatcher',
    name: '草木日影透光黄铜挂屏',
    material: '超白浮法玻璃 + 黄铜',
    refractiveIndex: 1.52,
    image: '/assets/aistudio/2679451f-4790-448f-9fcd-2428f4fca08d_19172bd2.png',
    causticType: 'botanical',
    description: '窗前随日光游移，真叶脉络与水波折射将整面白墙变为流动光映画布。',
  },
  {
    id: 'cubes',
    name: '草木标本透光晶砖',
    material: '植物基可降解光学树脂',
    refractiveIndex: 1.49,
    image: '/assets/aistudio/19567565-a543-476c-b6f9-1c0cc35cf157_aa31260a.png',
    causticType: 'geometric',
    description: '45mm 立方体多向折射，随太阳角度在桌面投射晶体焦散与叶片清晰投影。',
  },
  {
    id: 'bottle',
    name: '北国雪松香水瓶',
    material: '无铅重质光学白玻璃',
    refractiveIndex: 1.54,
    image: '/assets/aistudio/QQ__20261014170318_11__fb4dc56f.png',
    causticType: 'prism',
    description: '几何棱柱切面汇聚顶光，将冷杉清冷绿意投射出宛若森林晨曦的光束。',
  },
  {
    id: 'umbrella',
    name: '澄澈雨雾长柄晴雨伞',
    material: '高透TPU微棱镜伞面',
    refractiveIndex: 1.45,
    image: '/assets/aistudio/0ee48f3d-6fa6-486e-939c-4ec962bcdba4_1a3ca87b.png',
    causticType: 'canopy',
    description: '撑开伞面，树影与雨水在伞下交错折射，步履间随时拥有专属林荫。',
  },
];

export const LightSimulator: React.FC = () => {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact>(ARTIFACTS[0]);
  const [sunAngle, setSunAngle] = useState<number>(45); // 15 to 165 deg
  const [intensity, setIntensity] = useState<number>(0.85); // 0.4 to 1.0
  const [activePreset, setActivePreset] = useState<string>('morning');
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  const angleSliderId = useId();
  const intensitySliderId = useId();

  // Handle ambient tone via Web Audio API (gentle natural harmonic chime & breeze)
  const toggleAmbientSound = () => {
    if (isAudioPlaying) {
      if (audioContext) {
        audioContext.close();
        setAudioContext(null);
      }
      setIsAudioPlaying(false);
    } else {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        
        // Gentle warm harmonic drone
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(174, ctx.currentTime); // 174 Hz solfeggio healing tone
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(261.63, ctx.currentTime); // C4

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        setAudioContext(ctx);
        setIsAudioPlaying(true);
      } catch {
        // audio fail graceful fallback
      }
    }
  };

  const handleSelectPreset = (presetId: string) => {
    setActivePreset(presetId);
    const p = LIGHT_PRESETS.find(item => item.id === presetId);
    if (p) {
      setSunAngle(p.angle);
      setIntensity(p.intensity);
    }
  };

  // Shadow calculation based on angle: 90 is directly overhead (offset 0), 30 is morning (sun on left, shadow cast to right)
  const rad = (sunAngle * Math.PI) / 180;
  const shadowOffsetX = Math.cos(rad) * -70; // negative cos so morning (angle < 90) casts shadow right
  const shadowOffsetY = Math.sin(rad) * 25 + 10;
  const shadowBlur = Math.max(8, (1 - Math.sin(rad)) * 40 + 8);
  const shadowOpacity = intensity * 0.45;

  // Caustic highlight calculation (in front of object, refracting light)
  const causticOffsetX = Math.cos(rad) * -45;
  const causticOffsetY = Math.sin(rad) * 35;
  const causticScale = 0.9 + Math.sin(rad) * 0.3;

  return (
    <section id="light-simulator" className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#2C2926]/10 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#2C2926]/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C847C] font-sans-clean block">
              Dynamic Light & Caustic Simulation · 行业独有动态光影体验
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#221F1C] tracking-tight font-serif-brand">
              不是死印花，
              <span className="italic">是光与器物的共同创作</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E6760] font-serif-brand">
              滑动太阳角度与时段，观察真实透光器物随光线角度流转投射的自然焦散（Caustics）与树影。
            </p>
          </div>

          {/* Soundscape button */}
          <button
            onClick={toggleAmbientSound}
            className="flex items-center gap-2.5 px-4 py-2 text-xs tracking-wider uppercase border border-[#2C2926]/20 bg-[#F4EFEA] hover:bg-[#EAE4DC] text-[#2C2926] transition-all self-start lg:self-auto"
            title="开启自然光影环境白噪音"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-emerald-800" />
                <span>光影治愈白噪音：已开启</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#8A837B]" />
                <span>开启自然光影氛围音</span>
              </>
            )}
          </button>
        </div>

        {/* Main Interactive Stage */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Interactive Sun Canvas & Caustic Viewport */}
          <div className="lg:col-span-8 space-y-6">
            <div 
              className="relative w-full h-[460px] sm:h-[540px] bg-[#F2EDE4] border border-[#2C2926]/10 overflow-hidden flex items-center justify-center select-none"
              style={{
                // Ambient wall tint based on sun angle
                backgroundColor: sunAngle < 60 ? '#F6ECE0' : sunAngle > 120 ? '#F7E7D5' : '#F4EFE7',
              }}
            >
              {/* Sun Arc Path Visualizer */}
              <div className="absolute top-6 inset-x-8 h-28 pointer-events-none border-b border-dashed border-[#2C2926]/15 rounded-b-[100%] opacity-60">
                {/* Visual Sun Marker following angle */}
                <div
                  className="absolute w-8 h-8 -top-4 rounded-full bg-amber-400/90 shadow-[0_0_24px_rgba(245,158,11,0.6)] flex items-center justify-center transition-all duration-300 pointer-events-auto cursor-pointer"
                  style={{
                    left: `${((sunAngle - 15) / (165 - 15)) * 92 + 4}%`,
                    transform: `translateY(${Math.sin((sunAngle * Math.PI) / 180) * -14}px)`,
                  }}
                  title={`当前太阳方位角：${sunAngle}°`}
                >
                  <Sun className="w-4 h-4 text-amber-950 animate-spin" style={{ animationDuration: '40s' }} />
                </div>
              </div>

              {/* Angle Readout Overlay */}
              <div className="absolute top-4 left-6 text-xs text-[#7A726A] font-mono flex items-center gap-2">
                <span>方位角：{sunAngle}°</span>
                <span>·</span>
                <span>透射率：{Math.round(selectedArtifact.refractiveIndex * 62)}%</span>
              </div>

              {/* Wall Surface Texture */}
              <div className="absolute inset-0 paper-grain pointer-events-none opacity-40" />

              {/* Dynamic Optical Caustic & Light Pattern Layer */}
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-300"
                style={{
                  transform: `translate(${causticOffsetX}px, ${causticOffsetY}px) scale(${causticScale})`,
                  opacity: intensity * 0.75,
                }}
              >
                {/* SVG Caustic Ripple Overlay */}
                <svg className="w-full h-full opacity-60 mix-blend-overlay filter blur-[1px]">
                  <defs>
                    <radialGradient id="causticGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFF9E6" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#FFEBB8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
                    </radialGradient>
                    <filter id="turb">
                      <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                  </defs>
                  <ellipse
                    cx="50%"
                    cy="65%"
                    rx="140"
                    ry="70"
                    fill="url(#causticGlow)"
                    filter="url(#turb)"
                    className="animate-caustic"
                  />
                </svg>
              </div>

              {/* The Physical Object + Projected Shadow */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Reactive Cast Shadow */}
                <div
                  className="absolute bottom-2 w-48 h-12 rounded-full bg-[#302A24] pointer-events-none transition-all duration-300"
                  style={{
                    transform: `translate(${shadowOffsetX}px, ${shadowOffsetY}px) scale(${1.2 - Math.sin(rad) * 0.3}, ${0.5 + Math.cos(rad) * 0.2})`,
                    filter: `blur(${shadowBlur}px)`,
                    opacity: shadowOpacity,
                  }}
                />

                {/* The Product Image */}
                <div className="relative w-56 sm:w-64 h-72 sm:h-80 overflow-hidden shadow-lg border border-[#2C2926]/10 bg-[#FAF8F5] transition-all duration-500">
                  <img
                    src={selectedArtifact.image}
                    alt={selectedArtifact.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Translucent Sunlight Specular Streak across glass */}
                  <div
                    className="absolute inset-0 pointer-events-none mix-blend-soft-light transition-all duration-300"
                    style={{
                      background: `linear-gradient(${sunAngle + 90}deg, transparent 30%, rgba(255,255,255,${intensity * 0.6}) 50%, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Pedestal or Surface hairline */}
                <div className="w-80 h-px bg-[#2C2926]/15 mt-1" />
              </div>

              {/* Bottom Real-Time Physics Bar */}
              <div className="absolute bottom-4 inset-x-6 flex flex-wrap items-center justify-between text-[11px] text-[#7A726A] font-mono pt-3 border-t border-[#2C2926]/10">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[#242220]">{selectedArtifact.name}</span>
                  <span>·</span>
                  <span>折射率 n={selectedArtifact.refractiveIndex}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-amber-700" />
                  <span>动态焦散已实时重算</span>
                </div>
              </div>
            </div>

            {/* Sunlight Angle Slider */}
            <div className="p-6 bg-[#F4EFEA] border border-[#2C2926]/10 space-y-4">
              <div className="flex items-center justify-between text-xs tracking-wider">
                <span className="font-medium text-[#2C2926] flex items-center gap-2">
                  <Sliders className="w-3.5 h-3.5" />
                  日光入射角度微调 (15° — 165°)
                </span>
                <span className="font-mono text-[#6E6760] font-semibold">{sunAngle}°</span>
              </div>
              <label htmlFor={angleSliderId} className="sr-only">日光入射角度</label>
              <input
                id={angleSliderId}
                type="range"
                min="15"
                max="165"
                value={sunAngle}
                onChange={(e) => {
                  setSunAngle(Number(e.target.value));
                  setActivePreset('custom');
                }}
                className="w-full h-1.5 bg-[#DDD6CD] rounded-none appearance-none cursor-pointer accent-[#242220]"
              />
              <div className="flex justify-between text-[11px] text-[#857E76] font-serif-brand">
                <span>07:30 晨曦斜光 (15°)</span>
                <span>12:00 顶天正午 (90°)</span>
                <span>17:30 日落余晖 (165°)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Controls & Artifact Selector */}
          <div className="lg:col-span-4 space-y-8">
            {/* Presets */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#857D74] font-sans-clean">
                01. 阳光时段预设
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {LIGHT_PRESETS.map((preset) => {
                  const isActive = activePreset === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectPreset(preset.id)}
                      className={`p-3 text-left border transition-all text-xs ${
                        isActive
                          ? 'border-[#242220] bg-[#242220] text-[#FAF8F5]'
                          : 'border-[#2C2926]/15 bg-[#FAF8F5] text-[#3D3833] hover:border-[#2C2926]/40'
                      }`}
                    >
                      <div className="font-medium font-serif-brand text-sm">{preset.name}</div>
                      <div className={`text-[10px] mt-0.5 font-mono ${isActive ? 'text-[#D5CEC4]' : 'text-[#878077]'}`}>
                        {preset.time}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Artifacts Switcher */}
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#857D74] font-sans-clean">
                02. 选择透光器物
              </p>
              <div className="space-y-2">
                {ARTIFACTS.map((artifact) => {
                  const isSelected = selectedArtifact.id === artifact.id;
                  return (
                    <button
                      key={artifact.id}
                      onClick={() => setSelectedArtifact(artifact)}
                      className={`w-full p-3 text-left border transition-all flex items-center justify-between text-xs ${
                        isSelected
                          ? 'border-[#242220] bg-[#FAF8F5] shadow-sm'
                          : 'border-[#2C2926]/10 bg-[#FAF8F5]/50 hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div>
                        <div className="font-medium text-[#242220] font-serif-brand text-sm">
                          {artifact.name}
                        </div>
                        <div className="text-[11px] text-[#7A736B] font-sans-clean mt-0.5">
                          {artifact.material}
                        </div>
                      </div>
                      <Eye className={`w-3.5 h-3.5 ${isSelected ? 'text-[#242220]' : 'text-[#A0988F]'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Intensity Slider */}
            <div className="p-4 bg-[#FAF8F5] border border-[#2C2926]/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#554F48]">光照强度</span>
                <span className="font-mono text-[#242220] font-semibold">{Math.round(intensity * 100)}%</span>
              </div>
              <label htmlFor={intensitySliderId} className="sr-only">光照强度</label>
              <input
                id={intensitySliderId}
                type="range"
                min="0.4"
                max="1.0"
                step="0.05"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-1 bg-[#DDD6CD] rounded-none appearance-none cursor-pointer accent-[#242220]"
              />
            </div>

            {/* Curator's Note */}
            <div className="p-5 border border-dashed border-[#2C2926]/20 bg-[#F4EFEA] space-y-2 text-xs text-[#635C54]">
              <span className="font-medium text-[#242220] block font-serif-brand text-sm">
                器物光影特性解读：
              </span>
              <p className="leading-relaxed font-serif-brand">
                {selectedArtifact.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
