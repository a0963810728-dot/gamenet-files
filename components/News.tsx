import React from 'react';

const News: React.FC = () => {
  // 假資料：已更新為您撰寫的 1/30 開服與推廣活動版本
  const newsItems = [
    {
      id: 1,
      category: '重磅',
      date: '01/31',
      title: '【王者降臨】1/30 晚上 20:00 正式火爆開服！',
      desc: '全台最穩機房，誓言打造最後一個天堂。創角直升50等 即送新手專屬禮包！',
      isHot: true, 
    },
    {
      id: 2,
      category: '活動',
      date: '01/31',
      title: '【全民推廣計畫】每日完成推廣可領取3000藍鑽 !',
      desc: '活動期間內，將「指定內容」發布到任一社群平台 擇1平台（FB / IG / Threads）。', // 稍微修飾了標點符號
      isHot: false,
    },
    {
      id: 3,
      category: '公告',
      date: '01/31',
      title: '【重要】伺服器線路優化與防護升級說明',
      desc: '為提供穩定的遊戲環境，我們已加裝高防禦清洗線路，杜絕任何攻擊，請玩家安心遊玩。',
      isHot: false,
    },
    {
      id: 4,
      category: '系統',
      date: '01/31',
      title: '敬請期待',
      desc: '豐富內容逐步更新。',
      isHot: false,
    },
  ];

  return (
    // 👇 關鍵修正：這裡必須加上 id="news"，導覽列才連得到！
    <section id="news" className="relative w-full py-20 bg-[#050505] overflow-hidden">
      {/* 背景裝飾：金色光暈 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#fccd4d] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 標題區塊 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-white/10 pb-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fff0c0] to-[#b38728] tracking-widest flex items-center gap-3">
              <span className="text-[#fccd4d] text-2xl">NEWS</span> 最新情報
            </h2>
            <p className="text-slate-500 mt-2 text-sm tracking-widest">掌握亞丁大陸的第一手消息</p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-[#fccd4d] hover:text-white transition-colors text-sm font-bold tracking-widest group">
            查看更多 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* 列表區塊 */}
        <div className="flex flex-col gap-4">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#b38728]/50 rounded-lg p-5 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* 懸停光條特效 */}
              <div className="absolute top-0 left-0 w-[2px] h-full bg-[#fccd4d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#fccd4d]"></div>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                
                {/* 日期與標籤 */}
                <div className="flex items-center gap-4 min-w-[140px]">
                  <span className={`px-3 py-1 rounded text-xs font-bold tracking-widest border ${
                    item.category === '重磅' ? 'border-red-500/50 bg-red-500/10 text-red-400' :
                    item.category === '活動' ? 'border-blue-500/50 bg-blue-500/10 text-blue-400' :
                    'border-slate-500/50 bg-slate-500/10 text-slate-400'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-slate-400 font-mono text-sm">{item.date}</span>
                </div>

                {/* 標題與描述 */}
                <div className="flex-1">
                  <h3 className={`text-lg font-bold mb-1 transition-colors group-hover:text-[#fccd4d] ${item.isHot ? 'text-[#fccd4d]' : 'text-slate-200'}`}>
                    {item.title}
                    {item.isHot && <span className="ml-2 inline-block animate-pulse text-[10px] bg-red-600 text-white px-1.5 rounded">HOT</span>}
                  </h3>
                  <p className="text-slate-500 text-sm line-clamp-1 group-hover:text-slate-400 transition-colors">
                    {item.desc}
                  </p>
                </div>

                {/* 右側箭頭 */}
                <div className="hidden md:block text-[#b38728] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 手機版查看更多按鈕 */}
        <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-block border border-[#b38728] text-[#fccd4d] px-8 py-2 rounded text-sm font-bold">查看更多消息</a>
        </div>

      </div>
    </section>
  );
};

export default News;