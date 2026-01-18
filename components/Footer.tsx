import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] relative overflow-hidden">
      {/* 頂部金色光條裝飾 */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#b38728] to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          
          {/* 區塊 1: LOGO 與簡介 */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* 皇冠圖示 */}
              <img 
                src="/header-crown.png" 
                alt="大道M天堂" 
                className="w-12 h-12 object-contain drop-shadow-[0_2px_10px_rgba(252,205,77,0.3)]"
              />
              
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#fccd4d] to-[#b38728] tracking-widest">
                大道M天堂
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-7 mb-6 text-justify">
              還原最初的感動，重現亞丁大陸的榮耀。公平公正，長久穩定，邀您共戰。
            </p>
            
          </div>

          {/* 區塊 2: 快速連結 */}
          <div>
            <h4 className="text-white font-bold tracking-widest mb-6 flex items-center">
              <span className="w-2 h-2 bg-[#fccd4d] rounded-full mr-3 inline-block animate-pulse"></span>
              快速連結
            </h4>
            <ul className="space-y-3">
              {['最新消息', '遊戲特色', '職業介紹', '下載專區'].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-slate-400 hover:text-[#fccd4d] transition-colors text-sm tracking-wider flex items-center group">
                    <span className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-[#fccd4d] transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 區塊 3: 客服中心 */}
          <div>
            <h4 className="text-white font-bold tracking-widest mb-6 flex items-center">
              <span className="w-2 h-2 bg-[#fccd4d] rounded-full mr-3 inline-block animate-pulse"></span>
              客服中心
            </h4>
            <ul className="space-y-4 text-sm">
              
              {/* 1. 服務時間 */}
              <li className="flex items-start gap-3 text-slate-400">
                <span className="text-[#fccd4d] text-lg">🕒</span>
                <div>
                  <p className="text-white font-bold">服務時間</p>
                  <p>每日 13:00 - 23:00</p>
                </div>
              </li>
              
              {/* 2. LINE 官方帳號 (已更新連結) */}
              <li className="flex items-start gap-3 text-slate-400 group">
                <span className="text-[#06C755] text-lg group-hover:scale-110 transition-transform">💬</span>
                <div>
                  <p className="text-white font-bold">LINE 官方帳號</p>
                  {/* 🔥🔥🔥 已更新為新連結 🔥🔥🔥 */}
                  <a href="https://lin.ee/OMXrthk" target="_blank" rel="noopener noreferrer" className="hover:text-[#06C755] cursor-pointer transition-colors">
                    @746pwlgu (點擊加入)
                  </a>
                </div>
              </li>

              {/* 3. Facebook 粉絲專頁 */}
              <li className="flex items-start gap-3 text-slate-400 group">
                <svg className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                <div>
                  <p className="text-white font-bold">Facebook 粉絲專頁</p>
                  <a href="https://www.facebook.com/share/1ARw4HrRzg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] cursor-pointer transition-colors">
                    大道M天堂 (點擊前往)
                  </a>
                </div>
              </li>

            </ul>
          </div>

          {/* 區塊 4: 關於我們 (底部宣告) */}
          <div>
             <h4 className="text-white font-bold tracking-widest mb-6 flex items-center">
              <span className="w-2 h-2 bg-[#fccd4d] rounded-full mr-3 inline-block animate-pulse"></span>
              關於本服
            </h4>
             <p className="text-slate-500 text-xs leading-6 text-justify">
              本伺服器為研究與學習用途，致力於還原經典遊戲體驗。所有遊戲內容與設定均以平衡與穩定為優先，杜絕任何破壞遊戲體驗之行為。
            </p>
          </div>

        </div>

        {/* 底部版權宣告 */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs tracking-wider text-center md:text-left">
            Copyright © {currentYear} <strong className="text-[#b38728]">大道M天堂</strong>. All rights reserved.
          </p>
          <p className="text-slate-600 text-[10px] tracking-widest">
            DESIGNED BY BLACK & GOLD STUDIO
          </p>
        </div>
      </div>

      {/* 背景裝飾文字 */}
      <div className="absolute -bottom-10 left-0 w-full text-center pointer-events-none select-none overflow-hidden">
        <span className="text-[120px] md:text-[180px] font-black text-white/[0.02] tracking-[1em]">LINEAGE</span>
      </div>
    </footer>
  );
};

export default Footer;