// src/components/Features.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Features: React.FC = () => {
  const navigate = useNavigate();

  // 定義特色資料
  const features = [
    {
      title: '排名獎勵',
      subtitle: 'RANKING REWARDS',
      desc: '週週結算！排名強者獨享「神話級變身卡」與「專屬光環特效」。無需課金，實力說話。',
      image: '/icon_ranking.png',
      link: '/system/ranking',
      accentColor: 'border-[#fccd4d]',
      titleColor: 'group-hover:text-[#fccd4d]',
      lineColor: 'via-[#fccd4d]',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(252,205,77,0.2)]',
    },
    {
      title: '主屬性設定',
      subtitle: 'MAIN STATS',
      desc: '打破傳統限制！屬性點數上限全面解放。力量、敏捷、智力可突破 50 大關，打造極致角色。',
      image: '/icon_stats.png',
      link: '/system/stats',
      accentColor: 'border-[#22d3ee]',
      titleColor: 'group-hover:text-[#22d3ee]',
      lineColor: 'via-[#22d3ee]',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]',
    },
    {
      title: '紋樣系統',
      subtitle: 'PATTERN SYSTEM',
      desc: '機率大幅優化！告別失敗挫折，紋樣強化成功率提升 200%。累積祝福點數必定成功。',
      image: '/icon_pattern.png',
      link: '/system/pattern',
      accentColor: 'border-[#fccd4d]',
      titleColor: 'group-hover:text-[#fccd4d]',
      lineColor: 'via-[#fccd4d]',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(252,205,77,0.2)]',
    },
    {
      title: '星盤系統',
      subtitle: 'STAR CHART',
      desc: '命運星盤全開！神話級被動技能「星辰守護」實裝。減免傷害、無視防禦，啟動絕對防護。',
      image: '/icon_starchart.png',
      link: '/system/starchart',
      accentColor: 'border-[#22d3ee]',
      titleColor: 'group-hover:text-[#22d3ee]',
      lineColor: 'via-[#22d3ee]',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]',
    },
  ];

  return (
    <div id="game-features" className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden">
      
      {/* 背景裝飾 */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#fccd4d] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#22d3ee] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 標題區塊 (加入 fade-up 動畫) */}
        <div 
          className="text-center mb-20"
          data-aos="fade-up" // 整塊標題向上浮現
          data-aos-duration="1000"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-[0.2em] uppercase">
            UNIQUE FEATURES
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#fccd4d]"></div>
            <p className="text-slate-400 text-lg tracking-[0.1em]">獨家特色系統</p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#22d3ee]"></div>
          </div>
        </div>

        {/* 卡片 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              onClick={() => navigate(feature.link)}
              // 🔥 加入 AOS 動畫設定
              data-aos="fade-up"
              data-aos-delay={index * 100} // 每張卡片延遲 100ms (0, 100, 200, 300)
              data-aos-duration="1000"
              className={`
                group relative bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden
                transition-all duration-500 hover:-translate-y-2 cursor-pointer
                ${feature.accentColor} ${feature.shadowColor}
              `}
            >
              <div className="relative w-full aspect-square p-8 flex items-center justify-center">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-tr from-transparent ${feature.lineColor} to-transparent blur-3xl`}></div>
                
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-contain rounded-lg transition-all duration-500 relative z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-white/5 rounded-lg border border-white/10"><span class="text-slate-600 text-xs">ICON</span></div>`;
                  }}
                />
              </div>

              <div className="px-6 pb-8 relative text-center">
                <div className={`mx-auto mb-5 w-16 h-[1px] bg-gradient-to-r from-transparent ${feature.lineColor} to-transparent opacity-30 group-hover:opacity-100 transition-all duration-500 group-hover:w-24`}></div>

                <h3 className={`text-2xl font-black text-white mb-2 transition-colors ${feature.titleColor}`}>
                  {feature.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 tracking-widest mb-4 uppercase">
                  {feature.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {feature.desc}
                </p>
                
                <div className="mt-4 text-xs text-[#fccd4d] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest font-bold">
                  View Details →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;