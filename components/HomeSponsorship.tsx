import React from 'react';
import { Gem, MessageCircle, CheckCircle2 } from 'lucide-react';

const HomeSponsorship: React.FC = () => {
  const officialLine = {
    link: 'https://lin.ee/yOavIV8',
  };

  const plans = [
    {
      price: 1000,
      image: '/1000確定版本.png',
      badge: '入門首選',
      borderColor: 'border-blue-500/30',
      badgeBg: 'bg-blue-500/20 text-blue-300',
      details: [
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
      borderColor: 'border-[#fccd4d]/50',
      badgeBg: 'bg-[#fccd4d]/20 text-[#fccd4d]',
      isPopular: true,
      details: [
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
      borderColor: 'border-purple-500/30',
      badgeBg: 'bg-purple-500/20 text-purple-300',
      details: [
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
    <section className="py-20 relative bg-black overflow-hidden border-t border-b border-white/5 z-20">
      {/* 裝飾光暈 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-[#fccd4d]/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* 標題 */}
        <div className="text-center mb-14" data-aos="fade-up">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#fccd4d]/10 border border-[#fccd4d]/30 text-[#fccd4d] text-sm font-bold tracking-widest uppercase mb-4">
            <Gem size={16} /> Exclusive Offers
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            開服<span className="text-[#fccd4d]">限定贊助</span>方案
          </h2>
          <p className="text-slate-400 text-lg">最強裝備隨心搭配，快速起步稱霸全服</p>
        </div>

        {/* 三欄卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className={`
                relative rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-2
                border ${plan.borderColor} bg-[#0d0d0d]
                ${plan.isPopular ? 'lg:scale-105 z-10 shadow-[0_0_30px_rgba(252,205,77,0.15)]' : 'shadow-xl'}
              `}
            >
              {/* 推薦標籤 */}
              {plan.isPopular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#fccd4d] to-[#e6b840] text-black text-center text-sm font-bold py-1.5 z-20">
                  ⭐ 推薦首選
                </div>
              )}

              {/* 圖片區：限制高度，居中裁切 */}
              <div className={`relative overflow-hidden bg-black/60 ${plan.isPopular ? 'mt-8' : ''}`}>
                <img
                  src={plan.image}
                  alt={`${plan.price} 贊助方案`}
                  className="w-full h-64 object-contain object-center p-2 group-hover:scale-105 transition-transform duration-500"
                />
                {/* 價格浮標 */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2">
                  <span className="text-2xl font-black text-white">${plan.price}</span>
                </div>
              </div>

              {/* 內容區 */}
              <div className="p-6 flex flex-col flex-grow">
                {/* 標籤 */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${plan.badgeBg}`}>
                    {plan.badge}
                  </span>
                </div>

                {/* 贈品清單 */}
                <ul className="space-y-2.5 mb-6 flex-grow">
                  {plan.details.map((text, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${plan.isPopular ? 'text-[#fccd4d]' : 'text-green-500/80'}`}
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                {/* 購買按鈕 */}
                <a
                  href={officialLine.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    w-full py-3.5 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-all duration-300
                    ${plan.isPopular
                      ? 'bg-gradient-to-r from-[#fccd4d] to-[#e6b840] text-black shadow-[0_0_15px_rgba(252,205,77,0.3)] hover:shadow-[0_0_25px_rgba(252,205,77,0.5)] hover:scale-[1.02]'
                      : 'bg-white/10 text-white hover:bg-white/20 hover:scale-[1.02]'}
                  `}
                >
                  <MessageCircle size={18} />
                  聯繫客服購買
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSponsorship;
