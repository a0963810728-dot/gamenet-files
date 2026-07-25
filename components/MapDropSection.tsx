import React, { useState, useMemo } from 'react';
import { Search, MapPin, Package, Percent } from 'lucide-react';
import { DROPLIST_MAP_DATA, MapDropGroup } from '../src/data/droplistMapData';

const MapDropSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMapFilter, setSelectedMapFilter] = useState<string>('all');

  // 計算特定熱門地圖篩選
  const filteredGroups = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return DROPLIST_MAP_DATA.map(group => {
      // 判斷地圖名稱是否符合地圖膠囊篩選
      if (selectedMapFilter !== 'all' && !group.mapName.includes(selectedMapFilter)) {
        return null;
      }

      // 如果有關鍵字搜尋，過濾地圖名稱或裡面的物品名稱/itemId
      if (term) {
        const mapNameMatch = group.mapName.toLowerCase().includes(term);
        const filteredItems = group.items.filter(
          item =>
            item.itemName.toLowerCase().includes(term) ||
            item.itemId.toString().includes(term) ||
            item.mapNote.toLowerCase().includes(term)
        );

        if (mapNameMatch) {
          return group; // 地圖名匹配，回傳完整物品
        } else if (filteredItems.length > 0) {
          return {
            ...group,
            items: filteredItems
          };
        } else {
          return null;
        }
      }

      return group;
    }).filter((g): g is MapDropGroup => g !== null);
  }, [searchTerm, selectedMapFilter]);

  // 機率轉換輔助函式 (1000000 = 100%)
  const formatChance = (chance: number): string => {
    if (chance >= 1000000) return '100%';
    if (chance === 0) return '特殊';
    const pct = chance / 10000;
    if (pct >= 1) return `${pct.toFixed(1)}%`;
    return `${(chance / 100).toFixed(2)}‱`;
  };

  const mapQuickFilters = [
    { label: '全部地圖', value: 'all' },
    { label: '奇岩地監', value: '奇岩地監' },
    { label: '夢幻之島', value: '夢幻之島' },
    { label: '拋棄之地', value: '拋棄之地' },
    { label: '傲慢之塔', value: '傲慢' },
    { label: '龍之谷', value: '龍之谷' },
    { label: '精靈墓穴', value: '精靈墓穴' },
    { label: '遺忘之島', value: '遺忘之島' },
  ];

  return (
    <div className="w-full">
      {/* 搜尋與篩選列 */}
      <div className="max-w-4xl mx-auto mb-10 space-y-6">
        {/* 搜尋框 */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#fccd4d] transition-colors" size={20} />
          <input
            type="text"
            placeholder="搜尋地圖名稱、掉落物品名稱或物品 ID (例如：奇岩地監、狂風之斧、100274)..."
            className="w-full bg-[#111] border-2 border-white/10 focus:border-[#fccd4d]/50 rounded-xl py-3.5 pl-12 pr-10 text-slate-200 focus:outline-none transition-all placeholder:text-slate-600 text-sm md:text-base"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors text-sm"
            >
              ✕
            </button>
          )}
        </div>

        {/* 快速地圖膠囊篩選 */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center flex-wrap">
          {mapQuickFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedMapFilter(filter.value)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border whitespace-nowrap ${
                selectedMapFilter === filter.value
                  ? 'bg-[#fccd4d] text-black border-[#fccd4d] shadow-[0_0_15px_rgba(252,205,77,0.3)]'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* 地圖掉落列表 */}
      {filteredGroups.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredGroups.map((group, gIdx) => (
            <div
              key={`${group.mapName}-${group.mapId}-${gIdx}`}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-[#fccd4d]/40 transition-all duration-300 flex flex-col"
            >
              {/* 地圖標題 Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#fccd4d]/10 border border-[#fccd4d]/30 text-[#fccd4d]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {group.mapName}
                    </h3>
                    <span className="text-xs text-slate-500 font-mono">
                      Map ID: {group.mapId}
                    </span>
                  </div>
                </div>

                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 font-bold">
                  {group.items.length} 項掉落
                </div>
              </div>

              {/* 掉落物表格 */}
              <div className="flex-1 overflow-y-auto max-h-[360px] pr-1 space-y-2 scrollbar-thin">
                <div className="grid grid-cols-12 gap-2 text-xs font-bold text-slate-500 border-b border-white/5 pb-2 px-2">
                  <div className="col-span-6 flex items-center gap-1">
                    <Package size={14} /> 物品名稱
                  </div>
                  <div className="col-span-3 text-center">數量</div>
                  <div className="col-span-3 text-right flex items-center justify-end gap-1">
                    <Percent size={14} /> 掉落機率
                  </div>
                </div>

                {group.items.map((item) => {
                  const isRare = item.chance > 0 && item.chance <= 100;
                  const isSpecial = item.chance === 0;

                  return (
                    <div
                      key={`${item.id}-${item.itemId}`}
                      className={`grid grid-cols-12 gap-2 items-center px-3 py-2 rounded-lg text-sm transition-all border ${
                        isSpecial
                          ? 'bg-purple-500/10 border-purple-500/30 text-purple-200'
                          : isRare
                          ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-200'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/20 text-slate-300'
                      }`}
                    >
                      {/* 物品名稱 & ID */}
                      <div className="col-span-6 flex flex-col">
                        <span className="font-bold tracking-wide flex items-center gap-1.5">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isSpecial
                                ? 'bg-purple-400'
                                : isRare
                                ? 'bg-yellow-400'
                                : 'bg-[#fccd4d]'
                            }`}
                          ></span>
                          {item.itemName}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono ml-3">
                          ID: {item.itemId}
                        </span>
                      </div>

                      {/* 掉落數量 */}
                      <div className="col-span-3 text-center font-mono text-xs text-slate-400">
                        {item.min === item.max ? item.min : `${item.min} ~ ${item.max}`}
                      </div>

                      {/* 掉落機率 */}
                      <div className="col-span-3 text-right font-mono font-bold text-xs">
                        <span
                          className={`px-2 py-0.5 rounded ${
                            isSpecial
                              ? 'bg-purple-500/20 text-purple-300'
                              : isRare
                              ? 'bg-yellow-500/20 text-yellow-300'
                              : 'text-slate-400'
                          }`}
                        >
                          {formatChance(item.chance)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#111] rounded-2xl border border-white/5">
          <p className="text-slate-500 text-lg">查無符合條件的地圖掉落資訊</p>
          <p className="text-slate-600 text-sm mt-2">請嘗試搜尋其他關鍵字或清除篩選條件</p>
        </div>
      )}
    </div>
  );
};

export default MapDropSection;
