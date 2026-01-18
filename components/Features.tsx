import React from 'react';

const Features: React.FC = () => {
  // 定義特色資料 - 🔥 文案升級版 🔥
  const features = [
    {
      title: '排名獎勵',
      subtitle: 'RANKING REWARDS',
      // 強調具體的稀有獎勵
      desc: '週週結算！排名強者獨享「神話級變身卡」與「專屬光環特效」。無需課金，實力說話，讓全服見證你的榮耀。',
      image: '/icon_ranking.png',
      accentColor: 'border-[#fccd4d]', // 金色
      titleColor: 'group-hover:text-[#fccd4d]',
      lineColor: 'via-[#fccd4d]',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(252,205,77,0.2)]',
      imageBoxStyle: 'border-2 border-[#fccd4d]/30 group-hover:border-[#fccd4d] group-hover:shadow-[0_0_20px_rgba(252,205,77,0.5)]',
    },
    {
      title: '主屬性設定',
      subtitle: 'MAIN STATS',
      // 強調突破界限的快感
      desc: '打破傳統限制！屬性點數上限全面解放。力量、敏捷、智力可突破 50 大關，打造刀刀爆擊、魔法瞬殺的極致角色。',
      image: '/icon_stats.png',
      accentColor: 'border-[#22d3ee]', // 藍色
      titleColor: 'group-hover:text-[#22d3ee]',
      lineColor: 'via-[#22d3ee]',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]',
      imageBoxStyle: 'border-2 border-[#22d3ee]/30 group-hover:border-[#22d3ee] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]',
    },
    {
      title: '紋樣系統',
      subtitle: 'PATTERN SYSTEM',
      // 強調機率優化與保底
      desc: '機率大幅優化！告別失敗挫折，紋樣強化成功率提升 200%。累積祝福點數必定成功，輕鬆點亮大師級屬性加成。',
      image: '/icon_pattern.png',
      accentColor: 'border-[#fccd4d]', // 金色
      titleColor: 'group-hover:text-[#fccd4d]',
      lineColor: 'via-[#fccd4d]',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(252,205,77,0.2)]',
      imageBoxStyle: 'border-2 border-[#fccd4d]/30 group-hover:border-[#fccd4d] group-hover:shadow-[0_0_20px_rgba(252,205,77,0.5)]',
    },
    {
      title: '星盤系統',
      subtitle: 'STAR CHART',
      // 強調被動技能的強大
      desc: '命運星盤全開！神話級被動技能「星辰守護」實裝。減免傷害、無視防禦，啟動星盤獲得來自星空的絕對防護。',
      image: '/icon_starchart.png',
      accentColor: 'border-[#22d3ee]', // 藍色
      titleColor: 'group-hover:text-[#22d3ee]',
      lineColor: 'via-[#22d3ee]',
      shadowColor: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]',
      imageBoxStyle: 'border-2 border-[#22d3ee]/30 group-hover:border-[#22d3ee] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]',
    },
  ];

  return (
    // id="game-features" 用於導覽列跳轉
    <div id="game-features" className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* 背景裝飾光暈 */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#fccd4d] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#22d3ee] opacity-[0.03] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 標題區 */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-[0.2em] uppercase">
            UNIQUE FEATURES
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#fccd4d]"></div>
            <p className="text-slate-400 text-lg tracking-[0.1em]">獨家特色系統</p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#22d3ee]"></div>
          </div>
        </div>

        {/* 卡片展示區 (四欄) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`
                group relative bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden
                transition-all duration-500 hover:-translate-y-2
                ${feature.accentColor} ${feature.shadowColor}
              `}
            >
              {/* 圖片容器 */}
              <div className="relative w-full aspect-square p-8 flex items-center justify-center">
                {/* 背景光暈效果 */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-tr from-transparent ${feature.lineColor} to-transparent blur-3xl`}></div>
                
                {/* 圖片本身 */}
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className={`w-full h-full object-contain rounded-lg transition-all duration-500 relative z-10 ${feature.imageBoxStyle}`}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-white/5 rounded-lg border border-white/10"><span class="text-slate-600 text-xs">ICON</span></div>`;
                  }}
                />
              </div>

              {/* 內容文字區 */}
              <div className="px-6 pb-8 relative text-center">
                {/* 裝飾線條 */}
                <div className={`mx-auto mb-5 w-16 h-[1px] bg-gradient-to-r from-transparent ${feature.lineColor} to-transparent opacity-30 group-hover:opacity-100 transition-all duration-500 group-hover:w-24`}></div>

                {/* 標題 */}
                <h3 className={`text-2xl font-black text-white mb-2 transition-colors ${feature.titleColor}`}>
                  {feature.title}
                </h3>
                <p className="text-xs font-bold text-slate-500 tracking-widest mb-4 uppercase">
                  {feature.subtitle}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Features;