import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div className="bg-[#0a0a0a] border-b border-[#b38728]/20 text-[10px] sm:text-xs text-slate-400 py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="hover:text-[#fccd4d] cursor-pointer transition-colors">
              健康遊戲忠告
            </span>
            <span className="hover:text-[#fccd4d] cursor-pointer transition-colors">
              客服中心
            </span>
          </div>
          <div className="flex space-x-6 items-center">
            <span className="text-[#fccd4d] font-bold">
              目前狀態：伺服器穩定運行中
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-black/90 backdrop-blur-md border-b border-[#b38728]/30 h-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gold-bg flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-widest gold-text italic">
                大道M天堂
              </span>
              <span className="text-[10px] text-white tracking-[0.2em] font-bold opacity-80">
                懷舊經典
              </span>
            </div>
          </div>

          <button className="gold-btn px-6 py-2 rounded font-bold">
            開始冒險
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
