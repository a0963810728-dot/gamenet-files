import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';

const GearsPreview: React.FC = () => {
  // 控制目前顯示的是「武器」還是「裝備」
  const [activeTab, setActiveTab] = useState<'weapons' | 'gears'>('weapons');

  // 根據稀有度回傳對應的邊框與文字顏色
  const getQualityColor = (quality: string) => {
    if (quality.includes('神話')) return 'border-red-600 text-red-500 shadow-red-900/40';
    if (quality.includes('傳說')) return 'border-orange-500 text-orange-400 shadow-orange-900/40';
    return 'border-purple-500 text-purple-400 shadow-purple-900/40'; // 史詩
  };

  // 根據目前 Tab 決定要顯示的資料來源
  const currentData = activeTab === 'weapons' ? siteConfig.weapons : siteConfig.gears;

  return (
    <section className="bg-[#0a0a0a] py-24 relative">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#b38728]/10 via-black to-black opacity-50" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#fccd4d] to-[#b38728] tracking-widest mb-4">
            ARSENAL SYSTEM
          </h2>
          <p className="text-slate-400">神裝現世．戰力覺醒</p>
        </div>

        {/* 切換按鈕 (Tabs) */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('weapons')}
            className={`px-8 py-2 rounded-full border transition-all duration-300 font-bold tracking-wide ${
              activeTab === 'weapons'
                ? 'bg-[#b38728] border-[#b38728] text-black shadow-[0_0_20px_rgba(179,135,40,0.5)]'
                : 'bg-transparent border-white/20 text-slate-500 hover:text-white hover:border-white/50'
            }`}
          >
            最強武器
          </button>
          <button
            onClick={() => setActiveTab('gears')}
            className={`px-8 py-2 rounded-full border transition-all duration-300 font-bold tracking-wide ${
              activeTab === 'gears'
                ? 'bg-[#b38728] border-[#b38728] text-black shadow-[0_0_20px_rgba(179,135,40,0.5)]'
                : 'bg-transparent border-white/20 text-slate-500 hover:text-white hover:border-white/50'
            }`}
          >
            稀有裝備
          </button>
        </div>

        {/* 卡片列表 */}
        <div className="grid md:grid-cols-3 gap-6">
          {currentData.map((item, idx) => (
            <div
              key={idx}
              className={`group relative bg-black/40 border p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 ${getQualityColor(item.quality).replace('text-', 'border-').split(' ')[0]}`}
            >
              {/* 稀有度標籤 */}
              <div className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded border ${getQualityColor(item.quality)} bg-black`}>
                {item.quality}
              </div>

              {/* 強化等級 (例如 +15) */}
              <div className="text-5xl font-black text-white/10 absolute top-4 left-4 pointer-events-none group-hover:text-white/20 transition-colors">
                {item.level}
              </div>

              <div className="mt-12 text-center relative z-10">
                <h3 className={`text-xl font-bold mb-2 ${getQualityColor(item.quality).split(' ')[1]}`}>
                  {item.name}
                </h3>
                <div className="w-12 h-1 bg-white/10 mx-auto mb-4 rounded-full" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GearsPreview;