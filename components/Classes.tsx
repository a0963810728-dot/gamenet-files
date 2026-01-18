import React, { useState } from 'react';

// 這是首頁專用的「精華版」職業展示，讓首頁結構完整
const Classes: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const jobs = ['王族', '騎士', '妖精', '法師', '黑妖', '龍鬥', '戰士'];

  return (
    <section className="py-20 bg-[#050505] border-t border-white/10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">CLASS INFO</h2>
        <p className="text-slate-500">七大職業介紹</p>
      </div>
      
      {/* 簡單的切換顯示，確保首頁不崩潰 */}
      <div className="flex justify-center gap-4 flex-wrap px-4">
        {jobs.map((job, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-2 rounded-full border ${activeTab === idx ? 'bg-[#fccd4d] text-black border-[#fccd4d]' : 'bg-transparent text-slate-500 border-slate-700'}`}
          >
            {job}
          </button>
        ))}
      </div>
      
      <div className="mt-10 text-center text-slate-400 min-h-[200px] flex items-center justify-center bg-white/5 mx-4 md:mx-auto max-w-4xl rounded-xl">
        <p>點擊上方按鈕查看 {jobs[activeTab]} 的詳細數據</p>
      </div>
    </section>
  );
};

export default Classes;