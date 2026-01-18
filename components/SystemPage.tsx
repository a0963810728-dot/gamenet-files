import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Zap, Hexagon, Star, MessageCircle, Download } from 'lucide-react'; // 新增 icon

// 定義系統資料的結構
interface SystemData {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string[];
  imageUrl: string; 
}

const SystemPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  // 自動滾動到最上方
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  // 系統內容設定區
  const systems: Record<string, SystemData> = {
    // 1. 排名系統
    ranking: {
      title: '排名獎勵',
      subtitle: 'RANKING REWARDS',
      icon: Trophy,
      imageUrl: '/system_ranking.png', 
      description: [
        '【第 1 ~ 10 名】稱號：★★★★\n獎勵：全能力 +1、PVP 減免 +2、PVP 傷害 +2、HP +100、MP +100、無視負重攻擊',
        '【第 11 ~ 30 名】稱號：★★★\n獎勵：全能力 +1、PVP 減免 +2、PVP 傷害 +2、MP +100',
        '【第 31 ~ 60 名】稱號：★★\n獎勵：全能力 +1、PVP 減免 +2',
        '【第 61 ~ 100 名】稱號：★\n獎勵：全能力 +1',
        '※ 特別備註：排名星星僅在「一般對話」欄位顯示，不影響密語頻道。',
      ],
    },
    // 2. 屬性設定
    stats: {
      title: '主屬性設定',
      subtitle: 'MAIN STATS',
      icon: Zap,
      imageUrl: '/system_stats.png',
      description: [
        '打破傳統限制，屬性上限全面開放至 70 點！後期成長幅度驚人。',
        '【力量 STR】：近戰霸主必點。\n命中於 31 點達上限 (+27)。傷害隨點數暴增：50 點 (+37)、60 點 (+67)、70 點高達 (+96) 額外傷害！',
        '【敏捷 DEX】：遠攻與迴避的極致。\n命中於 40 點達上限 (+20)。傷害大幅強化：50 點 (+20)、60 點 (+46)、70 點高達 (+76) 額外傷害！',
        '【智力 INT】：法師輸出保證。\n魔攻 (SP) 完美 1:1 轉換，每一點都不浪費。70 點智力即擁有 70 點魔攻。',
        '【體質 CON】：血量加成超有感。\n18 點後每點大幅提升。25 體 (+800 HP)、45 體 (+2800 HP)、65 體更高達 (+4800 HP)，血牛不是夢。',
      ],
    },
    // 3. 紋樣系統
    pattern: {
      title: '紋樣系統',
      subtitle: 'PATTERN SYSTEM',
      icon: Hexagon,
      imageUrl: '/system_pattern.png',
      description: [
        '機率全面優化！全階級無廢點，每升一階，能力值即刻強化。',
        '【伊娃紋樣】(藥水恢復特化)\n每階穩定提升 HP 上限。每 3 階額外提升「藥水恢復量」。\n累積至 30 階總計：HP+350 / 恢復量+20 / 恢復率+20%。',
        '【帕格里奧】(全能傷害/命中)\n每階穩定提升 HP 上限。每 3 階「近/遠距離傷害、命中、魔攻」同步 +1。\n累積至 30 階總計：HP+350 / 傷害+13 / 命中+13 / 魔攻+13。',
        '【馬普勒】(防禦/減傷/抗魔)\n每階穩定提升 HP 上限。每 3 階「防禦 (AC)」額外 -1。\n高階解鎖減傷與抗魔。累積至 30 階總計：HP+350 / 防禦-13 / 抗魔+22 / 減傷+5。',
        '【沙哈】(命中/爆擊/魔量)\n每階穩定提升魔力 (MP) 上限。每 3 階「命中」與「爆擊率」同步成長。\n累積至 30 階總計：MP+60 / 命中+12 / 爆擊+10%。',
        '【格蘭肯】(PVP/爆擊傷害)\n每階穩定提升 HP 上限。每 3 階「爆擊傷害」與「PVP 追加傷害」強勢疊加。\n累積至 30 階總計：HP+350 / 爆傷+10 / PVP+7。',
      ],
    },
    // 4. 星盤系統
    starchart: {
      title: '星盤系統',
      subtitle: 'STAR CHART',
      icon: Star,
      imageUrl: '/system_starchart.png',
      description: [
        '四大星盤路線，定義您的戰鬥風格。',
        '【宙斯 (Zeus)】：一般屬性 / 攻擊技能\n專屬技能：擁有單體與大範圍法術攻擊 (烈焰/寒冰炸彈)。\n特化效果：降低目標迴避率、破盾、致與命恐懼。',
        '【阿頓 (Atun)】：防禦特化 / 減傷恢復\n專屬技能：被攻擊時機率性「增加傷害減免」與「恢復自身血量」。\n生存首選：大幅提升戰場續航力，恢復負重與體能。',
        '【絲利安 (Sirian)】：抗暈 / 絕境重生\n專屬技能：針對昏迷、三重矢提供額外減傷。\n特化效果：在「暈眩狀態」下被攻擊，有機率觸發「大量生命恢復」，反殺關鍵。',
        '【格利特 (Geralt)】：爆擊特化 / 致命一擊\n專屬技能：爆擊時額外增加傷害。\n輸出極限：致命射擊、致命能量，將爆發力提升至極致。',
      ],
    },
  };

  const currentSystem = type ? systems[type] : null;

  // 導航保護
  useEffect(() => {
    if (!currentSystem) {
      navigate('/');
    }
  }, [currentSystem, navigate]);

  if (!currentSystem) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-16 px-4 md:px-8 bg-[url('/img/pattern_bg.png')] bg-repeat opacity-95">
      <div className="max-w-7xl mx-auto">
        
        {/* 返回按鈕 (Sticky，方便隨時點擊) */}
        <div className="sticky top-24 z-30 mb-8 pointer-events-none">
          <button 
            onClick={() => navigate('/')}
            className="pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-slate-300 hover:text-[#fccd4d] hover:border-[#fccd4d]/50 transition-all group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold">返回首頁</span>
          </button>
        </div>

        {/* 內容區塊 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* 左側：文字介紹 (在手機版顯示在後) */}
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up">
            
            {/* Header Text */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-[#fccd4d]/10 rounded-lg">
                   <currentSystem.icon className="text-[#fccd4d]" size={28} />
                </div>
                <span className="text-[#fccd4d] font-bold tracking-[0.2em] text-sm uppercase">{currentSystem.subtitle}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-[0_0_15px_rgba(252,205,77,0.3)]">
                {currentSystem.title}
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#fccd4d] via-[#fccd4d]/50 to-transparent rounded-full mb-8"></div>
            </div>

            {/* Description List */}
            <div className="space-y-5">
              {currentSystem.description.map((desc, index) => (
                <div key={index} className="flex gap-5 p-6 rounded-2xl bg-[#151515] border border-white/5 hover:border-[#fccd4d]/30 transition-all duration-300 hover:bg-[#1a1a1a] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] group">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#2a2a2a] border border-white/10 flex items-center justify-center text-[#fccd4d] font-bold text-lg group-hover:scale-110 group-hover:bg-[#fccd4d] group-hover:text-black transition-all duration-300 shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-slate-300 leading-loose text-[15px] md:text-base whitespace-pre-line font-medium tracking-wide">
                    {/* 這裡移除了 font-mono，改用 font-medium 讓中文閱讀更舒適 */}
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 底部行動呼籲按鈕 */}
            <div className="pt-8 flex flex-col sm:flex-row gap-4">
               {/* 下載按鈕 */}
               <button className="flex-1 px-8 py-4 bg-[#fccd4d] text-black font-extrabold rounded-xl hover:bg-[#ffe082] transition-all hover:-translate-y-1 shadow-[0_0_20px_rgba(252,205,77,0.3)] flex items-center justify-center gap-2">
                 <Download size={20} />
                 立即下載體驗
               </button>
               
               {/* 客服按鈕 */}
               <a 
                 href="https://lin.ee/yOavIV8" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex-1 px-8 py-4 bg-transparent border-2 border-slate-700 text-white font-bold rounded-xl hover:border-[#fccd4d] hover:text-[#fccd4d] transition-all flex items-center justify-center gap-2"
               >
                 <MessageCircle size={20} />
                 聯繫客服
               </a>
            </div>
          </div>

          {/* 右側：圖片展示 (在手機版顯示在前) */}
          <div className="order-1 lg:order-2 sticky top-32 group perspective-1000">
            {/* 背景光暈效果 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#fccd4d]/20 to-purple-500/20 blur-[60px] rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            {/* 圖片容器 */}
            <div className="relative transform transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src={currentSystem.imageUrl} 
                  alt={currentSystem.title}
                  onError={(e) => {
                    e.currentTarget.src = '/hero-bg-v2.png'; // Fallback
                  }}
                  className="relative z-10 w-full rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-[#fccd4d]/30 transition-all"
                />
                
                {/* 圖片上的裝飾框 */}
                <div className="absolute inset-0 border border-[#fccd4d]/20 rounded-2xl scale-[0.95] pointer-events-none group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SystemPage;