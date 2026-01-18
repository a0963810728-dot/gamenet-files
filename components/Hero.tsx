import React from 'react';
import { siteConfig } from '../siteConfig';

const Hero: React.FC = () => {
  return (
    // 修改 1: pb-4 md:pb-10 (原本是 pb-12 md:pb-16)
    // 我們大幅減少了底部的留白，讓內容盡量往下沉
    <div className="relative w-full h-screen flex flex-col items-center justify-end overflow-hidden bg-black pb-4 md:pb-10">
      
      {/* 背景圖層 */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60 scale-105 animate-pulse-slow" style={{ backgroundImage: "url('/hero-bg-v2.png')" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      
      {/* 主內容區 */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto w-full">
        
        {/* 標題區 */}
        {/* 修改 2: mb-2 (原本是 mb-4)，縮小標題與下方文字的距離，讓整體高度變矮，避免往上頂到背景 Logo */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-[#fff0c0] via-[#fccd4d] to-[#b38728] mb-2 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] tracking-wide leading-tight py-2 filter brightness-110">
          王者降臨 · 再戰亞丁
        </h1>
        
        {/* 修改 3: mb-6 (原本是 mb-8)，同樣是為了省空間 */}
        <p className="text-slate-300 text-base md:text-2xl font-light tracking-[0.2em] mb-6 text-shadow-lg leading-relaxed opacity-90">
          當年沒做完的夢，今天在這裡延續。<br className="md:hidden" />
          <span className="text-[#fccd4d]">最強變身</span>、<span className="text-[#fccd4d]">神武全開</span>，等你來拿。
        </p>
        
        {/* 按鈕與狀態區 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
          
          {/* 左側：下載按鈕 */}
          <button 
            className="group relative hover:scale-105 transition-all duration-500 transform focus:outline-none bg-transparent" 
            onClick={() => window.open(siteConfig.downloadUrl, '_blank')}
            aria-label="主程式下載"
          >
            <img 
              src="/download-btn-transparent.png" 
              alt="主程式下載" 
              className="w-auto h-20 md:h-24 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_8px_25px_rgba(252,205,77,0.6)] transition-all duration-500"
            />
            <div className="absolute inset-3 bg-[#fccd4d] opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-500 -z-10"></div>
          </button>

          {/* 右側：伺服器狀態 */}
          <div className="flex items-center gap-5 bg-black/60 backdrop-blur-xl border border-[#b38728]/50 px-6 py-4 rounded-xl text-left hover:bg-black/80 transition-all cursor-default shadow-[0_0_20px_rgba(179,135,40,0.15)] hover:shadow-[0_0_30px_rgba(179,135,40,0.3)] group">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-tr from-green-600 to-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#fccd4d] uppercase tracking-[0.2em] font-bold mb-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                Server Online
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-white font-bold text-base md:text-lg tracking-widest font-mono">
                  v{siteConfig.version}
                </span>
                <span className="text-[10px] text-green-400 border border-green-500/30 px-1.5 py-0.5 rounded bg-green-500/10 whitespace-nowrap">
                  穩定運行中
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;