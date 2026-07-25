import React, { useState } from 'react';
import MapDropSection from './MapDropSection';

// === 1. 定義資料結構 ===
interface CollectionItem {
  id: string;
  name: string;
  rank: 'hero' | 'legend' | 'mythic';
  image: string;
  stats: string[];
}

// === 2. 模擬資料庫 ===

// 🔥🔥🔥 變身資料 (神話 + 傳說 + 英雄) 🔥🔥🔥
const transData: CollectionItem[] = [
  // MYTHIC
  { id: 't_divine_prince', name: '神話王族', rank: 'mythic', image: '/image_49.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '近/遠距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_princess', name: '神話公主', rank: 'mythic', image: '/image_50.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '近/遠距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_knight_m', name: '神話男騎士', rank: 'mythic', image: '/image_47.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '近距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_knight_f', name: '神話女騎士', rank: 'mythic', image: '/image_46.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '近距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_elf_m', name: '神話妖精', rank: 'mythic', image: '/image_52.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '遠距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_elf_f', name: '神話女妖精', rank: 'mythic', image: '/image_45.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '遠距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_mage_m', name: '神話法師', rank: 'mythic', image: '/image_57.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '魔法傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_mage_f', name: '神話女法師', rank: 'mythic', image: '/image_56.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '魔法傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_darkelf_m', name: '神話黑妖', rank: 'mythic', image: '/image_51.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '近距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_darkelf_f', name: '神話女黑妖', rank: 'mythic', image: '/image_58.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '近距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_dragon_m', name: '神話龍騎士', rank: 'mythic', image: '/image_43.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '近距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_dragon_f', name: '神話女龍騎', rank: 'mythic', image: '/image_44.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '近/遠距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_gunner_m', name: '神話槍手', rank: 'mythic', image: '/image_54.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '遠距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_gunner_f', name: '神話女槍手', rank: 'mythic', image: '/image_53.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '遠距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_divine_warrior', name: '神話戰士', rank: 'mythic', image: '/image_55.png', stats: ['攻擊速度 +170%', '施法速度 +20%', '移動速度 +20%', '近距離傷害 +5', '昏迷抗性 +10', 'PVP 傷害減免 +3', '恐怖耐性 +10'] },
  { id: 't_platinum_dk', name: '白金死亡騎士', rank: 'mythic', image: '/image_48.png', stats: ['攻擊速度 +175%', '施法速度 +20%', '移動速度 +10%', '昏迷命中 +10', '昏迷抗性 +10', 'PVP 傷害減免 +3', 'PVP 傷害 +5', '發動: 地獄之火 1%'] },
  // LEGEND
  { id: 't_hell_dk', name: '地獄死亡騎士', rank: 'legend', image: '/image_59.png', stats: ['攻擊速度 +148%', '施法速度 +20%', '移動速度 +2%', '近距離傷害 +5', '昏迷抗性 +5', '藥水恢復率 +5%'] },
  { id: 't_hateful_dk', name: '憎惡死亡騎士', rank: 'legend', image: '/image_60.png', stats: ['攻擊速度 +148%', '施法速度 +20%', '移動速度 +5%', '近距離傷害 +5', '近距離命中 +3', '昏迷命中 +5'] },
  { id: 't_night_slayer', name: '暗夜殺戮者', rank: 'legend', image: '/image_61.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +7%', '昏迷抗性 +8', '奪命之雷命中 +3'] },
  { id: 't_moon_sirian', name: '月之絲莉安', rank: 'legend', image: '/image_62.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +5%', '藥水恢復率 +5%', '遠距離攻擊 +5', '遠距離爆擊 +5', '昏迷抗性 +8'] },
  { id: 't_dragon_slayer', name: '屠龍者', rank: 'legend', image: '/image_63.png', stats: ['攻擊速度 +148%', '施法速度 +20%', '移動速度 +5%', '昏迷抗性 +3', 'PVP 傷害減免 +1', '遠/近距離傷害 +3'] },
  { id: 't_first_druga', name: '多魯加', rank: 'legend', image: '/image_64.png', stats: ['攻擊速度 +148%', '施法速度 +20%', '移動速度 +5%', '近距離傷害 +5', '昏迷抗性 +3', 'PVP 傷害減免 +1'] },
  { id: 't_duke_marcus', name: '公爵馬庫斯', rank: 'legend', image: '/image_65.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +10%', '近距離傷害 +5', '昏迷抗性 +5', '昏迷命中 +5'] },
  { id: 't_hephaestus', name: '赫發絲特斯', rank: 'legend', image: '/image_66.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +5%', '魔攻 +1', '昏迷抗性 +5', 'PVP 傷害減免 +3', '遠距離迴避力無視 +2'] },
  { id: 't_gilen', name: '吉倫', rank: 'legend', image: '/image_67.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +2%', '魔攻 +3', '昏迷抗性 +8', '魔法命中 +2'] },
  { id: 't_guard_captain', name: '警衛隊長', rank: 'legend', image: '/image_68.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +5%', '遠距離傷害 +4', '昏迷抗性 +8', '藥水恢復率 +3%'] },
  { id: 't_swan_loengrin', name: '天鵝', rank: 'legend', image: '/image_69.png', stats: ['攻擊速度 +148%', '施法速度 +20%', '移動速度 +5%', '近距離傷害 +5', '近距離命中 +3', '昏迷命中 +5'] },
  { id: 't_smoker', name: 'Mr.斯摩格', rank: 'legend', image: '/image_70.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +5%', '遠距離傷害 +5', '昏迷抗性 +8', '恐怖耐性 +5', 'PVP 遠距離附加傷害 +5'] },
  { id: 't_vald_legend', name: '昔日的騎士范德', rank: 'legend', image: '/image_71.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +5%', '昏迷抗性 +5%', '恐怖耐性 +5%', '昏迷命中 +8%'] },
  { id: 't_hardin_soul', name: '哈汀之魂', rank: 'legend', image: '/image_72.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +5%', '魔攻 +3', '昏迷抗性 +8', '最大 MP +250'] },
  { id: 't_holy_crusader', name: '神聖十字軍', rank: 'legend', image: '/image_73.png', stats: ['攻擊速度 +148%', '施法速度 +20%', '移動速度 +5%', '近距離傷害 +5', '昏迷抗性 +3', 'PVP 傷害減免 +1'] },
  { id: 't_phantom_knight', name: '幻影騎士', rank: 'legend', image: '/image_74.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +5%', '藥水恢復率 +5%', '昏迷抗性 +8', '昏迷命中 +5', '傷害減免 +2'] },
  { id: 't_dark_hardin', name: '暗黑哈汀', rank: 'legend', image: '/image_75.png', stats: ['攻擊速度 +148%', '施法速度 +20%', '移動速度 +5%', '近距離傷害 +5', '近距離命中 +3', '昏迷命中 +5'] },
  { id: 't_iron_atun', name: '鋼鐵阿頓', rank: 'legend', image: '/image_76.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +7%', '近距離傷害 +5', '昏迷抗性 +8', 'PVP 傷害 +3', '藥水恢復率 +5%'] },
  { id: 't_dark_star_zeus', name: '暗黑之星宙斯', rank: 'legend', image: '/image_77.png', stats: ['攻擊速度 +145%', '施法速度 +20%', '移動速度 +7%', '藥水恢復率 +5%', '魔攻 +2', '昏迷抗性 +8', '魔力恢復 +5'] },
  // HERO
  { id: 't_h_guard_blue_spear', name: '警衛藍 矛', rank: 'hero', image: '/image_78.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%'] },
  { id: 't_h_guard_blue_bow', name: '警衛藍 弓', rank: 'hero', image: '/image_79.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%'] },
  { id: 't_h_gunter', name: '甘特', rank: 'hero', image: '/image_80.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_baphomet', name: '巴風特', rank: 'hero', image: '/image_81.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_kurtz', name: '克特', rank: 'hero', image: '/image_82.png', stats: ['攻擊速度 +98%', '施法速度 +20%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2', 'PVP 傷害減免 +2'] },
  { id: 't_h_halpas', name: '海陸拜', rank: 'hero', image: '/image_83.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '遠距離攻擊 +2', 'PVP 傷害減免 +2'] },
  { id: 't_h_ken_rauhel', name: '反王', rank: 'hero', image: '/image_84.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_beleth', name: '巴列斯', rank: 'hero', image: '/image_85.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_tros', name: '特羅斯', rank: 'hero', image: '/image_86.png', stats: ['攻擊速度 +105%', '施法速度 +15%', '移動速度 +2%', 'PVP 傷害減免 +1'] },
  { id: 't_h_sirian', name: '絲莉安', rank: 'hero', image: '/image_87.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '遠距離攻擊 +2', 'PVP 傷害減免 +2'] },
  { id: 't_h_ishte', name: '伊詩蒂', rank: 'hero', image: '/image_88.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '遠距離攻擊 +2', '遠距離命中 +4'] },
  { id: 't_h_oren_green', name: '歐瑞綠', rank: 'hero', image: '/image_89.png', stats: ['攻擊速度 +102%', '施法速度 +15%', '移動速度 +2%', '遠距離傷害 +2', '魔力恢復量 +2'] },
  { id: 't_h_dantes', name: '丹特斯', rank: 'hero', image: '/image_90.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_bludica', name: '布魯迪卡', rank: 'hero', image: '/image_91.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_guard_red_spear', name: '警衛紅 矛', rank: 'hero', image: '/image_92.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%'] },
  { id: 't_h_guard_red_bow', name: '警衛紅 弓', rank: 'hero', image: '/image_93.png', stats: ['攻擊速度 +106%', '施法速度 +15%', '移動速度 +2%', '魔法防禦 +3', 'PVP 遠距離攻擊 +2'] },
  { id: 't_h_dk_red', name: '死亡騎士紅', rank: 'hero', image: '/image_94.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_ishte_gun', name: '伊詩蒂 (槍)', rank: 'hero', image: '/image_95.png', stats: ['攻擊速度 +109%', '施法速度 +15%', '移動速度 +2%', '遠距離攻擊 +2', '遠距離命中 +4'] },
  { id: 't_h_grit', name: '格利特', rank: 'hero', image: '/image_96.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '遠距離攻擊 +2', 'PVP 傷害減免 +2'] },
  { id: 't_h_ivy', name: '荊棘公主', rank: 'hero', image: '/image_97.png', stats: ['攻擊速度 +105%', '施法速度 +15%', '移動速度 +2%', 'PVP 傷害減免 +1'] },
  { id: 't_h_oren_blue', name: '歐瑞藍', rank: 'hero', image: '/image_98.png', stats: ['攻擊速度 +102%', '施法速度 +15%', '移動速度 +2%', '遠距離傷害 +2', '魔力恢復量 +2'] },
  { id: 't_h_fierce_general_red', name: '狂暴將軍紅', rank: 'hero', image: '/image_99.png', stats: ['攻擊速度 +102%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_assassin_red', name: '刺客首領紅', rank: 'hero', image: '/image_100.png', stats: ['攻擊速度 +102%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +3', '魔法防禦 +10', 'PVP 傷害減免 +2'] },
  { id: 't_h_fierce_general_blue', name: '狂暴將軍藍', rank: 'hero', image: '/image_102.png', stats: ['攻擊速度 +102%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +2', 'HP +100'] },
  { id: 't_h_eir', name: '艾伊爾', rank: 'hero', image: '/image_103.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_heaven_knight', name: '天上騎士', rank: 'hero', image: '/image_104.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_sebastian', name: '賽巴斯蒂安', rank: 'hero', image: '/image_105.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%'] },
  { id: 't_h_awakened_yanmo', name: '覺醒炎魔', rank: 'hero', image: '/image_106.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '傷害減免 +1', 'PVP 傷害減免 +2'] },
  { id: 't_h_blazing_dk', name: '焚焰死亡騎士', rank: 'hero', image: '/image_107.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_golden_dk', name: '黃金死亡騎士', rank: 'hero', image: '/image_108.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_blue_dk', name: '死亡騎士藍', rank: 'hero', image: '/image_109.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', '近距離命中 +2'] },
  { id: 't_h_antonio', name: '伯爵安托里歐', rank: 'hero', image: '/image_110.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1', 'PVP 傷害減免 +1', 'PVP 近距離附加傷害 +2'] },
  { id: 't_h_high_knight', name: '優秀騎士', rank: 'hero', image: '/image_111.png', stats: ['攻擊速度 +102%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +2', 'PVP 傷害減免 +2'] },
  { id: 't_h_high_ranger', name: '優秀巡守', rank: 'hero', image: '/image_112.png', stats: ['攻擊速度 +102%', '施法速度 +15%', '移動速度 +2%', '遠距離傷害 +2', '魔力恢復量 +2'] },
  { id: 't_h_sea_monster', name: '海怪', rank: 'hero', image: '/image_113.png', stats: ['攻擊速度 +98%', '施法速度 +15%', '移動速度 +2%', '近距離傷害 +1'] },
  { id: 't_h_pumpkin', name: '南瓜', rank: 'hero', image: '/image_114.png', stats: ['攻擊速度 +102%', '施法速度 +15%', '移動速度 +2%', 'MP +10'] },
  { id: 't_h_bunny_girl', name: '兔子少女', rank: 'hero', image: '/image_115.png', stats: ['攻擊速度 +96%', '施法速度 +20%', '移動速度 +2%'] },
];

// 🔥🔥🔥 魔法娃娃完整資料 (保持不變) 🔥🔥🔥
const dollData: CollectionItem[] = [
  // MYTHIC
  { id: 'd_antharas', name: '安塔瑞斯', rank: 'mythic', image: '/image_10.png', stats: ['經驗值 +30%', '負重獎勵 +2500', '傷害減免 +5', '昏迷耐性 +10', '昏迷命中 +15'] },
  { id: 'd_lindvior', name: '林德拜爾', rank: 'mythic', image: '/image_11.png', stats: ['經驗值 +30%', '負重獎勵 +2500', '傷害減免 +5', '昏迷耐性 +10', '昏迷命中 +15'] },
  { id: 'd_valakas', name: '巴拉卡斯', rank: 'mythic', image: '/image_12.png', stats: ['經驗值 +30%', '負重獎勵 +2500', '傷害減免 +5', '昏迷耐性 +10', '昏迷命中 +15'] },
  { id: 'd_fafurion', name: '法利昂', rank: 'mythic', image: '/image_13.png', stats: ['經驗值 +30%', '負重獎勵 +2500', '傷害減免 +5', '昏迷耐性 +10', '昏迷命中 +15'] },
  // LEGEND
  { id: 'd_demon', name: '惡魔', rank: 'legend', image: '/image_14.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '近距離攻擊 +5', '近距離命中 +5'] },
  { id: 'd_reaper', name: '鐮刀死神', rank: 'legend', image: '/image_15.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '昏迷命中 +8', '昏迷耐性 +8', '恐怖耐性 +5'] },
  { id: 'd_dark_zeus', name: '黑暗宙斯', rank: 'legend', image: '/image_16.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '魔攻 +3', '魔法命中 +1', '魔力恢復 +16'] },
  { id: 'd_unicorn', name: '獨角獸', rank: 'legend', image: '/image_17.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '遠距離攻擊 +5', '魔攻 +3'] },
  { id: 'd_gantt', name: '甘特', rank: 'legend', image: '/image_18.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '近距離命中 +2', '昏迷等級 +2', '傷害減免 +3'] },
  { id: 'd_death_knight', name: '死亡騎士', rank: 'legend', image: '/image_19.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '藥水恢復率 +3', '傷害減免 +5'] },
  { id: 'd_phoenix', name: '不死鳥', rank: 'legend', image: '/image_20.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '遠距離攻擊 +5', '昏迷耐性 +10'] },
  { id: 'd_dark_elder', name: '黑暗長者', rank: 'legend', image: '/image_21.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '魔攻 +3', '昏迷耐性 +10', '魔力恢復 +16'] },
  { id: 'd_fallen', name: '墮落', rank: 'legend', image: '/image_22.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '魔攻 +3', '魔力恢復 +15'] },
  { id: 'd_baranka', name: '巴蘭卡', rank: 'legend', image: '/image_23.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '近距離攻擊 +5', '近距離命中 +5'] },
  { id: 'd_ice_queen', name: '冰之女王', rank: 'legend', image: '/image_24.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '遠距離攻擊 +5', '遠距離命中 +5'] },
  { id: 'd_dark_hardin', name: '黑暗哈汀', rank: 'legend', image: '/image_25.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '魔攻 +3', '魔法命中 +1', '魔力恢復 +16'] },
  { id: 'd_ogre_king', name: '歐吉王', rank: 'legend', image: '/image_26.png', stats: ['經驗值 +20%', '負重獎勵 +2000', '近距離命中 +2', '昏迷等級 +2', '傷害減免 +3'] },
  // HERO
  { id: 'd_aiel', name: '艾依爾', rank: 'hero', image: '/image_40.png', stats: ['經驗值 +14%', '負重獎勵 +1400', '藥水恢復率 +3%', '近距離攻擊 +2', '近距離爆擊 +1%'] },
  { id: 'd_vampire', name: '吸血鬼', rank: 'hero', image: '/image_41.png', stats: ['經驗值 +14%', '負重獎勵 +1400', '近距離攻擊 +5', '吸取 HP', '近距離爆擊 +2%'] },
  { id: 'd_pakshu', name: '巴克休', rank: 'hero', image: '/image_30.png', stats: ['經驗值 +13%', '負重獎勵 +1400', '近距離攻擊 +2', '魔攻 +2'] },
  { id: 'd_raccoon', name: '浣熊', rank: 'hero', image: '/image_32.png', stats: ['經驗值 +14%', '負重獎勵 +1400', '藥水恢復 +1%', '近距離迴避+1'] },
  { id: 'd_bigfoot', name: '大腳瑪幽', rank: 'hero', image: '/image_28.png', stats: ['經驗值 +14%', '負重獎勵 +1400', '昏迷耐性 +5', 'PVP 傷害減免 +1'] },
  { id: 'd_kurtz', name: '克特', rank: 'hero', image: '/image_29.png', stats: ['經驗值 +12%', '負重獎勵 +1300', '體力上限 +80', '傷害減免 +2'] },
  { id: 'd_aruba', name: '阿魯巴(紅)', rank: 'hero', image: '/image_31.png', stats: ['經驗值 +13%', '負重獎勵 +1300', '藥水恢復率 +3%', '近距離命中 +2'] },
  { id: 'd_heaven_knight', name: '天上騎士', rank: 'hero', image: '/image_33.png', stats: ['經驗值 +14%', '負重獎勵 +1400', '遠距離攻擊 +4', '遠距離命中 +3'] },
  { id: 'd_zenis_queen', name: '潔尼斯女王', rank: 'hero', image: '/image_34.png', stats: ['經驗值 +14%', '負重獎勵 +1400', '遠距離攻擊 +4', '遠距離命中 +3'] },
  { id: 'd_zombie_lord', name: '殭屍王', rank: 'hero', image: '/image_35.png', stats: ['經驗值 +14%', '負重獎勵 +1800', '體力上限 +30', '體質 +1', '傷害減免 +3'] },
  { id: 'd_vald', name: '騎士范德', rank: 'hero', image: '/image_36.png', stats: ['經驗值 +13%', '負重獎勵 +1300', '藥水恢復率 +3%', '遠距離攻擊 +2', '近距離攻擊 +2'] },
  { id: 'd_mummy_lord', name: '木乃伊王', rank: 'hero', image: '/image_37.png', stats: ['經驗值 +13%', '負重獎勵 +1300', '遠距離攻擊 +4', '遠距離命中 +3'] },
  { id: 'd_beholder', name: '幻象眼魔', rank: 'hero', image: '/image_39.png', stats: ['經驗值 +13%', '負重獎勵 +1300', '遠距離攻擊 +5', '魔力恢復 +6'] },
];

// 🔥🔥🔥 魔法聖物資料區 (116-168) 🔥🔥🔥
const relicData: CollectionItem[] = [
  // --- MYTHIC (神話) ---
  { id: 'r_einhasad', name: '殷海薩的現身', rank: 'mythic', image: '/image_165.png', stats: ['經驗值獲得量 +25%', '最大 HP +100', '昏迷耐性 +5', '昏迷等級 +5'] },
  { id: 'r_grankain', name: '格蘭肯的現身', rank: 'mythic', image: '/image_166.png', stats: ['經驗值獲得量 +25%', '最大 HP +100', '昏迷命中 +5', '支撐耐性 +5'] },
  { id: 'r_glory_crown', name: '榮耀王冠', rank: 'mythic', image: '/image_167.png', stats: ['經驗值獲得量 +25%', '最大 HP +100', '傷害減免 +5', '昏迷耐性 +5'] },
  { id: 'r_true_orb', name: '真、冥皇的寶珠', rank: 'mythic', image: '/image_168.png', stats: ['經驗值獲得量 +25%', '最大 HP +100', '5% 格檔', '昏迷命中 +5'] },

  // --- LEGEND (傳說) ---
  { id: 'r_death_scythe', name: '死神的鐮刀', rank: 'legend', image: '/image_151.png', stats: ['經驗值獲得量 +16%', '最大 HP +70', '昏迷耐性 +3', '昏迷命中 +3'] },
  { id: 'r_poseidon_crown', name: '波塞頓的王冠', rank: 'legend', image: '/image_152.png', stats: ['經驗值獲得量 +16%', '最大 HP +70', '傷害減免 +3'] },
  { id: 'r_gilen_staff', name: '吉倫的魔杖', rank: 'legend', image: '/image_153.png', stats: ['經驗值獲得量 +16%', '最大 HP +70', '魔法命中 +2', '魔攻 +3'] },
  { id: 'r_gantt_shield', name: '甘特之盾', rank: 'legend', image: '/image_154.png', stats: ['經驗值獲得量 +16%', '最大 HP +70', '傷害減免 +2', 'PVP 傷害減免 +2'] },
  { id: 'r_roch_sword', name: '勞仕碼依之劍', rank: 'legend', image: '/image_155.png', stats: ['經驗值獲得量 +16%', '最大 HP +70', '近距離傷害 +2', '吸血 +5'] },
  { id: 'r_nagbas_staff', name: '納格巴斯的魔杖', rank: 'legend', image: '/image_156.png', stats: ['經驗值獲得量 +16%', '最大 HP +70', '近距離傷害 +3', '遠距離傷害 +3', '魔攻 +3'] },
  { id: 'r_hephaestus_bow', name: '赫發斯特斯的弓', rank: 'legend', image: '/image_157.png', stats: ['經驗值獲得量 +16%', '最大 HP +70', '遠距離傷害 +3', '遠距離命中 +2'] },
  { id: 'r_flame_shadow_skull', name: '火焰之影頭骨', rank: 'legend', image: '/image_158.png', stats: ['經驗值獲得量 +16%', '最大 HP +70', '3% 機率迴避攻擊一次', '昏迷命中 +3'] },
  { id: 'r_yanmo_sword', name: '炎魔的劍', rank: 'legend', image: '/image_159.png', stats: ['經驗值獲得量 +16%', '最大 HP +70', '3% 機率迴避攻擊一次', '昏迷命中 +3'] },
  { id: 'r_ancient_guardian_heart', name: '遠古守護者之心', rank: 'legend', image: '/image_160.png', stats: ['經驗值獲得量 +16%', '最大 HP +70', 'PVP 傷害減免 +3', '昏迷耐性 +3'] },

  // --- HERO (英雄) ---
  { id: 'r_ifrit_spear', name: '伊夫利特之矛', rank: 'hero', image: '/image_116.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '近距離傷害 +2'] },
  { id: 'r_hel_bow', name: '海露拜之弓', rank: 'hero', image: '/image_117.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '遠距離傷害 +2'] },
  { id: 'r_ice_queen_crown', name: '冰之女王皇冠', rank: 'hero', image: '/image_118.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '魔法命中 +1', '魔攻 +1'] },
  { id: 'r_talos_spear', name: '塔洛斯之矛', rank: 'hero', image: '/image_119.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '吸血 +1', '體力回復 +10'] },
  { id: 'r_dios_helm', name: '戴歐斯的頭盔', rank: 'hero', image: '/image_120.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '近距離傷害 +4'] },
  { id: 'r_berial_wing', name: '貝利亞爾的翅膀', rank: 'hero', image: '/image_121.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '遠距離傷害 +4'] },
  { id: 'r_isabel_lamp', name: '伊莎貝的燈火', rank: 'hero', image: '/image_122.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '魔攻 +2', '魔法爆擊 +2'] },
  { id: 'r_leya_boots', name: '蕾雅的皮鞋', rank: 'hero', image: '/image_123.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '遠距離傷害 +2', '遠距離命中 +2'] },
  { id: 'r_lazur_eye', name: '拉茲爾之眼', rank: 'hero', image: '/image_124.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '傷害減免 +2'] },
  { id: 'r_phoenix_feather', name: '不死鳥的羽毛', rank: 'hero', image: '/image_125.png', stats: ['經驗值獲得量 +11%', '最大 HP +100', '傷害減免 +1'] },
  { id: 'r_aleje_dual', name: '亞雷傑的雙刀', rank: 'hero', image: '/image_126.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '近距離傷害 +2', '1% 機率迴避攻擊一次'] },
  { id: 'r_sirian_bow', name: '絲莉安的弓', rank: 'hero', image: '/image_127.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '遠距離傷害 +2', '2% 機率迴避攻擊一次'] },
  { id: 'r_zeus_wood', name: '宙斯的魔木', rank: 'hero', image: '/image_128.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '魔力恢復 +6', '魔攻 +2'] },
  { id: 'r_baranka_mask', name: '巴蘭卡的面具', rank: 'hero', image: '/image_129.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '防禦 -1'] },
  { id: 'r_hel_gloves', name: '海露拜的鎖手甲', rank: 'hero', image: '/image_130.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '遠距離傷害 +2', '無視減免 +2'] },
  { id: 'r_duratim_helm', name: '杜拉提姆的頭盔', rank: 'hero', image: '/image_131.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '防禦 -1', '負重 +300'] },
  { id: 'r_slev_dual', name: '史雷佛的雙刀', rank: 'hero', image: '/image_132.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '基本數值'] },
  { id: 'r_titan_fist', name: '泰坦高倫的石拳', rank: 'hero', image: '/image_133.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', 'PVE 傷害 +2'] },
  { id: 'r_wimmers_robe', name: '溫默斯的魔法袍', rank: 'hero', image: '/image_134.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '近距離傷害 +2', '遠距離傷害 +2'] },
  { id: 'r_gosei_bulb', name: '高斯艾球根', rank: 'hero', image: '/image_135.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '近距離命中 +3', '遠距離命中 +3', '魔法命中 +3'] },
  { id: 'r_death_scale', name: '死亡之鱗', rank: 'hero', image: '/image_136.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '魔攻 +2', '魔法傷害 +2', 'PVP 傷害 +2'] },
  { id: 'r_snow_crystal', name: '雪花結晶', rank: 'hero', image: '/image_139.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '傷害減免 +2'] },
  { id: 'r_worm_poison', name: '巨型蠕蟲的毒袋', rank: 'hero', image: '/image_140.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '無視減免 +2'] },
  { id: 'r_thebes_circlet', name: '底比斯歐西里斯頭飾', rank: 'hero', image: '/image_141.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '魔攻 +2', '魔法命中 +1'] },
  { id: 'r_anubis_belt', name: '阿努比斯的腰帶', rank: 'hero', image: '/image_142.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', 'PVP 傷害 +2', '近距離傷害 +2'] },
  { id: 'r_thebes_mask', name: '底比斯歐西里斯面具', rank: 'hero', image: '/image_143.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', 'PVP 傷害 +2', '遠距離傷害 +2'] },
  { id: 'r_glatim_mask', name: '格拉提姆的面具', rank: 'hero', image: '/image_144.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '防禦 -1', '昏迷耐性 +2'] },
  { id: 'r_jeffrek_ring', name: '杰弗雷庫戒指', rank: 'hero', image: '/image_145.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '力量 +1', '敏捷 +1', '智力 +1'] },
  { id: 'r_moon_spirit_foot', name: '月靈的腳掌', rank: 'hero', image: '/image_146.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '魔法防禦 +10', 'PVP 傷害減免 +2'] },
  { id: 'r_duperian_axe', name: '杜佩里安的斧頭', rank: 'hero', image: '/image_147.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', 'PVP 傷害減免 +2', '無視減傷 +2'] },
  { id: 'r_yonil_hammer', name: '約尼爾的護槌', rank: 'hero', image: '/image_148.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '近距離傷害 +3', 'PVP 傷害減免 +2'] },
  { id: 'r_salada_bible', name: '薩拉妲的懺悔聖經', rank: 'hero', image: '/image_149.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', '遠距離傷害 +3', 'PVP 傷害減免 +2'] },
  { id: 'r_glatim_mask_2', name: '格拉提姆的面具', rank: 'hero', image: '/image_150.png', stats: ['經驗值獲得量 +11%', '最大 HP +50', 'PVP 傷害 +2', '2% 格檔'] },
];

// === 3. 輔助函式：取得階級對應的顏色樣式 ===
const getRankStyles = (rank: string) => {
  switch (rank) {
    case 'mythic': // 金變/金娃/金聖物
      return {
        border: 'border-[#fccd4d]',
        bg: 'bg-[#fccd4d]/10',
        text: 'text-[#fccd4d]',
        badge: 'MYTHIC',
        hexColor: '#fccd4d',
      };
    case 'legend': // 紫變/紫娃/紫聖物
      return {
        border: 'border-[#a855f7]',
        bg: 'bg-[#a855f7]/10',
        text: 'text-[#a855f7]',
        badge: 'LEGEND',
        hexColor: '#a855f7',
      };
    case 'hero': // 紅變/紅娃/紅聖物
    default:
      return {
        border: 'border-[#ef4444]',
        bg: 'bg-[#ef4444]/10',
        text: 'text-[#ef4444]',
        badge: 'HERO',
        hexColor: '#ef4444',
      };
  }
};

// ... (上面是您原本的三大資料陣列 transData, dollData, relicData，請勿更動) ...

// 👇👇👇 請從這裡開始複製，覆蓋掉原本下方的 FullCollectionPage 元件程式碼 👇👇👇

const FullCollectionPage: React.FC = () => {
  // 設定初始狀態
  const [activeTab, setActiveTab] = useState<'trans' | 'doll' | 'relic' | 'mapDrop'>('trans'); 

  // 🔥 新增：監聽網址參數，實現自動跳轉
  React.useEffect(() => {
    // 取得網址上的 ?tab=xxx
    const searchParams = new URLSearchParams(window.location.search);
    const tab = searchParams.get('tab');
    
    // 如果網址有指定 trans / doll / relic / mapDrop，就切換過去
    if (tab === 'trans' || tab === 'doll' || tab === 'relic' || tab === 'mapDrop') {
      setActiveTab(tab as 'trans' | 'doll' | 'relic' | 'mapDrop');
    }
  }, []);

  // 切換分頁的函式 (點擊按鈕時同時修改網址，讓上一頁功能正常)
  const handleTabChange = (tab: 'trans' | 'doll' | 'relic' | 'mapDrop') => {
    setActiveTab(tab);
    // 修改網址但不刷新頁面 (例如變成 /collection?tab=relic)
    const newUrl = `${window.location.pathname}?tab=${tab}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  // 根據目前的分頁決定要顯示哪一份資料
  const currentData = activeTab === 'trans' ? transData : (activeTab === 'doll' ? dollData : relicData);

  // 輔助函式：取得階級對應的顏色樣式
  const getRankStyles = (rank: string) => {
    switch (rank) {
      case 'mythic': // 金色 (神話)
        return {
          border: 'border-[#fccd4d]',
          bg: 'bg-[#fccd4d]/10',
          text: 'text-[#fccd4d]',
          badge: 'MYTHIC',
          hexColor: '#fccd4d',
        };
      case 'legend': // 紫色 (傳說)
        return {
          border: 'border-[#a855f7]',
          bg: 'bg-[#a855f7]/10',
          text: 'text-[#a855f7]',
          badge: 'LEGEND',
          hexColor: '#a855f7',
        };
      case 'hero': // 紅色 (英雄)
      default:
        return {
          border: 'border-[#ef4444]',
          bg: 'bg-[#ef4444]/10',
          text: 'text-[#ef4444]',
          badge: 'HERO',
          hexColor: '#ef4444',
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-20">
      <style>
        {`
          @keyframes lightningMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}
      </style>
      
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-widest mb-4 uppercase">
          COLLECTION <span className="text-[#fccd4d]">圖鑑 & 掉落</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto">
          紀錄著亞丁大陸傳說中的強大力量與各區域地圖寶物掉落資訊。
        </p>
      </div>

      {/* 切換按鈕區 */}
      <div className="flex justify-center gap-4 mb-16 flex-wrap">
        <button
          onClick={() => handleTabChange('trans')}
          className={`px-6 md:px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 border ${
            activeTab === 'trans'
              ? 'bg-[#fccd4d] text-black border-[#fccd4d] shadow-[0_0_20px_rgba(252,205,77,0.4)]'
              : 'bg-transparent text-slate-500 border-slate-700 hover:border-slate-400 hover:text-white'
          }`}
        >
          變身圖鑑
        </button>

        <button
          onClick={() => handleTabChange('doll')}
          className={`px-6 md:px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 border ${
            activeTab === 'doll'
              ? 'bg-[#fccd4d] text-black border-[#fccd4d] shadow-[0_0_20px_rgba(252,205,77,0.4)]'
              : 'bg-transparent text-slate-500 border-slate-700 hover:border-slate-400 hover:text-white'
          }`}
        >
          魔法娃娃圖鑑
        </button>

        <button
          onClick={() => handleTabChange('relic')}
          className={`px-6 md:px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 border ${
            activeTab === 'relic'
              ? 'bg-[#fccd4d] text-black border-[#fccd4d] shadow-[0_0_20px_rgba(252,205,77,0.4)]'
              : 'bg-transparent text-slate-500 border-slate-700 hover:border-slate-400 hover:text-white'
          }`}
        >
          魔法聖物圖鑑
        </button>

        <button
          onClick={() => handleTabChange('mapDrop')}
          className={`px-6 md:px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 border ${
            activeTab === 'mapDrop'
              ? 'bg-[#fccd4d] text-black border-[#fccd4d] shadow-[0_0_20px_rgba(252,205,77,0.4)]'
              : 'bg-transparent text-slate-500 border-slate-700 hover:border-slate-400 hover:text-white'
          }`}
        >
          🗺️ 地圖掉落表
        </button>
      </div>

      <div className="container mx-auto px-6">
        {activeTab === 'mapDrop' ? (
          <MapDropSection />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentData.length > 0 ? (
            currentData.map((item) => {
              const style = getRankStyles(item.rank);
              
              return (
                <div 
                  key={item.id}
                  className={`group relative rounded-xl border ${style.border} bg-[#111] p-6 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 px-3 py-1 text-xs font-black ${style.bg} ${style.text} rounded-br-lg z-20`}>
                    {style.badge}
                  </div>

                  {/* 背景特效 */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen z-0"
                    style={{
                      backgroundImage: `linear-gradient(45deg, transparent 20%, ${style.hexColor}40 50%, transparent 80%)`,
                      backgroundSize: '200% 200%',
                      animation: 'lightningMove 3s linear infinite',
                      filter: 'blur(8px)'
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none mix-blend-screen z-0"
                    style={{
                      backgroundImage: `linear-gradient(135deg, transparent 20%, ${style.hexColor}30 50%, transparent 80%)`,
                      backgroundSize: '200% 200%',
                      animation: 'lightningMove 4s linear infinite reverse',
                      filter: 'blur(12px)'
                    }}
                  ></div>

                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 ${style.bg} opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity z-0`}></div>

                  {/* 卡片內容 */}
                  <div className="relative z-10 flex flex-col items-center">
                    
                    <div className="w-40 h-40 mb-6 relative flex items-center justify-center">
                      <img 
                          src={item.image} 
                          alt={item.name}
                          className="max-w-full max-h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500 relative z-10"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<div class="text-slate-700 flex flex-col items-center justify-center h-full w-full"><span class="text-xs mt-2">圖片載入中...</span></div>`;
                          }}
                      />
                    </div>

                    <h3 className={`text-xl font-bold ${style.text} mb-4 relative z-10`}>{item.name}</h3>

                    <ul className="w-full space-y-2 text-sm text-slate-400 bg-black/60 p-3 rounded border border-white/5 text-left relative z-10 backdrop-blur-sm">
                      {item.stats.map((stat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 flex-shrink-0"></span>
                          <span>{stat}</span>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-20 text-slate-600">
              暫無資料，請等待更新...
            </div>
          )}
        </div>
      )}

        <div className="text-center mt-16 opacity-50">
          <p className="text-slate-600 text-sm">
            ※ 更多變身與娃娃將於後續版本陸續更新
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullCollectionPage;