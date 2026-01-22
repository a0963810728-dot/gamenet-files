// src/components/DownloadModal.tsx
import React, { useEffect } from 'react';
import { X, Download, AlertTriangle, HardDrive, Cloud } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  // 當彈窗打開時，禁止背景滾動
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // 🔥 處理點擊下載按鈕的邏輯
  const handleClick = (e: React.MouseEvent, url: string, name: string) => {
    if (!url || url === '#') {
      e.preventDefault(); // 阻止跳轉
      alert(`【${name}】即將開放，敬請鎖定官方 LINE 公告！`);
      return;
    }
  };

  // 定義載點資料
  const downloadSources = [
    {
      name: 'Google Drive',
      icon: HardDrive,
      color: 'text-blue-400',
      bg: 'hover:bg-blue-500/20',
      border: 'hover:border-blue-400',
      // 🔥 已更新 Google Drive 載點
      url: 'https://drive.google.com/file/d/1UuyT-aa6_uyACAO-O8j3WkWiVMDjeosy/view?usp=sharing' 
    },
    {
      name: 'Mega 空間',
      icon: Cloud,
      color: 'text-red-400',
      bg: 'hover:bg-red-500/20',
      border: 'hover:border-red-400',
      url: '' // 暫時留空
    },
    {
      name: '懶人包 (主程式+補丁)',
      icon: Download,
      color: 'text-[#fccd4d]',
      bg: 'hover:bg-[#fccd4d]/20',
      border: 'hover:border-[#fccd4d]',
      // 🔥 已更新懶人包載點
      url: 'https://drive.google.com/file/d/1UuyT-aa6_uyACAO-O8j3WkWiVMDjeosy/view?usp=sharing'
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* 1. 黑色半透明背景 (點擊背景可關閉) */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* 2. 彈窗主體 */}
      <div 
        className="relative w-full max-w-lg bg-[#111] border border-[#fccd4d]/30 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden transform transition-all duration-300 animate-zoom-in"
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#222] p-6 border-b border-white/10 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Download className="text-[#fccd4d]" size={24} />
            下載遊戲主程式
          </h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          
          {/* 警告區塊 */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={20} />
            <div className="text-sm text-slate-300 leading-relaxed">
              <span className="text-red-400 font-bold block mb-1">下載前重要提醒：</span>
              請務必<span className="text-white font-bold underline decoration-red-500">關閉防毒軟體</span>與 Windows Defender，以免誤刪遊戲核心檔案導致無法登入。
            </div>
          </div>

          {/* 按鈕列表 */}
          <div className="grid grid-cols-1 gap-3">
            {downloadSources.map((source, index) => (
              <a
                key={index}
                href={source.url || '#'} 
                target="_blank"
                rel="noreferrer"
                onClick={(e) => handleClick(e, source.url, source.name)}
                className={`
                  group flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 
                  transition-all duration-300 ${source.bg} ${source.border} cursor-pointer
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-black/50 ${source.color}`}>
                    <source.icon size={24} />
                  </div>
                  <span className="text-lg font-bold text-white group-hover:translate-x-1 transition-transform">
                    {source.name}
                  </span>
                </div>
                {/* 狀態標籤 */}
                <div className={`text-xs px-3 py-1 rounded border border-white/5 ${source.url ? 'text-slate-400 bg-green-500/10 border-green-500/30' : 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30'}`}>
                  {source.url ? '點擊下載' : '準備中'}
                </div>
              </a>
            ))}
          </div>

          {/* 底部備註 */}
          <div className="text-center">
            <p className="text-xs text-slate-500 mb-2">
              下載後請解壓縮至純英文路徑 (例如 D:\DaoM)
            </p>
            <a href="https://lin.ee/yOavIV8" target="_blank" rel="noreferrer" className="text-xs text-[#fccd4d] hover:underline">
              遇到安裝問題？聯繫客服求助
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DownloadModal;