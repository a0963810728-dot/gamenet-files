// src/components/Sponsorship.tsx
import React, { useState, useEffect } from 'react';
import { Check, Copy, MessageCircle, ShieldCheck, Gem, Gift, Clock, Smartphone, Zap, Shield } from 'lucide-react';

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

  const mainPlans = [
    {
      price: 1000,
      diamonds: 20000,
      highlight: false,
      image: '/1000確定版本.png',
      gifts: [
        '+6 武官/神官裝備 (自選一套)',
        '+6 稀有武器 (自選一把)',
        '龍之鑽石禮盒*2 (經驗加倍)',
        '終極治癒藥水(刻印)*2000',
        '傳說變身自選箱'
      ]
    },
    {
      price: 3000,
      diamonds: 150000,
      highlight: true,
      image: '/3000確定版本.png',
      gifts: [
        '+7 武官/神官裝備 (自選一套)',
        '+7 稀有武器 (自選一把)',
        '龍之鑽石禮盒*5 (經驗加倍)',
        '終極治癒藥水(刻印)*5000',
        '傳說變身自選箱',
        '傳說娃娃自選箱',
        '萬能藥*5',
        '史奈普+8自選'
      ]
    },
    {
      price: 5000,
      diamonds: 500000,
      highlight: false,
      image: '/5000確定版本.png',
      gifts: [
        '+8 武官/神官裝備 (自選一套)',
        '+8 稀有武器 (自選一把)',
        '龍之鑽石禮盒*10 (經驗加倍)',
        '終極治癒藥水(刻印)*10000',
        '傳說變身自選箱',
        '傳說娃娃自選箱',
        '萬能藥*15',
        '+9 英雄武器自選箱',
        '英雄技能自選箱',
        '史奈普+8自選',
        '光之手環+8自選',
        '倫提斯+8自選',
        '閃耀的肩甲+8自選',
        '光之皮夾克+8自選',
        '守護紋章/印章+8自選'
      ]
    },
  ];



  // 3. 時間補充包
  const timePacks = [
    { name: '夢幻之島', price: 150, count: 30, color: 'text-yellow-400', border: 'border-yellow-400/30' },
    { name: '拋棄之地', price: 150, count: 30, color: 'text-teal-400', border: 'border-teal-400/30' },
    { name: '精靈墓穴', price: 150, count: 30, color: 'text-indigo-400', border: 'border-indigo-400/30' },
    { name: '傲慢之塔', price: 150, count: 30, color: 'text-purple-400', border: 'border-purple-400/30' },
    { name: '遺忘之島', price: 150, count: 30, color: 'text-rose-400', border: 'border-rose-400/30' },
  ];

  // 4. 武防具安定強化
  const stabilizePacks = [
    { range: '6 → 7', price: 1000, color: 'text-green-400', border: 'border-green-400/30', glow: 'shadow-green-400/10' },
    { range: '7 → 8', price: 1000, color: 'text-blue-400', border: 'border-blue-400/30', glow: 'shadow-blue-400/10' },
    { range: '8 → 9', price: 1000, color: 'text-purple-400', border: 'border-purple-400/30', glow: 'shadow-purple-400/10' },
    { range: '9 → 10', price: 1000, color: 'text-yellow-400', border: 'border-yellow-400/30', glow: 'shadow-yellow-400/10' },
    { range: '10 → 11', price: 1000, color: 'text-orange-400', border: 'border-orange-400/30', glow: 'shadow-orange-400/10' },
    { range: '11 → 12', price: 1000, color: 'text-red-400', border: 'border-red-400/30', glow: 'shadow-red-400/10' },
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
                
                <div className="text-center border-b border-white/10 pb-6 mb-4">
                  <div className="text-5xl font-black text-white mb-2">${plan.price}</div>
                  <div className="text-xl text-[#fccd4d] font-bold">獲得 {plan.diamonds.toLocaleString()} 藍鑽</div>
                </div>

                {/* 方案圖片 */}
                <div className="mb-4 rounded-lg overflow-hidden border border-white/10 flex justify-center bg-black/50">
                  <img src={plan.image} alt={`Plan ${plan.price}`} className="w-full h-auto object-contain" />
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



      {/* 聖物 / 變身娃娃卡冊資訊圖 */}
      <div
        className="max-w-7xl mx-auto mb-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <Gift className="text-[#fccd4d]" /> 聖物 & 變身娃娃卡冊
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 聖物 */}
          <div
            className="bg-[#111] rounded-2xl border border-yellow-400/20 overflow-hidden shadow-[0_0_30px_rgba(252,205,77,0.05)] hover:-translate-y-1 transition-transform duration-300"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="px-6 py-4 border-b border-white/10 flex items-center gap-2">
              <span className="text-yellow-400 text-xl">✦</span>
              <h3 className="text-white font-bold text-lg tracking-wide">聖物資訊</h3>
            </div>
            <div className="p-4 bg-black/30">
              <img
                src="/聖物.png"
                alt="聖物資訊圖"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
          </div>

          {/* 變身娃娃卡冊 */}
          <div
            className="bg-[#111] rounded-2xl border border-purple-400/20 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:-translate-y-1 transition-transform duration-300"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <div className="px-6 py-4 border-b border-white/10 flex items-center gap-2">
              <span className="text-purple-400 text-xl">✦</span>
              <h3 className="text-white font-bold text-lg tracking-wide">變身娃娃卡冊</h3>
            </div>
            <div className="p-4 bg-black/30">
              <img
                src="/變身娃娃卡冊.jpg"
                alt="變身娃娃卡冊資訊圖"
                className="w-full h-auto rounded-lg object-contain"
              />
            </div>
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

      {/* 武防具安定強化 */}
      <div
        className="max-w-6xl mx-auto mb-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
          <Shield className="text-orange-400" /> 擴增 武防具安定
        </h2>
        <p className="text-slate-400 mb-10">安定強化提升裝備等級，確保不爆裝，請聯繫客服洽詢。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stabilizePacks.map((pack, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 80}
              className={`bg-[#111] rounded-xl p-5 border ${pack.border} text-center group hover:bg-[#1a1a1a] transition-colors shadow-lg ${pack.glow}`}
            >
              <div className="text-3xl font-black text-white mb-2 tracking-tight">{pack.range}</div>
              <div className={`text-xs font-bold mb-3 ${pack.color}`}>安定升級</div>
              <div className="text-2xl font-black text-white mb-1">{pack.price.toLocaleString()} <span className="text-xs font-normal text-slate-500">NT</span></div>
              <div className="text-[11px] text-slate-500 mb-5">每次服務費</div>
              <a
                href={officialLine.link}
                target="_blank"
                rel="noreferrer"
                className="block w-full py-2 bg-white/10 rounded text-xs hover:bg-white/20 transition-colors"
              >
                聯繫購買
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* 單品購買與特殊升級 */}
      <div
        className="max-w-6xl mx-auto mb-24"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
          <Zap className="text-green-400" /> 單品購買與特殊升級
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
          {/* 經驗加倍 500% 藥水 */}
          <div
            data-aos="zoom-in"
            className="bg-[#111] rounded-xl border border-green-400/30 p-8 flex flex-col items-center text-center shadow-lg shadow-green-400/10 hover:bg-[#1a1a1a] transition-colors"
          >
            <div className="w-14 h-14 rounded-full bg-green-400/10 flex items-center justify-center mb-4">
              <Zap className="text-green-400" size={28} />
            </div>
            <div className="text-xl font-bold text-white mb-1">經驗加倍 500% 藥水</div>
            <div className="text-slate-400 text-sm mb-6">單瓶購買，立即提升經驗倍率</div>
            <div className="text-4xl font-black text-white mb-1">5 <span className="text-base font-normal text-slate-500">NT / 瓶</span></div>
            <div className="text-xs text-slate-500 mb-8">每瓶 5 NT，數量不限</div>
            <a
              href={officialLine.link}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-green-500/20 border border-green-500/40 rounded text-green-300 font-bold text-sm hover:bg-green-500/30 transition-colors"
            >
              聯繫購買
            </a>
          </div>

          {/* 祝福升級 */}
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="bg-[#111] rounded-xl border border-amber-400/30 p-8 flex flex-col items-center text-center shadow-lg shadow-amber-400/10 hover:bg-[#1a1a1a] transition-colors"
          >
            <div className="w-14 h-14 rounded-full bg-amber-400/10 flex items-center justify-center mb-4">
              <ShieldCheck className="text-amber-400" size={28} />
            </div>
            <div className="text-xl font-bold text-white mb-1">祝福升級</div>
            <div className="text-slate-400 text-sm mb-6">武器 / 防具 / 飾品 祝福能力升級</div>
            <div className="text-4xl font-black text-white mb-1">2,000 <span className="text-base font-normal text-slate-500">NT / 件</span></div>
            <div className="text-xs text-slate-500 mb-8">單件升級服務，詳情聯繫客服</div>
            <a
              href={officialLine.link}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-amber-500/20 border border-amber-500/40 rounded text-amber-300 font-bold text-sm hover:bg-amber-500/30 transition-colors"
            >
              聯繫購買
            </a>
          </div>
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