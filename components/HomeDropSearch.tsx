import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { DROPLIST_DATA } from '../src/data/droplistData';

const HomeDropSearch: React.FC = () => {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return DROPLIST_DATA.filter(d =>
      d.mobName.toLowerCase().includes(q) || d.itemName.toLowerCase().includes(q)
    ).slice(0, 50);
  }, [query]);

  const formatChance = (chance: number): string => {
    if (chance >= 1000000) return '100%';
    if (chance === 0) return '特殊';
    const pct = chance / 10000;
    if (pct >= 1) return `${pct.toFixed(1)}%`;
    return `${(chance / 100).toFixed(2)}‱`;
  };

  return (
    <section className="relative w-full py-20 bg-[#050505] overflow-hidden">
      {/* 背景光暈 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-green-500 opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* 標題 */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-widest">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">掉落</span>查詢
          </h2>
          <p className="text-slate-500 text-sm tracking-widest">怪物掉落即時查詢 · {DROPLIST_DATA.length.toLocaleString()} 筆資料</p>
          <div className="h-1 w-16 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 搜尋框 */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-green-400 transition-colors" size={20} />
            <input
              type="text"
              placeholder="輸入怪物名稱 or 物品名稱..."
              className="w-full bg-[#0f0f0f] border-2 border-white/10 focus:border-green-500/50 rounded-xl py-4 pl-12 pr-6 text-lg text-slate-200 focus:outline-none transition-all duration-300 placeholder:text-slate-600"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors text-sm"
              >✕</button>
            )}
          </div>
          {query.trim() && (
            <p className="text-xs text-slate-600 mt-2 pl-2">
              找到 <span className="text-green-400 font-bold">{results.length}</span> 筆結果
              {results.length >= 50 && <span>（顯示前 50 筆）</span>}
            </p>
          )}
        </div>

        {/* 無查詢時的提示 */}
        {!query.trim() && (
          <div className="text-center py-8">
            <p className="text-slate-600 text-sm">例如：<span className="text-slate-400 cursor-pointer hover:text-green-400 transition-colors" onClick={() => setQuery('梅杜莎')}>梅杜莎</span>、<span className="text-slate-400 cursor-pointer hover:text-green-400 transition-colors" onClick={() => setQuery('金幣')}>金幣</span>、<span className="text-slate-400 cursor-pointer hover:text-green-400 transition-colors" onClick={() => setQuery('英雄技能卡')}>英雄技能卡</span></p>
          </div>
        )}

        {/* 結果列表 */}
        {query.trim() && results.length > 0 && (
          <div className="space-y-1.5 max-h-[400px] overflow-y-auto pr-1 scrollbar-thin">
            {/* 表頭 */}
            <div className="hidden md:grid grid-cols-12 gap-2 px-4 py-2 text-xs text-slate-600 font-bold tracking-wider sticky top-0 bg-[#050505]/90 backdrop-blur-sm z-10 border-b border-white/5">
              <div className="col-span-4">怪物名稱</div>
              <div className="col-span-5">掉落物品</div>
              <div className="col-span-3 text-right">掉落機率</div>
            </div>
            {results.map((drop, idx) => {
              const chanceVal = drop.chance / 10000;
              const isRare = drop.chance > 0 && drop.chance <= 100;
              const isSpecial = drop.chance === 0;
              return (
                <div key={`${drop.mobId}-${drop.itemId}-${idx}`}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-2 px-4 py-2.5 rounded-lg border transition-all duration-200 ${
                    isSpecial ? 'bg-purple-500/5 border-purple-500/20' :
                    isRare ? 'bg-yellow-500/5 border-yellow-500/20' :
                    'bg-white/[0.02] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="md:col-span-4 font-bold text-slate-200 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
                    {drop.mobName}
                  </div>
                  <div className={`md:col-span-5 text-sm flex items-center gap-2 ${
                    isSpecial ? 'text-purple-300' : isRare ? 'text-yellow-300' : 'text-slate-300'
                  }`}>
                    {drop.itemName}
                    {isRare && <span className="text-[9px] bg-yellow-500/20 text-yellow-400 px-1 rounded">稀有</span>}
                    {isSpecial && <span className="text-[9px] bg-purple-500/20 text-purple-400 px-1 rounded">特殊</span>}
                  </div>
                  <div className={`md:col-span-3 text-right text-sm font-mono font-bold ${
                    isSpecial ? 'text-purple-400' :
                    chanceVal >= 50 ? 'text-green-400' :
                    chanceVal >= 10 ? 'text-blue-400' :
                    chanceVal >= 1 ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>
                    {formatChance(drop.chance)}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 無結果 */}
        {query.trim() && results.length === 0 && (
          <div className="text-center py-8">
            <p className="text-slate-500">找不到「<span className="text-green-400">{query}</span>」的掉落資料</p>
          </div>
        )}

        {/* 底部連結 */}
        <div className="text-center mt-8">
          <a href="/guide" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-green-400 transition-colors border border-white/10 hover:border-green-500/30 px-6 py-2 rounded-full">
            前往完整遊戲攻略 →
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeDropSearch;
