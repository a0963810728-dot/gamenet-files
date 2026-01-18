import React from 'react';

// 定義單個系統圖標項目介面
interface SystemItem {
  title: string;
  icon: string; // 圖標圖片路徑
  link?: string; // 可選的連結網址 (未來可連到說明頁)
}

// 定義單個小圖標卡片元件
const SystemCard: React.FC<SystemItem> = ({ title, icon }) => (
  <div className="group flex flex-col items-center p-4 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-[#fccd4d]/50 hover:bg-white/5 transition-all duration-300 cursor-pointer hover:-translate-y-1 relative overflow-hidden">
    {/* 背景光暈效果 */}
    <div className="absolute inset-0 bg-[#fccd4d] opacity-0 blur-2xl group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
    
    {/* 圖標容器 */}
    <div className="w-16 h-16 mb-3 relative flex items-center justify-center p-2 bg-black/50 rounded-lg border border-white/5 group-hover:border-[#fccd4d]/30 transition-colors">
      <img 
        src={icon} 
        alt={title} 
        // 暫位圖標樣式，未來替換真圖後會更帥氣
        className="w-full h-full object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter drop-shadow-[0_0_5px_rgba(252,205,77,0.3)]"
      />
    </div>
    
    {/* 標題文字 */}
    <h3 className="text-xs md:text-sm text-slate-400 group-hover:text-[#fccd4d] transition-colors text-center font-bold tracking-wider">
      {title}
    </h3>
  </div>
);

const Systems: React.FC = () => {
  // === 商城強力飾品資料 (暫時用假圖) ===
  // 參考舊站結構
  const mallItems: SystemItem[] = [
    { title: '史奈普戒指', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Ring' },
    { title: '倫提斯耳環', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Earring' },
    { title: '守護/回復印章', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Seal' },
    { title: '閃耀肩甲', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Pauldron' },
    { title: '光之皮夾克', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Shirt' },
    { title: '屬性卷軸', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Scroll' },
  ];

  // === 特色系統與任務資料 (暫時用假圖) ===
  // 參考舊站結構
  const featureSystems: SystemItem[] = [
    { title: '排名獎勵', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Rank' },
    { title: '紋樣系統', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Pattern' },
    { title: '守護星盤', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Star' },
    { title: '怪物圖鑑', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Book' },
    { title: '每日任務', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Daily' },
    { title: '血盟系統', icon: 'https://via.placeholder.com/64/333333/fccd4d?text=Pledge' },
  ];

  return (
    <section className="relative w-full py-20 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 區塊標題 */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-[0.2em] mb-2">
            System <span className="text-[#fccd4d]">Overview</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base tracking-widest">
            強力裝備與特色系統總覽
          </p>
          <div className="h-0.5 w-16 bg-[#fccd4d] mx-auto mt-4 opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* 左側：商城關鍵裝備 */}
          <div>
             <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-[#fccd4d] pl-3">
               💎 商城關鍵裝備
             </h3>
             <div className="grid grid-cols-3 gap-4">
               {mallItems.map((item, idx) => (
                 <SystemCard key={idx} {...item} />
               ))}
             </div>
          </div>

          {/* 右側：遊戲特色系統 */}
          <div>
             <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-l-4 border-[#fccd4d] pl-3">
               ⚙️ 遊戲特色系統
             </h3>
             <div className="grid grid-cols-3 gap-4">
               {featureSystems.map((item, idx) => (
                 <SystemCard key={idx} {...item} />
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Systems;