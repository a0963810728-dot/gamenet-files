// src/components/Hero.tsx
import React, { useEffect, useRef } from 'react';
import { siteConfig } from '../siteConfig';
import { MessageCircle } from 'lucide-react'; // 引入圖示

const Hero: React.FC = () => {
  // 使用 Ref 來控制影片元素
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // 🔥 關鍵修改：將影片播放速度調慢至 0.6 倍
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-end overflow-hidden bg-black pb-10 md:pb-16">
      
      {/* --- 背景區塊 --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 z-10" />
        
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-bg-v2.png" 
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <img src="/hero-bg-v2.png" alt="Background" className="w-full h-full object-cover" />
        </video>
      </div>
      
      {/* --- 主內容區 --- */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto w-full flex flex-col items-center gap-4">
        
        {/* 標題區 */}
        <h1 
          data-aos="fade-up" 
          data-aos-duration="1200"
          className="text-4xl md:text-6xl font-black tracking-widest relative z-10"
        >
          <span className="
            bg-gradient-to-r from-[#ff4d4d] via-[#fccd4d] to-[#ff4d4d] 
            bg-clip-text text-transparent 
            drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
          ">
            王者降臨
          </span>
          <span className="text-2xl md:text-4xl text-white ml-0 md:ml-4 block md:inline mt-2 md:mt-0 tracking-[0.2em] opacity-90 text-shadow-md">
            再戰亞丁
          </span>
        </h1>
        
        {/* 描述文字 */}
        <p 
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-slate-400 text-sm md:text-lg font-light tracking-[0.2em] leading-relaxed opacity-80 mb-2"
        >
          當年沒做完的夢，今天在這裡延續。<span className="hidden md:inline"> | </span><span className="text-[#fccd4d]">最強變身</span>、<span className="text-[#fccd4d]">神武全開</span>
        </p>
        
        {/* 按鈕與狀態區 */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="500"
          className="flex flex-col md:flex-row items-center justify-center gap-5 mt-2"
        >
          {/* 1. 下載按鈕 */}
          <button 
            className="group relative hover:scale-105 transition-all duration-300 transform focus:outline-none bg-transparent" 
            onClick={() => window.open(siteConfig.downloadUrl, '_blank')}
          >
            <div className="absolute inset-4 bg-[#fccd4d] opacity-0 group-hover:opacity-30 blur-xl rounded-full transition-opacity duration-500 -z-10 animate-pulse"></div>
            <img 
              src="/download-btn-transparent.png" 
              alt="主程式下載" 
              className="w-auto h-16 md:h-20 drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(252,205,77,0.6)]"
            />
          </button>

          {/* 2. 玩家社群按鈕 (網址已更新) */}
          <a 
            href="https://line.me/ti/g2/RMM_CtMRTpykSWwVKtQ69xf7vc32_xo9LeWTWg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" 
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] border border-green-400/30"
          >
            <MessageCircle className="w-6 h-6 animate-bounce" />
            加入玩家社群
          </a>

          {/* 3. 伺服器狀態 */}
          <div className="flex items-center gap-4 bg-black/60 backdrop-blur-md border border-[#b38728]/30 px-5 py-3 rounded-lg hover:bg-black/80 transition-all cursor-default shadow-lg group hover:border-[#b38728]/60">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] text-[#fccd4d] uppercase tracking-wider font-bold opacity-80">
                Server Online
              </span>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm md:text-base font-mono">
                  v{siteConfig.version}
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