import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // 1. 初始化：檢查是否有儲存的播放偏好
    const savedPreference = localStorage.getItem('bgmPlaying');
    const shouldPlay = savedPreference === 'true';

    if (shouldPlay && audioRef.current) {
      // 嘗試播放音樂
      // 注意：現代瀏覽器可能會阻擋未經互動的自動播放
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            // 自動播放失敗是正常的 (瀏覽器策略)，我們就保持靜音狀態等待用戶點擊
            console.log("Autoplay prevented by browser, waiting for user interaction.");
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      localStorage.setItem('bgmPlaying', 'false');
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        localStorage.setItem('bgmPlaying', 'true');
        setIsPlaying(true);
      }).catch(e => console.error("Play failed:", e));
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* 音訊元件 (隱藏) */}
      <audio ref={audioRef} loop>
        <source src="/bgm.mp3" type="audio/mpeg" />
      </audio>

      {/* 控制按鈕 */}
      <button
        onClick={togglePlay}
        className={`
          flex items-center justify-center w-12 h-12 rounded-full 
          border-2 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]
          hover:scale-110 active:scale-95
          ${isPlaying 
            ? 'bg-[#fccd4d]/10 border-[#fccd4d] text-[#fccd4d] shadow-[0_0_20px_rgba(252,205,77,0.4)]' 
            : 'bg-black/40 border-slate-600 text-slate-500 hover:border-slate-400 hover:text-slate-300'
          }
        `}
        title={isPlaying ? "關閉背景音樂" : "開啟背景音樂"}
      >
        {isPlaying ? (
          <Volume2 size={24} className="animate-pulse" />
        ) : (
          <VolumeX size={24} />
        )}
      </button>
    </div>
  );
};

export default BackgroundMusic;