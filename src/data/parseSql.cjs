// parseSql.cjs — 一次性腳本：將 droplist.sql 轉成 droplistData.ts
const fs = require('fs');
const path = require('path');

const sql = fs.readFileSync(path.join(__dirname, 'droplist.sql'), 'utf-8');

const regex = /INSERT INTO `droplist` VALUES\s*\((\d+),\s*'([^']*)',\s*(\d+),\s*'([^']*)',\s*(\d+),\s*(\d+),\s*(\d+)\)/g;

const items = [];
let match;
while ((match = regex.exec(sql)) !== null) {
  const mobId = parseInt(match[1]);
  const note = match[2];
  const itemId = parseInt(match[3]);
  const itemNameRaw = match[4];
  const min = parseInt(match[5]);
  const max = parseInt(match[6]);
  const chance = parseInt(match[7]);

  // note 格式: "怪物名=>物品名" or "怪物名=>\\f3物品名"
  let mobName = '';
  let itemName = '';
  const arrowIdx = note.indexOf('=>');
  if (arrowIdx !== -1) {
    mobName = note.substring(0, arrowIdx).trim();
    itemName = note.substring(arrowIdx + 2).trim();
  } else {
    mobName = note;
    itemName = itemNameRaw;
  }

  // 清除顏色碼 \\fX \\aX 等
  itemName = itemName.replace(/\\\\[a-zA-Z][A-Za-z0-9]?\s*/g, '').trim();
  mobName = mobName.replace(/\\\\[a-zA-Z][A-Za-z0-9]?\s*/g, '').trim();

  if (!mobName && itemNameRaw) {
    const arrowIdx2 = itemNameRaw.indexOf('=>');
    if (arrowIdx2 !== -1) {
      mobName = itemNameRaw.substring(0, arrowIdx2).trim();
      itemName = itemNameRaw.substring(arrowIdx2 + 2).replace(/\\\\[a-zA-Z][A-Za-z0-9]?\s*/g, '').trim();
    }
  }

  items.push({ mobId, mobName, itemId, itemName, min, max, chance });
}

// 按怪物 ID 排序
items.sort((a, b) => a.mobId - b.mobId || a.itemId - b.itemId);

// 產生 TS 檔
let ts = `// 自動產生 — 來源: droplist.sql (${new Date().toISOString().slice(0,10)})
// 共 ${items.length} 筆掉落資料

export interface DropItem {
  mobId: number;
  mobName: string;
  itemId: number;
  itemName: string;
  min: number;
  max: number;
  chance: number;
}

export const DROPLIST_DATA: DropItem[] = [\n`;

for (const it of items) {
  const mn = it.mobName.replace(/'/g, "\\'");
  const in_ = it.itemName.replace(/'/g, "\\'");
  ts += `{mobId:${it.mobId},mobName:'${mn}',itemId:${it.itemId},itemName:'${in_}',min:${it.min},max:${it.max},chance:${it.chance}},\n`;
}

ts += '];\n';

fs.writeFileSync(path.join(__dirname, 'droplistData.ts'), ts, 'utf-8');
console.log(`✅ 完成！共產出 ${items.length} 筆掉落資料 -> droplistData.ts`);
