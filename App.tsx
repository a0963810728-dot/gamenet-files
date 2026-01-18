import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';

// 引入各個頁面元件
import Home from './components/Home';
import GameGuide from './components/GameGuide';
import FullCollectionPage from './components/FullCollectionPage';

// 🔥🔥🔥 新增 1：引入背景音樂元件 🔥🔥🔥
import BackgroundMusic from './components/BackgroundMusic';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col font-sans overflow-x-hidden text-slate-300">
      
      {/* 網站頂部導覽列 (固定顯示) */}
      <Header />

      {/* 主要內容區 (根據網址切換顯示不同頁面) */}
      <main className="flex-grow">
        {/* Routes 依然保留，負責切換頁面 */}
        <Routes>
          {/* 首頁 */}
          <Route path="/" element={<Home />} />
          
          {/* 遊戲攻略頁 */}
          <Route path="/guide" element={<GameGuide />} />

          {/* 完整圖鑑頁 */}
          <Route path="/collection" element={<FullCollectionPage />} />
        </Routes>
      </main>

      {/* 網站底部 (固定顯示) */}
      <Footer />

      {/* 全域功能區 (固定浮動顯示) */}
      
      {/* AI 客服小幫手 */}
      <AIConsultant />

      {/* 🔥🔥🔥 新增 2：背景音樂播放器 (放在這裡全站都能聽到) 🔥🔥🔥 */}
      <BackgroundMusic />
      
    </div>
  );
}

export default App;