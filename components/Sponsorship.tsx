// src/components/Sponsorship.tsx
import React, { useState, useEffect } from 'react';
import { Check, Copy, MessageCircle, ShieldCheck, Gem, Gift, Clock, Smartphone } from 'lucide-react';

const Sponsorship: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // 頁面載入時自動置頂
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 官方 LINE 設定
  const officialLine = {
    id: '@746pwlgu',
    link: 'https://lin.ee/yOavIV8',
  };

  // 複製 LINE ID 功能
  const handleCopy = () => {
    navigator.clipboard.writeText(officialLine.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 1. 主要贊助方案
  const mainPlans = [
    {
      price: 1000,
      diamonds: 10000,
      highlight: false,
      gifts: [
        '天幣 100 萬',
        '+6 武官/神官裝備 (自選一套)',
        '+6 稀有武器 (自選一把)',
      ]
    },
    {
      price: 3000,
      diamonds: 30000,
      highlight: true, // 標記為推薦
      gifts: [
        '天幣 600 萬',
        '+7 武官/神官裝備 (自選一套)',
        '+7 稀有武器 (自選一把)',
      ]
    },
    {
      price: 5000,
      diamonds: 50000,
      highlight: false,
      gifts: [
        '天幣 1500 萬',
        '+8 武官/神官裝備 (自選一套)',
        '+8 稀有武器 (自選一把)',
      ]
    },
  ];

  // 2. 累積滿額獎勵
  const cumulativeRewards = [
    { amount: '1 萬', potion: 1000, box: 5, bonus: 10 },
    { amount: '2 萬', potion: 2000, box: 10, bonus: 20 },
    { amount: '3 萬', potion: 3000, box: 15, bonus: 30 },
    { amount: '4 萬', potion: 4000, box: 20, bonus: 40 },
    { amount: '5 萬', potion: 5000, box: 25, bonus: 50 },
  ];

  // 3. 時間補充包
  const timePacks = [
    { name: '夢幻之島', price: 150, count: 30, color: 'text-yellow-400', border: 'border-yellow-400/30' },
    { name: '拋棄之地', price: 150, count: 30, color: 'text-teal-400', border: 'border-teal-400/30' },
    { name: '精靈墓穴', price: 150, count: 30, color: 'text-indigo-400', border: 'border-indigo-400/30' },
    { name: '傲慢之塔', price: 150, count: 30, color: 'text-purple-400', border: 'border-purple-400/30' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-20 px-4 md:px-8 overflow-hidden">
      
      {/* 標題區 (Fade Down) */}
      <div 
        className="text-center max-w-4xl mx-auto mb-12"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
          贊助<span className="text-[#fccd4d]">說明</span>
        </h1>
        <div className="h-1 w-24 bg-[#fccd4d] mx-auto rounded-full mb-6"></div>
        <p className="text-slate-400 text-lg">
          感謝您對【大道 M 天堂】的支持，贊助請直接聯繫官方客服。
        </p>
      </div>

      {/* 官方 LINE 引導區 (Zoom In) */}
      <div 
        className="max-w-3xl mx-auto bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-[#06c755]/50 rounded-2xl p-8 mb-20 shadow-[0_0_40px_rgba(6,199,85,0.15)] relative overflow-hidden"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#06c755] opacity-5 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center md:text-left">
            <h3 className="text-[#06c755] font-bold tracking-widest uppercase mb-3 flex items-center justify-center md:justify-start gap-2">
              <Smartphone size={22} /> Official LINE
            </h3>
            <p className="text-4xl text-white font-mono font-bold tracking-wider mb-2">
              {officialLine.id}
            </p>
            <p className="text-slate-400 font-bold">
              大道 M 天堂 | 官方唯一客服
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto">
            <button 
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-[#222] text-white border border-white/10 font-bold rounded hover:bg-[#333] hover:border-white/30 transition-all active:scale-95"
            >
              {copied ? <Check size={20} className="text-[#06c755]" /> : <Copy size={20} />}
              {copied ? '已複製！' : '複製 LINE ID'}
            </button>
            <a 
              href={officialLine.link} 
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-[#06c755] text-white font-bold rounded shadow-[0_0_15px_rgba(6,199,85,0.4)] hover:bg-[#05b64d] hover:shadow-[0_0_25px_rgba(6,199,85,0.6)] transition-all active:scale-95"
            >
              <MessageCircle size={20} />
              聯繫客服贊助
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-[#fccd4d] font-bold text-lg animate-pulse">
              ※ 匯款帳號僅提供贊助使用，請務必使用本人帳號轉帳。
            </p>
        </div>
      </div>

      {/* 方案區塊 */}
      <div className="max-w-7xl mx-auto mb-24">
        <h2 
          className="text-3xl font-bold text-white mb-10 flex items-center gap-3"
          data-aos="fade-right"
        >
          <Gem className="text-[#fccd4d]" /> 基礎贊助方案
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainPlans.map((plan, index) => (
            <div 
              key={index}
              // 🔥 階梯式滑入動效
              data-aos="fade-up"
              data-aos-delay={index * 150} // 延遲 0, 150, 300
              data-aos-duration="1000"
              className={`
                relative p-1 rounded-2xl transition-all duration-300 hover:-translate-y-2
                ${plan.highlight ? 'bg-gradient-to-b from-[#fccd4d] to-[#b38728] shadow-[0_0_30px_rgba(252,205,77,0.3)] z-10 scale-105' : 'bg-[#222]'}
              `}
            >
              <div className="bg-[#111] rounded-xl h-full p-8 flex flex-col">
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#fccd4d] text-black font-bold px-4 py-1 rounded-full text-sm shadow-lg whitespace-nowrap">
                    CP 值最高推薦
                  </div>
                )}
                
                <div className="text-center border-b border-white/10 pb-6 mb-6">
                  <div className="text-5xl font-black text-white mb-2">${plan.price}</div>
                  <div className="text-xl text-[#fccd4d] font-bold">獲得 {plan.diamonds.toLocaleString()} 藍鑽</div>
                </div>

                <div className="flex-grow">
                  <p className="text-slate-400 text-sm mb-4 font-bold uppercase tracking-widest">Bonus Gifts</p>
                  <ul className="space-y-4">
                    {plan.gifts.map((gift, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-200">
                        <Gift className="text-[#fccd4d] flex-shrink-0 mt-0.5" size={18} />
                        <span>{gift}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={officialLine.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full mt-8 py-3 rounded font-bold flex items-center justify-center gap-2 transition-colors ${plan.highlight ? 'bg-[#fccd4d] text-black hover:bg-[#ffe082]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  <MessageCircle size={18} />
                  聯繫客服購買
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 累積獎勵 */}
      <div 
        className="max-w-5xl mx-auto mb-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <Gift className="text-red-500" /> 累積滿額回饋
        </h2>
        <div className="bg-[#111] rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-4 bg-white/5 p-4 text-slate-400 font-bold text-sm md:text-base border-b border-white/10">
            <div>累積金額</div>
            <div>終極治癒藥水(刻印)</div>
            <div>龍之鑽石禮盒</div>
            <div className="text-red-400">紅利點數</div>
          </div>
          {cumulativeRewards.map((reward, index) => (
            <div key={index} className="grid grid-cols-4 p-5 text-white border-b border-white/5 hover:bg-white/5 transition-colors items-center">
              <div className="font-bold text-[#fccd4d] text-lg">{reward.amount}</div>
              <div className="text-slate-300">x {reward.potion}</div>
              <div className="text-slate-300">x {reward.box}</div>
              <div className="text-red-400 font-bold text-lg">{reward.bonus} 點</div>
            </div>
          ))}
          <div className="p-4 text-center text-sm text-red-500 bg-red-900/10">
            ★ 紅利商城販售內容不定期更新 ★
          </div>
        </div>
      </div>

      {/* 補充包 */}
      <div 
        className="max-w-6xl mx-auto mb-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <Clock className="text-blue-400" /> 副本時間補充包
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timePacks.map((pack, index) => (
            <div 
              key={index} 
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`bg-[#111] rounded-xl p-6 border ${pack.border} text-center group hover:bg-[#1a1a1a] transition-colors`}
            >
              <div className={`text-2xl font-bold mb-2 ${pack.color}`}>{pack.name}</div>
              <div className="text-slate-400 text-sm mb-4">補充袋子 (30顆)</div>
              <div className="text-3xl font-black text-white mb-2">{pack.price} <span className="text-sm font-normal text-slate-500">NT</span></div>
              <div className="text-xs text-slate-500 mb-6">提升時間 1 小時 / CD 1 天</div>
              <a 
                 href={officialLine.link}
                 target="_blank"
                 rel="noreferrer"
                 className="block w-full py-2 bg-white/10 rounded text-sm hover:bg-white/20 transition-colors"
              >
                聯繫購買
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 規則 */}
      <div 
        className="max-w-4xl mx-auto bg-[#151515] p-8 md:p-12 rounded-2xl border border-red-500/20"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 border-b border-white/10 pb-4">
          <ShieldCheck className="text-red-500" /> 贊助玩家必讀需知
        </h3>
        <ul className="space-y-4 text-slate-300 leading-relaxed list-decimal pl-5">
          <li>玩家必須出於<span className="text-white font-bold">自願贊助</span>，本服絕不勉強，以維護伺服器的運行。</li>
          <li>請玩家<span className="text-white font-bold">自行保管好自己的帳號和密碼</span>，千萬不得借給其他玩家。</li>
          <li>贊助物品如出現強化爆掉，請玩家自行負責，本服一概不賠償。</li>
          <li>贊助物品若有轉借狀況而發生糾紛或遺失，本服一率不處理。</li>
          <li>贊助商品購買後，<span className="text-red-400 font-bold">絕對不接受退換或者更換</span>，請確認後再贊助。</li>
          <li><span className="text-red-400 font-bold">贊助方轉帳請使用本人之帳號</span>，匯款帳號僅提供贊助使用無其它用途。</li>
        </ul>
        <div className="mt-8 text-center text-sm text-slate-500">
          上述請確認無異議後再行贊助
        </div>
      </div>

    </div>
  );
};

export default Sponsorship;