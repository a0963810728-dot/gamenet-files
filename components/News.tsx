import React, { useState } from 'react';
import { X } from 'lucide-react';

interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  desc: string;
  content?: string;
  isHot?: boolean;
}

const News: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // 🔧 公告列表
  const newsItems: NewsItem[] = [
    {
      id: 1,
      category: '重磅',
      date: '08/29',
      title: '⚔️【本日更新公告｜龍鬥士高階技能全面解放】',
      desc: '本日維護後，龍鬥士全新高階技能正式開放！開放神話、傳說、英雄三大級別技能，全面強化輸出、生存、減傷與戰場控制。',
      content: `本日維護後，龍鬥士全新高階技能正式開放！

本次一次開放 神話、傳說、英雄 三大級別技能，全面強化龍鬥士的輸出、生存、減傷與戰場控制能力！

🟡【神話級技能】

🔥 氣息衝擊
造成強力魔法傷害，並有機率擊退目標。
衝擊成功時，更可降低目標的遠近距離與近距離迴避能力。

真正屬於龍鬥士的頂級戰場控制技能！

🟣【傳說級技能】

🐉 龍之力
瞬間釋放龍之力量，依照自身最大 HP 比例立即恢復生命值，大幅提升龍鬥士的續戰與生存能力。

🐉 龍之衝擊
傳說級戰鬥技能正式加入，進一步強化龍鬥士在實戰中的進攻能力。

🔴【英雄級技能】

🛡️ 龍之盾
以龍之力量保護自身，提升 PVE／PVP 傷害減免。
※ 需裝備鎖鏈劍。

⚔️ 鎖鏈劍精通
強化鎖鏈劍使用能力，並依角色等級提升傷害增幅及 PVP 傷害減免。
※ 需裝備鎖鏈劍。

🛡️ 反射保護罩
利用充滿龍之力量的保護罩守護自身，降低受到的近戰傷害，進一步提升正面作戰能力。`,
      isHot: true,
    },
    {
      id: 2,
      category: '更新',
      date: '08/29',
      title: '【本日更新公告｜武器過安定系統強化】',
      desc: '為提升高強化武器的價值，本次針對「武器過安定」能力進行強化調整！武器達到過安定 7 後正式進入倍率成長階段。',
      content: `為提升高強化武器的價值，本次針對「武器過安定」能力進行強化調整！

武器達到過安定 7 後，將正式進入倍率成長階段。
強化數值越高，額外傷害與暴擊傷害倍率將大幅提升！

【過安定能力】

過安定 7
物理傷害 +60
暴擊傷害倍率 1.7倍

過安定 8
物理傷害 +90
暴擊傷害倍率 1.8倍

過安定 9
物理傷害 +130
暴擊傷害倍率 2.0倍

過安定 10
物理傷害 +180
暴擊傷害倍率 2.2倍

過安定 11
物理傷害 +250
暴擊傷害倍率 2.5倍

過安定 12
物理傷害 +350
暴擊傷害倍率 3.0倍`,
      isHot: true,
    },
    {
      id: 3,
      category: '更新',
      date: '07/25',
      title: '【7/25更新公告】開放傲慢之塔頂樓 & 祝福能力與過安定強化能力調整',
      desc: '開放傲慢之塔頂樓技能書掉落區域、祝福能力調整、開放更高強化上限、武器與防具過安定能力調整。',
      content: `● 開放傲慢之塔頂樓
傲慢之塔頂樓正式開放，主要為技能書掉落區域。

● 祝福能力調整
武器：傷害 +3 → 傷害 +15
防具：防禦 +3 → 防禦 +6
飾品：減傷 +3 → 減傷 +5

● 開放強化上限
武器、防具及飾品開放更高強化上限。

● 武器過安定強化能力調整
過安定 +4：傷害 +8 → 傷害 +10
附加效果：1% 機率觸發 1.5 倍爆擊

過安定 +5：傷害 +10 → 傷害 +20
附加效果：2% 機率觸發 1.5 倍爆擊

過安定 +6：傷害 +30 → 傷害 +40
附加效果：3% 機率觸發 1.5 倍爆擊

● 防具過安定強化能力
過安定 +3：減傷 +3
過安定 +4：減傷 +6
過安定 +5：減傷 +9
過安定 +6：減傷 +12
過安定 +7：減傷 +15`,
      isHot: false,
    },
    {
      id: 4,
      category: '活動',
      date: '02/11',
      title: '🔥【新春狂歡】金馬迎春！BOSS 暴走大放送！', 
      desc: '全服 BOSS 100% 掉落「新春紅包」！打死必噴！內含傳說武器製作秘笈、神奇聖物箱、英雄技能自選箱等稀有寶物。', 
      isHot: false,
    },
    {
      id: 3,
      category: '重磅',
      date: '02/11',
      title: '💰【限時加碼】贊助獎勵 🔥 雙倍送 🔥', 
      desc: '即刻起至 2/20 維修前，贊助回饋全面 x雙倍！(平日 1000 點 ➔ 活動期間 2000 點！紅利同步雙倍送！)',
      isHot: true,
    },
    {
      id: 4,
      category: '商城',
      date: '02/11',
      title: '【商城新品】戰力衝刺包 & 全民福利同步上架',
      desc: '全民福利(天幣)：等級 72 每日限購 10 個 / 戰力衝刺(鑽石)：特價 99 藍鑽 (購買無上限)。',
      isHot: false,
    },
    {
      id: 5,
      category: '活動',
      date: '02/11',
      title: '【祝福大禮包】販售',
      desc: '內有祝福聖水額外贈送守護石',
      isHot: false,
    },
    {
      id: 6,
      category: '活動',
      date: '01/31',
      title: '【全民推廣計畫】每日完成推廣可領取3000藍鑽 !', 
      desc: '活動期間內，將「指定內容」發布到任一社群平台 擇1平台（FB / IG / Threads）。',
      isHot: false,
    },
    {
      id: 7,
      category: '重磅',
      date: '01/30',
      title: '【王者降臨】1/30 晚上 20:00 正式火爆開服！',
      desc: '全台最穩機房，誓言打造最後一個天堂。創角直升50等 即送新手專屬禮包！',
      isHot: false,
    },
    {
      id: 8,
      category: '公告',
      date: '01/30',
      title: '【重要】伺服器線路優化與防護升級說明',
      desc: '為提供穩定的遊戲環境，我們已加裝高防禦清洗線路，杜絕任何攻擊，請玩家安心遊玩。',
      isHot: false,
    },
  ];

  return (
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
        </div>

        {/* 列表區塊 */}
        <div className="flex flex-col gap-4">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedNews(item)}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#b38728]/50 rounded-lg p-5 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* 懸停光條特效 */}
              <div className="absolute top-0 left-0 w-[2px] h-full bg-[#fccd4d] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#fccd4d]"></div>

              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                
                {/* 日期與標籤 */}
                <div className="flex items-center gap-4 min-w-[140px]">
                  <span className={`px-3 py-1 rounded text-xs font-bold tracking-widest border ${
                    item.category === '重磅' ? 'border-red-500/50 bg-red-500/10 text-red-400' :
                    item.category === '更新' ? 'border-amber-500/50 bg-amber-500/10 text-amber-400' :
                    item.category === '活動' ? 'border-blue-500/50 bg-blue-500/10 text-blue-400' :
                    item.category === '商城' ? 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400' :
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
                    {/* HOT 標籤 */}
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

      </div>

      {/* 公告詳情彈窗 */}
      {selectedNews && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedNews(null)}
          ></div>
          <div 
            className="relative w-full max-w-2xl bg-[#111] border border-[#fccd4d]/40 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded text-xs font-bold tracking-widest border border-amber-500/50 bg-amber-500/10 text-amber-400">
                    {selectedNews.category}
                  </span>
                  <span className="text-slate-400 font-mono text-sm">{selectedNews.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  {selectedNews.title}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedNews(null)}
                className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>
            <div className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-line max-h-[60vh] overflow-y-auto pr-2 space-y-3">
              {selectedNews.content || selectedNews.desc}
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-6 py-2 bg-[#fccd4d] text-black font-bold rounded hover:bg-[#ffe082] transition-colors text-sm"
              >
                關閉公告
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default News;