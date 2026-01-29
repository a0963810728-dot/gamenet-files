// src/components/GameGuide.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, // 新手入門
  Swords,   // 職業介紹
  Map,      // 地圖資訊
  Search,   // 掉落查詢 & 搜尋圖示
  Zap,      // 技能介紹
  ExternalLink,
  ChevronRight
} from 'lucide-react';

// =========================================================================
//  1. 靜態資料定義 (完整資料庫)
// =========================================================================

// --- 技能資料庫 (146筆) ---
const SKILL_DATABASE = [
  { "id": "114", "image": "SKILL 0.png", "name": "灼熱靈氣：2階段", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(25/0)", "duration": "640秒", "target": "自己", "effect": "AC-8，MR+10，增加近距離傷害與命中。", "material": "" },
  { "id": "118", "image": "SKILL 1.png", "name": "王者之劍", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "2秒-5秒", "target": "5單位內1個目標", "effect": "造成強力魔法傷害，並有機率昏迷目標，衝暈成功時目標遠近距離與近距離迴避減少。", "material": "名譽硬幣x1" },
  { "id": "117", "image": "SKILL 2.png", "name": "勇猛盔甲", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(25/0)", "duration": "1200秒", "target": "自己", "effect": "傷害減免+7。", "material": "" },
  { "id": "112", "image": "SKILL 3.png", "name": "精準目標", "type": "操作", "affinity": "正義", "cost": "魔力/體力(1/0)", "duration": "16秒", "target": "15格內的非玩家操縱之角色或1位玩家", "effect": "在目標身上放置友軍可辨識的明顯標記，目標傷害減免-3", "material": "" },
  { "id": "115", "image": "SKILL 4.png", "name": "勇猛武器", "type": "賦予", "affinity": "正義", "cost": "魔力/體力(25/0)", "duration": "1200秒", "target": "自己", "effect": "近距離命中與傷害+10。", "material": "" },
  { "id": "113", "image": "SKILL 5.png", "name": "灼熱靈氣：1階段", "type": "賦予", "affinity": "正義", "cost": "魔力/體力(25/0)", "duration": "640秒", "target": "自己", "effect": "攻擊成功+5，近距離額外傷害+5 。", "material": "" },
  { "id": "116", "image": "SKILL 6.png", "name": "勇猛意志", "type": "賦予", "affinity": "正義", "cost": "魔力/體力(25/0)", "duration": "640秒", "target": "自己", "effect": "攻擊敵人時一定機率提升1.5倍傷害。", "material": "" },
  { "id": "119", "image": "SKILL 7.png", "name": "灼熱靈氣：3階段", "type": "持續", "affinity": "中立", "cost": "魔力/體力(0/0)", "duration": "組隊狀態時會持續", "target": "王族16格內的隊員", "effect": "王族技能：第 4 級\n提升範圍內友軍的昏迷抗性與昏迷命中。", "material": "" },
  { "id": "153", "image": "SKILL 8.png", "name": "精靈之暈", "type": "控制", "affinity": "中立", "cost": "魔力/體力(35/0)", "duration": "2-6秒", "target": "", "effect": "使用精靈的力量讓對方暈眩，裝備弓才可使用。", "material": "名譽貨幣2個" },
  { "id": "140", "image": "SKILL 9.png", "name": "精靈之翼靴", "type": "移動", "affinity": "中立", "cost": "魔力/體力(26/0)", "duration": "瞬間", "target": "施法者", "effect": "精靈王力量的魔法鞋，啟動只傳授給被選上的精靈的秘傳技能。", "material": "" },
  { "id": "173", "image": "SKILL 10.png", "name": "精準射擊", "type": "轉換", "affinity": "中立", "cost": "魔力/體力(15/0)", "duration": "64秒", "target": "6格內玩家或是NPC1位", "effect": "完全瞄準\nER減少為 1/3", "material": "精靈玉 3個" },
  { "id": "160", "image": "SKILL 11.png", "name": "封印禁地", "type": "操作", "affinity": "中立", "cost": "魔力/體力(40/0)", "duration": "16秒", "target": "非玩家操縱之角色或1位玩家", "effect": "在時間內，讓範圍3格裡的所有人無法使用法術。", "material": "精靈玉8個" },
  { "id": "172", "image": "SKILL 12.png", "name": "污濁之水", "type": "詛咒、水", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "64秒", "target": "5格內的非玩家操縱之角色或1位玩家", "effect": "以汙濁之水侵蝕目標的身體，使所有的治癒效果減半。", "material": "精靈玉1個" },
  { "id": "135", "image": "SKILL 13.png", "name": "重擊之矢", "type": "被動", "affinity": "中立", "cost": "魔力/體力(0/0)", "duration": "-1秒", "target": "施法者", "effect": "使用三重矢10次時，使其收到強烈傷害，HP與MP恢復。", "material": "" },
  { "id": "138", "image": "SKILL 14.png", "name": "鷹眼(精神)", "type": "被動", "affinity": "中立", "cost": "魔力/體力(0/0)", "duration": "-1秒", "target": "施法者", "effect": "以指定概率增加遠距離傷害2倍。", "material": "" },
  { "id": "174", "image": "SKILL 15.png", "name": "烈焰之魂", "type": "賦予、火", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "64秒", "target": "施法者", "effect": "時效內將施法者近距離武器的攻擊力最大化，武器不受損害。", "material": "精靈玉3個" },
  { "id": "162", "image": "SKILL 16.png", "name": "烈炎武器", "type": "賦予、火", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "960秒", "target": "施法者", "effect": "時效內賦予近距離武器更強的火屬性，使其命中率、攻擊力提高。", "material": "" },
  { "id": "165", "image": "SKILL 17.png", "name": "暴風神射", "type": "賦予、風", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "960秒", "target": "施法者", "effect": "持續時間內，施法對象的遠距離武器將被賦予最強的風屬性，使其增加打擊值、命中率。", "material": "" },
  { "id": "167", "image": "SKILL 18.png", "name": "鋼鐵防護", "type": "賦予、地", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "960秒", "target": "施法者", "effect": "持續時間內，提升目標10點防禦力。", "material": "" },
  { "id": "131", "image": "SKILL 19.png", "name": "三重矢", "type": "射擊", "affinity": "中立", "cost": "魔力/體力(15/0)", "duration": "瞬間", "target": "1位非玩家操縱之角色或玩家", "effect": "以極快的速度射出三支箭。", "material": "" },
  { "id": "170", "image": "SKILL 20.png", "name": "屬性之火", "type": "賦予、火", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "320秒", "target": "施法者", "effect": "時效內有機率性提升近距離物理攻擊力1.5倍。", "material": "精靈玉1個" },
  { "id": "161", "image": "SKILL 21.png", "name": "精靈守護者", "type": "操作", "affinity": "中立", "cost": "魔力/體力(600/0)", "duration": "3600秒", "target": "", "effect": "使用後能召喚1隻屬性強力精靈，依玩家本身屬性的不同，召喚出來強力精靈的屬性也有不同。", "material": "精靈玉100個" },
  { "id": "139", "image": "SKILL 22.png", "name": "流星之箭", "type": "射擊", "affinity": "中立", "cost": "魔力/體力(26/0)", "duration": "瞬間", "target": "施法者", "effect": "射出的箭矢貫穿敵人後會分裂，追加打擊周圍敵人。", "material": "" },
  { "id": "152", "image": "SKILL 23.png", "name": "魔法消除", "type": "操作", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "32秒", "target": "6格內的非玩家操縱之角色或1位玩家", "effect": "降低魔法防禦力25%(只能用一次)。", "material": "精靈玉1個" },
  { "id": "163", "image": "SKILL 24.png", "name": "生命的祝福", "type": "治癒、水", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "瞬間", "target": "施法者所屬的隊伍成員", "effect": "恢復全體隊員大量的體力。", "material": "" },
  { "id": "134", "image": "SKILL 25.png", "name": "魔力護盾", "type": "變化", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "600秒", "target": "施法者", "effect": "透過支撐力產生魔法，體力低於10時，受到傷害將由魔力取代體力消耗", "material": "精靈玉2個" },
  { "id": "175", "image": "SKILL 26.png", "name": "能量激發", "type": "賦予、火", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "960秒", "target": "施法者", "effect": "負重超過50%時，亦能繼續恢復體力及魔力。", "material": "精靈玉1個" },
  { "id": "154", "image": "SKILL 27.png", "name": "舞躍之火", "type": "賦予、火", "affinity": "中立", "cost": "魔力/體力(20/0/1)", "duration": "480秒", "target": "自己", "effect": "在持續時間內，大幅提升攻擊速度與移動速度，必須裝備劍才能施放。", "material": "精靈餅乾1個" },
  { "id": "156", "image": "SKILL 28.png", "name": "大地屏障", "type": "操作、地", "affinity": "中立", "cost": "魔力/體力(18/0)", "duration": "6-12秒", "target": "8格內的非玩家操縱之角色或1位玩家", "effect": "被施法者在效果期間內，無法攻擊任何人，亦不會受到任何人的攻擊。", "material": "精靈玉2個" },
  { "id": "150", "image": "SKILL 29.png", "name": "大地防護", "type": "賦予、地", "affinity": "中立", "cost": "魔力/體力(15/0)", "duration": "960秒", "target": "自己", "effect": "持續時間內，增加對象的6點防禦力。", "material": "" },
  { "id": "168", "image": "SKILL 30.png", "name": "體能激發", "type": "生命、地", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "960秒", "target": "施法者", "effect": "持續時間內，負重狀態下仍然可以恢復體力、魔力，但當負重顯示欄呈現紅色時(超過82%)，就會無法發揮此效果。", "material": "精靈玉1個" },
  { "id": "159", "image": "SKILL 31.png", "name": "水之防護", "type": "賦予、水", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "960秒", "target": "8格內的非玩家操縱之角色或1位玩家", "effect": "水的防護圍繞著身體，提高迴避率５點。", "material": "" },
  { "id": "42", "image": "SKILL 33.png", "name": "烈炎術", "type": "攻擊、火", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "瞬間", "target": "3格內的非玩家操縱之角色或1位玩家", "effect": "施法時，在攻擊目標周邊會出現光亮且集中後引爆，給予對方極大的傷害。", "material": "" },
  { "id": "50", "image": "SKILL 34.png", "name": "疾病術", "type": "詛咒", "affinity": "詛咒", "cost": "魔力/體力(10/0)", "duration": "64秒", "target": "3格內的非玩家操縱之角色或1位玩家", "effect": "時效內目標防禦+12、命中率-6。", "material": "" },
  { "id": "51", "image": "SKILL 35.png", "name": "狂暴術", "type": "轉換", "affinity": "中立", "cost": "魔力/體力(40/0)", "duration": "320秒", "target": "施法者本身或15格內的血盟/隊伍成員1位", "effect": "提升近距離傷害與命中，提升一般攻擊的射程，根據INT提升近距離傷害，AC+10。", "material": "" },
  { "id": "49", "image": "SKILL 38.png", "name": "神聖疾走", "type": "轉換、風", "affinity": "正義", "cost": "魔力/體力(11/0)", "duration": "64秒", "target": "施法者", "effect": "提升行走的速度。", "material": "" },
  { "id": "56", "image": "SKILL 41.png", "name": "靈魂昇華", "type": "轉換", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "1200秒", "target": "自己", "effect": "持續期間內提升目標20%的體力及魔力最大值，重新登入時效果會消失。", "material": "" },
  { "id": "69", "image": "SKILL 44.png", "name": "古代啟示", "type": "自身", "affinity": "中立", "cost": "魔力/體力(100/100)", "duration": "2秒", "target": "施法者", "effect": "一定時間內提升魔法暴擊，提升魔法穿透效果。", "material": "" },
  { "id": "SKILL_ULT_2", "image": "SKILL 45.png", "name": "究極光裂術：古代", "type": "提升", "affinity": "正義", "cost": "魔力/體力(0/0)", "duration": "-秒", "target": "10格內的1位玩家", "effect": "提升究極光裂術傷害，一定機率使目標陷入恐懼狀態", "material": "無" },
  { "id": "75", "image": "SKILL 46.png", "name": "魔法大師", "type": "自身", "affinity": "邪惡", "cost": "魔力/體力(110/0)", "duration": "15分", "target": "1格內的玩家", "effect": "成為超越極限的強力法師，使用法杖時變更為魔法攻擊，減少攻擊魔法冷卻，增加特殊技能組。", "material": "名譽硬幣x15" },
  { "id": "76", "image": "SKILL 47.png", "name": "黑暗之星", "type": "攻擊", "affinity": "中立", "cost": "魔力/體力(120/60)", "duration": "瞬間", "target": "施法者周圍8格", "effect": "召喚強大的黑暗流星造成大範圍傷害。", "material": "魔法寶石x10" },
  { "id": "78", "image": "SKILL 48.png", "name": "集體聖結界", "type": "轉換", "affinity": "正義", "cost": "魔力/體力(100/0)", "duration": "32秒", "target": "施法者或血盟成員", "effect": "前置技能：魔法大師，賦予畫面內隊友聖結界效果。", "material": "名譽硬幣x12" },
  { "id": "61", "image": "SKILL 49.png", "name": "暗黑之手", "type": "攻擊、水", "affinity": "邪惡", "cost": "魔力/體力(80/0)", "duration": "2秒-3秒", "target": "3單位內1個目標", "effect": "對目標造成傷害，一定機率造成恐懼，強制目標隨機移動並增加所受的魔法傷害，無法使用魔法屏障防禦。", "material": "" },
  { "id": "67", "image": "SKILL 50.png", "name": "神諭", "type": "自身", "affinity": "正義", "cost": "魔力/體力(0/0)", "duration": "-秒", "target": "施法者", "effect": "每10點防禦額外提升1點減少傷害。", "material": "-無" },
  { "id": "77", "image": "SKILL 51.png", "name": "黑暗之盾", "type": "控制", "affinity": "中立", "cost": "魔法/體力(50/0)", "duration": "7秒", "target": "施法者周圍8格", "effect": "對目標施展黑魔法結界，減少其所受的傷害，並將減少的傷害轉移至施法者。", "material": "名譽硬幣x8" },
  { "id": "1_sun", "image": "SKILL 54.png", "name": "日光術", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(4/0)", "duration": "3600秒", "target": "施法者", "effect": "持續期間製造光源照亮施法者的周圍。", "material": "" },
  { "id": "2_protect", "image": "SKILL 56.png", "name": "保護罩", "type": "轉換", "affinity": "中立", "cost": "魔力/體力(8/0)", "duration": "1800秒", "target": "施法者", "effect": "增加角色2點的防禦效果。", "material": "" },
  { "id": "40", "image": "SKILL 57.png", "name": "加速術", "type": "控制、風", "affinity": "中立", "cost": "魔力/體力(40/0)", "duration": "1200秒", "target": "15格內的非玩家操縱之角色或1位玩家", "effect": "在持續時間內，目標的移動及攻擊速度上升。", "material": "" },
  { "id": "0_arrow", "image": "SKILL 58.png", "name": "光箭", "type": "攻擊、光線", "affinity": "中立", "cost": "魔力/體力(3/0)", "duration": "瞬間", "target": "10格內的非玩家操縱之角色或1位玩家", "effect": "壓縮射出的魔法能量，讓對方受到些許的傷害。", "material": "" },
  { "id": "58", "image": "SKILL 59.png", "name": "魔法相消術", "type": "轉換、風", "affinity": "中立", "cost": "魔力/體力(40/0)", "duration": "瞬間", "target": "15格內的非玩家操縱之角色或1位玩家", "effect": "一定機率消除目標的部分狀態變化魔法，使目標暫時無法使用道具與技能(部分效果除外)。", "material": "魔法寶石2個" },
  { "id": "3_teleport", "image": "SKILL 60.png", "name": "指定傳送", "type": "操作", "affinity": "中立", "cost": "魔力/體力(10/0)", "duration": "瞬間", "target": "施法者", "effect": "隨機在相同地圖上移動。\n使用傳送控制戒指\n可往記憶場所移動", "material": "" },
  { "id": "44", "image": "SKILL 61.png", "name": "地裂術", "type": "攻擊、地", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "瞬間", "target": "8格內的非玩家操縱之角色或1位玩家", "effect": "崩裂地塊，使之撞擊在目標上施以損害。", "material": "" },
  { "id": "35", "image": "SKILL 64.png", "name": "弱化術", "type": "詛咒", "affinity": "邪惡", "cost": "魔力/體力(10/0)", "duration": "64秒", "target": "3格內的非玩家操縱之角色或1位玩家", "effect": "使其目標的命中率-1、攻擊力-5。", "material": "魔法寶石1個" },
  { "id": "7_holy", "image": "SKILL 65.png", "name": "神聖武器", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(10/0)", "duration": "1200秒", "target": "15格內的非玩家操縱之角色或1位玩家", "effect": "賦予武器神聖力量，近距離傷害+1\n近距離命中+1\n對不死系怪物造成較大的傷害。", "material": "" },
  { "id": "47", "image": "SKILL 66.png", "name": "祝福魔法武器", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "1200秒", "target": "15格內的非玩家操縱之角色或1位玩家", "effect": "在目標的武器賦予祝福的力量，使其命中率+2、攻擊力+2。", "material": "" },
  { "id": "48", "image": "SKILL 67.png", "name": "體力回復術", "type": "治療、水", "affinity": "正義", "cost": "魔力/體力(50/0)", "duration": "瞬間", "target": "15格內所有隊員", "effect": "同時恢復隊員的體力。", "material": "" },
  { "id": "8_anti", "image": "SKILL 68.png", "name": "解毒術", "type": "瞬間", "affinity": "正義", "cost": "魔力/體力(15/0)", "duration": "瞬間", "target": "15格內的非玩家操縱之角色或1位玩家", "effect": "中和目標所中的毒。", "material": "" },
  { "id": "53", "image": "SKILL 69.png", "name": "寒冰尖刺", "type": "攻擊、水", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "瞬間", "target": "8格內的非玩家操縱之角色或1位玩家", "effect": "從地上竄出尖銳的冰晶，刺穿敵人。", "material": "" },
  { "id": "10_detect", "image": "SKILL 75.png", "name": "無所遁形術", "type": "控制", "affinity": "中立", "cost": "魔力/體力(15/0)", "duration": "瞬間", "target": "隱身的玩家或擁有隱身能力的怪物", "effect": "能在畫面中找出隱身的玩家或非玩家所操控的角色。", "material": "" },
  { "id": "9_load", "image": "SKILL 76.png", "name": "負重強化", "type": "控制", "affinity": "中立", "cost": "魔力/體力(10/50)", "duration": "1800秒", "target": "施法者", "effect": "在效果持續時間內，增加角色載重的能力。", "material": "" },
  { "id": "14", "image": "SKILL 77.png", "name": "火箭", "type": "攻擊、火", "affinity": "中立", "cost": "魔力/體力(6/0)", "duration": "瞬間", "target": "10格內的非玩家操縱之角色或1位玩家", "effect": "以火形成的魔法箭來損害目標。", "material": "" },
  { "id": "15", "image": "SKILL 78.png", "name": "地獄之牙", "type": "攻擊、大地", "affinity": "中立", "cost": "魔力/體力(6/0)", "duration": "瞬間", "target": "10格內的非玩家操縱之角色或1位玩家", "effect": "透過魔法壓縮岩塊，由目標下方射出產生損害。", "material": "" },
  { "id": "62", "image": "SKILL 79.png", "name": "全部治癒術", "type": "治癒、水", "affinity": "中立", "cost": "魔力/體力(48/0)", "duration": "瞬間", "target": "15格內的非玩家操縱之角色或1位玩家", "effect": "回復目標非常大量的體力，若用在不死系怪物上則可以造成傷害。", "material": "" },
  { "id": "17_turn", "image": "SKILL 82.png", "name": "起死回生術", "type": "生命、地", "affinity": "正義", "cost": "魔力/體力(20/0)", "duration": "瞬間", "target": "10格內的非玩家操縱之角色或1位玩家", "effect": "一定的機率破壞不死系怪物；但也有一定機率引起狂暴憤怒。", "material": "" },
  { "id": "73", "image": "SKILL 83.png", "name": "召喚守護者", "type": "控制、地", "affinity": "邪惡", "cost": "魔力/體力(1000/1000)", "duration": "3600秒", "target": "", "effect": "召喚守護者在一定時間內保護自己。", "material": "魔法寶石10個" },
  { "id": "57", "image": "SKILL 86.png", "name": "隱身術", "type": "轉換", "affinity": "中立", "cost": "魔力/體力(15/0)", "duration": "魔力持續時間", "target": "施法者", "effect": "在持續時間內其他玩家或非玩家操控角色看不到施法者，但除此之外，施法者若有任何積極性的動作，效果就會消失。", "material": "魔法寶石1個" },
  { "id": "39", "image": "SKILL 87.png", "name": "黑闇之影", "type": "控制", "affinity": "邪惡", "cost": "魔力/體力(15/0)", "duration": "32秒", "target": "3格內的非玩家操縱之角色或1位玩家", "effect": "將目標的視野變暗，可使用魔法相消術消除魔法效果。", "material": "魔法寶石1個" },
  { "id": "20_armor", "image": "SKILL 89.png", "name": "鎧甲護持", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "1800秒", "target": "施法者的盔甲", "effect": "增加目標3點的防禦效果.連續點擊時,套用在裝備的武器中。", "material": "" },
  { "id": "19", "image": "SKILL 90.png", "name": "寒冰氣息", "type": "攻擊、水", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "瞬間", "target": "6格內的非玩家操縱之角色或1位玩家", "effect": "攻擊目標時能給予周圍冰冷氣息的傷害。", "material": "" },
  { "id": "22_sense", "image": "SKILL 92.png", "name": "能量感測", "type": "控制", "affinity": "中立", "cost": "魔力/體力(8/0)", "duration": "瞬間", "target": "15格內的非玩家操縱之角色或1位玩家", "effect": "將在施法者周圍存在的力量類型判別之後，可找出對方最弱的屬性。", "material": "" },
  { "id": "55", "image": "SKILL 93.png", "name": "魔法封印", "type": "操作", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "16秒", "target": "3格內的非玩家操縱之角色或1位玩家", "effect": "壓縮目標周圍的空氣變化，使其無法施法。", "material": "魔法寶石1個" },
  { "id": "24", "image": "SKILL 94.png", "name": "燃燒的火球", "type": "攻擊、火", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "瞬間", "target": "6格內的非玩家操縱之角色或1位玩家", "effect": "給予投擲火球範圍內的所有敵人傷害。", "material": "" },
  { "id": "63", "image": "SKILL 98.png", "name": "變形術", "type": "轉換、詛咒", "affinity": "中立", "cost": "魔力/體力(60/0)", "duration": "7200秒", "target": "15格內的非玩家操縱之角色或1位玩家", "effect": "機率將目標變身，並使目標在持續時間內無法變身為其他形態，附加持續傷害詛咒效果。", "material": "魔法寶石2個" },
  { "id": "26", "image": "SKILL 99.png", "name": "吸血鬼之吻", "type": "死亡、水", "affinity": "邪惡", "cost": "魔力/體力(12/0)", "duration": "瞬間", "target": "3格內的非玩家操縱之角色或1位玩家", "effect": "吸取攻擊目標角色的體力。", "material": "" },
  { "id": "60", "image": "SKILL 100.png", "name": "聖結界", "type": "轉換", "affinity": "正義", "cost": "魔力/體力(30/0)", "duration": "32秒", "target": "施法者或血盟成員", "effect": "提高目標對各種傷害的抵抗力，受術者對在法術的作用期間所受到的傷害都將減半。", "material": "魔法寶石2個" },
  { "id": "28", "image": "SKILL 101.png", "name": "緩速術", "type": "控制、風", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "64秒", "target": "10格內的非玩家操縱之角色或1位玩家", "effect": "在持續時間內，降低目標的移動及攻擊速度。", "material": "魔法寶石1個" },
  { "id": "11_prison", "image": "SKILL 103.png", "name": "岩牢", "type": "攻擊、地", "affinity": "中立", "cost": "魔力/體力(24/0)", "duration": "瞬間", "target": "8格內的非玩家操縱之角色或1位玩家", "effect": "荊棘產生範圍內的敵人會受到傷害。", "material": "" },
  { "id": "59", "image": "SKILL 104.png", "name": "火風暴", "type": "攻擊、火、風", "affinity": "中立", "cost": "魔力/體力(48/0)", "duration": "瞬間", "target": "施法者周圍3格內的目標", "effect": "在施法者周圍引發具有火屬性的風暴。", "material": "" },
  { "id": "27_shield", "image": "SKILL 105.png", "name": "魔法屏障", "type": "轉換", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "16秒", "target": "施法者", "effect": "能把對自身有害的魔法變為無效(只限一次)。", "material": "魔法寶石1個" },
  { "id": "18_med", "image": "SKILL 107.png", "name": "冥想術", "type": "操作", "affinity": "中立", "cost": "魔力/體力(5/30)", "duration": "640秒", "target": "施法者", "effect": "能增加魔力的回復量，若與魔法恢復藥水一起使用時就會產生漸進效果。", "material": "" },
  { "id": "41", "image": "SKILL 110.png", "name": "極道落雷", "type": "攻擊、風", "affinity": "中立", "cost": "魔力/體力(18/0)", "duration": "瞬間", "target": "6格內的非玩家操縱之角色或1位玩家", "effect": "從天空呼叫閃電並在目標上施以嚴重的損害。", "material": "" },
  { "id": "64", "image": "SKILL 111.png", "name": "流星雨", "type": "攻擊、火", "affinity": "中立", "cost": "魔力/體力(60/0)", "duration": "瞬間", "target": "10格內的非玩家操縱之角色或1位玩家", "effect": "從天空召喚隕石對敵人施以極大的損害。", "material": "" },
  { "id": "33", "image": "SKILL 112.png", "name": "高級治癒術", "type": "治癒、水", "affinity": "正義", "cost": "魔力/體力(20/0)", "duration": "瞬間", "target": "15格內的非玩家操縱之角色或1位玩家", "effect": "能恢復目標大量的體力，也能使用在不死系怪物上並施以損害。", "material": "" },
  { "id": "34", "image": "SKILL 114.png", "name": "聖潔之光", "type": "生命、水", "affinity": "正義", "cost": "魔力/體力(20/0)", "duration": "瞬間", "target": "15格內的非玩家操縱之角色", "effect": "以一定機率解除所有的詛咒。", "material": "" },
  { "id": "72_ult_2", "image": "SKILL 115.png", "name": "究極光裂術：古代", "type": "提升", "affinity": "正義", "cost": "魔力/體力(0/0)", "duration": "-秒", "target": "10格內的1位玩家", "effect": "提升究極光裂術傷害，一定機率使目標陷入恐懼狀態", "material": "無" },
  { "id": "32", "image": "SKILL 116.png", "name": "冰錐", "type": "攻擊、水", "affinity": "中立", "cost": "魔力/體力(18/0)", "duration": "瞬間", "target": "6格內的非玩家操縱之角色或1位玩家", "effect": "在施法者眼前出現圓形的冷氣，對目標進行攻擊造成傷害。", "material": "" },
  { "id": "25", "image": "SKILL 117.png", "name": "魔力奪取", "type": "變化", "affinity": "中立", "cost": "魔力/體力(1/50)", "duration": "瞬間", "target": "4格內的非玩家操縱之角色或1位玩家", "effect": "將目標的魔力減少，並把減少的部分吸收為自己的魔力。", "material": "" },
  { "id": "109", "image": "SKILL 119.png", "name": "暗影恢復", "type": "恢復", "affinity": "中立", "cost": "魔力/體力(50/0)", "duration": "-1秒", "target": "施法者", "effect": "以黑精靈之力，恢復施法者的體力，並暫時提升迴避率。", "material": "" },
  { "id": "99", "image": "SKILL 120.png", "name": "暗影衝刺", "type": "移動", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "瞬間", "target": "施法者", "effect": "將身體隱藏在陰影中，向角色所注視的方向快速移動5格，一段時間增加移動速度。", "material": "" },
  { "id": "103", "image": "SKILL 121.png", "name": "暗影加速", "type": "控制", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "15分鐘", "target": "施法者", "effect": "黑妖魔法：第 3 級\n增加攻擊速度。", "material": "黑魔石" },
  { "id": "97", "image": "SKILL 123.png", "name": "附加劇毒", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(10/1)", "duration": "320秒", "target": "施法者的武器", "effect": "將自已的武器賦予毒性之後，攻擊時會有一定機率讓目標中毒。", "material": "二級黑魔石1個" },
  { "id": "98", "image": "SKILL 124.png", "name": "影之防護", "type": "操作", "affinity": "中立", "cost": "魔力/體力(12/0)", "duration": "960秒", "target": "施法者", "effect": "在時間內，能增加施法者5%的魔法防禦值。", "material": "" },
  { "id": "222", "image": "SKILL 126.png", "name": "暗影暈眩", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "-秒", "target": "施法者", "effect": "將自己隱藏在影子之中，快速移動至對向的所在位置後，使對方進入無法戰鬥狀態。", "material": "" },
  { "id": "100", "image": "SKILL 128.png", "name": "行走加速", "type": "控制", "affinity": "中立", "cost": "魔力/體力(10/0)", "duration": "960秒", "target": "施法者", "effect": "持續時間內，施法者的移動速度變成1.5倍，可與加速術一起使用。", "material": "" },
  { "id": "101", "image": "SKILL 129.png", "name": "燃燒鬥志", "type": "控制", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "300秒", "target": "施法者", "effect": "在持續時間內，有一定的機率發出1.5倍的攻擊力。", "material": "" },
  { "id": "102", "image": "SKILL 130.png", "name": "暗黑盲咒", "type": "詛咒", "affinity": "邪惡", "cost": "魔力/體力(20/0)", "duration": "3秒", "target": "3格內的非玩家操縱之角色或1位玩家", "effect": "一定時間內讓敵人睡著，期間若對方受到攻擊將會恢復原狀態。", "material": "" },
  { "id": "104", "image": "SKILL 133.png", "name": "雙重破壞", "type": "控制", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "192秒", "target": "施法者", "effect": "在持續時間內，隨機打出２倍的攻擊值，限裝備雙刀、鋼爪才會有效果。45等級開始,每5等級發動機率上升1%。", "material": "二級黑魔石1個" },
  { "id": "105", "image": "SKILL 134.png", "name": "暗影閃避", "type": "控制", "affinity": "中立", "cost": "魔力/體力(20/0)", "duration": "192秒", "target": "施法者", "effect": "在持續時間內，提高施法者的迴避率，使施法者更能閃避敵人的攻擊。", "material": "" },
  { "id": "106", "image": "SKILL 135.png", "name": "暗影之牙", "type": "魔法", "affinity": "中立", "cost": "魔力/體力(0/0)", "duration": "被動", "target": "施法者的武器", "effect": "被動技能，裝備中的近距離武器會套用近距離傷害+5的效果。", "material": "-1" },
  { "id": "107", "image": "SKILL 136.png", "name": "會心一擊", "type": "攻擊", "affinity": "中立", "cost": "魔力/體力(-/-)", "duration": "瞬間", "target": "1位非玩家操縱之角色或玩家", "effect": "耗盡自己的體力與魔力向目標發出最強的一擊，體力100以下時無法使用，使用後體力/魔力剩餘100/1。", "material": "二級黑魔石3個" },
  { "id": "110", "image": "SKILL 138.png", "name": "神秘提升", "type": "轉換", "affinity": "中立", "cost": "魔力/體力(0/0)", "duration": "被動", "target": "施法者", "effect": "提升迴避率。\nER(遠距離)+18", "material": "" },
  { "id": "108", "image": "SKILL 139.png", "name": "暗黑組合", "type": "被動", "affinity": "中立", "cost": "魔力/血量(0/0)", "duration": "-1秒", "target": "施法者", "effect": "提升3點力量，提升3點敏捷。", "material": "" },
  { "id": "111", "image": "SKILL 140.png", "name": "破壞盔甲", "type": "詛咒", "affinity": "中立", "cost": "魔力/體力(32/30)", "duration": "8秒", "target": "1格內的非玩家操縱之角色或1位玩家", "effect": "在持續時間內，增加對目標58%的傷害。", "material": "二級黑魔石2個" },
  { "id": "226", "image": "SKILL 141.png", "name": "狂暴", "type": "操作", "affinity": "中立", "cost": "魔力/體力(0/0)", "duration": "被動", "target": "施法者", "effect": "在濃厚的黑暗中，\n黑精靈之力失控爆發，\n雙重傷害上升\n爆擊機率上升\n增加HP吸收\n雙刀專用技能。", "material": "-1" },
  { "id": "221", "image": "SKILL 142.png", "name": "暗影衝擊", "type": "被動", "affinity": "賦予", "cost": "魔力/體力(0/0)", "duration": "-1", "target": "施法者", "effect": "攻擊命中一定次數時，發動黑精靈之力依指定概率讓對象暈眩。", "material": "-1" },
  { "id": "220", "image": "SKILL 143.png", "name": "路西法", "type": "被動", "affinity": "賦予", "cost": "魔力/體力(0/0)", "duration": "-1", "target": "施法者", "effect": "被攻擊時施法者受到的傷害和PVE傷害減少，依據等級受到傷害量增加。", "material": "-1" },
  { "id": "232", "image": "SKILL 144.png", "name": "刺客", "type": "操作", "affinity": "中立", "cost": "魔力/體力(0/0)", "duration": "被動", "target": "施法者", "effect": "暗隱術狀態可以進行攻擊，有機會給予3倍傷害", "material": "-1" },
  { "id": "227", "image": "SKILL 154.png", "name": "拘束移動", "type": "操作", "affinity": "中立", "cost": "魔力/體力(5/0)", "duration": "最多 6秒", "target": "6格內的PC或是NPC 1人", "effect": "使用鎖鏈讓目標無法移動。", "material": "結晶體 20個" },
  { "id": "234", "image": "SKILL 156.png", "name": "佔據", "type": "操作", "affinity": "中立", "cost": "魔力/體力(8/0)", "duration": "瞬間", "target": "6格內PC玩家或NPC", "effect": "指定對象時，朝著對象方向突進，突進中無視衝突，與對象衝突時依指定機率及暈敵人", "material": "結晶體 100個" },
  { "id": "233", "image": "SKILL 157.png", "name": "泰坦之暈", "type": "操作", "affinity": "中立", "cost": "魔力/體力(25/0)", "duration": "瞬間", "target": "8格內PC玩家或NPC", "effect": "泰坦的憤怒打擊對象，以一定概率將其變成暈眩狀態", "material": "結晶體 100個" },
  { "id": "231", "image": "SKILL 160.png", "name": "力量之血", "type": "操作", "affinity": "中立", "cost": "魔力/體力(10/0)", "duration": "12分鐘", "target": "自身", "effect": "攻擊附加吸血效果", "material": "結晶體 100個" },
  { "id": "229", "image": "SKILL 161.png", "name": "亡命之徒", "type": "操作", "affinity": "中立", "cost": "魔力/體力(10/0)", "duration": "最多 6秒", "target": "1格內的PC或是NPC1人", "effect": "使目標無法移動及傳送\n並且使目標的治癒回復率降低", "material": "結晶體 100個" },
  { "id": "235", "image": "SKILL 162.png", "name": "蓋亞", "type": "操作", "affinity": "中立", "cost": "魔力/體力(0/0)", "duration": "瞬間", "target": "施法者", "effect": "以泰坦的再生能力，連續恢復HP，依被攻擊時受到的傷害比例，額外恢復HP。", "material": "結晶體 100個" },
  { "id": "230", "image": "SKILL 164.png", "name": "泰坦狂暴", "type": "操作", "affinity": "中立", "cost": "魔力/體力(5/20)", "duration": "2400秒", "target": "施法者", "effect": "增強戰士系技能", "material": "結晶體 100個" },
  { "id": "228", "image": "SKILL 165.png", "name": "戰斧投擲", "type": "操作", "affinity": "中立", "cost": "魔力/體力(5/0)", "duration": "最多 6秒", "target": "10格內的 PC或是NPC 1人", "effect": "投擲出戰斧攻擊敵人\n造成持續的出血性傷害。", "material": "結晶體 50個" },
  { "id": "225", "image": "SKILL 167.png", "name": "體能強化", "type": "操作", "affinity": "中立", "cost": "魔力/體力(10/0)", "duration": "300秒", "target": "施放者", "effect": "使自己的最大體力增加\n等級越高體力增加量也會變多。", "material": "結晶體 100個" },
  { "id": "224", "image": "SKILL 168.png", "name": "咆哮", "type": "操作", "affinity": "中立", "cost": "魔力/體力(5/0)", "duration": "瞬間", "target": "5格內的全部怪物", "effect": "對週遭5格內的怪物造成傷害。", "material": "結晶體 50個" },
  { "id": "236", "image": "SKILL 173.png", "name": "泰坦：子彈", "type": "被動", "affinity": "中立", "cost": "無", "duration": "常駐", "target": "自身", "effect": "受到遠距離物理攻擊時，一定機率反彈傷害。", "material": "" },
  { "id": "237", "image": "SKILL 174.png", "name": "泰坦：岩石", "type": "被動", "affinity": "中立", "cost": "無", "duration": "常駐", "target": "自身", "effect": "受到近距離物理攻擊時，一定機率反彈傷害。", "material": "" },
  { "id": "238", "image": "SKILL 175.png", "name": "泰坦：魔法", "type": "被動", "affinity": "中立", "cost": "無", "duration": "常駐", "target": "自身", "effect": "受到魔法攻擊時，一定機率反彈傷害。", "material": "" },
  { "id": "180", "image": "SKILL 193.png", "name": "龍之護鎧", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(0/12)", "duration": "1,800秒", "target": "施法者", "effect": "解放沉睡的龍之力量來抵抗外來的傷害\n傷害減免+5\n80等級後每2等級傷害減免+1", "material": "" },
  { "id": "181", "image": "SKILL 194.png", "name": "燃燒擊砍", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(0/6)", "duration": "60秒(一次性)", "target": "非玩家操縱之角色或1位玩家", "effect": "在時效內，機率性的給予敵人火焰的強力一擊。", "material": "" },
  { "id": "182", "image": "SKILL 195.png", "name": "護衛毀滅", "type": "操作", "affinity": "中立", "cost": "魔力/體力(0/20)", "duration": "32秒", "target": "3格內的非玩家操縱之角色或1位玩家", "effect": "在時效內，機率性的降低敵人防禦10點。", "material": "" },
  { "id": "183", "image": "SKILL 196.png", "name": "岩漿噴吐", "type": "攻擊、火", "affinity": "中立", "cost": "魔力/體力(10/0)", "duration": "瞬間", "target": "10格內的非玩家操縱之角色或1位玩家", "effect": "目標和其週邊的敵人發出強力的赤焰。", "material": "" },
  { "id": "184", "image": "SKILL 197.png", "name": "覺醒：安塔瑞斯", "type": "變化", "affinity": "中立", "cost": "魔力/體力(20/10)", "duration": "600秒", "target": "施法者", "effect": "以地龍之力的狀態覺醒，持續時間內提高支撐耐性+10、防禦-3。", "material": "刻印的骨頭碎片1個" },
  { "id": "185", "image": "SKILL 198.png", "name": "血之渴望", "type": "變化", "affinity": "中立", "cost": "魔力/體力(0/30)", "duration": "300秒", "target": "施法者", "effect": "引發隱藏的龍之血，提升攻擊與移動速度。", "material": "刻印的骨頭碎片1個" },
  { "id": "186", "image": "SKILL 199.png", "name": "屠宰者", "type": "變化", "affinity": "中立", "cost": "魔力/體力(0/16)", "duration": "瞬間", "target": "2格內的非玩家操縱之角色或1位玩家", "effect": "對敵方給予迅速的3連擊。", "material": "" },
  { "id": "187", "image": "SKILL 200.png", "name": "恐懼無助", "type": "變化", "affinity": "中立", "cost": "魔力/體力(0/12)", "duration": "16秒", "target": "5格內的非玩家操縱之角色或1位玩家", "effect": "陷入恐懼\nDG-50。", "material": "" },
  { "id": "188", "image": "SKILL 201.png", "name": "岩漿之箭", "type": "變化、風", "affinity": "中立", "cost": "魔力/體力(5/0)", "duration": "瞬間", "target": "10格內的非玩家操縱之角色或1位玩家", "effect": "對敵人射出攻擊強大的龍之箭。", "material": "" },
  { "id": "189", "image": "SKILL 202.png", "name": "覺醒：法利昂", "type": "變化", "affinity": "中立", "cost": "魔力/體力(30/20)", "duration": "600秒", "target": "施法者", "effect": "以水龍之力的狀態覺醒，獲得寒冰耐性+10的效果且當角色重量超過了50%，於效果持續時間內仍可以恢復體力、魔力，但當超過一定上限後就無法發揮效果。", "material": "刻印的骨頭碎片1個" },
  { "id": "190", "image": "SKILL 203.png", "name": "致命身軀", "type": "變化", "affinity": "中立", "cost": "魔力/體力(0/50)", "duration": "300秒", "target": "施法者", "effect": "以血之熔岩攻擊敵方的身體\n機率性的反擊", "material": "" },
  { "id": "191", "image": "SKILL 204.png", "name": "奪命之雷", "type": "變化、風", "affinity": "中立", "cost": "魔力/體力(0/35)", "duration": "瞬間", "target": "非玩家操縱之角色或1位玩家", "effect": "召喚黑暗落雷攻擊敵人，有一定機率束縛對方的雙腳。", "material": "" },
  { "id": "192", "image": "SKILL 205.png", "name": "驚悚死神", "type": "變化", "affinity": "中立", "cost": "魔力/體力(0/20)", "duration": "32秒", "target": "5格內的非玩家操縱之角色或1位玩家", "effect": "以一定機率讓敵人體驗死亡的恐懼，力量-3、智力-3。", "material": "" },
  { "id": "193", "image": "SKILL 206.png", "name": "暴龍之眼", "type": "操作", "affinity": "中立", "cost": "魔力/體力(10/10)", "duration": "瞬間", "target": "施法者本身周圍15格", "effect": "找出隱藏在畫面的玩家或非玩家操作之角色，與埋藏在地面上的陷阱，例如：石頭高崙...等。", "material": "" },
  { "id": "194", "image": "SKILL 207.png", "name": "覺醒：巴拉卡斯", "type": "變化", "affinity": "中立", "cost": "魔力/體力(50/30)", "duration": "600秒", "target": "施法者", "effect": "以火龍之力的狀態覺醒，持續時間內提升昏迷耐性+10、攻擊成功+5。", "material": "刻印的骨頭碎片1個" },
  { "id": "95_recon", "image": "SKILL 208.png", "name": "恢復盔甲", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(50/100)", "duration": "300秒", "target": "施法者", "effect": "使自己的最大體力增加\n等級越高體力增加量也會變多\n藥水恢復量上升。", "material": "" },
  { "id": "92_phantom", "image": "SKILL 209.png", "name": "幻影之刃", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(3/45)", "duration": "2-4秒", "target": "7單位內一個目標", "effect": "成功命中時挑釁目標。\n挑釁效果：強制攻擊施法者\n、無法使用道具、無法使用部分技能(生存系除外)\n、無法傳送、角色無法操控。", "material": "" },
  { "id": "90_counter", "image": "SKILL 210.png", "name": "反擊屏障", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(10/100)", "duration": "64秒", "target": "施法者", "effect": "似鷹眼般專注於目標的動作上，一有機會將以本身最高攻擊力的兩倍反擊回去。", "material": "" },
  { "id": "89_solid", "image": "SKILL 211.png", "name": "堅固防護", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(10/100)", "duration": "192秒", "target": "施法者", "effect": "時效內迴避率提升15。", "material": "" },
  { "id": "87_amp", "image": "SKILL 212.png", "name": "增幅防禦", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(7/50)", "duration": "192秒", "target": "施法者", "effect": "增加防禦力，使自身受到的傷害減少，等級越高能減少的傷害越多。", "material": "" },
  { "id": "85_cb_expert", "image": "SKILL 213.png", "name": "反擊屏障:專家", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(0/0)", "duration": "瞬間", "target": "施法者", "effect": "強化反擊屏障效果.\n85等級開始每提升等級\n 提升效果機率與傷害\n 被擊時HP恢復 \n[先行技能]反擊屏障", "material": "" },
  { "id": "86_shock", "image": "SKILL 214.png", "name": "衝擊之暈", "type": "操作", "affinity": "中立", "cost": "魔力/體力(13/0)", "duration": "6秒以內", "target": "1格內的非玩家操縱之角色或1位玩家", "effect": "一定機率使目標暈眩，並造成傷害。", "material": "" },
  { "id": "88_spike", "image": "SKILL 215.png", "name": "尖刺盔甲", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(10/60)", "duration": "64秒", "target": "施法者", "effect": "緊握手上的武器裝備，並獲得近距離命中+6的效果。", "material": "" },
  { "id": "4_single", "image": "SKILL 216.png", "name": "單手劍攻擊", "type": "操作", "affinity": "中立", "cost": "魔力/體力(10/0)", "duration": "被動", "target": "自身", "effect": "騎士技能：第 2 級\n一定機率增加近距離傷害。", "material": "" },
  { "id": "5_double", "image": "SKILL 217.png", "name": "雙手劍攻擊", "type": "操作", "affinity": "中立", "cost": "魔力/體力(10/0)", "duration": "被動", "target": "自身", "effect": "騎士技能：第 2 級\n一定機率增加近距離傷害。", "material": "" },
  { "id": "93_blow", "image": "SKILL 218.png", "name": "反制攻擊", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(5/100)", "duration": "128秒", "target": "施法者", "effect": "騎士技能：第 2 級\n裝備雙手劍時，持續時間內有機率迴避攻擊並反擊\n，提升遠距離迴避。", "material": "" },
  { "id": "84_stun", "image": "SKILL 219.png", "name": "暈眩之劍", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "2秒-5秒", "target": "5單位內1個目標", "effect": "造成強力魔法傷害，並有機率昏迷目標，衝暈成功時目標遠近距離與近距離迴避減少。", "material": "名譽硬幣x1" },
  { "id": "94_counter_atk", "image": "SKILL 220.png", "name": "還擊", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(10/50)", "duration": "0秒", "target": "施法者", "effect": "攻擊與突擊敵方玩家。", "material": "" },
  { "id": "91_absolute", "image": "SKILL 221.png", "name": "絕禦之刃", "type": "賦予", "affinity": "中立", "cost": "魔力/體力(7/0)", "duration": "8秒", "target": "施法者", "effect": "集中武器的力量產出保護罩\n消除絕對屏障的魔法效果\n80等級開始隨等級提升1% (最高 +8%)", "material": "" },
  { "id": "68_will", "image": "SKILL 68.png", "name": "意志專注", "type": "自身", "affinity": "中立", "cost": "魔力/體力(0/0)", "duration": "-秒", "target": "施法者", "effect": "負重超過50%時魔力仍可自然回復。", "material": "無" },
  { "id": "74_haste", "image": "SKILL 74.png", "name": "神聖迅猛：古代", "type": "轉換、風", "affinity": "正義", "cost": "魔力/體力(0/0)", "duration": "-秒", "target": "施法者", "effect": "提升自身移動、攻擊速度、施法速度。", "material": "" },
  { "id": "70_mirror", "image": "SKILL 70.png", "name": "破壞之鏡", "type": "自身", "affinity": "中立", "cost": "魔力/體力(0/0)", "duration": "-秒", "target": "施法者", "effect": "持續時間內有機率讓破壞系技能無效，成功時對目標造成傷害，成功時賦予目標魔法相消術效果。", "material": "無" },
  { "id": "71_adv_detect", "image": "SKILL 71.png", "name": "強力無所遁形術", "type": "控制", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "瞬間", "target": "隱身的玩家或具有隱身能力的怪物", "effect": "無所遁形的強化版，能在畫面中找出隱身的玩家給予傷害並解除隱身。", "material": "" },
  { "id": "96_hide", "image": "SKILL 96.png", "name": "暗影躲藏", "type": "變化", "affinity": "中立", "cost": "魔力/體力(30/0)", "duration": "180秒", "target": "施法者", "effect": "用黑暗精靈的力量，隱藏在黑暗中，每秒消耗MP1%，攻擊及被攻擊解除隱身。", "material": "" },
  { "id": "79_heal_rev", "image": "SKILL 79.png", "name": "治癒逆行", "type": "詛咒, 水", "affinity": "邪惡", "cost": "魔力/體力(60/0)", "duration": "最多10秒", "target": "10格內的1位玩家", "effect": "治癒術恢復效果的30%變成為傷害。", "material": "魔法寶石 1個" },
  { "id": "43_stat_up", "image": "SKILL 43.png", "name": "體質強化", "type": "轉換、風", "affinity": "中立", "cost": "魔力/體力(25/0)", "duration": "6分鐘", "target": "15格內的1位玩家盟友", "effect": "目標INT+1，DEX+1，STR+1。", "material": "魔法寶石1個" }
];

// === 職業分類判斷邏輯 ===
const getSkillJob = (imageName: string): string => {
  const match = imageName.match(/SKILL (\d+)\.png/);
  if (!match) return '其他';
  
  const num = parseInt(match[1]);
  
  if (num >= 0 && num <= 7) return '王族';
  if (num >= 8 && num <= 31) return '妖精';
  if (num >= 32 && num <= 118) return '法師';
  if (num >= 119 && num <= 144) return '黑妖';
  if (num >= 145 && num <= 192) return '戰士';
  if (num >= 193 && num <= 207) return '龍騎士';
  if (num >= 208 && num <= 221) return '騎士'; 

  return '其他';
};

// --- 職業資料 ---
interface Job {
  name: string;
  title: string;
  desc: string;
  stats: { str: string; int: string; con: string };
  image: string;
}

const classes: Job[] = [
  { name: '王族', title: '血盟君主', desc: '唯一能創建血盟的職業，擁有凝聚眾人的領袖魅力。雖然戰鬥力平平，但能透過光環技能強化全隊素質，是攻城戰的核心指揮官。', stats: { str: '★★★', int: '★★', con: '★★★★' }, image: '/Class_Change_Prince.png' },
  { name: '騎士', title: '戰場先鋒', desc: '擁有極高的防禦力與各種減傷技能，是戰場上最堅實的肉盾。擅長使用雙手劍進行「衝擊之暈」控制敵人，是 PVP 前線的絕對主力。', stats: { str: '★★★★', int: '★', con: '★★★★★' }, image: '/Class_Change_Knight.png' },
  { name: '妖精', title: '森林守護', desc: '精通弓箭與精靈魔法，能召喚屬性精靈協助戰鬥。擁有地、水、火、風四大屬性變化，可攻可守，是遊戲中續航力與靈活度最高的職業。', stats: { str: '★★★', int: '★★★★', con: '★★★' }, image: '/Class_Change_Elf.png' },
  { name: '法師', title: '魔道宗師', desc: '掌握毀滅性的魔法力量，能施展流星雨瞬間消滅大量敵人，或使用聖結界保護隊友。雖然體質脆弱，但後期的爆發力與控場能力無人能敵。', stats: { str: '★★', int: '★★★★★', con: '★★' }, image: '/Class_Change_Magician.png' },
  { name: '黑暗妖精', title: '暗影刺客', desc: '追隨死亡女神席琳的暗殺者。放棄了盾牌，轉而使用雙刀與鋼爪，擁有獨特的「燃燒鬥志」與閃避技能，具備全職業最高的瞬間物理爆發力。', stats: { str: '★★★★★', int: '★★★', con: '★★★' }, image: '/Class_Change_DarkElf.png' },
  { name: '龍騎士', title: '龍之化身', desc: '龍族與人類的混血後裔，能覺醒體內的龍之力量。使用專屬武器「鎖鏈劍」，能施展招牌技能「屠宰者」進行三連擊，並透過龍語魔法壓制敵人。', stats: { str: '★★★★★', int: '★★', con: '★★★★' }, image: '/210707_Class_Change_berserker.png' },
  { name: '戰士', title: '狂暴戰神', desc: '來自海島的野蠻戰士，雙手各持一把戰斧進行毀滅性攻擊。擁有全職業最高的血量成長，並能透過「泰坦」系技能反彈傷害，是近戰中的絞肉機。', stats: { str: '★★★★★', int: '★', con: '★★★★★★' }, image: '/250917_Class_Change_Warrior.png' },
];

const jobsList = ['全部', '王族', '騎士', '妖精', '法師', '黑妖', '龍騎士', '戰士'];

// =========================================================================
//  2. 輔助元件
// =========================================================================

const ClassCard: React.FC<{ job: Job }> = ({ job }) => (
  <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 hover:border-[#fccd4d]/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden group relative">
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all pointer-events-none"></div>
    <div className="flex justify-center mb-6 relative z-10">
      <img 
        src={job.image} 
        alt={job.name} 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          if (e.currentTarget.parentElement) {
            e.currentTarget.parentElement.innerHTML = '<div class="w-40 h-40 flex items-center justify-center bg-white/5 rounded-full text-slate-600 text-xs border border-white/10">暫無圖片</div>';
          }
        }}
        className="w-40 h-40 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="text-center relative z-10">
      <h3 className="text-xl font-black text-[#fccd4d] mb-1 group-hover:text-white transition-colors">{job.name}</h3>
      <span className="text-xs text-slate-500 tracking-wider uppercase block mb-4">{job.title}</span>
      <p className="text-slate-400 text-sm leading-relaxed text-justify mb-6 h-24 overflow-hidden">{job.desc}</p>
    </div>
    <div className="bg-black/50 rounded-xl p-4 border border-white/5 relative z-10 space-y-2 text-xs font-mono text-slate-500">
      <div className="flex justify-between items-center">
        <span>攻擊力量</span>
        <span className="text-[#fccd4d] tracking-widest text-[10px]">{job.stats.str}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>魔法智力</span>
        <span className="text-[#fccd4d] tracking-widest text-[10px]">{job.stats.int}</span>
      </div>
      <div className="flex justify-between items-center">
        <span>生存體質</span>
        <span className="text-[#fccd4d] tracking-widest text-[10px]">{job.stats.con}</span>
      </div>
    </div>
  </div>
);

const SkillCard: React.FC<{ skill: any }> = ({ skill }) => (
  <div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-4 hover:border-[#fccd4d]/30 transition-all group flex flex-col md:flex-row gap-4 items-start md:items-center">
    <div className="flex-shrink-0 w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center overflow-hidden relative shadow-inner">
      <img 
        src={`/skills/${skill.image}`} 
        alt={skill.name}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          if (e.currentTarget.parentElement) {
            e.currentTarget.parentElement.innerHTML = `<span class="text-[8px] text-slate-600">NO IMG</span>`;
          }
        }}
        className="w-full h-full object-contain scale-125 group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    
    <div className="flex-1 min-w-0">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <h4 className="text-[#fccd4d] font-bold truncate text-base">{skill.name}</h4>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#fccd4d]/10 text-[#fccd4d] border border-[#fccd4d]/20">
          {getSkillJob(skill.image)}
        </span>
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300 border border-white/5">
          {skill.type || "一般"}
        </span>
      </div>
      <p className="text-slate-400 text-xs whitespace-pre-wrap mb-2 leading-relaxed">{skill.effect}</p>
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-600 font-mono">
        {skill.cost && <div className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-blue-500"></span>消耗: {skill.cost}</div>}
        {skill.duration && <div className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-green-500"></span>時間: {skill.duration}</div>}
        {skill.target && <div className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-purple-500"></span>對象: {skill.target}</div>}
        {skill.material && <div className="flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-yellow-500"></span>材料: {skill.material}</div>}
      </div>
    </div>
  </div>
);

// =========================================================================
//  3. 主元件 GameGuide
// =========================================================================
const GameGuide: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('新手入門'); 
  const [skillSearch, setSkillSearch] = useState('');
  const [skillJobFilter, setSkillJobFilter] = useState('全部');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DROP_SEARCH_URL = "https://cartest-ih32.onrender.com"; 

  const filteredSkills = useMemo(() => {
    return SKILL_DATABASE.filter(skill => {
      const job = getSkillJob(skill.image);
      const matchesSearch = skill.name.toLowerCase().includes(skillSearch.toLowerCase()) || 
                           skill.effect.toLowerCase().includes(skillSearch.toLowerCase());
      const matchesJob = skillJobFilter === '全部' || job === skillJobFilter;
      return matchesSearch && matchesJob;
    });
  }, [skillSearch, skillJobFilter]);

  // 定義側邊欄選單項目
  const menuItems = [
    { id: '新手入門', icon: BookOpen, label: '新手入門' },
    { id: '職業介紹', icon: Swords, label: '職業介紹' },
    { id: '技能介紹', icon: Zap, label: '技能介紹' },
    { id: '地圖資訊', icon: Map, label: '地圖資訊' },
  ];

  // === 🔰 新手教學資料 (完整版) ===
  const guideSteps = [
    {
      step: '01',
      title: '新手獎勵領取',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm md:text-base text-justify">
            請先聯繫客服 <span className="text-[#fccd4d] font-bold border-b border-[#fccd4d] whitespace-nowrap">@746pwlgu</span> 告知遊戲帳號。
            <br />客服發放後，請依照以下步驟領取：
          </p>
          <div className="bg-black/30 p-4 rounded border-l-2 border-[#b38728] text-sm space-y-2">
            <p>1. 進入遊戲，按下鍵盤 <code className="bg-white/20 px-1 rounded whitespace-nowrap">Ctrl + D</code></p>
            <p>2. 選擇 <span className="text-white font-bold">「行動視窗 / 隨身系統」</span></p>
            <p>3. 點擊 <span className="text-white font-bold">「領取獎勵」</span></p>
          </div>
        </div>
      ),
      images: ['/guide-step-1.jpg']
    },
    {
      step: '02',
      title: '舒壓消費環節 (商城)',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm md:text-base text-justify">
            點擊畫面上的<span className="text-[#fccd4d]">「潘朵拉的商城」</span>，建議優先購買以下高CP值禮盒：
          </p>
          <ul className="grid grid-cols-1 gap-1 text-sm bg-black/30 p-3 rounded border border-white/5">
            <li className="flex items-center gap-2"><span className="text-[#fccd4d]">★</span> 史奈普戒指禮盒 x10</li>
            <li className="flex items-center gap-2"><span className="text-[#fccd4d]">★</span> 倫提斯耳環禮盒 x10</li>
            <li className="flex items-center gap-2"><span className="text-[#fccd4d]">★</span> 光之皮夾克禮盒 x5</li>
            <li className="flex items-center gap-2"><span className="text-[#fccd4d]">★</span> 守護徽章禮盒 x5</li>
          </ul>
          <p className="text-xs text-slate-500 mt-2">※ 購買完成後，請點擊「開啟商城倉庫」提領。</p>
        </div>
      ),
      images: ['/guide-step-2a.jpg', '/guide-step-2b.jpg']
    },
    {
      step: '03',
      title: '起手練功地點',
      content: (
        <div className="space-y-4">
          <p className="text-slate-300 text-sm md:text-base text-justify">
            使用鍵盤 <code className="bg-white/20 px-1 rounded whitespace-nowrap">Ctrl + D</code> 開啟「傳送系統」。建議路線：
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <span className="text-[#fccd4d] font-bold whitespace-nowrap">LV 50-60:</span>
              <span className="text-slate-400">奇岩/海音地監 1F</span>
            </div>
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <span className="text-[#fccd4d] font-bold whitespace-nowrap">LV 60-80:</span>
              <span className="text-slate-400">夢幻之島、龍之谷地監</span>
            </div>
          </div>
        </div>
      ),
      images: ['/guide-step-3.jpg']
    },
    {
      step: '04',
      title: '魔法娃娃使用',
      content: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>1. 按下 <code className="bg-white/20 px-1 rounded whitespace-nowrap">Ctrl + D</code> 開啟「魔法娃娃收藏系統」</p>
          <p>2. 挑選娃娃並點擊「召喚」</p>
          <p>3. 按下鍵盤 <code className="bg-white/20 px-1 rounded whitespace-nowrap">HOME</code> 鍵，設置「自動召喚娃娃」</p>
          <p className="text-xs text-[#fccd4d] mt-1">※ 背包內需有「召喚娃娃卷軸」</p>
        </div>
      ),
      images: ['/guide-step-4a.jpg', '/guide-step-4b.jpg']
    },
    {
      step: '05',
      title: '變身系統使用',
      content: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>1. 按下 <code className="bg-white/20 px-1 rounded whitespace-nowrap">Ctrl + D</code> 開啟「變身收藏系統」</p>
          <p>2. 挑選變身並「雙擊」卡片圖示即可變身</p>
          <p className="text-xs text-[#fccd4d] mt-1">※ 背包內需有「變形卷軸」</p>
        </div>
      ),
      images: ['/guide-step-5.jpg']
    },
    {
      step: '06',
      title: '內掛 (自動練功) 設置',
      content: (
        <div className="space-y-2 text-sm text-slate-300">
          <p>1. 按下 <code className="bg-white/20 px-1 rounded whitespace-nowrap">Ctrl + D</code> 雙擊「自動練功」圖示</p>
          <p>2. 或進入「設定系統」&gt;&gt;「內掛設定」調整細節</p>
          <p className="text-slate-400 mt-2 font-bold">設定完成後，角色將自動尋怪攻擊，解放雙手！</p>
        </div>
      ),
      images: ['/guide-step-6.jpg']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20 bg-[url('/bg-grid.svg')] bg-fixed">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-widest mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fccd4d] to-[#b38728]">GAME GUIDE</span> 遊戲攻略
          </h1>
          <p className="text-slate-400 text-sm md:text-base flex items-center gap-2">
            最強勇者必讀的生存指南
          </p>
        </div>

        {/* Main Layout: Flex Container */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Sidebar Navigation */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-2">
             <div className="text-xs font-bold text-slate-500 tracking-widest mb-4 px-2">CATEGORIES</div>
             <div className="flex flex-col gap-3">
                {menuItems.map((item) => {
                  const isActive = activeCategory === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveCategory(item.id)}
                      className={`group flex items-center justify-between w-full p-4 rounded-xl border transition-all duration-300 text-left relative overflow-hidden
                        ${isActive 
                          ? 'bg-[#fccd4d]/10 border-[#fccd4d] text-[#fccd4d]' 
                          : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10 hover:border-white/20 hover:text-slate-200'
                        }`}
                    >
                      <div className="flex items-center gap-3 z-10">
                        <Icon size={20} className={isActive ? 'text-[#fccd4d]' : 'text-slate-500 group-hover:text-slate-300'} />
                        <span className="font-bold tracking-wide">{item.label}</span>
                      </div>
                      {isActive && <ChevronRight size={16} className="text-[#fccd4d] animate-pulse" />}
                    </button>
                  );
                })}

                {/* 獨立的掉落查詢按鈕 (External Link) */}
                <a 
                  href={DROP_SEARCH_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center justify-between w-full p-4 rounded-xl border border-white/5 bg-white/5 text-slate-400 hover:bg-white/10 hover:border-green-500/30 hover:text-green-400 transition-all duration-300"
                >
                   <div className="flex items-center gap-3">
                      <Search size={20} className="text-slate-500 group-hover:text-green-400 transition-colors" />
                      <span className="font-bold tracking-wide">掉落查詢</span>
                   </div>
                   <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
             </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 w-full min-w-0">
             <div className="bg-[#0a0a0a]/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white/10 min-h-[600px] shadow-2xl shadow-black/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
                
                {/* 1. 新手入門區塊 */}
                {activeCategory === '新手入門' && (
                  <div className="animate-fade-in-up">
                     <div className="flex items-center gap-3 mb-8">
                       <BookOpen className="text-[#fccd4d]" size={28}/>
                       <h2 className="text-2xl font-bold text-white">
                        新手入門六部曲 <span className="ml-3 text-xs bg-[#fccd4d] text-black px-2 py-0.5 rounded font-bold">圖文教學</span>
                       </h2>
                    </div>
                     <div className="space-y-8 text-slate-300">
                        {guideSteps.map((step, index) => (
                           <div key={index} className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[#fccd4d]/30 transition-colors duration-300">
                              <div className="p-6">
                                 {/* Step Title */}
                                 <div className="flex items-center gap-3 mb-4">
                                    <span className="px-2 py-1 bg-[#fccd4d]/20 border border-[#fccd4d]/50 text-[#fccd4d] text-xs font-bold rounded">STEP {step.step}</span>
                                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                 </div>
                                 
                                 {/* Content */}
                                 <div className="mb-6 text-slate-400 leading-relaxed">
                                   {step.content}
                                 </div>

                                 {/* Dynamic Image Rendering */}
                                 {step.images && step.images.length > 0 && (
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                     {step.images.map((imgSrc, imgIdx) => (
                                       <div key={imgIdx} className="rounded-lg overflow-hidden border border-white/10 bg-black/50 group">
                                         <div className="relative aspect-video">
                                            <img 
                                              src={imgSrc} 
                                              alt={`${step.title} 流程圖 ${imgIdx + 1}`}
                                              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                              onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                if (e.currentTarget.parentElement) {
                                                  e.currentTarget.parentElement.innerHTML = `
                                                    <div class="flex flex-col items-center justify-center w-full h-full text-slate-500 text-xs p-4 bg-[#1a1a1a]">
                                                      <span class="mb-1 text-2xl opacity-30">🖼️</span>
                                                      <span>圖片待補</span>
                                                      <span class="text-[10px] opacity-50 mt-1 font-mono">${imgSrc}</span>
                                                    </div>
                                                  `;
                                                }
                                              }}
                                            />
                                         </div>
                                       </div>
                                     ))}
                                   </div>
                                 )}
                              </div>
                           </div>
                        ))}
                    </div>
                  </div>
                )}

                {/* 2. 職業介紹區塊 */}
                {activeCategory === '職業介紹' && (
                  <div className="animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-8">
                       <Swords className="text-[#fccd4d]" size={28}/>
                       <h2 className="text-2xl font-bold text-white">七大職業深度解析</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {classes.map((job) => <ClassCard key={job.name} job={job} />)}
                    </div>
                  </div>
                )}

                {/* 3. 技能介紹區塊 */}
                {activeCategory === '技能介紹' && (
                  <div className="animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-6">
                       <Zap className="text-[#fccd4d]" size={28}/>
                       <h2 className="text-2xl font-bold text-white">技能資料庫查詢</h2>
                    </div>
                    <div className="bg-black/30 p-4 rounded-xl border border-white/10 mb-8 space-y-5">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input 
                          type="text" 
                          placeholder="輸入技能名稱或效果關鍵字..." 
                          className="w-full bg-[#050505] border border-white/10 rounded-lg py-3 pl-10 pr-4 text-slate-200 focus:outline-none focus:border-[#fccd4d]"
                          value={skillSearch}
                          onChange={(e) => setSkillSearch(e.target.value)}
                        />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {jobsList.map(job => (
                          <button 
                            key={job}
                            onClick={() => setSkillJobFilter(job)}
                            className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                              skillJobFilter === job ? 'bg-purple-600/30 text-purple-300 border-purple-500' : 'bg-white/5 text-slate-400 border-transparent hover:bg-white/10'
                            }`}
                          >
                            {job}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4">
                      {filteredSkills.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
                    </div>
                  </div>
                )}

                {/* 4. 地圖資訊區塊 (完整補回) */}
                {activeCategory === '地圖資訊' && (
                  <div className="animate-fade-in-up flex flex-col items-center">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-l-4 border-[#b38728] pl-4 w-full flex items-center gap-3">
                      <Map className="text-[#fccd4d]" />
                      世界地圖 & 稀有裝備分佈
                    </h2>
                    <div className="w-full bg-black/40 border border-white/10 p-2 rounded-lg overflow-hidden group">
                      <img 
                        src="/world_map.png" 
                        alt="World Map" 
                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                        onClick={() => window.open('/world_map.png', '_blank')} 
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          if (e.currentTarget.parentElement) {
                            e.currentTarget.parentElement.innerHTML = '<div class="p-10 text-center text-red-400 border border-dashed border-red-500/30 rounded">地圖圖片 (world_map.png) 尚未上傳<br/><span class="text-xs text-slate-500">請將圖片放入 public 資料夾</span></div>';
                          }
                        }}
                      />
                    </div>
                    <p className="text-slate-500 text-sm mt-4 flex items-center gap-2">
                      <span className="bg-[#b38728] text-black text-[10px] px-2 py-0.5 rounded font-bold">TIP</span>
                      點擊地圖可開啟原始大圖檢視，右鍵可另存圖片。
                    </p>
                  </div>
                )}
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GameGuide;