import React, { useState, useRef, useEffect } from 'react';

// 定義訊息的格式
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: '勇者你好！我是大道天堂的 AI 引路人。\n請問有什麼我可以幫你的嗎？\n(試著問我：下載、掉落、變身、贊助)', sender: 'ai' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 自動捲動到最新訊息
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 🤖 AI 的大腦：關鍵字回復邏輯
  const getAIResponse = (input: string) => {
    const text = input.toLowerCase();
    
    if (text.includes('下載') || text.includes('主程式') || text.includes('懶人包')) {
      return '📥 主程式下載點已更新！\n請點擊官網首頁中央的「金色按鈕」即可下載。\n解壓縮密碼：123456';
    }
    if (text.includes('掉落') || text.includes('寶物') || text.includes('地圖')) {
      return '🔍 想要查詢掉落物嗎？\n請點擊上方導覽列的「職業介紹/攻略」，裡面有詳細的掉落查詢系統喔！';
    }
    if (text.includes('贊助') || text.includes('儲值') || text.includes('元寶')) {
      return '💎 感謝您的支持！\n目前開服期間優惠：首儲 1:200。\n請聯繫客服 LINE ID: @lineage_gm 進行服務。';
    }
    if (text.includes('變身') || text.includes('娃娃')) {
      return '⚔️ 本服完美復刻 7.6C 版本變身攻速。\n輸入指令 /變身 即可查看列表。';
    }
    if (text.includes('你好') || text.includes('嗨') || text.includes('hello')) {
      return '你好啊！準備好去亞丁大陸冒險了嗎？';
    }
    
    return '🤔 抱歉，這個問題太深奧了，我還在學習中。\n建議您直接聯繫真人客服 LINE: @lineage_gm';
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    // 1. 增加玩家的訊息
    const userMsg: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // 2. 模擬 AI 思考延遲 (0.5秒)
    setTimeout(() => {
      const aiResponseText = getAIResponse(userMsg.text);
      const aiMsg: Message = { id: Date.now() + 1, text: aiResponseText, sender: 'ai' };
      setMessages(prev => [...prev, aiMsg]);
    }, 500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* 對話視窗本體 */}
      <div className={`mb-4 w-80 md:w-96 bg-black/90 backdrop-blur-md border border-[#b38728]/50 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 h-0'}`}>
        
        {/* 標題列 */}
        <div className="bg-gradient-to-r from-[#b38728] to-[#fccd4d] p-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-black font-black tracking-widest text-sm">GM 小幫手 (Online)</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-black/60 hover:text-black transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* 訊息顯示區 */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#b38728] scrollbar-track-black">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-lg p-3 text-sm leading-relaxed whitespace-pre-line ${
                msg.sender === 'user' 
                  ? 'bg-[#b38728] text-black font-bold rounded-tr-none' 
                  : 'bg-white/10 text-slate-200 border border-white/5 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* 輸入區 */}
        <form onSubmit={handleSendMessage} className="p-3 border-t border-white/10 bg-black/50 flex gap-2">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="請輸入關鍵字 (如: 下載)..."
            className="flex-1 bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#fccd4d] transition-colors"
          />
          <button type="submit" className="bg-[#fccd4d] hover:bg-[#b38728] text-black px-4 py-2 rounded font-bold transition-colors">
            發送
          </button>
        </form>
      </div>

      {/* 懸浮按鈕 (開關) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(252,205,77,0.4)] transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-slate-700 text-slate-400 rotate-90' : 'bg-gradient-to-br from-[#fccd4d] to-[#b38728] text-black animate-bounce-slow'}`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        )}
      </button>

    </div>
  );
};

export default AIConsultant;