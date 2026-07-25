/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50530
 Source Host           : localhost:21542
 Source Schema         : 大道m天堂

 Target Server Type    : MySQL
 Target Server Version : 50530
 File Encoding         : 65001

 Date: 25/07/2026 12:07:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for droplist_map
-- ----------------------------
DROP TABLE IF EXISTS `droplist_map`;
CREATE TABLE `droplist_map`  (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `MapNote` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `地圖編號` int(6) NOT NULL DEFAULT 0,
  `物品編號` int(6) UNSIGNED NOT NULL DEFAULT 0,
  `note` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `最小掉落數量` int(4) UNSIGNED NOT NULL DEFAULT 0,
  `最大掉落數量` int(4) UNSIGNED NOT NULL DEFAULT 0,
  `機率(1000000)` int(8) UNSIGNED NOT NULL DEFAULT 0,
  `最小強化值` int(4) NOT NULL DEFAULT 0,
  `最大強化值` int(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1699 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of droplist_map
-- ----------------------------
INSERT INTO `droplist_map` VALUES (1566, '奇岩地監3樓', 55, 100276, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (142, '精靈墓穴', 430, 700042, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (141, '夢幻之島', 303, 40308, '', 3000, 5000, 1000000, 0, 0);
INSERT INTO `droplist_map` VALUES (140, '夢幻之島', 303, 40087, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (139, '夢幻之島', 303, 40074, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (138, '夢幻之島', 303, 240087, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (136, '夢幻之島', 303, 140087, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (137, '夢幻之島', 303, 240074, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (135, '夢幻之島', 303, 140074, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (14, '虛空遺忘之島', 2071, 641605, '', 1, 1, 100000, 0, 0);
INSERT INTO `droplist_map` VALUES (15, '破滅奇岩地監1F', 15409, 40308, '', 1, 300, 300000, 0, 0);
INSERT INTO `droplist_map` VALUES (16, '破滅奇岩地監1F', 15409, 40018, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (17, '破滅奇岩地監1F', 15409, 49138, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (18, '破滅奇岩地監1F', 15409, 61105, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (19, '拋棄之地', 777, 41206, '', 1, 1, 2500, 0, 0);
INSERT INTO `droplist_map` VALUES (21, '奇岩地監1F', 53, 100253, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (22, '奇岩地監1F', 53, 100274, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (23, '奇岩地監1F', 53, 100266, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (24, '奇岩地監1F', 53, 100275, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (25, '奇岩地監1F', 53, 100276, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (26, '龍之谷地監1樓', 30, 20030, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (27, '龍之谷地監1樓', 30, 20067, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (28, '龍之谷地監1樓', 30, 20129, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (29, '龍之谷地監1樓', 30, 20176, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (30, '龍之谷地監1樓', 30, 20208, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (31, '龍之谷地監1樓', 30, 20233, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (32, '龍之谷地監1樓', 30, 20020, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (33, '龍之谷地監1樓', 30, 20058, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (34, '龍之谷地監1樓', 30, 20113, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (35, '龍之谷地監1樓', 30, 20168, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (36, '龍之谷地監1樓', 30, 20201, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (37, '龍之谷地監1樓', 30, 20228, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (38, '龍之谷地監2樓', 31, 20030, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (39, '龍之谷地監2樓', 31, 20067, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (40, '龍之谷地監2樓', 31, 20129, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (41, '龍之谷地監2樓', 31, 20176, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (42, '龍之谷地監2樓', 31, 20208, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (43, '龍之谷地監2樓', 31, 20233, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (44, '龍之谷地監2樓', 31, 20020, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (45, '龍之谷地監2樓', 31, 20058, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (46, '龍之谷地監2樓', 31, 20113, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (47, '龍之谷地監2樓', 31, 20168, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (48, '龍之谷地監2樓', 31, 20201, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (49, '龍之谷地監2樓', 31, 20228, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (50, '龍之谷地監3樓', 32, 20030, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (51, '龍之谷地監3樓', 32, 20067, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (52, '龍之谷地監3樓', 32, 20129, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (53, '龍之谷地監3樓', 32, 20176, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (54, '龍之谷地監3樓', 32, 20208, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (55, '龍之谷地監3樓', 32, 20233, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (56, '龍之谷地監3樓', 32, 20020, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (57, '龍之谷地監3樓', 32, 20058, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (58, '龍之谷地監3樓', 32, 20113, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (59, '龍之谷地監3樓', 32, 20168, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (60, '龍之谷地監3樓', 32, 20201, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (61, '龍之谷地監3樓', 32, 20228, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (62, '龍之谷地監4樓', 33, 20030, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (63, '龍之谷地監4樓', 33, 20067, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (64, '龍之谷地監4樓', 33, 20129, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (65, '龍之谷地監4樓', 33, 20176, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (66, '龍之谷地監4樓', 33, 20208, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (67, '龍之谷地監4樓', 33, 20233, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (68, '龍之谷地監4樓', 33, 20020, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (69, '龍之谷地監4樓', 33, 20058, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (70, '龍之谷地監4樓', 33, 20113, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (71, '龍之谷地監4樓', 33, 20168, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (72, '龍之谷地監4樓', 33, 20201, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (73, '龍之谷地監4樓', 33, 20228, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (86, '龍之谷地監5樓', 35, 20030, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (87, '龍之谷地監5樓', 35, 20067, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (88, '龍之谷地監5樓', 35, 20129, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (89, '龍之谷地監5樓', 35, 20176, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (90, '龍之谷地監5樓', 35, 20208, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (91, '龍之谷地監5樓', 35, 20233, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (92, '龍之谷地監5樓', 35, 20020, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (93, '龍之谷地監5樓', 35, 20058, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (94, '龍之谷地監5樓', 35, 20113, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (95, '龍之谷地監5樓', 35, 20168, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (96, '龍之谷地監5樓', 35, 20201, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (97, '龍之谷地監5樓', 35, 20228, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (98, '龍之谷地監6樓', 36, 20030, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (99, '龍之谷地監6樓', 36, 20067, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (100, '龍之谷地監6樓', 36, 20129, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (101, '龍之谷地監6樓', 36, 20176, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (102, '龍之谷地監6樓', 36, 20208, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (103, '龍之谷地監6樓', 36, 20233, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (104, '龍之谷地監6樓', 36, 20020, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (105, '龍之谷地監6樓', 36, 20058, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (106, '龍之谷地監6樓', 36, 20113, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (107, '龍之谷地監6樓', 36, 20168, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (108, '龍之谷地監6樓', 36, 20201, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (109, '龍之谷地監6樓', 36, 20228, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (1565, '奇岩地監3樓', 55, 100275, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1564, '奇岩地監3樓', 55, 100266, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1563, '奇岩地監3樓', 55, 100274, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1562, '奇岩地監3樓', 55, 100253, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1561, '奇岩地監2樓', 54, 100288, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1560, '奇岩地監2樓', 54, 100276, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1559, '奇岩地監2樓', 54, 100275, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1558, '奇岩地監2樓', 54, 100266, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1557, '奇岩地監2樓', 54, 100274, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1556, '奇岩地監2樓', 54, 100253, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (154, '奇岩地監1F', 53, 100288, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (153, '精靈墓穴', 430, 57505, '', 1, 1, 1000, 0, 0);
INSERT INTO `droplist_map` VALUES (151, '精靈墓穴', 430, 57503, '', 1, 1, 20000, 0, 0);
INSERT INTO `droplist_map` VALUES (152, '精靈墓穴', 430, 57504, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (149, '精靈墓穴', 430, 60383, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (150, '精靈墓穴', 430, 60385, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (147, '精靈墓穴', 430, 57616, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (148, '精靈墓穴', 430, 60292, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (145, '精靈墓穴', 430, 60382, '', 1, 1, 20000, 0, 0);
INSERT INTO `droplist_map` VALUES (146, '精靈墓穴', 430, 60384, '', 1, 1, 20000, 0, 0);
INSERT INTO `droplist_map` VALUES (143, '精靈墓穴', 430, 40406, '', 1, 1, 20000, 0, 0);
INSERT INTO `droplist_map` VALUES (144, '精靈墓穴', 430, 60287, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1575, '新版傲慢之塔2樓', 3302, 84003, '', 1, 1, 5000, 0, 0);
INSERT INTO `droplist_map` VALUES (1567, '奇岩地監3樓', 55, 100288, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1568, '奇岩地監4樓', 56, 100253, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1569, '奇岩地監4樓', 56, 100274, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1570, '奇岩地監4樓', 56, 100266, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1571, '奇岩地監4樓', 56, 100275, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1572, '奇岩地監4樓', 56, 100276, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1573, '奇岩地監4樓', 56, 100288, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1574, '新版傲慢之塔1樓', 3301, 84002, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1576, '新版傲慢之塔3樓', 3303, 84004, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1577, '新版傲慢之塔4樓', 3304, 84005, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1578, '新版傲慢之塔5樓', 3305, 84006, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1579, '新版傲慢之塔6樓', 3306, 84007, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1580, '新版傲慢之塔7樓', 3307, 84008, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1581, '新版傲慢之塔8樓', 3308, 84009, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1582, '新版傲慢之塔9樓', 3309, 84010, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1583, '奇岩地監1F', 53, 100281, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1584, '奇岩地監2樓', 54, 100281, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1585, '奇岩地監3樓', 55, 100281, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1586, '奇岩地監4樓', 56, 100281, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1587, '新版傲慢之塔1樓', 3301, 84001, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1588, '新版傲慢之塔2樓', 3302, 84002, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1589, '新版傲慢之塔3樓', 3303, 84003, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1590, '新版傲慢之塔4樓', 3304, 84004, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1591, '新版傲慢之塔5樓', 3305, 84005, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1592, '新版傲慢之塔6樓', 3306, 84006, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1593, '新版傲慢之塔7樓', 3307, 84007, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1594, '新版傲慢之塔8樓', 3308, 84008, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1595, '新版傲慢之塔9樓', 3309, 84009, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1596, '新版傲慢之塔10樓', 3310, 84010, '', 1, 1, 3000, 0, 0);
INSERT INTO `droplist_map` VALUES (1597, '夢幻之島', 303, 700198, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1598, '精靈墓穴', 430, 700199, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1599, '拋棄之地', 777, 700200, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1600, '新版傲慢之塔1樓', 3301, 700201, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1601, '新版傲慢之塔2樓', 3302, 700202, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1602, '新版傲慢之塔3樓', 3303, 700203, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1603, '新版傲慢之塔4樓', 3304, 700204, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1604, '新版傲慢之塔5樓', 3305, 700205, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1605, '新版傲慢之塔6樓', 3306, 700206, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1606, '新版傲慢之塔7樓', 3307, 700207, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1607, '新版傲慢之塔8樓', 3308, 700208, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1608, '新版傲慢之塔9樓', 3309, 700209, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1609, '新版傲慢之塔10樓', 3310, 700210, '', 1, 1, 100, 0, 0);
INSERT INTO `droplist_map` VALUES (1610, '新遺忘之島', 1700, 40308, '', 300, 500, 1000000, 0, 0);
INSERT INTO `droplist_map` VALUES (1611, '新遺忘之島', 1700, 80019, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1612, '新遺忘之島', 1700, 40074, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1613, '新遺忘之島', 1700, 40087, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1614, '新遺忘之島', 1700, 140074, '', 1, 1, 5000, 0, 0);
INSERT INTO `droplist_map` VALUES (1615, '新遺忘之島', 1700, 140087, '', 1, 1, 5000, 0, 0);
INSERT INTO `droplist_map` VALUES (1616, '新遺忘之島', 1700, 240074, '', 1, 1, 5000, 0, 0);
INSERT INTO `droplist_map` VALUES (1617, '新遺忘之島', 1700, 240087, '', 1, 1, 5000, 0, 0);
INSERT INTO `droplist_map` VALUES (1618, '新遺忘之島', 1700, 60422, '', 1, 1, 100000, 0, 0);
INSERT INTO `droplist_map` VALUES (1619, '新遺忘之島', 1700, 61061, '', 1, 1, 100000, 0, 0);
INSERT INTO `droplist_map` VALUES (1620, '新遺忘之島', 1700, 20129, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1621, '新遺忘之島', 1700, 20233, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1622, '新遺忘之島', 1700, 20067, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1623, '新遺忘之島', 1700, 20176, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1624, '新遺忘之島', 1700, 20208, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1625, '新遺忘之島', 1700, 20113, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1626, '新遺忘之島', 1700, 20228, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1627, '新遺忘之島', 1700, 20058, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1628, '新遺忘之島', 1700, 20168, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1629, '新遺忘之島', 1700, 20201, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1630, '新遺忘之島', 1700, 700044, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1631, '新遺忘之島', 1700, 700223, '', 1, 1, 50, 0, 0);
INSERT INTO `droplist_map` VALUES (1632, '新版傲慢之塔1樓', 3301, 57112, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1633, '新版傲慢之塔2樓', 3302, 57112, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1634, '新版傲慢之塔3樓', 3303, 57112, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1635, '新版傲慢之塔4樓', 3304, 57112, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1636, '新版傲慢之塔5樓', 3305, 57112, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1637, '新版傲慢之塔6樓', 3306, 57112, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1638, '新版傲慢之塔7樓', 3307, 57112, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1639, '新版傲慢之塔8樓', 3308, 57112, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1640, '新版傲慢之塔9樓', 3309, 57112, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1641, '新版傲慢之塔10樓', 3310, 57112, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1642, '新版傲慢之塔1樓', 3301, 57113, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1643, '新版傲慢之塔2樓', 3302, 57113, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1644, '新版傲慢之塔3樓', 3303, 57113, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1645, '新版傲慢之塔4樓', 3304, 57113, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1646, '新版傲慢之塔5樓', 3305, 57113, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1647, '新版傲慢之塔6樓', 3306, 57113, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1648, '新版傲慢之塔7樓', 3307, 57113, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1649, '新版傲慢之塔8樓', 3308, 57113, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1650, '新版傲慢之塔9樓', 3309, 57113, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1651, '新版傲慢之塔10樓', 3310, 57113, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1652, '新版傲慢之塔1樓', 3301, 57114, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1653, '新版傲慢之塔2樓', 3302, 57114, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1654, '新版傲慢之塔3樓', 3303, 57114, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1655, '新版傲慢之塔4樓', 3304, 57114, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1656, '新版傲慢之塔5樓', 3305, 57114, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1657, '新版傲慢之塔6樓', 3306, 57114, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1658, '新版傲慢之塔7樓', 3307, 57114, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1659, '新版傲慢之塔8樓', 3308, 57114, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1660, '新版傲慢之塔9樓', 3309, 57114, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1661, '新版傲慢之塔10樓', 3310, 57114, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1662, '新版傲慢之塔頂樓', 7100, 40164, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1663, '新版傲慢之塔頂樓', 7100, 40240, '', 1, 1, 10000, 0, 0);
INSERT INTO `droplist_map` VALUES (1664, '新版傲慢之塔頂樓', 7100, 40189, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1665, '新版傲慢之塔頂樓', 7100, 40189, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1666, '新版傲慢之塔頂樓', 7100, 40194, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1667, '新版傲慢之塔頂樓', 7100, 40196, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1668, '新版傲慢之塔頂樓', 7100, 40197, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1669, '新版傲慢之塔頂樓', 7100, 40200, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1670, '新版傲慢之塔頂樓', 7100, 40201, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1671, '新版傲慢之塔頂樓', 7100, 40202, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1672, '新版傲慢之塔頂樓', 7100, 40203, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1673, '新版傲慢之塔頂樓', 7100, 40208, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1674, '新版傲慢之塔頂樓', 7100, 40212, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1675, '新版傲慢之塔頂樓', 7100, 40213, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1676, '新版傲慢之塔頂樓', 7100, 40214, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1677, '新版傲慢之塔頂樓', 7100, 40215, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1678, '新版傲慢之塔頂樓', 7100, 40216, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1679, '新版傲慢之塔頂樓', 7100, 40217, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1680, '新版傲慢之塔頂樓', 7100, 40220, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1681, '新版傲慢之塔頂樓', 7100, 40224, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1682, '新版傲慢之塔頂樓', 7100, 40226, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1683, '新版傲慢之塔頂樓', 7100, 40227, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1684, '新版傲慢之塔頂樓', 7100, 40228, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1685, '新版傲慢之塔頂樓', 7100, 40230, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1686, '新版傲慢之塔頂樓', 7100, 40231, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1687, '新版傲慢之塔頂樓', 7100, 40268, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1688, '新版傲慢之塔頂樓', 7100, 40273, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1689, '新版傲慢之塔頂樓', 7100, 40274, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1690, '新版傲慢之塔頂樓', 7100, 49374, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1691, '新版傲慢之塔頂樓', 7100, 49375, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1692, '新版傲慢之塔頂樓', 7100, 49376, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1693, '新版傲慢之塔頂樓', 7100, 49377, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1694, '新版傲慢之塔頂樓', 7100, 49378, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1695, '新版傲慢之塔頂樓', 7100, 49379, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1696, '新版傲慢之塔頂樓', 7100, 49380, '', 1, 1, 10, 0, 0);
INSERT INTO `droplist_map` VALUES (1697, '新版傲慢之塔10F', 3310, 84011, '', 1, 1, 500, 0, 0);
INSERT INTO `droplist_map` VALUES (1698, '新版傲慢之塔頂樓', 7100, 84011, '', 1, 1, 1000, 0, 0);

SET FOREIGN_KEY_CHECKS = 1;
