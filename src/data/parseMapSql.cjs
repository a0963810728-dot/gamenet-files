// parseMapSql.cjs — 解析 droplist_map.sql 並且讀取 weapon.sql / armor.sql / etcitem.sql 取得物品真實名稱
const fs = require('fs');
const path = require('path');

const dir = __dirname;

function cleanString(str) {
  if (!str) return '';
  let result = str.replace(/^'|'$/g, '').trim();
  result = result.replace(/\\'/g, "'");
  // 徹底移除顏色碼與圖標代碼 (例如 \\aL, \\fF, \f3, \aJ, \\等)
  result = result.replace(/\\+[a-zA-Z0-9]{1,3}\s*/g, '').trim();
  result = result.replace(/^\\+/g, '').trim();
  return result;
}

function parseItemSql(fileName) {
  const filePath = path.join(dir, fileName);
  if (!fs.existsSync(filePath)) return new Map();
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const items = new Map();

  for (const line of lines) {
    if (!line.startsWith('INSERT INTO')) continue;
    const startIdx = line.indexOf('VALUES (');
    if (startIdx === -1) continue;
    
    const tupleStr = line.substring(startIdx + 8, line.lastIndexOf(')'));
    const fields = [];
    let cur = '';
    let inQuote = false;
    for (let i = 0; i < tupleStr.length; i++) {
      const ch = tupleStr[i];
      if (ch === "'" && (i === 0 || tupleStr[i-1] !== '\\')) {
        inQuote = !inQuote;
      } else if (ch === ',' && !inQuote) {
        fields.push(cur.trim());
        cur = '';
      } else {
        cur += ch;
      }
    }
    fields.push(cur.trim());

    if (fields.length >= 2) {
      const id = parseInt(fields[0]);
      let name = cleanString(fields[1]);

      if (id && name && !name.startsWith('$')) {
        items.set(id, name);
      }
    }
  }
  return items;
}

console.log('🔄 開始解析武器、防具、道具編號資料庫...');
const wMap = parseItemSql('weapon.sql');
const aMap = parseItemSql('armor.sql');
const eMap = parseItemSql('etcitem.sql');

console.log(`✅ 武器: ${wMap.size} 筆, 防具: ${aMap.size} 筆, 其他道具: ${eMap.size} 筆`);

// 優先順序: etcitem -> armor -> weapon (或合流)
const itemMap = new Map([...eMap, ...aMap, ...wMap]);

console.log('🔄 開始解析 droplist_map.sql 地圖掉落表...');
const mapFilePath = path.join(dir, 'droplist_map.sql');
const mapLines = fs.readFileSync(mapFilePath, 'utf-8').split('\n');

const rawDrops = [];
for (const line of mapLines) {
  if (!line.startsWith('INSERT INTO')) continue;
  const startIdx = line.indexOf('VALUES (');
  if (startIdx === -1) continue;
  
  const tupleStr = line.substring(startIdx + 8, line.lastIndexOf(')'));
  const fields = [];
  let cur = '';
  let inQuote = false;
  for (let i = 0; i < tupleStr.length; i++) {
    const ch = tupleStr[i];
    if (ch === "'" && (i === 0 || tupleStr[i-1] !== '\\')) {
      inQuote = !inQuote;
    } else if (ch === ',' && !inQuote) {
      fields.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  fields.push(cur.trim());

  if (fields.length >= 8) {
    const id = parseInt(fields[0]);
    let mapNote = cleanString(fields[1]);
    const mapId = parseInt(fields[2]);
    const itemId = parseInt(fields[3]);
    let note = cleanString(fields[4]);
    const min = parseInt(fields[5]);
    const max = parseInt(fields[6]);
    const chance = parseInt(fields[7]);

    let itemName = itemMap.get(itemId) || note || `道具 #${itemId}`;
    if (itemName.startsWith('$')) {
      itemName = note || `道具 #${itemId}`;
    }
    itemName = cleanString(itemName);

    rawDrops.push({
      id,
      mapNote: mapNote || `地圖 #${mapId}`,
      mapId,
      itemId,
      itemName,
      min,
      max,
      chance
    });
  }
}

console.log(`✅ 地圖掉落記錄共有 ${rawDrops.length} 條`);

// 按地圖名稱分組
const groupedMap = new Map();
for (const drop of rawDrops) {
  const key = drop.mapNote;
  if (!groupedMap.has(key)) {
    groupedMap.set(key, {
      mapName: drop.mapNote,
      mapId: drop.mapId,
      items: []
    });
  }
  groupedMap.get(key).items.push({
    id: drop.id,
    mapNote: drop.mapNote,
    mapId: drop.mapId,
    itemId: drop.itemId,
    itemName: drop.itemName,
    min: drop.min,
    max: drop.max,
    chance: drop.chance
  });
}

const mapGroups = Array.from(groupedMap.values());
// 按地圖名稱排序
mapGroups.sort((a, b) => a.mapName.localeCompare(b.mapName, 'zh-TW'));

console.log(`✅ 共有 ${mapGroups.length} 個獨立地圖掉落區塊`);

// 產生 droplistMapData.ts 檔案
let ts = `// 自動產生 — 來源: droplist_map.sql + weapon/armor/etcitem (${new Date().toISOString().slice(0, 10)})
// 共 ${rawDrops.length} 筆掉落紀錄，包含 ${mapGroups.length} 個地圖分組

export interface MapDropItem {
  id: number;
  mapNote: string;
  mapId: number;
  itemId: number;
  itemName: string;
  min: number;
  max: number;
  chance: number;
}

export interface MapDropGroup {
  mapName: string;
  mapId: number;
  items: MapDropItem[];
}

export const DROPLIST_MAP_DATA: MapDropGroup[] = ${JSON.stringify(mapGroups, null, 2)};
`;

fs.writeFileSync(path.join(dir, 'droplistMapData.ts'), ts, 'utf-8');
console.log('🎉 完成生成 droplistMapData.ts！');
