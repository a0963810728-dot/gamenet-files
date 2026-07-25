// 自動產生 — 來源: droplist_map.sql + weapon/armor/etcitem (2026-07-25)
// 共 246 筆掉落紀錄，包含 28 個地圖分組

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

export const DROPLIST_MAP_DATA: MapDropGroup[] = [
  {
    "mapName": "奇岩地監1F",
    "mapId": 53,
    "items": [
      {
        "id": 21,
        "mapNote": "奇岩地監1F",
        "mapId": 53,
        "itemId": 100253,
        "itemName": "狂風之斧[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 22,
        "mapNote": "奇岩地監1F",
        "mapId": 53,
        "itemId": 100274,
        "itemName": "魔力短劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 23,
        "mapNote": "奇岩地監1F",
        "mapId": 53,
        "itemId": 100266,
        "itemName": "雷雨之劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 24,
        "mapNote": "奇岩地監1F",
        "mapId": 53,
        "itemId": 100275,
        "itemName": "弒神者之弓[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 25,
        "mapNote": "奇岩地監1F",
        "mapId": 53,
        "itemId": 100276,
        "itemName": "鋼鐵瑪那魔杖[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 154,
        "mapNote": "奇岩地監1F",
        "mapId": 53,
        "itemId": 100288,
        "itemName": "破壞雙刀[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1583,
        "mapNote": "奇岩地監1F",
        "mapId": 53,
        "itemId": 100281,
        "itemName": "共鳴鎖鏈劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      }
    ]
  },
  {
    "mapName": "奇岩地監2樓",
    "mapId": 54,
    "items": [
      {
        "id": 1561,
        "mapNote": "奇岩地監2樓",
        "mapId": 54,
        "itemId": 100288,
        "itemName": "破壞雙刀[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1560,
        "mapNote": "奇岩地監2樓",
        "mapId": 54,
        "itemId": 100276,
        "itemName": "鋼鐵瑪那魔杖[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1559,
        "mapNote": "奇岩地監2樓",
        "mapId": 54,
        "itemId": 100275,
        "itemName": "弒神者之弓[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1558,
        "mapNote": "奇岩地監2樓",
        "mapId": 54,
        "itemId": 100266,
        "itemName": "雷雨之劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1557,
        "mapNote": "奇岩地監2樓",
        "mapId": 54,
        "itemId": 100274,
        "itemName": "魔力短劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1556,
        "mapNote": "奇岩地監2樓",
        "mapId": 54,
        "itemId": 100253,
        "itemName": "狂風之斧[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1584,
        "mapNote": "奇岩地監2樓",
        "mapId": 54,
        "itemId": 100281,
        "itemName": "共鳴鎖鏈劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      }
    ]
  },
  {
    "mapName": "奇岩地監3樓",
    "mapId": 55,
    "items": [
      {
        "id": 1566,
        "mapNote": "奇岩地監3樓",
        "mapId": 55,
        "itemId": 100276,
        "itemName": "鋼鐵瑪那魔杖[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1565,
        "mapNote": "奇岩地監3樓",
        "mapId": 55,
        "itemId": 100275,
        "itemName": "弒神者之弓[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1564,
        "mapNote": "奇岩地監3樓",
        "mapId": 55,
        "itemId": 100266,
        "itemName": "雷雨之劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1563,
        "mapNote": "奇岩地監3樓",
        "mapId": 55,
        "itemId": 100274,
        "itemName": "魔力短劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1562,
        "mapNote": "奇岩地監3樓",
        "mapId": 55,
        "itemId": 100253,
        "itemName": "狂風之斧[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1567,
        "mapNote": "奇岩地監3樓",
        "mapId": 55,
        "itemId": 100288,
        "itemName": "破壞雙刀[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1585,
        "mapNote": "奇岩地監3樓",
        "mapId": 55,
        "itemId": 100281,
        "itemName": "共鳴鎖鏈劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      }
    ]
  },
  {
    "mapName": "奇岩地監4樓",
    "mapId": 56,
    "items": [
      {
        "id": 1568,
        "mapNote": "奇岩地監4樓",
        "mapId": 56,
        "itemId": 100253,
        "itemName": "狂風之斧[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1569,
        "mapNote": "奇岩地監4樓",
        "mapId": 56,
        "itemId": 100274,
        "itemName": "魔力短劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1570,
        "mapNote": "奇岩地監4樓",
        "mapId": 56,
        "itemId": 100266,
        "itemName": "雷雨之劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1571,
        "mapNote": "奇岩地監4樓",
        "mapId": 56,
        "itemId": 100275,
        "itemName": "弒神者之弓[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1572,
        "mapNote": "奇岩地監4樓",
        "mapId": 56,
        "itemId": 100276,
        "itemName": "鋼鐵瑪那魔杖[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1573,
        "mapNote": "奇岩地監4樓",
        "mapId": 56,
        "itemId": 100288,
        "itemName": "破壞雙刀[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1586,
        "mapNote": "奇岩地監4樓",
        "mapId": 56,
        "itemId": 100281,
        "itemName": "共鳴鎖鏈劍[刻印]",
        "min": 1,
        "max": 1,
        "chance": 50
      }
    ]
  },
  {
    "mapName": "拋棄之地",
    "mapId": 777,
    "items": [
      {
        "id": 19,
        "mapNote": "拋棄之地",
        "mapId": 777,
        "itemId": 41206,
        "itemName": "少了刀刃的武器",
        "min": 1,
        "max": 1,
        "chance": 2500
      },
      {
        "id": 1599,
        "mapNote": "拋棄之地",
        "mapId": 777,
        "itemId": 700200,
        "itemName": "拋棄之地補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      }
    ]
  },
  {
    "mapName": "破滅奇岩地監1F",
    "mapId": 15409,
    "items": [
      {
        "id": 15,
        "mapNote": "破滅奇岩地監1F",
        "mapId": 15409,
        "itemId": 40308,
        "itemName": "金幣",
        "min": 1,
        "max": 300,
        "chance": 300000
      },
      {
        "id": 16,
        "mapNote": "破滅奇岩地監1F",
        "mapId": 15409,
        "itemId": 40018,
        "itemName": "強化 自我加速藥水(刻印)",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 17,
        "mapNote": "破滅奇岩地監1F",
        "mapId": 15409,
        "itemId": 49138,
        "itemName": "龍之珍珠(三段)(刻印)",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 18,
        "mapNote": "破滅奇岩地監1F",
        "mapId": 15409,
        "itemId": 61105,
        "itemName": "龍之鑽石【不可轉移】",
        "min": 1,
        "max": 1,
        "chance": 1000
      }
    ]
  },
  {
    "mapName": "虛空遺忘之島",
    "mapId": 2071,
    "items": [
      {
        "id": 14,
        "mapNote": "虛空遺忘之島",
        "mapId": 2071,
        "itemId": 641605,
        "itemName": "任務石:神秘之島",
        "min": 1,
        "max": 1,
        "chance": 100000
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔10樓",
    "mapId": 3310,
    "items": [
      {
        "id": 1596,
        "mapNote": "新版傲慢之塔10樓",
        "mapId": 3310,
        "itemId": 84010,
        "itemName": "傲慢之塔移動卷軸(10樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1609,
        "mapNote": "新版傲慢之塔10樓",
        "mapId": 3310,
        "itemId": 700210,
        "itemName": "傲慢之塔10F補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      },
      {
        "id": 1641,
        "mapNote": "新版傲慢之塔10樓",
        "mapId": 3310,
        "itemId": 57112,
        "itemName": "祝福賦予卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1651,
        "mapNote": "新版傲慢之塔10樓",
        "mapId": 3310,
        "itemId": 57113,
        "itemName": "祝福裝備卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1661,
        "mapNote": "新版傲慢之塔10樓",
        "mapId": 3310,
        "itemId": 57114,
        "itemName": "祝福首飾卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔10F",
    "mapId": 3310,
    "items": [
      {
        "id": 1697,
        "mapNote": "新版傲慢之塔10F",
        "mapId": 3310,
        "itemId": 84011,
        "itemName": "傲慢之塔頂樓移動卷軸",
        "min": 1,
        "max": 1,
        "chance": 500
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔1樓",
    "mapId": 3301,
    "items": [
      {
        "id": 1574,
        "mapNote": "新版傲慢之塔1樓",
        "mapId": 3301,
        "itemId": 84002,
        "itemName": "傲慢之塔移動卷軸(2樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1587,
        "mapNote": "新版傲慢之塔1樓",
        "mapId": 3301,
        "itemId": 84001,
        "itemName": "傲慢之塔移動卷軸(1樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1600,
        "mapNote": "新版傲慢之塔1樓",
        "mapId": 3301,
        "itemId": 700201,
        "itemName": "傲慢之塔1F補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      },
      {
        "id": 1632,
        "mapNote": "新版傲慢之塔1樓",
        "mapId": 3301,
        "itemId": 57112,
        "itemName": "祝福賦予卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1642,
        "mapNote": "新版傲慢之塔1樓",
        "mapId": 3301,
        "itemId": 57113,
        "itemName": "祝福裝備卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1652,
        "mapNote": "新版傲慢之塔1樓",
        "mapId": 3301,
        "itemId": 57114,
        "itemName": "祝福首飾卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔2樓",
    "mapId": 3302,
    "items": [
      {
        "id": 1575,
        "mapNote": "新版傲慢之塔2樓",
        "mapId": 3302,
        "itemId": 84003,
        "itemName": "傲慢之塔移動卷軸(3樓)",
        "min": 1,
        "max": 1,
        "chance": 5000
      },
      {
        "id": 1588,
        "mapNote": "新版傲慢之塔2樓",
        "mapId": 3302,
        "itemId": 84002,
        "itemName": "傲慢之塔移動卷軸(2樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1601,
        "mapNote": "新版傲慢之塔2樓",
        "mapId": 3302,
        "itemId": 700202,
        "itemName": "傲慢之塔2F補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      },
      {
        "id": 1633,
        "mapNote": "新版傲慢之塔2樓",
        "mapId": 3302,
        "itemId": 57112,
        "itemName": "祝福賦予卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1643,
        "mapNote": "新版傲慢之塔2樓",
        "mapId": 3302,
        "itemId": 57113,
        "itemName": "祝福裝備卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1653,
        "mapNote": "新版傲慢之塔2樓",
        "mapId": 3302,
        "itemId": 57114,
        "itemName": "祝福首飾卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔3樓",
    "mapId": 3303,
    "items": [
      {
        "id": 1576,
        "mapNote": "新版傲慢之塔3樓",
        "mapId": 3303,
        "itemId": 84004,
        "itemName": "傲慢之塔移動卷軸(4樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1589,
        "mapNote": "新版傲慢之塔3樓",
        "mapId": 3303,
        "itemId": 84003,
        "itemName": "傲慢之塔移動卷軸(3樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1602,
        "mapNote": "新版傲慢之塔3樓",
        "mapId": 3303,
        "itemId": 700203,
        "itemName": "傲慢之塔3F補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      },
      {
        "id": 1634,
        "mapNote": "新版傲慢之塔3樓",
        "mapId": 3303,
        "itemId": 57112,
        "itemName": "祝福賦予卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1644,
        "mapNote": "新版傲慢之塔3樓",
        "mapId": 3303,
        "itemId": 57113,
        "itemName": "祝福裝備卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1654,
        "mapNote": "新版傲慢之塔3樓",
        "mapId": 3303,
        "itemId": 57114,
        "itemName": "祝福首飾卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔4樓",
    "mapId": 3304,
    "items": [
      {
        "id": 1577,
        "mapNote": "新版傲慢之塔4樓",
        "mapId": 3304,
        "itemId": 84005,
        "itemName": "傲慢之塔移動卷軸(5樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1590,
        "mapNote": "新版傲慢之塔4樓",
        "mapId": 3304,
        "itemId": 84004,
        "itemName": "傲慢之塔移動卷軸(4樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1603,
        "mapNote": "新版傲慢之塔4樓",
        "mapId": 3304,
        "itemId": 700204,
        "itemName": "傲慢之塔4F補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      },
      {
        "id": 1635,
        "mapNote": "新版傲慢之塔4樓",
        "mapId": 3304,
        "itemId": 57112,
        "itemName": "祝福賦予卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1645,
        "mapNote": "新版傲慢之塔4樓",
        "mapId": 3304,
        "itemId": 57113,
        "itemName": "祝福裝備卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1655,
        "mapNote": "新版傲慢之塔4樓",
        "mapId": 3304,
        "itemId": 57114,
        "itemName": "祝福首飾卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔5樓",
    "mapId": 3305,
    "items": [
      {
        "id": 1578,
        "mapNote": "新版傲慢之塔5樓",
        "mapId": 3305,
        "itemId": 84006,
        "itemName": "傲慢之塔移動卷軸(6樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1591,
        "mapNote": "新版傲慢之塔5樓",
        "mapId": 3305,
        "itemId": 84005,
        "itemName": "傲慢之塔移動卷軸(5樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1604,
        "mapNote": "新版傲慢之塔5樓",
        "mapId": 3305,
        "itemId": 700205,
        "itemName": "傲慢之塔5F補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      },
      {
        "id": 1636,
        "mapNote": "新版傲慢之塔5樓",
        "mapId": 3305,
        "itemId": 57112,
        "itemName": "祝福賦予卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1646,
        "mapNote": "新版傲慢之塔5樓",
        "mapId": 3305,
        "itemId": 57113,
        "itemName": "祝福裝備卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1656,
        "mapNote": "新版傲慢之塔5樓",
        "mapId": 3305,
        "itemId": 57114,
        "itemName": "祝福首飾卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔6樓",
    "mapId": 3306,
    "items": [
      {
        "id": 1579,
        "mapNote": "新版傲慢之塔6樓",
        "mapId": 3306,
        "itemId": 84007,
        "itemName": "傲慢之塔移動卷軸(7樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1592,
        "mapNote": "新版傲慢之塔6樓",
        "mapId": 3306,
        "itemId": 84006,
        "itemName": "傲慢之塔移動卷軸(6樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1605,
        "mapNote": "新版傲慢之塔6樓",
        "mapId": 3306,
        "itemId": 700206,
        "itemName": "傲慢之塔6F補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      },
      {
        "id": 1637,
        "mapNote": "新版傲慢之塔6樓",
        "mapId": 3306,
        "itemId": 57112,
        "itemName": "祝福賦予卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1647,
        "mapNote": "新版傲慢之塔6樓",
        "mapId": 3306,
        "itemId": 57113,
        "itemName": "祝福裝備卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1657,
        "mapNote": "新版傲慢之塔6樓",
        "mapId": 3306,
        "itemId": 57114,
        "itemName": "祝福首飾卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔7樓",
    "mapId": 3307,
    "items": [
      {
        "id": 1580,
        "mapNote": "新版傲慢之塔7樓",
        "mapId": 3307,
        "itemId": 84008,
        "itemName": "傲慢之塔移動卷軸(8樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1593,
        "mapNote": "新版傲慢之塔7樓",
        "mapId": 3307,
        "itemId": 84007,
        "itemName": "傲慢之塔移動卷軸(7樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1606,
        "mapNote": "新版傲慢之塔7樓",
        "mapId": 3307,
        "itemId": 700207,
        "itemName": "傲慢之塔7F補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      },
      {
        "id": 1638,
        "mapNote": "新版傲慢之塔7樓",
        "mapId": 3307,
        "itemId": 57112,
        "itemName": "祝福賦予卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1648,
        "mapNote": "新版傲慢之塔7樓",
        "mapId": 3307,
        "itemId": 57113,
        "itemName": "祝福裝備卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1658,
        "mapNote": "新版傲慢之塔7樓",
        "mapId": 3307,
        "itemId": 57114,
        "itemName": "祝福首飾卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔8樓",
    "mapId": 3308,
    "items": [
      {
        "id": 1581,
        "mapNote": "新版傲慢之塔8樓",
        "mapId": 3308,
        "itemId": 84009,
        "itemName": "傲慢之塔移動卷軸(9樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1594,
        "mapNote": "新版傲慢之塔8樓",
        "mapId": 3308,
        "itemId": 84008,
        "itemName": "傲慢之塔移動卷軸(8樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1607,
        "mapNote": "新版傲慢之塔8樓",
        "mapId": 3308,
        "itemId": 700208,
        "itemName": "傲慢之塔8F補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      },
      {
        "id": 1639,
        "mapNote": "新版傲慢之塔8樓",
        "mapId": 3308,
        "itemId": 57112,
        "itemName": "祝福賦予卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1649,
        "mapNote": "新版傲慢之塔8樓",
        "mapId": 3308,
        "itemId": 57113,
        "itemName": "祝福裝備卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1659,
        "mapNote": "新版傲慢之塔8樓",
        "mapId": 3308,
        "itemId": 57114,
        "itemName": "祝福首飾卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔9樓",
    "mapId": 3309,
    "items": [
      {
        "id": 1582,
        "mapNote": "新版傲慢之塔9樓",
        "mapId": 3309,
        "itemId": 84010,
        "itemName": "傲慢之塔移動卷軸(10樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1595,
        "mapNote": "新版傲慢之塔9樓",
        "mapId": 3309,
        "itemId": 84009,
        "itemName": "傲慢之塔移動卷軸(9樓)",
        "min": 1,
        "max": 1,
        "chance": 3000
      },
      {
        "id": 1608,
        "mapNote": "新版傲慢之塔9樓",
        "mapId": 3309,
        "itemId": 700209,
        "itemName": "傲慢之塔9F補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      },
      {
        "id": 1640,
        "mapNote": "新版傲慢之塔9樓",
        "mapId": 3309,
        "itemId": 57112,
        "itemName": "祝福賦予卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1650,
        "mapNote": "新版傲慢之塔9樓",
        "mapId": 3309,
        "itemId": 57113,
        "itemName": "祝福裝備卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1660,
        "mapNote": "新版傲慢之塔9樓",
        "mapId": 3309,
        "itemId": 57114,
        "itemName": "祝福首飾卷軸",
        "min": 1,
        "max": 1,
        "chance": 10
      }
    ]
  },
  {
    "mapName": "新版傲慢之塔頂樓",
    "mapId": 7100,
    "items": [
      {
        "id": 1662,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40164,
        "itemName": "一般技能卡(衝擊之暈)",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1663,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40240,
        "itemName": "一般技能卡(三重矢)",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1664,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40189,
        "itemName": "英雄技能卡 (魔法相消術)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1665,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40189,
        "itemName": "英雄技能卡 (魔法相消術)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1666,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40194,
        "itemName": "英雄技能卡 (體力回復術)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1667,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40196,
        "itemName": "英雄技能卡  (神聖迅猛:古代)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1668,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40197,
        "itemName": "英雄技能卡 (神聖疾走)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1669,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40200,
        "itemName": "英雄技能卡 (狂暴術)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1670,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40201,
        "itemName": "英雄技能卡(疾病術)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1671,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40202,
        "itemName": "英雄技能卡(全部治癒術)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1672,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40203,
        "itemName": "英雄技能卡 (黑暗之手)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1673,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40208,
        "itemName": "英雄技能卡  (破壞之鏡)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1674,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40212,
        "itemName": "英雄技能卡(變形術)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1675,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40213,
        "itemName": "英雄技能卡 (聖結界)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1676,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40214,
        "itemName": "英雄技能卡(意志專注)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1677,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40215,
        "itemName": "英雄技能卡 (火風暴)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1678,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40216,
        "itemName": "英雄技能卡 (神諭)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1679,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40217,
        "itemName": "英雄技能卡 (強力無所遁形術)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1680,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40220,
        "itemName": "英雄技能卡  (黑暗之盾)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1681,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40224,
        "itemName": "英雄技能卡 (靈魂昇華)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1682,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40226,
        "itemName": "英雄技能卡 (精準目標)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1683,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40227,
        "itemName": "英雄技能卡 (灼熱靈氣：1階段)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1684,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40228,
        "itemName": "英雄技能卡(勇猛武器)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1685,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40230,
        "itemName": "英雄技能卡(勇猛意志)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1686,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40231,
        "itemName": "英雄技能卡(勇猛盔甲)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1687,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40268,
        "itemName": "英雄技能卡(暗影衝刺)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1688,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40273,
        "itemName": "英雄技能卡(暗影加速)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1689,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 40274,
        "itemName": "英雄技能卡(暗影恢復)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1690,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 49374,
        "itemName": "英雄技能卡(粉碎)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1691,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 49375,
        "itemName": "英雄技能卡(戰士: 力量)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1692,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 49376,
        "itemName": "英雄技能卡(屠戮者)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1693,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 49377,
        "itemName": "英雄技能卡(戰士: 守衛)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1694,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 49378,
        "itemName": "英雄技能卡(泰坦: 岩石)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1695,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 49379,
        "itemName": "英雄技能卡(泰坦: 子彈)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1696,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 49380,
        "itemName": "英雄技能卡(泰坦: 魔法)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1698,
        "mapNote": "新版傲慢之塔頂樓",
        "mapId": 7100,
        "itemId": 84011,
        "itemName": "傲慢之塔頂樓移動卷軸",
        "min": 1,
        "max": 1,
        "chance": 1000
      }
    ]
  },
  {
    "mapName": "新遺忘之島",
    "mapId": 1700,
    "items": [
      {
        "id": 1610,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 40308,
        "itemName": "金幣",
        "min": 300,
        "max": 500,
        "chance": 1000000
      },
      {
        "id": 1611,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 80019,
        "itemName": "哈爾巴斯的執念",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1612,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 40074,
        "itemName": "對盔甲施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1613,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 40087,
        "itemName": "對武器施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1614,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 140074,
        "itemName": "[受祝福]對盔甲施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 5000
      },
      {
        "id": 1615,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 140087,
        "itemName": "[受祝福]對武器施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 5000
      },
      {
        "id": 1616,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 240074,
        "itemName": "[受詛咒]對盔甲施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 5000
      },
      {
        "id": 1617,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 240087,
        "itemName": "[受詛咒]對武器施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 5000
      },
      {
        "id": 1618,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 60422,
        "itemName": "高級變身抽卡",
        "min": 1,
        "max": 1,
        "chance": 100000
      },
      {
        "id": 1619,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 61061,
        "itemName": "高級魔法娃娃抽卡",
        "min": 1,
        "max": 1,
        "chance": 100000
      },
      {
        "id": 1620,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 20129,
        "itemName": "神官法袍",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1621,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 20233,
        "itemName": "神官魔法書",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1622,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 20067,
        "itemName": "神官斗篷",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1623,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 20176,
        "itemName": "神官手套",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1624,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 20208,
        "itemName": "神官長靴",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1625,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 20113,
        "itemName": "武官護鎧",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1626,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 20228,
        "itemName": "武官之盾",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1627,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 20058,
        "itemName": "武官斗篷",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1628,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 20168,
        "itemName": "武官手套",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1629,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 20201,
        "itemName": "武官長靴",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1630,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 700044,
        "itemName": "傳說製作秘笈(封印)",
        "min": 1,
        "max": 1,
        "chance": 10
      },
      {
        "id": 1631,
        "mapNote": "新遺忘之島",
        "mapId": 1700,
        "itemId": 700223,
        "itemName": "遺忘之島補充石",
        "min": 1,
        "max": 1,
        "chance": 50
      }
    ]
  },
  {
    "mapName": "夢幻之島",
    "mapId": 303,
    "items": [
      {
        "id": 141,
        "mapNote": "夢幻之島",
        "mapId": 303,
        "itemId": 40308,
        "itemName": "金幣",
        "min": 3000,
        "max": 5000,
        "chance": 1000000
      },
      {
        "id": 140,
        "mapNote": "夢幻之島",
        "mapId": 303,
        "itemId": 40087,
        "itemName": "對武器施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 139,
        "mapNote": "夢幻之島",
        "mapId": 303,
        "itemId": 40074,
        "itemName": "對盔甲施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 138,
        "mapNote": "夢幻之島",
        "mapId": 303,
        "itemId": 240087,
        "itemName": "[受詛咒]對武器施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 136,
        "mapNote": "夢幻之島",
        "mapId": 303,
        "itemId": 140087,
        "itemName": "[受祝福]對武器施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 137,
        "mapNote": "夢幻之島",
        "mapId": 303,
        "itemId": 240074,
        "itemName": "[受詛咒]對盔甲施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 135,
        "mapNote": "夢幻之島",
        "mapId": 303,
        "itemId": 140074,
        "itemName": "[受祝福]對盔甲施法的卷軸",
        "min": 1,
        "max": 1,
        "chance": 50
      },
      {
        "id": 1597,
        "mapNote": "夢幻之島",
        "mapId": 303,
        "itemId": 700198,
        "itemName": "夢幻之島補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      }
    ]
  },
  {
    "mapName": "精靈墓穴",
    "mapId": 430,
    "items": [
      {
        "id": 142,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 700042,
        "itemName": "稀有製作秘笈(封印)",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 153,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 57505,
        "itemName": "祝福聖水(大)",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 151,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 57503,
        "itemName": "祝福聖水(小)",
        "min": 1,
        "max": 1,
        "chance": 20000
      },
      {
        "id": 152,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 57504,
        "itemName": "祝福聖水(中)",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 149,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 60383,
        "itemName": "最高級布",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 150,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 60385,
        "itemName": "最高級原石",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 147,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 57616,
        "itemName": "最高級皮革",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 148,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 60292,
        "itemName": "最高級金屬板",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 145,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 60382,
        "itemName": "高級布",
        "min": 1,
        "max": 1,
        "chance": 20000
      },
      {
        "id": 146,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 60384,
        "itemName": "高級原石",
        "min": 1,
        "max": 1,
        "chance": 20000
      },
      {
        "id": 143,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 40406,
        "itemName": "高級皮革",
        "min": 1,
        "max": 1,
        "chance": 20000
      },
      {
        "id": 144,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 60287,
        "itemName": "高級金屬板",
        "min": 1,
        "max": 1,
        "chance": 10000
      },
      {
        "id": 1598,
        "mapNote": "精靈墓穴",
        "mapId": 430,
        "itemId": 700199,
        "itemName": "精靈墓穴補充石",
        "min": 1,
        "max": 1,
        "chance": 100
      }
    ]
  },
  {
    "mapName": "龍之谷地監1樓",
    "mapId": 30,
    "items": [
      {
        "id": 26,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20030,
        "itemName": "神官頭飾",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 27,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20067,
        "itemName": "神官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 28,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20129,
        "itemName": "神官法袍",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 29,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20176,
        "itemName": "神官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 30,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20208,
        "itemName": "神官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 31,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20233,
        "itemName": "神官魔法書",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 32,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20020,
        "itemName": "武官頭盔",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 33,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20058,
        "itemName": "武官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 34,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20113,
        "itemName": "武官護鎧",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 35,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20168,
        "itemName": "武官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 36,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20201,
        "itemName": "武官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 37,
        "mapNote": "龍之谷地監1樓",
        "mapId": 30,
        "itemId": 20228,
        "itemName": "武官之盾",
        "min": 1,
        "max": 1,
        "chance": 1000
      }
    ]
  },
  {
    "mapName": "龍之谷地監2樓",
    "mapId": 31,
    "items": [
      {
        "id": 38,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20030,
        "itemName": "神官頭飾",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 39,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20067,
        "itemName": "神官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 40,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20129,
        "itemName": "神官法袍",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 41,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20176,
        "itemName": "神官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 42,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20208,
        "itemName": "神官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 43,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20233,
        "itemName": "神官魔法書",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 44,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20020,
        "itemName": "武官頭盔",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 45,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20058,
        "itemName": "武官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 46,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20113,
        "itemName": "武官護鎧",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 47,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20168,
        "itemName": "武官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 48,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20201,
        "itemName": "武官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 49,
        "mapNote": "龍之谷地監2樓",
        "mapId": 31,
        "itemId": 20228,
        "itemName": "武官之盾",
        "min": 1,
        "max": 1,
        "chance": 1000
      }
    ]
  },
  {
    "mapName": "龍之谷地監3樓",
    "mapId": 32,
    "items": [
      {
        "id": 50,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20030,
        "itemName": "神官頭飾",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 51,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20067,
        "itemName": "神官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 52,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20129,
        "itemName": "神官法袍",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 53,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20176,
        "itemName": "神官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 54,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20208,
        "itemName": "神官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 55,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20233,
        "itemName": "神官魔法書",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 56,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20020,
        "itemName": "武官頭盔",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 57,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20058,
        "itemName": "武官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 58,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20113,
        "itemName": "武官護鎧",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 59,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20168,
        "itemName": "武官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 60,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20201,
        "itemName": "武官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 61,
        "mapNote": "龍之谷地監3樓",
        "mapId": 32,
        "itemId": 20228,
        "itemName": "武官之盾",
        "min": 1,
        "max": 1,
        "chance": 1000
      }
    ]
  },
  {
    "mapName": "龍之谷地監4樓",
    "mapId": 33,
    "items": [
      {
        "id": 62,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20030,
        "itemName": "神官頭飾",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 63,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20067,
        "itemName": "神官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 64,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20129,
        "itemName": "神官法袍",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 65,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20176,
        "itemName": "神官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 66,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20208,
        "itemName": "神官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 67,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20233,
        "itemName": "神官魔法書",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 68,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20020,
        "itemName": "武官頭盔",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 69,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20058,
        "itemName": "武官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 70,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20113,
        "itemName": "武官護鎧",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 71,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20168,
        "itemName": "武官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 72,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20201,
        "itemName": "武官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 73,
        "mapNote": "龍之谷地監4樓",
        "mapId": 33,
        "itemId": 20228,
        "itemName": "武官之盾",
        "min": 1,
        "max": 1,
        "chance": 1000
      }
    ]
  },
  {
    "mapName": "龍之谷地監5樓",
    "mapId": 35,
    "items": [
      {
        "id": 86,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20030,
        "itemName": "神官頭飾",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 87,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20067,
        "itemName": "神官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 88,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20129,
        "itemName": "神官法袍",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 89,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20176,
        "itemName": "神官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 90,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20208,
        "itemName": "神官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 91,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20233,
        "itemName": "神官魔法書",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 92,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20020,
        "itemName": "武官頭盔",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 93,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20058,
        "itemName": "武官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 94,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20113,
        "itemName": "武官護鎧",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 95,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20168,
        "itemName": "武官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 96,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20201,
        "itemName": "武官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 97,
        "mapNote": "龍之谷地監5樓",
        "mapId": 35,
        "itemId": 20228,
        "itemName": "武官之盾",
        "min": 1,
        "max": 1,
        "chance": 1000
      }
    ]
  },
  {
    "mapName": "龍之谷地監6樓",
    "mapId": 36,
    "items": [
      {
        "id": 98,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20030,
        "itemName": "神官頭飾",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 99,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20067,
        "itemName": "神官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 100,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20129,
        "itemName": "神官法袍",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 101,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20176,
        "itemName": "神官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 102,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20208,
        "itemName": "神官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 103,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20233,
        "itemName": "神官魔法書",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 104,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20020,
        "itemName": "武官頭盔",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 105,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20058,
        "itemName": "武官斗篷",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 106,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20113,
        "itemName": "武官護鎧",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 107,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20168,
        "itemName": "武官手套",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 108,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20201,
        "itemName": "武官長靴",
        "min": 1,
        "max": 1,
        "chance": 1000
      },
      {
        "id": 109,
        "mapNote": "龍之谷地監6樓",
        "mapId": 36,
        "itemId": 20228,
        "itemName": "武官之盾",
        "min": 1,
        "max": 1,
        "chance": 1000
      }
    ]
  }
];
