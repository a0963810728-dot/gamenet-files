import React from 'react';
import { siteConfig } from '../siteConfig';

const Hero: React.FC = () => {
  return (
    <section id="download" className="relative h-[85vh] flex items-center justify-center pt-24 overflow-hidden bg-black">
     {/* Background Layer */}
<div className="absolute inset-0 z-0">
  {/* 黑 → 金色 → 黑 的天堂感光暈 */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-[#3a2a10]/40 to-black z-10"></div>

  {/* 金色光感疊層 */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,130,0.25),transparent_60%)] z-10"></div>

  <img
  src="/hero-bg-v1.png"
  className="absolute inset-0 w-full h-full object-cover object-[center_65%] opacity-85 scale-110"
  alt="Game World"
/>


</div>


      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full pt-28 md:pt-36">
        <div className="animate-float">
  {/* 副標 */}
  <h2 className="gold-text text-sm sm:text-base md:text-lg font-bold tracking-[0.35em] mb-3 uppercase opacity-90">
    懷舊經典
  </h2>
 
</div>

        
        <p className="max-w-xl mx-auto text-slate-400 text-base sm:text-lg mb-10 leading-relaxed font-light">
          唯有真正的英雄，能在黑暗中看見星光。<br />
          立即下載客戶端，領取開服限定禮包。
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <div className="group relative">
            <div className="absolute -inset-1 gold-bg rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative btn-gold px-12 py-5 rounded-lg text-xl sm:text-2xl font-black tracking-widest flex items-center transition-all">
              <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
              主程式下載
            </button>
          </div>
          
          <div className="flex flex-col space-y-1 text-left text-[10px] text-slate-500 font-mono bg-white/5 p-3 rounded border border-white/5">
            <p>VERSION: {siteConfig.version}</p>
            <p>SIZE: {siteConfig.fileSize}</p>
            <p>DATE: {siteConfig.updateDate}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;