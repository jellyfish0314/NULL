import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Check, Users } from 'lucide-react';

interface Space {
  id: string;
  city: string;
  name: string;
  address: string;
  feature: string;
  hours: string;
  status: string;
}

const SPACES: Space[] = [
  {
    id: 'shanghai',
    city: '上海 · 安福路',
    name: '「日影之隙」光影体验馆',
    address: '徐汇区安福路 288 号 庭院玻璃房',
    feature: '全明采光日光天井，每日 14:00-16:00 呈现大型水纹折射光影展',
    hours: '周二至周日 10:30 — 19:30',
    status: '开放预约中',
  },
  {
    id: 'beijing',
    city: '北京 · 东四',
    name: '「素物澄境」器物生活实验室',
    address: '东城区东四九条 62 号 院落北房',
    feature: '古建天光与高支亚麻、北国雪松香氛沉浸冥想体验区',
    hours: '周二至周日 11:00 — 20:00',
    status: '开放预约中',
  },
  {
    id: 'hangzhou',
    city: '杭州 · 天目里',
    name: '「山野流光」自然浸润空间',
    address: '西湖区天目山路 398 号 6号楼 2层',
    feature: '与青山茶席联动，体验真植物晶砖茶室日影微光',
    hours: '周一至周日 10:00 — 21:00',
    status: '周末限定展',
  },
];

export const ExhibitionSpace: React.FC = () => {
  const [selectedSpace, setSelectedSpace] = useState<string>('shanghai');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [date, setDate] = useState<string>('2026-11-15');
  const [timeSlot, setTimeSlot] = useState<string>('14:30 - 15:30 (光影最佳时段)');
  const [booked, setBooked] = useState<boolean>(false);

  const currentSpace = SPACES.find(s => s.id === selectedSpace) || SPACES[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setBooked(true);
    setTimeout(() => {
      setName('');
      setPhone('');
    }, 3000);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#FAF8F5] border-b border-[#2C2926]/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#2C2926]/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8C847C] font-sans-clean block">
              Offline Spaces & Exhibition · 线下艺术展与光影空间
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#221F1C] tracking-tight font-serif-brand">
              移步入室，
              <span className="italic">亲历自然光影流动</span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E6760] font-serif-brand">
              弱化促销，注重沉浸式体验。在自然采光空间中，细嗅雪松冷冽，抚触有机亚麻，感受光与器物的呼吸。
            </p>
          </div>

          <div className="text-xs text-[#857E75] font-mono">
            预约制安静品鉴 · 每次限席 8 人
          </div>
        </div>

        {/* Space Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SPACES.map((space) => {
            const isSelected = selectedSpace === space.id;
            return (
              <div
                key={space.id}
                onClick={() => {
                  setSelectedSpace(space.id);
                  setBooked(false);
                }}
                className={`p-6 border cursor-pointer transition-all ${
                  isSelected
                    ? 'border-[#242220] bg-[#F4EFE9] shadow-sm'
                    : 'border-[#2C2926]/10 bg-[#FAF8F5] hover:border-[#2C2926]/30'
                }`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#2C2926]/10">
                  <span className="text-xs font-medium text-[#7D766E] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {space.city}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-800">
                    {space.status}
                  </span>
                </div>

                <div className="pt-4 space-y-2">
                  <h3 className="text-lg font-medium text-[#242220] font-serif-brand">
                    {space.name}
                  </h3>
                  <p className="text-xs text-[#635C53] font-sans-clean leading-relaxed">
                    {space.address}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#2C2926]/10 text-xs text-[#7A736A] space-y-1 font-serif-brand">
                  <p className="text-[#3E3832]">{space.feature}</p>
                  <p className="font-mono text-[11px] text-[#8C847C] pt-1">{space.hours}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Booking Form Card */}
        <div className="mt-12 p-8 bg-[#F5F0E8] border border-[#2C2926]/10">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-xl font-light text-[#242220] font-serif-brand">
                预约光影空间私享体验 · {currentSpace.city}
              </h3>
              <p className="text-xs text-[#7A7269] font-sans-clean">
                免费入场包含：北国雪松香氛品鉴、植物晶砖折射沙龙、手作素物封笺一枚
              </p>
            </div>

            {booked ? (
              <div className="p-6 bg-[#FAF8F5] border border-emerald-900/20 text-center space-y-2 animate-in fade-in">
                <Check className="w-8 h-8 text-emerald-800 mx-auto" />
                <p className="text-sm font-serif-brand font-medium text-[#242220]">
                  预约已成功登记
                </p>
                <p className="text-xs text-[#6B645C] font-sans-clean">
                  已向您的手机发送确认短讯，Nulli 主理人期待在 {currentSpace.name} 与您相会。
                </p>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-[#4A443E] font-medium mb-1">
                    预约人姓名
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="如：林先生 / 许女士"
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#2C2926]/15 text-[#242220] focus:outline-none focus:border-[#242220]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A443E] font-medium mb-1">
                    联系电话
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="接收短信确认"
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#2C2926]/15 text-[#242220] focus:outline-none focus:border-[#242220]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A443E] font-medium mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    预约日期
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#2C2926]/15 text-[#242220] focus:outline-none focus:border-[#242220]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A443E] font-medium mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    光影时段
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#2C2926]/15 text-[#242220] focus:outline-none focus:border-[#242220]"
                  >
                    <option value="11:00 - 12:00">11:00 - 12:00 (上午清润光)</option>
                    <option value="14:30 - 15:30 (光影最佳时段)">14:30 - 15:30 (光影最佳时段)</option>
                    <option value="16:30 - 17:30 (暮色金黄)">16:30 - 17:30 (暮色金黄)</option>
                  </select>
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#242220] text-[#FAF8F5] hover:bg-[#3D3833] transition-colors uppercase tracking-wider font-medium text-xs flex items-center justify-center gap-2"
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>确认预约私享光影席位</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
