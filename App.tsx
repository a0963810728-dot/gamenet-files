// src/App.tsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // SEO 標題控制
import AOS from 'aos';
import 'aos/dist/aos.css'; // 引入動畫樣式

// 1. 全域佈局組件
import Header from './components/Header';
import Footer from './components/Footer';

// 2. 頁面組件
import Home from './components/Home';
import GameGuide from './components/GameGuide';
import FullCollectionPage from './components/FullCollectionPage';
import SystemPage from './components/SystemPage'; // 特色系統 (動態路由)
import Sponsorship from './components/Sponsorship'; // 贊助頁面

// 3. 功能型懸浮組件
import AIConsultant from './components/AIConsultant'; // AI 客服
import BackgroundMusic from './components/BackgroundMusic'; // 背景音樂

function App() {
  const location = useLocation();

  useEffect(() => {
    // 1. 初始化滾動動畫 (AOS)
    AOS.init({
      duration: 1000, // 動畫持續時間 (毫秒)
      once: false, // 往回滑也會再次觸發動畫
      mirror: true,
      offset: 50,
    });

    // 2. 全站禁止右鍵 (防止下載圖片/複製文字)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  // 每次切換頁面時，重新整理動畫觸發點，確保動畫正常運作
  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col font-sans overflow-x-hidden text-slate-300 selection:bg-yellow-500 selection:text-black">
      
      {/* 預設 SEO 設定：如果內頁沒有覆蓋，就會顯示這個 */}
      <Helmet>
        <title>大道 M 天堂 - 2026 年度大作</title>
        <meta name="description" content="大道 M 天堂，重返榮耀，經典再現。體驗 2026 最強私服設定，黑金質感，極致體驗。" />
      </Helmet>

      {/* --- 網站頂部導覽列 (固定顯示) --- */}
      <Header />

      {/* --- 主要內容區 --- */}
      {/* pt-20 是為了預留空間給 Fixed Header，避免內容被遮擋 */}
      <main className="flex-grow pt-20">
        <Routes>
          {/* 首頁 */}
          <Route path="/" element={<Home />} />
          
          {/* 遊戲攻略頁 */}
          <Route path="/guide" element={<GameGuide />} />

          {/* 完整圖鑑頁 */}
          <Route path="/collection" element={<FullCollectionPage />} />

          {/* 贊助頁面：個別設定標題 */}
          <Route path="/sponsorship" element={
            <>
              <Helmet>
                <title>贊助方案 - 大道 M</title>
              </Helmet>
              <Sponsorship />
            </>
          } />

          {/* 特色系統內頁 (透過網址參數 :type 自動切換內容) */}
          <Route path="/system/:type" element={<SystemPage />} />
        </Routes>
      </main>

      {/* --- 網站底部 (固定顯示) --- */}
      <Footer />

      {/* --- 全域懸浮功能區 --- */}
      
      {/* AI 客服小幫手 (右下角) */}
      <AIConsultant />

      {/* 背景音樂播放器 (隱藏或角落顯示) */}
      <BackgroundMusic />
      
    </div>
  );
}

export default App;