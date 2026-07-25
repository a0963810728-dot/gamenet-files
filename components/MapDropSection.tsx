import React, { useState, useMemo } from 'react';
import { Search, MapPin, Package, Percent, Skull, Layers } from 'lucide-react';
import { DROPLIST_DATA } from '../src/data/droplistData';
import { DROPLIST_MAP_DATA, MapDropGroup } from '../src/data/droplistMapData';

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

const MapDropSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'mapGroup' | 'unified'>('mapGroup');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMapFilter, setSelectedMapFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<'all' | 'monster' | 'map'>('all');

  // 1. 按地圖分組的資料
  const filteredMapGroups = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return DROPLIST_MAP_DATA.map(group => {
      if (selectedMapFilter !== 'all' && !group.mapName.includes(selectedMapFilter)) {
        return null;
      }

      if (term) {
        const mapNameMatch = group.mapName.toLowerCase().includes(term);
        const filteredItems = group.items.filter(
          item =>
            item.itemName.toLowerCase().includes(term) ||
            item.itemId.toString().includes(term) ||
            item.mapNote.toLowerCase().includes(term)
        );

        if (mapNameMatch) {
          return group;
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

  // 2. 一體化展平全服掉落 (怪物 + 地圖)
  const allUnifiedDrops = useMemo<UnifiedDropResult[]>(() => {
    const list: UnifiedDropResult[] = [];

    // 怪物掉落
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

    // 地圖掉落
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

  // 搜尋一體化結果
  const unifiedResults = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q && viewMode === 'unified') {
      // 沒搜尋時顯示前 50 筆熱門地圖/怪物掉落
      return allUnifiedDrops.slice(0, 50);
    }

    return allUnifiedDrops.filter(item => {
      if (typeFilter !== 'all' && item.type !== typeFilter) return false;
      if (!q) return true;

      return (
        item.sourceName.toLowerCase().includes(q) ||
        item.itemName.toLowerCase().includes(q) ||
        item.itemId.toString().includes(q)
      );
    }).slice(0, 100);
  }, [searchTerm, typeFilter, viewMode, allUnifiedDrops]);

  // 機率轉換輔助函式
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
      
      {/* 視圖模式切換 (按地圖卡片 / 一體化綜合搜尋) */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <button
          onClick={() => setViewMode('mapGroup')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm md:text-base transition-all border ${
            viewMode === 'mapGroup'
              ? 'bg-[#fccd4d] text-black border-[#fccd4d] shadow-[0_0_20px_rgba(252,205,77,0.4)]'
              : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
          }`}
        >
          <Layers size={18} /> 按地圖分組瀏覽 ({DROPLIST_MAP_DATA.length} 個區域)
        </button>

        <button
          onClick={() => setViewMode('unified')}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm md:text-base transition-all border ${
            viewMode === 'unified'
              ? 'bg-[#fccd4d] text-black border-[#fccd4d] shadow-[0_0_20px_rgba(252,205,77,0.4)]'
              : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/30 hover:text-white'
          }`}
        >
          <Search size={18} /> 怪物與地圖 整合搜尋清單
        </button>
      </div>

      {/* 搜尋與篩選列 */}
      <div className="max-w-4xl mx-auto mb-10 space-y-6">
        {/* 搜尋框 */}
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#fccd4d] transition-colors" size={20} />
          <input
            type="text"
            placeholder="搜尋地圖名稱、怪物名稱、道具名稱或道具 ID (例如：奇岩地監、梅杜莎、狂風之斧、100274)..."
            className="w-full bg-[#111] border-2 border-white/10 focus:border-[#fccd4d]/50 rounded-xl py-4 pl-12 pr-10 text-slate-200 focus:outline-none transition-all placeholder:text-slate-600 text-sm md:text-base shadow-inner"
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

        {/* 模式 1: 按地圖卡片時顯示膠囊 filter */}
        {viewMode === 'mapGroup' && (
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
        )}

        {/* 模式 2: 一體化搜尋時顯示類別過濾 (全部 / 怪物 / 地圖) */}
        {viewMode === 'unified' && (
          <div className="flex justify-center items-center gap-3">
            <button
              onClick={() => setTypeFilter('all')}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                typeFilter === 'all'
                  ? 'bg-[#fccd4d] text-black border-[#fccd4d]'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              🌟 全部
            </button>
            <button
              onClick={() => setTypeFilter('monster')}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                typeFilter === 'monster'
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              👹 僅看怪物掉落
            </button>
            <button
              onClick={() => setTypeFilter('map')}
              className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all border ${
                typeFilter === 'map'
                  ? 'bg-amber-500 text-black border-amber-500'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
              }`}
            >
              🗺️ 僅看地圖區域掉落
            </button>
          </div>
        )}
      </div>

      {/* 畫面 A: 按地圖卡片展示 */}
      {viewMode === 'mapGroup' && (
        filteredMapGroups.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredMapGroups.map((group, gIdx) => (
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

                        <div className="col-span-3 text-center font-mono text-xs text-slate-400">
                          {item.min === item.max ? item.min : `${item.min} ~ ${item.max}`}
                        </div>

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
          </div>
        )
      )}

      {/* 畫面 B: 一體化綜合清單 (怪物 + 地圖) */}
      {viewMode === 'unified' && (
        <div className="max-w-5xl mx-auto space-y-2">
          <div className="hidden md:grid grid-cols-12 gap-2 px-4 py-2 text-xs text-slate-500 font-bold tracking-wider sticky top-0 bg-[#0a0a0a] backdrop-blur-sm z-10 border-b border-white/10">
            <div className="col-span-2">類型</div>
            <div className="col-span-3">來源名稱 (怪物 / 地圖)</div>
            <div className="col-span-4">掉落物品與 ID</div>
            <div className="col-span-3 text-right">數量與機率</div>
          </div>

          {unifiedResults.length > 0 ? (
            unifiedResults.map((drop) => {
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

                  <div className="md:col-span-3 font-bold text-slate-200 text-sm flex items-center gap-1.5 truncate">
                    {drop.sourceName}
                  </div>

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
            })
          ) : (
            <div className="text-center py-16 bg-[#111] rounded-2xl border border-white/5">
              <p className="text-slate-400 text-lg">查無符合條件的掉落資訊</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MapDropSection;
