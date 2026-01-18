// src/components/AIConsultant.tsx
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Bot, User, Send, Headphones } from 'lucide-react';

// 1. 定義問題與答案的資料結構
interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// 2. 預設常見問題 (可隨時擴充)
const FAQS: FAQ[] = [
  {
    id: 1,
    question: "如何下載遊戲？",
    answer: "請至官網首頁點擊「下載遊戲」按鈕，我們提供 Google Drive 載點。安裝前請務必關閉防毒軟體以免誤判。"
  },
  {
    id: 2,
    question: "伺服器倍率是多少？",
    answer: "經驗倍率：10倍\n正義倍率：5倍\n負重倍率：10倍\n武器/防具強化：2倍\n能力值上限：45\n萬能藥上限：15瓶。致力於打造長久穩定的遊戲環境。"
  },
  {
    id: 3,
    question: "如何進行贊助？",
    answer: "請點擊上方選單的「贊助方案」，或是直接聯繫官方 LINE (@746pwlgu) 由專人為您服務。"
  },
  {
    id: 4,
    question: "帳號被鎖怎麼辦？",
    answer: "若遇到帳號問題，請直接點擊下方「聯繫真人客服」，並提供您的角色 ID 給管理員查詢。"
  }
];

// 定義訊息類型
type Message = {
  type: 'bot' | 'user';
  text: string;
};

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // 初始訊息
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: "您好！我是大道 M 智能助手。請問有什麼可以幫您的嗎？請選擇下方常見問題：" }
  ]);
  
  // 用於自動捲動到底部
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // 處理點擊問題
  const handleAsk = (faq: FAQ) => {
    // 1. 加入使用者的提問
    setMessages(prev => [...prev, { type: 'user', text: faq.question }]);
    
    // 2. 模擬延遲後加入 AI 回覆 (增加真實感)
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: faq.answer }]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* --- 聊天視窗 (當 isOpen 為 true 時顯示) --- */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-slate-900 border border-yellow-500/30 rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 border-b border-yellow-500/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-yellow-500/20 rounded-full">
                <Bot className="w-5 h-5 text-yellow-500" />
              </div>
              <span className="text-yellow-500 font-bold tracking-wide">大道 M 智能助手</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Content Area */}
          <div className="h-80 overflow-y-auto p-4 bg-slate-900/95 space-y-4 custom-scrollbar">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                    msg.type === 'user' 
                      ? 'bg-yellow-600/20 text-yellow-100 border border-yellow-500/30 rounded-tr-none' 
                      : 'bg-slate-800 text-gray-200 border border-slate-700 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* 常見問題按鈕區 (只有當最後一則訊息是機器人時才顯示，避免洗版，這裡設定為常駐顯示在底部但在訊息流之後) */}
            <div className="mt-4 grid grid-cols-1 gap-2">
               <p className="text-xs text-gray-500 mb-1 text-center">--- 常見問題 ---</p>
               {FAQS.map(faq => (
                 <button
                   key={faq.id}
                   onClick={() => handleAsk(faq)}
                   className="text-left text-sm px-3 py-2 bg-slate-800 hover:bg-yellow-500/10 border border-slate-700 hover:border-yellow-500/50 text-gray-300 hover:text-yellow-400 rounded transition-all duration-300 flex items-center gap-2 group"
                 >
                   <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500"></span>
                   {faq.question}
                 </button>
               ))}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Footer: 真人客服引導 */}
          <div className="p-3 bg-slate-950 border-t border-yellow-500/20">
            <a 
              href="https://lin.ee/yOavIV8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-yellow-600 hover:bg-yellow-500 text-black font-bold rounded transition-all duration-300 shadow-[0_0_10px_rgba(234,179,8,0.2)] hover:shadow-[0_0_15px_rgba(234,179,8,0.4)]"
            >
              <Headphones className="w-4 h-4" />
              聯繫真人客服 (LINE)
            </a>
          </div>
        </div>
      )}

      {/* --- 懸浮按鈕 (Toggle Button) --- */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] transition-all duration-300 ${
          isOpen 
            ? 'bg-slate-800 text-gray-400 rotate-90' 
            : 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-black hover:scale-110'
        }`}
      >
        {/* 呼吸燈特效光暈 (只在關閉時顯示) */}
        {!isOpen && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75 animate-ping"></span>
        )}
        
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-7 h-7 relative z-10" />
        )}
      </button>
    </div>
  );
};

export default AIConsultant;