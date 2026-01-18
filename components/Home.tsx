import React from 'react';
// 引入首頁需要的內容元件
import Hero from './Hero';
import News from './News';
import Features from './Features'; // 🔥 步驟 1: 取消註解，重新引入
// import Collection from './Collection';
import HomeEntryCards from './HomeEntryCards';

// 🔥🔥🔥 還原修正：先把這兩個還沒建立的檔案註解掉，避免網站崩潰 🔥🔥🔥
// import Classes from './Classes';
// import Systems from './Systems';

const Home: React.FC = () => {
  return (
    // 外層容器，背景全黑
    <div className="bg-black">
      
      {/* 主視覺區塊 */}
      <Hero />
      
      {/* 三大圖鑑入口 (變身/娃娃/聖物) */}
      <HomeEntryCards />
      
      {/* 🔥 步驟 2: 將新的特色系統區塊放在這裡 */}
      <Features />

      {/* 最新消息區塊 */}
      <News />

      {/* 神話圖鑑展示區塊 - 之前已註解 */}
      {/* <Collection /> */}

      {/* 🔥🔥🔥 還原修正：暫時隱藏這兩區，直到我們準備好為止 🔥🔥🔥 */}
      {/* <Classes /> */}
      {/* <Systems /> */}
      
    </div>
  );
};

export default Home;