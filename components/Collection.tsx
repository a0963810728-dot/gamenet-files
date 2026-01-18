import React, { useState } from 'react';

// 定義資料介面
interface CollectionItem {
  title: string;
  type: string;
  image: string;
  color: string;
  stats?: string[]; // 詳細數據陣列 (可選)
}

// 定義單張圖鑑卡片元件
const CollectionCard: React.FC<CollectionItem> = ({ title, type, image, color, stats }) => (
  <div className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-[#fccd4d]/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer flex flex-col h-full">
    
    {/* 背景動態光暈 */}
    <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl transition-all opacity-20 group-hover:opacity-40 ${color} pointer-events-none`}></div>
    
    {/* 上半部：圖片容器 */}
    <div className="relative h-[220px] overflow-hidden bg-black/30 flex items-center justify-center p-4">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-all duration-700"
      />
      
      {/* 類型標籤 (金色神話 / 紫色傳說) */}
      <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
        type.includes('神話') 
          ? 'bg-[#fccd4d]/90 text-black'  // 神話改為金色背景、黑色文字
          : 'bg-purple-600/80 text-white' // 傳說維持紫色背景、白色文字
      }`}>
        {type}
      </div>

    </div>

    {/* 下半部：內容與數據 */}
    <div className="p-5 flex-1 flex flex-col bg-gradient-to-b from-[#0a0a0a] to-[#050505] relative z-10">
      <h3 className="text-lg font-black text-[#fccd4d] mb-3 group-hover:text-white transition-colors text-center">{title}</h3>
      
      {/* 如果有數據，則顯示數據列表 */}
      {stats && stats.length > 0 && (
        <ul className="space-y-1.5 text-xs text-slate-400 font-mono flex-1">
          {stats.map((stat, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-[#fccd4d] mr-2">▪</span>
              <span className={stat.includes('祝福') || stat.includes('束縛') ? 'text-[#fccd4d] font-bold' : ''}>
                {stat}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* 如果沒有數據 (例如變身暫時沒有)，顯示簡單描述 */}
      {!stats && (
        <p className="text-slate-500 text-sm text-center flex-1 flex items-center justify-center">
          點擊查看詳細資訊
        </p>
      )}
    </div>
  </div>
);

const Collection: React.FC = () => {
  // 控制目前顯示的頁籤
  const [activeTab, setActiveTab] = useState<'transform' | 'doll'>('transform');

  // === 變身資料 (暫時維持假資料) ===
  const transforms: CollectionItem[] = [
    { title: '神話變身：屠龍者', type: '神話', color: 'bg-red-600', image: 'https://via.placeholder.com/300x400/330000/ffffff?text=Mythic+Dragon' },
    { title: '傳說變身：死亡騎士', type: '傳說', color: 'bg-purple-600', image: 'https://via.placeholder.com/300x400/220033/ffffff?text=Legend+DK' },
    { title: '傳說變身：黑暗妖精王', type: '傳說', color: 'bg-purple-600', image: 'https://via.placeholder.com/300x400/220033/ffffff?text=Legend+DE' },
    { title: '傳說變身：光之騎士', type: '傳說', color: 'bg-purple-600', image: 'https://via.placeholder.com/300x400/220033/ffffff?text=Legend+LK' },
  ];

  // === 魔法娃娃資料 ===
  const dolls: CollectionItem[] = [
    { 
      title: '神話娃娃：法利昂', 
      type: '神話', 
      color: 'bg-blue-600', 
      image: '/image_13.png', 
      stats: ['經驗值+30%', '負重獎勵+2500', '傷害減免+5', '昏迷耐性+10', '昏迷命中+15', '法利昂的祝福3%']
    },
    { 
      title: '神話娃娃：安塔瑞斯', 
      type: '神話', 
      color: 'bg-emerald-600', 
      image: '/image_10.png', 
      stats: ['經驗值+30%', '負重獎勵+2500', '傷害減免+5', '昏迷耐性+10', '昏迷命中+15', '安塔瑞斯的束縛1%']
    },
    { 
      title: '神話娃娃：巴拉卡斯', 
      type: '神話', 
      color: 'bg-red-600', 
      image: '/image_12.png', 
      stats: ['經驗值+30%', '負重獎勵+2500', '傷害減免+5', '昏迷耐性+10', '昏迷命中+15']
    },
    { 
      title: '神話娃娃：林德拜爾', 
      type: '神話', 
      color: 'bg-cyan-600', 
      image: '/image_11.png', 
      stats: ['經驗值+30%', '負重獎勵+2500', '傷害減免+5', '昏迷耐性+10', '昏迷命中+15']
    },
  ];

  return (
    <section className="relative w-full py-24 bg-[#020202] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 標題區與切換按鈕 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fccd4d] to-[#b38728] tracking-widest mb-4">
              神話圖鑑展示
            </h2>
            <div className="h-1 w-20 bg-[#b38728] mb-4"></div>
            <p className="text-slate-500 tracking-widest">蒐集亞丁大陸上最強大的力量象徵</p>
          </div>

          {/* 切換 Tab 按鈕組 (已移除圖標並置中) */}
          <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setActiveTab('transform')}
              className={`flex items-center justify-center px-6 py-3 rounded-md text-sm font-bold transition-all ${
                activeTab === 'transform'
                  ? 'bg-[#fccd4d] text-black shadow-[0_0_15px_#fccd4d40]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              變身圖鑑
            </button>
            <button
              onClick={() => setActiveTab('doll')}
              className={`flex items-center justify-center px-6 py-3 rounded-md text-sm font-bold transition-all ${
                activeTab === 'doll'
                  ? 'bg-[#fccd4d] text-black shadow-[0_0_15px_#fccd4d40]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              魔法娃娃
            </button>
          </div>
        </div>

        {/* 展示列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
          {activeTab === 'transform' && transforms.map((item, idx) => (
            <CollectionCard key={idx} {...item} />
          ))}
          {activeTab === 'doll' && dolls.map((item, idx) => (
            <CollectionCard key={idx} {...item} />
          ))}
        </div>

        {/* 查看更多按鈕 (已更新連結為 /collection) */}
        <div className="mt-16 text-center">
          <a href="/collection" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#fccd4d]/80 to-[#b38728]/80 text-black font-black tracking-wider rounded-full hover:scale-105 transition-all shadow-[0_0_20px_#fccd4d30] group">
            <span>查看完整圖鑑與數值</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Collection;