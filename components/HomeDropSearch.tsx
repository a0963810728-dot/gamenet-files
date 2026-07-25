import React, { useState, useMemo } from 'react';
import { Search, MapPin, Skull } from 'lucide-react';
import { DROPLIST_DATA } from '../src/data/droplistData';
import { DROPLIST_MAP_DATA } from '../src/data/droplistMapData';

export interface UnifiedDropResult {
  idKey: string;
  type: 'monster' | 'map';
  sourceId: number;
  sourceName: string;
  itemId: number;
  itemName: string;
  min: number;
  max: number;
  chance: number;
}

const HomeDropSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'monster' | 'map'>('all');

  // 預先展平所有資料 (怪物掉落 + 地圖掉落) 整合至單一陣列
  const allDrops = useMemo<UnifiedDropResult[]>(() => {
    const list: UnifiedDropResult[] = [];

    // 1. 怪物掉落
    DROPLIST_DATA.forEach((d, idx) => {
      list.push({
        idKey: `mob-${d.mobId}-${d.itemId}-${idx}`,
        type: 'monster',
        sourceId: d.mobId,
        sourceName: d.mobName,
        itemId: d.itemId,
        itemName: d.itemName,
        min: d.min,
        max: d.max,
        chance: d.chance,
      });
    });

    // 2. 地圖區域掉落
    DROPLIST_MAP_DATA.forEach(group => {
      group.items.forEach((m, idx) => {
        list.push({
          idKey: `map-${group.mapId}-${m.itemId}-${idx}`,
          type: 'map',
          sourceId: group.mapId,
          sourceName: group.mapName,
          itemId: m.itemId,
          itemName: m.itemName,
          min: m.min,
          max: m.max,
          chance: m.chance,
        });
      });
    });

    return list;
  }, []);

  // 搜尋過濾
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return allDrops.filter(item => {
      // 類別過濾
      if (typeFilter !== 'all' && item.type !== typeFilter) return false;

      // 關鍵字匹配 (來源名稱、物品名稱、物品 ID)
      return (
        item.sourceName.toLowerCase().includes(q) ||
        item.itemName.toLowerCase().includes(q) ||
        item.itemId.toString().includes(q)
      );
    }).slice(0, 80);
  }, [query, typeFilter, allDrops]);

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-500 opacity-[0.03] blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* 標題區 */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-widest">
            全服<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-emerald-400">掉落總表</span>查詢
          </h2>
          <p className="text-slate-400 text-sm md:text-base tracking-widest">
            整合怪物掉落 ({DROPLIST_DATA.length.toLocaleString()} 筆) 與 地圖區域掉落 ({DROPLIST_MAP_DATA.reduce((acc, g) => acc + g.items.length, 0)} 筆) 輕鬆查找
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 類別切換頁籤 (全部 / 怪物 / 地圖) */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <button
            onClick={() => setTypeFilter('all')}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all border ${
              typeFilter === 'all'
                ? 'bg-[#fccd4d] text-black border-[#fccd4d] shadow-[0_0_15px_rgba(252,205,77,0.4)]'
                : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            🌟 全部掉落
          </button>
          <button
            onClick={() => setTypeFilter('monster')}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all border ${
              typeFilter === 'monster'
                ? 'bg-red-500 text-white border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            👹 怪物掉落
          </button>
          <button
            onClick={() => setTypeFilter('map')}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all border ${
              typeFilter === 'map'
                ? 'bg-amber-500 text-black border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
            }`}
          >
            🗺️ 地圖區域掉落
          </button>
        </div>

        {/* 搜尋框 */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#fccd4d] transition-colors" size={20} />
            <input
              type="text"
              placeholder="輸入怪物名稱、地圖名稱或道具名稱 (例如：梅杜莎、奇岩地監、狂風之斧)..."
              className="w-full bg-[#0f0f0f] border-2 border-white/10 focus:border-[#fccd4d]/50 rounded-xl py-4 pl-12 pr-10 text-base md:text-lg text-slate-200 focus:outline-none transition-all duration-300 placeholder:text-slate-600 shadow-inner"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button 
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors text-sm"
              >✕</button>
            )}
          </div>
          {query.trim() && (
            <p className="text-xs text-slate-500 mt-2 pl-2">
              找到 <span className="text-[#fccd4d] font-bold">{results.length}</span> 筆符合結果
              {results.length >= 80 && <span>（顯示前 80 筆）</span>}
            </p>
          )}
        </div>

        {/* 預設建議關鍵字 */}
        {!query.trim() && (
          <div className="text-center py-6">
            <p className="text-slate-500 text-sm">
              熱門搜尋：
              <span className="text-slate-300 cursor-pointer hover:text-[#fccd4d] transition-colors ml-2" onClick={() => setQuery('奇岩地監')}>奇岩地監</span> · 
              <span className="text-slate-300 cursor-pointer hover:text-[#fccd4d] transition-colors ml-2" onClick={() => setQuery('梅杜莎')}>梅杜莎</span> · 
              <span className="text-slate-300 cursor-pointer hover:text-[#fccd4d] transition-colors ml-2" onClick={() => setQuery('夢幻之島')}>夢幻之島</span> · 
              <span className="text-slate-300 cursor-pointer hover:text-[#fccd4d] transition-colors ml-2" onClick={() => setQuery('狂風之斧')}>狂風之斧</span> · 
              <span className="text-slate-300 cursor-pointer hover:text-[#fccd4d] transition-colors ml-2" onClick={() => setQuery('英雄技能')}>英雄技能</span>
            </p>
          </div>
        )}

        {/* 結果列表 (單一整合區塊) */}
        {query.trim() && results.length > 0 && (
          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1 scrollbar-thin">
            {/* 表頭 */}
            <div className="hidden md:grid grid-cols-12 gap-2 px-4 py-2 text-xs text-slate-500 font-bold tracking-wider sticky top-0 bg-[#050505]/95 backdrop-blur-sm z-10 border-b border-white/10">
              <div className="col-span-2">類型標籤</div>
              <div className="col-span-3">來源名稱 (怪物 / 地圖)</div>
              <div className="col-span-4">掉落物品 (及 ID)</div>
              <div className="col-span-3 text-right">數量與機率</div>
            </div>

            {results.map((drop) => {
              const chanceVal = drop.chance / 10000;
              const isRare = drop.chance > 0 && drop.chance <= 100;
              const isSpecial = drop.chance === 0;

              return (
                <div 
                  key={drop.idKey}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-2 px-4 py-3 rounded-xl border transition-all duration-200 items-center ${
                    drop.type === 'map'
                      ? 'bg-amber-500/5 border-amber-500/20 hover:border-amber-500/40'
                      : isSpecial
                      ? 'bg-purple-500/5 border-purple-500/20 hover:border-purple-500/40'
                      : isRare
                      ? 'bg-yellow-500/5 border-yellow-500/20 hover:border-yellow-500/40'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                  }`}
                >
                  {/* 1. 類型標籤 */}
                  <div className="md:col-span-2 flex items-center">
                    {drop.type === 'monster' ? (
                      <span className="px-2.5 py-1 rounded text-xs font-bold bg-red-500/10 text-red-400 border border-red-500/30 flex items-center gap-1">
                        <Skull size={12} /> 怪物
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
                        <MapPin size={12} /> 地圖
                      </span>
                    )}
                  </div>

                  {/* 2. 來源名稱 (怪物名 / 地圖名) */}
                  <div className="md:col-span-3 font-bold text-slate-200 text-sm flex items-center gap-1.5 truncate">
                    {drop.sourceName}
                  </div>

                  {/* 3. 掉落物品 */}
                  <div className={`md:col-span-4 text-sm flex flex-col ${
                    isSpecial ? 'text-purple-300' : isRare ? 'text-yellow-300' : 'text-slate-200'
                  }`}>
                    <span className="font-bold tracking-wide flex items-center gap-1.5">
                      {drop.itemName}
                      {isRare && <span className="text-[9px] bg-yellow-500/20 text-yellow-300 px-1 rounded border border-yellow-500/30">稀有</span>}
                      {isSpecial && <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1 rounded border border-purple-500/30">特殊</span>}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      ID: {drop.itemId}
                    </span>
                  </div>

                  {/* 4. 數量與機率 */}
                  <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-3 text-right">
                    <span className="text-xs font-mono text-slate-400 bg-black/40 px-2 py-1 rounded border border-white/5">
                      {drop.min === drop.max ? drop.min : `${drop.min}~${drop.max}`} 顆
                    </span>
                    <span className={`text-sm font-mono font-bold ${
                      isSpecial ? 'text-purple-400' :
                      chanceVal >= 50 ? 'text-green-400' :
                      chanceVal >= 10 ? 'text-blue-400' :
                      chanceVal >= 1 ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {formatChance(drop.chance)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 無結果 */}
        {query.trim() && results.length === 0 && (
          <div className="text-center py-12 bg-[#0d0d0d] rounded-2xl border border-white/5">
            <p className="text-slate-400 text-lg">找不到「<span className="text-[#fccd4d]">{query}</span>」相關的掉落資料</p>
            <p className="text-slate-600 text-xs mt-2">提示：請確認名稱拼字，或切換「全部掉落」頁籤搜尋</p>
          </div>
        )}

        {/* 底部導覽連結 */}
        <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
          <a 
            href="/collection?tab=mapDrop" 
            className="inline-flex items-center gap-2 text-sm text-[#fccd4d] hover:text-white transition-colors border border-[#fccd4d]/40 hover:border-[#fccd4d] bg-[#fccd4d]/10 px-6 py-2.5 rounded-full font-bold"
          >
            🗺️ 查看全服完整圖鑑與掉落總表 →
          </a>
        </div>

      </div>
    </section>
  );
};

export default HomeDropSearch;
