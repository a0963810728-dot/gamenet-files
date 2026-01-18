import React from 'react';

const HomeEntryCards: React.FC = () => {
  // 定義統一的金色系顏色變數
  const goldBorder = 'border-[#fccd4d]';
  const goldText = 'text-[#fccd4d]';
  const goldShadow = 'hover:shadow-[0_0_30px_rgba(252,205,77,0.3)]';

  const cards = [
    {
      title: '經典變身',
      subtitle: 'CLASSIC TRANSFORMATION',
      desc: '完美復刻經典攻速，重現傳說級變身的打擊快感。',
      // 🔥 已更新為新檔名
      image: '/home_icon_trans.png', 
      link: '/collection?tab=trans',
    },
    {
      title: '魔法娃娃',
      subtitle: 'MAGIC DOLL',
      desc: '最強的冒險夥伴，提供強大的經驗加成與輔助能力。',
      // 🔥 已更新為新檔名
      image: '/home_icon_doll.png',
      link: '/collection?tab=doll',
    },
    {
      title: '魔法聖物',
      subtitle: 'MAGIC RELIC',
      desc: '蘊含眾神之力的神秘寶物，賦予角色突破極限的力量。',
      // 🔥 已更新為新檔名
      image: '/home_icon_relic.png',
      link: '/collection?tab=relic',
    }
  ];

  return (
    <div className="w-full py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        
        {/* 標題區 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-widest uppercase">
            Game System
          </h2>
          <p className="text-slate-500 text-sm tracking-widest">遊戲特色系統展示</p>
          <div className="h-1 w-20 bg-[#fccd4d] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 卡片區 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <a 
              href={card.link} 
              key={index}
              className="group relative block h-full"
            >
              <div 
                className={`
                  relative h-full bg-[#111] border border-white/10 rounded-xl p-8 
                  flex flex-col items-center text-center transition-all duration-500 
                  hover:-translate-y-2 hover:border-opacity-100 ${goldBorder} ${goldShadow}
                `}
              >
                {/* 圖片容器 - 適合方形圖標的樣式 */}
                <div className="relative w-40 h-40 mb-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  {/* 簡單的金色光暈背景 */}
                  <div className="absolute inset-0 bg-[#fccd4d] opacity-0 group-hover:opacity-10 blur-2xl rounded-full transition-opacity duration-500"></div>
                  
                  {/* 顯示新的方形圖標 */}
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] relative z-10"
                  />
                </div>

                {/* 文字內容 */}
                <h3 className={`text-2xl font-black mb-2 text-white group-hover:text-white transition-colors`}>
                  {card.title}
                </h3>
                <span className={`text-xs font-bold tracking-widest mb-4 ${goldText} opacity-80`}>
                  {card.subtitle}
                </span>
                <p className="text-slate-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100">
                  {card.desc}
                </p>

                {/* 按鈕樣式裝飾 */}
                <div className={`mt-8 px-8 py-3 border rounded-full text-sm font-bold transition-all duration-300 ${goldBorder} ${goldText} group-hover:bg-[#fccd4d] group-hover:text-black`}>
                  VIEW SYSTEM
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeEntryCards;