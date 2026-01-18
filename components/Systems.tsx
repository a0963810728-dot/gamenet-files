import React from 'react';

// 系統總覽 (目前為灰階佔位，待後續替換素材)
const Systems: React.FC = () => {
  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-3xl font-bold text-[#fccd4d] mb-10">GAME SYSTEMS</h2>
      
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* 這裡先用簡單的區塊佔位，防止報錯 */}
        {['變身系統', '娃娃系統', '紋樣系統', '裝備強化'].map((item, idx) => (
          <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl h-40 flex flex-col justify-center items-center gap-4 hover:border-[#fccd4d] transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-gray-600 rounded-full animate-pulse"></div>
            <span className="text-slate-300 font-bold">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Systems;