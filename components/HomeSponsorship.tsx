import React from 'react';
import { Gem, MessageCircle, CheckCircle2 } from 'lucide-react';

const HomeSponsorship: React.FC = () => {
  // 官方 LINE 設定
  const officialLine = {
    link: 'https://lin.ee/yOavIV8',
  };

  const plans = [
    {
      price: 1000,
      image: '/1000確定版本.png',
      badge: '入門首選',
      color: 'from-blue-600/20 to-blue-900/20',
      borderColor: 'border-blue-500/30',
      shadowColor: 'shadow-blue-500/20',
      diamonds: '20000',
      details: [
        '20倍藍鑽',
        '+6 武官/神官裝備 (自選一套)',
        '+6 稀有武器 (自選一把)',
        '龍之鑽石禮盒*2 (經驗加倍)',
        '終極治癒藥水(刻印)*2000',
        '傳說變身自選箱'
      ]
    },
    {
      price: 3000,
      image: '/3000確定版本.png',
      badge: 'CP值最高',
      color: 'from-[#fccd4d]/20 to-[#b38728]/20',
      borderColor: 'border-[#fccd4d]/50',
      shadowColor: 'shadow-[#fccd4d]/30',
      isPopular: true,
      diamonds: '150000',
      details: [
        '50倍藍鑽',
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
      image: '/5000確定版本.png',
      badge: '大課長專屬',
      color: 'from-purple-600/20 to-purple-900/20',
      borderColor: 'border-purple-500/30',
      shadowColor: 'shadow-purple-500/20',
      diamonds: '500000',
      details: [
        '100倍藍鑽',
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
    }
  ];

  return (
    <section className="py-24 relative bg-black overflow-hidden border-t border-b border-white/5 z-20">
      
      {/* 裝飾光暈 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[#fccd4d]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#fccd4d]/10 border border-[#fccd4d]/30 text-[#fccd4d] text-sm font-bold tracking-widest uppercase mb-4">
            <Gem size={16} /> Exclusive Offers
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            開服<span className="text-[#fccd4d]">限定贊助</span>方案
          </h2>
          <p className="text-slate-400 text-lg">圖片介紹與詳細方案內容</p>
        </div>

        <div className="flex flex-col gap-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`
                relative rounded-2xl p-[1px] group transition-all duration-500 hover:-translate-y-1
                ${plan.isPopular ? 'scale-100 z-10' : 'scale-100 opacity-95 hover:opacity-100'}
              `}
            >
              {/* 外框漸變 bg */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.borderColor} opacity-50`}></div>
              
              {/* 卡片主體 */}
              <div className={`
                relative h-full rounded-2xl bg-[#0a0a0a] border ${plan.borderColor} overflow-hidden shadow-2xl ${plan.shadowColor} 
                flex flex-col md:flex-row
              `}>
                
                {/* 推薦標籤 (僅熱門方案顯示) */}
                {plan.isPopular && (
                  <div className="absolute top-4 -left-10 -rotate-45 bg-[#fccd4d] text-black text-sm font-bold px-12 py-1 shadow-[0_0_20px_rgba(252,205,77,0.5)] z-20">
                    推薦首選
                  </div>
                )}

                {/* 左側：圖片與標題區 (佔 40%) */}
                <div className={`w-full md:w-[45%] flex flex-col bg-gradient-to-br ${plan.color} relative border-b md:border-b-0 md:border-r border-white/10`}>
                  <div className="pt-8 pb-4 text-center">
                    <div className="text-white/60 text-sm font-bold tracking-widest mb-1">{plan.badge}</div>
                    <div className="text-4xl md:text-5xl font-black text-white flex items-center justify-center gap-1">
                      <span className="text-2xl text-white/50">$</span>{plan.price}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex items-center justify-center bg-black/40">
                    <img 
                      src={plan.image} 
                      alt={`${plan.price} 贊助方案`} 
                      className="w-full max-w-sm h-auto object-contain rounded-xl border border-white/10 shadow-lg group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* 右側：詳細內容區 (佔 60%) */}
                <div className="w-full md:w-[55%] p-8 bg-[#0d0d0d] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <Gem className={plan.isPopular ? 'text-[#fccd4d]' : 'text-slate-400'} size={24} />
                      <h3 className="text-2xl font-bold text-white tracking-widest">方案內容</h3>
                      <span className="ml-auto text-xl font-bold text-[#fccd4d]">{plan.diamonds} <span className="text-sm text-slate-400">藍鑽</span></span>
                    </div>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mb-8">
                      {plan.details.map((text, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-snug">
                          <CheckCircle2 size={18} className={`flex-shrink-0 mt-0.5 ${plan.isPopular ? 'text-[#fccd4d]' : 'text-green-500'}`} />
                          <span className="font-medium">{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={officialLine.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`
                      w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300
                      ${plan.isPopular 
                        ? 'bg-gradient-to-r from-[#fccd4d] to-[#e6b840] text-black shadow-[0_0_20px_rgba(252,205,77,0.4)] hover:shadow-[0_0_30px_rgba(252,205,77,0.6)] hover:scale-[1.02]' 
                        : 'bg-white/10 text-white hover:bg-white/20 hover:scale-[1.02]'}
                    `}
                  >
                    <MessageCircle size={22} />
                    聯繫客服購買 ${plan.price} 方案
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSponsorship;
