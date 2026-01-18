import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 定義導覽連結
  const navItems = [
    // 假設您的 News 元件最外層有設定 id="news"
    { name: '最新消息', link: '/#news' },
    // 🔥 修改處：將連結改為 /#game-features 以對應 Features.tsx 的 ID設定
    { name: '遊戲特色', link: '/#game-features' }, 
    { name: '職業介紹', link: '/guide' },     // 跳轉到攻略頁
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 判斷路由是否活躍 (用於一般頁面跳轉的高亮，錨點跳轉較難用此判斷)
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-[#b38728]/30 py-3' : 'bg-transparent border-b border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        
        {/* Logo 區塊 - 點擊回首頁頂部 */}
        <Link to="/" className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* 皇冠圖片 Logo */}
          <img
            src="/header-crown.png" 
            alt="天堂M 皇冠 Logo"
            className={`transition-all duration-300 object-contain drop-shadow-[0_2px_5px_rgba(179,135,40,0.8)] ${isScrolled ? 'w-8 h-8 md:w-9 md:h-9' : 'w-10 h-10 md:w-12 md:h-12'}`}
          />

          <div className="flex flex-col">
            <span className={`font-black tracking-widest text-[#fccd4d] drop-shadow-md transition-all duration-300 ${isScrolled ? 'text-xl' : 'text-2xl md:text-3xl'}`}>大道M天堂</span>
            <span className={`text-[10px] text-[#fccd4d]/80 tracking-[0.5em] uppercase font-light transition-all duration-300 ${isScrolled ? 'opacity-0 h-0' : 'opacity-100 h-auto'}`}>懷舊經典</span>
          </div>
        </Link>
        
        {/* 導覽連結區域 */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            // 判斷是否為錨點連結 (開頭是 /#)
            const isAnchor = item.link.startsWith('/#');
            
            return isAnchor ? (
              // 如果是錨點連結，使用一般 <a> 標籤實現跳轉與滑動
              <a 
                key={item.name} 
                href={item.link} 
                className="text-slate-300 hover:text-[#fccd4d] text-sm font-bold tracking-widest transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#fccd4d] transition-all group-hover:w-full"></span>
              </a>
            ) : (
              // 如果是頁面跳轉連結 (如 /guide)，使用 React Router 的 <Link>
              <Link
                key={item.name}
                to={item.link}
                className={`text-sm font-bold tracking-widest transition-colors relative group ${
                  isActive(item.link) ? 'text-[#fccd4d]' : 'text-slate-300 hover:text-[#fccd4d]'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#fccd4d] transition-all ${isActive(item.link) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            );
          })}
        </nav>

        {/* 右側功能區 */}
        <div className="flex items-center space-x-4">
          <div className={`hidden lg:flex items-center gap-2 text-[10px] font-mono border border-green-500/30 bg-green-500/10 px-2 py-1 rounded transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span><span className="text-green-400">System Online</span>
          </div>
          <Link to="/guide" className="border border-[#b38728] text-[#fccd4d] hover:bg-[#b38728] hover:text-black px-5 py-1.5 rounded text-sm font-bold transition-all duration-300 shadow-[0_0_10px_rgba(179,135,40,0.2)] hover:shadow-[0_0_20px_rgba(179,135,40,0.6)]">遊戲攻略</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;