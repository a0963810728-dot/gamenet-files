import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Newspaper, Gamepad2, BookOpen, Crown, Download, Trophy } from 'lucide-react';
// 🔥 1. 引入剛剛做好的彈窗組件
import DownloadModal from './DownloadModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 🔥 2. 新增控制彈窗的狀態
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const location = useLocation();

  // 定義導覽連結
  const navItems = [
    { name: '最新消息', link: '/#news', icon: Newspaper },
    { name: '遊戲特色', link: '/#game-features', icon: Gamepad2 },
    { name: '遊戲攻略', link: '/guide', icon: BookOpen },
    { name: '名人堂', link: '/hall-of-fame', icon: Trophy },
    { name: '贊助支持', link: '/sponsorship', icon: Crown }, 
  ];

  // 監聽捲動事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 路由改變時，自動關閉手機選單
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  // 🔥 3. 處理開啟下載彈窗 (包含關閉手機選單)
  const handleOpenDownload = () => {
    setIsMobileMenuOpen(false); // 如果手機選單是開的，先關掉
    setIsDownloadModalOpen(true); // 打開彈窗
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-[#b38728]/30 py-3' : 'bg-transparent border-b border-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
          
          {/* Logo 區塊 */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer group z-50 relative" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
          
          {/* 電腦版導覽 */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isAnchor = item.link.startsWith('/#');
              return isAnchor ? (
                <a 
                  key={item.name} 
                  href={item.link} 
                  className="text-slate-300 hover:text-[#fccd4d] text-sm font-bold tracking-widest transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#fccd4d] transition-all group-hover:w-full"></span>
                </a>
              ) : (
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
            <div className={`hidden lg:flex items-center gap-2 text-[10px] font-mono border border-green-500/30 bg-green-500/10 px-2 py-1 rounded transition-opacity duration-300 ${isScrolled ? 'opacity-0 hidden' : 'opacity-100'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span><span className="text-green-400">System Online</span>
            </div>
            
            {/* 電腦版：下載按鈕 (改為開啟彈窗) */}
            <button 
              onClick={handleOpenDownload}
              className="hidden md:flex items-center gap-2 border border-[#b38728] text-[#fccd4d] hover:bg-[#b38728] hover:text-black px-5 py-1.5 rounded text-sm font-bold transition-all duration-300 shadow-[0_0_10px_rgba(179,135,40,0.2)] hover:shadow-[0_0_20px_rgba(179,135,40,0.6)]"
            >
              <Download size={16} />
              下載遊戲
            </button>

            {/* 手機版漢堡按鈕 */}
            <button 
              className="md:hidden z-50 text-[#fccd4d] hover:text-white transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </header>

      {/* 手機版側邊選單 */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-500 transform md:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        {navItems.map((item, index) => {
          const isAnchor = item.link.startsWith('/#');
          const content = (
            <div className="flex items-center gap-4 text-2xl font-bold text-gray-300 hover:text-[#fccd4d] transition-colors group">
              <item.icon className="w-6 h-6 text-[#b38728] group-hover:text-[#fccd4d]" />
              {item.name}
            </div>
          );

          return isAnchor ? (
            <a 
              key={item.name}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {content}
            </a>
          ) : (
            <Link 
              key={item.name}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {content}
            </Link>
          );
        })}

        <div className="w-16 h-1 bg-[#b38728]/30 rounded-full my-4"></div>

        {/* 手機版：立即下載按鈕 (改為開啟彈窗) */}
        <button 
          onClick={handleOpenDownload}
          className="flex items-center gap-3 px-8 py-4 bg-[#b38728] text-black font-bold text-lg rounded-xl shadow-[0_0_20px_rgba(179,135,40,0.4)] active:scale-95 transition-transform"
        >
          <Download size={24} />
          立即下載遊戲
        </button>
      </div>

      {/* 🔥 4. 掛載彈窗組件 (放在最後面) */}
      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />
    </>
  );
};

export default Header;