/*
 Navicat Premium Data Transfer

 Source Server         : 33028 - Furylion
 Source Server Type    : MySQL
 Source Server Version : 50731
 Source Host           : localhost:33028
 Source Schema         : tager

 Target Server Type    : MySQL
 Target Server Version : 50731
 File Encoding         : 65001

 Date: 11/06/2021 17:40:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for files
-- ----------------------------
DROP TABLE IF EXISTS `files`;
CREATE TABLE `files` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '(DC2Type:guid)',
  `scenario` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hash` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ext` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` int(10) unsigned NOT NULL,
  `width` int(10) unsigned DEFAULT NULL,
  `height` int(10) unsigned DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `files_uuid_index` (`uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=1044 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of files
-- ----------------------------
BEGIN;
INSERT INTO `files` VALUES (1, '0c208c2f-92eb-4371-aeb7-84ee9d7cb932', 'home-hero-image', 'ApiSnHwm8X', 'image 11.jpg', 'jpg', 'image/jpeg', 2184651, 2732, 1484, NULL, '2021-03-15 14:51:33', '2021-05-17 19:11:31');
INSERT INTO `files` VALUES (2, '3a85f6cb-df00-41eb-8c1d-3a4fae88244d', 'home-work-items', 'IMVW9BTr6v', 'Rectangle 22@2x.jpg', 'jpg', 'image/jpeg', 2501512, 2460, 1378, NULL, '2021-03-15 14:52:50', '2021-05-17 19:11:31');
INSERT INTO `files` VALUES (3, '835c1c56-3bad-4c12-a8f0-9beafddd0ac8', NULL, 'QVoBfd3wtG', 'Rectangle 22@2x.jpg', 'jpg', 'image/jpeg', 2501512, 2460, 1378, NULL, '2021-03-15 14:53:27', '2021-03-15 14:53:27');
INSERT INTO `files` VALUES (4, '152f3679-6334-4baa-8437-a0261db269e3', NULL, 'vfXmaShJkP', 'QVoBfd3wtG.jpg', 'jpg', 'image/jpeg', 413081, 2460, 1378, NULL, '2021-03-18 08:45:50', '2021-03-18 08:45:50');
INSERT INTO `files` VALUES (5, '4da2344b-8651-4d00-8d9b-7fbd272c2c07', NULL, 'SyngYXCh86', 'Mask Group.png', 'png', 'image/png', 599293, 903, 506, NULL, '2021-03-18 10:29:28', '2021-03-18 10:29:28');
INSERT INTO `files` VALUES (6, '9bdb4a31-4ffe-4c32-82bf-c2b453558f8b', NULL, 'pL7iATH9dH', 'Rectangle 702.jpg', 'jpg', 'image/jpeg', 299711, 745, 409, NULL, '2021-03-18 10:36:14', '2021-03-18 10:36:14');
INSERT INTO `files` VALUES (7, '8dd1beda-5777-4176-8516-7c063016c353', NULL, '3Z3a9o1dLD', 'Rectangle 702 (1).png', 'png', 'image/png', 528533, 744, 408, NULL, '2021-03-18 10:36:36', '2021-03-18 10:36:36');
INSERT INTO `files` VALUES (8, '36493eaa-97c1-4ebc-a4a1-4647e6f24cce', NULL, 'C3yJcbWOkl', 'image 11.jpg', 'jpg', 'image/jpeg', 2184651, 2732, 1484, NULL, '2021-03-18 14:05:39', '2021-03-18 14:05:39');
INSERT INTO `files` VALUES (9, '6d0f7eec-cbf9-4dea-addb-cb51d667f3a2', NULL, 'jZn8ZvnC2J', 'image 11.png', 'png', 'image/png', 303370, 360, 640, NULL, '2021-03-18 14:54:58', '2021-03-18 14:54:58');
INSERT INTO `files` VALUES (10, '48a684df-e1e4-44a0-87df-86d267a4b67e', NULL, 'EGO0mBiDYW', 'image 11.png', 'png', 'image/png', 866566, 768, 1023, NULL, '2021-03-18 14:57:31', '2021-03-18 14:57:31');
INSERT INTO `files` VALUES (11, 'caac423a-2faa-43c9-b7a8-59ec187cd427', NULL, 'qiBfPsDEFp', 'image 11-min.jpg', 'jpg', 'image/jpeg', 99502, 768, 1023, NULL, '2021-03-18 16:09:46', '2021-03-18 16:09:46');
INSERT INTO `files` VALUES (12, 'c72d9e4c-aece-4b45-b1d1-a0795a2fa68c', 'home-hero-image-mobile', 'RawEcEUBhU', 'image 11.jpg', 'jpg', 'image/jpeg', 507233, 768, 1023, NULL, '2021-03-18 16:20:04', '2021-05-17 19:11:31');
INSERT INTO `files` VALUES (13, '8eb23045-d245-433e-9f86-3b1ad3bb49c8', NULL, 'RIg0SEk2lc', '3Z3a9o1dLD.png', 'png', 'image/png', 528533, 744, 408, NULL, '2021-03-19 17:14:14', '2021-03-19 17:14:14');
INSERT INTO `files` VALUES (14, '8d2dcfc6-f449-482d-83ea-6d1d70fbcd89', NULL, 'k4N776wbxf', 'pL7iATH9dH.jpg', 'jpg', 'image/jpeg', 49358, 745, 409, NULL, '2021-03-19 17:14:17', '2021-03-19 17:14:17');
INSERT INTO `files` VALUES (15, '3cff9b8d-703a-4920-ad8a-6cd20b3cad56', NULL, 'In1714X0Um', 'Rectangle 702 (2).png', 'png', 'image/png', 763787, 903, 506, NULL, '2021-03-22 10:17:36', '2021-03-22 10:17:36');
INSERT INTO `files` VALUES (16, '328cf372-eac8-44d6-b3ef-5ff4279838c5', NULL, '05qgU1X4OR', 'Rectangle 702 (3).png', 'png', 'image/png', 272177, 903, 506, NULL, '2021-03-22 10:17:39', '2021-03-22 10:17:39');
INSERT INTO `files` VALUES (17, '03cf34e4-dc42-4902-9400-f1be1ac9762c', NULL, 'g7xmUs9GTz', 'Rectangle 704.png', 'png', 'image/png', 538742, 903, 506, NULL, '2021-03-22 10:17:44', '2021-03-22 10:17:44');
INSERT INTO `files` VALUES (18, '39070e7b-b80e-4c73-bd6d-e98fafbbe7a8', NULL, '1tG5rsjMYV', 'Rectangle 702 (2).png', 'png', 'image/png', 763787, 903, 506, NULL, '2021-03-22 10:19:02', '2021-03-22 10:19:02');
INSERT INTO `files` VALUES (19, '09f2db14-74bb-46a0-a207-20e6b7222705', NULL, 'QywrchaYeA', 'Rectangle 702 (3).png', 'png', 'image/png', 272177, 903, 506, NULL, '2021-03-22 10:19:06', '2021-03-22 10:19:06');
INSERT INTO `files` VALUES (20, '1d244a27-1268-45e9-b37d-280e79b3ca65', NULL, 'Jzdq8BJqkB', 'Rectangle 704.png', 'png', 'image/png', 538742, 903, 506, NULL, '2021-03-22 10:19:12', '2021-03-22 10:19:12');
INSERT INTO `files` VALUES (21, 'bc89fea0-4064-423d-a23f-92eb9c4bbe40', NULL, 'vxlFEcB4CL', 'Group 660.png', 'png', 'image/png', 4876, 146, 49, NULL, '2021-03-22 10:21:24', '2021-03-22 10:21:24');
INSERT INTO `files` VALUES (22, '986d827a-40cb-43da-a05f-21bd1be091f2', 'home-technologies-gallery', 'L09MNh2Qb8', 'Group 477.png', 'png', 'image/png', 3511, 143, 43, NULL, '2021-03-22 10:21:24', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (23, '85d4a8aa-5993-47f7-a603-42d359f69950', 'home-technologies-gallery', 'Bp9TNb4jer', 'Group 662.png', 'png', 'image/png', 1993, 147, 53, NULL, '2021-03-22 10:21:24', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (24, 'bce5224d-4399-4e5f-8c10-9d2c9e1fe77a', 'home-technologies-gallery', '86J2XKbi6D', 'Group 664.png', 'png', 'image/png', 1446, 75, 75, NULL, '2021-03-22 10:21:24', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (25, '5a998ddc-6aee-40b1-ab0a-bbc11baf81bf', NULL, '7GWrXdcuc5', 'Group 660@2x.png', 'png', 'image/png', 9699, 291, 98, NULL, '2021-03-22 10:21:24', '2021-03-22 10:21:24');
INSERT INTO `files` VALUES (26, 'd5e3f05f-d644-4177-ae20-cb0e05be7bcc', NULL, 'Bf3SlIh4Ip', 'Group 721.png', 'png', 'image/png', 1421, 76, 75, NULL, '2021-03-22 10:22:46', '2021-03-22 10:22:46');
INSERT INTO `files` VALUES (27, 'a39a439f-84c7-4364-86e5-654deae443a1', NULL, 'p3PjS2HCHF', 'layer1.png', 'png', 'image/png', 1401, 73, 63, NULL, '2021-03-22 10:22:46', '2021-03-22 10:22:46');
INSERT INTO `files` VALUES (28, 'cdbcd649-74a5-4a84-a63c-89650ee8e2a6', NULL, 'ENKR7mWZuE', 'Group 723.png', 'png', 'image/png', 1046, 75, 75, NULL, '2021-03-22 10:22:46', '2021-03-22 10:22:46');
INSERT INTO `files` VALUES (29, 'd9f6e57b-a190-4de7-8754-55ac60f543e9', NULL, 'mV4NYpOzep', 'Ellipse 5.png', 'png', 'image/png', 23212, 118, 118, NULL, '2021-03-22 10:24:40', '2021-03-22 10:24:40');
INSERT INTO `files` VALUES (30, 'ec816d83-2dab-4a97-acdc-254e2b92480f', NULL, '88QaMCNgsF', 'Ellipse 53.png', 'png', 'image/png', 17203, 118, 118, NULL, '2021-03-22 10:24:40', '2021-03-22 10:24:40');
INSERT INTO `files` VALUES (31, '653c23c3-4fd4-49b3-98a6-c518d566749e', NULL, 'KWeqezvJuH', 'Ellipse 6.png', 'png', 'image/png', 31642, 260, 260, NULL, '2021-03-22 10:24:40', '2021-03-22 10:24:40');
INSERT INTO `files` VALUES (32, '67120810-aad9-4c39-a1b6-f8e07bc0b713', NULL, 'xevHDEo6I8', 'Ellipse 51.png', 'png', 'image/png', 23028, 118, 118, NULL, '2021-03-22 10:24:40', '2021-03-22 10:24:40');
INSERT INTO `files` VALUES (33, '17396976-358b-4728-8f73-2c72208160b2', NULL, 'gTd5xKJULs', 'Ellipse 98.png', 'png', 'image/png', 34867, 137, 137, NULL, '2021-03-22 10:24:40', '2021-03-22 10:24:40');
INSERT INTO `files` VALUES (34, 'b590c158-0023-46d7-8f83-18cb6740bf89', NULL, 'T92rysKkme', 'Ellipse 97.png', 'png', 'image/png', 86440, 271, 271, NULL, '2021-03-22 10:24:40', '2021-03-22 10:24:40');
INSERT INTO `files` VALUES (35, 'e47cdd90-aa82-4cf1-b881-9f872cde2ae7', NULL, '3nh0HSGUrG', 'Ellipse 99.png', 'png', 'image/png', 117723, 418, 418, NULL, '2021-03-22 10:24:40', '2021-03-22 10:24:40');
INSERT INTO `files` VALUES (36, '8d401d47-fb06-4816-ad34-2ce33e1794c5', NULL, 'Q4Uco60seg', 'Ellipse 4.png', 'png', 'image/png', 202943, 553, 553, NULL, '2021-03-22 10:24:40', '2021-03-22 10:24:40');
INSERT INTO `files` VALUES (37, 'dc7118ad-510b-438a-bd18-6b12fced88a0', NULL, 'cBNZaPWKno', 'Ellipse 6 (1).png', 'png', 'image/png', 46498, 331, 331, NULL, '2021-03-22 10:26:04', '2021-03-22 10:26:04');
INSERT INTO `files` VALUES (38, '09b82b5c-2f80-4b9c-8ded-d02499c63c70', NULL, 'QpuAFYxzYP', 'Ellipse 4 (1).png', 'png', 'image/png', 83450, 331, 331, NULL, '2021-03-22 10:26:04', '2021-03-22 10:26:04');
INSERT INTO `files` VALUES (39, 'cdf4f548-b0de-406d-bb0d-c3492e352c66', NULL, 'lXcerzpbDQ', 'Ellipse 97 (1).png', 'png', 'image/png', 117948, 331, 331, NULL, '2021-03-22 10:26:04', '2021-03-22 10:26:04');
INSERT INTO `files` VALUES (40, '52665b7d-cf76-4fda-a216-21191e32a81f', NULL, 'Sw5jE4ojI5', 'Ellipse 53 (1).png', 'png', 'image/png', 100493, 331, 331, NULL, '2021-03-22 10:26:04', '2021-03-22 10:26:04');
INSERT INTO `files` VALUES (41, '7ea8aae4-059f-4bf4-bf91-532e8abafd60', NULL, 'iQqYod8vIQ', 'Ellipse 99 (1).png', 'png', 'image/png', 100408, 332, 331, NULL, '2021-03-22 10:26:04', '2021-03-22 10:26:04');
INSERT INTO `files` VALUES (42, 'd43341a1-d448-4569-97a8-3a44a7635138', NULL, 'c69ZbzbPf3', 'Ellipse 51 (1).png', 'png', 'image/png', 139903, 331, 331, NULL, '2021-03-22 10:26:04', '2021-03-22 10:26:04');
INSERT INTO `files` VALUES (43, '6fd31e45-5f5f-4ec2-8bf2-6c4a8b193a36', NULL, 'EMgS36gQH4', 'Ellipse 98 (1).png', 'png', 'image/png', 164490, 331, 331, NULL, '2021-03-22 10:26:04', '2021-03-22 10:26:04');
INSERT INTO `files` VALUES (44, '4b94938c-7f64-4228-ac3e-e907a037666d', NULL, 'y9Ginjl35h', 'Ellipse 5 (1).png', 'png', 'image/png', 135347, 331, 331, NULL, '2021-03-22 10:26:04', '2021-03-22 10:26:04');
INSERT INTO `files` VALUES (45, '94a3fbe0-5f82-4ded-8501-47956e43bfc4', NULL, 'inGvtvN8oH', 'Ellipse 98 (1).png', 'png', 'image/png', 164490, 331, 331, NULL, '2021-03-22 10:26:39', '2021-03-22 10:26:39');
INSERT INTO `files` VALUES (46, '7adc85c3-233e-4f8d-8ba6-8b2c7da01072', NULL, '8LK9rhIbiQ', 'RIg0SEk2lc.jpg', 'jpg', 'image/jpeg', 109765, 744, 408, NULL, '2021-03-22 13:40:50', '2021-03-22 13:40:50');
INSERT INTO `files` VALUES (47, 'cc79be9c-6ecd-428a-934e-dc6725b9e604', NULL, 'tmyIVNCD4U', 'Rectangle 702 (1).jpg', 'jpg', 'image/jpeg', 476042, 903, 506, NULL, '2021-03-22 13:59:39', '2021-03-22 13:59:39');
INSERT INTO `files` VALUES (48, '4e5965af-2843-4b4f-8bfe-ca389d586957', NULL, 'cUkLFiej09', 'Rectangle 702 (2).jpg', 'jpg', 'image/jpeg', 191634, 903, 506, NULL, '2021-03-22 13:59:44', '2021-03-22 13:59:44');
INSERT INTO `files` VALUES (49, '5b67f591-c480-428e-a234-5ed21f41b1da', NULL, 'bErtYnEd32', 'Rectangle 704.jpg', 'jpg', 'image/jpeg', 327730, 903, 506, NULL, '2021-03-22 13:59:48', '2021-03-22 13:59:48');
INSERT INTO `files` VALUES (50, '30df63d6-f810-4ac4-9a00-a8a1008e28b1', NULL, 'K4GfXZOHVI', 'Rectangle 702 (1).jpg', 'jpg', 'image/jpeg', 476042, 903, 506, NULL, '2021-03-22 14:22:36', '2021-03-22 14:22:36');
INSERT INTO `files` VALUES (51, '6a5aae42-5f65-4f79-b2d1-34b4847b418b', NULL, 'FBxyWTzc3O', 'Rectangle 702 (1).jpg', 'jpg', 'image/jpeg', 476042, 903, 506, NULL, '2021-03-22 14:23:00', '2021-03-22 14:23:00');
INSERT INTO `files` VALUES (52, 'f265f1b2-127c-4a7d-aba1-64e8843bdf4d', NULL, 'iNKnB08LnK', 'Rectangle 702 (2).jpg', 'jpg', 'image/jpeg', 191634, 903, 506, NULL, '2021-03-22 14:23:05', '2021-03-22 14:23:05');
INSERT INTO `files` VALUES (53, 'e2f6cad2-e5ca-4201-8399-5c0b93dc47ca', NULL, 'bHWhRgodEe', 'Rectangle 704.jpg', 'jpg', 'image/jpeg', 327730, 903, 506, NULL, '2021-03-22 14:23:09', '2021-03-22 14:23:09');
INSERT INTO `files` VALUES (54, 'bf252d6a-7864-428a-8cab-5249f127b21a', NULL, 'tkfSIKKZBT', 'Rectangle 754.jpg', 'jpg', 'image/jpeg', 675718, 1852, 750, NULL, '2021-03-22 14:25:26', '2021-03-22 14:25:26');
INSERT INTO `files` VALUES (55, '97eedbf7-3ee3-4254-88d5-e2d91e61a71b', NULL, 'RlRExfCDaK', 'Rectangle 704@2x.jpg', 'jpg', 'image/jpeg', 769494, 1806, 1012, NULL, '2021-03-22 14:50:21', '2021-03-22 14:50:21');
INSERT INTO `files` VALUES (56, '3338b477-2d05-4061-95fa-c446e53ad109', NULL, 'nlr5GhxfAc', 'image 16.png', 'png', 'image/png', 7852, 163, 84, NULL, '2021-03-22 15:10:43', '2021-03-22 15:10:43');
INSERT INTO `files` VALUES (57, '07e62f18-1fb8-4e49-aaa2-8026f555ab2d', NULL, 'tN28pzukUC', 'Daco_6037808 1.png', 'png', 'image/png', 3597, 68, 78, NULL, '2021-03-22 15:10:43', '2021-03-22 15:10:43');
INSERT INTO `files` VALUES (58, '0d37e430-9c04-476e-8590-5b5108861fa7', NULL, 'kBasbxtB1T', 'image 19.png', 'png', 'image/png', 8023, 203, 83, NULL, '2021-03-22 15:10:43', '2021-03-22 15:10:43');
INSERT INTO `files` VALUES (59, 'f4413c12-ef89-4d72-81cb-782896462871', NULL, '3uFHN0rNLD', '505_Games_logo 1.png', 'png', 'image/png', 3080, 179, 68, NULL, '2021-03-22 15:10:43', '2021-03-22 15:10:43');
INSERT INTO `files` VALUES (60, 'd8e3c03a-a28c-4d7f-a3b5-e6ad87ec22ea', NULL, 'Mia3NzHCi2', 'Без названия (11) 1.png', 'png', 'image/png', 7200, 198, 56, NULL, '2021-03-22 15:10:43', '2021-03-22 15:10:43');
INSERT INTO `files` VALUES (61, 'a185d1bc-71e6-4a12-9360-a68c0c699266', NULL, 'X2afjQ9zHX', 'image 18.png', 'png', 'image/png', 7958, 112, 78, NULL, '2021-03-22 15:10:43', '2021-03-22 15:10:43');
INSERT INTO `files` VALUES (62, '2c7488f0-408b-4767-ab58-4190d425e394', 'home-technologies-image', '0ZTuOqGvng', 'Rectangle 754.jpg', 'jpg', 'image/jpeg', 670073, 1852, 750, NULL, '2021-03-22 15:11:18', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (63, '5d20f365-e12a-4571-bfc0-c4a0611aaacf', 'home-technologies-image-mobile', 'RqoKxe6F1p', 'Rectangle 754.jpg', 'jpg', 'image/jpeg', 670073, 1852, 750, NULL, '2021-03-22 15:11:21', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (64, '619e8b23-bc2c-4e83-b022-578b41945c06', NULL, 'gXkhJK9380', 'Group 408.png', 'png', 'image/png', 2360, 172, 70, NULL, '2021-03-22 15:15:54', '2021-03-22 15:15:54');
INSERT INTO `files` VALUES (65, '8f964e4e-8991-4cbe-97ab-d9a8dae39cf7', NULL, 'HPQ15Ecez2', 'Group 406.png', 'png', 'image/png', 7715, 226, 53, NULL, '2021-03-22 15:15:54', '2021-03-22 15:15:54');
INSERT INTO `files` VALUES (66, 'b0ee0cb4-97ca-45e8-9ced-29289839dfb3', NULL, 'qylyjxWfEW', 'Group 409.png', 'png', 'image/png', 2548, 91, 91, NULL, '2021-03-22 15:15:54', '2021-03-22 15:15:54');
INSERT INTO `files` VALUES (67, 'c23c84fc-4cc4-4682-a480-0cc6fcee391a', NULL, 'TMnzYpDjA7', 'Group 407.png', 'png', 'image/png', 7786, 176, 91, NULL, '2021-03-22 15:15:54', '2021-03-22 15:15:54');
INSERT INTO `files` VALUES (68, 'fd52b726-6e47-419b-beb0-abfe34e9a24f', NULL, 'COfRSQ93eq', 'Group 660@2x.png', 'png', 'image/png', 9699, 291, 98, NULL, '2021-03-22 15:16:20', '2021-03-22 15:16:20');
INSERT INTO `files` VALUES (69, 'bbad7390-cc02-4fe4-bfc9-3ec36e2f6352', NULL, 'dPeB6Gjx6A', 'ENKR7mWZuE.png', 'png', 'image/png', 1046, 75, 75, NULL, '2021-03-23 10:29:38', '2021-03-23 10:29:38');
INSERT INTO `files` VALUES (70, '5056575f-eaba-4a5b-af26-786ff64fbd83', NULL, 'b8zOwGUAGZ', 'p3PjS2HCHF.png', 'png', 'image/png', 1401, 73, 63, NULL, '2021-03-23 10:29:40', '2021-03-23 10:29:40');
INSERT INTO `files` VALUES (71, '022324c1-2ab3-4676-b4e4-c29603e5bb6d', NULL, 'tvZGk9RM4j', 'Bf3SlIh4Ip.png', 'png', 'image/png', 1421, 76, 75, NULL, '2021-03-23 10:29:44', '2021-03-23 10:29:44');
INSERT INTO `files` VALUES (72, 'b8b971ce-224a-43a4-98d4-ddfe4345e673', NULL, '1gFbFJzDnD', 'Ellipse 6 (1).png', 'png', 'image/png', 46498, 331, 331, NULL, '2021-03-23 16:02:00', '2021-03-23 16:02:00');
INSERT INTO `files` VALUES (73, '92d7adc6-7c52-499c-b86f-61d25dfd6a1c', NULL, 'EiZTm5sGu0', 'Ellipse 4 (1).png', 'png', 'image/png', 83450, 331, 331, NULL, '2021-03-23 16:02:00', '2021-03-23 16:02:00');
INSERT INTO `files` VALUES (74, '42009bbf-3b2c-428c-9ef2-b0246ac9c844', NULL, 'eNOkvtf0X3', 'Ellipse 53 (1).png', 'png', 'image/png', 100493, 331, 331, NULL, '2021-03-23 16:02:00', '2021-03-23 16:02:00');
INSERT INTO `files` VALUES (75, 'e0920095-b4c9-4ed8-aa96-2ead9e99dc1c', NULL, 'LmMG4k30Gn', 'Ellipse 97 (1).png', 'png', 'image/png', 117948, 331, 331, NULL, '2021-03-23 16:02:00', '2021-03-23 16:02:00');
INSERT INTO `files` VALUES (76, 'c5ee403b-644d-4286-9f5a-b236aaeaf283', NULL, 'oHFKekUHlz', 'Ellipse 98 (1).png', 'png', 'image/png', 164490, 331, 331, NULL, '2021-03-23 16:02:01', '2021-03-23 16:02:01');
INSERT INTO `files` VALUES (77, '6536ab62-8dae-45b9-bb6a-156fdc17835b', NULL, '7jT9F9aUc7', 'Ellipse 5 (1).png', 'png', 'image/png', 135347, 331, 331, NULL, '2021-03-23 16:02:01', '2021-03-23 16:02:01');
INSERT INTO `files` VALUES (78, '8f2d9fd0-215f-4d79-8945-6dda70b8056d', NULL, '8hdRshVMDo', 'Ellipse 51 (1).png', 'png', 'image/png', 139903, 331, 331, NULL, '2021-03-23 16:02:01', '2021-03-23 16:02:01');
INSERT INTO `files` VALUES (79, '3e99ab81-b9a8-4076-b41b-82b825281780', NULL, 'IWuGX7Em2B', 'Ellipse 6 (1).png', 'png', 'image/png', 46498, 331, 331, NULL, '2021-03-23 16:04:26', '2021-03-23 16:04:26');
INSERT INTO `files` VALUES (80, 'e1ec8e38-7329-4f26-913e-897f569946be', NULL, 'rCqJiLgRIc', 'Ellipse 4 (1).png', 'png', 'image/png', 83450, 331, 331, NULL, '2021-03-23 16:04:27', '2021-03-23 16:04:27');
INSERT INTO `files` VALUES (81, '911eb5db-9a76-4dfd-80cf-4dcb3ec3922f', NULL, '0YMM4owl0V', 'Ellipse 53 (1).png', 'png', 'image/png', 100493, 331, 331, NULL, '2021-03-23 16:04:27', '2021-03-23 16:04:27');
INSERT INTO `files` VALUES (82, '2f2af2f5-fb22-451b-b832-9ce124f30258', NULL, 'I1JQ1hSsfF', 'Ellipse 97 (1).png', 'png', 'image/png', 117948, 331, 331, NULL, '2021-03-23 16:04:27', '2021-03-23 16:04:27');
INSERT INTO `files` VALUES (83, '07b6d9cd-f143-4273-8113-735c674c8d63', NULL, 'trvaed40zX', 'Ellipse 51 (1).png', 'png', 'image/png', 139903, 331, 331, NULL, '2021-03-23 16:04:27', '2021-03-23 16:04:27');
INSERT INTO `files` VALUES (84, 'd8c1a210-ef9e-46c5-9c32-912c1c9aa15d', NULL, 'mfwpyKiWrY', 'Ellipse 99 (1).png', 'png', 'image/png', 100408, 332, 331, NULL, '2021-03-23 16:04:27', '2021-03-23 16:04:27');
INSERT INTO `files` VALUES (85, '81a5ff60-6f92-408a-9971-5251c8cbd62e', NULL, '7xOodEJ29V', 'Ellipse 98 (1).png', 'png', 'image/png', 164490, 331, 331, NULL, '2021-03-23 16:04:27', '2021-03-23 16:04:27');
INSERT INTO `files` VALUES (86, 'a86cfc5e-efc0-4276-bb9c-f45b24bd8d24', NULL, 'rqDTz7B0ER', 'Ellipse 5 (1).png', 'png', 'image/png', 135347, 331, 331, NULL, '2021-03-23 16:04:27', '2021-03-23 16:04:27');
INSERT INTO `files` VALUES (87, 'ed37b11f-1e91-4aa3-87fd-9d09b51982b6', NULL, 'YEULmZ2Ups', 'Ellipse 6 (1).png', 'png', 'image/png', 46498, 331, 331, NULL, '2021-03-23 16:04:54', '2021-03-23 16:04:54');
INSERT INTO `files` VALUES (88, '5c4abac3-1661-4a9e-b686-008a87716bd0', NULL, 'XI3hgGqKU3', 'Ellipse 4 (1).png', 'png', 'image/png', 83450, 331, 331, NULL, '2021-03-23 16:04:55', '2021-03-23 16:04:55');
INSERT INTO `files` VALUES (89, '7ac17f52-13b9-4e59-bc27-0b65e54500f4', NULL, 'ICuBxC1xPk', 'Ellipse 53 (1).png', 'png', 'image/png', 100493, 331, 331, NULL, '2021-03-23 16:04:55', '2021-03-23 16:04:55');
INSERT INTO `files` VALUES (90, 'ae46d5ee-e5c0-400b-94bc-0aa8eec6cf18', NULL, '5XFD5p9gxm', 'Ellipse 99 (1).png', 'png', 'image/png', 100408, 332, 331, NULL, '2021-03-23 16:04:55', '2021-03-23 16:04:55');
INSERT INTO `files` VALUES (91, '99240c8c-211f-4002-b165-3d892cbc94ed', NULL, 'bbzIEvEcSZ', 'Ellipse 97 (1).png', 'png', 'image/png', 117948, 331, 331, NULL, '2021-03-23 16:04:55', '2021-03-23 16:04:55');
INSERT INTO `files` VALUES (92, 'e6f9e884-f741-4ed0-893f-53c6a6998b8d', NULL, 'O7CMk4IbTe', 'Ellipse 51 (1).png', 'png', 'image/png', 139903, 331, 331, NULL, '2021-03-23 16:04:55', '2021-03-23 16:04:55');
INSERT INTO `files` VALUES (93, '730eff8d-6f26-46df-a0bf-e88655b23c49', NULL, 'YupLk8L5lz', 'Ellipse 5 (1).png', 'png', 'image/png', 135347, 331, 331, NULL, '2021-03-23 16:04:55', '2021-03-23 16:04:55');
INSERT INTO `files` VALUES (94, 'ef71d366-b29d-49e8-9d05-e152ba334c46', NULL, 'km0FlNbjM5', 'Ellipse 98 (1).png', 'png', 'image/png', 164490, 331, 331, NULL, '2021-03-23 16:04:55', '2021-03-23 16:04:55');
INSERT INTO `files` VALUES (95, 'c8ed46b2-fac5-48a8-af66-69d68b0df4c6', NULL, 'k1niWfw4pJ', 'Vector.png', 'png', 'image/png', 636, 43, 20, NULL, '2021-03-25 12:20:37', '2021-03-25 12:20:37');
INSERT INTO `files` VALUES (96, '90928948-dabd-4ee2-9176-416d2e9cc21a', NULL, 'lbE5MGQAKq', 'Daco_6037808 1.png', 'png', 'image/png', 3597, 68, 78, NULL, '2021-03-25 12:22:09', '2021-03-25 12:22:09');
INSERT INTO `files` VALUES (97, 'c4c3e237-e69a-4e03-8577-11bb9475795f', NULL, 'rTlFoBhtTp', 'Без названия (11) 1.png', 'png', 'image/png', 7200, 198, 56, NULL, '2021-03-25 12:22:09', '2021-03-25 12:22:09');
INSERT INTO `files` VALUES (98, '9f6f1ad2-7a16-454f-ade8-436fb4656065', NULL, '34HpiWbL7f', '505_Games_logo 1.png', 'png', 'image/png', 3080, 179, 68, NULL, '2021-03-25 12:22:09', '2021-03-25 12:22:09');
INSERT INTO `files` VALUES (99, '37e05342-332c-4a24-b1cb-50126f2b1976', NULL, 's5pXkWujxP', 'image 18.png', 'png', 'image/png', 7958, 112, 78, NULL, '2021-03-25 12:22:09', '2021-03-25 12:22:09');
INSERT INTO `files` VALUES (100, '26c33032-3d69-4cc7-ace4-4b429c75bb98', NULL, 'ugiKTQJJe8', 'image 19.png', 'png', 'image/png', 8023, 203, 83, NULL, '2021-03-25 12:22:09', '2021-03-25 12:22:09');
INSERT INTO `files` VALUES (101, '79ca1f2e-7e7c-431c-a5f3-aa7709494eb6', NULL, 'AodECe6Pf1', 'Ellipse 6 (1).png', 'png', 'image/png', 46498, 331, 331, NULL, '2021-03-25 12:22:22', '2021-03-25 12:22:22');
INSERT INTO `files` VALUES (102, 'b7941b1d-d97f-4411-80bd-70bbdb8adb2c', NULL, '31Ceb3Hzps', 'Ellipse 51 (1).png', 'png', 'image/png', 139903, 331, 331, NULL, '2021-03-25 12:22:23', '2021-03-25 12:22:23');
INSERT INTO `files` VALUES (103, '11a56eac-4d3c-4d87-9b10-ff22570753bb', NULL, 'dacwZioDuO', 'Ellipse 4 (1).png', 'png', 'image/png', 83450, 331, 331, NULL, '2021-03-25 12:22:23', '2021-03-25 12:22:23');
INSERT INTO `files` VALUES (104, 'f63f7207-b4e3-4115-8ce8-65a98ae72718', NULL, 'vQP0nbhYSP', 'Ellipse 53 (1).png', 'png', 'image/png', 100493, 331, 331, NULL, '2021-03-25 12:22:23', '2021-03-25 12:22:23');
INSERT INTO `files` VALUES (105, 'e0b89068-2a3d-499b-a8cd-c3f73afac5e2', NULL, 'PSA2S3LSeu', 'Ellipse 98 (1).png', 'png', 'image/png', 164490, 331, 331, NULL, '2021-03-25 12:22:23', '2021-03-25 12:22:23');
INSERT INTO `files` VALUES (106, '93e4d405-2742-495a-83f3-116ce48072e8', NULL, 'HZhZIxXfXV', 'Ellipse 97 (1).png', 'png', 'image/png', 117948, 331, 331, NULL, '2021-03-25 12:22:23', '2021-03-25 12:22:23');
INSERT INTO `files` VALUES (107, '85da7cf2-fcba-4af8-b723-bee36c03cb04', NULL, 'dcz1LZwhrX', 'Ellipse 5 (1).png', 'png', 'image/png', 135347, 331, 331, NULL, '2021-03-25 12:22:23', '2021-03-25 12:22:23');
INSERT INTO `files` VALUES (108, '47865b23-ded0-487c-b675-aa7b21e1788b', NULL, '79QWm0uSKu', 'Wargaming_Logo_full 1.png', 'png', 'image/png', 3117, 160, 81, NULL, '2021-03-25 12:53:36', '2021-03-25 12:53:36');
INSERT INTO `files` VALUES (109, '998e31a4-8e08-4443-9326-cb34ab235a3d', NULL, 'opPSYuDRuk', 'Vector.png', 'png', 'image/png', 2445, 157, 73, NULL, '2021-03-25 13:01:16', '2021-03-25 13:01:16');
INSERT INTO `files` VALUES (110, '339081fa-d0e0-4be5-b886-ab00c070f882', NULL, 'MpJlEtYtuJ', 'Group 408.png', 'png', 'image/png', 1870, 170, 61, NULL, '2021-03-25 13:03:27', '2021-03-25 13:03:27');
INSERT INTO `files` VALUES (111, '45796bb0-df82-41e1-9af9-8fddff763bea', NULL, 'afJDm8oyvI', 'Group 406.png', 'png', 'image/png', 6159, 225, 42, NULL, '2021-03-25 13:03:27', '2021-03-25 13:03:27');
INSERT INTO `files` VALUES (112, '5599fa49-63f9-4d80-b0a2-7f13c1cc106c', NULL, 'VV6KzCjs92', 'Group 407.png', 'png', 'image/png', 5968, 172, 83, NULL, '2021-03-25 13:03:27', '2021-03-25 13:03:27');
INSERT INTO `files` VALUES (113, '735ff00a-7923-4155-94ca-7081346086b3', NULL, 'QpCHnjZyh7', 'image 16 (1).png', 'png', 'image/png', 5736, 160, 76, NULL, '2021-03-25 13:07:12', '2021-03-25 13:07:12');
INSERT INTO `files` VALUES (114, '3f150a15-cb80-4da1-85f7-bd7c196cc429', NULL, 'lf0vyRDB3U', 'Без названия (11) 1 (1).png', 'png', 'image/png', 5458, 196, 46, NULL, '2021-03-25 13:07:12', '2021-03-25 13:07:12');
INSERT INTO `files` VALUES (115, 'b3e520c3-7d62-42e0-80a4-7a7535927e21', NULL, 't8I8it3Bes', '505_Games_logo 1 (1).png', 'png', 'image/png', 2120, 178, 68, NULL, '2021-03-25 13:07:12', '2021-03-25 13:07:12');
INSERT INTO `files` VALUES (116, '24a7df34-dc39-4726-bcf1-c4515fe7545f', NULL, 'KnwQ40Qq13', 'image 19 (1).png', 'png', 'image/png', 6751, 199, 73, NULL, '2021-03-25 13:07:12', '2021-03-25 13:07:12');
INSERT INTO `files` VALUES (117, '9cb9c4e7-3335-4d4e-add5-f5bf63820791', NULL, 'AspdTLSVxi', 'Daco_6037808 1 (1).png', 'png', 'image/png', 3156, 64, 74, NULL, '2021-03-25 13:07:12', '2021-03-25 13:07:12');
INSERT INTO `files` VALUES (118, '2a074dd8-bc83-4cbe-9c3e-384ccf7201fc', NULL, 'Jks6VrSWPA', 'image 18 (1).png', 'png', 'image/png', 6926, 109, 73, NULL, '2021-03-25 13:07:12', '2021-03-25 13:07:12');
INSERT INTO `files` VALUES (119, '217abca5-553f-4f82-b114-96f2d0698747', NULL, 'mmaNTL609J', 'Group 409.png', 'png', 'image/png', 2532, 91, 91, NULL, '2021-03-25 13:10:07', '2021-03-25 13:10:07');
INSERT INTO `files` VALUES (120, '9b57a603-f927-4c33-a5b4-a52ee5f71f60', 'home-work-items', 'X1AQkrI9BI', 'FAQ.-Homescapes-Игровые-события-Список-scaled.jpg', 'jpg', 'image/jpeg', 163232, 1200, 675, NULL, '2021-03-29 10:22:36', '2021-05-17 19:11:31');
INSERT INTO `files` VALUES (121, '873370df-8fba-4b2e-ac10-5c8db413b6ba', 'home-work-items', 'VlOHaFkkK3', 'Emma_Logo.jpg', 'jpg', 'image/jpeg', 5301292, 8000, 3806, NULL, '2021-03-29 10:22:48', '2021-05-17 19:11:31');
INSERT INTO `files` VALUES (122, '40a9d0e4-a139-40a6-aa69-9b91cf5c6299', 'Feedback', 'Q2Jz6r625s', 'New Text Document.txt', 'txt', 'text/plain', 4966, NULL, NULL, NULL, '2021-03-29 14:05:20', '2021-03-29 14:05:20');
INSERT INTO `files` VALUES (123, '83acf01e-3e1f-434d-b23d-423a1282c80f', 'Feedback', 'PiBeZdfElK', 'New Text Document (2).txt', 'txt', 'text/plain', 1270, NULL, NULL, NULL, '2021-03-29 14:05:30', '2021-03-29 14:05:30');
INSERT INTO `files` VALUES (124, 'd9f03d53-161d-4721-ad1d-63cb38ed0a2b', 'Feedback', 'TtHRrzTHnL', 'favicon-512x512.png', 'png', 'image/png', 175864, 512, 512, NULL, '2021-03-29 14:08:40', '2021-03-29 14:08:40');
INSERT INTO `files` VALUES (125, 'abdc230f-7d2a-498b-a509-feb80c84ae2f', 'Feedback', '0Q2tcz4U1p', 'New Text Document.txt', 'txt', 'text/plain', 4966, NULL, NULL, NULL, '2021-03-29 14:13:25', '2021-03-29 14:13:25');
INSERT INTO `files` VALUES (126, 'f11c8f38-c7b9-4a19-9fb7-75728e390f11', 'Feedback', 'gYgfrSfCCZ', 'New Text Document.txt', 'txt', 'text/plain', 4966, NULL, NULL, NULL, '2021-03-29 14:20:12', '2021-03-29 14:20:12');
INSERT INTO `files` VALUES (127, '52efc5ca-1781-4dcb-acfc-07d67762b98b', 'Feedback', '6iLn6U9nbA', 'New Text Document.txt', 'txt', 'text/plain', 4966, NULL, NULL, NULL, '2021-03-29 14:30:43', '2021-03-29 14:30:43');
INSERT INTO `files` VALUES (128, '238d2391-61a6-412c-8480-8ff2a794ad41', 'Feedback', '4Od8en99FY', 'New Text Document.txt', 'txt', 'text/plain', 4966, NULL, NULL, NULL, '2021-03-29 14:49:10', '2021-03-29 14:49:10');
INSERT INTO `files` VALUES (129, 'f4648576-735c-47f1-8166-e17a5112c2c3', 'Feedback', 'juo73C0r1f', 'test.txt', 'txt', 'text/plain', 351, NULL, NULL, NULL, '2021-03-30 00:18:18', '2021-03-30 00:18:18');
INSERT INTO `files` VALUES (130, 'c3d97b0d-bb27-4e05-a2cd-0aac01ab7f8b', 'Feedback', 'DMaFqn2Qz0', 'test.txt', 'txt', 'text/plain', 351, NULL, NULL, NULL, '2021-03-30 00:18:41', '2021-03-30 00:18:41');
INSERT INTO `files` VALUES (131, '8d491a3a-da2e-4982-8cbc-2869b7b5e6c7', 'Feedback', 'KzenTZtnvr', 'test.txt', 'txt', 'text/plain', 351, NULL, NULL, NULL, '2021-03-30 00:18:47', '2021-03-30 00:18:47');
INSERT INTO `files` VALUES (132, 'a037fc40-8dc8-486a-afce-1bb9ba5a060f', 'Feedback', '9hmxnKt4eq', 'test.txt', 'txt', 'text/plain', 351, NULL, NULL, NULL, '2021-03-30 00:18:53', '2021-03-30 00:18:53');
INSERT INTO `files` VALUES (133, '8f2eeeee-61fa-4675-9c25-5b31f41c5d41', 'Feedback', 'N8tVJMUHbX', 'furylion.net – [...slug].tsx Administrator 2021-03.png', 'png', 'image/png', 170758, 1366, 768, NULL, '2021-03-30 00:24:31', '2021-03-30 00:24:31');
INSERT INTO `files` VALUES (134, 'cce84ddc-efe9-4191-a0d1-05921621c541', 'Feedback', 'FyfvoDFXno', 'furylion.net – [...slug].tsx Administrator 2021-03.png', 'png', 'image/png', 170758, 1366, 768, NULL, '2021-03-30 00:27:36', '2021-03-30 00:27:36');
INSERT INTO `files` VALUES (135, '1d0a479c-b66c-409f-89ef-b644eaad4ed8', 'Feedback', '1dAqUz3agu', 'furylion.net – [...slug].tsx Administrator 2021-03.png', 'png', 'image/png', 170758, 1366, 768, NULL, '2021-03-30 00:28:25', '2021-03-30 00:28:25');
INSERT INTO `files` VALUES (136, '3a27cc27-751d-4bac-89fb-137f1acaa9d7', 'Feedback', 'NpHLwb3rzZ', 'furylion.net – [...slug].tsx Administrator 2021-03.png', 'png', 'image/png', 170758, 1366, 768, NULL, '2021-03-30 00:40:56', '2021-03-30 00:40:56');
INSERT INTO `files` VALUES (137, 'b7acb6c4-a163-42c2-974e-3ab6fb462f68', 'Feedback', '7XnfuAg9rm', 'furylion.net – [...slug].tsx Administrator 2021-03.png', 'png', 'image/png', 170758, 1366, 768, NULL, '2021-03-30 00:41:08', '2021-03-30 00:41:08');
INSERT INTO `files` VALUES (138, '76934610-cb64-4e14-b09c-d08782ff3e3e', 'Feedback', 'QZTCZxZTTG', 'furylion.net – [...slug].tsx Administrator 2021-03.png', 'png', 'image/png', 170758, 1366, 768, NULL, '2021-03-30 01:19:50', '2021-03-30 01:19:50');
INSERT INTO `files` VALUES (139, '525e1df6-e074-42ea-869e-2e4285f205de', 'Feedback', 'oFUXTWkNh0', 'furylion.net – [...slug].tsx Administrator 2021-03.png', 'png', 'image/png', 170758, 1366, 768, NULL, '2021-03-30 01:29:25', '2021-03-30 01:29:25');
INSERT INTO `files` VALUES (140, 'b65fabe5-19bc-4fab-acff-463ccd4c2a5c', 'Feedback', 'ug718LE6qw', 'furylion.net – [...slug].tsx Administrator 2021-03.png', 'png', 'image/png', 170758, 1366, 768, NULL, '2021-03-30 01:45:21', '2021-03-30 01:45:21');
INSERT INTO `files` VALUES (141, '99d9cb4f-e770-4227-9770-2cace579c0d9', 'Feedback', 'RUtxUfnfg2', '0_7Ro6rq6z52PZ1pmL.png', 'png', 'image/png', 212126, 700, 350, NULL, '2021-03-30 09:58:41', '2021-03-30 09:58:41');
INSERT INTO `files` VALUES (142, '6ba3cd4b-fe6d-4608-90b8-0e2e60ad4c72', 'Feedback', 'PK4juc9d2R', '1_izAQxr6CAuV578ENirDpMA.jpeg', 'jpeg', 'image/jpeg', 300205, 2000, 1000, NULL, '2021-03-30 11:25:19', '2021-03-30 11:25:19');
INSERT INTO `files` VALUES (143, 'a9a51df0-d8ea-4a0b-8f97-4815d0cc59db', 'Feedback', 'AQeAjZh98j', 'C064E20A-DF6F-43FD-9E3B-5840FF32E498.png', 'png', 'image/png', 3629572, 1125, 2436, NULL, '2021-03-31 07:28:19', '2021-03-31 07:28:19');
INSERT INTO `files` VALUES (144, 'bd130495-0e7e-48a2-807c-6d761628ff61', NULL, 'mViFJR8jAf', 'Group 660.png', 'png', 'image/png', 4876, 146, 49, NULL, '2021-03-31 15:03:27', '2021-03-31 15:03:27');
INSERT INTO `files` VALUES (145, '025f8e2d-6bf0-4d61-a516-a977b1ba1f2e', NULL, 'nRQs33TnM7', 'Group 660.png', 'png', 'image/png', 9699, 291, 98, NULL, '2021-03-31 15:03:42', '2021-03-31 15:03:42');
INSERT INTO `files` VALUES (146, 'f9cb56e8-7316-4a31-aba4-817a7d96bab9', 'home-technologies-gallery', 'eDTZfzpPPQ', 'Group 663.png', 'png', 'image/png', 4809, 146, 49, NULL, '2021-03-31 15:10:19', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (147, 'a3a1ef92-f45d-44d5-863e-73a9ecb40548', 'Feedback', 'nYFTna70QD', 'Home_Android - 6.jpg', 'jpg', 'image/jpeg', 1858233, 360, 8039, NULL, '2021-04-01 04:57:08', '2021-04-01 04:57:08');
INSERT INTO `files` VALUES (148, '45f249e8-25e9-4b89-9fd4-08226ba84765', NULL, 'zlooLTBBqv', 'Rectangle 651.png', 'png', 'image/png', 193027, 313, 439, NULL, '2021-04-02 10:05:53', '2021-04-02 10:05:53');
INSERT INTO `files` VALUES (149, 'e170998b-8140-4c8c-ac1d-7a25ce5895c9', NULL, 'x8yM3IoT9S', 'Rectangle 18.png', 'png', 'image/png', 189119, 313, 439, NULL, '2021-04-02 10:13:42', '2021-04-02 10:13:42');
INSERT INTO `files` VALUES (150, '639b587e-b305-488a-a97b-8dc52502d60e', NULL, 'wwFchdxLE1', 'Rectangle 650.png', 'png', 'image/png', 198518, 313, 439, NULL, '2021-04-02 10:18:23', '2021-04-02 10:18:23');
INSERT INTO `files` VALUES (151, '1bd586c7-f1bb-49fd-b473-5b50ae7dedf5', NULL, 'Nm16ybGREw', 'Rectangle 651.png', 'png', 'image/png', 193117, 313, 439, NULL, '2021-04-02 10:22:47', '2021-04-02 10:22:47');
INSERT INTO `files` VALUES (152, '4ae982e7-3d45-45f0-8002-ec9ece6b90f8', NULL, 'FLzSe5jG0X', 'Rectangle 18.png', 'png', 'image/png', 189119, 313, 439, NULL, '2021-04-02 10:23:12', '2021-04-02 10:23:12');
INSERT INTO `files` VALUES (153, 'fae13afc-929b-4883-9444-cdf78e9aec05', NULL, 'IL5oNFyyIE', 'image 16.png', 'png', 'image/png', 7852, 163, 84, NULL, '2021-04-02 14:47:11', '2021-04-02 14:47:11');
INSERT INTO `files` VALUES (154, '75591a33-67d0-4a01-afda-47ef32fcc46a', NULL, 'gdQVUaHhAT', 'Group 663.png', 'png', 'image/png', 4809, 146, 49, NULL, '2021-04-02 14:47:18', '2021-04-02 14:47:18');
INSERT INTO `files` VALUES (155, 'cf5cfd66-de8c-4222-9128-aa975dec50c9', 'Feedback', 'GD81NbtbOg', 'CV Иван.pdf', 'pdf', 'application/pdf', 200516, NULL, NULL, NULL, '2021-04-04 09:54:51', '2021-04-04 09:54:51');
INSERT INTO `files` VALUES (156, '3d54e648-74b8-40b3-9211-faa8234ff936', 'head-image', '8Fk2thas3f', 'header-bg.png', 'png', 'image/png', 73936, 313, 277, NULL, '2021-04-07 14:56:51', '2021-04-07 14:56:51');
INSERT INTO `files` VALUES (157, '7f8305aa-f567-47dd-b7e7-f82c97666c2f', 'head-image', 'nRj41WlxRa', 'header-bg.png', 'png', 'image/png', 73936, 313, 277, NULL, '2021-04-07 15:06:20', '2021-04-07 15:06:20');
INSERT INTO `files` VALUES (158, '1c47b5aa-3167-40b2-9085-b9b87161f4f6', NULL, 'FnsYnqd9FL', 'nRj41WlxRa.png', 'png', 'image/png', 73936, 313, 277, NULL, '2021-04-07 15:25:04', '2021-04-07 15:25:04');
INSERT INTO `files` VALUES (159, 'e57508a5-1a3c-4d9a-a62b-dd55e36ea47f', NULL, 'ke4Pv27JAe', 'header-bg.png', 'png', 'image/png', 73936, 313, 277, NULL, '2021-04-07 15:26:37', '2021-04-07 15:26:37');
INSERT INTO `files` VALUES (160, 'a90ddc5b-c886-47a1-8272-e2580e0f3e01', NULL, 'BD0RMQpXFB', 'Rectangle 650.png', 'png', 'image/png', 198518, 313, 439, NULL, '2021-04-08 14:12:43', '2021-04-08 14:12:43');
INSERT INTO `files` VALUES (161, '73b4da1b-9679-4dff-955d-c6382fa3de14', 'Feedback', 'b4ckbnYa2x', '.gitignore', 'gitignore', 'text/plain', 20, NULL, NULL, NULL, '2021-04-09 06:58:57', '2021-04-09 06:58:57');
INSERT INTO `files` VALUES (162, '6deb375c-df16-4102-b769-e580f1c0d3df', 'Feedback', 'pwgjGaS7V8', 'Home_Android - 6.jpg', 'jpg', 'image/jpeg', 1858233, 360, 8039, NULL, '2021-04-09 09:33:37', '2021-04-09 09:33:37');
INSERT INTO `files` VALUES (163, 'da049fe4-55a9-4245-973c-d90442a25b8d', 'Feedback', 'xUxVVH56s5', 'Desktop_1366 - 78.jpg', 'jpg', 'image/jpeg', 4950072, 1366, 8118, NULL, '2021-04-09 12:45:09', '2021-04-09 12:45:09');
INSERT INTO `files` VALUES (164, '161d2701-d722-4b4a-973e-9968ce509352', 'Feedback', 'id52ol1rdX', 'vacancies_Desktop_1366 - 81.jpg', 'jpg', 'image/jpeg', 3258405, 1366, 5231, NULL, '2021-04-09 12:53:00', '2021-04-09 12:53:00');
INSERT INTO `files` VALUES (165, '372ee46f-facb-47c7-8e40-d5b80924aa66', 'Feedback', '23MqocB4RA', '87ab2b65617157e8fdb3eae9f9c35811.jpg', 'jpg', 'image/jpeg', 36982, 293, 195, NULL, '2021-04-13 14:20:04', '2021-04-13 14:20:04');
INSERT INTO `files` VALUES (166, '315b4420-b27a-468d-a459-60e9f18bca24', NULL, 'QVHRlOwzLK', '170017561_812271383002629_1230329484517613914_n.jpg', 'jpg', 'image/jpeg', 274580, 1440, 1800, NULL, '2021-04-15 15:59:45', '2021-04-15 15:59:45');
INSERT INTO `files` VALUES (167, 'e16a32b3-1fc3-4efc-a90a-b755c9de58fa', NULL, 'ftoVu20bHa', '156598724_500524574671634_3144983420311713221_n.jpg', 'jpg', 'image/jpeg', 282254, 1440, 1440, NULL, '2021-04-15 15:59:45', '2021-04-15 15:59:45');
INSERT INTO `files` VALUES (168, '6575b95f-505b-42ea-b61f-883b31d506c0', NULL, 'B7fG1SU4Na', '155582396_990958755046295_4926297148869756804_n.jpg', 'jpg', 'image/jpeg', 144764, 1440, 1440, NULL, '2021-04-15 15:59:45', '2021-04-15 15:59:45');
INSERT INTO `files` VALUES (169, 'd943ca90-c6a9-4312-839a-24e66e63acf5', NULL, 'S1OQK0RaQJ', '147447915_118058180243072_3326394703589526343_n.jpg', 'jpg', 'image/jpeg', 150856, 960, 720, NULL, '2021-04-15 15:59:46', '2021-04-15 15:59:46');
INSERT INTO `files` VALUES (170, 'eaf7adcb-a48b-4cc5-8211-ded530c05e4c', NULL, 'snde1nOIqz', '133871686_545000873126180_3962927898484782123_n.jpg', 'jpg', 'image/jpeg', 282541, 1440, 1800, NULL, '2021-04-15 15:59:46', '2021-04-15 15:59:46');
INSERT INTO `files` VALUES (171, '850c68dd-4dbd-45e7-81a1-c55feeec5884', NULL, 'uHbZCCPK8U', '130823889_215210420128812_2320214310577326045_n.jpg', 'jpg', 'image/jpeg', 115597, 1280, 1280, NULL, '2021-04-15 15:59:46', '2021-04-15 15:59:46');
INSERT INTO `files` VALUES (172, 'ecd5815f-8e30-4be0-8a9e-d73c83848107', NULL, 'GUqgu0J76A', '170017561_812271383002629_1230329484517613914_n.jpg', 'jpg', 'image/jpeg', 274580, 1440, 1800, NULL, '2021-04-16 09:11:23', '2021-04-16 09:11:23');
INSERT INTO `files` VALUES (173, '5c8af8ff-72a2-4ffa-b202-abc058e1150c', NULL, 'Lkmv3cpDdW', '156598724_500524574671634_3144983420311713221_n.jpg', 'jpg', 'image/jpeg', 282254, 1440, 1440, NULL, '2021-04-16 09:11:23', '2021-04-16 09:11:23');
INSERT INTO `files` VALUES (174, '4187e651-a457-4746-9d4d-ec33f880627f', NULL, '8BmsyH2ULv', '155582396_990958755046295_4926297148869756804_n.jpg', 'jpg', 'image/jpeg', 144764, 1440, 1440, NULL, '2021-04-16 09:11:24', '2021-04-16 09:11:24');
INSERT INTO `files` VALUES (175, 'f9db5039-af9e-4853-a1cf-1c269c20aead', NULL, 'MEEannzPAC', '147447915_118058180243072_3326394703589526343_n.jpg', 'jpg', 'image/jpeg', 150856, 960, 720, NULL, '2021-04-16 09:11:24', '2021-04-16 09:11:24');
INSERT INTO `files` VALUES (176, '08863fab-b338-4ab5-a154-a9f576f1a44c', NULL, 'wz4WlzJ4Y9', '133871686_545000873126180_3962927898484782123_n.jpg', 'jpg', 'image/jpeg', 282541, 1440, 1800, NULL, '2021-04-16 09:11:25', '2021-04-16 09:11:25');
INSERT INTO `files` VALUES (177, '0efeea69-4025-4d16-b2b9-8617cac220cc', NULL, '9PXZgRZVgu', '130823889_215210420128812_2320214310577326045_n.jpg', 'jpg', 'image/jpeg', 115597, 1280, 1280, NULL, '2021-04-16 09:11:25', '2021-04-16 09:11:25');
INSERT INTO `files` VALUES (178, '6344bbe0-32dd-4f52-88e1-45b0f70839ff', NULL, 'aj4GSkIsuH', 'FuryLion development – Figma - Google Chrome 2021-.png', 'png', 'image/png', 337750, 644, 776, NULL, '2021-04-16 12:44:39', '2021-04-16 12:44:39');
INSERT INTO `files` VALUES (179, 'e1b2a501-ca61-4f96-afe5-334e44bf4c4c', NULL, '3b5KTL6H6Y', 'FuryLion development – Figma - Google Chrome 2021-.png', 'png', 'image/png', 337750, 644, 776, NULL, '2021-04-16 12:44:44', '2021-04-16 12:44:44');
INSERT INTO `files` VALUES (180, 'fd0cd48c-52d1-4ae2-b666-8149cee225ab', NULL, 'dVqoUZWhWE', 'ik30f35yB7.png', 'png', 'image/png', 34552, 293, 195, NULL, '2021-04-16 15:54:51', '2021-04-16 15:54:51');
INSERT INTO `files` VALUES (181, 'c742f84f-1ee4-4f5b-90a9-2273a68b47c5', NULL, '8IsdDxnEKS', 'ik30f35yB7.png', 'png', 'image/png', 34552, 293, 195, NULL, '2021-04-16 15:54:56', '2021-04-16 15:54:56');
INSERT INTO `files` VALUES (182, 'a5fd13aa-85ed-4609-8ccd-d71f43e09de6', NULL, 'MBDQmaruTK', 'Rectangle 726.png', 'png', 'image/png', 1161858, 1404, 696, NULL, '2021-04-16 15:58:56', '2021-04-16 15:58:56');
INSERT INTO `files` VALUES (183, '3144a100-03c0-4a2a-891d-2712c282c91b', NULL, 'U9RQ5gCOcy', 'Rectangle 726.png', 'png', 'image/png', 1161858, 1404, 696, NULL, '2021-04-16 15:59:02', '2021-04-16 15:59:02');
INSERT INTO `files` VALUES (184, '31461fa0-2322-4eac-893a-7d9aa705d89e', NULL, 'w8bSzXGpkk', 'Rectangle 703.png', 'png', 'image/png', 437480, 632, 418, NULL, '2021-04-16 15:59:32', '2021-04-16 15:59:32');
INSERT INTO `files` VALUES (185, 'ebac5a7b-6d40-4083-a51c-1682c6a6e960', NULL, 'dlkmEm0gwr', 'Rectangle 728.png', 'png', 'image/png', 482356, 712, 411, NULL, '2021-04-16 16:00:00', '2021-04-16 16:00:00');
INSERT INTO `files` VALUES (186, '0a1f72a9-add7-41ca-aa3c-763839ac07f4', NULL, 'kvCUUwILpS', 'Rectangle 727.png', 'png', 'image/png', 477521, 733, 411, NULL, '2021-04-16 16:00:27', '2021-04-16 16:00:27');
INSERT INTO `files` VALUES (187, 'ddb45002-705e-4b9b-a9d0-72a813bd67e2', NULL, 'a5UkRRqyJn', 'Rectangle 1.png', 'png', 'image/png', 57373, 397, 219, NULL, '2021-04-16 16:01:57', '2021-04-16 16:01:57');
INSERT INTO `files` VALUES (188, 'c3b3f576-9b6e-40c9-a4bc-8b2660f1bde1', NULL, 'tREcUGYjYh', 'Rectangle 2.png', 'png', 'image/png', 89715, 395, 219, NULL, '2021-04-16 16:02:59', '2021-04-16 16:02:59');
INSERT INTO `files` VALUES (189, '12fab34e-f3e3-4ea8-b34b-3673d0f4b32e', NULL, 'CfTaHLre7T', 'Rectangle 3.png', 'png', 'image/png', 170804, 397, 219, NULL, '2021-04-16 16:03:15', '2021-04-16 16:03:15');
INSERT INTO `files` VALUES (190, 'ff24ad8a-e1fb-499f-9dc4-586ac1c41b45', NULL, 'szlT668Fkp', 'Rectangle 3.png', 'png', 'image/png', 170804, 397, 219, NULL, '2021-04-16 16:05:37', '2021-04-16 16:05:37');
INSERT INTO `files` VALUES (191, 'e4dc5041-1231-48d7-9db8-db667560dd44', NULL, 'xscaktFE7f', 'Rectangle 2.png', 'png', 'image/png', 89715, 395, 219, NULL, '2021-04-16 16:05:39', '2021-04-16 16:05:39');
INSERT INTO `files` VALUES (192, '955aaa8d-7360-4de5-a38a-73073841043f', NULL, 'qgjZI4q7o6', 'Rectangle 1.png', 'png', 'image/png', 57373, 397, 219, NULL, '2021-04-16 16:05:43', '2021-04-16 16:05:43');
INSERT INTO `files` VALUES (193, 'c71a4a73-5a30-434b-8a9e-ceae7fa3b58d', NULL, '56RWn6CU9F', 'Rectangle 728 (1).png', 'png', 'image/png', 482356, 712, 411, NULL, '2021-04-16 16:05:46', '2021-04-16 16:05:46');
INSERT INTO `files` VALUES (194, 'fd023397-e01d-4beb-80ff-860273be5b48', NULL, 's9Sdipouhj', 'Rectangle 2.png', 'png', 'image/png', 89715, 395, 219, NULL, '2021-04-16 16:05:50', '2021-04-16 16:05:50');
INSERT INTO `files` VALUES (195, 'b00cc3a7-370d-488b-9f03-1d0edae9f2b4', NULL, '7kEgssFoO8', 'Rectangle 728 (1).png', 'png', 'image/png', 482356, 712, 411, NULL, '2021-04-16 16:05:53', '2021-04-16 16:05:53');
INSERT INTO `files` VALUES (196, '119bec38-71e3-4a05-88d0-30c1bf52dcb6', NULL, 'TecR1K7m71', 'Rectangle 728 (1).png', 'png', 'image/png', 482356, 712, 411, NULL, '2021-04-16 16:05:56', '2021-04-16 16:05:56');
INSERT INTO `files` VALUES (197, '99ef218c-1c37-4339-9afb-a74c0cb53ab3', NULL, 'IhupNmrIGE', 'logo.png', 'png', 'image/png', 4280, 222, 50, NULL, '2021-04-16 16:06:33', '2021-04-16 16:06:33');
INSERT INTO `files` VALUES (198, '65b1c18b-a2c2-40b9-82d1-376f3666a648', NULL, 'jpiExElrQy', 'image 19.png', 'png', 'image/png', 9146, 198, 72, NULL, '2021-04-16 16:06:36', '2021-04-16 16:06:36');
INSERT INTO `files` VALUES (199, 'e1b3b29b-4199-4b12-a70c-8256a84fa518', NULL, 'YzAGBrnZGZ', 'Изображение_верблюда.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-18 00:27:21', '2021-04-18 00:27:21');
INSERT INTO `files` VALUES (200, '21fd50ce-1c1b-4fad-a8ea-5cd81cce12d4', NULL, 'UctqoIza3v', 'Изображение_верблюда.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-18 00:27:26', '2021-04-18 00:27:26');
INSERT INTO `files` VALUES (201, '73d03100-85a8-44fe-a19b-7caefa83e15f', NULL, 'j4neuYAkFX', 'Изображение_верблюда.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-18 12:49:08', '2021-04-18 12:49:08');
INSERT INTO `files` VALUES (202, 'a9f23993-73ef-48be-8552-7e46b2e4a567', NULL, 'p4b8IMXbIy', 'Изображение_верблюда.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-18 12:49:11', '2021-04-18 12:49:11');
INSERT INTO `files` VALUES (203, '37368abc-c6f8-4b84-8a0e-1f65f56ad52e', NULL, 'i2bv5NDoEZ', 'Group 846.png', 'png', 'image/png', 32808, 625, 360, NULL, '2021-04-18 17:54:23', '2021-04-18 17:54:23');
INSERT INTO `files` VALUES (204, '553447e5-df09-488e-b5c5-5cd202f84c99', NULL, 'iRzGt24iny', 'Rectangle 728.jpg', 'jpg', 'image/jpeg', 328153, 712, 411, NULL, '2021-04-18 18:16:20', '2021-04-18 18:16:20');
INSERT INTO `files` VALUES (205, '82a87540-8f86-476e-afbd-b81e31903e71', 'services-production-media', 'KUO79oBnVK', 'Rectangle 726.jpg', 'jpg', 'image/jpeg', 297410, 813, 411, NULL, '2021-04-18 18:16:41', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (206, 'f44b9628-e0f4-464c-aee6-5c9e6a259798', 'services-production-media', 'Oa2UrACKUz', 'Rectangle 703.jpg', 'jpg', 'image/jpeg', 356136, 824, 411, NULL, '2021-04-18 18:17:09', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (207, '00a583a9-9e35-4a48-a4f7-9a1983ea5932', NULL, '0PQ5IP02Jj', 'Rectangle 727.jpg', 'jpg', 'image/jpeg', 310032, 818, 411, NULL, '2021-04-18 18:17:16', '2021-04-18 18:17:16');
INSERT INTO `files` VALUES (208, '4c64ed71-12e9-45ca-a7b0-299752e32432', NULL, 'm8OW6HKHRa', 'Rectangle 728.jpg', 'jpg', 'image/jpeg', 328153, 712, 411, NULL, '2021-04-18 18:17:21', '2021-04-18 18:17:21');
INSERT INTO `files` VALUES (209, '1dc279d5-90b4-47a9-a828-9976cab73c6f', 'services-production-media', '5bGGnIcFq0', 'Rectangle 728.jpg', 'jpg', 'image/jpeg', 328153, 712, 411, NULL, '2021-04-18 18:17:39', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (210, '4d5e74f3-6f64-46a7-9854-ebf02a49d716', 'services-production-media', 'UFbiAtiTtN', 'Rectangle 727.jpg', 'jpg', 'image/jpeg', 310032, 818, 411, NULL, '2021-04-18 18:17:46', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (211, '3b590a0b-aa1c-4411-966b-65f44ab239fc', NULL, 'vmiOQJZMwx', 'apple.png', 'png', 'image/png', 1398, 144, 33, NULL, '2021-04-18 20:23:46', '2021-04-18 20:23:46');
INSERT INTO `files` VALUES (212, '5e19fa52-46f3-4eb7-a321-61d74addde4c', NULL, 'XwvIql3V7S', 'google.png', 'png', 'image/png', 1687, 159, 34, NULL, '2021-04-18 20:24:30', '2021-04-18 20:24:30');
INSERT INTO `files` VALUES (213, '62c954d3-1621-4eae-8627-6525c8e2c0ab', NULL, 'V02aiFAhVS', 'apple.png', 'png', 'image/png', 1398, 144, 33, NULL, '2021-04-18 20:24:44', '2021-04-18 20:24:44');
INSERT INTO `files` VALUES (214, '24dafb47-22f4-436b-b1db-c94e7be12bbc', NULL, 'XEN0ibMFUT', 'nintendo.png', 'png', 'image/png', 1968, 203, 32, NULL, '2021-04-18 20:25:08', '2021-04-18 20:25:08');
INSERT INTO `files` VALUES (215, 'df154a8f-c6cb-463a-8f77-f5f32bb0f8ba', NULL, '71S999vwaT', 'apple.png', 'png', 'image/png', 1398, 144, 33, NULL, '2021-04-18 20:25:16', '2021-04-18 20:25:16');
INSERT INTO `files` VALUES (216, 'e7fe5d6c-b296-4854-9870-4d1621fd8e65', NULL, 'wy70xvQf4v', 'google.png', 'png', 'image/png', 1687, 159, 34, NULL, '2021-04-18 20:25:55', '2021-04-18 20:25:55');
INSERT INTO `files` VALUES (217, '5f4d7f53-b15c-4cab-b171-a49607127768', NULL, 'j6QHgGn5uN', 'nintendo.png', 'png', 'image/png', 1968, 203, 32, NULL, '2021-04-18 20:26:00', '2021-04-18 20:26:00');
INSERT INTO `files` VALUES (218, '7ce94177-e6eb-4499-b7f7-fb3ac1077b41', 'services-co-development-logos', 'Cp9kyEkwmq', 'logo.png', 'png', 'image/png', 4249, 222, 50, NULL, '2021-04-19 09:43:40', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (219, 'ff21befa-de37-4740-a3e0-c9668109ca74', 'services-co-development-logos', 'Qw8jFildcO', 'image 19.png', 'png', 'image/png', 9063, 198, 72, NULL, '2021-04-19 09:43:44', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (220, 'f86a9ea8-719a-4960-9ddc-950a3e7b3252', NULL, 'vvVzdgkt2P', 'Frame 665.png', 'png', 'image/png', 933643, 2231, 893, NULL, '2021-04-19 13:19:56', '2021-04-19 13:19:56');
INSERT INTO `files` VALUES (221, '43109d65-9fc9-44b7-8924-f5f10880185f', NULL, 'KrazuHYNkZ', 'i2bv5NDoEZ-edit.png', 'png', 'image/png', 22537, 605, 354, NULL, '2021-04-20 09:43:49', '2021-04-20 09:43:49');
INSERT INTO `files` VALUES (222, '3ecc70ce-72ae-45e1-9d85-e4263ae50bc8', 'services-porting', 'UtIdyrIQeu', 'i2bv5NDoEZ-edit.png', 'png', 'image/png', 22664, 605, 360, NULL, '2021-04-20 09:47:09', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (223, 'e41c0204-6b64-409f-b590-340a5f984c3f', NULL, 'e7ljy8dToe', 'FO U.png', 'png', 'image/png', 399365, 1104, 1104, NULL, '2021-04-21 09:44:39', '2021-04-21 09:44:39');
INSERT INTO `files` VALUES (224, 'beee16dd-2969-4310-a623-7ef859b61849', NULL, 'SR8Jiob16g', 'SERVICES Android - 9.png', 'png', 'image/png', 1818346, 360, 12125, NULL, '2021-04-21 10:09:16', '2021-04-21 10:09:16');
INSERT INTO `files` VALUES (225, 'e02f9a9e-08f0-4ce8-82ad-7c4283619afc', NULL, '78wyiS3HIb', 'SERVICES iPad mini - 3.png', 'png', 'image/png', 2980201, 768, 11457, NULL, '2021-04-21 10:09:20', '2021-04-21 10:09:20');
INSERT INTO `files` VALUES (226, 'a12693d9-71eb-43a1-9712-50095b17442b', 'services-ads', 'PoHkLsNdtu', 'FO U 5.jpg', 'jpg', 'image/jpeg', 157306, 497, 1065, NULL, '2021-04-21 10:20:05', '2021-05-17 19:16:04');
INSERT INTO `files` VALUES (227, '14ea0023-3a5c-433d-956d-65dc2c4cc98c', 'services-ads', 'dGclDvT2I4', 'FO U 2.jpg', 'jpg', 'image/jpeg', 151288, 497, 1065, NULL, '2021-04-21 10:20:05', '2021-05-17 19:16:04');
INSERT INTO `files` VALUES (228, '6dc2ac04-34fe-4f1e-be6d-8e0e91d388e1', 'services-ads', 'DwL5WUMmHU', 'FO U 3.jpg', 'jpg', 'image/jpeg', 207538, 497, 1065, NULL, '2021-04-21 10:20:05', '2021-05-17 19:16:04');
INSERT INTO `files` VALUES (229, '9d533bf8-07e6-4c7c-8116-fa6e2388db6e', 'services-ads', 'Zn1AngXMfb', 'FO U.jpg', 'jpg', 'image/jpeg', 240562, 496, 1064, NULL, '2021-04-21 10:20:05', '2021-05-17 19:16:04');
INSERT INTO `files` VALUES (230, '0125a14e-3964-4640-91b8-790a70c7b5ae', 'services-ads', 'DwKulWYaa0', 'FO U 6.jpg', 'jpg', 'image/jpeg', 354349, 497, 1065, NULL, '2021-04-21 10:20:06', '2021-05-17 19:16:04');
INSERT INTO `files` VALUES (231, '3146ec9a-a1d1-41e0-8458-ec1eeb48d23d', 'services-ads', '3bWDAJRrks', 'FO U 7.jpg', 'jpg', 'image/jpeg', 333516, 496, 1064, NULL, '2021-04-21 10:20:06', '2021-05-17 19:16:04');
INSERT INTO `files` VALUES (232, '3902f853-3b94-4b4c-9c31-ca2a16bdef74', 'services-ads', 'O7nEDSSeSR', 'FO U 4.jpg', 'jpg', 'image/jpeg', 541941, 745, 1597, NULL, '2021-04-21 10:20:06', '2021-05-17 19:16:04');
INSERT INTO `files` VALUES (233, 'c3e821d5-b378-4774-a5dc-2e61b9a77824', NULL, '3S4lqvMBYr', 'FO U.jpg', 'jpg', 'image/jpeg', 170629, 295, 638, NULL, '2021-04-25 22:08:03', '2021-04-25 22:08:03');
INSERT INTO `files` VALUES (234, '7c39f83a-f1f6-4aaf-90da-d0cf3e25a388', NULL, 'QTQF8RJpgZ', 'FO U.jpg', 'jpg', 'image/jpeg', 83943, 295, 638, NULL, '2021-04-25 22:08:11', '2021-04-25 22:08:11');
INSERT INTO `files` VALUES (235, 'd42d3f7b-6985-4f40-96d5-56dec03ecfa0', NULL, '5HeTWobrq0', 'FO U.jpg', 'jpg', 'image/jpeg', 184889, 295, 638, NULL, '2021-04-25 22:08:18', '2021-04-25 22:08:18');
INSERT INTO `files` VALUES (236, '9fbafd46-c739-4bb6-8d40-951ace6805db', NULL, 'eX9e9wAFci', 'FO U.jpg', 'jpg', 'image/jpeg', 102823, 295, 638, NULL, '2021-04-25 22:08:32', '2021-04-25 22:08:32');
INSERT INTO `files` VALUES (237, '6820414c-6412-496d-aa54-772d27dd6835', NULL, 'v0FsVtmZVb', 'FO U.jpg', 'jpg', 'image/jpeg', 149122, 295, 638, NULL, '2021-04-25 22:09:02', '2021-04-25 22:09:02');
INSERT INTO `files` VALUES (238, 'b686eb61-132a-4953-8837-11ae0b19f0e7', NULL, 'YoQSu5btcj', 'Frame 667.png', 'png', 'image/png', 11508, 709, 420, NULL, '2021-04-25 22:33:00', '2021-04-25 22:33:00');
INSERT INTO `files` VALUES (239, 'dbc3cd74-8f29-4b9e-8555-b93797be86c3', NULL, 'bumZMxR73N', 'Home 1.png', 'png', 'image/png', 10779, 350, 67, NULL, '2021-04-26 08:51:06', '2021-04-26 08:51:06');
INSERT INTO `files` VALUES (240, '45043550-61cd-4c3b-aa76-af818e084ca3', NULL, '7SI0p4lEJi', 'image 67.png', 'png', 'image/png', 9394, 292, 76, NULL, '2021-04-26 08:51:06', '2021-04-26 08:51:06');
INSERT INTO `files` VALUES (241, 'eaf85a97-f559-432e-bc33-2e9b2c7aeecf', NULL, 'IMCZ9rNPVg', 'Group.png', 'png', 'image/png', 14837, 1019, 61, NULL, '2021-04-26 08:51:06', '2021-04-26 08:51:06');
INSERT INTO `files` VALUES (242, 'aa42815e-4cb1-45df-9c1c-bd107e7a1abd', NULL, 'qZQZKq6Tnw', 'Google Ads.png', 'png', 'image/png', 7283, 576, 107, NULL, '2021-04-26 08:51:06', '2021-04-26 08:51:06');
INSERT INTO `files` VALUES (243, '9e749654-5aaf-49db-a3b6-99bb787b9504', NULL, 'f3tH77JNcC', 'surface1.png', 'png', 'image/png', 5713, 319, 151, NULL, '2021-04-26 08:52:07', '2021-04-26 08:52:07');
INSERT INTO `files` VALUES (244, '1c5d1e5a-d42a-43cc-8b5c-9f691bb361d5', NULL, 'jQYubEGsAN', 'Layer 2.png', 'png', 'image/png', 7323, 693, 125, NULL, '2021-04-26 08:52:07', '2021-04-26 08:52:07');
INSERT INTO `files` VALUES (245, '90776048-4a63-4729-ac17-47ecd7232689', NULL, 'JAjgRwAGp8', 'Group (2).png', 'png', 'image/png', 5046, 404, 117, NULL, '2021-04-26 08:52:07', '2021-04-26 08:52:07');
INSERT INTO `files` VALUES (246, '09c0130a-545c-4100-8185-f8ba29e19980', NULL, 'dUSQvjrELz', 'Без названия (23) 1.png', 'png', 'image/png', 25245, 730, 151, NULL, '2021-04-26 08:52:07', '2021-04-26 08:52:07');
INSERT INTO `files` VALUES (247, 'a1db8b45-3400-41f5-bc35-87f2299dee9d', NULL, 'wl2X9cYpvQ', 'Mask Group (1).png', 'png', 'image/png', 5357541, 2732, 1932, NULL, '2021-04-26 08:56:31', '2021-04-26 08:56:31');
INSERT INTO `files` VALUES (248, '71bdbace-6ba9-468c-8f8a-ed5cc8eeeaa7', NULL, 'qhxUtNSDMo', 'Mask Group (2).png', 'png', 'image/png', 6376105, 3427, 2219, NULL, '2021-04-26 08:59:22', '2021-04-26 08:59:22');
INSERT INTO `files` VALUES (249, '1374f094-10e7-41cc-8ea8-cb425eaf511e', NULL, 'iZkEZwgk6U', 'Ellipse 4.jpg', 'jpg', 'image/jpeg', 630, 1, 1, NULL, '2021-04-26 09:01:42', '2021-04-26 09:01:42');
INSERT INTO `files` VALUES (250, 'db8a421e-d566-497d-80c5-0d13e0c0c448', NULL, 'OLDBYhXkmB', 'Ellipse 4 (3).jpg', 'jpg', 'image/jpeg', 264576, 958, 958, NULL, '2021-04-26 09:02:10', '2021-04-26 09:02:10');
INSERT INTO `files` VALUES (251, 'f8c5d204-2d62-466c-b94e-683c74d9fa71', NULL, 'JypVtKiC5G', 'FO U.jpg', 'jpg', 'image/jpeg', 170629, 295, 638, NULL, '2021-04-26 12:23:18', '2021-04-26 12:23:18');
INSERT INTO `files` VALUES (252, 'eb695cc3-f960-4fd7-b9c4-a1325c84bfb2', NULL, 'MyCx1XfgsE', 'FO U.jpg', 'jpg', 'image/jpeg', 83943, 295, 638, NULL, '2021-04-26 12:24:20', '2021-04-26 12:24:20');
INSERT INTO `files` VALUES (253, 'ff708d8e-986a-4239-bd52-7363a8c108c0', NULL, '2VygxnNCDJ', 'FO U.jpg', 'jpg', 'image/jpeg', 184889, 295, 638, NULL, '2021-04-26 12:24:27', '2021-04-26 12:24:27');
INSERT INTO `files` VALUES (254, '4b8abb38-5524-4397-8ed1-9dcba1339954', NULL, 'fD0gwZJJH3', 'FO U.jpg', 'jpg', 'image/jpeg', 149122, 295, 638, NULL, '2021-04-26 12:24:37', '2021-04-26 12:24:37');
INSERT INTO `files` VALUES (255, '949c89a3-680c-4ec3-a097-da903c6fc530', NULL, 'GIBFM0nkMw', 'FO U.jpg', 'jpg', 'image/jpeg', 102823, 295, 638, NULL, '2021-04-26 12:24:47', '2021-04-26 12:24:47');
INSERT INTO `files` VALUES (256, 'd79b85d8-c69b-4664-9a33-0651976673b8', NULL, 'mCW0cdWyTv', 'Frame 668.png', 'png', 'image/png', 24316, 703, 351, NULL, '2021-04-26 15:55:21', '2021-04-26 15:55:21');
INSERT INTO `files` VALUES (257, 'bea174f2-1f89-42f3-82a9-9e406badd6cc', NULL, 'dqqQoqyVR3', 'Ellipse 4.jpg', 'jpg', 'image/jpeg', 39904, 257, 257, NULL, '2021-04-27 10:15:32', '2021-04-27 10:15:32');
INSERT INTO `files` VALUES (258, '95fad922-3e11-4d4c-b133-7585904517d7', NULL, 'k3Rhuv9mHq', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:00', '2021-04-27 11:16:00');
INSERT INTO `files` VALUES (259, '3812ab16-cac2-4e2c-97e2-34eee3b33c32', NULL, 'Eh0hU6wIpl', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:03', '2021-04-27 11:16:03');
INSERT INTO `files` VALUES (260, 'f002ba86-9d9e-483d-9a27-5da5c0720845', NULL, 'WNUYSKLeUv', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:06', '2021-04-27 11:16:06');
INSERT INTO `files` VALUES (261, '6a8ef0c2-0b2b-4739-89fe-eb357d90e0bc', NULL, '1g8WuqaMnM', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:09', '2021-04-27 11:16:09');
INSERT INTO `files` VALUES (262, '6eb9e582-8dcf-40ef-8fc5-fc2ddd782436', NULL, '2EXWHRZSaz', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:13', '2021-04-27 11:16:13');
INSERT INTO `files` VALUES (263, '19381e26-6e17-4e0c-a4a9-d073a1ec2884', NULL, 'i4bbrHOcTu', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:18', '2021-04-27 11:16:18');
INSERT INTO `files` VALUES (264, '666e8d5b-594b-419c-b10f-e1d085c4e69e', NULL, 'mVwpZl4J2R', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:21', '2021-04-27 11:16:21');
INSERT INTO `files` VALUES (265, '6625b025-83ba-4173-8553-66f0c82cdd7b', NULL, '2R8ZNOjyfa', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:24', '2021-04-27 11:16:24');
INSERT INTO `files` VALUES (266, 'ac4e5237-b693-4e2d-9cad-0d3bb24fb0e5', NULL, 'Ew2bX2YdpG', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:33', '2021-04-27 11:16:33');
INSERT INTO `files` VALUES (267, 'edf3f633-6653-4320-802a-14d9c2af1d4c', NULL, '4vU9ThStc5', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:35', '2021-04-27 11:16:35');
INSERT INTO `files` VALUES (268, '4b68af82-9bc4-4992-9ddd-72799e1f3247', NULL, 'XewG9U4ZQC', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:38', '2021-04-27 11:16:38');
INSERT INTO `files` VALUES (269, 'f9c2c3fd-0a3a-45c9-9f75-226d96affb56', NULL, 'y7AfiGZxtI', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:42', '2021-04-27 11:16:42');
INSERT INTO `files` VALUES (270, '54962b1a-086d-44fb-a10f-1b47d956ea59', NULL, 'rbdREpGhE7', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:45', '2021-04-27 11:16:45');
INSERT INTO `files` VALUES (271, 'd63b82c3-4dbf-4979-9121-47ea878b6fca', NULL, 'KB8fkkxXkV', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:47', '2021-04-27 11:16:47');
INSERT INTO `files` VALUES (272, '5d811b17-da74-41df-99de-a7ab82722727', NULL, '4ZDjF38KPC', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:50', '2021-04-27 11:16:50');
INSERT INTO `files` VALUES (273, 'd8661f03-93e8-499d-b44d-bfe5df27e394', NULL, 'oFUwl27Kxl', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:55', '2021-04-27 11:16:55');
INSERT INTO `files` VALUES (274, '49ab0ecd-7d23-429b-b425-5492aee6238f', NULL, 'Hy8thc5bZ8', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:16:59', '2021-04-27 11:16:59');
INSERT INTO `files` VALUES (275, '1d49a2e6-6455-42fd-bd0b-98383f595d5b', NULL, 'D4LCkDX1aD', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:17:02', '2021-04-27 11:17:02');
INSERT INTO `files` VALUES (276, 'a127e152-4257-4ee8-ad7e-6ceb36eac537', NULL, 'DKMIfnBUWd', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:17:04', '2021-04-27 11:17:04');
INSERT INTO `files` VALUES (277, 'dc4d1443-3e8f-4c05-b352-da507b9c67f7', NULL, 'UUTEhaSGmj', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:17:06', '2021-04-27 11:17:06');
INSERT INTO `files` VALUES (278, 'fb4ee496-27ac-4363-8d8f-73625d9cce7c', NULL, 'P51yfTbdPO', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:17:09', '2021-04-27 11:17:09');
INSERT INTO `files` VALUES (279, 'fda5809e-e24d-49df-84d5-94bfaa6fbcfd', NULL, 'qv0mFkQ4kv', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:17:12', '2021-04-27 11:17:12');
INSERT INTO `files` VALUES (280, '31d76290-54ac-4e24-b8dc-8346ffa37574', NULL, '7ed18uNfBl', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:17:15', '2021-04-27 11:17:15');
INSERT INTO `files` VALUES (281, 'a911b8ae-02a5-4464-9bd3-2de0765f97c2', NULL, 'Gmj7lLTY3S', 'test.jpg', 'jpg', 'image/jpeg', 569479, 2176, 1632, NULL, '2021-04-27 11:17:17', '2021-04-27 11:17:17');
INSERT INTO `files` VALUES (282, 'bb9fcd52-7e9d-4317-bc63-25bf648dd2bd', NULL, 'U83lr5lcCu', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:09', '2021-04-27 15:22:09');
INSERT INTO `files` VALUES (283, '64b2d0f1-e3d4-460a-956b-3e13415f875a', NULL, 'BvkY4Hoo6K', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:11', '2021-04-27 15:22:11');
INSERT INTO `files` VALUES (284, '47136d6e-3e6f-4a29-879b-0fb03ecb62d6', NULL, 'LcLBRb3DNs', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:13', '2021-04-27 15:22:13');
INSERT INTO `files` VALUES (285, '3818005b-278f-4155-8e1a-5ac5d31f8690', NULL, 'PhIV6POPi7', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:15', '2021-04-27 15:22:15');
INSERT INTO `files` VALUES (286, '363393be-620b-488c-b6ee-f1e5f7692bc9', NULL, 'Kpy8IJQPx1', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:17', '2021-04-27 15:22:17');
INSERT INTO `files` VALUES (287, '5bc12a31-5b21-4759-998f-09aec8f58b86', NULL, 'uHARiknhhm', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:19', '2021-04-27 15:22:19');
INSERT INTO `files` VALUES (288, '181e7bd6-3cc9-46fe-a00b-216c046afecf', NULL, 'gLSn5FhQJZ', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:21', '2021-04-27 15:22:21');
INSERT INTO `files` VALUES (289, 'fc46ea1e-6494-49b7-ad4b-370538157b00', NULL, 'hkswMC5AGd', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:23', '2021-04-27 15:22:23');
INSERT INTO `files` VALUES (290, '888f8417-4799-48e6-8a6e-a1f4a069ba67', NULL, 'fHgwme9e63', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:27', '2021-04-27 15:22:27');
INSERT INTO `files` VALUES (291, '159e7a30-3a5c-41c1-9062-595e555c36d3', NULL, 'hzp1R5z0BV', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:28', '2021-04-27 15:22:28');
INSERT INTO `files` VALUES (292, '97627e22-ea45-4367-b5eb-f26663b4da3d', NULL, 'InbIOXq9Xm', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:30', '2021-04-27 15:22:30');
INSERT INTO `files` VALUES (293, 'a1208b91-228f-4331-bdba-0b3a0d4158b2', NULL, 'sfonLcaELK', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:32', '2021-04-27 15:22:32');
INSERT INTO `files` VALUES (294, '61782939-ec88-4973-a4c4-1aef7b92ebf5', NULL, 'Eq1tVRyCYv', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:34', '2021-04-27 15:22:34');
INSERT INTO `files` VALUES (295, '0b165c05-641a-4519-9111-4da411e592aa', NULL, '9qP0zM2qQh', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:36', '2021-04-27 15:22:36');
INSERT INTO `files` VALUES (296, '6cd29fb6-10d0-4ab6-bdcc-d4556d2fb1c7', NULL, '9h04TceEjx', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:38', '2021-04-27 15:22:38');
INSERT INTO `files` VALUES (297, '2f35eb26-ea63-42e4-83ad-ff7a5c64fa4c', NULL, '1e1gw1k6lk', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:40', '2021-04-27 15:22:40');
INSERT INTO `files` VALUES (298, 'cce65228-0f34-42b2-9344-bd2d8b10d6de', NULL, 'nDcDTgPKrD', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:44', '2021-04-27 15:22:44');
INSERT INTO `files` VALUES (299, 'f8d12aa4-fbf7-463d-9eb8-d1713a248d8e', NULL, 'dBD3wlnvGt', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:47', '2021-04-27 15:22:47');
INSERT INTO `files` VALUES (300, '80c827fb-f4df-4d4c-b2f1-11aed73ffc1f', NULL, 'CS9JtgdQ2F', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:49', '2021-04-27 15:22:49');
INSERT INTO `files` VALUES (301, '3bb7c6a9-3e41-4bc0-aeda-4dcc8748693e', NULL, 'mYVEpPJk7D', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:51', '2021-04-27 15:22:51');
INSERT INTO `files` VALUES (302, '5508d307-615e-4c40-8f19-7cc268cdcd8a', NULL, 'w2Of8FUSoU', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:52', '2021-04-27 15:22:52');
INSERT INTO `files` VALUES (303, '65bdd5a9-df77-4245-a796-49455df04985', NULL, 'oFkLjc0vuo', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:55', '2021-04-27 15:22:55');
INSERT INTO `files` VALUES (304, 'cedccde0-74fb-44bc-863b-0a94b6c92be0', NULL, 'gD7iLWRZhs', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:57', '2021-04-27 15:22:57');
INSERT INTO `files` VALUES (305, '1b297071-43c3-43e9-93df-49fdd1102489', NULL, '5ubZZEUyoI', 'test-min.jpg', 'jpg', 'image/jpeg', 19215, 400, 300, NULL, '2021-04-27 15:22:59', '2021-04-27 15:22:59');
INSERT INTO `files` VALUES (306, 'ae09d2f2-bc42-449f-8390-cb5551b3fba2', NULL, 'Eke7yUMxNf', 'FO U 4.png', 'png', 'image/png', 124703, 496, 1064, NULL, '2021-04-28 09:21:35', '2021-04-28 09:21:35');
INSERT INTO `files` VALUES (307, '3dbf6f46-b33a-4762-b2de-f6a14bc0a032', NULL, 'XfvehKWcwF', 'FO U 2.jpg', 'jpg', 'image/jpeg', 151288, 497, 1065, NULL, '2021-04-28 09:22:18', '2021-04-28 09:22:18');
INSERT INTO `files` VALUES (308, 'ee35e456-317f-4c32-b349-21d7f3be2dc9', NULL, 'of2VqXn9D5', 'FO U 5.jpg', 'jpg', 'image/jpeg', 157306, 497, 1065, NULL, '2021-04-28 09:22:18', '2021-04-28 09:22:18');
INSERT INTO `files` VALUES (309, '258cf91d-1d62-44ad-aa14-1d16cf7e6d18', NULL, 'zBgZLFFMqF', 'FO U 3.jpg', 'jpg', 'image/jpeg', 207538, 497, 1065, NULL, '2021-04-28 09:22:18', '2021-04-28 09:22:18');
INSERT INTO `files` VALUES (310, 'd7e56970-2aa5-413f-bbf5-19a4b05d0e0b', NULL, 'Ac7hp4FXlQ', 'FO U.jpg', 'jpg', 'image/jpeg', 240562, 496, 1064, NULL, '2021-04-28 09:22:19', '2021-04-28 09:22:19');
INSERT INTO `files` VALUES (311, 'd5c2806b-3392-4e0a-bb99-69fd910ac49f', NULL, 'p4m5gFWmJm', 'FO U.png', 'png', 'image/png', 251682, 496, 1064, NULL, '2021-04-28 09:22:19', '2021-04-28 09:22:19');
INSERT INTO `files` VALUES (312, 'f6c050ce-bca5-4019-83da-511efc6e1481', NULL, 'fUg6PC7b5x', 'FO U 7.jpg', 'jpg', 'image/jpeg', 333516, 496, 1064, NULL, '2021-04-28 09:22:19', '2021-04-28 09:22:19');
INSERT INTO `files` VALUES (313, '02a0a06a-d0cd-4c62-acd0-11cc41599413', NULL, 'bfhMeGjDuo', 'FO U 6.jpg', 'jpg', 'image/jpeg', 354349, 497, 1065, NULL, '2021-04-28 09:22:19', '2021-04-28 09:22:19');
INSERT INTO `files` VALUES (314, 'fe5d1bff-d162-4bf9-b468-d3831e53bb80', NULL, 'ywIxKzmHOP', 'FO U 4.jpg', 'jpg', 'image/jpeg', 541941, 745, 1597, NULL, '2021-04-28 09:22:19', '2021-04-28 09:22:19');
INSERT INTO `files` VALUES (315, 'ade7c094-cc0e-4301-8bfd-44b2767f1ba7', NULL, 'm523GOUKkT', 'FO U 2.jpg', 'jpg', 'image/jpeg', 151288, 497, 1065, NULL, '2021-04-28 09:22:25', '2021-04-28 09:22:25');
INSERT INTO `files` VALUES (316, 'd6aaaf93-d110-4b3f-9679-36192c27a2bd', NULL, 'yFuSOQCMhs', 'FO U 3.jpg', 'jpg', 'image/jpeg', 207538, 497, 1065, NULL, '2021-04-28 09:22:25', '2021-04-28 09:22:25');
INSERT INTO `files` VALUES (317, '5876ce19-3674-41f7-afad-7e436d4ccad6', NULL, 'zaWaMXncwj', 'FO U 5.jpg', 'jpg', 'image/jpeg', 157306, 497, 1065, NULL, '2021-04-28 09:22:25', '2021-04-28 09:22:25');
INSERT INTO `files` VALUES (318, '45553be4-db23-4fd2-be52-74e5c7c8bea0', NULL, '0yTpLupBzw', 'FO U.jpg', 'jpg', 'image/jpeg', 240562, 496, 1064, NULL, '2021-04-28 09:22:25', '2021-04-28 09:22:25');
INSERT INTO `files` VALUES (319, '0ce14c11-5a7e-4e47-9fc5-51fe129a7d4c', NULL, 'OUDHthoPpg', 'FO U.png', 'png', 'image/png', 251682, 496, 1064, NULL, '2021-04-28 09:22:26', '2021-04-28 09:22:26');
INSERT INTO `files` VALUES (320, '6cd0d0d8-fda5-4674-abdd-86c835506d88', NULL, 'NBM4Pl2QGF', 'FO U 7.jpg', 'jpg', 'image/jpeg', 333516, 496, 1064, NULL, '2021-04-28 09:22:26', '2021-04-28 09:22:26');
INSERT INTO `files` VALUES (321, 'dd4ae965-6b13-413d-bff7-1bf15a27a363', NULL, '3SRcWlnF4f', 'FO U 6.jpg', 'jpg', 'image/jpeg', 354349, 497, 1065, NULL, '2021-04-28 09:22:26', '2021-04-28 09:22:26');
INSERT INTO `files` VALUES (322, '91ff7043-f4c5-43c1-823a-a34f60b4ada7', NULL, 'dz58izl0Aj', 'FO U 4.jpg', 'jpg', 'image/jpeg', 541941, 745, 1597, NULL, '2021-04-28 09:22:26', '2021-04-28 09:22:26');
INSERT INTO `files` VALUES (323, 'c4f5167c-9748-47fc-ac0c-11ca66c549d0', NULL, 'S92FViUVig', 'FO U 2.jpg', 'jpg', 'image/jpeg', 151288, 497, 1065, NULL, '2021-04-28 09:22:31', '2021-04-28 09:22:31');
INSERT INTO `files` VALUES (324, 'e579bc77-6a95-4b44-bbc0-1382d354f1d2', NULL, 'rB3JZ20hRZ', 'FO U 3.jpg', 'jpg', 'image/jpeg', 207538, 497, 1065, NULL, '2021-04-28 09:22:31', '2021-04-28 09:22:31');
INSERT INTO `files` VALUES (325, '47ebacc1-413b-41b4-9c8a-3faa327a20b7', NULL, '18K9jWy9Zc', 'FO U 5.jpg', 'jpg', 'image/jpeg', 157306, 497, 1065, NULL, '2021-04-28 09:22:31', '2021-04-28 09:22:31');
INSERT INTO `files` VALUES (326, 'f611c513-03e2-463f-b75b-7746f0a0818b', NULL, 'Xq3F1vMi5R', 'FO U.jpg', 'jpg', 'image/jpeg', 240562, 496, 1064, NULL, '2021-04-28 09:22:32', '2021-04-28 09:22:32');
INSERT INTO `files` VALUES (327, 'eeef1b17-8c14-4548-96d3-9664930a27a6', NULL, 'SZgnXz4dAA', 'FO U.png', 'png', 'image/png', 251682, 496, 1064, NULL, '2021-04-28 09:22:32', '2021-04-28 09:22:32');
INSERT INTO `files` VALUES (328, '5f66655f-e12a-4005-b0db-caf596a04778', NULL, '2rpCH7BXpa', 'FO U 7.jpg', 'jpg', 'image/jpeg', 333516, 496, 1064, NULL, '2021-04-28 09:22:32', '2021-04-28 09:22:32');
INSERT INTO `files` VALUES (329, 'ca0a5a77-7533-4a21-9391-f02f78255993', NULL, 'pxWSIx7j4W', 'FO U 6.jpg', 'jpg', 'image/jpeg', 354349, 497, 1065, NULL, '2021-04-28 09:22:32', '2021-04-28 09:22:32');
INSERT INTO `files` VALUES (330, 'e9ce19f8-bb33-405b-ae7b-e26c868b516b', NULL, 'Cw5oJtqQgA', 'FO U 4.jpg', 'jpg', 'image/jpeg', 541941, 745, 1597, NULL, '2021-04-28 09:22:32', '2021-04-28 09:22:32');
INSERT INTO `files` VALUES (331, '2ceae927-a454-4950-b213-3701134b2a4c', NULL, 'CaU3tZjBYH', 'zlooLTBBqv.png', 'png', 'image/png', 193027, 313, 439, NULL, '2021-04-28 10:01:58', '2021-04-28 10:01:58');
INSERT INTO `files` VALUES (332, 'b66caf84-b22a-42b8-a992-c112db887d5d', NULL, 'OZvumv88cf', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 20:27:55', '2021-04-28 20:27:55');
INSERT INTO `files` VALUES (333, 'da0d8f66-4f6e-426b-8254-f7fa731391d9', NULL, 'fmlBXyLTOk', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 20:27:58', '2021-04-28 20:27:58');
INSERT INTO `files` VALUES (334, '458708dd-e9fe-43ce-881e-db3ad1f859f0', 'services-art-images', 'z9WrYln11K', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 20:28:01', '2021-05-17 19:16:02');
INSERT INTO `files` VALUES (335, '1ffbb013-bb1b-4289-a80c-9c9f80fa4e0b', 'services-art-images', 'BJxFM2uZ7P', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 20:28:04', '2021-05-17 19:16:02');
INSERT INTO `files` VALUES (336, 'b43f0546-f6f5-4df6-8101-365fb3584b4b', NULL, 'FrcNQzksfg', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 20:28:15', '2021-04-28 20:28:15');
INSERT INTO `files` VALUES (337, '62923301-0bd8-44ab-89d1-8f99a08730a5', 'services-art-images', '7vGCzVldcD', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 20:28:18', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (338, '863e4022-e448-474c-87bf-2143f04a8722', 'services-art-images', 'VUXOY8hqaw', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 20:28:20', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (339, 'a0f0daaf-9a83-49b6-9b20-fb6b4a64b5db', 'services-art-images', 'a0g9ucJnZt', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 20:28:22', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (340, 'cf908d36-8ecd-4758-8947-8b00a48df59b', 'services-art-images', 'YzfYXGWDXx', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 20:28:23', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (341, '6aec091a-7e37-4927-abda-405e1f350445', 'services-art-images', 'MNt7YZAw5f', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 21:53:54', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (342, 'c31db94b-d0b6-44a8-9d3a-d609c3e002af', 'services-art-images', '2Udb4j9PaU', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 21:53:58', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (343, 'b5f25cc3-9458-4d59-9f3b-50aa98a7b6d6', 'services-art-images', 'XK7bmMJCjJ', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 21:54:10', '2021-05-17 19:16:02');
INSERT INTO `files` VALUES (344, 'e7239720-73ce-44c4-b264-9b6e4d418371', 'services-art-images', 'IhUvlGDHdT', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 21:54:13', '2021-05-17 19:16:02');
INSERT INTO `files` VALUES (345, '4546681a-4089-4deb-aca2-b2ed8e0c549f', 'services-art-images', '2H107MH6lb', 'test-min.jpg', 'jpg', 'image/jpeg', 69576, 1000, 750, NULL, '2021-04-28 21:54:17', '2021-05-17 19:16:02');
INSERT INTO `files` VALUES (346, '964f230d-aba4-49b2-a3df-fbdc889cf644', NULL, 'ShZwQN9Loj', 'Group 851.png', 'png', 'image/png', 1993, 140, 51, NULL, '2021-04-29 11:55:49', '2021-04-29 11:55:49');
INSERT INTO `files` VALUES (347, 'eb31e8c1-fb7b-460e-96cc-24ffb77e8d08', NULL, 'iBQGz5IbIh', 'Group 852.png', 'png', 'image/png', 1188, 51, 72, NULL, '2021-04-29 11:55:49', '2021-04-29 11:55:49');
INSERT INTO `files` VALUES (348, 'd10601f1-cb58-48c9-aa79-f0cb99b609b2', NULL, 'JUR5t6g2Iv', 'Group 854.png', 'png', 'image/png', 5344, 149, 52, NULL, '2021-04-29 11:55:49', '2021-04-29 11:55:49');
INSERT INTO `files` VALUES (349, 'ea01825d-68a3-4b58-9c24-dc1038505162', NULL, 'FgyihXWLqO', 'Group 853.png', 'png', 'image/png', 3590, 132, 40, NULL, '2021-04-29 11:55:49', '2021-04-29 11:55:49');
INSERT INTO `files` VALUES (350, '582a2397-31b4-4211-86b7-355cd25ca312', NULL, '258FWcaUw0', 'Group 854.png', 'png', 'image/png', 5344, 149, 52, NULL, '2021-04-29 11:55:53', '2021-04-29 11:55:53');
INSERT INTO `files` VALUES (351, '5a37ea21-b026-4c5d-8b15-420a9dda2ca8', NULL, 'bi0iVIu01z', 'Group 853.png', 'png', 'image/png', 3590, 132, 40, NULL, '2021-04-29 11:55:53', '2021-04-29 11:55:53');
INSERT INTO `files` VALUES (352, '7a45644f-d108-4d8d-80a2-d2478efd6578', NULL, 'HjPj0rm2Qh', 'Group 851.png', 'png', 'image/png', 1993, 140, 51, NULL, '2021-04-29 11:55:53', '2021-04-29 11:55:53');
INSERT INTO `files` VALUES (353, 'd4599d79-9a35-4480-82a7-9cae9ab918e7', NULL, 'bnHZraDo8L', 'Group 852.png', 'png', 'image/png', 1188, 51, 72, NULL, '2021-04-29 11:55:53', '2021-04-29 11:55:53');
INSERT INTO `files` VALUES (354, '53aa8b69-fb3a-4f75-a209-ecd6a5429d98', NULL, 'KcyWITwbxN', 'Group 854.png', 'png', 'image/png', 5344, 149, 52, NULL, '2021-04-29 11:56:04', '2021-04-29 11:56:04');
INSERT INTO `files` VALUES (355, '17014e8c-cf32-4b55-9b02-667488193d2a', NULL, 'xvals1JKGX', 'Group 853.png', 'png', 'image/png', 3590, 132, 40, NULL, '2021-04-29 11:56:04', '2021-04-29 11:56:04');
INSERT INTO `files` VALUES (356, 'acdef316-68c1-4758-9c45-d9c7f2ba9bb6', NULL, 'plQjso41RI', 'Group 852.png', 'png', 'image/png', 1188, 51, 72, NULL, '2021-04-29 11:56:04', '2021-04-29 11:56:04');
INSERT INTO `files` VALUES (357, '5d9bd6fe-024f-4393-82ed-bca3f331cb66', NULL, 'KEDa1QkAje', 'Group 851.png', 'png', 'image/png', 1993, 140, 51, NULL, '2021-04-29 11:56:04', '2021-04-29 11:56:04');
INSERT INTO `files` VALUES (358, '586e7080-11f0-4cd0-bc65-ead5996228db', NULL, '4aHAyEJcKz', 'Rectangle 18.jpg', 'jpg', 'image/jpeg', 374205, 604, 836, NULL, '2021-04-29 14:16:40', '2021-04-29 14:16:40');
INSERT INTO `files` VALUES (359, 'e54784a6-0bb8-478f-8b3e-c606a561d886', NULL, 'vr1iOYXFJP', 'Rectangle 754.jpg', 'jpg', 'image/jpeg', 377188, 596, 834, NULL, '2021-04-29 14:17:05', '2021-04-29 14:17:05');
INSERT INTO `files` VALUES (360, '2d6de2cc-bd9e-4ccb-805e-ac95fce4de3b', NULL, 'peSDOeKQ4g', 'Rectangle 755.jpg', 'jpg', 'image/jpeg', 368622, 600, 836, NULL, '2021-04-29 14:17:40', '2021-04-29 14:17:40');
INSERT INTO `files` VALUES (361, '1cdb85ec-114c-4316-9642-7e52ebbff7d7', NULL, 'NfMBpbpSvf', 'Rectangle 18.jpg', 'jpg', 'image/jpeg', 374205, 604, 836, NULL, '2021-04-29 14:18:26', '2021-04-29 14:18:26');
INSERT INTO `files` VALUES (362, '174d08eb-5828-46fd-aea6-f76631d0131c', NULL, '87JbaaCGS1', 'Rectangle 754.jpg', 'jpg', 'image/jpeg', 377188, 596, 834, NULL, '2021-04-29 14:19:59', '2021-04-29 14:19:59');
INSERT INTO `files` VALUES (363, '4608dcbc-9e95-4169-ae9e-39654ae17351', NULL, 'SC5bHRjmv9', 'Rectangle 754.jpg', 'jpg', 'image/jpeg', 377188, 596, 834, NULL, '2021-04-29 14:20:17', '2021-04-29 14:20:17');
INSERT INTO `files` VALUES (364, '960f0c6b-a60c-489e-b9d4-895805fdd40f', NULL, 'xiwzAOijdf', 'Rectangle 754 (1).png', 'png', 'image/png', 521478, 596, 834, NULL, '2021-04-29 14:20:39', '2021-04-29 14:20:39');
INSERT INTO `files` VALUES (365, '07f809fc-fd7a-4d3f-b0f4-fae380f9824a', NULL, 'HwZR0fwIEe', 'Rectangle 18.jpg', 'jpg', 'image/jpeg', 374205, 604, 836, NULL, '2021-04-29 14:20:50', '2021-04-29 14:20:50');
INSERT INTO `files` VALUES (366, 'da86ec6e-0d90-44d7-a6c7-327606f7ce12', NULL, 'qjZLxB4w6F', 'Rectangle 18.jpg', 'jpg', 'image/jpeg', 374205, 604, 836, NULL, '2021-04-29 14:21:18', '2021-04-29 14:21:18');
INSERT INTO `files` VALUES (367, 'd9211902-2603-462a-8189-ae0fda5edb69', NULL, 'STIte3owST', 'Ellipse 5 (2).png', 'png', 'image/png', 83450, 331, 331, NULL, '2021-05-04 10:03:09', '2021-05-04 10:03:09');
INSERT INTO `files` VALUES (368, '0a3ab44c-0c71-4eb2-9d8f-ff2df62126d9', NULL, 'E3sHrMQY85', 'Ellipse 5.png', 'png', 'image/png', 221682, 553, 553, NULL, '2021-05-04 10:07:39', '2021-05-04 10:07:39');
INSERT INTO `files` VALUES (369, '63a5dc36-f1c7-4a2e-9e38-0ade394cfdb7', NULL, 'ON7Gf5Iy7B', 'Ellipse 5.png', 'png', 'image/png', 83260, 331, 331, NULL, '2021-05-04 11:02:21', '2021-05-04 11:02:21');
INSERT INTO `files` VALUES (370, '6716feb0-d8ea-47a9-a952-cc98d37f7327', NULL, '7CaD8H9r0e', 'Ellipse 98.png', 'png', 'image/png', 164748, 331, 331, NULL, '2021-05-04 11:04:00', '2021-05-04 11:04:00');
INSERT INTO `files` VALUES (371, '176c7a8a-7832-4e6a-b059-26281867f44f', NULL, 'R0k4Tw3KnS', 'Ellipse 6.png', 'png', 'image/png', 46645, 331, 331, NULL, '2021-05-04 12:24:02', '2021-05-04 12:24:02');
INSERT INTO `files` VALUES (372, '65f0d4e2-440d-42ad-9414-11499d4ddf9f', NULL, '7eK1oDXCmF', 'Ellipse 31.png', 'png', 'image/png', 87050, 331, 331, NULL, '2021-05-04 12:24:04', '2021-05-04 12:24:04');
INSERT INTO `files` VALUES (373, '1bad9f4d-f8a7-4914-808c-c55e08266f43', NULL, 'LeUvcqNre2', 'Ellipse 44.png', 'png', 'image/png', 127784, 331, 331, NULL, '2021-05-04 12:24:08', '2021-05-04 12:24:08');
INSERT INTO `files` VALUES (374, '9fe0cf5f-a73b-4ba2-9bd1-d6e38852e482', NULL, '3opwcvJg1H', 'Ellipse 53.png', 'png', 'image/png', 100572, 331, 331, NULL, '2021-05-04 12:24:13', '2021-05-04 12:24:13');
INSERT INTO `files` VALUES (375, 'b240e772-dfc8-4e74-84d3-32f37181bea1', NULL, 'H0MqPJh6A2', 'Ellipse 55.png', 'png', 'image/png', 153840, 331, 331, NULL, '2021-05-04 12:24:25', '2021-05-04 12:24:25');
INSERT INTO `files` VALUES (376, 'fb589c2a-35db-4028-a8a1-56acf78baf7c', NULL, 'A9taVGSZ8C', 'Ellipse 68.png', 'png', 'image/png', 143441, 331, 331, NULL, '2021-05-04 12:24:30', '2021-05-04 12:24:30');
INSERT INTO `files` VALUES (377, '5b6cb872-7600-47d3-a727-2f7619f76408', NULL, 'Zu8oCWa14u', 'Ellipse 69.png', 'png', 'image/png', 135600, 331, 331, NULL, '2021-05-04 12:24:34', '2021-05-04 12:24:34');
INSERT INTO `files` VALUES (378, '6b86a888-26a2-441c-9228-fc675ed7c792', NULL, 'I8gLSogVEH', 'Ellipse 97.png', 'png', 'image/png', 119025, 331, 331, NULL, '2021-05-04 12:24:38', '2021-05-04 12:24:38');
INSERT INTO `files` VALUES (379, '1b1abb21-d303-480f-b5c1-2fb868280200', NULL, 'dmLs2zn7Ss', 'Ellipse 98.png', 'png', 'image/png', 164748, 331, 331, NULL, '2021-05-04 12:24:42', '2021-05-04 12:24:42');
INSERT INTO `files` VALUES (380, 'e7847ee4-c9fc-46b3-ac2e-bb3a132f2bc2', NULL, 'ZEQlzmdIuC', 'Ellipse 11.png', 'png', 'image/png', 87532, 331, 331, NULL, '2021-05-04 12:50:31', '2021-05-04 12:50:31');
INSERT INTO `files` VALUES (381, '2d0aa625-b89d-456e-87da-4bf8f010f08e', NULL, 'T9ItSifF2N', 'Ellipse 15.png', 'png', 'image/png', 119025, 331, 331, NULL, '2021-05-04 12:50:36', '2021-05-04 12:50:36');
INSERT INTO `files` VALUES (382, '1ad88eae-7fc1-4fd7-9574-71b209f93fe0', NULL, 'CvTRZqSlOF', 'Ellipse 18.png', 'png', 'image/png', 46612, 331, 331, NULL, '2021-05-04 12:50:40', '2021-05-04 12:50:40');
INSERT INTO `files` VALUES (383, '6f6da528-88a1-4dfe-9b8a-6ead13797fad', NULL, 'MpHJy1H4OA', 'Ellipse 21.png', 'png', 'image/png', 124871, 331, 331, NULL, '2021-05-04 12:50:43', '2021-05-04 12:50:43');
INSERT INTO `files` VALUES (384, '3449b192-dbf3-4644-8ad1-fa2553cea9e7', NULL, 'tM71DkIytO', 'Ellipse 37.png', 'png', 'image/png', 83260, 331, 331, NULL, '2021-05-04 12:50:47', '2021-05-04 12:50:47');
INSERT INTO `files` VALUES (385, 'a2318b62-fe18-41ba-9475-757f9c28a1a2', NULL, 'mIDXYrEyR7', 'Ellipse 60.png', 'png', 'image/png', 145884, 331, 331, NULL, '2021-05-04 12:50:51', '2021-05-04 12:50:51');
INSERT INTO `files` VALUES (386, '38b509b7-8dbd-471c-be95-09b74050d6ca', NULL, 'TYkHK3hjOl', 'Ellipse 63.png', 'png', 'image/png', 127784, 331, 331, NULL, '2021-05-04 12:50:54', '2021-05-04 12:50:54');
INSERT INTO `files` VALUES (387, 'd5dadd99-8fad-431e-bdfb-421890a3296d', NULL, 'MrSCgU0Q30', 'Ellipse 96.png', 'png', 'image/png', 76651, 331, 331, NULL, '2021-05-04 12:50:57', '2021-05-04 12:50:57');
INSERT INTO `files` VALUES (388, '425dde47-470d-4f9d-b65d-0d3d28ade3b0', NULL, 'aBmdfISERQ', 'Ellipse 99.png', 'png', 'image/png', 100371, 331, 331, NULL, '2021-05-04 12:51:02', '2021-05-04 12:51:02');
INSERT INTO `files` VALUES (389, '806c19dc-6d39-4f12-b444-12e89f9e916a', NULL, 'UdpuuoqSvt', 'Ellipse 100.png', 'png', 'image/png', 176116, 331, 331, NULL, '2021-05-04 12:51:05', '2021-05-04 12:51:05');
INSERT INTO `files` VALUES (390, '85c626f4-cf05-4041-8010-93da9e5c7e7d', NULL, 'iCliEVjt2V', 'bfhMeGjDuo.jpg', 'jpg', 'image/jpeg', 54929, 497, 1065, NULL, '2021-05-04 15:27:36', '2021-05-04 15:27:36');
INSERT INTO `files` VALUES (391, 'c8de4f8a-f6ef-4efb-b327-6b153a5ac193', NULL, 'HGWhfkmtra', 'ywIxKzmHOP.jpg', 'jpg', 'image/jpeg', 99577, 745, 1597, NULL, '2021-05-04 15:27:42', '2021-05-04 15:27:42');
INSERT INTO `files` VALUES (392, '53fc5cd7-a291-4a57-a0b1-d13a0fab0f88', NULL, 'IojJd1CTj6', 'of2VqXn9D5.jpg', 'jpg', 'image/jpeg', 37996, 497, 1065, NULL, '2021-05-04 15:27:47', '2021-05-04 15:27:47');
INSERT INTO `files` VALUES (393, '3af3fd0d-976c-4b57-a0ee-e8085d66e157', NULL, 'tvepUnoDrS', 'XfvehKWcwF.jpg', 'jpg', 'image/jpeg', 28528, 497, 1065, NULL, '2021-05-04 15:27:51', '2021-05-04 15:27:51');
INSERT INTO `files` VALUES (394, '942adea8-b978-4fa3-be3c-e4568fd0ce1b', NULL, 't4yaZBSaXD', 'zBgZLFFMqF.jpg', 'jpg', 'image/jpeg', 43167, 497, 1065, NULL, '2021-05-04 15:27:55', '2021-05-04 15:27:55');
INSERT INTO `files` VALUES (395, '6eeec749-2406-4b01-9bed-876dc9617338', NULL, 'bv852SiXrH', 'zBgZLFFMqF.jpg', 'jpg', 'image/jpeg', 43167, 497, 1065, NULL, '2021-05-04 15:27:59', '2021-05-04 15:27:59');
INSERT INTO `files` VALUES (396, '961c90c4-f4ed-40f0-b6c5-7290e1076027', NULL, 'XkuX0fPrgz', 'Ac7hp4FXlQ.jpg', 'jpg', 'image/jpeg', 37715, 496, 1064, NULL, '2021-05-04 15:28:04', '2021-05-04 15:28:04');
INSERT INTO `files` VALUES (397, 'c1e62ca8-f2c4-4a79-a5ed-fdaa2443c063', NULL, 'GFW2x1D1UM', 'Ac7hp4FXlQ.jpg', 'jpg', 'image/jpeg', 37715, 496, 1064, NULL, '2021-05-04 15:28:08', '2021-05-04 15:28:08');
INSERT INTO `files` VALUES (398, '26277ed7-324a-4a2a-b8c5-9ef85a42c359', NULL, 'MYLpl0Ab4O', 'fUg6PC7b5x.jpg', 'jpg', 'image/jpeg', 41856, 496, 1064, NULL, '2021-05-04 15:28:14', '2021-05-04 15:28:14');
INSERT INTO `files` VALUES (399, '159d6dba-ebb1-430d-8fe2-74a3ca6fc16d', NULL, '8rnso1G9IY', 'bfhMeGjDuo.jpg', 'jpg', 'image/jpeg', 54929, 497, 1065, NULL, '2021-05-04 16:41:12', '2021-05-04 16:41:12');
INSERT INTO `files` VALUES (400, '34527d02-d638-40d8-b6bf-041cb30f6a8e', NULL, '1mlvwSPLn5', 'ywIxKzmHOP.jpg', 'jpg', 'image/jpeg', 99577, 745, 1597, NULL, '2021-05-04 16:41:23', '2021-05-04 16:41:23');
INSERT INTO `files` VALUES (401, 'b0bba46c-1f1e-4226-b1af-b8e94fef630d', NULL, '6sccTGYffi', 'of2VqXn9D5.jpg', 'jpg', 'image/jpeg', 37996, 497, 1065, NULL, '2021-05-04 16:41:27', '2021-05-04 16:41:27');
INSERT INTO `files` VALUES (402, '6b3cbd37-ecd5-480f-8175-a5fb1fdbd8eb', NULL, 'pHHMTZztkB', 'of2VqXn9D5.jpg', 'jpg', 'image/jpeg', 37996, 497, 1065, NULL, '2021-05-04 16:41:35', '2021-05-04 16:41:35');
INSERT INTO `files` VALUES (403, '657d5791-a7fb-4932-8eff-ed90943403a2', NULL, 'oeWMOcrVFF', 'XfvehKWcwF.jpg', 'jpg', 'image/jpeg', 28528, 497, 1065, NULL, '2021-05-04 16:41:42', '2021-05-04 16:41:42');
INSERT INTO `files` VALUES (404, 'ed898a69-46da-4ef5-903e-c9234066216d', NULL, 'EbPBy31D13', 'zBgZLFFMqF.jpg', 'jpg', 'image/jpeg', 43167, 497, 1065, NULL, '2021-05-04 16:41:46', '2021-05-04 16:41:46');
INSERT INTO `files` VALUES (405, '9a4c594e-4b12-423c-93bc-e641453f83b7', NULL, 'ISmBht0UZU', 'Ac7hp4FXlQ.jpg', 'jpg', 'image/jpeg', 37715, 496, 1064, NULL, '2021-05-04 16:41:52', '2021-05-04 16:41:52');
INSERT INTO `files` VALUES (406, 'a5f5e1b3-e057-4698-bcf4-4714c162f79d', NULL, 'lPQUmFYsBy', 'Ac7hp4FXlQ.jpg', 'jpg', 'image/jpeg', 37715, 496, 1064, NULL, '2021-05-04 16:41:56', '2021-05-04 16:41:56');
INSERT INTO `files` VALUES (407, '7034b002-fcfc-4786-a617-6b22022a0f6a', NULL, 'LOIPjuw99A', 'fUg6PC7b5x.jpg', 'jpg', 'image/jpeg', 41856, 496, 1064, NULL, '2021-05-04 16:42:01', '2021-05-04 16:42:01');
INSERT INTO `files` VALUES (408, '1be02272-c303-4a6f-890b-325078c78a56', NULL, '3fhSU9SR2N', 'bfhMeGjDuo.jpg', 'jpg', 'image/jpeg', 54929, 497, 1065, NULL, '2021-05-04 16:59:43', '2021-05-04 16:59:43');
INSERT INTO `files` VALUES (409, 'e8773813-b430-442c-b843-45bcdf2b41bc', NULL, 'G9bLDQ2G5c', 'ywIxKzmHOP.jpg', 'jpg', 'image/jpeg', 99577, 745, 1597, NULL, '2021-05-04 16:59:47', '2021-05-04 16:59:47');
INSERT INTO `files` VALUES (410, '044f2f39-1b02-4eb4-9506-b0f712004fba', NULL, 'XSm9WqJFVu', 'of2VqXn9D5.jpg', 'jpg', 'image/jpeg', 37996, 497, 1065, NULL, '2021-05-04 16:59:51', '2021-05-04 16:59:51');
INSERT INTO `files` VALUES (411, 'eb05ecf5-7ce7-4409-b5de-a08d5fe40c13', NULL, '7ulbI8E3Wj', 'XfvehKWcwF.jpg', 'jpg', 'image/jpeg', 28528, 497, 1065, NULL, '2021-05-04 16:59:56', '2021-05-04 16:59:56');
INSERT INTO `files` VALUES (412, '78a7c93a-a6dc-4d91-af36-0f073a4c5d39', NULL, '9X7mLJkRN9', 'zBgZLFFMqF.jpg', 'jpg', 'image/jpeg', 43167, 497, 1065, NULL, '2021-05-04 17:00:12', '2021-05-04 17:00:12');
INSERT INTO `files` VALUES (413, '6c7699b3-1ae2-49fd-b022-f08dcf1984d5', NULL, 'pEZqnMZc48', 'Ac7hp4FXlQ.jpg', 'jpg', 'image/jpeg', 37715, 496, 1064, NULL, '2021-05-04 17:00:17', '2021-05-04 17:00:17');
INSERT INTO `files` VALUES (414, 'a890d855-6a49-4889-b67b-32d177e54a22', NULL, 'px2bTHy8Yr', 'Ac7hp4FXlQ.jpg', 'jpg', 'image/jpeg', 37715, 496, 1064, NULL, '2021-05-04 17:00:21', '2021-05-04 17:00:21');
INSERT INTO `files` VALUES (415, 'c9b1f5ae-807c-4d95-9e0b-d785a0ea2ea5', NULL, 'wCow8ZgIOY', 'fUg6PC7b5x.jpg', 'jpg', 'image/jpeg', 41856, 496, 1064, NULL, '2021-05-04 17:00:49', '2021-05-04 17:00:49');
INSERT INTO `files` VALUES (416, 'b63ff409-c88c-4f07-aab4-6d0b58af843c', NULL, '490AlxkLaZ', 'Ellipse 5 (2).png', 'png', 'image/png', 83450, 331, 331, NULL, '2021-05-05 13:59:11', '2021-05-05 13:59:11');
INSERT INTO `files` VALUES (417, 'c77e37e2-7c1c-4093-9c65-a8c4fbbe10c8', NULL, 'eL9LYPGktV', 'Ellipse 6 (2).png', 'png', 'image/png', 46498, 331, 331, NULL, '2021-05-05 14:02:35', '2021-05-05 14:02:35');
INSERT INTO `files` VALUES (418, '90fa1b80-d992-4c05-b999-1ef756b6af0f', NULL, '8FWakaelze', 'Ellipse 97.png', 'png', 'image/png', 86440, 271, 271, NULL, '2021-05-05 14:02:59', '2021-05-05 14:02:59');
INSERT INTO `files` VALUES (419, '8b9a7f0a-0bb1-4097-a516-02830df325d6', NULL, 'fsdFVY99NG', 'Ellipse 97 (1).png', 'png', 'image/png', 117948, 331, 331, NULL, '2021-05-05 14:03:37', '2021-05-05 14:03:37');
INSERT INTO `files` VALUES (420, 'add18bee-1a7d-405c-84b8-a7bfb4f0f47e', NULL, 'taXyTIEKgz', 'Ellipse 51 (1).png', 'png', 'image/png', 139903, 331, 331, NULL, '2021-05-05 14:03:58', '2021-05-05 14:03:58');
INSERT INTO `files` VALUES (421, '4b69f859-d43f-48dc-910b-307f2b7c5b7b', NULL, 'jSjmmcyBiy', 'Ellipse 51.png', 'png', 'image/png', 23028, 118, 118, NULL, '2021-05-05 14:05:17', '2021-05-05 14:05:17');
INSERT INTO `files` VALUES (422, '71dae928-439f-4052-bacd-59f6b52d5aea', NULL, 'CBBSg5tUOP', 'Ellipse 6 (1).png', 'png', 'image/png', 46498, 331, 331, NULL, '2021-05-05 14:05:44', '2021-05-05 14:05:44');
INSERT INTO `files` VALUES (423, '831d2061-3a3b-461d-94a7-031760259aa4', NULL, '6x2JP33nZN', 'Ellipse 98.png', 'png', 'image/png', 34867, 137, 137, NULL, '2021-05-05 14:06:28', '2021-05-05 14:06:28');
INSERT INTO `files` VALUES (424, '0904fc9d-23d0-47a9-816c-a83c3d1ac30e', NULL, 'n7gUyv0Kiu', 'Ellipse 51.png', 'png', 'image/png', 23028, 118, 118, NULL, '2021-05-05 14:06:49', '2021-05-05 14:06:49');
INSERT INTO `files` VALUES (425, '2bce28da-7723-41d1-9eef-72cf1f70add2', NULL, 'PfLO68CNtH', 'Ellipse 5.png', 'png', 'image/png', 23212, 118, 118, NULL, '2021-05-05 14:07:08', '2021-05-05 14:07:08');
INSERT INTO `files` VALUES (426, '03832f37-492b-471a-894e-198315c3b68a', NULL, 'QGz0xGG1up', 'Ellipse 98 (1).png', 'png', 'image/png', 164490, 331, 331, NULL, '2021-05-05 14:07:40', '2021-05-05 14:07:40');
INSERT INTO `files` VALUES (427, '629dce84-dda3-4c86-a6fe-3c89437ae582', NULL, 'uNn46Jojja', 'NX6RY9z0c3o.jpg', 'jpg', 'image/jpeg', 266288, 1192, 886, NULL, '2021-05-16 18:45:15', '2021-05-16 18:45:15');
INSERT INTO `files` VALUES (428, 'b7265cc3-1ed5-4023-8ae7-37ffdf8d068f', NULL, 'smdnW8a3J8', 'alexander.jpg', 'jpg', 'image/jpeg', 92976, 512, 512, NULL, '2021-05-16 18:46:52', '2021-05-16 18:46:52');
INSERT INTO `files` VALUES (429, '035d5fda-dc3d-401a-94c8-c03c21d00ac7', NULL, 'vTqgRInXgV', 'alexander.jpg', 'jpg', 'image/jpeg', 92976, 512, 512, NULL, '2021-05-16 18:48:44', '2021-05-16 18:48:44');
INSERT INTO `files` VALUES (430, 'f2a4bd22-09be-46f6-b437-938b9c5db3a3', NULL, '0Pwbn0HNma', '11.jpg', 'jpg', 'image/jpeg', 63513, 640, 640, NULL, '2021-05-16 18:51:18', '2021-05-16 18:51:18');
INSERT INTO `files` VALUES (431, '3dc383b8-b82e-4a4a-bcc1-f4f7e9f60c44', 'home-team-image', 'dSFtXqLbXj', '11.jpg', 'jpg', 'image/jpeg', 44807, 425, 425, NULL, '2021-05-16 18:52:22', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (432, '7ffe9074-91e4-4747-82ec-0a79f27cd419', 'home-team-image', 'UL0GQgC3Bc', 'Anastasia.jpg', 'jpg', 'image/jpeg', 157925, 956, 956, NULL, '2021-05-16 18:56:25', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (433, '885cb3f2-9ebe-43ca-ac04-1880d75f8190', 'home-team-image', 'oMLahOGevG', 'Grogory.jpg', 'jpg', 'image/jpeg', 230434, 619, 620, NULL, '2021-05-16 18:57:54', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (434, 'e2f02a0e-c4b4-4974-9b16-eebfde64e66b', 'home-team-image', 'WBvn8fnP9S', '2020-11-18 11.49.03.jpg', 'jpg', 'image/jpeg', 123106, 640, 640, NULL, '2021-05-16 18:58:18', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (435, '6c771823-574f-46dd-b575-ae51aee9b8e7', 'home-team-image', 'vLpg8F7hhe', '2020-11-18 11.48.17.jpg', 'jpg', 'image/jpeg', 178968, 640, 640, NULL, '2021-05-16 18:58:28', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (436, 'd648ee73-bc9d-4ed4-b397-22693e0b7eac', 'home-team-image', 'qH5Bo7wGoL', '2020-11-18 11.48.38.jpg', 'jpg', 'image/jpeg', 127908, 640, 640, NULL, '2021-05-16 18:58:33', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (437, '946ec55a-b626-4468-99ab-2f7a1c423831', 'home-team-image', 'tVFibGWUBh', '2020-11-18 11.48.56.jpg', 'jpg', 'image/jpeg', 99510, 640, 640, NULL, '2021-05-16 18:58:38', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (438, 'c858c693-3dd4-4885-ad4e-7aee5fe29ef7', 'home-team-image', 'HJTQFS6Dz4', '2020-11-18 11.48.47.jpg', 'jpg', 'image/jpeg', 135821, 640, 640, NULL, '2021-05-16 18:58:43', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (439, 'aa2bb8a5-0c05-446c-ab3d-fdff1a83331b', 'home-team-image', '2sKMWYI0xd', '2020-11-18 11.49.10.jpg', 'jpg', 'image/jpeg', 116247, 640, 640, NULL, '2021-05-16 18:58:48', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (440, '9401972b-e937-43a7-a43d-f4de76950cac', 'home-team-image', '1UDQW7XojC', '2020-11-18 11.49.17.jpg', 'jpg', 'image/jpeg', 79386, 640, 640, NULL, '2021-05-16 18:58:51', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (441, '80a12ab7-89e3-4c8e-a178-40bb8144f7f8', 'home-team-image', 'n5rZ8fxYxr', '2020-11-18 11.49.30.jpg', 'jpg', 'image/jpeg', 71885, 640, 640, NULL, '2021-05-16 18:58:55', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (442, '5e3e005a-5450-410a-945b-33648bbeef49', 'home-team-image', '26fQZVm2UG', '2020-11-18 11.49.49.jpg', 'jpg', 'image/jpeg', 100555, 640, 640, NULL, '2021-05-16 18:58:59', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (443, 'de880b76-509c-4c06-9b8d-d232b648c868', 'home-team-image', 'DnoOq0XCKE', 'avatar.png', 'png', 'image/png', 85032, 200, 200, NULL, '2021-05-16 18:59:03', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (444, 'b3539f10-3a1d-4913-9fd7-77727291ef3d', 'home-team-image', 'EbdBOOstlA', '2020-11-18 11.49.30.jpg', 'jpg', 'image/jpeg', 71885, 640, 640, NULL, '2021-05-16 18:59:12', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (445, 'ddf56f32-c642-46f8-b5c1-9e7f887a9ac2', 'home-team-image', 'pctJnGISku', 'avatar2.png', 'png', 'image/png', 62553, 200, 200, NULL, '2021-05-16 18:59:19', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (446, '238dae1c-02c9-419a-8a45-4d90b05c8937', 'home-team-image', 'GRPcTyxIks', 'avatar4.png', 'png', 'image/png', 73179, 200, 200, NULL, '2021-05-16 18:59:24', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (447, '02c97fff-9497-48b5-a038-42aba9a390b3', 'home-team-image', 'Rmtl19qCEF', 'avatar5.png', 'png', 'image/png', 87312, 200, 200, NULL, '2021-05-16 18:59:29', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (448, '85b968a5-3a92-4913-89c9-99a2db546517', 'home-team-image', '8GXFZTsXh7', 'avatar6.png', 'png', 'image/png', 79719, 200, 200, NULL, '2021-05-16 18:59:35', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (449, 'ed9f9740-789b-43ed-87c0-748dd35ac809', 'home-team-image', 'Yf9kglKKC9', 'avatar7.png', 'png', 'image/png', 75161, 200, 200, NULL, '2021-05-16 18:59:40', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (450, '948ec2a4-c8b4-4a60-955e-b3024640cf85', 'home-team-image', 'UGVrJwZNTu', 'Screenshot 2020-11-18 at 12.00.26.png', 'png', 'image/png', 729199, 746, 740, NULL, '2021-05-16 18:59:45', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (451, '94d573b3-cb90-434a-94aa-e345e818b946', 'home-team-image', 'v0HpNZdQsU', 'avatar.png', 'png', 'image/png', 269461, 512, 510, NULL, '2021-05-17 16:24:22', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (452, '02a86016-9ba0-44f5-a3e0-d4a254ba6c22', 'home-team-image', '8AswjLXMeU', 'Dasha.jpg', 'jpg', 'image/jpeg', 212544, 512, 512, NULL, '2021-05-17 16:24:29', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (453, 'e48724f1-183d-48a8-bf62-e2b83ffbf7c8', 'home-team-image', 'pHMjWt2SIj', 'Ekaterina.jpg', 'jpg', 'image/jpeg', 88379, 515, 515, NULL, '2021-05-17 16:24:34', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (454, '21b322b8-d66b-4c11-9ed3-ec2b4677ccc7', 'home-team-image', 'v3nYbbvqVu', 'IMG_0763.png', 'png', 'image/png', 419650, 512, 512, NULL, '2021-05-17 16:24:43', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (455, '962c5955-2267-497c-a82d-bea8f54199cd', 'home-team-image', 'vtcpWDoeUe', 'Yana.jpg', 'jpg', 'image/jpeg', 123423, 512, 512, NULL, '2021-05-17 16:25:04', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (456, '1c60e936-a564-4463-afe6-a96784ceb74d', 'home-team-image', '25rKieRqiK', 'Anna.jpg', 'jpg', 'image/jpeg', 110500, 512, 511, NULL, '2021-05-17 16:33:26', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (457, 'f43b9a7d-029f-4616-83b2-2744dfd37cd7', 'home-team-image', 'E9POo2auLM', 'Evgeniy.jpg', 'jpg', 'image/jpeg', 74218, 512, 513, NULL, '2021-05-17 16:33:33', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (458, 'bcfb16b2-fe88-4e6e-ba2e-c5902bed7123', 'home-team-image', 'SoKoASsRfA', 'Ivan.jpg', 'jpg', 'image/jpeg', 66111, 512, 512, NULL, '2021-05-17 16:33:39', '2021-05-17 19:11:32');
INSERT INTO `files` VALUES (459, '6acc7aab-3480-4a1a-84c1-313243e48329', 'home-team-image', 'YF6sTS3LsB', 'Melisa.jpg', 'jpg', 'image/jpeg', 75886, 512, 512, NULL, '2021-05-17 16:33:43', '2021-05-17 19:11:33');
INSERT INTO `files` VALUES (460, '6f00fbba-8913-4c2b-992f-154c5718cbec', 'home-team-image', 'y8T1BjPQ4c', 'Polina.jpg', 'jpg', 'image/jpeg', 91957, 512, 512, NULL, '2021-05-17 16:33:47', '2021-05-17 19:11:33');
INSERT INTO `files` VALUES (461, '660e4ee7-b910-4628-825f-a86eb122a29e', 'home-team-image', 'DGIR8F8okP', 'Valeriya.jpg', 'jpg', 'image/jpeg', 48715, 512, 513, NULL, '2021-05-17 16:33:52', '2021-05-17 19:11:33');
INSERT INTO `files` VALUES (462, '3401b659-d704-4684-8a6e-9690e54aa0a9', 'home-team-image', '4FiexLFsq4', 'Vlad.jpg', 'jpg', 'image/jpeg', 74286, 512, 512, NULL, '2021-05-17 16:33:57', '2021-05-17 19:11:33');
INSERT INTO `files` VALUES (463, 'c05c200c-5f2d-47ba-96ab-39955808ee9b', NULL, 'BgldAR2jrZ', 'Снимок экрана 2021-03-09 в 13.53.57.png', 'png', 'image/png', 418474, 1240, 634, NULL, '2021-05-17 16:45:50', '2021-05-17 16:45:50');
INSERT INTO `files` VALUES (464, '2cd0c66a-f4d9-4b1c-aba0-732b6a630215', NULL, 'pVdcSo3f8E', 'Emma.jpg', 'jpg', 'image/jpeg', 184316, 1280, 609, NULL, '2021-05-17 16:47:43', '2021-05-17 16:47:43');
INSERT INTO `files` VALUES (465, 'ce6aff6d-7b9d-4d9b-bbd7-27a65e69536e', NULL, 'ZT7QbjYYa3', 'Rectangle 702.png', 'png', 'image/png', 184709, 578, 242, NULL, '2021-05-17 16:49:19', '2021-05-17 16:49:19');
INSERT INTO `files` VALUES (466, '21f1d792-f725-45f5-9858-d95148295fd5', NULL, '543wVVdGje', 'Rectangle 702.png', 'png', 'image/png', 184709, 578, 242, NULL, '2021-05-17 16:50:01', '2021-05-17 16:50:01');
INSERT INTO `files` VALUES (467, '6a2a3136-af89-4b75-9ab1-01cfa6b977a7', NULL, 'xa5jEwvcyC', 'Rectangle 702-2.png', 'png', 'image/png', 367578, 730, 243, NULL, '2021-05-17 16:50:36', '2021-05-17 16:50:36');
INSERT INTO `files` VALUES (468, '0a6a88c6-218d-42f3-9a28-4f68a31acac8', NULL, 'Ij3HBqISUl', 'Rectangle 702-3.png', 'png', 'image/png', 92632, 579, 242, NULL, '2021-05-17 16:51:17', '2021-05-17 16:51:17');
INSERT INTO `files` VALUES (469, '86de813b-9225-471a-8338-e1d45bb19f4e', NULL, 'dDLuHNyqnj', 'Rectangle 702-4.png', 'png', 'image/png', 254234, 730, 242, NULL, '2021-05-17 16:51:23', '2021-05-17 16:51:23');
INSERT INTO `files` VALUES (470, 'a3acc096-3f43-48b8-bb52-f0e63ea7aad7', 'home-service-items', 'drrArbmQXH', 'Rectangle 702@2x.png', 'png', 'image/png', 847000, 1280, 424, NULL, '2021-05-17 16:53:35', '2021-05-17 19:11:31');
INSERT INTO `files` VALUES (471, 'f9fbd133-3d60-419b-8599-23a83c5634a9', 'home-service-items', 'TtKTIOworS', 'Rectangle 702@2x.png', 'png', 'image/png', 253033, 1158, 484, NULL, '2021-05-17 16:55:07', '2021-05-17 19:11:31');
INSERT INTO `files` VALUES (472, '16146bbf-a95e-4a83-9c78-bed7bee7f3fd', 'home-service-items', 'JxS6v2lS69', 'Rectangle 702@2x.png', 'png', 'image/png', 663490, 1155, 484, NULL, '2021-05-17 16:55:20', '2021-05-17 19:11:31');
INSERT INTO `files` VALUES (473, '510988c6-52ca-4a80-9a9f-d2bc98cbbbdb', 'home-service-items', 'Z4IZO9cbLp', 'Rectangle 702@2x.png', 'png', 'image/png', 1160865, 1460, 485, NULL, '2021-05-17 16:55:27', '2021-05-17 19:11:31');
INSERT INTO `files` VALUES (474, '1f0104a5-40f9-40d9-b6dd-724a5e984199', NULL, 'X9TVurTgVc', 'Rectangle 704@2x.png', 'png', 'image/png', 1599097, 1806, 1012, NULL, '2021-05-17 16:55:40', '2021-05-17 16:55:40');
INSERT INTO `files` VALUES (475, 'f714dc2e-bb27-4c66-9de2-40baeb0ac0e1', 'home-service-items', 'X5VjettXMz', 'Rectangle 704@2x.jpg', 'jpg', 'image/jpeg', 194397, 1400, 784, NULL, '2021-05-17 16:56:51', '2021-05-17 19:11:31');
INSERT INTO `files` VALUES (476, '54fc6cda-c841-4066-96fa-819184f27fbc', NULL, '3ceDVTnuZp', '13001 (_Woman with Axe_) Idle Cycle 1@2x.png', 'png', 'image/png', 896549, 1380, 998, NULL, '2021-05-17 16:59:05', '2021-05-17 16:59:05');
INSERT INTO `files` VALUES (477, 'a3d99b35-dc76-456c-bafb-c6ab6cfdbefe', 'home-service-items', 'WjZJ6WqQbE', 'Mask Group@2x.png', 'png', 'image/png', 2330742, 1806, 1012, NULL, '2021-05-17 17:00:33', '2021-05-17 19:11:31');
INSERT INTO `files` VALUES (478, '0d401df0-306f-47cb-b594-116f369083aa', 'services-art-images', 'E0LN3tADz4', 'Mask Group@2x.png', 'png', 'image/png', 1850234, 1346, 1500, NULL, '2021-05-17 17:02:52', '2021-05-17 19:16:02');
INSERT INTO `files` VALUES (479, '25743b05-1a6d-43c3-a5d6-c81d87fb720e', 'services-art-images', '1Nzfsbu0uP', 'Rectangle 7.png', 'png', 'image/png', 592652, 673, 750, NULL, '2021-05-17 17:05:05', '2021-05-17 19:16:03');
INSERT INTO `files` VALUES (480, '6f684bf6-5ce2-405d-9f83-b1f590ca2b83', NULL, 'Bz06WUwE2H', 'Rectangle 1@2x.png', 'png', 'image/png', 646383, 794, 438, NULL, '2021-05-17 17:06:51', '2021-05-17 17:06:51');
INSERT INTO `files` VALUES (481, 'a7c06603-9e9d-4f7c-ae14-2432558c8b06', NULL, 'JMoKJw2X6J', 'Rectangle 2@2x.png', 'png', 'image/png', 223372, 790, 438, NULL, '2021-05-17 17:06:57', '2021-05-17 17:06:57');
INSERT INTO `files` VALUES (482, 'dc13505c-3c5b-4745-b270-58e290cd5061', NULL, 'A5T8teXixe', 'Rectangle 3@2x.png', 'png', 'image/png', 490197, 794, 438, NULL, '2021-05-17 17:07:03', '2021-05-17 17:07:03');
INSERT INTO `files` VALUES (483, '18da5be0-e5a8-4220-8bc3-f797aad36a53', NULL, 'NkJpBY5Ruv', 'airconsole 1@2x.png', 'png', 'image/png', 1449, 74, 74, NULL, '2021-05-17 17:09:01', '2021-05-17 17:09:01');
INSERT INTO `files` VALUES (484, '095c65ae-63f4-4de3-886b-41758212f900', NULL, 'Jr9I0gIRKz', 'airconsole 1@2x.png', 'png', 'image/png', 1449, 74, 74, NULL, '2021-05-17 17:09:50', '2021-05-17 17:09:50');
INSERT INTO `files` VALUES (485, 'e6741bbd-37c3-4dc0-84b9-cff1e8e6f7e0', 'home-hero-image', 'DkS3ICApDn', 'ApiSnHwm8X.jpg', 'jpg', 'image/jpeg', 361821, 2732, 1484, NULL, '2021-05-17 19:55:30', '2021-05-17 19:55:30');
INSERT INTO `files` VALUES (486, 'e4a91635-7a24-443d-a7fc-a345450cabd4', 'home-hero-image', 'HhmguKrQTu', 'ApiSnHwm8X.jpg', 'jpg', 'image/jpeg', 361821, 2732, 1484, NULL, '2021-05-17 20:43:04', '2021-05-17 20:43:04');
INSERT INTO `files` VALUES (487, 'cce32512-a656-49f1-9937-9ca774215755', NULL, 'zREvSjziA2', 'Снимок экрана 2021-05-18 в 10.34.21.jpg', 'jpg', 'image/jpeg', 131112, 584, 580, NULL, '2021-05-18 07:34:51', '2021-05-18 07:34:51');
INSERT INTO `files` VALUES (488, '21139457-2f1c-4ffb-a557-b7899b2b5433', 'home-technologies-image', '3bY1izqo4n', 'desktop.jpg', 'jpg', 'image/jpeg', 195768, 1850, 750, NULL, '2021-05-18 15:35:20', '2021-05-18 15:35:20');
INSERT INTO `files` VALUES (489, 'ef5a4536-d404-49d6-a9b0-eab6e514033a', 'home-technologies-image-mobile', 'G74eTVFCgQ', 'desktop.jpg', 'jpg', 'image/jpeg', 195768, 1850, 750, NULL, '2021-05-18 15:35:31', '2021-05-18 15:35:31');
INSERT INTO `files` VALUES (490, '0f93db23-84d1-4473-bc5f-a0efc2c230af', 'home-service-items', '447RgtHCcs', 'Rectangle 704.jpg', 'jpg', 'image/jpeg', 1021063, 1806, 1012, NULL, '2021-05-19 16:49:40', '2021-05-19 16:49:40');
INSERT INTO `files` VALUES (491, 'e41212ff-eb3d-4b59-9991-16ae82a3b312', 'home-service-items', 'Eod8Q6XITK', 'Rectangle 704 (2).jpg', 'jpg', 'image/jpeg', 57498, 1280, 717, NULL, '2021-05-19 16:51:36', '2021-05-19 16:51:36');
INSERT INTO `files` VALUES (492, '9e9ab81e-d740-421d-bb43-818da627a8b6', 'services-ads', 'AjeWXn6pir', 'Zn1AngXMfb.jpg', 'jpg', 'image/jpeg', 37715, 496, 1064, NULL, '2021-05-20 11:01:53', '2021-05-20 11:02:45');
INSERT INTO `files` VALUES (493, '99bf6311-cc5e-42cd-82eb-3be60e00743b', 'services-ads', 'V7nEL9BwSB', 'dGclDvT2I4.jpg', 'jpg', 'image/jpeg', 28528, 497, 1065, NULL, '2021-05-20 11:02:01', '2021-05-20 11:02:45');
INSERT INTO `files` VALUES (494, '41c0a9e4-f052-4b34-ae7a-3ca7bab64adf', 'services-ads', 'kovO9CCARL', 'DwL5WUMmHU.jpg', 'jpg', 'image/jpeg', 43167, 497, 1065, NULL, '2021-05-20 11:02:11', '2021-05-20 11:02:45');
INSERT INTO `files` VALUES (495, 'bd45e7d0-61ae-4c60-b7d5-fedd2d5110d3', 'services-ads', '4eNJg0qu5p', 'PoHkLsNdtu.jpg', 'jpg', 'image/jpeg', 37996, 497, 1065, NULL, '2021-05-20 11:02:22', '2021-05-20 11:02:45');
INSERT INTO `files` VALUES (496, '48cd2b91-6ec4-4b65-9e46-74cae989e64f', 'services-ads', 'miNM8ksM4F', 'O7nEDSSeSR.jpg', 'jpg', 'image/jpeg', 99577, 745, 1597, NULL, '2021-05-20 11:02:30', '2021-05-20 11:02:45');
INSERT INTO `files` VALUES (497, '9bd81f7f-323c-4e0d-b2cd-3d97e02da03c', 'services-ads', '0EWpfzgAa4', 'DwKulWYaa0.jpg', 'jpg', 'image/jpeg', 54929, 497, 1065, NULL, '2021-05-20 11:02:36', '2021-05-20 11:02:45');
INSERT INTO `files` VALUES (498, '9a915c57-f19e-41ab-9052-47196fcb5a75', 'services-ads', 'umsio3yq1f', '3bWDAJRrks.jpg', 'jpg', 'image/jpeg', 41856, 496, 1064, NULL, '2021-05-20 11:02:43', '2021-05-20 11:02:45');
INSERT INTO `files` VALUES (499, '69c191a2-6805-4295-8642-e0b4c6196cd0', 'home-work-items', 'jvQzRiWUHY', 'fifa-21-next-level-4kscreenshot-taa.png', 'png', 'image/png', 2404805, 1920, 1080, NULL, '2021-05-20 11:20:28', '2021-05-20 11:20:28');
INSERT INTO `files` VALUES (500, 'f39dd5bf-3a63-45a3-8590-11d5688f0efe', 'home-work-items', 'Z8595z9Qs4', 'Homescapes.jpg', 'jpg', 'image/jpeg', 177333, 1163, 654, NULL, '2021-05-20 11:42:50', '2021-05-20 11:42:50');
INSERT INTO `files` VALUES (501, '8b77018e-a18a-410e-a2c0-e7c28bff2a16', 'home-technologies-gallery', 'OCbiJV5bw0', 'icazual-com-unreal-engine-logo-black-11563508503dwgh7n0xj1.png', 'png', 'image/png', 87343, 512, 524, NULL, '2021-05-20 12:39:17', '2021-05-20 12:39:17');
INSERT INTO `files` VALUES (502, '2fec6e0b-77cc-4b85-9e36-2c92d95e4529', 'home-technologies-gallery', 'DxrUIoRYoN', '595-5950114_unreal-engine-logo-charing-cross-tube-station-hd.png', 'png', 'image/png', 47559, 512, 536, NULL, '2021-05-20 12:40:14', '2021-05-20 12:40:14');
INSERT INTO `files` VALUES (503, '634c9bc1-2e81-47ac-9f8c-a7cc725e20b8', 'home-technologies-gallery', '56I4Fp9fJp', 'unreal_logo.png', 'png', 'image/png', 45715, 512, 525, NULL, '2021-05-20 12:41:46', '2021-05-20 12:41:46');
INSERT INTO `files` VALUES (504, '9aee8584-7b49-4bc5-9923-379eceaa2345', 'home-technologies-gallery', 'hYmk7aKrpe', 'unreal_logo.png', 'png', 'image/png', 28202, 300, 316, NULL, '2021-05-20 12:43:24', '2021-05-20 12:43:24');
INSERT INTO `files` VALUES (505, '0195769e-fecd-4217-9a28-387c71cb38dd', 'home-technologies-gallery', 'XLGyhFxH0n', 'path2@2x.png', 'png', 'image/png', 3915, 294, 106, NULL, '2021-05-20 12:47:16', '2021-05-20 12:47:16');
INSERT INTO `files` VALUES (506, '736424d5-2419-4c45-aa41-3afdaee0562c', 'home-technologies-gallery', 'b7QujyTFDK', 'image 17@2x.png', 'png', 'image/png', 7262, 284, 85, NULL, '2021-05-20 12:47:24', '2021-05-20 12:47:24');
INSERT INTO `files` VALUES (507, 'da9fb6b2-a642-4f7a-ad59-c9f7676bc348', 'home-technologies-gallery', '7RePeoKCzo', 'HTML5_logo_and_wordmark 1@2x.png', 'png', 'image/png', 2556, 150, 150, NULL, '2021-05-20 12:47:32', '2021-05-20 12:47:32');
INSERT INTO `files` VALUES (508, '0da7e87a-e754-4bc7-8cdb-be783e285995', 'home-technologies-gallery', '9kcJ6JYeK1', 'image 17@3x.png', 'png', 'image/png', 11802, 426, 128, NULL, '2021-05-20 12:48:41', '2021-05-20 12:48:41');
INSERT INTO `files` VALUES (509, 'a8ce3e0f-bcc6-4311-b836-3b5ebf20918d', NULL, 'riz3Pg0rOn', 'SayGames.png', 'png', 'image/png', 15058, 635, 150, NULL, '2021-05-20 12:58:46', '2021-05-20 12:58:46');
INSERT INTO `files` VALUES (510, '22eb234d-1ea2-43c9-a0d9-2366c872dd65', NULL, 'AzxenLTCPL', 'SayGames.png', 'png', 'image/png', 7844, 300, 71, NULL, '2021-05-20 12:59:39', '2021-05-20 12:59:39');
INSERT INTO `files` VALUES (511, '7a4a8994-e818-472e-8d2c-21f94ace9fe9', NULL, '7bFonrEnjj', 'SayGames.png', 'png', 'image/png', 7032, 250, 59, NULL, '2021-05-20 13:00:20', '2021-05-20 13:00:20');
INSERT INTO `files` VALUES (512, 'ff960e5f-3e7a-4a67-a023-6ac622fa5a58', NULL, 'eSb73Nz9l9', 'Frame 675.png', 'png', 'image/png', 264603, 628, 450, NULL, '2021-05-20 13:06:56', '2021-05-20 13:06:56');
INSERT INTO `files` VALUES (513, 'b826e563-71a3-45d1-8bd5-a4857781498b', NULL, '4JrZFR1ob6', 'Frame 674.png', 'png', 'image/png', 154493, 628, 450, NULL, '2021-05-20 13:07:05', '2021-05-20 13:07:05');
INSERT INTO `files` VALUES (514, '6519d703-0016-420f-adb4-e6e83ee12925', NULL, 'lyvswRK4Hz', 'Frame 674.png', 'png', 'image/png', 154493, 628, 450, NULL, '2021-05-20 13:07:11', '2021-05-20 13:07:11');
INSERT INTO `files` VALUES (515, 'cb607703-6ac3-4434-b4da-cd0419772d43', NULL, 'g5z24JhJFW', 'Frame 675.png', 'png', 'image/png', 264603, 628, 450, NULL, '2021-05-20 13:07:14', '2021-05-20 13:07:14');
INSERT INTO `files` VALUES (516, '306904eb-214e-4baf-a443-26c0b60613de', NULL, 'lW09ipGbr8', 'Frame 675.png', 'png', 'image/png', 264603, 628, 450, NULL, '2021-05-20 13:07:29', '2021-05-20 13:07:29');
INSERT INTO `files` VALUES (517, '3d3ec1e6-17a0-40cf-af99-bbb1913f6d68', NULL, 'biT5mpQpei', 'Frame 674.png', 'png', 'image/png', 154493, 628, 450, NULL, '2021-05-20 13:07:35', '2021-05-20 13:07:35');
INSERT INTO `files` VALUES (518, 'a2f9671a-1470-4c56-946b-3fffd9b86c96', NULL, 'hdocFYWo3b', 'Frame 675.png', 'png', 'image/png', 264603, 628, 450, NULL, '2021-05-20 13:07:37', '2021-05-20 13:07:37');
INSERT INTO `files` VALUES (519, '255e810f-a1a9-48f3-82fe-9b633a56dcd5', NULL, 'ns9jFzbx9R', 'Frame 674.png', 'png', 'image/png', 154493, 628, 450, NULL, '2021-05-20 13:07:40', '2021-05-20 13:07:40');
INSERT INTO `files` VALUES (520, '58abf6a6-0298-48fc-9d49-74a16d4bfe25', NULL, 'ugtYZBYuzy', 'path4@3x.png', 'png', 'image/png', 3134, 180, 214, NULL, '2021-05-20 13:16:46', '2021-05-20 13:16:46');
INSERT INTO `files` VALUES (521, '4a42100b-e9fc-4388-a063-7ceccc8c32c7', NULL, 'wfqaaVr3Q5', 'layer1@3x.png', 'png', 'image/png', 4530, 217, 189, NULL, '2021-05-20 13:16:54', '2021-05-20 13:16:54');
INSERT INTO `files` VALUES (522, '216288a4-fa71-41b3-aee4-76f3f49dc2c4', NULL, 'r0aZifEDo4', 'HTML5_logo_and_wordmark 1@3x.png', 'png', 'image/png', 3451, 225, 224, NULL, '2021-05-20 13:17:02', '2021-05-20 13:17:02');
INSERT INTO `files` VALUES (523, '26fbb0c8-b556-43cb-8c55-3663b87ab5c0', 'services-art-images', 'o6ojsJCuUc', 'Char_1.png', 'png', 'image/png', 668056, 1046, 959, NULL, '2021-05-20 14:56:28', '2021-05-20 14:56:28');
INSERT INTO `files` VALUES (524, '58a0922c-dbba-4b24-96cd-4656e9423715', 'services-art-images', 'dzEs6kESHi', 'Char_1.png', 'png', 'image/png', 668056, 1046, 959, NULL, '2021-05-20 14:56:59', '2021-05-20 14:56:59');
INSERT INTO `files` VALUES (525, 'f6fe3310-4ced-4a94-a4ac-e3358517e51b', 'services-art-images', 'srayqbTVZ9', 'rockstedy.png', 'png', 'image/png', 544517, 673, 750, NULL, '2021-05-20 15:04:05', '2021-05-20 15:04:05');
INSERT INTO `files` VALUES (526, '59480e28-2f33-4f7c-b110-fadfd91aec28', 'services-art-images', 'euj0McsQQG', 'rockstedy.png', 'png', 'image/png', 473129, 673, 750, NULL, '2021-05-20 15:06:16', '2021-05-20 15:06:16');
INSERT INTO `files` VALUES (527, '0e79dd8a-e6e2-48af-b839-96fa26517a24', 'services-art-images', 'Ou1CSE0DFm', 'pig.png', 'png', 'image/png', 529540, 673, 750, NULL, '2021-05-20 15:22:44', '2021-05-20 15:22:44');
INSERT INTO `files` VALUES (528, '58cb6bc6-c3d5-419c-9856-c688debd804e', 'services-art-images', '6L2QvM2V7j', 'mutagenman.png', 'png', 'image/png', 712401, 673, 750, NULL, '2021-05-20 15:27:59', '2021-05-20 15:27:59');
INSERT INTO `files` VALUES (529, 'ad18a169-7b82-4d50-84c0-914a1438d79a', 'services-art-images', 'LPj4ZEDyF7', 'mutagenman.png', 'png', 'image/png', 683378, 673, 750, NULL, '2021-05-20 15:29:21', '2021-05-20 15:29:21');
INSERT INTO `files` VALUES (530, 'eee7c445-ba0f-4bd4-b30a-084c1443fb16', 'services-art-images', 'ZDJwSnNYup', 'kaisey.png', 'png', 'image/png', 600458, 673, 750, NULL, '2021-05-20 15:32:35', '2021-05-20 15:32:35');
INSERT INTO `files` VALUES (531, '5723362f-c6d8-4237-b271-d31df1d49514', 'services-art-images', 'TtolNYM3dz', 'bebop.png', 'png', 'image/png', 634608, 673, 750, NULL, '2021-05-20 15:35:25', '2021-05-20 15:35:25');
INSERT INTO `files` VALUES (532, '844d113f-5e66-45de-9eb9-4cc02f6f718f', 'services-art-images', 'oDZqtP8RX6', 'emma.png', 'png', 'image/png', 612138, 673, 750, NULL, '2021-05-20 15:40:52', '2021-05-20 15:40:52');
INSERT INTO `files` VALUES (533, '98a5c95b-f522-4e17-8af6-639fdc53355b', 'services-art-images', 'PxcRb1yCsG', 'pig.png', 'png', 'image/png', 530252, 673, 750, NULL, '2021-05-20 15:42:30', '2021-05-20 15:42:30');
INSERT INTO `files` VALUES (534, 'ae50eeb3-9c55-49b2-9add-8d1da657623c', NULL, 'PUGjn8kmBc', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 16:26:18', '2021-05-20 16:26:18');
INSERT INTO `files` VALUES (535, '6dc022bd-88e6-4598-b64d-62302ad5215a', NULL, 'B4OjzJHRVi', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 16:26:22', '2021-05-20 16:26:22');
INSERT INTO `files` VALUES (536, '574dfcb8-ee27-48fa-a813-4468283de01e', NULL, 'CIdUMaC160', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 16:26:25', '2021-05-20 16:26:25');
INSERT INTO `files` VALUES (537, '827b7ccc-9853-4f5b-96ac-43a567a3d174', NULL, 'NldMjsNbN7', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 16:26:27', '2021-05-20 16:26:27');
INSERT INTO `files` VALUES (538, '824b7179-bcea-40cf-8220-386d60f4bbde', 'playable-ads-head', 'EYPhE3TbAy', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 16:32:21', '2021-05-20 16:41:11');
INSERT INTO `files` VALUES (539, '47362f1d-163e-4099-bb7e-fadd624294ec', 'playable-ads-head', 'BlAjSZMAS5', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 16:32:25', '2021-05-20 16:41:11');
INSERT INTO `files` VALUES (540, '712a10c7-0bd7-46ae-a528-84c376c49dd5', 'playable-ads-head', 'volLx23Q1e', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 16:32:28', '2021-05-20 16:41:12');
INSERT INTO `files` VALUES (541, 'a6d539d9-4f20-4cd5-bc10-e38b717ca4dd', 'playable-ads-head', 'qNQYl3ljMK', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 16:32:31', '2021-05-20 16:41:12');
INSERT INTO `files` VALUES (542, 'f3349473-d402-4c7d-93ad-dab1836f8b7e', 'home-team-image', 'HzBB07AsCf', 'dSFtXqLbXj.jpg', 'jpg', 'image/jpeg', 44807, 425, 425, NULL, '2021-05-20 16:56:30', '2021-05-20 16:56:30');
INSERT INTO `files` VALUES (543, '1c30294b-21cf-4d43-a2a2-176c0ae915f4', 'home-team-image', 'c4xUyM8rZ0', 'UL0GQgC3Bc.jpg', 'jpg', 'image/jpeg', 157925, 956, 956, NULL, '2021-05-20 16:56:35', '2021-05-20 16:56:35');
INSERT INTO `files` VALUES (544, '9c00de13-ed8a-475a-8d8b-beec6866c004', 'home-team-image', 'gKZkNvUguH', 'oMLahOGevG.jpg', 'jpg', 'image/jpeg', 230434, 619, 620, NULL, '2021-05-20 16:56:49', '2021-05-20 16:56:49');
INSERT INTO `files` VALUES (545, 'b92aa189-7942-498f-89d3-4b8424aa5c46', 'home-team-image', 'Rxyqnj3CaH', 'WBvn8fnP9S.jpg', 'jpg', 'image/jpeg', 66159, 640, 640, NULL, '2021-05-20 16:56:51', '2021-05-20 16:56:51');
INSERT INTO `files` VALUES (546, '595a4943-472a-4f49-97f7-dfd3eff01e13', 'home-team-image', 'A2NE73ZqMD', 'vLpg8F7hhe.jpg', 'jpg', 'image/jpeg', 95189, 640, 640, NULL, '2021-05-20 16:56:55', '2021-05-20 16:56:55');
INSERT INTO `files` VALUES (547, '16a6c5b2-9d8d-49c7-a8e6-472ad501790f', 'home-team-image', '4v9EqMzRPS', 'vLpg8F7hhe.jpg', 'jpg', 'image/jpeg', 95189, 640, 640, NULL, '2021-05-20 16:56:57', '2021-05-20 16:56:57');
INSERT INTO `files` VALUES (548, '92aaa30d-431d-4e52-b6d6-38d8c20f2df2', 'home-team-image', 'FaKXY2GPLH', 'qH5Bo7wGoL.jpg', 'jpg', 'image/jpeg', 66317, 640, 640, NULL, '2021-05-20 16:57:00', '2021-05-20 16:57:00');
INSERT INTO `files` VALUES (549, '73ec3687-78d3-4df5-a8f8-88a33aaf5810', 'home-team-image', 'L4b7dMCMrt', 'tVFibGWUBh.jpg', 'jpg', 'image/jpeg', 51898, 640, 640, NULL, '2021-05-20 16:57:02', '2021-05-20 16:57:02');
INSERT INTO `files` VALUES (550, '8affb776-aa48-45e7-bdd2-fb1cc3b170ce', 'home-team-image', '9zY16o2mzU', 'HJTQFS6Dz4.jpg', 'jpg', 'image/jpeg', 70873, 640, 640, NULL, '2021-05-20 16:57:04', '2021-05-20 16:57:04');
INSERT INTO `files` VALUES (551, '435dc315-c9da-4019-9f85-5015098de083', 'home-team-image', 'VFGy61E8FX', '2sKMWYI0xd.jpg', 'jpg', 'image/jpeg', 61343, 640, 640, NULL, '2021-05-20 16:57:07', '2021-05-20 16:57:07');
INSERT INTO `files` VALUES (552, 'f45c5a7f-a905-4cd4-aa52-5b58b79f1984', 'home-team-image', 'LtjTHxSpbY', '1UDQW7XojC.jpg', 'jpg', 'image/jpeg', 32714, 640, 640, NULL, '2021-05-20 16:57:10', '2021-05-20 16:57:10');
INSERT INTO `files` VALUES (553, '359f6e97-6367-446e-9b6d-2f8acbaa654b', 'home-team-image', 'TdiIaALzB7', 'n5rZ8fxYxr.jpg', 'jpg', 'image/jpeg', 36659, 640, 640, NULL, '2021-05-20 16:57:12', '2021-05-20 16:57:12');
INSERT INTO `files` VALUES (554, '421dd57c-4509-436a-a697-c5c49f9823b6', 'home-team-image', '7FuHe7ip8m', '26fQZVm2UG.jpg', 'jpg', 'image/jpeg', 52955, 640, 640, NULL, '2021-05-20 16:57:14', '2021-05-20 16:57:14');
INSERT INTO `files` VALUES (555, 'e4fd1581-3f04-4fa8-bd8f-92cab2b5f4a8', 'home-team-image', 'taZhTNwwII', '26fQZVm2UG.jpg', 'jpg', 'image/jpeg', 52955, 640, 640, NULL, '2021-05-20 16:57:16', '2021-05-20 16:57:16');
INSERT INTO `files` VALUES (556, 'd27995a0-bc1d-4cff-b640-2e20e95c5f08', 'home-team-image', 'IZiDQALCx6', 'DnoOq0XCKE.png', 'png', 'image/png', 85032, 200, 200, NULL, '2021-05-20 16:57:18', '2021-05-20 16:57:18');
INSERT INTO `files` VALUES (557, 'fe4192fa-d555-41f5-bcd1-8e17e1fb7635', 'home-team-image', 'C2yqUvM6xp', 'pctJnGISku.png', 'png', 'image/png', 62553, 200, 200, NULL, '2021-05-20 16:57:20', '2021-05-20 16:57:20');
INSERT INTO `files` VALUES (558, 'f64a2da7-3d5a-4bc2-8054-09b63d4b53b3', 'home-team-image', 'O9o5NgvJW5', 'GRPcTyxIks.png', 'png', 'image/png', 73179, 200, 200, NULL, '2021-05-20 16:57:22', '2021-05-20 16:57:22');
INSERT INTO `files` VALUES (559, '9cb5481b-be8d-47b8-88ae-99e66b337960', 'home-team-image', 'rVtIchS5qe', '8GXFZTsXh7.png', 'png', 'image/png', 79719, 200, 200, NULL, '2021-05-20 16:57:24', '2021-05-20 16:57:24');
INSERT INTO `files` VALUES (560, 'f1661f56-d7ba-44d9-93db-6611c89e8702', 'home-team-image', 'EqBHd0Q1bP', 'Rmtl19qCEF.png', 'png', 'image/png', 87312, 200, 200, NULL, '2021-05-20 16:57:26', '2021-05-20 16:57:26');
INSERT INTO `files` VALUES (561, 'd2ecab9d-7841-46a5-b243-c23d4759655a', 'home-team-image', '1U07dx5LyH', 'UGVrJwZNTu.png', 'png', 'image/png', 729199, 746, 740, NULL, '2021-05-20 16:57:29', '2021-05-20 16:57:29');
INSERT INTO `files` VALUES (562, '560ccdb8-215f-4a2a-8262-706a69d31bab', 'home-team-image', 'hUJyflx6ab', 'v0HpNZdQsU.png', 'png', 'image/png', 269461, 512, 510, NULL, '2021-05-20 16:57:32', '2021-05-20 16:57:32');
INSERT INTO `files` VALUES (563, '7dd39072-d393-487b-ae6e-024f211d9487', 'home-team-image', '2otAhTpUSv', 'v0HpNZdQsU.png', 'png', 'image/png', 269461, 512, 510, NULL, '2021-05-20 16:57:35', '2021-05-20 16:57:35');
INSERT INTO `files` VALUES (564, '5f9bf8bb-5987-4775-af1c-de49fd4237b4', 'home-team-image', 'IGRqbZjGoi', '8AswjLXMeU.jpg', 'jpg', 'image/jpeg', 212544, 512, 512, NULL, '2021-05-20 16:57:38', '2021-05-20 16:57:38');
INSERT INTO `files` VALUES (565, 'aadf1d1d-cc32-42b5-a9f0-ad3b425e9ef5', 'home-team-image', 'kUoFFKZcSl', '8AswjLXMeU.jpg', 'jpg', 'image/jpeg', 212544, 512, 512, NULL, '2021-05-20 16:57:40', '2021-05-20 16:57:40');
INSERT INTO `files` VALUES (566, 'fe637797-2039-4551-9501-a843320eeb3c', 'home-team-image', 'm5RaVv5zP8', 'pHMjWt2SIj.jpg', 'jpg', 'image/jpeg', 61133, 515, 515, NULL, '2021-05-20 16:57:42', '2021-05-20 16:57:42');
INSERT INTO `files` VALUES (567, '0165652d-df6b-4ae0-a57d-ef2f6d9f3fb1', 'home-team-image', 'em5aBKnGTf', 'v3nYbbvqVu.png', 'png', 'image/png', 419650, 512, 512, NULL, '2021-05-20 16:57:45', '2021-05-20 16:57:45');
INSERT INTO `files` VALUES (568, 'dd28739f-1d6a-443f-b6d4-089f6e82e984', 'home-team-image', 'zKCy1jQAYL', '25rKieRqiK.jpg', 'jpg', 'image/jpeg', 110500, 512, 511, NULL, '2021-05-20 16:57:47', '2021-05-20 16:57:47');
INSERT INTO `files` VALUES (569, 'd85d7e5c-173f-4455-8e9d-eab2879b89e4', 'home-team-image', '7bIJbRzb55', 'vtcpWDoeUe.jpg', 'jpg', 'image/jpeg', 123423, 512, 512, NULL, '2021-05-20 16:57:49', '2021-05-20 16:57:49');
INSERT INTO `files` VALUES (570, '20d1120e-a26b-49ed-8cbf-35e0f4811248', 'home-team-image', '4iFv29eEVj', 'E9POo2auLM.jpg', 'jpg', 'image/jpeg', 74218, 512, 513, NULL, '2021-05-20 16:57:51', '2021-05-20 16:57:51');
INSERT INTO `files` VALUES (571, '483e4eb8-5bd3-4f92-9f0c-6a239d315479', 'home-team-image', 'z5IYtu7RKc', 'SoKoASsRfA.jpg', 'jpg', 'image/jpeg', 66111, 512, 512, NULL, '2021-05-20 16:57:53', '2021-05-20 16:57:53');
INSERT INTO `files` VALUES (572, '067c4dad-5753-4a8b-9b04-03a9accae592', 'home-team-image', 'DRCkvih7bG', 'SoKoASsRfA.jpg', 'jpg', 'image/jpeg', 66111, 512, 512, NULL, '2021-05-20 16:57:56', '2021-05-20 16:57:56');
INSERT INTO `files` VALUES (573, '5b124e91-c770-40ec-ba61-0c8b21622177', 'home-team-image', 'MDfwEEbzkP', 'YF6sTS3LsB.jpg', 'jpg', 'image/jpeg', 75886, 512, 512, NULL, '2021-05-20 16:57:57', '2021-05-20 16:57:57');
INSERT INTO `files` VALUES (574, '5bb7b54b-89f5-4b3d-b70e-0d7d5af9bf61', 'home-team-image', '3i8EPkkI1W', 'y8T1BjPQ4c.jpg', 'jpg', 'image/jpeg', 91957, 512, 512, NULL, '2021-05-20 16:58:01', '2021-05-20 16:58:01');
INSERT INTO `files` VALUES (575, '62b58423-af4d-4a68-b1a0-1d995b256b2d', 'home-team-image', 'szgjatQrsl', 'DGIR8F8okP.jpg', 'jpg', 'image/jpeg', 48715, 512, 513, NULL, '2021-05-20 16:58:02', '2021-05-20 16:58:02');
INSERT INTO `files` VALUES (576, '159b97db-49b6-4ea9-976d-d677e32ef1f6', 'home-team-image', 'mlmeV85yvj', '4FiexLFsq4.jpg', 'jpg', 'image/jpeg', 74286, 512, 512, NULL, '2021-05-20 16:58:04', '2021-05-20 16:58:04');
INSERT INTO `files` VALUES (577, '7aaf5140-f62b-4042-8e7e-5d4e7a5c353e', 'home-team-image', 'G6FquN3zFg', 'y8T1BjPQ4c.jpg', 'jpg', 'image/jpeg', 91957, 512, 512, NULL, '2021-05-20 17:07:41', '2021-05-20 17:07:41');
INSERT INTO `files` VALUES (578, '558b46b5-7fd9-48f2-81ed-68febb340c92', 'home-team-image', 'JI0viTAkBA', 'UGVrJwZNTu.png', 'png', 'image/png', 729199, 746, 740, NULL, '2021-05-20 17:07:44', '2021-05-20 17:07:44');
INSERT INTO `files` VALUES (579, 'ed546b1f-24c3-4ef8-9697-6abfdc9ff2ea', 'home-team-image', 'Kr3cLNkJ6j', 'qH5Bo7wGoL.jpg', 'jpg', 'image/jpeg', 66317, 640, 640, NULL, '2021-05-20 17:07:46', '2021-05-20 17:07:46');
INSERT INTO `files` VALUES (580, 'bedf90a1-6a6f-486a-b347-0ef5afc43547', 'home-team-image', '0OztkfZ9zo', 'HJTQFS6Dz4.jpg', 'jpg', 'image/jpeg', 70873, 640, 640, NULL, '2021-05-20 17:07:48', '2021-05-20 17:07:48');
INSERT INTO `files` VALUES (581, '4bd546ed-cb33-456c-922a-0359a4597445', 'home-team-image', 'cTdGaSvmk3', 'YF6sTS3LsB.jpg', 'jpg', 'image/jpeg', 75886, 512, 512, NULL, '2021-05-20 17:07:50', '2021-05-20 17:07:50');
INSERT INTO `files` VALUES (582, '15179d21-b408-47c6-aa04-1a6950296081', 'home-team-image', 'vEG1xgtHdV', 'DGIR8F8okP.jpg', 'jpg', 'image/jpeg', 48715, 512, 513, NULL, '2021-05-20 17:07:52', '2021-05-20 17:07:52');
INSERT INTO `files` VALUES (583, '5c1c8acb-ab21-4921-9b77-c5cc6bd4bb8a', 'home-team-image', 'TDeXfl8iOv', 'v3nYbbvqVu.png', 'png', 'image/png', 419650, 512, 512, NULL, '2021-05-20 17:07:54', '2021-05-20 17:07:54');
INSERT INTO `files` VALUES (584, '5b779683-55af-44ac-83e2-cbf924e2c764', 'home-team-image', 'l1QFpwIr5d', 'n5rZ8fxYxr.jpg', 'jpg', 'image/jpeg', 36659, 640, 640, NULL, '2021-05-20 17:07:56', '2021-05-20 17:07:56');
INSERT INTO `files` VALUES (585, 'fe96e2ba-b4f5-4ce0-a4d7-9920eacc1db0', 'playable-ads-head', 'ruDaTrBxxt', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 17:14:40', '2021-05-20 20:48:14');
INSERT INTO `files` VALUES (586, 'c429e869-03ea-42c1-b0bc-db35cedb79e7', 'playable-ads-head', 'qw4FuWK2lx', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 17:14:43', '2021-05-20 20:48:14');
INSERT INTO `files` VALUES (587, '613a143c-6eeb-4b2f-93d3-b545c12aacce', 'playable-ads-head', 'o5DzG6a2XF', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 17:14:46', '2021-05-20 20:48:14');
INSERT INTO `files` VALUES (588, '06e24d88-2c94-49cc-9f2e-faa77249e034', 'playable-ads-head', '8y9OXUH7LH', 'sun-DMID1-5gwgi1jju-468x263.png', 'png', 'image/jpeg', 8435, 468, 263, NULL, '2021-05-20 17:14:49', '2021-05-20 20:48:14');
INSERT INTO `files` VALUES (589, '36188d16-83cb-4cfa-8038-2ceba6626bd0', 'services-art-images', 'fsEXKSoMda', 'mutagenman.png', 'png', 'image/png', 683556, 673, 750, NULL, '2021-05-21 07:48:44', '2021-05-21 07:48:44');
INSERT INTO `files` VALUES (590, '6c5cf910-6ccc-4423-8d36-1bbc71a1850a', 'services-art-images', 'a91PKITqnL', '3D_1.png', 'png', 'image/png', 792562, 673, 750, NULL, '2021-05-21 09:18:18', '2021-05-21 09:18:18');
INSERT INTO `files` VALUES (591, 'ab072e7d-b852-4dd1-868c-849057dd5330', 'services-art-images', 'EAR7T7t6kN', '3D_2.png', 'png', 'image/png', 623935, 673, 750, NULL, '2021-05-21 09:18:26', '2021-05-21 09:18:26');
INSERT INTO `files` VALUES (592, 'a23491d1-acf7-4fbe-9e04-55dbe065988a', 'services-art-images', 'n7pxZyzMem', '3D_3.png', 'png', 'image/png', 807946, 673, 750, NULL, '2021-05-21 09:18:37', '2021-05-21 09:18:37');
INSERT INTO `files` VALUES (593, '83427ac5-fa78-40e8-bf88-3aabd6e6bdc9', 'services-art-images', 'SI9M3u8bYm', '3D_1.png', 'png', 'image/png', 817501, 673, 750, NULL, '2021-05-21 09:21:17', '2021-05-21 09:21:17');
INSERT INTO `files` VALUES (594, '229f2e4e-0bb6-4939-a3cd-bdea049464e8', 'services-ads', 'Q3UnIhfc0j', 'FO U.png', 'png', 'image/png', 252762, 744, 1596, NULL, '2021-05-21 10:52:57', '2021-05-21 10:52:57');
INSERT INTO `files` VALUES (595, '94a4a99d-6fdb-4d30-861b-e0e93784ff5c', 'services-art-images', '7JXrw0nsEu', '3D_3.png', 'png', 'image/png', 770637, 673, 750, NULL, '2021-05-21 11:57:31', '2021-05-21 11:57:31');
INSERT INTO `files` VALUES (596, '4d561025-75fb-42c6-8e9c-62c259671160', 'home-team-image', 'PQFHarb3LM', '11.jpg', 'jpg', 'image/jpeg', 63513, 640, 640, NULL, '2021-05-21 12:26:25', '2021-05-21 12:26:25');
INSERT INTO `files` VALUES (597, 'f82e0dea-3f34-4efd-81f7-05f5d3c16cc1', 'home-team-image', 'X9fzPHauUa', 'Alexander.jpg', 'jpg', 'image/jpeg', 90169, 640, 640, NULL, '2021-05-21 12:26:26', '2021-05-21 12:26:26');
INSERT INTO `files` VALUES (598, '37c28b35-fccc-4a09-9d12-eb66312adbe7', 'home-team-image', 'JRO1KHSrQ0', 'Ekaterina.jpg', 'jpg', 'image/jpeg', 88379, 515, 515, NULL, '2021-05-21 12:26:27', '2021-05-21 12:26:27');
INSERT INTO `files` VALUES (599, '93c73af4-3aeb-4793-9a87-2e03a1264a4e', 'home-team-image', '7lnUE22ROt', 'Valeriya.JPEG', 'jpeg', 'image/jpeg', 99909, 1944, 1296, NULL, '2021-05-21 12:26:27', '2021-05-21 12:26:27');
INSERT INTO `files` VALUES (600, 'a85775a3-95b2-4383-8486-b1fef8a08174', 'home-team-image', 'F7de3Uea5F', 'Evgeniy.jpg', 'jpg', 'image/jpeg', 128261, 1280, 961, NULL, '2021-05-21 12:26:27', '2021-05-21 12:26:27');
INSERT INTO `files` VALUES (601, '6e3082c9-eec5-415d-9d28-8ac4746f8929', 'home-team-image', 'BAJokmemh9', 'Yana.jpg', 'jpg', 'image/jpeg', 123423, 512, 512, NULL, '2021-05-21 12:26:27', '2021-05-21 12:26:27');
INSERT INTO `files` VALUES (602, '80a23656-d8ac-460f-afe6-a20bdb1808dd', 'home-team-image', 'ADPxtirrRX', 'Anna_Dro.jpg', 'jpg', 'image/jpeg', 146822, 512, 512, NULL, '2021-05-21 12:26:27', '2021-05-21 12:26:27');
INSERT INTO `files` VALUES (603, '598ae923-8d50-4fdb-af14-ab2218ecd910', 'home-team-image', 'znUkvSZmLm', 'Anastasia.jpg', 'jpg', 'image/jpeg', 211710, 960, 1280, NULL, '2021-05-21 12:26:28', '2021-05-21 12:26:28');
INSERT INTO `files` VALUES (604, '447a4a62-2566-47a7-97c8-4f405870f46b', 'home-team-image', 'hQSmpYYk28', 'Dasha.jpg', 'jpg', 'image/jpeg', 212544, 512, 512, NULL, '2021-05-21 12:26:28', '2021-05-21 12:26:28');
INSERT INTO `files` VALUES (605, 'fac02db5-c1bf-4a49-a933-66b57418eba9', 'home-team-image', 'NLBtz2XnUK', 'Grogory.jpg', 'jpg', 'image/jpeg', 230434, 619, 620, NULL, '2021-05-21 12:26:28', '2021-05-21 12:26:28');
INSERT INTO `files` VALUES (606, 'eb195f91-ef3d-41e7-be1c-ab66d31b7926', 'home-team-image', 'k9hrYaNhkx', 'avatar.png', 'png', 'image/png', 269461, 512, 510, NULL, '2021-05-21 12:26:28', '2021-05-21 12:26:28');
INSERT INTO `files` VALUES (607, 'c847e87b-c16b-4ac8-aef1-efcb51ada4f1', 'home-team-image', 'd0744VA13X', 'Melisa.jpg', 'jpg', 'image/jpeg', 312251, 1440, 1701, NULL, '2021-05-21 12:26:28', '2021-05-21 12:26:28');
INSERT INTO `files` VALUES (608, '855a6477-1303-46b5-9f40-dc780852a976', 'home-team-image', 'p4N1CLM2dp', 'Vlad.jpg', 'jpg', 'image/jpeg', 365501, 1536, 2048, NULL, '2021-05-21 12:26:29', '2021-05-21 12:26:29');
INSERT INTO `files` VALUES (609, '6c175a3c-8431-4189-9a89-bfa60086c215', 'home-team-image', 'FYMH4givLR', 'IMG_0763.png', 'png', 'image/png', 419650, 512, 512, NULL, '2021-05-21 12:26:29', '2021-05-21 12:26:29');
INSERT INTO `files` VALUES (610, 'a72bf828-4088-4364-91a0-ab650678c639', 'home-team-image', 'ChV6NOAQoA', 'Polina.jpg', 'jpg', 'image/jpeg', 888054, 1676, 1882, NULL, '2021-05-21 12:26:30', '2021-05-21 12:26:30');
INSERT INTO `files` VALUES (611, '78d31369-44fc-4e2b-af80-ad0d2d7cec4d', 'home-team-image', 'dyE2SS47pg', 'Anna.jpg', 'jpg', 'image/jpeg', 924432, 1296, 1936, NULL, '2021-05-21 12:26:30', '2021-05-21 12:26:30');
INSERT INTO `files` VALUES (612, '3e32f0fc-03cc-4943-b9fb-5887f1659f01', 'home-team-image', 'Bl1FVu4Wod', 'Ivan.jpg', 'jpg', 'image/jpeg', 1638040, 1080, 1350, NULL, '2021-05-21 12:26:30', '2021-05-21 12:26:30');
INSERT INTO `files` VALUES (613, '106fe0b5-a36f-441e-9b96-4cc169f13477', 'home-team-image', 'hHYZPjENpj', 'Julia Lesko.jpg', 'jpg', 'image/jpeg', 32957, 512, 512, NULL, '2021-05-21 12:26:37', '2021-05-21 12:26:37');
INSERT INTO `files` VALUES (614, '777d66bb-811f-4959-b0ee-7ec0beffa68f', 'home-team-image', 'NJsdneIdc8', 'avatar7.png', 'png', 'image/png', 75161, 200, 200, NULL, '2021-05-21 12:26:37', '2021-05-21 12:26:37');
INSERT INTO `files` VALUES (615, '12fcc874-98ce-44b1-93b3-4005347acd16', 'home-team-image', 'aw1bXUiM4c', 'avatar6.png', 'png', 'image/png', 79719, 200, 200, NULL, '2021-05-21 12:26:37', '2021-05-21 12:26:37');
INSERT INTO `files` VALUES (616, 'ba2653cf-45f9-48cc-8941-fc472ffcdf3b', 'home-team-image', 'hAZDefJjQv', 'avatar5.png', 'png', 'image/png', 87312, 200, 200, NULL, '2021-05-21 12:26:37', '2021-05-21 12:26:37');
INSERT INTO `files` VALUES (617, '79ed7521-9eb2-434c-98f2-b3be4875b19e', 'home-team-image', 'ZgopfqaN3Z', 'photo_2021-05-19 15.16.43.jpeg', 'jpeg', 'image/jpeg', 40647, 640, 640, NULL, '2021-05-21 12:26:37', '2021-05-21 12:26:37');
INSERT INTO `files` VALUES (618, '37a9a652-48a3-44ca-af15-e001436365a6', 'home-team-image', 'nPy4L4Rphw', 'photo_2021-05-19 15.10.54.jpeg', 'jpeg', 'image/jpeg', 72459, 640, 640, NULL, '2021-05-21 12:26:37', '2021-05-21 12:26:37');
INSERT INTO `files` VALUES (619, '9dffeecd-8a70-4c0f-baf6-f595d92515a7', 'home-team-image', '6cvJt1Z20i', 'photo_2021-05-19 15.27.56.jpeg', 'jpeg', 'image/jpeg', 76606, 640, 640, NULL, '2021-05-21 12:26:37', '2021-05-21 12:26:37');
INSERT INTO `files` VALUES (620, '90c30b98-90db-410a-9ae7-5165f99059b2', 'home-team-image', 'OCxDmG2t3j', 'Screenshot 2020-11-18 at 11.59.10.png', 'png', 'image/png', 82911, 254, 190, NULL, '2021-05-21 12:26:37', '2021-05-21 12:26:37');
INSERT INTO `files` VALUES (621, '49941a45-ff8b-41d7-8025-06b49309c410', 'home-team-image', 'mGe2S6VuJV', 'photo_2021-05-19 15.16.18.jpeg', 'jpeg', 'image/jpeg', 91870, 640, 640, NULL, '2021-05-21 12:26:37', '2021-05-21 12:26:37');
INSERT INTO `files` VALUES (622, '073dcc16-4d0b-462c-bdb2-713377ef83ed', 'home-team-image', 'ykcz9rrsl1', 'photo_2021-05-19 15.14.32.jpeg', 'jpeg', 'image/jpeg', 121266, 640, 640, NULL, '2021-05-21 12:26:37', '2021-05-21 12:26:37');
INSERT INTO `files` VALUES (623, '3bc7824d-dcbf-497d-8832-3ccc2363d61e', 'home-team-image', 'FGvQzdDsM3', 'IMG_20210517_184820.jpg', 'jpg', 'image/jpeg', 379153, 1080, 1080, NULL, '2021-05-21 12:26:38', '2021-05-21 12:26:38');
INSERT INTO `files` VALUES (624, 'ef1c78a0-4214-40ce-b7a4-a09204dbc11c', 'home-team-image', 'AAWydYe3Lh', 'Kristina.png', 'png', 'image/png', 401374, 512, 512, NULL, '2021-05-21 12:26:38', '2021-05-21 12:26:38');
INSERT INTO `files` VALUES (625, 'f7722d14-e327-4e4d-8a7b-35889db588df', 'home-team-image', 'TVJ4brYXfn', 'photo_2021-05-19_19-14-01.png', 'png', 'image/png', 430646, 512, 512, NULL, '2021-05-21 12:26:38', '2021-05-21 12:26:38');
INSERT INTO `files` VALUES (626, '29341bb9-f21f-4029-81f1-a8a91f010297', 'home-team-image', 'C3vKuQfwTJ', 'Screenshot 2020-11-18 at 12.00.26.png', 'png', 'image/png', 729199, 746, 740, NULL, '2021-05-21 12:26:38', '2021-05-21 12:26:38');
INSERT INTO `files` VALUES (627, '8d9d4216-0d91-4fc3-adcb-1addfebe6db9', 'home-team-image', 'XpFspS2uVX', 'Alexey Maslov - Senior 3D Artist.jpg', 'jpg', 'image/jpeg', 19979, 432, 432, NULL, '2021-05-21 12:26:48', '2021-05-21 12:26:48');
INSERT INTO `files` VALUES (628, 'b7cc9f82-e9ae-4a11-8350-17df9a0303d2', 'home-team-image', 'LAEqACr90B', 'Vladimir_Petrichenko - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 17045, 384, 384, NULL, '2021-05-21 12:26:48', '2021-05-21 12:26:48');
INSERT INTO `files` VALUES (629, 'fad39c60-46ef-4f28-8421-6080a8560900', 'home-team-image', 's7OqewVJYe', 'Viktor Shvedchikov - 3D Artist.jpg', 'jpg', 'image/jpeg', 20118, 320, 305, NULL, '2021-05-21 12:26:48', '2021-05-21 12:26:48');
INSERT INTO `files` VALUES (630, 'add7d8a8-a76f-4895-b6dc-e4d786e0eb30', 'home-team-image', '7tesc2Tkeo', 'Anastasia Shukshina - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 18467, 351, 351, NULL, '2021-05-21 12:26:48', '2021-05-21 12:26:48');
INSERT INTO `files` VALUES (631, '1623f0dd-cb96-4dac-ae7d-b803c0889c11', 'home-team-image', 'JLaR86gJRm', 'Alexey Lobov - Senior 3D Artist.jpg', 'jpg', 'image/jpeg', 18288, 384, 384, NULL, '2021-05-21 12:26:48', '2021-05-21 12:26:48');
INSERT INTO `files` VALUES (632, '47e6ddac-0c48-42d0-8b6b-4e9652a13975', 'home-team-image', 'Wof2694GJw', 'Anastasia Rybchenko - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 63467, 720, 885, NULL, '2021-05-21 12:26:48', '2021-05-21 12:26:48');
INSERT INTO `files` VALUES (633, 'e2a2db91-39f3-4d3d-9472-c35dc66c67da', 'home-team-image', 'gJnJYrsKP3', 'Anton Pasynkov - 3D artist.jpg', 'jpg', 'image/jpeg', 56520, 441, 404, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (634, 'd3963fa1-7b10-4f9a-b979-3c6215a98a50', 'home-team-image', 'qZKpV4GLby', 'Anastsiya Shimbareva - Senior 3D artist.JPG', 'jpg', 'image/jpeg', 61388, 459, 400, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (635, '0d7d162b-c702-4842-8539-a4396314673d', 'home-team-image', 'pGqXcCWaAj', 'Georgy Kuzmenko - Senior 3D Artist.jpg', 'jpg', 'image/jpeg', 49398, 402, 431, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (636, '9d1c3b05-6c9f-4792-8568-af827f83f300', 'home-team-image', 'aQ8HicobqP', 'Inna Ermakova -  3D Artist.jpg', 'jpg', 'image/jpeg', 54745, 537, 537, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (637, '50a102c0-c498-4922-88bc-7e8dbbbd82bc', 'home-team-image', 'glTgIo3P7Q', 'Vyacheslav Konovalov -  Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 77392, 439, 419, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (638, '6e0762aa-8c57-4947-aac4-2ebee6c59046', 'home-team-image', 'xVCmQkgxYa', 'Olga Bubnova - Senior 3D Artist.jpg', 'jpg', 'image/jpeg', 72591, 418, 418, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (639, '7c1012fe-8025-4b8b-9672-f67d4855329f', 'home-team-image', 'Uth2mHnxCG', 'Klim Starko -  3D Artist.jpg', 'jpg', 'image/jpeg', 81447, 451, 381, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (640, 'b694d187-59e2-4e73-98be-bc85b7257262', 'home-team-image', 'qTDXu9KlXx', 'Alexandr Khatcela - 3D Artist.jpg', 'jpg', 'image/jpeg', 80987, 424, 401, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (641, '42810be9-a8c1-4297-bf6f-fdfecf94f291', 'home-team-image', '4o4ibFn9cy', 'Olga Noskova - 3D Artist.jpg', 'jpg', 'image/jpeg', 80360, 409, 425, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (642, 'acf320b3-260f-446d-ab3e-7fb90e4183c4', 'home-team-image', 'cAablkWuIy', 'Alexander Davydov -3D Artist.jpg', 'jpg', 'image/jpeg', 90534, 492, 484, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (643, 'dc6affcb-e3c3-4111-b304-236b6143822b', 'home-team-image', 'BAJokmemh9', 'Igor Meshkov -  Senior 3D Artist.jpg', 'jpg', 'image/jpeg', 83229, 489, 483, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (644, '3c6621f1-4362-47d8-9ba3-a5c0f1c0e87e', 'home-team-image', 'XaE6EL7QhW', 'Elena Mezina - 3D Artist.jpg', 'jpg', 'image/jpeg', 88350, 453, 448, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (645, '3c94668e-0024-4390-9235-e1de4234ca4c', 'home-team-image', 'VIWdy0LH6O', 'Leon Nekrasov - 3D Artist.jpg', 'jpg', 'image/jpeg', 81825, 415, 438, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (646, '35e6a8d6-854e-4e06-9288-effcf0a37d9e', 'home-team-image', '7etMCd9udp', 'Ekaterina Poloznikova - 3D Artist.jpg', 'jpg', 'image/jpeg', 101444, 724, 736, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (647, '914b6b4f-3389-4d2d-ab93-2845fb39467c', 'home-team-image', 'UdP5UpLH6m', 'Konstantin Milovanov - It engineer.jpg', 'jpg', 'image/jpeg', 104884, 690, 650, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (648, 'b69bf564-b903-469a-b883-9128ade6df33', 'home-team-image', '7uDiz4Gu4r', 'Alexandr Zavrazhnov - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 115512, 665, 554, NULL, '2021-05-21 12:26:49', '2021-05-21 12:26:49');
INSERT INTO `files` VALUES (649, 'ac06caa0-9ced-4067-b42c-534daa692bda', 'home-team-image', '2eCFstH3UD', 'Elena Fedorova -3D Artist.jpg', 'jpg', 'image/jpeg', 144751, 591, 591, NULL, '2021-05-21 12:26:50', '2021-05-21 12:26:50');
INSERT INTO `files` VALUES (650, '5145614e-ed56-43dd-b5a6-de70ff8dbe6b', 'home-team-image', 'C7hXD9RxQh', 'Irina Utkina - Associate art director.jpg', 'jpg', 'image/jpeg', 146071, 1446, 1447, NULL, '2021-05-21 12:26:50', '2021-05-21 12:26:50');
INSERT INTO `files` VALUES (651, 'b2dfe4af-28c2-4346-bcd3-d839e6cdcde7', 'home-team-image', 'lxwE6Qh38q', 'Yana Sidorova - Game Designer.jpg', 'jpg', 'image/jpeg', 136274, 511, 543, NULL, '2021-05-21 12:26:50', '2021-05-21 12:26:50');
INSERT INTO `files` VALUES (652, 'c9ea9695-da5c-42e9-ad5e-d91250bd67fc', 'home-team-image', 'rRGqu5JVU4', 'Ilya Ushakov - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 149284, 800, 734, NULL, '2021-05-21 12:26:50', '2021-05-21 12:26:50');
INSERT INTO `files` VALUES (653, 'c7a00723-04a8-4d41-a5fd-efc1be313ba5', 'home-team-image', 'OLDtMumXwW', 'Konstantin Biryukov - 3D Artist.jpg', 'jpg', 'image/jpeg', 161802, 591, 597, NULL, '2021-05-21 12:26:50', '2021-05-21 12:26:50');
INSERT INTO `files` VALUES (654, '0b8802d3-b1e4-4467-bdf9-04e3a7b657fd', 'home-team-image', 'WbqLg6W3SB', 'Nickolay Pomoynickiy - Game Designer.jpg', 'jpg', 'image/jpeg', 179696, 710, 683, NULL, '2021-05-21 12:26:51', '2021-05-21 12:26:51');
INSERT INTO `files` VALUES (655, 'faff0803-5697-4924-851f-6f9e033d279b', 'home-team-image', 'DqUrJ4qwYh', 'Evgenii Gaidai - 3D Artist.jpg', 'jpg', 'image/jpeg', 164816, 607, 549, NULL, '2021-05-21 12:26:51', '2021-05-21 12:26:51');
INSERT INTO `files` VALUES (656, '5133c083-4edc-40aa-995c-246ffb1cbc85', 'home-team-image', 'eSPA0FlxZd', 'Anton Bukatin - 3D Artist.jpg', 'jpg', 'image/jpeg', 168569, 958, 958, NULL, '2021-05-21 12:26:51', '2021-05-21 12:26:51');
INSERT INTO `files` VALUES (657, 'cff6a5a3-306a-4f6f-b458-8b15b3625fd0', 'home-team-image', '6nLJAL7DDs', 'Sergey Guley - Senior 3D artist.jpg', 'jpg', 'image/jpeg', 165731, 2628, 2628, NULL, '2021-05-21 12:26:51', '2021-05-21 12:26:51');
INSERT INTO `files` VALUES (658, '31ff143c-6115-45ca-ad25-69c792582c81', 'home-team-image', 'BTwg16lGuO', 'Vladimir Dolgih - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 196136, 956, 956, NULL, '2021-05-21 12:26:51', '2021-05-21 12:26:51');
INSERT INTO `files` VALUES (659, 'ccb02350-015d-48cf-b4ae-4ce3fa933e90', 'home-team-image', 'Oii1u8mjAB', 'Zoya Obmenennaya - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 202590, 1889, 1889, NULL, '2021-05-21 12:26:51', '2021-05-21 12:26:51');
INSERT INTO `files` VALUES (660, '8ee00bfb-c0dc-4949-a581-c72ed144cb67', 'home-team-image', 'hq0oJT5x2v', 'Margarita Romanova - 3D Artist.jpg', 'jpg', 'image/jpeg', 202170, 956, 956, NULL, '2021-05-21 12:26:51', '2021-05-21 12:26:51');
INSERT INTO `files` VALUES (661, 'f8058030-19f0-4f40-aafc-8fe24a8821c7', 'home-team-image', 'IIXsHLUeAL', 'Artem Anoshkin - Development director.jpg', 'jpg', 'image/jpeg', 210113, 2254, 2254, NULL, '2021-05-21 12:26:51', '2021-05-21 12:26:51');
INSERT INTO `files` VALUES (662, '3bc0261f-aa7b-4c74-a3e0-974911e61f82', 'home-team-image', 'TzK2HLSznj', 'Denis Mihaylov - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 227789, 960, 960, NULL, '2021-05-21 12:26:51', '2021-05-21 12:26:51');
INSERT INTO `files` VALUES (663, '40faf9ee-c9e2-463d-8f18-d19ce13aacf0', 'home-team-image', 'ICZ26R4h95', 'Viktor Shvedchikov - 3D Artist.jpg', 'jpg', 'image/jpeg', 20118, 320, 305, NULL, '2021-05-21 12:27:04', '2021-05-21 12:27:04');
INSERT INTO `files` VALUES (664, 'ccf76066-7442-4196-b7fd-c9f7994c785d', 'home-team-image', 'zN264j19jv', 'Vladimir_Petrichenko - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 17045, 384, 384, NULL, '2021-05-21 12:27:06', '2021-05-21 12:27:06');
INSERT INTO `files` VALUES (665, '8af8c066-ddae-4ae9-8013-7596b13f0c61', 'home-team-image', 'ihOlky7AvS', 'Alexey Maslov - Senior 3D Artist.jpg', 'jpg', 'image/jpeg', 19979, 432, 432, NULL, '2021-05-21 12:27:06', '2021-05-21 12:27:06');
INSERT INTO `files` VALUES (666, '0d57fa26-b72d-4c0d-acd8-59f5d036a9f7', 'home-team-image', '45ijs4h1jW', 'Alexey Lobov - Senior 3D Artist.jpg', 'jpg', 'image/jpeg', 18288, 384, 384, NULL, '2021-05-21 12:27:06', '2021-05-21 12:27:06');
INSERT INTO `files` VALUES (667, '659f2d0e-4719-45b5-a809-0e4c4ca0b4bc', 'home-team-image', 'N2UF6PeASk', 'Anastasia Shukshina - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 18467, 351, 351, NULL, '2021-05-21 12:27:07', '2021-05-21 12:27:07');
INSERT INTO `files` VALUES (668, '3539d819-7028-49ff-a3b7-9d83f4022b2f', 'home-team-image', 'vuOxTK2yIB', 'Anastsiya Shimbareva - Senior 3D artist.JPG', 'jpg', 'image/jpeg', 61388, 459, 400, NULL, '2021-05-21 12:27:08', '2021-05-21 12:27:08');
INSERT INTO `files` VALUES (669, '3cac715f-db71-4e69-9b61-fadb4504665a', 'home-team-image', '1I4NnVucCq', 'Anastasia Rybchenko - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 63467, 720, 885, NULL, '2021-05-21 12:27:08', '2021-05-21 12:27:08');
INSERT INTO `files` VALUES (670, 'bb0930ea-8747-4386-899b-efd575b86ab6', 'home-team-image', '3WE4Jv0H6x', 'Anton Pasynkov - 3D artist.jpg', 'jpg', 'image/jpeg', 56520, 441, 404, NULL, '2021-05-21 12:27:08', '2021-05-21 12:27:08');
INSERT INTO `files` VALUES (671, '2b8bb15c-fe65-47e6-bbbd-c9860988389e', 'home-team-image', 'h3o5o9YNzg', 'Georgy Kuzmenko - Senior 3D Artist.jpg', 'jpg', 'image/jpeg', 49398, 402, 431, NULL, '2021-05-21 12:27:08', '2021-05-21 12:27:08');
INSERT INTO `files` VALUES (672, '1796d977-38fa-4a1d-a565-18531a6d77fa', 'home-team-image', 'USRJYX8Eey', 'Inna Ermakova -  3D Artist.jpg', 'jpg', 'image/jpeg', 54745, 537, 537, NULL, '2021-05-21 12:27:09', '2021-05-21 12:27:09');
INSERT INTO `files` VALUES (673, '05254657-c6d8-48be-b4c3-dd1f8537c6bb', 'home-team-image', '6KlAFxEGZ0', 'Vyacheslav Konovalov -  Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 77392, 439, 419, NULL, '2021-05-21 12:27:09', '2021-05-21 12:27:09');
INSERT INTO `files` VALUES (674, 'e78bb5af-7b2e-4c04-8365-16fe12837b48', 'home-team-image', 'RpZHpmcHR8', 'Alexandr Khatcela - 3D Artist.jpg', 'jpg', 'image/jpeg', 80987, 424, 401, NULL, '2021-05-21 12:27:09', '2021-05-21 12:27:09');
INSERT INTO `files` VALUES (675, '1df2f1c6-9072-4740-889b-262976a0476c', 'home-team-image', 'PQLDcJhC1D', 'Klim Starko -  3D Artist.jpg', 'jpg', 'image/jpeg', 81447, 451, 381, NULL, '2021-05-21 12:27:09', '2021-05-21 12:27:09');
INSERT INTO `files` VALUES (676, '2ac2de2c-02f6-4a38-ad6a-5afaa71b3df3', 'home-team-image', 'ETXiLAz7dW', 'Olga Bubnova - Senior 3D Artist.jpg', 'jpg', 'image/jpeg', 72591, 418, 418, NULL, '2021-05-21 12:27:09', '2021-05-21 12:27:09');
INSERT INTO `files` VALUES (677, '1f464b86-ca59-4b58-bc3d-4dc203e7c638', 'home-team-image', 'jsr2LKM16b', 'Olga Noskova - 3D Artist.jpg', 'jpg', 'image/jpeg', 80360, 409, 425, NULL, '2021-05-21 12:27:09', '2021-05-21 12:27:09');
INSERT INTO `files` VALUES (678, 'bf0190cd-6b8c-4f63-98ec-655c67790ff7', 'home-team-image', '1aeNmqQVHs', 'Alexander Davydov -3D Artist.jpg', 'jpg', 'image/jpeg', 90534, 492, 484, NULL, '2021-05-21 12:27:09', '2021-05-21 12:27:09');
INSERT INTO `files` VALUES (679, '45ab73d3-8816-420f-a67e-5f73ed4d8c23', 'home-team-image', 'GWoLIeiAXa', 'Elena Mezina - 3D Artist.jpg', 'jpg', 'image/jpeg', 88350, 453, 448, NULL, '2021-05-21 12:27:10', '2021-05-21 12:27:10');
INSERT INTO `files` VALUES (680, '1c9aca51-e2ff-495d-bb9d-1fca09273968', 'home-team-image', 'iS0js3JKQE', 'Igor Meshkov -  Senior 3D Artist.jpg', 'jpg', 'image/jpeg', 83229, 489, 483, NULL, '2021-05-21 12:27:10', '2021-05-21 12:27:10');
INSERT INTO `files` VALUES (681, '1d457264-adc6-4569-9d7e-a665a48656de', 'home-team-image', 'BkIGgg24lu', 'Leon Nekrasov - 3D Artist.jpg', 'jpg', 'image/jpeg', 81825, 415, 438, NULL, '2021-05-21 12:27:10', '2021-05-21 12:27:10');
INSERT INTO `files` VALUES (682, '80d6b205-3b31-4496-b13b-d3c8e7e45637', 'home-team-image', 'qzYWvnLdzj', 'Ekaterina Poloznikova - 3D Artist.jpg', 'jpg', 'image/jpeg', 101444, 724, 736, NULL, '2021-05-21 12:27:10', '2021-05-21 12:27:10');
INSERT INTO `files` VALUES (683, '489d408d-d2c7-473d-a712-55b8883825de', 'home-team-image', '5p0zK5W3W0', 'Konstantin Milovanov - It engineer.jpg', 'jpg', 'image/jpeg', 104884, 690, 650, NULL, '2021-05-21 12:27:10', '2021-05-21 12:27:10');
INSERT INTO `files` VALUES (684, '9903d73e-3d05-4af4-8add-a023c29c140d', 'home-team-image', 'dC85cvM7m9', 'Alexandr Zavrazhnov - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 115512, 665, 554, NULL, '2021-05-21 12:27:10', '2021-05-21 12:27:10');
INSERT INTO `files` VALUES (685, 'cab7472a-e907-41f3-ad7d-e6baa098a7f4', 'home-team-image', 'zKfTNlGX5d', 'Sergey Guley - Senior 3D artist.jpg', 'jpg', 'image/jpeg', 165731, 2628, 2628, NULL, '2021-05-21 12:27:10', '2021-05-21 12:27:10');
INSERT INTO `files` VALUES (686, 'f72c8e96-f610-4298-9c83-1447f53ccfef', 'home-team-image', 'ceWDSOoIO9', 'Yana Sidorova - Game Designer.jpg', 'jpg', 'image/jpeg', 136274, 511, 543, NULL, '2021-05-21 12:27:10', '2021-05-21 12:27:10');
INSERT INTO `files` VALUES (687, '660f988a-9d2e-4071-b320-0df154128f4c', 'home-team-image', 'SXb4WIxOe7', 'Elena Fedorova -3D Artist.jpg', 'jpg', 'image/jpeg', 144751, 591, 591, NULL, '2021-05-21 12:27:11', '2021-05-21 12:27:11');
INSERT INTO `files` VALUES (688, '6eb8ecfd-7e50-41d4-8004-65db4ee0ed81', 'home-team-image', 'gShJX5NQBB', 'Irina Utkina - Associate art director.jpg', 'jpg', 'image/jpeg', 146071, 1446, 1447, NULL, '2021-05-21 12:27:11', '2021-05-21 12:27:11');
INSERT INTO `files` VALUES (689, 'c288da45-8e59-4f2f-9878-2c03585f40b3', 'home-team-image', '6n8LyQ3Fky', 'Vladimir Dolgih - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 196136, 956, 956, NULL, '2021-05-21 12:27:11', '2021-05-21 12:27:11');
INSERT INTO `files` VALUES (690, '9d726207-506a-451e-b843-f98940619155', 'home-team-image', '2Jv6MAhaKv', 'Konstantin Biryukov - 3D Artist.jpg', 'jpg', 'image/jpeg', 161802, 591, 597, NULL, '2021-05-21 12:27:11', '2021-05-21 12:27:11');
INSERT INTO `files` VALUES (691, '632f094a-a060-4efa-a180-c4c78b17307f', 'home-team-image', 'VaoSyB1909', 'Ilya Ushakov - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 149284, 800, 734, NULL, '2021-05-21 12:27:11', '2021-05-21 12:27:11');
INSERT INTO `files` VALUES (692, '7aaed355-05a4-4ac1-9677-22016ff19a9b', 'home-team-image', 'IJDCEmnWzi', 'Evgenii Gaidai - 3D Artist.jpg', 'jpg', 'image/jpeg', 164816, 607, 549, NULL, '2021-05-21 12:27:11', '2021-05-21 12:27:11');
INSERT INTO `files` VALUES (693, '6b12cea1-20c8-42de-8a47-1bbc8ad47e16', 'home-team-image', 'ZboO3Hfe2D', 'Anton Bukatin - 3D Artist.jpg', 'jpg', 'image/jpeg', 168569, 958, 958, NULL, '2021-05-21 12:27:11', '2021-05-21 12:27:11');
INSERT INTO `files` VALUES (694, 'f466563d-c4fa-4d90-aa08-c0491e53dea1', 'home-team-image', 'hGdqnBV9Mg', 'Nickolay Pomoynickiy - Game Designer.jpg', 'jpg', 'image/jpeg', 179696, 710, 683, NULL, '2021-05-21 12:27:11', '2021-05-21 12:27:11');
INSERT INTO `files` VALUES (695, 'f42adbc7-4ac3-4fbd-bcbb-2c3b8779cf6f', 'home-team-image', 'UNPPIaARQ7', 'Zoya Obmenennaya - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 202590, 1889, 1889, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (696, '6c78918d-19ea-4e9e-b93a-fcb2e0bfb2da', 'home-team-image', 'Q4wR2V70QE', 'Margarita Romanova - 3D Artist.jpg', 'jpg', 'image/jpeg', 202170, 956, 956, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (697, '9058444f-304a-47ac-8af5-ca7883db5491', 'home-team-image', 'bSs8gNMJJY', 'Artem Anoshkin - Development director.jpg', 'jpg', 'image/jpeg', 210113, 2254, 2254, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (698, '20af5f0f-ae28-44e3-bad4-b122930e17d7', 'home-team-image', 'm47i3A2Fsm', 'Denis Mihaylov - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 227789, 960, 960, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (699, 'eb98bc0c-8112-4452-808b-d1c3e8124816', 'home-team-image', 'mUl5pVn0sb', 'Natalia Bordunova - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 242270, 960, 960, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (700, 'dfb59484-ef76-463c-9f2a-659df1b9bb24', 'home-team-image', 'COgkY5D6v9', 'Alexey Prokhorenkov - Senior game designer.jpg', 'jpg', 'image/jpeg', 245737, 1219, 1079, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (701, '15b7d405-2a61-4c4c-aa0b-5f59fb5cfd1a', 'home-team-image', 'NZAH7vZaFA', 'Artem Kovalev - 3D Artist.jpg', 'jpg', 'image/jpeg', 246425, 960, 960, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (702, '76804c70-e2f8-448d-b406-975f97a25b82', 'home-team-image', 'pnZuJXc8Jr', 'Elena Rezeda - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 257245, 960, 960, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (703, '6650a097-764e-4aa3-badc-34f24ee23bea', 'home-team-image', 'j43wr77P2B', 'Maria Shipitsyna - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 260831, 956, 956, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (704, 'dcea61f5-4e68-43b9-85d8-88f0ead7acc0', 'home-team-image', 'oDxItOp3h0', 'Alex Alexseev - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 273004, 655, 565, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (705, '67eae1ac-9905-4c5e-96d4-3dc88ccd0f0b', 'home-team-image', 'sULPkF6ywa', 'Maxim Gapoyan -  Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 257148, 960, 960, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (706, '8f0a4ad1-b718-4bfa-bc4c-006e322431ae', 'home-team-image', 'S6xAf8Qlur', 'Alexander Novojilov - 3D Artist.jpg', 'jpg', 'image/jpeg', 266545, 960, 960, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (707, 'b14a79e6-3ad9-42bc-95de-7889b246a93f', 'home-team-image', 'R3PRHLz8Xb', 'Irina Bessonova - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 274181, 960, 960, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (708, '8f329464-7f97-432d-bbd1-44940b847a89', 'home-team-image', 'MPxnI32tDe', 'Kolesnikova Nadezhda - Senior 3D artist.jpg', 'jpg', 'image/jpeg', 271845, 1440, 1440, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (709, 'a89a4413-98da-40e1-8c9d-bb49abfeaf09', 'home-team-image', 'EeUIsxOmJu', 'Maxim Artes - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 266501, 960, 960, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (710, 'b66a6f1a-bcf9-43ab-a910-0e91d755c23c', 'home-team-image', '5sWZVFSBAR', 'Nikita Sergun - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 268955, 960, 960, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (711, '31cdc1e0-5101-4af0-acf3-e78fb15308ee', 'home-team-image', 'sNmQ0d6jYl', 'Yana Slavkina - Junior 3D Artist.png', 'png', 'image/png', 305349, 508, 508, NULL, '2021-05-21 12:27:12', '2021-05-21 12:27:12');
INSERT INTO `files` VALUES (712, '7e2c663d-d607-42c0-95ce-f554cde316ba', 'home-team-image', 'GdReqY5ijU', 'Alina Sidorina - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 300208, 960, 960, NULL, '2021-05-21 12:27:13', '2021-05-21 12:27:13');
INSERT INTO `files` VALUES (713, 'e5e79e10-f6f1-40da-80c7-3b3b75cc086b', 'home-team-image', 'XEg1Q0bn0R', 'Anna Sholomova -Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 293211, 960, 960, NULL, '2021-05-21 12:27:13', '2021-05-21 12:27:13');
INSERT INTO `files` VALUES (714, 'e6ab3979-875e-4c73-989d-446694a322e6', 'home-team-image', 'xiEZnqUqGI', 'Anna Ignashina - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 299860, 960, 960, NULL, '2021-05-21 12:27:13', '2021-05-21 12:27:13');
INSERT INTO `files` VALUES (715, '7fa33cc3-a9a2-48b2-b0b9-0efb03bacfcc', 'home-team-image', 'pYen7MnpzK', 'Anna Skvortsova - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 316446, 960, 960, NULL, '2021-05-21 12:27:13', '2021-05-21 12:27:13');
INSERT INTO `files` VALUES (716, '499c462c-5c23-410c-a52d-2ae34008f39e', 'home-team-image', 'doRLXMJm69', 'Ivan Astakhov - Junior 3D Artist.jpg', 'jpg', 'image/jpeg', 320194, 960, 960, NULL, '2021-05-21 12:27:13', '2021-05-21 12:27:13');
INSERT INTO `files` VALUES (717, '2c8cf733-7a1d-4ba7-9ba3-9218ed0df883', 'home-team-image', '4PpjmglbH1', 'Alexander Sivograkov - PM.png', 'png', 'image/png', 354093, 605, 605, NULL, '2021-05-21 12:27:13', '2021-05-21 12:27:13');
INSERT INTO `files` VALUES (718, '8ca6007d-927c-4d08-99cd-8e28df4480a3', 'home-team-image', 'ADcErXXqLv', 'Artem Nebera - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 416053, 1970, 1970, NULL, '2021-05-21 12:27:13', '2021-05-21 12:27:13');
INSERT INTO `files` VALUES (719, '8ef7a08c-61f4-4603-946d-71633cf41dd9', 'home-team-image', 'wzsbOkA3IS', 'Olga Yurina - 3D Artist.png', 'png', 'image/png', 520935, 596, 596, NULL, '2021-05-21 12:27:13', '2021-05-21 12:27:13');
INSERT INTO `files` VALUES (720, 'f2ad2f02-d00e-4f92-82ca-5616dd3f812f', 'home-team-image', 'Rvj8ib8e5H', 'Evgeniy Pavlov - 3D Artist.png', 'png', 'image/png', 861938, 609, 561, NULL, '2021-05-21 12:27:14', '2021-05-21 12:27:14');
INSERT INTO `files` VALUES (721, 'fcd93de9-df4a-4850-a00e-f9276cef4a0b', 'home-team-image', 'AcNdQzm1jq', 'Alexander Iovlev - 3D Artist.JPG', 'jpg', 'image/jpeg', 1376703, 2637, 2385, NULL, '2021-05-21 12:27:14', '2021-05-21 12:27:14');
INSERT INTO `files` VALUES (722, '7c7fe8a2-65b4-41cf-9dbf-5f1a6d4bfbd6', 'home-team-image', 'gYb6oWULEg', 'Konstantin Vershalovich - 3D Artist.jpg', 'jpg', 'image/jpeg', 1177137, 2661, 2601, NULL, '2021-05-21 12:27:14', '2021-05-21 12:27:14');
INSERT INTO `files` VALUES (723, 'd82c85d2-025d-4658-be72-eb62d5c43c8c', 'home-team-image', 'HL9DQH8iVO', 'Sergey Yazikov - 3D Artist.jpg', 'jpg', 'image/jpeg', 2243833, 3255, 3321, NULL, '2021-05-21 12:27:15', '2021-05-21 12:27:15');
INSERT INTO `files` VALUES (724, 'c826134c-6067-41ce-ad88-a3eb3d30c287', 'home-team-image', 'uJpfEHJQXe', 'Ekaterina Kovaleva - Office Manager.png', 'png', 'image/png', 7612162, 2303, 2303, NULL, '2021-05-21 12:27:17', '2021-05-21 12:27:17');
INSERT INTO `files` VALUES (725, '597605b3-e4f5-4ef7-a9a8-b1de097f2e56', 'playable-ads-head', 'RMhGAGVWDT', 'Vector (2).jpg', 'jpg', 'image/jpeg', 70652, 470, 263, NULL, '2021-05-21 14:56:47', '2021-05-21 14:56:47');
INSERT INTO `files` VALUES (726, '5737593a-d241-428a-820f-b08a3ba4c3bd', 'playable-ads-head', 'hAtDJS2GRf', 'Group (3).jpg', 'jpg', 'image/jpeg', 103825, 468, 263, NULL, '2021-05-21 14:56:51', '2021-05-21 14:56:51');
INSERT INTO `files` VALUES (727, '0dd84c01-7b05-4632-a1e9-7bfc7255ad77', 'playable-ads-head', 'c4ZeWTaiQT', 'Vector (1).jpg', 'jpg', 'image/jpeg', 119780, 469, 263, NULL, '2021-05-21 14:56:55', '2021-05-21 14:56:55');
INSERT INTO `files` VALUES (728, 'c8c370f2-3b15-4959-a45e-d4662c21564a', 'playable-ads-head', 'TXz6AvmZ8V', 'Group (2).jpg', 'jpg', 'image/jpeg', 37151, 468, 263, NULL, '2021-05-21 14:57:02', '2021-05-21 14:57:02');
INSERT INTO `files` VALUES (729, 'fa95af4c-8e5f-4a19-a4f9-e80cfdf2ff6b', 'playable-ads-head', 'uC4P1Wzevp', 'Vector (1).jpg', 'jpg', 'image/jpeg', 119780, 469, 263, NULL, '2021-05-21 14:57:13', '2021-05-21 14:57:13');
INSERT INTO `files` VALUES (730, 'ec4ac036-13f5-4554-a1ec-faab58e5e8a9', 'playable-ads-head', 'UR3jU7vPpA', 'Vector (2).jpg', 'jpg', 'image/jpeg', 70652, 470, 263, NULL, '2021-05-21 14:57:16', '2021-05-21 14:57:16');
INSERT INTO `files` VALUES (731, '29a24a1b-d2e3-4050-baa2-d8560b3a7aa2', 'playable-ads-head', 'QuIIv2h3xZ', 'Group (1).jpg', 'jpg', 'image/jpeg', 70059, 468, 263, NULL, '2021-05-21 14:57:20', '2021-05-21 14:57:20');
INSERT INTO `files` VALUES (732, '6bda1533-2998-47d4-8ca2-749984699e29', 'playable-ads-head', 'xTEfkINxUZ', 'Group (2).jpg', 'jpg', 'image/jpeg', 37151, 468, 263, NULL, '2021-05-21 14:57:25', '2021-05-21 14:57:25');
INSERT INTO `files` VALUES (733, 'd4489b31-f1f2-4297-895b-6010a697d117', 'playable-ads-head', 'I1BqrldHAL', 'Vector (1).jpg', 'jpg', 'image/jpeg', 119780, 469, 263, NULL, '2021-05-21 14:57:37', '2021-05-21 14:57:37');
INSERT INTO `files` VALUES (734, 'e178dcd7-9056-4958-a8eb-a00743fb777a', 'playable-ads-head', 'OGC1RCuZkA', 'Group (3).jpg', 'jpg', 'image/jpeg', 103825, 468, 263, NULL, '2021-05-21 14:57:45', '2021-05-21 14:57:45');
INSERT INTO `files` VALUES (735, '3e750f8a-1b82-4a66-b13f-15fac9899342', 'playable-ads-head', 'uaYChTU06I', 'TXz6AvmZ8V.jpg', 'jpg', 'image/jpeg', 9417, 468, 263, NULL, '2021-05-21 17:44:57', '2021-05-21 17:45:15');
INSERT INTO `files` VALUES (736, 'febf6833-45dc-4cfc-9054-0b7f4ff74371', 'playable-ads-head', '39vwqzThmp', 'TXz6AvmZ8V.jpg', 'jpg', 'image/jpeg', 9417, 468, 263, NULL, '2021-05-21 17:45:00', '2021-05-21 17:45:15');
INSERT INTO `files` VALUES (737, '834e74cc-df78-441c-8795-c58555e26747', 'playable-ads-head', '8x68CvmXA0', 'TXz6AvmZ8V.jpg', 'jpg', 'image/jpeg', 9417, 468, 263, NULL, '2021-05-21 17:45:07', '2021-05-21 17:45:15');
INSERT INTO `files` VALUES (738, 'ee2c0776-310f-445b-8e07-1e4b0571420c', 'playable-ads-head', 'ct0rmPwfTY', 'TXz6AvmZ8V.jpg', 'jpg', 'image/jpeg', 9417, 468, 263, NULL, '2021-05-21 17:45:11', '2021-05-21 17:45:15');
INSERT INTO `files` VALUES (739, 'd2589310-63a8-4317-8d35-a590f479c644', 'playable-ads-head', 'nbRE0AdFgE', 'TXz6AvmZ8V.jpg', 'jpg', 'image/jpeg', 9417, 468, 263, NULL, '2021-05-21 17:45:14', '2021-05-21 17:45:15');
INSERT INTO `files` VALUES (740, 'a9c7ba40-e250-4578-94a5-78e1a6a37594', NULL, 'yOPyzWBmSq', '186003396_839141336985471_7105097735485585563_n.jpg', 'jpg', 'image/jpeg', 170671, 1080, 1080, NULL, '2021-05-22 16:21:48', '2021-05-22 16:21:48');
INSERT INTO `files` VALUES (741, '7b78e53c-b717-4509-a47d-4e074d13d038', NULL, 'ZhbBqHQi9D', '170017561_812271383002629_1230329484517613914_n.jpg', 'jpg', 'image/jpeg', 274580, 1440, 1800, NULL, '2021-05-22 16:21:48', '2021-05-22 16:21:48');
INSERT INTO `files` VALUES (742, '5d45f74a-747a-4555-b5ed-a6d3aab92234', 'services-ads', 'uZ0c1clqhH', 'FO U 2.jpg', 'jpg', 'image/jpeg', 151288, 497, 1065, NULL, '2021-05-24 08:00:14', '2021-05-24 08:00:14');
INSERT INTO `files` VALUES (743, '73a38351-50a1-45ea-bfba-c1f2feca196a', 'services-ads', 'Hvdr3tSL3N', 'FO U 5.jpg', 'jpg', 'image/jpeg', 157306, 497, 1065, NULL, '2021-05-24 08:00:14', '2021-05-24 08:00:14');
INSERT INTO `files` VALUES (744, '0931ad01-ad27-49ea-8d28-db096979aceb', 'services-ads', '2KOkHxDoYb', 'FO U 3.jpg', 'jpg', 'image/jpeg', 207538, 497, 1065, NULL, '2021-05-24 08:00:15', '2021-05-24 08:00:15');
INSERT INTO `files` VALUES (745, '3b915f29-d943-4c70-ad3d-7b3232f1a5ea', 'services-ads', 'imMtmjlaoV', 'FO U.png', 'png', 'image/png', 251682, 496, 1064, NULL, '2021-05-24 08:00:15', '2021-05-24 08:00:15');
INSERT INTO `files` VALUES (746, '89d2092b-c3c2-40a1-82c6-2c6c564166a1', 'services-ads', 'MUR9gWWVkB', 'FO U.jpg', 'jpg', 'image/jpeg', 240562, 496, 1064, NULL, '2021-05-24 08:00:15', '2021-05-24 08:00:15');
INSERT INTO `files` VALUES (747, '83ef0e4a-929d-4ad4-88ac-236128b9af63', 'services-ads', 'A43cy6su0M', 'FO U 7.jpg', 'jpg', 'image/jpeg', 333516, 496, 1064, NULL, '2021-05-24 08:00:15', '2021-05-24 08:00:15');
INSERT INTO `files` VALUES (748, '337333f7-61c4-4c8e-9312-a411acc48d57', 'services-ads', 'dU8JTA27L6', 'FO U 6.jpg', 'jpg', 'image/jpeg', 354349, 497, 1065, NULL, '2021-05-24 08:00:15', '2021-05-24 08:00:15');
INSERT INTO `files` VALUES (749, 'f880a255-879d-4f4a-b527-509bd02b74d1', 'services-ads', '3ZSVFzojSf', 'FO U 4.jpg', 'jpg', 'image/jpeg', 541941, 745, 1597, NULL, '2021-05-24 08:00:16', '2021-05-24 08:00:16');
INSERT INTO `files` VALUES (750, '05ec7f4b-2a57-4c32-95c9-e9ce15f8c54f', NULL, 'z2c4ooj2yw', 'saylogofull.png', 'png', 'image/png', 7689, 633, 133, NULL, '2021-05-24 13:27:28', '2021-05-24 13:27:28');
INSERT INTO `files` VALUES (751, 'd2e21415-7ad7-4f5e-8236-54176152233b', NULL, 'HviC3Ps1cI', 'saylogofull.png', 'png', 'image/png', 8775, 222, 47, NULL, '2021-05-24 13:28:14', '2021-05-24 13:28:14');
INSERT INTO `files` VALUES (752, '093cfef3-5d94-438e-8f92-2abbc6b78d02', 'home-work-items', 'xlML55AdeX', 'restaurant_life_logo.jpg', 'jpg', 'image/jpeg', 812660, 1920, 1080, NULL, '2021-05-25 09:27:14', '2021-05-25 09:27:14');
INSERT INTO `files` VALUES (753, 'eadab5c4-41eb-4499-89b5-41bdc26462b4', 'home-work-items', 'UlNBG9ck58', 'restaurant_life_logo.jpg', 'jpg', 'image/jpeg', 812660, 1920, 1080, NULL, '2021-05-25 09:27:57', '2021-05-25 09:27:57');
INSERT INTO `files` VALUES (754, '598405bb-9ba2-422d-8374-463c2c83f82b', NULL, '5hy2B6nZFa', 'Снимок экрана 2021-05-25 в 13.04.25.png', 'png', 'image/png', 669826, 578, 580, NULL, '2021-05-25 10:05:29', '2021-05-25 10:05:29');
INSERT INTO `files` VALUES (755, '4fa01373-cc5a-4678-bb88-54047d549581', NULL, 'sheyh4BV6G', 'Снимок экрана 2021-05-25 в 13.04.38.png', 'png', 'image/png', 620219, 578, 578, NULL, '2021-05-25 10:05:31', '2021-05-25 10:05:31');
INSERT INTO `files` VALUES (756, '10459c38-bcc9-49bb-b7d1-6010bbe57142', NULL, 'o0gS5g5RIk', 'Снимок экрана 2021-05-25 в 13.04.57.png', 'png', 'image/png', 779842, 578, 580, NULL, '2021-05-25 10:05:33', '2021-05-25 10:05:33');
INSERT INTO `files` VALUES (757, '53e259ca-9bdf-4b2e-ae01-e760620c2cfb', NULL, 'ECSr0g8r5x', 'Снимок экрана 2021-05-25 в 13.07.06.png', 'png', 'image/png', 757017, 578, 574, NULL, '2021-05-25 10:08:26', '2021-05-25 10:08:26');
INSERT INTO `files` VALUES (758, 'eb2b5243-2e01-4903-8d57-48b3e87c28a9', NULL, 'm2otjlrMNY', 'Снимок экрана 2021-05-25 в 13.07.39.png', 'png', 'image/png', 905290, 580, 580, NULL, '2021-05-25 10:08:28', '2021-05-25 10:08:28');
INSERT INTO `files` VALUES (759, '89f9ab6d-caf1-4d78-9e55-fec55aff624e', NULL, 'YlgluWOCyE', 'Снимок экрана 2021-05-25 в 13.07.55.png', 'png', 'image/png', 600909, 578, 578, NULL, '2021-05-25 10:08:31', '2021-05-25 10:08:31');
INSERT INTO `files` VALUES (760, '80cc6d4b-0463-41ec-873a-d48d41c69dad', 'playable-ads-head', '38H5CtoqXD', 'restaurant_life_logo.jpg', 'jpg', 'image/jpeg', 812660, 1920, 1080, NULL, '2021-05-25 10:40:22', '2021-05-25 10:40:22');
INSERT INTO `files` VALUES (761, '493b89e1-1ae6-4654-aa57-d8ff2a518dc5', 'playable-ads-head', 'XDd0Y5qy4N', 'pl_1.png', 'png', 'image/png', 149805, 470, 263, NULL, '2021-05-25 10:50:22', '2021-05-25 10:50:22');
INSERT INTO `files` VALUES (762, '92fd21e8-1021-4bee-bc2b-2a1eadafcc07', 'playable-ads-head', '8WAdS1OJbi', 'p_2.png', 'png', 'image/png', 118612, 470, 263, NULL, '2021-05-25 10:54:43', '2021-05-25 10:54:43');
INSERT INTO `files` VALUES (763, '15bad40e-9a00-4b5e-8fd4-69a95edd7066', 'playable-ads-head', 'tSXrZjg0Wd', 'p_3.png', 'png', 'image/png', 195483, 470, 263, NULL, '2021-05-25 10:58:51', '2021-05-25 10:58:51');
INSERT INTO `files` VALUES (764, '7bd6d82f-b6f3-466f-8902-90903916e803', 'playable-ads-head', 'Mde2dNW9fA', 'restaurant_life_banner_2.jpg', 'jpg', 'image/jpeg', 816086, 1920, 1080, NULL, '2021-05-25 11:15:51', '2021-05-25 11:15:51');
INSERT INTO `files` VALUES (765, '0efed1e1-894c-4cff-8d97-1b9fc9cda3b2', 'playable-ads-head', 'QsrBm4i8mT', 'p_4.png', 'png', 'image/png', 123256, 470, 263, NULL, '2021-05-25 11:16:28', '2021-05-25 11:16:28');
INSERT INTO `files` VALUES (766, '5c7e050c-2f87-41f8-af1e-79227c812847', 'playable-ads-head', 'fhq9Lm2WuI', 'p_5.png', 'png', 'image/png', 200603, 470, 263, NULL, '2021-05-25 11:23:30', '2021-05-25 11:23:30');
INSERT INTO `files` VALUES (767, '649ceecd-79cd-4165-9a65-8a5d5ceb15ed', 'playable-ads-head', 'ENrjLFuk2A', 'p_6.png', 'png', 'image/png', 131649, 470, 263, NULL, '2021-05-25 11:27:04', '2021-05-25 11:27:04');
INSERT INTO `files` VALUES (768, '9054fc34-0098-4776-97c3-f875f2d05e2e', 'playable-ads-head', 'm5lI7rx7eo', 'pl_1.png', 'png', 'image/png', 149805, 470, 263, NULL, '2021-05-25 11:28:41', '2021-05-25 11:28:41');
INSERT INTO `files` VALUES (769, 'a9daebff-14ba-44e4-81a4-4256d6392788', 'playable-ads-head', 'Uhth6ukKPd', 'p_6.png', 'png', 'image/png', 131649, 470, 263, NULL, '2021-05-25 11:28:54', '2021-05-25 11:28:54');
INSERT INTO `files` VALUES (770, '665c15a4-015f-4ac8-8c3b-e37775cc256e', 'playable-ads-head', 'zf3Ff41PPd', 'pl_1.png', 'png', 'image/png', 149805, 470, 263, NULL, '2021-05-25 11:29:34', '2021-05-25 11:29:34');
INSERT INTO `files` VALUES (771, '9e70b462-d5fa-4ac6-afcc-fc0e06ffb7e1', 'playable-ads-head', 'awN4V7ITV2', 'p_7.png', 'png', 'image/png', 180359, 470, 263, NULL, '2021-05-25 11:32:16', '2021-05-25 11:32:16');
INSERT INTO `files` VALUES (772, '7d5a29fe-9b0a-491b-9b8d-957f66d93f8d', 'playable-ads-head', 'bbitXAjFws', 'p_8.png', 'png', 'image/png', 230408, 470, 263, NULL, '2021-05-25 11:34:16', '2021-05-25 11:34:16');
INSERT INTO `files` VALUES (773, '0d35c68e-404c-4d0f-bedc-fbc82c3a785b', 'playable-ads-head', 'u3r7HnRJ3q', 'restaurant_life_banner_2.jpg', 'jpg', 'image/jpeg', 816086, 1920, 1080, NULL, '2021-05-25 11:40:22', '2021-05-25 11:40:22');
INSERT INTO `files` VALUES (774, 'f31a1205-d071-4ca1-b12d-9110f2b67d80', 'playable-ads-head', 'N54E007RX9', 'p_9.png', 'png', 'image/png', 168917, 470, 263, NULL, '2021-05-25 11:45:39', '2021-05-25 11:45:39');
INSERT INTO `files` VALUES (775, 'ceb4af81-1c97-48b3-b703-cd82892fefc0', 'playable-ads-head', 'v8M7dfnFWG', 'pl_10.png', 'png', 'image/png', 139509, 470, 263, NULL, '2021-05-25 12:44:26', '2021-05-25 12:44:26');
INSERT INTO `files` VALUES (776, '46a68bdf-4d8c-4a03-a929-aeb570f0f13b', 'playable-ads-head', 'tqctbe8TCQ', 'pl_11.png', 'png', 'image/png', 117523, 470, 263, NULL, '2021-05-25 13:04:42', '2021-05-25 13:04:42');
INSERT INTO `files` VALUES (777, 'fce769fb-33a0-47dc-a6e7-9e5d25bd4420', 'playable-ads-head', 'Zh5lQXOFd5', 'pl_12.png', 'png', 'image/png', 201391, 470, 263, NULL, '2021-05-25 13:08:39', '2021-05-25 13:08:39');
INSERT INTO `files` VALUES (778, '61ea0b4d-558d-47bf-be95-5039bd9d1770', 'playable-ads-head', 'ldhKHmRmOP', 'pl_11.png', 'png', 'image/png', 117523, 470, 263, NULL, '2021-05-25 13:09:04', '2021-05-25 13:09:04');
INSERT INTO `files` VALUES (779, 'b3cb2bf0-1237-43d9-a6b7-38543478eb33', NULL, 'EWIwctypFP', 'pp_1.png', 'png', 'image/png', 257391, 497, 1065, NULL, '2021-05-25 15:32:43', '2021-05-25 15:32:43');
INSERT INTO `files` VALUES (780, '219dddb3-eb25-4e9e-8989-4dc90a2aed3e', NULL, '44sNrHJM41', 'pp_1.png', 'png', 'image/png', 257391, 497, 1065, NULL, '2021-05-25 15:44:32', '2021-05-25 15:44:32');
INSERT INTO `files` VALUES (781, '984ef459-c3cd-49f5-a74a-78d7485d106b', 'services-production-media', '7PoAERsnLH', 'airport_Add_2.png', 'png', 'image/png', 660649, 1200, 1200, NULL, '2021-05-26 07:21:37', '2021-05-26 07:21:37');
INSERT INTO `files` VALUES (782, '18eb1293-8bba-4a50-8b01-df4023667e0e', NULL, 'RtBIuS8YgI', 'pp_7.png', 'png', 'image/png', 100299, 497, 1065, NULL, '2021-05-26 07:36:26', '2021-05-26 07:36:26');
INSERT INTO `files` VALUES (783, '6da6e94e-8565-4cba-9187-56f691f8b19b', NULL, '0eEq6BUgqt', 'pp_6.png', 'png', 'image/png', 431009, 497, 1065, NULL, '2021-05-26 07:36:33', '2021-05-26 07:36:33');
INSERT INTO `files` VALUES (784, '9b69e830-d309-4392-9b13-c4cdd12b2841', NULL, 'h9wLtwgqIq', 'pp_5.png', 'png', 'image/png', 139269, 497, 1065, NULL, '2021-05-26 07:36:41', '2021-05-26 07:36:41');
INSERT INTO `files` VALUES (785, 'e16424c9-78dc-4024-9de9-1c0230e6c831', NULL, 'RWt9uT3PxN', 'pp_4.png', 'png', 'image/png', 343376, 497, 1065, NULL, '2021-05-26 07:36:49', '2021-05-26 07:36:49');
INSERT INTO `files` VALUES (786, '6bc950fe-9328-4626-8254-f16250bff89d', NULL, 'LlPWZTfI8V', 'pp_3.png', 'png', 'image/png', 295365, 497, 1065, NULL, '2021-05-26 07:37:01', '2021-05-26 07:37:01');
INSERT INTO `files` VALUES (787, '0102dd81-d274-4f70-afbc-0f3596549b51', NULL, 'mmElwRGS4E', 'pp_2.png', 'png', 'image/png', 140143, 497, 1065, NULL, '2021-05-26 07:37:09', '2021-05-26 07:37:09');
INSERT INTO `files` VALUES (788, '070eac0c-7273-4aeb-9bc8-1cd5be7bbb05', NULL, 'CYUEam4QJU', 'pp_1.png', 'png', 'image/png', 315028, 497, 1065, NULL, '2021-05-26 07:37:27', '2021-05-26 07:37:27');
INSERT INTO `files` VALUES (789, '37c95a80-7d6c-4111-950f-8be2759507be', NULL, '9xMlk6zs0w', 'ppp1.png', 'png', 'image/png', 355186, 497, 1065, NULL, '2021-05-26 08:38:54', '2021-05-26 08:38:54');
INSERT INTO `files` VALUES (790, '5b0aff76-e33f-457b-aea7-3c0f5252b23a', NULL, 'vvkhUOQOv3', 'pp2.png', 'png', 'image/png', 373080, 497, 1065, NULL, '2021-05-26 08:39:00', '2021-05-26 08:39:00');
INSERT INTO `files` VALUES (791, '6d2c2a45-06e8-44d8-8417-9eace3c080e0', NULL, 'EBWLyqQ5i3', 'pp3.png', 'png', 'image/png', 302192, 497, 1065, NULL, '2021-05-26 08:39:08', '2021-05-26 08:39:08');
INSERT INTO `files` VALUES (792, '2a1401e5-2c3f-4fd5-96f5-f49d5757f533', NULL, 'XwbgsMYzgQ', 'pp4.png', 'png', 'image/png', 147954, 497, 1065, NULL, '2021-05-26 08:39:13', '2021-05-26 08:39:13');
INSERT INTO `files` VALUES (793, 'fc2bbdd8-b1e4-424c-892e-8ef44af11ad8', NULL, '8I985TQaIy', 'pp5.png', 'png', 'image/png', 287399, 497, 1065, NULL, '2021-05-26 08:39:20', '2021-05-26 08:39:20');
INSERT INTO `files` VALUES (794, '92b1d3c1-01a0-4fae-b040-2a33ad34ba55', NULL, '0Ovdjct334', 'pp6.png', 'png', 'image/png', 248999, 497, 1065, NULL, '2021-05-26 08:39:27', '2021-05-26 08:39:27');
INSERT INTO `files` VALUES (795, '7567c92c-9246-47c2-b1e2-bfbb102cf61a', NULL, 'CFdK8suDa1', 'pp7.png', 'png', 'image/png', 258782, 497, 1065, NULL, '2021-05-26 08:39:34', '2021-05-26 08:39:34');
INSERT INTO `files` VALUES (796, '0dc9c189-ce1e-416b-acfc-d5eb0bcf07d8', NULL, 'Itoy4zyh4p', 'pp8.png', 'png', 'image/png', 285405, 497, 1065, NULL, '2021-05-26 08:39:38', '2021-05-26 08:39:38');
INSERT INTO `files` VALUES (797, 'ade620e5-570b-4ed3-876b-befb9fd7db1a', NULL, 'SdSNjprm3Q', 'pp8.png', 'png', 'image/png', 232198, 497, 1065, NULL, '2021-05-26 08:42:31', '2021-05-26 08:42:31');
INSERT INTO `files` VALUES (798, 'cbccc8cf-67bc-47bf-9a5b-769d8e929585', NULL, 'bHBz48ddt0', '1.png', 'png', 'image/png', 280484, 497, 1065, NULL, '2021-05-26 08:49:47', '2021-05-26 08:49:47');
INSERT INTO `files` VALUES (799, '422a9cb2-ea8c-4d5d-b35c-27a30f3edae4', NULL, 'sX7SFP9dqL', '2.png', 'png', 'image/png', 311495, 497, 1065, NULL, '2021-05-26 08:50:08', '2021-05-26 08:50:08');
INSERT INTO `files` VALUES (800, '67365a4a-d6b9-4561-bf06-93ba3e422830', NULL, 'Ogj5VufWH5', '3.png', 'png', 'image/png', 344675, 497, 1065, NULL, '2021-05-26 08:50:27', '2021-05-26 08:50:27');
INSERT INTO `files` VALUES (801, '58983ef3-f116-422a-848d-d8fc194f2735', NULL, 'QcWS6RPMqX', '4.png', 'png', 'image/png', 163230, 497, 1065, NULL, '2021-05-26 08:50:33', '2021-05-26 08:50:33');
INSERT INTO `files` VALUES (802, '443b4c4b-fabe-415d-92ae-559492d030fb', NULL, 'pTKJMlfC24', '2e142312.png', 'png', 'image/png', 589935, 497, 1065, NULL, '2021-05-26 08:54:56', '2021-05-26 08:54:56');
INSERT INTO `files` VALUES (803, '834345bd-065e-48bf-8148-70af61ec98c9', 'services-ads', 'kDd9GxfUdn', '2e142312.png', 'png', 'image/png', 589935, 497, 1065, NULL, '2021-05-26 10:41:05', '2021-05-26 10:41:05');
INSERT INTO `files` VALUES (804, '5b35cfe0-7206-4326-82dd-5dbf699c732d', 'services-ads', 'zPjaGPKuSt', '1.png', 'png', 'image/png', 280484, 497, 1065, NULL, '2021-05-26 10:41:13', '2021-05-26 10:41:13');
INSERT INTO `files` VALUES (805, '1b99bb2d-201a-49ae-9a83-1d2ec9e3bcc5', 'services-ads', 'ccrQf13cUM', 'pp4.png', 'png', 'image/png', 147954, 497, 1065, NULL, '2021-05-26 10:41:19', '2021-05-26 10:41:19');
INSERT INTO `files` VALUES (806, '19d66ff5-e14f-4c9a-a07e-f20f100c6dac', 'services-ads', 'TtN3Z5QHVg', 'pp6.png', 'png', 'image/png', 248999, 497, 1065, NULL, '2021-05-26 10:41:26', '2021-05-26 10:41:26');
INSERT INTO `files` VALUES (807, '1a136096-719b-4fca-885f-22fabd82df5e', 'services-ads', '7bNsJ28wip', 'ppp1.png', 'png', 'image/png', 355186, 497, 1065, NULL, '2021-05-26 10:41:33', '2021-05-26 10:41:33');
INSERT INTO `files` VALUES (808, '68285dde-ca3e-47dd-8548-c8f015d8226a', 'services-ads', 'HxhGEOwbtO', 'pp7.png', 'png', 'image/png', 258782, 497, 1065, NULL, '2021-05-26 10:41:41', '2021-05-26 10:41:41');
INSERT INTO `files` VALUES (809, '589beeb2-ca72-4da5-b19c-d5ec74c0f944', 'services-ads', '6tnU1bJyVP', '4.png', 'png', 'image/png', 163230, 497, 1065, NULL, '2021-05-26 10:41:55', '2021-05-26 10:41:55');
INSERT INTO `files` VALUES (810, '2823d4ef-10c1-4f8b-9e6d-af7097b99279', 'services-ads', 'PKahgmIXAU', 'pp_3.png', 'png', 'image/png', 379671, 497, 1065, NULL, '2021-05-26 10:42:36', '2021-05-26 10:42:36');
INSERT INTO `files` VALUES (811, 'b40d89bf-d179-4ad2-8b66-780919bdd08d', 'services-ads', 'ReXBU3PmG9', 'pp_1.png', 'png', 'image/png', 257391, 497, 1065, NULL, '2021-05-26 11:40:56', '2021-05-26 11:40:56');
INSERT INTO `files` VALUES (812, 'e975b5be-d1c7-44e6-bd90-7639e09ae545', NULL, 'lZziqyHMWY', '324342.jpeg', 'jpeg', 'image/jpeg', 114178, 493, 1056, NULL, '2021-05-26 11:43:30', '2021-05-26 11:43:30');
INSERT INTO `files` VALUES (813, '84ad2b90-0496-417a-bd4b-c945853472f9', NULL, 'GTIMO46ZlI', 'wy70xvQf4v.png', 'png', 'image/png', 1687, 159, 34, NULL, '2021-06-01 10:17:33', '2021-06-01 10:17:33');
INSERT INTO `files` VALUES (814, '3404fd59-9261-4bfe-a8fa-0a303bdfc1f0', NULL, '8MWbmVcEV1', 'V02aiFAhVS.png', 'png', 'image/png', 1398, 144, 33, NULL, '2021-06-01 10:17:47', '2021-06-01 10:17:47');
INSERT INTO `files` VALUES (815, '5ddf1aed-270d-4b31-ab7f-2d7f91fd632c', NULL, 'NlTY8fTbuK', 'V02aiFAhVS.png', 'png', 'image/png', 1398, 144, 33, NULL, '2021-06-01 10:17:52', '2021-06-01 10:17:52');
INSERT INTO `files` VALUES (816, 'a2ef853e-713c-4a46-8076-f88a3b20e772', NULL, '0nuv9eEBKx', 'V02aiFAhVS.png', 'png', 'image/png', 1398, 144, 33, NULL, '2021-06-01 10:18:09', '2021-06-01 10:18:09');
INSERT INTO `files` VALUES (817, '7136ce5e-4b14-4970-9ddf-488dbfb43b04', NULL, 'MW4rWomtPA', 'V02aiFAhVS.png', 'png', 'image/png', 1398, 144, 33, NULL, '2021-06-01 10:18:14', '2021-06-01 10:18:14');
INSERT INTO `files` VALUES (818, 'fb9e3d6f-c7f5-4c57-83f8-21a696d1f516', NULL, 'f85pyEDBgY', 'wy70xvQf4v.png', 'png', 'image/png', 1687, 159, 34, NULL, '2021-06-01 10:18:25', '2021-06-01 10:18:25');
INSERT INTO `files` VALUES (819, '59c21518-0d2f-45b8-87ac-c48b48cefb28', NULL, '6N0xxPYOJo', 'air_console.png', 'png', 'image/png', 3419, 160, 33, NULL, '2021-06-01 10:22:56', '2021-06-01 10:22:56');
INSERT INTO `files` VALUES (820, '673eba91-dd21-41c3-9cb4-6dc23f6d5450', NULL, 'HlFjfW3Mgx', 'GD_baner_3.png', 'png', 'image/png', 1248430, 1551, 897, NULL, '2021-06-01 10:29:53', '2021-06-01 10:29:53');
INSERT INTO `files` VALUES (821, 'c6c99271-6a66-498e-9e97-c0c7f4d6c64b', NULL, 'fAZnr7W8jo', 'air_console.png', 'png', 'image/png', 3419, 160, 33, NULL, '2021-06-01 10:30:11', '2021-06-01 10:30:11');
INSERT INTO `files` VALUES (822, 'b61ef696-c583-4e88-8f75-fd70d50c1fef', NULL, 'gYVLJYvgtH', 'restaurant_life_banner_2 — копия.jpg', 'jpg', 'image/jpeg', 219272, 720, 405, NULL, '2021-06-01 10:32:38', '2021-06-01 10:32:38');
INSERT INTO `files` VALUES (823, 'c40e39c8-1b3a-4024-b9aa-dd9422d49ba2', NULL, 'wGXduu91ZR', 'V02aiFAhVS.png', 'png', 'image/png', 1398, 144, 33, NULL, '2021-06-01 10:32:49', '2021-06-01 10:32:49');
INSERT INTO `files` VALUES (824, '2c25f897-3bb8-4f3e-a3a2-df08231619f9', NULL, '0oHUTT6IDb', 'wy70xvQf4v.png', 'png', 'image/png', 1687, 159, 34, NULL, '2021-06-01 10:32:53', '2021-06-01 10:32:53');
INSERT INTO `files` VALUES (825, 'ca1db40a-8634-41bb-bdf9-ddf0b87b4064', NULL, 'klx6aTjr9E', 'airport_Add_2.png', 'png', 'image/png', 660649, 1200, 1200, NULL, '2021-06-01 10:34:39', '2021-06-01 10:34:39');
INSERT INTO `files` VALUES (826, 'b5ff7198-e88d-4e56-9db1-487f915f311c', NULL, 'ej1hhRanXi', 'V02aiFAhVS.png', 'png', 'image/png', 1398, 144, 33, NULL, '2021-06-01 10:35:02', '2021-06-01 10:35:02');
INSERT INTO `files` VALUES (827, '1ed1dcaf-8d48-4780-9937-16c4c440e704', NULL, 'EpzPipblxy', 'wy70xvQf4v.png', 'png', 'image/png', 1687, 159, 34, NULL, '2021-06-01 10:35:08', '2021-06-01 10:35:08');
INSERT INTO `files` VALUES (828, 'fe1ede94-4236-4247-a614-5bbb5720ed37', NULL, 'UiYyQk9rMf', 'hero.png', 'png', 'image/png', 19561, 1089, 613, NULL, '2021-06-01 10:38:03', '2021-06-01 10:38:03');
INSERT INTO `files` VALUES (829, 'ca69785e-0882-4b53-a124-4c652a67e8fe', NULL, 'FrrdYP4ihB', 'wy70xvQf4v.png', 'png', 'image/png', 1687, 159, 34, NULL, '2021-06-01 10:38:16', '2021-06-01 10:38:16');
INSERT INTO `files` VALUES (830, 'ebcce70f-09ad-47cf-a990-b0a2316d493d', NULL, '9gnafohAMS', 'switch.png', 'png', 'image/png', 3820, 210, 33, NULL, '2021-06-01 10:41:42', '2021-06-01 10:41:42');
INSERT INTO `files` VALUES (831, 'b4b16950-42e5-4bba-9e09-87542678b0f9', NULL, 'yys3I7Tr85', '222.png', 'png', 'image/png', 372705, 790, 438, NULL, '2021-06-01 11:14:12', '2021-06-01 11:14:12');
INSERT INTO `files` VALUES (832, 'd32060ed-b6aa-4b30-b818-486d1fd49549', 'vacancy-image', 'zQlsXPcSlu', '4aHAyEJcKz.jpeg', 'jpeg', 'image/jpeg', 76259, 604, 836, NULL, '2021-06-01 12:27:39', '2021-06-01 12:27:39');
INSERT INTO `files` VALUES (833, 'd1d61faf-d9fe-409e-b570-6c7bb3489105', 'vacancy-image', 'MAiPWKslVN', '87JbaaCGS1.jpeg', 'jpeg', 'image/jpeg', 69429, 596, 834, NULL, '2021-06-01 12:29:07', '2021-06-01 12:29:07');
INSERT INTO `files` VALUES (834, 'c55ea558-01c6-4a58-9021-1e03df1090ed', 'vacancy-image', '0G2suGbp0h', 'Снимок экрана 2021-06-01 в 15.34.02.png', 'png', 'image/png', 52817, 479, 758, NULL, '2021-06-01 12:35:14', '2021-06-01 12:35:14');
INSERT INTO `files` VALUES (835, 'f3f6a23c-6e31-4f6f-9069-712325fb58cd', 'services-production-media', 'ZSBfc9e4AP', '5bGGnIcFq0_0003_Слой-4.png', 'png', 'image/png', 99915, 712, 411, NULL, '2021-06-01 12:39:55', '2021-06-01 12:39:55');
INSERT INTO `files` VALUES (836, 'ee86f442-1950-4d34-ae2c-75abd7cf63aa', 'services-production-media', 'lU5zfo2opk', '5bGGnIcFq0_0001_Слой-11.png', 'png', 'image/png', 85546, 712, 411, NULL, '2021-06-01 12:40:06', '2021-06-01 12:40:06');
INSERT INTO `files` VALUES (837, 'ec38a94f-905d-4531-b013-d30066c1b6e2', 'services-production-media', 'qF9o3mutKT', '5bGGnIcFq0_0002_Слой-2.png', 'png', 'image/png', 163466, 712, 410, NULL, '2021-06-01 12:41:52', '2021-06-01 12:41:52');
INSERT INTO `files` VALUES (838, '6d94bfee-d8f3-43d6-a14a-06232aba829e', 'services-production-media', 'mmSQcefj9A', '5bGGnIcFq0_0000_Слой-3.png', 'png', 'image/png', 206518, 712, 410, NULL, '2021-06-01 12:41:56', '2021-06-01 12:41:56');
INSERT INTO `files` VALUES (839, '3c96f1bb-8181-479f-9e5a-745e97f604fd', 'services-production-media', '4E9Rq2SWwP', '5bGGnIcFq0_0000_Слой-3.png', 'png', 'image/png', 206518, 712, 410, NULL, '2021-06-01 12:42:35', '2021-06-01 12:42:35');
INSERT INTO `files` VALUES (840, '520a749a-d80f-4d60-9184-5093cbd9021f', 'services-production-media', 'SRxkHXMV9R', '5bGGnIcFq0_0002_Слой-2.png', 'png', 'image/png', 163466, 712, 410, NULL, '2021-06-01 12:42:38', '2021-06-01 12:42:38');
INSERT INTO `files` VALUES (841, 'd3f31464-1019-4874-a1cb-01071011435b', 'services-production-media', 'DSqHhCFowT', '5bG2IcFq0_0000_Слой-3.png', 'png', 'image/png', 376197, 712, 410, NULL, '2021-06-01 13:01:54', '2021-06-01 13:01:54');
INSERT INTO `files` VALUES (842, 'd30d632d-550e-406d-a33b-72ce67facd85', 'services-production-media', 'hsRcx5BY7Y', '5bG2IcFq0_0002_Слой-2.png', 'png', 'image/png', 327774, 712, 410, NULL, '2021-06-01 13:02:03', '2021-06-01 13:02:03');
INSERT INTO `files` VALUES (843, 'badc7dfc-b568-47b9-a229-544b4ce9c799', 'services-production-media', 'FPwNkx2UKR', '5bG2IcFq0_0003_Слой-4.png', 'png', 'image/png', 306230, 712, 411, NULL, '2021-06-01 13:02:16', '2021-06-01 13:02:16');
INSERT INTO `files` VALUES (844, '68f52e1d-a554-468c-a585-a96828216f49', 'services-production-media', '3W9aUVi1ML', '5bG2IcFq0_0001_Слой-11.png', 'png', 'image/png', 291019, 712, 411, NULL, '2021-06-01 13:02:21', '2021-06-01 13:02:21');
INSERT INTO `files` VALUES (845, '54a1fe13-c611-4f7b-90be-ba2c04da90be', 'services-production-media', 'cC0bblYhqM', '5bGGn4IcFq0_0003_Слой-4.png', 'png', 'image/png', 214464, 712, 411, NULL, '2021-06-01 13:17:22', '2021-06-01 13:17:22');
INSERT INTO `files` VALUES (846, '272e9427-4c32-4867-893f-9522487dc5fa', 'services-production-media', 'sSbKjgOLCB', '5bGGn4IcFq0_0001_Слой-11.png', 'png', 'image/png', 188880, 712, 411, NULL, '2021-06-01 13:17:27', '2021-06-01 13:17:27');
INSERT INTO `files` VALUES (847, 'd5c9fee8-6d4d-424d-9483-24db7a9cbe7b', 'services-production-media', 'TaBch7P0XI', '5bGGn4IcFq0_0000_Слой-3.png', 'png', 'image/png', 311086, 712, 410, NULL, '2021-06-01 13:17:39', '2021-06-01 13:17:39');
INSERT INTO `files` VALUES (848, '8ee967de-4e4f-4a50-ba28-65036a4a8271', 'services-production-media', 'V4HHF4UU6J', '5bGGn4IcFq0_0002_Слой-2.png', 'png', 'image/png', 280203, 712, 410, NULL, '2021-06-01 13:17:44', '2021-06-01 13:17:44');
INSERT INTO `files` VALUES (849, '587f3b7a-fbc2-4b5a-bdc4-9e92dee4e710', 'services-production-media', '2psLjvVqDf', '5bGG6nIcFq0_0000_Слой-3.png', 'png', 'image/png', 402549, 712, 410, NULL, '2021-06-01 13:41:35', '2021-06-01 13:41:35');
INSERT INTO `files` VALUES (850, 'ab7a1a59-303e-40a3-8aa1-013919bb2b17', 'services-production-media', 'uY2G5dYoic', '5bGG6nIcFq0_0002_Слой-2.png', 'png', 'image/png', 348707, 712, 410, NULL, '2021-06-01 13:41:42', '2021-06-01 13:41:42');
INSERT INTO `files` VALUES (851, 'ef197684-2fd0-4db1-95eb-c48d1a23eb89', 'services-production-media', 'u069Bzsnqo', '5bGG6nIcFq0_0003_Слой-4.png', 'png', 'image/png', 312512, 712, 411, NULL, '2021-06-01 13:41:51', '2021-06-01 13:41:51');
INSERT INTO `files` VALUES (852, '15d18036-45a4-4fcf-bad7-ebfa518743a9', 'services-production-media', 'KPTJBUJEVq', '5bGG6nIcFq0_0001_Слой-11.png', 'png', 'image/png', 293162, 712, 411, NULL, '2021-06-01 13:41:58', '2021-06-01 13:41:58');
INSERT INTO `files` VALUES (853, 'b8c424b4-2315-4703-abbc-76924fadb6cb', 'services-production-media', 'BcqCxVKQYM', '5bGGn7IcFq0_0000_Слой-3.png', 'png', 'image/png', 364641, 712, 410, NULL, '2021-06-01 13:49:51', '2021-06-01 13:49:51');
INSERT INTO `files` VALUES (854, 'd34ccd72-3a3a-4882-8e88-239295baea98', 'services-production-media', '4aYwOhdL5U', '5bGGn7IcFq0_0002_Слой-2.png', 'png', 'image/png', 316338, 712, 410, NULL, '2021-06-01 13:49:59', '2021-06-01 13:49:59');
INSERT INTO `files` VALUES (855, '788074ff-c9d5-44a7-8181-30a9af601104', 'services-production-media', '0LQaI8dk9R', '5bGGn7IcFq0_0003_Слой-4.png', 'png', 'image/png', 264472, 712, 411, NULL, '2021-06-01 13:50:07', '2021-06-01 13:50:07');
INSERT INTO `files` VALUES (856, '95b73b07-f33e-4076-894a-1b061b7b5b1d', 'services-production-media', 'nEJz06ECcp', '5bGGn7IcFq0_0001_Слой-11.png', 'png', 'image/png', 250978, 712, 411, NULL, '2021-06-01 13:50:13', '2021-06-01 13:50:13');
INSERT INTO `files` VALUES (857, '05302c43-129f-480a-a10d-9067eae6ec74', 'services-production-media', 'aZ2Vyg2EF7', '5bGG44nIcFq0_0000_Слой-3.png', 'png', 'image/png', 263855, 712, 410, NULL, '2021-06-01 15:04:15', '2021-06-01 15:04:15');
INSERT INTO `files` VALUES (858, '43890aa4-c71d-4098-8a37-b140bbe2312b', 'services-production-media', 'hiF0fUhKog', '5bGG44nIcFq0_0002_Слой-2.png', 'png', 'image/png', 207542, 712, 410, NULL, '2021-06-01 15:04:21', '2021-06-01 15:04:21');
INSERT INTO `files` VALUES (859, 'fc08d4d9-48a8-4d13-950c-ce20575b55a6', 'services-production-media', '8s7LeuyVPJ', '5bGG44nIcFq0_0003_Слой-4.png', 'png', 'image/png', 182909, 712, 411, NULL, '2021-06-01 15:04:33', '2021-06-01 15:04:33');
INSERT INTO `files` VALUES (860, 'bfb6bcdf-48f6-46c7-a636-51824ffc6622', 'services-production-media', '2QfmMO1is4', '5bGG44nIcFq0_0001_Слой-11.png', 'png', 'image/png', 174248, 712, 411, NULL, '2021-06-01 15:04:39', '2021-06-01 15:04:39');
INSERT INTO `files` VALUES (861, '084380e4-5e2c-45d4-a617-46f615f9cef4', 'services-production-media', 'qkGjfjzVxW', '5bGGn7IcFq0_0000_Слой-3.png', 'png', 'image/png', 364641, 712, 410, NULL, '2021-06-01 15:05:26', '2021-06-01 15:05:26');
INSERT INTO `files` VALUES (862, '368450ff-a664-48ac-a314-31f7865cbf8c', 'services-production-media', '6rxLsg8K9K', '5bGGn7IcFq0_0002_Слой-2.png', 'png', 'image/png', 316338, 712, 410, NULL, '2021-06-01 15:05:33', '2021-06-01 15:05:33');
INSERT INTO `files` VALUES (863, '35da5f5e-52e5-4d81-9dd0-041b66792e7e', 'services-production-media', '55dTs6Xq6n', '5bGGn7IcFq0_0003_Слой-4.png', 'png', 'image/png', 264472, 712, 411, NULL, '2021-06-01 15:05:42', '2021-06-01 15:05:42');
INSERT INTO `files` VALUES (864, 'fb48e49b-c312-4347-9854-ea2aa6ed41db', 'services-production-media', 'VrN2xoiLA5', '5bGGn7IcFq0_0001_Слой-11.png', 'png', 'image/png', 250978, 712, 411, NULL, '2021-06-01 15:05:48', '2021-06-01 15:05:48');
INSERT INTO `files` VALUES (865, '530e986c-e2d5-4760-bca3-65df97a059e2', 'services-production-media', 'qVU98WWv32', '5b9GGnIcFq0_0000_Слой-3.png', 'png', 'image/png', 419667, 712, 410, NULL, '2021-06-01 15:10:51', '2021-06-01 15:10:51');
INSERT INTO `files` VALUES (866, '609d896a-71f3-42d5-9cb5-24257a24a908', 'services-production-media', 'cs0WcwKGu5', '5b9GGnIcFq0_0002_Слой-2.png', 'png', 'image/png', 366724, 712, 410, NULL, '2021-06-01 15:10:59', '2021-06-01 15:10:59');
INSERT INTO `files` VALUES (867, 'ac93d467-bf54-474f-9b52-016f7d5c2f10', 'services-production-media', 'aXeI5qc2Tt', '5b9GGnIcFq0_0003_Слой-4.png', 'png', 'image/png', 337602, 712, 411, NULL, '2021-06-01 15:11:08', '2021-06-01 15:11:08');
INSERT INTO `files` VALUES (868, '5e271028-1b71-4566-b6d8-afaf1f2bff7c', 'services-production-media', 'NbSAJbnxQC', '5b9GGnIcFq0_0001_Слой-11.png', 'png', 'image/png', 318689, 712, 411, NULL, '2021-06-01 15:11:13', '2021-06-01 15:11:13');
INSERT INTO `files` VALUES (869, '5d45671f-1f17-4c44-ae5b-73a17911cba6', 'services-production-media', 'nJsmmzMNhG', '1111.png', 'png', 'image/png', 3015124, 712, 410, NULL, '2021-06-01 15:24:52', '2021-06-01 15:24:52');
INSERT INTO `files` VALUES (870, '78e5e92a-04e1-4de1-825d-43846fe59447', 'services-production-media', 'TjKbFKrOoT', '2222.png', 'png', 'image/png', 2954090, 712, 409, NULL, '2021-06-01 15:25:03', '2021-06-01 15:25:03');
INSERT INTO `files` VALUES (871, '34e09a91-b73a-45e5-a779-ddf8fc213f6d', 'services-production-media', 'yOE2jdrW6k', '3333.png', 'png', 'image/png', 2905181, 712, 411, NULL, '2021-06-01 15:25:13', '2021-06-01 15:25:13');
INSERT INTO `files` VALUES (872, 'ce3a1305-fc66-4070-b897-22c88b00ea3a', 'services-production-media', 'PQZRfrCkEd', '4444.png', 'png', 'image/png', 2902812, 712, 410, NULL, '2021-06-01 15:25:20', '2021-06-01 15:25:20');
INSERT INTO `files` VALUES (873, '3a6c0d95-b3fd-42a3-834a-e92ce6bd2133', 'vacancy-image', 'daq27fBmg4', 'Layer 32.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-02 15:27:34', '2021-06-02 15:27:34');
INSERT INTO `files` VALUES (874, '6c1649e7-1ce2-4d74-871b-b74db231f759', NULL, 'YqlKKQ90bC', 'Layer 18.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-02 15:28:35', '2021-06-02 15:28:35');
INSERT INTO `files` VALUES (875, '3fa66ae4-01ce-4d7d-8f12-6cbeed9baaed', 'vacancy-image', 'w22hhuArMo', 'Layer 19.png', 'png', 'image/png', 2034808, 602, 832, NULL, '2021-06-02 15:29:29', '2021-06-02 15:29:29');
INSERT INTO `files` VALUES (876, 'd64fc5d4-9616-43e9-90c9-bb688ff6b712', 'vacancy-image', '5JGFZONHUq', 'Layer 20.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-02 15:30:12', '2021-06-02 15:30:12');
INSERT INTO `files` VALUES (877, '73476765-cd72-499e-b9f7-fa471deb1b57', 'vacancy-image', 'cXQPATejnN', 'Layer 28.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-02 15:30:35', '2021-06-02 15:30:35');
INSERT INTO `files` VALUES (878, '6720d779-a14a-47b3-a907-15c3e841b5b0', 'vacancy-image', 'dddfbM5xCB', 'Layer 12.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-02 15:31:07', '2021-06-02 15:31:07');
INSERT INTO `files` VALUES (879, '3cfe58ba-8244-408d-be08-4abaf8091445', 'vacancy-image', 'yneIRW44hI', 'Layer 23.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-02 15:31:26', '2021-06-02 15:31:26');
INSERT INTO `files` VALUES (880, '1de31d8c-6250-434b-883c-609780052c6f', 'vacancy-image', 'fq1VTLnBCg', 'Layer 34.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-02 15:32:25', '2021-06-02 15:32:25');
INSERT INTO `files` VALUES (881, '9f5ee7b3-03e1-4776-9fea-d79ab9834d58', 'vacancy-image', 'QtrRAMw1rY', 'Layer 39.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-02 15:33:07', '2021-06-02 15:33:07');
INSERT INTO `files` VALUES (882, '08f535f3-c8dc-47e1-8146-ecca0231c1a3', 'vacancy-image', 'XEMgilHnFg', 'Layer 15.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-02 15:33:48', '2021-06-02 15:33:48');
INSERT INTO `files` VALUES (883, 'b9fe20ee-9780-49ee-b1e2-dedac99856ea', 'Feedback', 'jhmIWOtPVK', 'Los[01-06-2021].pdf', 'pdf', 'application/pdf', 61284, NULL, NULL, NULL, '2021-06-02 16:54:59', '2021-06-02 16:54:59');
INSERT INTO `files` VALUES (884, 'f7d36324-cbfb-4f6b-aa59-2091782480fc', NULL, '4ZYDQMBfmm', 'Group 611.svg', 'svg', 'image/svg+xml', 59392, NULL, NULL, NULL, '2021-06-03 11:01:31', '2021-06-03 11:01:31');
INSERT INTO `files` VALUES (885, '63eb5661-963d-45f7-856e-2fcaa5f6c4ab', NULL, 'l3zYKJdstt', 'app-store.svg', 'svg', 'image/svg+xml', 9650, NULL, NULL, NULL, '2021-06-03 11:04:05', '2021-06-03 11:04:05');
INSERT INTO `files` VALUES (886, '8de4da7b-8158-46cf-840e-3f16f048f5f6', 'Feedback', 'DPrsAepwhl', 'Rectangle 704.jpg', 'jpg', 'image/jpeg', 1021063, 1806, 1012, NULL, '2021-06-04 16:19:52', '2021-06-04 16:19:52');
INSERT INTO `files` VALUES (887, '07c230f8-8e05-4871-a256-604f290cd2ac', 'Feedback', 'FkiZLtwNBK', 'contacts.png', 'png', 'image/png', 243043, 1920, 3810, NULL, '2021-06-04 16:24:31', '2021-06-04 16:24:31');
INSERT INTO `files` VALUES (888, '64c09bf7-8313-4be7-b044-d7b8ee4970ab', 'Feedback', 'JG5iYmuVMN', 'Rectangle 704.jpg', 'jpg', 'image/jpeg', 1021063, 1806, 1012, NULL, '2021-06-04 17:03:07', '2021-06-04 17:03:07');
INSERT INTO `files` VALUES (889, '375e18ec-694c-45e7-ae73-0bf693779561', 'Feedback', 'cSWKltzP20', 'pctJnGISku.png', 'png', 'image/png', 62553, 200, 200, NULL, '2021-06-04 17:03:53', '2021-06-04 17:03:53');
INSERT INTO `files` VALUES (890, '0a550d93-d7af-4840-bccb-728f43bd27cf', 'open-graph', 'pbQ9ZJEUbo', 'Rectangle 18.jpg', 'jpg', 'image/jpeg', 374205, 604, 836, NULL, '2021-06-07 11:11:15', '2021-06-07 11:11:15');
INSERT INTO `files` VALUES (891, '1ff51bef-6402-4054-a507-4d20c20c0d2b', 'services-ads', 'rA1D9EbsXs', 'DwKulWYaa0.jpg', 'jpg', 'image/jpeg', 54929, 497, 1065, NULL, '2021-06-07 13:26:08', '2021-06-07 13:27:08');
INSERT INTO `files` VALUES (892, '1e1b8553-3eb0-4df4-8db8-15a41d0615a6', 'services-ads', 'MjFM95wyud', '3bWDAJRrks.jpg', 'jpg', 'image/jpeg', 41856, 496, 1064, NULL, '2021-06-07 13:26:15', '2021-06-07 13:27:08');
INSERT INTO `files` VALUES (893, '9d3b6851-7c06-469e-9151-61158b0bc627', 'services-ads', 'iFD7Pzy2Re', 'kDd9GxfUdn.png', 'png', 'image/png', 589935, 497, 1065, NULL, '2021-06-07 13:26:23', '2021-06-07 13:27:08');
INSERT INTO `files` VALUES (894, 'e30c4544-59f3-42bd-bd11-50078ebe4630', 'services-ads', 'NlAOrv02Ul', 'zPjaGPKuSt.png', 'png', 'image/png', 280484, 497, 1065, NULL, '2021-06-07 13:26:34', '2021-06-07 13:27:08');
INSERT INTO `files` VALUES (895, 'c4930ad5-27b7-4a46-b760-75e2d9ef8134', 'services-ads', 'NsUdlZy3BO', 'ccrQf13cUM.png', 'png', 'image/png', 147954, 497, 1065, NULL, '2021-06-07 13:26:43', '2021-06-07 13:27:08');
INSERT INTO `files` VALUES (896, 'b25c0331-2977-40bd-bb6b-84fc5de2d579', 'services-ads', 'QJEWZXzIk9', 'TtN3Z5QHVg.png', 'png', 'image/png', 248999, 497, 1065, NULL, '2021-06-07 13:26:48', '2021-06-07 13:27:08');
INSERT INTO `files` VALUES (897, 'fbb6fad6-0f36-4064-91a0-1f007ea6e584', 'services-ads', 'lonrS86zkv', '7bNsJ28wip.png', 'png', 'image/png', 355186, 497, 1065, NULL, '2021-06-07 13:27:00', '2021-06-07 13:27:08');
INSERT INTO `files` VALUES (898, '0f55d85e-72c1-4053-af99-16297db6da52', 'services-ads', '3hHyWRCFSM', 'HxhGEOwbtO.png', 'png', 'image/png', 258782, 497, 1065, NULL, '2021-06-07 13:27:04', '2021-06-07 13:27:08');
INSERT INTO `files` VALUES (899, '1b9fd43f-ed81-465c-9aae-46a632954b4f', 'Feedback', 'kqeir0mWrK', 'image (2).png', 'png', 'image/png', 35832, 1780, 118, NULL, '2021-06-08 09:07:36', '2021-06-08 09:07:36');
INSERT INTO `files` VALUES (900, 'a399c7cf-6ba7-42c0-bb2c-f1239cba721d', 'Feedback', 'uyqBowUsxQ', 'CDP.png', 'png', 'image/png', 2965876, 1440, 7149, NULL, '2021-06-08 09:07:49', '2021-06-08 09:07:49');
INSERT INTO `files` VALUES (901, '572cb1a9-0f37-447d-87f2-372775e17d9a', 'Feedback', 'dDPZqejqxE', '0ZTuOqGvng.jpg', 'jpg', 'image/jpeg', 112629, 1852, 750, NULL, '2021-06-08 09:09:46', '2021-06-08 09:09:46');
INSERT INTO `files` VALUES (902, 'ffc240c5-7609-4a2e-af71-431d39955238', 'Feedback', 'uMTvHhLa7R', '0ZTuOqGvng.jpg', 'jpg', 'image/jpeg', 112629, 1852, 750, NULL, '2021-06-08 09:21:36', '2021-06-08 09:21:36');
INSERT INTO `files` VALUES (903, '3099c8d7-15cd-46ea-abaf-25da90e757ce', 'Feedback', 'vmcaeuMV9u', 'fsdf.txt', 'txt', 'text/plain', 8, NULL, NULL, NULL, '2021-06-08 09:26:46', '2021-06-08 09:26:46');
INSERT INTO `files` VALUES (904, '25f05a74-27e7-43ae-bbfe-159f169a45ec', 'Feedback', 'ocfzLdTiBR', 'Новый текстовый документ.txt', 'txt', 'text/plain', 18569, NULL, NULL, NULL, '2021-06-08 09:27:10', '2021-06-08 09:27:10');
INSERT INTO `files` VALUES (905, '0d09c9ed-3e71-4e37-aea9-bd31e7c5191f', 'Feedback', 'lpOrcvk5ge', 'info.txt', 'txt', 'text/plain', 2826, NULL, NULL, NULL, '2021-06-08 09:41:14', '2021-06-08 09:41:14');
INSERT INTO `files` VALUES (906, '939be078-1500-49d5-8d2c-9d7f72193c25', 'Feedback', '4uxCu7SqDt', 'css-html].txt', 'txt', 'text/plain', 2650, NULL, NULL, NULL, '2021-06-08 09:43:43', '2021-06-08 09:43:43');
INSERT INTO `files` VALUES (907, 'bf97b42c-c82c-47fd-9705-a1461c286bb4', 'Feedback', 'p38gdd99Jo', '0ZTuOqGvng.jpg', 'jpg', 'image/jpeg', 112629, 1852, 750, NULL, '2021-06-08 09:44:42', '2021-06-08 09:44:42');
INSERT INTO `files` VALUES (908, '809a6995-6dc1-4d7a-869f-090672642b17', 'services-art-images', 'mBOnuLrdE9', '13001 (_Woman with Axe_) Idle Cycle 1.jpg', 'jpg', 'image/jpeg', 528396, 673, 750, NULL, '2021-06-08 16:43:19', '2021-06-08 16:43:19');
INSERT INTO `files` VALUES (909, '007c2736-232c-4283-a474-5531c30efbff', 'services-art-images', '2W03hDLGfV', 'war.jpg', 'jpg', 'image/jpeg', 111155, 1030, 1266, NULL, '2021-06-08 16:57:04', '2021-06-08 16:57:04');
INSERT INTO `files` VALUES (910, 'c7a94fa4-9f4b-47e6-bdd0-4a2e0dcd5d84', 'services-art-images', 'ncx27hZdey', 'Rectangle 7 (2).png', 'png', 'image/png', 739585, 673, 750, NULL, '2021-06-08 17:13:19', '2021-06-08 17:13:19');
INSERT INTO `files` VALUES (911, '05e63a95-c5aa-44e3-abe4-31002bb826fa', 'services-art-images', '1IWzNEB3c2', 'Rectangle 7 (1).png', 'png', 'image/png', 1750151, 1030, 1266, NULL, '2021-06-08 17:19:48', '2021-06-08 17:19:48');
INSERT INTO `files` VALUES (912, '1d3363a9-7203-4c64-befb-caa5ccd959cc', 'services-art-images', 'aDMe6qOoJX', 'oDZqtP8RX6.png', 'png', 'image/png', 612138, 673, 750, NULL, '2021-06-08 17:55:58', '2021-06-08 17:55:58');
INSERT INTO `files` VALUES (913, '7116cc99-8097-4613-814b-adeb88120314', 'services-art-images', 'Bb5kdMgYhA', 'oDZqtP8RX6.png', 'png', 'image/png', 612138, 673, 750, NULL, '2021-06-08 17:55:59', '2021-06-08 17:55:59');
INSERT INTO `files` VALUES (914, 'eccfe46a-3d4c-471d-bafa-85dcbf986aad', 'services-art-images', 'P3HqT1YbjL', 'euj0McsQQG.png', 'png', 'image/png', 473129, 673, 750, NULL, '2021-06-08 17:56:02', '2021-06-08 17:56:02');
INSERT INTO `files` VALUES (915, '7f1c91f7-cf07-4df1-b4cc-5523201d5a61', 'services-art-images', '5zcsFAhs0g', 'euj0McsQQG.png', 'png', 'image/png', 473129, 673, 750, NULL, '2021-06-08 17:56:04', '2021-06-08 17:56:04');
INSERT INTO `files` VALUES (916, '016efbaa-ce5c-45b8-bfaf-893b890d35cb', 'services-art-images', 'vdtKE5XLr5', 'PxcRb1yCsG.png', 'png', 'image/png', 530252, 673, 750, NULL, '2021-06-08 17:56:07', '2021-06-08 17:56:07');
INSERT INTO `files` VALUES (917, '88cd4491-21b8-4f3a-9a7d-d0bb00e2f4e9', 'services-art-images', 'an0aoTpYEU', 'PxcRb1yCsG.png', 'png', 'image/png', 530252, 673, 750, NULL, '2021-06-08 17:56:09', '2021-06-08 17:56:09');
INSERT INTO `files` VALUES (918, '0178dbf3-4358-4b48-9081-b4d0d93856bd', 'services-art-images', 'IcqmO1xJzU', 'fsEXKSoMda.png', 'png', 'image/png', 683556, 673, 750, NULL, '2021-06-08 17:56:13', '2021-06-08 17:56:13');
INSERT INTO `files` VALUES (919, 'cc982d10-135d-416f-b52a-2e9d15a1bed7', 'services-art-images', 'LUFkqRK4Fg', 'fsEXKSoMda.png', 'png', 'image/png', 683556, 673, 750, NULL, '2021-06-08 17:56:14', '2021-06-08 17:56:14');
INSERT INTO `files` VALUES (920, '5a6de388-55f7-4574-8b05-dadece3af535', 'services-art-images', 'NyRRpdg0dP', 'ZDJwSnNYup.png', 'png', 'image/png', 600458, 673, 750, NULL, '2021-06-08 17:56:19', '2021-06-08 17:56:19');
INSERT INTO `files` VALUES (921, 'ad43360c-65d3-4cca-b37f-719395300c76', 'services-art-images', 'kXgOrRz7vm', 'ZDJwSnNYup.png', 'png', 'image/png', 600458, 673, 750, NULL, '2021-06-08 17:56:20', '2021-06-08 17:56:20');
INSERT INTO `files` VALUES (922, '7c96aa4f-4ca5-401b-ad56-f5a1e3f6a28f', 'services-art-images', 'J84IGLPAZ8', 'TtolNYM3dz.png', 'png', 'image/png', 634608, 673, 750, NULL, '2021-06-08 17:56:24', '2021-06-08 17:56:24');
INSERT INTO `files` VALUES (923, 'd503be07-ddf1-4d87-accf-09f58dcf56ae', 'services-art-images', 'Q37BbLi3zN', 'TtolNYM3dz.png', 'png', 'image/png', 634608, 673, 750, NULL, '2021-06-08 17:56:25', '2021-06-08 17:56:25');
INSERT INTO `files` VALUES (924, '412e57da-749a-4af4-a4fc-4450bbe98554', 'services-art-images', 'zwIvl1PGpj', 'oDZqtP8RX6.png', 'png', 'image/png', 612138, 673, 750, NULL, '2021-06-08 17:56:43', '2021-06-08 17:56:43');
INSERT INTO `files` VALUES (925, 'e66b2f56-4510-4fd2-88b3-fb6f1210629f', 'services-art-images', 'q1onWu8SCv', 'oDZqtP8RX6.png', 'png', 'image/png', 612138, 673, 750, NULL, '2021-06-08 17:56:44', '2021-06-08 17:56:44');
INSERT INTO `files` VALUES (926, 'cfc5e027-7065-47b9-918e-8d8d35372aa5', 'services-art-images', 'aTkW9wYkuK', 'euj0McsQQG.png', 'png', 'image/png', 473129, 673, 750, NULL, '2021-06-08 17:56:46', '2021-06-08 17:56:46');
INSERT INTO `files` VALUES (927, 'ccd22a5d-a9a7-491d-abee-4e2bf6f57793', 'services-art-images', '0q3pEnreHy', 'euj0McsQQG.png', 'png', 'image/png', 473129, 673, 750, NULL, '2021-06-08 17:56:47', '2021-06-08 17:56:47');
INSERT INTO `files` VALUES (928, 'b1339663-8686-469c-b92e-318ce0b030ce', 'services-art-images', 'llMzmOKgL2', 'PxcRb1yCsG.png', 'png', 'image/png', 530252, 673, 750, NULL, '2021-06-08 17:56:50', '2021-06-08 17:56:50');
INSERT INTO `files` VALUES (929, 'e87eeb0c-6534-4e22-92f9-17ae4afe897e', 'services-art-images', 'YIpcLvrlBs', 'PxcRb1yCsG.png', 'png', 'image/png', 530252, 673, 750, NULL, '2021-06-08 17:56:51', '2021-06-08 17:56:51');
INSERT INTO `files` VALUES (930, '8761f1d4-e64e-47f2-afc1-9a3c3fad976c', 'services-art-images', 'XgmuZaYbMj', 'fsEXKSoMda.png', 'png', 'image/png', 683556, 673, 750, NULL, '2021-06-08 17:56:55', '2021-06-08 17:56:55');
INSERT INTO `files` VALUES (931, '44d8c5b1-60dc-4f47-8972-6bd90b57a9e2', 'services-art-images', 'wiBfh5l9Dw', 'fsEXKSoMda.png', 'png', 'image/png', 683556, 673, 750, NULL, '2021-06-08 17:56:56', '2021-06-08 17:56:56');
INSERT INTO `files` VALUES (932, '0f7517e4-15b8-4695-b023-77574cb941c8', 'services-art-images', '2TcdiW2wPw', 'ZDJwSnNYup.png', 'png', 'image/png', 600458, 673, 750, NULL, '2021-06-08 17:56:59', '2021-06-08 17:56:59');
INSERT INTO `files` VALUES (933, 'bd5567bd-1d22-42e6-96bf-ab591197d073', 'services-art-images', 'uwINAaR2hA', 'ZDJwSnNYup.png', 'png', 'image/png', 600458, 673, 750, NULL, '2021-06-08 17:57:01', '2021-06-08 17:57:01');
INSERT INTO `files` VALUES (934, '3cc96fcf-0ae9-4f36-9040-f1006f370a68', 'services-art-images', 'uv1npkOdWu', 'TtolNYM3dz.png', 'png', 'image/png', 634608, 673, 750, NULL, '2021-06-08 17:57:03', '2021-06-08 17:57:03');
INSERT INTO `files` VALUES (935, '78d62cd4-475e-4a5e-8429-9cc6143b4485', 'services-art-images', 'gh3Je8c9ld', 'TtolNYM3dz.png', 'png', 'image/png', 634608, 673, 750, NULL, '2021-06-08 17:57:05', '2021-06-08 17:57:05');
INSERT INTO `files` VALUES (936, 'd3ccea96-f748-4f95-bea7-02f1c3705cde', 'services-art-images', 'CNroL8mqs3', 'war.jpg', 'jpg', 'image/jpeg', 111155, 1030, 1266, NULL, '2021-06-08 17:57:30', '2021-06-08 17:57:30');
INSERT INTO `files` VALUES (937, '25aea05f-4198-4d04-b011-a5bf134d59c2', 'services-art-images', 'KBCqr76PwU', 'Rectangle 7 (2).png', 'png', 'image/png', 739585, 673, 750, NULL, '2021-06-08 17:57:40', '2021-06-08 17:57:40');
INSERT INTO `files` VALUES (938, 'fe5fc480-2a51-4cb4-aa09-78623632c4e2', 'services-art-images', 'MGOik1UYCe', '7JXrw0nsEu.png', 'png', 'image/png', 770637, 673, 750, NULL, '2021-06-08 17:57:46', '2021-06-08 17:57:46');
INSERT INTO `files` VALUES (939, '78fa0625-9206-4aaa-b0e2-1f79057f0302', 'services-art-images', 'wkJ3v4yQyQ', '7JXrw0nsEu.png', 'png', 'image/png', 770637, 673, 750, NULL, '2021-06-08 17:57:48', '2021-06-08 17:57:48');
INSERT INTO `files` VALUES (940, 'ca96c369-d0df-40d6-9234-17d75cf71aa0', 'services-art-images', 'OqBtLR6CTq', 'EAR7T7t6kN.png', 'png', 'image/png', 623935, 673, 750, NULL, '2021-06-08 17:57:50', '2021-06-08 17:57:50');
INSERT INTO `files` VALUES (941, '6cb3d68b-4f29-4b34-af60-6bca01e09ce5', 'services-art-images', 'eoNxUoFQUE', 'EAR7T7t6kN.png', 'png', 'image/png', 623935, 673, 750, NULL, '2021-06-08 17:57:52', '2021-06-08 17:57:52');
INSERT INTO `files` VALUES (942, '532c8507-2ea7-407b-94cf-bf0b6dabd302', 'playable-ads-head', 'OcuWag9Iic', 'ldhKHmRmOP.png', 'png', 'image/png', 117523, 470, 263, NULL, '2021-06-09 10:13:17', '2021-06-09 10:13:20');
INSERT INTO `files` VALUES (943, 'd1f656f1-3fee-4731-b533-db06c7e3cc52', 'home-technologies-gallery', 'y945GZVdIJ', 'Unity_logo.svg', 'svg', 'image/svg+xml', 1984, NULL, NULL, NULL, '2021-06-09 14:07:59', '2021-06-09 14:07:59');
INSERT INTO `files` VALUES (944, '4ec535d0-6bdd-4041-88a6-b4a7096f83c8', 'home-technologies-gallery', 'E2vX3iZxnO', 'Spine_logo.svg', 'svg', 'image/svg+xml', 28953, NULL, NULL, NULL, '2021-06-09 14:08:06', '2021-06-09 14:08:06');
INSERT INTO `files` VALUES (945, 'e4a8a1dc-c19d-4f87-a34c-c99dc7f741a7', 'home-technologies-gallery', 'irR4Lm8JAS', 'HTML5_logo.svg', 'svg', 'image/svg+xml', 10252, NULL, NULL, NULL, '2021-06-09 14:08:08', '2021-06-09 14:08:08');
INSERT INTO `files` VALUES (946, '466d7d38-e50c-4f2b-9e79-5a49da77fdc2', 'home-technologies-gallery', '5g4D5F2AWA', 'Unreal_Engine.svg', 'svg', 'image/svg+xml', 10546, NULL, NULL, NULL, '2021-06-09 14:08:11', '2021-06-09 14:08:11');
INSERT INTO `files` VALUES (947, '546fbd7a-3d77-4e05-8d93-36254b92ff27', 'Feedback', 'vI19yL255n', 'Лекция_9 (1).doc', 'doc', 'application/msword', 32768, NULL, NULL, NULL, '2021-06-09 15:48:08', '2021-06-09 15:48:08');
INSERT INTO `files` VALUES (948, 'aec9e6c9-f293-4a88-90ca-486d2ccaf46d', NULL, 'KMMJzGxAUX', 'google-play.svg', 'svg', 'image/svg+xml', 10524, NULL, NULL, NULL, '2021-06-09 17:57:55', '2021-06-09 17:57:55');
INSERT INTO `files` VALUES (949, '3009fe06-56ba-474e-b4f2-993715da7add', NULL, 'vYOsp5CBHH', 'google-play.svg', 'svg', 'image/svg+xml', 10524, NULL, NULL, NULL, '2021-06-09 17:58:04', '2021-06-09 17:58:04');
INSERT INTO `files` VALUES (950, 'a6932335-b656-44cc-b9f4-003f2deb9b46', NULL, '48FubVnqxa', 'google-play.svg', 'svg', 'image/svg+xml', 10524, NULL, NULL, NULL, '2021-06-09 17:58:09', '2021-06-09 17:58:09');
INSERT INTO `files` VALUES (951, 'df478507-fd93-4165-a939-906f2671bfc1', NULL, 'CkpDxOvr0u', 'google-play.svg', 'svg', 'image/svg+xml', 10524, NULL, NULL, NULL, '2021-06-09 17:58:15', '2021-06-09 17:58:15');
INSERT INTO `files` VALUES (952, '34c0cb14-afba-4af4-978e-e1f56a78fa5b', NULL, '2lLyfWa4e6', 'google-play.svg', 'svg', 'image/svg+xml', 10524, NULL, NULL, NULL, '2021-06-09 17:58:26', '2021-06-09 17:58:26');
INSERT INTO `files` VALUES (953, '9704d99d-84c1-4204-a8e4-da8bd7971144', 'Feedback', '1SctVy7D55', 'Лекция_9 (1).doc', 'doc', 'application/msword', 32768, NULL, NULL, NULL, '2021-06-10 07:58:26', '2021-06-10 07:58:26');
INSERT INTO `files` VALUES (954, 'bf04d671-a6bf-4377-9db8-27e67e01a6e6', 'Feedback', 'p272KGp67t', 'Лекция_9 (1).doc', 'doc', 'application/msword', 32768, NULL, NULL, NULL, '2021-06-10 07:59:18', '2021-06-10 07:59:18');
INSERT INTO `files` VALUES (955, '022b27f2-5bd5-4660-b736-2eeb3e19ae03', 'home-team-image', '4HmMSDzedF', 'EV.jpg', 'jpg', 'image/jpeg', 17337, 189, 189, NULL, '2021-06-10 09:37:46', '2021-06-10 09:37:46');
INSERT INTO `files` VALUES (956, '85a3faf0-53a9-4f72-b83e-3205e03f49c3', 'home-team-image', '3eizIsaXup', 'Viktor Shvedchikov - 3D Artist.jpg', 'jpg', 'image/jpeg', 20118, 320, 305, NULL, '2021-06-10 09:44:58', '2021-06-10 09:44:58');
INSERT INTO `files` VALUES (957, '73089cda-4772-463b-8eee-1376d2a0105d', 'home-team-image', 'Vpz6zVCr6N', 'Anastasia Shukshina - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 18467, 351, 351, NULL, '2021-06-10 09:44:58', '2021-06-10 09:44:58');
INSERT INTO `files` VALUES (958, '37093105-251d-4f17-9b46-5ceaac245009', 'home-team-image', 'eJSC9ym2Hm', 'Olga Bubnova - Senior 3D Artist.jpg', 'jpg', 'image/jpeg', 72591, 418, 418, NULL, '2021-06-10 09:44:58', '2021-06-10 09:44:58');
INSERT INTO `files` VALUES (959, '9f3b48e7-6295-4bd7-b527-eb2ea69e8b55', 'home-team-image', 'jfvFSiQqmj', 'Alexander Davydov -3D Artist.jpg', 'jpg', 'image/jpeg', 90534, 492, 484, NULL, '2021-06-10 09:44:59', '2021-06-10 09:44:59');
INSERT INTO `files` VALUES (960, 'f6661295-a067-4d0d-a6c2-be9839cc02de', 'home-team-image', 'iiYVMBm5sT', 'Alexander Novojilov - 3D Artist.jpg', 'jpg', 'image/jpeg', 80903, 1080, 1080, NULL, '2021-06-10 09:44:59', '2021-06-10 09:44:59');
INSERT INTO `files` VALUES (961, '328a3ac3-37a2-4f21-806e-89b6e42d966c', 'home-team-image', 'iBjRAUcEOy', 'Ekaterina Poloznikova - 3D Artist.jpg', 'jpg', 'image/jpeg', 101444, 724, 736, NULL, '2021-06-10 09:44:59', '2021-06-10 09:44:59');
INSERT INTO `files` VALUES (962, '9ab275f3-4025-4d86-af50-f978881a7844', 'home-team-image', '5Nehcz04j4', 'Ilya Ushakov - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 149284, 800, 734, NULL, '2021-06-10 09:44:59', '2021-06-10 09:44:59');
INSERT INTO `files` VALUES (963, 'e35ccaa9-84f7-4e2f-be6f-3b6f34b89853', 'home-team-image', 'BSwUdDRRvN', 'Konstantin Milovanov - It engineer.jpg', 'jpg', 'image/jpeg', 104884, 690, 650, NULL, '2021-06-10 09:44:59', '2021-06-10 09:44:59');
INSERT INTO `files` VALUES (964, 'add744a4-d616-4173-a5e0-1cd7cf9fee83', 'home-team-image', 'UiJ9OTAMJM', 'Alexey Prokhorenkov - Senior game designer.jpg', 'jpg', 'image/jpeg', 245737, 1219, 1079, NULL, '2021-06-10 09:44:59', '2021-06-10 09:44:59');
INSERT INTO `files` VALUES (965, '8034bcf5-b0bc-47d8-a594-b8e940fa64bb', 'home-team-image', 'aoQrEgQZXt', 'Sergey Guley - Senior 3D artist.jpg', 'jpg', 'image/jpeg', 165731, 2628, 2628, NULL, '2021-06-10 09:44:59', '2021-06-10 09:44:59');
INSERT INTO `files` VALUES (966, '4d1b9dc8-0277-4d37-beb3-25e32f4efb5d', 'home-team-image', 'r3Z1YWRPPx', 'Alex Alexseev - Lead 3D artist.jpg', 'jpg', 'image/jpeg', 273004, 655, 565, NULL, '2021-06-10 09:44:59', '2021-06-10 09:44:59');
INSERT INTO `files` VALUES (967, 'faf841ac-0338-4d41-b405-31844b82da3f', 'home-team-image', 'kgsDAP5wNL', 'Kolesnikova Nadezhda - Senior 3D artist.jpg', 'jpg', 'image/jpeg', 271845, 1440, 1440, NULL, '2021-06-10 09:44:59', '2021-06-10 09:44:59');
INSERT INTO `files` VALUES (968, '442558cb-efe5-4490-b54c-fb581e9c5199', 'home-team-image', 'lqnqq5bBWy', 'Alexander Sivograkov - PM.png', 'png', 'image/png', 354093, 605, 605, NULL, '2021-06-10 09:44:59', '2021-06-10 09:44:59');
INSERT INTO `files` VALUES (969, '8dfba232-ecb8-42e8-abb2-2042040ec590', 'home-team-image', 'GtfxAIOS6d', 'Irina Bessonova - Junior 3D Artist.png', 'png', 'image/png', 416301, 810, 810, NULL, '2021-06-10 09:45:00', '2021-06-10 09:45:00');
INSERT INTO `files` VALUES (970, '57e758d2-0b30-4084-8f2f-31ec40bc7872', 'home-team-image', 'Gghl8NBcEh', 'Nickolay Pomoynickiy - Game Designer.png', 'png', 'image/png', 589553, 586, 586, NULL, '2021-06-10 09:45:00', '2021-06-10 09:45:00');
INSERT INTO `files` VALUES (971, 'a88a5289-62c7-409e-9710-4c994d405d0d', 'home-team-image', 'IFbRw5h8ep', 'Anastasia Shukshina - Lead 3D artist.png', 'png', 'image/png', 483477, 608, 608, NULL, '2021-06-10 09:45:00', '2021-06-10 09:45:00');
INSERT INTO `files` VALUES (972, 'ebec400c-be1a-47ea-a531-67a872da6c17', 'home-team-image', 'X9nG1f0HZm', 'Olga Yurina - 3D Artist.png', 'png', 'image/png', 520935, 596, 596, NULL, '2021-06-10 09:45:00', '2021-06-10 09:45:00');
INSERT INTO `files` VALUES (973, 'e9e01909-f65f-413a-88cf-073f5ffa7321', 'home-team-image', 'v8WMJ651oD', 'Alexandr Zavrazhnov - Junior 3D Artist.png', 'png', 'image/png', 575936, 933, 933, NULL, '2021-06-10 09:45:01', '2021-06-10 09:45:01');
INSERT INTO `files` VALUES (974, '80af3538-74fe-4cb7-ae58-802d0ef0ef3d', 'home-team-image', 'UiDgvu4iRy', 'Ladokhina Alina - PM.jpg', 'jpg', 'image/jpeg', 474574, 1280, 1280, NULL, '2021-06-10 09:45:01', '2021-06-10 09:45:01');
INSERT INTO `files` VALUES (975, '5416289d-7b19-415e-bf6a-f344c6eaaf46', 'home-team-image', '2FFj0YAwQb', 'Elena Rezeda - Junior 3D Artist.png', 'png', 'image/png', 583379, 837, 837, NULL, '2021-06-10 09:45:02', '2021-06-10 09:45:02');
INSERT INTO `files` VALUES (976, 'c73e23d2-7bfd-4344-9598-57d1096825db', 'home-team-image', 'YPyFZt32ZG', 'Anastasia Rybchenko - 3D Artist.png', 'png', 'image/png', 606555, 559, 559, NULL, '2021-06-10 09:45:02', '2021-06-10 09:45:02');
INSERT INTO `files` VALUES (977, '2a959ebc-884a-434d-8315-6e285e3c4f57', 'home-team-image', 'IuvzTBhBAj', 'Anna Sholomova - 3D Artist.png', 'png', 'image/png', 709315, 967, 967, NULL, '2021-06-10 09:45:03', '2021-06-10 09:45:03');
INSERT INTO `files` VALUES (978, '9f13ee1d-a77c-4643-8043-0d1bf6c80e26', 'home-team-image', 'v2Nvj9xaNB', 'Vladimir_Petrichenko - Lead 3D artist.png', 'png', 'image/png', 674858, 880, 880, NULL, '2021-06-10 09:45:03', '2021-06-10 09:45:03');
INSERT INTO `files` VALUES (979, '161b1a47-6463-4338-af1f-1a4efd435514', 'home-team-image', 'Kdx1oPjcUg', 'Evgenii Gaidai - 3D Artist.png', 'png', 'image/png', 783782, 841, 841, NULL, '2021-06-10 09:45:03', '2021-06-10 09:45:03');
INSERT INTO `files` VALUES (980, '76e0bee3-2333-4bc4-8ca5-92ea0284c577', 'home-team-image', '4QdWUz9HDZ', 'Denis Mihaylov - Junior 3D Artist.png', 'png', 'image/png', 721381, 1280, 1280, NULL, '2021-06-10 09:45:03', '2021-06-10 09:45:03');
INSERT INTO `files` VALUES (981, '197bef1f-1147-4c9a-94fd-c689ff4ecaf3', 'home-team-image', 'SvfWifv4HJ', 'Anastsiya Shimbareva - Senior 3D artist.png', 'png', 'image/png', 949259, 948, 948, NULL, '2021-06-10 09:45:03', '2021-06-10 09:45:03');
INSERT INTO `files` VALUES (982, '812ea9fd-d70c-40a5-86b5-d70ba0a0ed95', 'home-team-image', '4vfB0UcJEv', 'Daniil Loskutov - Junior 3D Artist.png', 'png', 'image/png', 737890, 1258, 1258, NULL, '2021-06-10 09:45:03', '2021-06-10 09:45:03');
INSERT INTO `files` VALUES (983, 'afb75bd0-4f45-4f00-8d8b-ce3cb548d8b8', 'home-team-image', 'mJqWvg7z0J', 'Vladimir Dolgih - Junior 3D Artist.png', 'png', 'image/png', 733916, 960, 960, NULL, '2021-06-10 09:45:03', '2021-06-10 09:45:03');
INSERT INTO `files` VALUES (984, '4f073f6d-a76d-4856-963e-0876740e019f', 'home-team-image', 'IEbc2r6KWQ', 'Maxim Artes - Junior 3D Artist.png', 'png', 'image/png', 818775, 741, 741, NULL, '2021-06-10 09:45:04', '2021-06-10 09:45:04');
INSERT INTO `files` VALUES (985, 'dba53610-78ab-40dc-a91c-88f3f91b2e83', 'home-team-image', 'Lz7xqKLELs', 'Artem Anoshkin - Development director.png', 'png', 'image/png', 866900, 951, 951, NULL, '2021-06-10 09:45:04', '2021-06-10 09:45:04');
INSERT INTO `files` VALUES (986, '457e6daa-1f81-4bbc-ab5f-ee974d58a2e1', 'home-team-image', 'HmUHpZXOKL', 'Elena Fedorova -3D Artist.png', 'png', 'image/png', 804186, 854, 854, NULL, '2021-06-10 09:45:04', '2021-06-10 09:45:04');
INSERT INTO `files` VALUES (987, 'cd999e30-5645-4eea-a734-8b71ca8da7bc', 'home-team-image', 'iKjDqI3Nsc', 'Zoya Obmenennaya - Lead 3D artist.png', 'png', 'image/png', 803010, 851, 851, NULL, '2021-06-10 09:45:04', '2021-06-10 09:45:04');
INSERT INTO `files` VALUES (988, 'dcd2d497-b347-45e0-bc0d-fb195dea4b56', 'home-team-image', 'XpaoiSXSHZ', 'Alina Sidorina - Junior 3D Artist.png', 'png', 'image/png', 807295, 730, 730, NULL, '2021-06-10 09:45:04', '2021-06-10 09:45:04');
INSERT INTO `files` VALUES (989, '858ce32d-8d0b-4165-9b3e-33afe88bd600', 'home-team-image', '7PtqflcTsD', 'Natalia Bordunova - 3D Artist.png', 'png', 'image/png', 838621, 836, 836, NULL, '2021-06-10 09:45:04', '2021-06-10 09:45:04');
INSERT INTO `files` VALUES (990, '7f614cd7-8f3a-4893-a248-7df8ace6e735', 'home-team-image', '1KQR0Zj7VO', 'Yana Slavkina - 3D Artist.png', 'png', 'image/png', 1138668, 853, 853, NULL, '2021-06-10 09:45:04', '2021-06-10 09:45:04');
INSERT INTO `files` VALUES (991, 'b5717d73-3f5e-41d5-b8af-d52da3cf7b25', 'home-team-image', 'O8e8D2jXlq', 'Maxim Gapoyan -  Junior 3D Artist.png', 'png', 'image/png', 722698, 800, 800, NULL, '2021-06-10 09:45:04', '2021-06-10 09:45:04');
INSERT INTO `files` VALUES (992, 'e9e45585-5d7a-46cb-8350-098e30e4c5f9', 'home-team-image', 'El5bzbzaxh', 'Nikita Sergun - 3D Artist.png', 'png', 'image/png', 845493, 1543, 1543, NULL, '2021-06-10 09:45:04', '2021-06-10 09:45:04');
INSERT INTO `files` VALUES (993, 'c1fe1950-6bac-452f-8470-bb3ded0d6cfd', 'home-team-image', '70kKRVBbnX', 'Alexey Maslov - Senior 3D Artist.png', 'png', 'image/png', 1092952, 1090, 1090, NULL, '2021-06-10 09:45:04', '2021-06-10 09:45:04');
INSERT INTO `files` VALUES (994, '8eba6b9b-4b99-4a5d-a4a8-2b8ac7e73157', 'home-team-image', 'T5gYr1uKe3', 'Maria Shipitsyna - 3D Artist.png', 'png', 'image/png', 813612, 720, 720, NULL, '2021-06-10 09:45:05', '2021-06-10 09:45:05');
INSERT INTO `files` VALUES (995, 'd575893e-ceb9-4de0-b95e-e649f5216af9', 'home-team-image', 'vPFGdCxqye', 'Olga Noskova - 3D Artist.png', 'png', 'image/png', 1225510, 955, 955, NULL, '2021-06-10 09:45:05', '2021-06-10 09:45:05');
INSERT INTO `files` VALUES (996, '1ae932f5-0bec-4ae1-8a58-f1fba5909bb5', 'home-team-image', 'bodyH3E5Fi', 'Ivan Astakhov - 3D Artist.png', 'png', 'image/png', 1092220, 866, 866, NULL, '2021-06-10 09:45:05', '2021-06-10 09:45:05');
INSERT INTO `files` VALUES (997, '4d9ffb09-4ca5-419b-9529-67dae2cd40e4', 'home-team-image', '53x1Velmfy', 'Vyacheslav Konovalov - 3D Artist.png', 'png', 'image/png', 1205512, 1022, 1022, NULL, '2021-06-10 09:45:05', '2021-06-10 09:45:05');
INSERT INTO `files` VALUES (998, 'cc6ad299-5247-4ce4-a515-5a8355321781', 'home-team-image', 'qbnBBJKERO', 'Vladislav Popikov - 3D Artist.png', 'png', 'image/png', 1173192, 1197, 1197, NULL, '2021-06-10 09:45:05', '2021-06-10 09:45:05');
INSERT INTO `files` VALUES (999, '40750eee-42a6-4a94-97ac-9421194342cb', 'home-team-image', '2Bgm7UqR9g', 'Anna Skvortsova - Junior 3D Artist.png', 'png', 'image/png', 1273926, 1000, 1000, NULL, '2021-06-10 09:45:05', '2021-06-10 09:45:05');
INSERT INTO `files` VALUES (1000, 'f8ec1649-7f3b-45a2-ade1-90605766ab72', 'home-team-image', 'bQtzOhg4io', 'Anna Ignashina - Junior 3D Artist.png', 'png', 'image/png', 1275525, 1167, 1167, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1001, '9e69f43c-f2ae-4dc0-952e-c81a5adccf8f', 'home-team-image', 'adnJvTfwR1', 'Elena Mezina - 3D Artist.png', 'png', 'image/png', 1364123, 960, 960, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1002, '022e08b8-896c-46de-a75a-ce97d029e19f', 'home-team-image', 'JHVzpGb943', 'Olesya Elagova - Junior 3D Artist.png', 'png', 'image/png', 1316958, 1249, 1249, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1003, '235cbdf6-56e7-46d8-aabc-8bb2bb0cabb0', 'home-team-image', 'LbOzoe6KZe', 'Klim Starko -  3D Artist.png', 'png', 'image/png', 1622386, 956, 956, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1004, 'a9d5f9da-57ae-46d9-ad21-fade5f6dcdc2', 'home-team-image', 'IeYy4jMDPt', 'Georgy Kuzmenko - Senior 3D Artist.png', 'png', 'image/png', 1379865, 946, 946, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1005, '0bf71a48-9469-4f89-977e-0079de71f800', 'home-team-image', 'ZewZcV4lzX', 'Yana Sidorova - Game Designer.png', 'png', 'image/png', 1631088, 1135, 1135, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1006, '041db4fe-f10b-4f66-a57b-18c2de61f4c2', 'home-team-image', 'gqThUY7plc', 'Artem Kovalev - 3D Artist.png', 'png', 'image/png', 1481786, 1060, 1060, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1007, '26ee6f2f-0817-40d0-a0fe-6ef4d496cb9d', 'home-team-image', 'vibMhN6Btg', 'Sergey Yazikov - 3D Artist.jpg', 'jpg', 'image/jpeg', 2243833, 3255, 3321, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1008, '855605ea-6033-4840-a734-a9ef9b8e9448', 'home-team-image', 'aSjlDoB4gt', 'Alexander Iovlev - 3D Artist.JPG', 'jpg', 'image/jpeg', 1376703, 2637, 2385, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1009, 'c9376ddc-abb6-4030-a0e2-0351d68ca746', 'home-team-image', 'ktoZdsJ5FO', 'Inna Ermakova -  3D Artist.png', 'png', 'image/png', 1797851, 1280, 1280, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1010, '6ccc6b7e-dbe8-48e8-aacc-573e8d268b47', 'home-team-image', 'BwATDkV4rk', 'Alexey Lobov - Senior 3D Artist.png', 'png', 'image/png', 2254450, 1358, 1358, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1011, 'baca0be0-a731-43d4-8f15-e67bb8c697ed', 'home-team-image', 'kEW8qjSmX8', 'Leon Nekrasov - 3D Artist.png', 'png', 'image/png', 2811402, 1620, 1620, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1012, '70ad8f52-ccf6-4a27-970f-33887be6bc5a', 'home-team-image', '0uSpRmNawL', 'Irina Utkina - Associate art director.png', 'png', 'image/png', 2531069, 1600, 1600, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1013, 'f2defcc2-6aa3-42fa-9a83-51a2e0d9d912', 'home-team-image', 'tlVVrTxzUO', 'Margarita Romanova - 3D Artist.png', 'png', 'image/png', 3838921, 1775, 1779, NULL, '2021-06-10 09:45:06', '2021-06-10 09:45:06');
INSERT INTO `files` VALUES (1014, '58aaa043-4f24-414a-96b2-bc22fdfd7fff', 'home-team-image', 'vZXtbO4tWW', 'Konstantin Biryukov - 3D Artist.png', 'png', 'image/png', 2842925, 1441, 1441, NULL, '2021-06-10 09:45:07', '2021-06-10 09:45:07');
INSERT INTO `files` VALUES (1015, '3e83a4ba-099e-4a0b-81d2-2f40b3f3c5eb', 'home-team-image', 'dEvTiQ7pZN', 'Vladimir Denisov - Junior 3D Artist.png', 'png', 'image/png', 3575770, 1734, 1734, NULL, '2021-06-10 09:45:07', '2021-06-10 09:45:07');
INSERT INTO `files` VALUES (1016, '2e0bc853-e501-4212-9792-4731782805da', 'home-team-image', 'CmKCu6k6Qx', 'Konstantin Vershalovich - 3D Artist.png', 'png', 'image/png', 4117086, 1828, 1828, NULL, '2021-06-10 09:45:07', '2021-06-10 09:45:07');
INSERT INTO `files` VALUES (1017, '64e91da5-4d22-41ee-a8c4-928a715cc3ba', 'home-team-image', 'U28qBPBpBN', 'Anton Bukatin - 3D Artist.png', 'png', 'image/png', 1805123, 1440, 1440, NULL, '2021-06-10 09:45:07', '2021-06-10 09:45:07');
INSERT INTO `files` VALUES (1018, 'a7fbb3e4-0dc1-4b94-9631-550880131371', 'home-team-image', 'mKZFL3PQLW', 'Igor Meshkov -  Senior 3D Artist.png', 'png', 'image/png', 2623227, 1620, 1620, NULL, '2021-06-10 09:45:07', '2021-06-10 09:45:07');
INSERT INTO `files` VALUES (1019, 'ada72915-f90d-46e2-ba08-0a9e2286015d', 'home-team-image', 'mBVBaPUX2B', 'Ekaterina Kovaleva - Office Manager.png', 'png', 'image/png', 7612162, 2303, 2303, NULL, '2021-06-10 09:45:07', '2021-06-10 09:45:07');
INSERT INTO `files` VALUES (1020, '3e8576ce-50ea-42b2-b9e5-473e751fa541', 'home-team-image', 'WHkZWoy9xd', 'Anton Pasynkov - 3D artist.png', 'png', 'image/png', 4871099, 1761, 1761, NULL, '2021-06-10 09:45:07', '2021-06-10 09:45:07');
INSERT INTO `files` VALUES (1021, '8ed5d64b-5c7a-47ac-b648-a851b757d491', 'home-team-image', 'xN1G9DiNwT', 'Evgeniy Pavlov - 3D Artist.png', 'png', 'image/png', 15165259, 3056, 3056, NULL, '2021-06-10 09:45:08', '2021-06-10 09:45:08');
INSERT INTO `files` VALUES (1022, 'dc36a2e4-8fbf-4bd4-bf24-c9b7a90c59dd', NULL, 'dI7IPm9tMl', 'Spine_logo.svg', 'svg', 'image/svg+xml', 28953, NULL, NULL, NULL, '2021-06-10 10:18:51', '2021-06-10 10:18:51');
INSERT INTO `files` VALUES (1023, '1b250b46-0a08-43ee-adea-39cf4cedc1b9', NULL, 'oHpaV4M8wv', 'HTML5_logo.svg', 'svg', 'image/svg+xml', 10252, NULL, NULL, NULL, '2021-06-10 10:18:51', '2021-06-10 10:18:51');
INSERT INTO `files` VALUES (1024, '6dbb2c1e-4a6d-4f33-b000-b77c361695f2', NULL, 'w9LgoYiQdn', 'Spine_logo.svg', 'svg', 'image/svg+xml', 28953, NULL, NULL, NULL, '2021-06-10 10:18:58', '2021-06-10 10:18:58');
INSERT INTO `files` VALUES (1025, '94458a70-2be1-4753-b959-89563d14adf8', NULL, 'u6ROtXlmRi', 'Unreal_Engine.svg', 'svg', 'image/svg+xml', 10546, NULL, NULL, NULL, '2021-06-10 10:19:10', '2021-06-10 10:19:10');
INSERT INTO `files` VALUES (1026, '38c0fb7e-9366-40fb-bc4f-085a8286a69f', 'Feedback', 'IimyLA7NLA', 'LICENSE.txt', 'txt', 'text/plain', 4426, NULL, NULL, NULL, '2021-06-10 11:17:14', '2021-06-10 11:17:14');
INSERT INTO `files` VALUES (1027, '5ace7ebf-24a1-4e05-9985-65cac18ad9df', 'Feedback', '4uGxhpxe2O', 'README.txt', 'txt', 'text/plain', 2588, NULL, NULL, NULL, '2021-06-10 11:19:37', '2021-06-10 11:19:37');
INSERT INTO `files` VALUES (1028, '4545098d-1849-4e5a-b100-4af6a1c37d88', 'Feedback', '7GC8Tvi05T', 'LICENSE.txt', 'txt', 'text/plain', 4426, NULL, NULL, NULL, '2021-06-10 11:22:51', '2021-06-10 11:22:51');
INSERT INTO `files` VALUES (1029, 'f1cddb3d-60af-47fe-ada1-a5297a48e36e', 'services-porting', '4kkYATiShi', 'Group 846.svg', 'svg', 'image/svg+xml', 79936, NULL, NULL, NULL, '2021-06-10 14:37:03', '2021-06-10 14:37:03');
INSERT INTO `files` VALUES (1030, 'b815cd70-9bf4-4fef-a1c7-3b5cdc6733eb', 'Feedback', 'FzN4pERtcd', 'LICENSE.txt', 'txt', 'text/plain', 4426, NULL, NULL, NULL, '2021-06-10 16:24:20', '2021-06-10 16:24:20');
INSERT INTO `files` VALUES (1031, 'b3d73ae9-edbc-4f63-9510-1a820030ccea', 'services-art-images', 'fXSpSlniJE', 'q1onWu8SCv.png', 'png', 'image/png', 458913, 484, 750, NULL, '2021-06-10 22:18:44', '2021-06-10 22:18:44');
INSERT INTO `files` VALUES (1032, '4ab0ac8f-2073-40c5-b79f-229e7d698c95', 'services-art-images', 'F9DWBggWlN', 'YIpcLvrlBs (1).png', 'png', 'image/png', 411898, 493, 750, NULL, '2021-06-10 22:21:30', '2021-06-10 22:21:30');
INSERT INTO `files` VALUES (1033, '42f9142b-7138-4f12-935e-a70e677e0137', 'services-art-images', 'gzPWjecK3t', 'wiBfh5l9Dw (1).png', 'png', 'image/png', 559641, 493, 750, NULL, '2021-06-10 22:22:17', '2021-06-10 22:22:17');
INSERT INTO `files` VALUES (1034, '1e6345f3-cfba-4aa3-a1a9-7f6eb40c5bb5', 'services-art-images', 'XFLgusTCYB', 'uwINAaR2hA (1).png', 'png', 'image/png', 439404, 434, 749, NULL, '2021-06-10 22:23:18', '2021-06-10 22:23:18');
INSERT INTO `files` VALUES (1035, '0396e99d-943b-43aa-bfaf-74c59700ff9c', 'services-art-images', 'vkfsK3Okew', 'gh3Je8c9ld (1).png', 'png', 'image/png', 458202, 460, 750, NULL, '2021-06-10 22:24:12', '2021-06-10 22:24:12');
INSERT INTO `files` VALUES (1036, 'b1ba55fc-5296-4c95-8082-3c3c99fc77fd', 'open-graph', 'MF4gcAo4o6', 'FuryLion_Black.png', 'png', 'image/png', 42416, 512, 431, NULL, '2021-06-11 07:35:58', '2021-06-11 07:35:58');
INSERT INTO `files` VALUES (1037, 'a192ed7b-a57a-42b6-ae80-d3859dac9fd0', 'open-graph', 'GucrmAaEIS', 'FuryLion_Black.png', 'png', 'image/png', 42416, 512, 431, NULL, '2021-06-11 07:37:03', '2021-06-11 07:37:03');
INSERT INTO `files` VALUES (1038, 'd102bdf2-3e48-45a7-bb94-198e2ec48009', 'open-graph', '4d6LFrGoJL', 'FuryLion_Black.png', 'png', 'image/png', 42416, 512, 431, NULL, '2021-06-11 07:38:13', '2021-06-11 07:38:13');
INSERT INTO `files` VALUES (1039, 'a8bb5ba8-08a2-4d74-8bd1-f621bf21a6d3', 'open-graph', 'xagEFnxjXn', 'FuryLion_Black.png', 'png', 'image/png', 42416, 512, 431, NULL, '2021-06-11 07:40:19', '2021-06-11 07:40:19');
INSERT INTO `files` VALUES (1040, '633b7c47-14c5-443e-be73-9c6d3fce4b6d', 'open-graph', 'CUVpMehKvl', 'w22hhuArMo.png', 'png', 'image/png', 2034808, 602, 832, NULL, '2021-06-11 08:21:33', '2021-06-11 08:21:34');
INSERT INTO `files` VALUES (1041, '6002ee1b-5dc7-4c39-aabd-8dd81e132394', 'open-graph', 'GeInxkY5so', 'cXQPATejnN.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-11 08:58:11', '2021-06-11 08:58:15');
INSERT INTO `files` VALUES (1042, '7b77b1dd-7db1-4fe9-bdb5-777a853fe52f', 'open-graph', 'VF3DkhRAyJ', 'dddfbM5xCB.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-11 08:58:51', '2021-06-11 08:58:53');
INSERT INTO `files` VALUES (1043, '77a26495-2207-4596-b9f5-7d3089b0b2ab', 'open-graph', 'QiEUk648uD', 'QtrRAMw1rY.png', 'png', 'image/png', 2049262, 602, 838, NULL, '2021-06-11 08:59:54', '2021-06-11 08:59:57');
COMMIT;

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
BEGIN;
INSERT INTO `migrations` VALUES (1, '2016_06_01_000001_create_oauth_auth_codes_table', 1);
INSERT INTO `migrations` VALUES (2, '2016_06_01_000002_create_oauth_access_tokens_table', 1);
INSERT INTO `migrations` VALUES (3, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1);
INSERT INTO `migrations` VALUES (4, '2016_06_01_000004_create_oauth_clients_table', 1);
INSERT INTO `migrations` VALUES (5, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1);
INSERT INTO `migrations` VALUES (6, '2019_08_19_000000_create_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (7, '2020_01_01_000000_create_administrators_table', 1);
INSERT INTO `migrations` VALUES (8, '2020_05_18_185443_add_default_oauth_client', 1);
INSERT INTO `migrations` VALUES (9, '2020_05_22_083819_add_auth_logs', 1);
INSERT INTO `migrations` VALUES (10, '2020_05_24_113505_add_provider_to_oauth_access_tokens', 1);
INSERT INTO `migrations` VALUES (11, '2020_05_29_112826_files', 1);
INSERT INTO `migrations` VALUES (12, '2020_06_07_114214_tager_seo', 1);
INSERT INTO `migrations` VALUES (13, '2020_06_07_155515_tager_emails', 1);
INSERT INTO `migrations` VALUES (14, '2020_06_14_121512_tager_emails_attachments', 1);
INSERT INTO `migrations` VALUES (15, '2020_06_14_122516_allow_files_empty_scenario', 1);
INSERT INTO `migrations` VALUES (16, '2020_06_15_141806_files_change_types', 1);
INSERT INTO `migrations` VALUES (17, '2020_06_18_102112_tager_pages', 1);
INSERT INTO `migrations` VALUES (18, '2020_06_18_231230_tager_page_fields', 1);
INSERT INTO `migrations` VALUES (19, '2020_06_20_210411_tager_pages_nested', 1);
INSERT INTO `migrations` VALUES (20, '2020_07_03_155515_tager_settings', 1);
INSERT INTO `migrations` VALUES (21, '2020_07_14_120321_tager_admin_rename_tables', 1);
INSERT INTO `migrations` VALUES (22, '2020_07_15_000000_rename_failed_jobs_table', 1);
INSERT INTO `migrations` VALUES (23, '2020_07_15_155515_tager_menus', 1);
INSERT INTO `migrations` VALUES (24, '2020_07_17_132515_tager_settings_soft_deletes', 1);
INSERT INTO `migrations` VALUES (25, '2020_07_25_190011_tager_settings_priority', 1);
INSERT INTO `migrations` VALUES (26, '2020_07_25_201410_tager_settings_no_public', 1);
INSERT INTO `migrations` VALUES (27, '2020_08_01_101241_tager_cron', 1);
INSERT INTO `migrations` VALUES (28, '2020_08_04_155515_tager_emails_update', 1);
INSERT INTO `migrations` VALUES (29, '2020_08_06_114214_tager_seo_deleted', 1);
INSERT INTO `migrations` VALUES (30, '2020_08_08_120155_tager_emails_template_service_template', 1);
INSERT INTO `migrations` VALUES (31, '2020_08_10_103205_tager_pages_parent_fields', 1);
INSERT INTO `migrations` VALUES (32, '2020_08_12_123000_tager_pages_files', 1);
INSERT INTO `migrations` VALUES (33, '2020_08_18_102010_tager_module_settings', 1);
INSERT INTO `migrations` VALUES (34, '2020_08_30_112411_add_role_id_to_tager_administrators', 1);
INSERT INTO `migrations` VALUES (35, '2020_09_03_155515_tager_settings_sensetive_key', 1);
INSERT INTO `migrations` VALUES (36, '2020_10_22_000000_add_roles_table', 1);
INSERT INTO `migrations` VALUES (37, '2020_10_24_195423_create_add_super_administrator_role', 1);
INSERT INTO `migrations` VALUES (38, '2020_10_25_124247_drop_role_id_in_tager_administrators', 1);
INSERT INTO `migrations` VALUES (39, '2020_10_25_195423_add_superadmin_flag', 1);
INSERT INTO `migrations` VALUES (40, '2020_12_25_194336_change_tager_administrator_auth_logs', 1);
INSERT INTO `migrations` VALUES (41, '2021_02_25_215120_tager_emails_add_from', 1);
INSERT INTO `migrations` VALUES (42, '2021_02_28_141806_files_add_uuid', 1);
INSERT INTO `migrations` VALUES (43, '2021_03_03_114214_tager_seo_templates', 1);
INSERT INTO `migrations` VALUES (44, '2021_03_11_192248_create_vacancies_table', 2);
INSERT INTO `migrations` VALUES (45, '2021_04_01_153938_vacancies_tags', 3);
INSERT INTO `migrations` VALUES (46, '2021_04_05_094546_vacancies_fields_add', 4);
INSERT INTO `migrations` VALUES (47, '2021_04_17_110211_tager_pages_remove_og', 5);
INSERT INTO `migrations` VALUES (48, '2021_04_24_102511_tager_menus_remove', 5);
INSERT INTO `migrations` VALUES (49, '2021_05_03_114214_tager_seo_templates_keywords', 6);
INSERT INTO `migrations` VALUES (50, '2021_05_05_110211_tager_pages_add_keywords', 6);
COMMIT;

-- ----------------------------
-- Table structure for oauth_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'users',
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_access_tokens
-- ----------------------------
BEGIN;
INSERT INTO `oauth_access_tokens` VALUES ('0be685640235f27580e0312e65db2fb07e3b77c343ea460fc90d4835358eaffc5991366d18eb0ffb', 2, 1, NULL, '[\"*\"]', 0, '2021-03-10 14:44:55', '2021-03-10 14:44:55', '2022-03-10 14:44:55', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('236cff23cd143df99ac8ea500d20172ba7c60386295bfffb126c6ed02cb57179b8a4f66a7eff3888', 10, 1, NULL, '[\"*\"]', 0, '2021-05-18 19:59:57', '2021-05-18 19:59:57', '2022-05-18 19:59:57', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('2d78081948f757ff3dc9baea60fee85a60f5cf186a3c0d2e72321a02dbef5c47aa2662be73b244e3', 9, 1, NULL, '[\"*\"]', 0, '2021-03-22 11:48:48', '2021-03-22 11:48:48', '2022-03-22 11:48:48', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('35739296d38990fc6c0612afae20984a34444a4ca1568c4a5465bfa4c67046142408bbf303128267', 7, 1, NULL, '[\"*\"]', 0, '2021-04-08 14:44:17', '2021-04-08 14:44:17', '2022-04-08 14:44:17', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('37dbff4cf133906a48749e23c1709eb5866f5afee565ce0210486bba1ea464ad4dad0719c717cf75', 9, 1, NULL, '[\"*\"]', 0, '2021-06-05 23:41:10', '2021-06-05 23:41:10', '2022-06-05 23:41:10', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('49de02ac498465ec28b1032bc42cb0b09dceeec8be12ac8e80118349ed942c1c0744133d8964e354', 7, 1, NULL, '[\"*\"]', 1, '2021-03-22 10:20:50', '2021-03-22 10:20:50', '2022-03-22 10:20:50', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('4bb2c0ef930ce443b58930b6cd146f31788109b84b2f7cfb6469b3ae707b814fcd16bcf2b4303aa4', 9, 1, NULL, '[\"\"]', 1, '2021-03-22 11:44:33', '2021-03-22 11:44:33', '2022-03-22 11:44:33', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('523922bf0d2c656a9b4e570df4e16ead1223469b00cf70ccf14659ebbcc467bcbe6873eaf334ed95', 7, 1, NULL, '[\"*\"]', 1, '2021-03-22 14:43:24', '2021-03-22 14:43:24', '2022-03-22 14:43:24', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('602003ad5a7edf1682124e9268f616894276e3e0192ed66deab5c457148b952f04627a3372d6afa8', 7, 1, NULL, '[\"*\"]', 1, '2021-03-10 15:15:03', '2021-03-10 15:15:03', '2022-03-10 15:15:03', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('648f0f85605879e49ff4e2e0a03b0f5c4175da8e72c50692c5069806bd0cb4faecb9e25ddface08a', 2, 1, NULL, '[\"*\"]', 0, '2021-05-26 10:23:54', '2021-05-26 10:23:54', '2022-05-26 10:23:54', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('64a53c7679da9ea4ed881a3c8ff69dd8993ee1f1d6a9f2e69a46c6385ba7f3258aac3dcb8ecd7254', 8, 1, NULL, '[\"*\"]', 0, '2021-03-15 14:48:57', '2021-03-15 14:48:57', '2022-03-15 14:48:57', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('6afd7857fd01509f46e49eab95b0760fe8e25d730c1c67966837616a103bf93674d5f11906994c2f', 10, 1, NULL, '[\"*\"]', 0, '2021-05-17 12:58:23', '2021-05-17 12:58:23', '2022-05-17 12:58:23', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('6b1732c6b7ed7cce3690974ba7fd88c291ed45e7cddff84e81e9f19aeabd4b3d1874e9d8685a6cc1', 9, 1, NULL, '[\"*\"]', 0, '2021-05-03 12:51:08', '2021-05-03 12:51:08', '2022-05-03 12:51:08', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('733b95441b27f164833cff9a39a71f5840b5a1115deb8f745266833dd62bab47215b27005d7a4941', 7, 1, NULL, '[\"*\"]', 1, '2021-03-22 10:28:28', '2021-03-22 10:28:28', '2022-03-22 10:28:28', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('7bc2b28b788d92c2d521c3d2eafebee5142200a48f9ff48a3b831f1ade9c76deb55356b3c758e031', 1, 1, NULL, '[\"*\"]', 0, '2021-03-10 14:16:49', '2021-03-10 14:16:49', '2022-03-10 14:16:49', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('89cda6bbf4b217b38177b44698e4b8a048214098b66cc255472eee6b9412e863177b79c136178e9e', 9, 1, NULL, '[\"\"]', 1, '2021-03-22 11:46:19', '2021-03-22 11:46:19', '2022-03-22 11:46:19', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('9879f62050f96f63dc9358822889349d1f2a934850ebf50608b194577df8175da04960997a30007c', 8, 1, NULL, '[\"*\"]', 0, '2021-04-16 12:40:26', '2021-04-16 12:40:26', '2022-04-16 12:40:26', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('99514d7f29ea8064f57cec9560ad979e73e182b13e1646bb37a9fb61183684f89767605e99fd0670', 7, 1, NULL, '[\"*\"]', 1, '2021-04-16 09:23:24', '2021-04-16 09:23:24', '2022-04-16 09:23:24', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('9cde11abfb7c9aa83ce864b9d6625b51db552b48bfa014b1dbabb13c942d7138395ffcc08d339002', 7, 1, NULL, '[\"*\"]', 0, '2021-04-01 05:20:13', '2021-04-01 05:20:13', '2022-04-01 05:20:13', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('9e2f72798c9ecf1785408f8f4dce944802ecc071a1fb732fbff973f4be4950c22f280c3175c6e34d', 7, 1, NULL, '[\"*\"]', 0, '2021-04-16 11:03:04', '2021-04-16 11:03:04', '2022-04-16 11:03:04', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('a3827034e0a9f5a7007d5d6757115230fe8fab80eb9214ac3d06a9b189aba21403a5bf0bba0f4d32', 7, 1, NULL, '[\"*\"]', 0, '2021-03-13 21:07:02', '2021-03-13 21:07:02', '2022-03-13 21:07:02', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('ab8e1ea22ec1ce244d8792c27c74c6f6f8e8c4c194f0cd2307e2a65d2ea1213b3dbd8558000bea5c', 9, 1, NULL, '[\"*\"]', 0, '2021-06-11 14:27:06', '2021-06-11 14:27:06', '2022-06-11 14:27:06', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('b7739e49da504ecfd09e3ba80371c4cb554c5c821388dc881fef6b77fd5bc700134e79bd79e4fc74', 1, 1, NULL, '[\"*\"]', 0, '2021-03-10 14:03:42', '2021-03-10 14:03:42', '2022-03-10 14:03:42', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('bb11a20924bc1769ea2065f3335e201de706751f2c5200073380834fb36c0d41d56f00a2073b1045', 9, 1, NULL, '[\"*\"]', 0, '2021-04-17 06:14:22', '2021-04-17 06:14:22', '2022-04-17 06:14:22', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('c6af406ad19adba056b010d6b23f922044bb032423b00393a6282767092899f187ab4b4f4a00b2fe', 11, 1, NULL, '[\"\"]', 1, '2021-05-20 14:52:49', '2021-05-20 14:52:49', '2022-05-20 14:52:49', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('cce8063448805ca7221fd19e4504dde22a6131a376ae3bccfbaf8c62fe2bb50f960cf4e9dfbebff6', 1, 1, NULL, '[\"*\"]', 0, '2021-05-15 15:54:08', '2021-05-15 15:54:08', '2022-05-15 15:54:08', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('cdce3c7f5d740942217396932d3db80c9116d30aea486462c6fc8b1b4820cb835a063803c535c68f', 1, 1, NULL, '[\"*\"]', 0, '2021-03-10 14:03:48', '2021-03-10 14:03:48', '2022-03-10 14:03:48', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('cfdff4fe23484073943e679b0b076e2e376d4020a6adbbd1612f68d0cebaa02094510e075ca528ff', 5, 1, NULL, '[\"*\"]', 0, '2021-03-10 14:41:19', '2021-03-10 14:41:19', '2022-03-10 14:41:19', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('d177c77f65ae2053fb6a0ed3a98463066bb38def4b5e70f1c466eb808504b119662a28958e459b8b', 9, 1, NULL, '[\"*\"]', 0, '2021-03-31 14:01:25', '2021-03-31 14:01:25', '2022-03-31 14:01:25', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('e562e0c913dc46cb2abff75f45907b0581737a06ea3bb4ae385dcac1ab870e358f302c9e3f4c09d6', 7, 1, NULL, '[\"*\"]', 1, '2021-04-05 11:40:20', '2021-04-05 11:40:20', '2022-04-05 11:40:20', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('e8f7e312933803abe800c787285486f24214f61c51aa4b0f27a8c455be2094cd7cc038304f8b9dfd', 7, 1, NULL, '[\"*\"]', 1, '2021-03-22 09:38:04', '2021-03-22 09:38:04', '2022-03-22 09:38:04', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('ecaad2910b6e5da427000049bf773c103dad4271fcf9e9322fbfca024c070bfec524216b96464e9f', 8, 1, NULL, '[\"*\"]', 0, '2021-04-16 08:12:09', '2021-04-16 08:12:09', '2022-04-16 08:12:09', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('ed3be1f6b24960b12e634b86ca4d915701d72f03670ec8a1a58757c60eb51be03de293aebed8e6ae', 11, 1, NULL, '[\"*\"]', 1, '2021-05-20 14:55:17', '2021-05-20 14:55:17', '2022-05-20 14:55:17', 'administrators');
INSERT INTO `oauth_access_tokens` VALUES ('ff6b31e52be738be8e5abdf7dccfd8f18ae9fd27496c7213c004340d8f133c5f7b51fbcd88c2d626', 7, 1, NULL, '[\"*\"]', 0, '2021-04-17 22:27:42', '2021-04-17 22:27:42', '2022-04-17 22:27:42', 'administrators');
COMMIT;

-- ----------------------------
-- Table structure for oauth_auth_codes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_auth_codes
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for oauth_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `provider` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_clients
-- ----------------------------
BEGIN;
INSERT INTO `oauth_clients` VALUES (1, NULL, 'Admin Client', NULL, NULL, '/', 0, 1, 0, '2021-03-10 14:01:11', '2021-03-10 14:01:11');
COMMIT;

-- ----------------------------
-- Table structure for oauth_personal_access_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_personal_access_clients
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for oauth_refresh_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_refresh_tokens
-- ----------------------------
BEGIN;
INSERT INTO `oauth_refresh_tokens` VALUES ('07bfb33e0a9cbd7aefc184a811c8a85b354af45b77ee307549a6720419c838eb5717ca004b078b8a', 'b7739e49da504ecfd09e3ba80371c4cb554c5c821388dc881fef6b77fd5bc700134e79bd79e4fc74', 0, '2022-03-10 14:03:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('0f1a15128fa2df59bc436088535e32a4f793045825aca6ecadeb8879f84de43296aecabeed2fac12', 'ed3be1f6b24960b12e634b86ca4d915701d72f03670ec8a1a58757c60eb51be03de293aebed8e6ae', 0, '2022-05-20 14:55:17');
INSERT INTO `oauth_refresh_tokens` VALUES ('1fdc4fb3e6e721efcf36704ff07eedc191ca77297551fdc9acc02122f8e1b4e0a28c4438cd36a7a1', '602003ad5a7edf1682124e9268f616894276e3e0192ed66deab5c457148b952f04627a3372d6afa8', 0, '2022-03-10 15:15:03');
INSERT INTO `oauth_refresh_tokens` VALUES ('265c9fb4d0b1e37e054c83364b542d0739ee84e62aa85c445ce1116dea929841e48f70a7658aed3e', '49de02ac498465ec28b1032bc42cb0b09dceeec8be12ac8e80118349ed942c1c0744133d8964e354', 0, '2022-03-22 10:20:50');
INSERT INTO `oauth_refresh_tokens` VALUES ('2c24d48528822ddc25fd4810abcef518ab93805c317fb760dd7202ba5e1fa31e8566abd4d7d070ab', '6afd7857fd01509f46e49eab95b0760fe8e25d730c1c67966837616a103bf93674d5f11906994c2f', 0, '2022-05-17 12:58:23');
INSERT INTO `oauth_refresh_tokens` VALUES ('2f800a74721d11af10f35bb8c79667db08895e61c24ded1480f806b2597ba367d25ddd65f94c56e2', '236cff23cd143df99ac8ea500d20172ba7c60386295bfffb126c6ed02cb57179b8a4f66a7eff3888', 0, '2022-05-18 19:59:57');
INSERT INTO `oauth_refresh_tokens` VALUES ('3891d4b15608f43c0b65fab8fa84db3968df1ccfda2b1fb5d14597f4c9a974d441bf73fe0024d92e', 'e8f7e312933803abe800c787285486f24214f61c51aa4b0f27a8c455be2094cd7cc038304f8b9dfd', 0, '2022-03-22 09:38:04');
INSERT INTO `oauth_refresh_tokens` VALUES ('3bb87c9d4773e7f8d40944ce459fbc25c42354262d04638aac9a575b1ccbeda49a7497c011e0d7da', '733b95441b27f164833cff9a39a71f5840b5a1115deb8f745266833dd62bab47215b27005d7a4941', 0, '2022-03-22 10:28:28');
INSERT INTO `oauth_refresh_tokens` VALUES ('3cc9d7c00b740d3449d7b668ac980d7c455aa2144a07541bfaece6677672c689c06a9cfaab9c32c2', 'bb11a20924bc1769ea2065f3335e201de706751f2c5200073380834fb36c0d41d56f00a2073b1045', 0, '2022-04-17 06:14:22');
INSERT INTO `oauth_refresh_tokens` VALUES ('484ddf46c30940444e2527ce9ed3a6ab114b8ea9e35c32e530f3910dc6249b8d386462ae25710bab', 'd177c77f65ae2053fb6a0ed3a98463066bb38def4b5e70f1c466eb808504b119662a28958e459b8b', 0, '2022-03-31 14:01:25');
INSERT INTO `oauth_refresh_tokens` VALUES ('5022ff86a917564379faf201e629f82a32a542834c06af0058ce98607fe4d8e9929bbf822f19cdd1', '4bb2c0ef930ce443b58930b6cd146f31788109b84b2f7cfb6469b3ae707b814fcd16bcf2b4303aa4', 0, '2022-03-22 11:44:33');
INSERT INTO `oauth_refresh_tokens` VALUES ('52a7b553588f34f985a0e4cf2215856fd63da396cbc2a248574f45f5564ac102ff72e64bed1b0c3f', 'cce8063448805ca7221fd19e4504dde22a6131a376ae3bccfbaf8c62fe2bb50f960cf4e9dfbebff6', 0, '2022-05-15 15:54:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('5642dc97cb661c01bfa4fdf635ae63b0d605678d6b59b4d8b0c2244c2bc38995cd80a069c51c88cb', '89cda6bbf4b217b38177b44698e4b8a048214098b66cc255472eee6b9412e863177b79c136178e9e', 0, '2022-03-22 11:46:19');
INSERT INTO `oauth_refresh_tokens` VALUES ('57e615a93c0684366283d0d3f45b698800cd66540c0902714ce32e90e3f9102b1e822035e0c7619a', 'e562e0c913dc46cb2abff75f45907b0581737a06ea3bb4ae385dcac1ab870e358f302c9e3f4c09d6', 0, '2022-04-05 11:40:20');
INSERT INTO `oauth_refresh_tokens` VALUES ('771c2569a55870d80b0cc8cd452d0b8a09ec43da47502218cb5001509a254510ad7c685209d92162', '648f0f85605879e49ff4e2e0a03b0f5c4175da8e72c50692c5069806bd0cb4faecb9e25ddface08a', 0, '2022-05-26 10:23:54');
INSERT INTO `oauth_refresh_tokens` VALUES ('7f6012dac1c8b64f69ff6c3f1080944151c6e32586981066b31a8aa5ebaf4937bf51e0b0724c58ae', '0be685640235f27580e0312e65db2fb07e3b77c343ea460fc90d4835358eaffc5991366d18eb0ffb', 0, '2022-03-10 14:44:55');
INSERT INTO `oauth_refresh_tokens` VALUES ('84a29bad8c1c1c7ae893c2cba048ef4b04ff4526d5018b466db50f45da34d0cd21531658c3268bfa', 'cdce3c7f5d740942217396932d3db80c9116d30aea486462c6fc8b1b4820cb835a063803c535c68f', 0, '2022-03-10 14:03:48');
INSERT INTO `oauth_refresh_tokens` VALUES ('8a508aaeab193e21004e20d0247a6cc7e409f4f02027dd1f0df141148c97ae67d5ef4e051e2d5c89', '37dbff4cf133906a48749e23c1709eb5866f5afee565ce0210486bba1ea464ad4dad0719c717cf75', 0, '2022-06-05 23:41:10');
INSERT INTO `oauth_refresh_tokens` VALUES ('8d96d36b43a59d3b01331407e72b3190b8ee0212c536202159c81dc83391cb001d101afaa661cf71', 'c6af406ad19adba056b010d6b23f922044bb032423b00393a6282767092899f187ab4b4f4a00b2fe', 0, '2022-05-20 14:52:49');
INSERT INTO `oauth_refresh_tokens` VALUES ('8f300919d6dbf902e6556b5ef02109fda9669353a1db8218ea495e5e8bc470f4a37303bc28b95e5b', '9e2f72798c9ecf1785408f8f4dce944802ecc071a1fb732fbff973f4be4950c22f280c3175c6e34d', 0, '2022-04-16 11:03:04');
INSERT INTO `oauth_refresh_tokens` VALUES ('959d2c16756a4e71dfc1f86b42bee0cca712dfd8c63401cb330b00d27d0716c633c988008eaf31ca', '9879f62050f96f63dc9358822889349d1f2a934850ebf50608b194577df8175da04960997a30007c', 0, '2022-04-16 12:40:26');
INSERT INTO `oauth_refresh_tokens` VALUES ('99a3a83434cbcc2abe7aa4dc085c538534ebb8315367e4aa6fa5fd5ae8b62ab329d9ec9d68f5b678', 'cfdff4fe23484073943e679b0b076e2e376d4020a6adbbd1612f68d0cebaa02094510e075ca528ff', 0, '2022-03-10 14:41:19');
INSERT INTO `oauth_refresh_tokens` VALUES ('a12c59a065e9a99b2c070e1f58bf90f92b6d7866650afbe0f32d958e4dcff580d8ef32ce898aa246', 'ab8e1ea22ec1ce244d8792c27c74c6f6f8e8c4c194f0cd2307e2a65d2ea1213b3dbd8558000bea5c', 0, '2022-06-11 14:27:06');
INSERT INTO `oauth_refresh_tokens` VALUES ('bdb78b4e958c5519dcad49d571ec77487a3bf6b2dad4fa5f681b22d60e3bb9184bf997a599fddf51', 'a3827034e0a9f5a7007d5d6757115230fe8fab80eb9214ac3d06a9b189aba21403a5bf0bba0f4d32', 0, '2022-03-13 21:07:02');
INSERT INTO `oauth_refresh_tokens` VALUES ('c752cd435141b143484de428afc44a0a650d7cdb1478dbbdd54381c4a1f812e20c643152340807e8', '6b1732c6b7ed7cce3690974ba7fd88c291ed45e7cddff84e81e9f19aeabd4b3d1874e9d8685a6cc1', 0, '2022-05-03 12:51:08');
INSERT INTO `oauth_refresh_tokens` VALUES ('cd5a9135851520b330beb3627e1b9d2fd3a7aca764f40617b60e266d50ced5546f75dacfdbf3817c', '523922bf0d2c656a9b4e570df4e16ead1223469b00cf70ccf14659ebbcc467bcbe6873eaf334ed95', 0, '2022-03-22 14:43:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('ce83f7055e28f4e989f8d790a85ec9507001fb24d636bbe072e0d0db40eea261d5d09e42731a0c80', 'ecaad2910b6e5da427000049bf773c103dad4271fcf9e9322fbfca024c070bfec524216b96464e9f', 0, '2022-04-16 08:12:09');
INSERT INTO `oauth_refresh_tokens` VALUES ('d3b92c5484ce4764a61dddc2d2cdd8e755452cf44f54c74afa368356eed1569b70e56b8a765007e7', '35739296d38990fc6c0612afae20984a34444a4ca1568c4a5465bfa4c67046142408bbf303128267', 0, '2022-04-08 14:44:17');
INSERT INTO `oauth_refresh_tokens` VALUES ('e121793fe7d254f832cf2a4842ed55004f81885c30d18118687da9c2c6df8384605747c984aa6efa', '7bc2b28b788d92c2d521c3d2eafebee5142200a48f9ff48a3b831f1ade9c76deb55356b3c758e031', 0, '2022-03-10 14:16:49');
INSERT INTO `oauth_refresh_tokens` VALUES ('e3a2a01fc7e16c05c1b220c2c8eca845b74ddd048b74834d4083d091e396eec88cc2021ef99f08a2', '9cde11abfb7c9aa83ce864b9d6625b51db552b48bfa014b1dbabb13c942d7138395ffcc08d339002', 0, '2022-04-01 05:20:13');
INSERT INTO `oauth_refresh_tokens` VALUES ('e8a7aa20ebd922a6dc81ea0f36a1e51dbe449ddaabf3854148599d5e3d9b0ed1191fd315e4ef017a', '2d78081948f757ff3dc9baea60fee85a60f5cf186a3c0d2e72321a02dbef5c47aa2662be73b244e3', 0, '2022-03-22 11:48:48');
INSERT INTO `oauth_refresh_tokens` VALUES ('f552761a2e3d2f0b9ff34c4534a14616160078806b70ad3ee10c75e6957ea445a26dc78d5ac28960', 'ff6b31e52be738be8e5abdf7dccfd8f18ae9fd27496c7213c004340d8f133c5f7b51fbcd88c2d626', 0, '2022-04-17 22:27:42');
INSERT INTO `oauth_refresh_tokens` VALUES ('f8510ddaee728b7a74a5c50dc79083730625465207d1564eb1aa43aeb2f47926bd7b3c26e42f0b5f', '99514d7f29ea8064f57cec9560ad979e73e182b13e1646bb37a9fb61183684f89767605e99fd0670', 0, '2022-04-16 09:23:24');
INSERT INTO `oauth_refresh_tokens` VALUES ('ff40cac7446e6cdb543a52e92f9bf56f17ca1cfa665ff09ad37376b7ebab1649a15d9de54cf060c4', '64a53c7679da9ea4ed881a3c8ff69dd8993ee1f1d6a9f2e69a46c6385ba7f3258aac3dcb8ecd7254', 0, '2022-03-15 14:48:57');
COMMIT;

-- ----------------------------
-- Table structure for tager_administrator_auth_logs
-- ----------------------------
DROP TABLE IF EXISTS `tager_administrator_auth_logs`;
CREATE TABLE `tager_administrator_auth_logs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `administrator_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `email` text COLLATE utf8mb4_unicode_ci,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `grant_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `auth_success` tinyint(1) NOT NULL DEFAULT '0',
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `administrator_auth_logs_administrator_id_foreign` (`administrator_id`),
  KEY `tager_administrator_auth_logs_uuid_index` (`uuid`),
  CONSTRAINT `administrator_auth_logs_administrator_id_foreign` FOREIGN KEY (`administrator_id`) REFERENCES `tager_administrators` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_administrator_auth_logs
-- ----------------------------
BEGIN;
INSERT INTO `tager_administrator_auth_logs` VALUES (1, '172.27.0.8', 1, '2021-03-10 14:03:45', 'admin@ozitag.com', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36', 'password', 0, '92eb1d0b-3583-418c-bb2c-9fc6a6322134');
INSERT INTO `tager_administrator_auth_logs` VALUES (2, '172.27.0.8', 1, '2021-03-10 14:03:51', 'admin@ozitag.com', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36', 'password', 0, '92eb1d14-77f2-4328-a9f6-d59985a2e79e');
INSERT INTO `tager_administrator_auth_logs` VALUES (3, '172.27.0.8', NULL, '2021-03-10 14:16:46', 'v.ozierski@ozitag.com', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36', 'google', 1, '92eb21b5-91df-42f2-883c-50f7b076cf7d');
INSERT INTO `tager_administrator_auth_logs` VALUES (4, '172.27.0.8', 1, '2021-03-10 14:16:49', 'admin@ozitag.com', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.192 Safari/537.36', 'password', 0, '92eb21bb-7f93-4237-80c6-992c494a1485');
INSERT INTO `tager_administrator_auth_logs` VALUES (5, '172.27.0.8', 5, '2021-03-10 14:41:20', 'vanclavk@gmail.com', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', 'google', 1, '92eb2a7f-0980-4741-86ee-eea30f7a3025');
INSERT INTO `tager_administrator_auth_logs` VALUES (6, '172.27.0.8', 2, '2021-03-10 14:44:11', 'a.valkovich@furylion.net', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15', 'password', 0, '92eb2b82-bf12-4258-8f79-9a6aba51740e');
INSERT INTO `tager_administrator_auth_logs` VALUES (7, '172.27.0.8', 2, '2021-03-10 14:44:32', 'a.valkovich@furylion.net', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15', 'password', 0, '92eb2ba1-f2f9-40aa-a42c-622ab9951726');
INSERT INTO `tager_administrator_auth_logs` VALUES (8, '172.27.0.8', 2, '2021-03-10 14:44:56', 'a.valkovich@furylion.net', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15', 'google', 1, '92eb2bc9-01de-41e4-a896-10ce68a5bd8a');
INSERT INTO `tager_administrator_auth_logs` VALUES (9, '172.27.0.8', 7, '2021-03-10 15:15:05', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36', 'google', 1, '92eb3690-1909-43fc-9f77-a8ce233e23f4');
INSERT INTO `tager_administrator_auth_logs` VALUES (10, '172.27.0.4', 7, '2021-03-13 21:07:04', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', 'google', 1, '92f1bd63-e664-4141-a022-53b1829027ab');
INSERT INTO `tager_administrator_auth_logs` VALUES (11, '172.27.0.4', 8, '2021-03-15 14:48:57', 'n.mazurenko@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36', 'google', 1, '92f53c25-55eb-49b3-993a-ef29f818b062');
INSERT INTO `tager_administrator_auth_logs` VALUES (12, '172.27.0.4', 7, '2021-03-22 09:38:05', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 'google', 1, '9302e1da-dc75-4362-b094-6b11760d52ba');
INSERT INTO `tager_administrator_auth_logs` VALUES (13, '172.27.0.4', 7, '2021-03-22 10:20:51', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 'google', 1, '9302f126-4ade-41d3-8d4c-251eeddca704');
INSERT INTO `tager_administrator_auth_logs` VALUES (14, '172.27.0.4', 7, '2021-03-22 10:28:30', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 'google', 1, '9302f3e0-f936-44a5-9ffa-e8ba5ee5431f');
INSERT INTO `tager_administrator_auth_logs` VALUES (15, '172.27.0.4', NULL, '2021-03-22 11:35:24', 'zeuloc@gmail.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 'google', 1, '93030bd0-337a-4ebd-b3b6-deae7c1996e8');
INSERT INTO `tager_administrator_auth_logs` VALUES (16, '172.27.0.4', 9, '2021-03-22 11:44:34', 'zeuloc@gmail.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 'google', 1, '93030f16-4bf6-45e6-8b0b-7ac7bd73670b');
INSERT INTO `tager_administrator_auth_logs` VALUES (17, '172.27.0.4', 9, '2021-03-22 11:46:19', 'zeuloc@gmail.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 'google', 1, '93030fb8-3d55-4a1f-8c7b-036df4cbebd8');
INSERT INTO `tager_administrator_auth_logs` VALUES (18, '172.27.0.4', 9, '2021-03-22 11:48:49', 'zeuloc@gmail.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 'google', 1, '9303109c-cb08-479f-8785-8dc455d6ebb7');
INSERT INTO `tager_administrator_auth_logs` VALUES (19, '172.27.0.4', 7, '2021-03-22 14:43:24', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 'google', 1, '93034f0d-022c-4dec-bfeb-a48c90f2bb79');
INSERT INTO `tager_administrator_auth_logs` VALUES (20, '172.27.0.6', 9, '2021-03-31 14:01:25', 'zeuloc@gmail.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 'google', 1, '93155ae4-a80c-42ec-96db-0c619e1dce72');
INSERT INTO `tager_administrator_auth_logs` VALUES (21, '172.27.0.6', 7, '2021-04-01 05:20:14', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36', 'google', 1, '9316a37b-a0e4-4b50-8504-f40e8b04e86b');
INSERT INTO `tager_administrator_auth_logs` VALUES (22, '172.27.0.6', 7, '2021-04-05 11:40:20', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36', 'google', 1, '931f375b-b9fc-4f8e-bdaa-582499ab7b66');
INSERT INTO `tager_administrator_auth_logs` VALUES (23, '172.27.0.5', 7, '2021-04-08 14:44:19', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36', 'google', 1, '93258218-523a-465d-b022-00df42b8b525');
INSERT INTO `tager_administrator_auth_logs` VALUES (24, '172.27.0.3', 8, '2021-04-16 08:12:10', 'n.mazurenko@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36', 'google', 1, '93350dbc-0e6c-4d64-b480-adf2de8cad3e');
INSERT INTO `tager_administrator_auth_logs` VALUES (25, '172.27.0.3', 7, '2021-04-16 09:23:26', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 'google', 1, '93352736-2417-4702-ac64-05a0e48b43f0');
INSERT INTO `tager_administrator_auth_logs` VALUES (26, '172.27.0.3', 7, '2021-04-16 11:03:06', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 'google', 1, '93354adc-2a8d-4492-9c90-7a9f2b155216');
INSERT INTO `tager_administrator_auth_logs` VALUES (27, '172.27.0.3', 8, '2021-04-16 12:40:26', 'n.mazurenko@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36 Edg/89.0.774.77', 'google', 1, '93356dad-3ea2-4845-a525-e10e97970849');
INSERT INTO `tager_administrator_auth_logs` VALUES (28, '172.27.0.3', 9, '2021-04-17 06:14:23', 'zeuloc@gmail.com', 'Mozilla/5.0 (Linux; Android 10; Redmi Note 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.105 Mobile Safari/537.36', 'google', 1, '9336e697-249e-4775-a3ed-5cdfe2a35b40');
INSERT INTO `tager_administrator_auth_logs` VALUES (29, '172.27.0.3', 7, '2021-04-17 22:27:43', 'ilya.shablouski@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.128 Safari/537.36', 'google', 1, '933842ae-285a-4368-a113-649524759b72');
INSERT INTO `tager_administrator_auth_logs` VALUES (30, '172.27.0.2', NULL, '2021-04-30 11:44:49', 'v.galko@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0', 'google', 1, '93518390-174e-4126-be6a-c673b985fbfd');
INSERT INTO `tager_administrator_auth_logs` VALUES (31, '172.27.0.2', 9, '2021-05-03 12:51:11', 'zeuloc@gmail.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36', 'google', 1, '9357a43c-32f3-4241-ad1a-a5468780714e');
INSERT INTO `tager_administrator_auth_logs` VALUES (32, '172.27.0.3', NULL, '2021-05-14 08:41:15', 'pavel.serebryany@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', 'google', 1, '936d6baf-9d40-42f2-a0a9-db7b95e4a60b');
INSERT INTO `tager_administrator_auth_logs` VALUES (33, '172.27.0.3', NULL, '2021-05-14 08:41:21', 'pavel97107@gmail.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', 'google', 1, '936d6bb8-694d-4100-ad2b-d0db1736e390');
INSERT INTO `tager_administrator_auth_logs` VALUES (34, '172.27.0.3', 1, '2021-05-15 15:54:10', 'v.ozierski@ozitag.com', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36', 'google', 1, '9370097d-cd3a-40d7-a0bf-5fc0f6424aa7');
INSERT INTO `tager_administrator_auth_logs` VALUES (35, '172.27.0.3', NULL, '2021-05-17 12:58:14', 'pavel.serebryany@ozitag.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', 'google', 1, '9373d08b-9996-4769-8bfd-b07791c0e310');
INSERT INTO `tager_administrator_auth_logs` VALUES (36, '172.27.0.3', 10, '2021-05-17 12:58:23', 'pavel97107@gmail.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', 'google', 1, '9373d09a-86ee-49e3-8dbf-4ce4a7638bb6');
INSERT INTO `tager_administrator_auth_logs` VALUES (37, '172.27.0.1', 10, '2021-05-18 19:59:58', 'pavel97107@gmail.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', 'google', 1, '93766a5a-7da9-4f72-aa59-83fee3b9fb35');
INSERT INTO `tager_administrator_auth_logs` VALUES (38, '172.27.0.1', 11, '2021-05-20 14:52:50', 'g.sidyakov@furylion.dev', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36', 'google', 1, '937a027b-c306-4b6b-83d7-adf9640d0475');
INSERT INTO `tager_administrator_auth_logs` VALUES (39, '172.27.0.1', 11, '2021-05-20 14:55:20', 'g.sidyakov@furylion.dev', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36', 'google', 1, '937a035d-cf5b-499c-a0ef-c2f9aa4b5cec');
INSERT INTO `tager_administrator_auth_logs` VALUES (40, '172.27.0.1', 2, '2021-05-26 10:23:54', 'a.valkovich@furylion.net', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36', 'google', 1, '9385b436-79e0-4d13-92b3-ecbce60d1b7d');
INSERT INTO `tager_administrator_auth_logs` VALUES (41, '172.27.0.1', 9, '2021-06-05 23:41:10', 'zeuloc@gmail.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36', 'google', 1, '939aef2d-78b3-46c8-8c47-c6c192bedb80');
INSERT INTO `tager_administrator_auth_logs` VALUES (42, '172.27.0.1', 9, '2021-06-11 14:27:07', 'zeuloc@gmail.com', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36', 'google', 1, '93a63af0-577d-49d6-9044-84e8cb70974f');
COMMIT;

-- ----------------------------
-- Table structure for tager_administrator_roles
-- ----------------------------
DROP TABLE IF EXISTS `tager_administrator_roles`;
CREATE TABLE `tager_administrator_roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `administrator_id` bigint(20) unsigned NOT NULL,
  `role_id` bigint(20) unsigned NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tager_administrator_roles_administrator_id_foreign` (`administrator_id`),
  KEY `tager_administrator_roles_role_id_foreign` (`role_id`),
  CONSTRAINT `tager_administrator_roles_administrator_id_foreign` FOREIGN KEY (`administrator_id`) REFERENCES `tager_administrators` (`id`),
  CONSTRAINT `tager_administrator_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `tager_roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_administrator_roles
-- ----------------------------
BEGIN;
INSERT INTO `tager_administrator_roles` VALUES (1, 1, 1, NULL, NULL, NULL);
INSERT INTO `tager_administrator_roles` VALUES (2, 2, 1, NULL, NULL, NULL);
INSERT INTO `tager_administrator_roles` VALUES (3, 3, 1, NULL, NULL, NULL);
INSERT INTO `tager_administrator_roles` VALUES (4, 4, 1, NULL, NULL, NULL);
INSERT INTO `tager_administrator_roles` VALUES (5, 5, 1, NULL, NULL, NULL);
INSERT INTO `tager_administrator_roles` VALUES (6, 6, 1, NULL, NULL, NULL);
INSERT INTO `tager_administrator_roles` VALUES (7, 7, 1, NULL, NULL, NULL);
INSERT INTO `tager_administrator_roles` VALUES (8, 8, 1, NULL, NULL, NULL);
INSERT INTO `tager_administrator_roles` VALUES (9, 9, 1, NULL, NULL, NULL);
INSERT INTO `tager_administrator_roles` VALUES (10, 10, 1, NULL, NULL, NULL);
INSERT INTO `tager_administrator_roles` VALUES (12, 12, 1, NULL, NULL, NULL);
INSERT INTO `tager_administrator_roles` VALUES (13, 11, 3, NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for tager_administrators
-- ----------------------------
DROP TABLE IF EXISTS `tager_administrators`;
CREATE TABLE `tager_administrators` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `administrators_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_administrators
-- ----------------------------
BEGIN;
INSERT INTO `tager_administrators` VALUES (1, 'Vital Ozierski', 'v.ozierski@ozitag.com', '$2y$10$ClmZwWiQtuXgQKzPJqCmUuZbFVMTeaeoK4W.YEoXgAzf6ZdfSSq1e', NULL, '2021-03-10 14:01:11', '2021-03-10 14:37:02');
INSERT INTO `tager_administrators` VALUES (2, 'Alexander Valkovich', 'a.valkovich@furylion.net', '$2y$10$hUfxT9ObaaXqYsX7C9GLEOwjmIc1UV0R.2D0Jf7BCKNoh4u5uoN8q', NULL, '2021-03-10 14:31:31', '2021-06-11 08:40:28');
INSERT INTO `tager_administrators` VALUES (3, 'V Vlasov', 'v.vlasov@furylion.net', '$2y$10$6fNHi.R4ixyw6vAaOffRxuLI6Qi/0/L5/5QxMcXKqtBlcnRzWb0bq', NULL, '2021-03-10 14:31:49', '2021-03-10 14:31:49');
INSERT INTO `tager_administrators` VALUES (4, 'M Marchenko', 'm.marchenko@furylion.net', '$2y$10$z/9lwtAs3GbyweDDmw/j.u./JQRHp9kcmiZt/yFdE6GqvKzkAjani', NULL, '2021-03-10 14:36:09', '2021-03-10 14:36:09');
INSERT INTO `tager_administrators` VALUES (5, 'Karina', 'k.vantslav@69pixels.com', '$2y$10$DJ0jIXfhOLcW7.XyEl9HKelHksecouX78MOXBe0vbZ22UqMBW4HJm', NULL, '2021-03-10 14:36:18', '2021-05-04 09:49:17');
INSERT INTO `tager_administrators` VALUES (6, 'a.bavdey', 'a.bavdey@gmail.com', '$2y$10$QWhWj3bkcHhgsG5TEcdOl.8l3eOkAiazH.tbkFp/CbgRmtz8ZPFn.', NULL, '2021-03-10 14:36:30', '2021-03-10 14:36:30');
INSERT INTO `tager_administrators` VALUES (7, 'Ilya', 'ilya.shablouski@ozitag.com', '$2y$10$hxdMLr36sASFZSJt4nQ/iuEdS/G7.embJzbcOfrDRC.LKs.ENPo0.', NULL, '2021-03-10 14:36:51', '2021-03-10 14:36:51');
INSERT INTO `tager_administrators` VALUES (8, 'Nina', 'n.mazurenko@ozitag.com', '$2y$10$e/Xy45.ub6Z4LgEkPenb6.rH6ZOfH.o5VLVBWTTsPr1nGpSKCdNAe', NULL, '2021-03-10 14:37:16', '2021-03-10 14:37:16');
INSERT INTO `tager_administrators` VALUES (9, 'Alexander', 'zeuloc@gmail.com', '$2y$10$/twRGAVwdB7Ecyn363e0B.5kWf/ZGDQ6DRu1TYK8FcSJGXBvgS1fy', NULL, NULL, '2021-05-16 11:36:06');
INSERT INTO `tager_administrators` VALUES (10, 'Pavel', 'pavel97107@gmail.com', '$2y$10$CWxkHzt4xbPz16CVtgBcpOyH7XwcB37/E53XiGKLr4iDec8QT2MVG', NULL, '2021-05-15 15:54:43', '2021-05-15 15:54:43');
INSERT INTO `tager_administrators` VALUES (11, 'Grigory Sidyakov', 'g.sidyakov@furylion.dev', '$2y$10$YA31NxYjM0YkTBsMGaZmpetUdOnGEvrakGw2aseZMEgdO2JWJqmvO', NULL, '2021-05-20 14:49:48', '2021-05-20 14:54:52');
INSERT INTO `tager_administrators` VALUES (12, 'Vlad Revchenko', 'v.revchenko@furylion.net', '$2y$10$Y4wqEptRVICMCblizZtwsOjIAAsbs.Uwx4iWgUO1OV.0jpbzmU.hq', NULL, '2021-06-11 07:23:02', '2021-06-11 07:23:02');
COMMIT;

-- ----------------------------
-- Table structure for tager_cron_jobs
-- ----------------------------
DROP TABLE IF EXISTS `tager_cron_jobs`;
CREATE TABLE `tager_cron_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `command` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `begin_at` datetime NOT NULL,
  `end_at` datetime DEFAULT NULL,
  `output` longtext COLLATE utf8mb4_unicode_ci,
  `error` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_cron_jobs
-- ----------------------------
BEGIN;
INSERT INTO `tager_cron_jobs` VALUES (1, 'php artisan cron:get-instagram-previews', 'App\\Console\\Commands\\GetInstagramPreviews', 'COMPLETED', '2021-04-15 15:59:44', '2021-04-15 15:59:46', '2021-04-15 15:59:44 - Started updating Instagram previews\n2021-04-15 15:59:44 - Downloading instagram data\n2021-04-15 15:59:45 - Instagram data downloaded\n2021-04-15 15:59:46 - Instagram data successfully updated!\n', NULL);
INSERT INTO `tager_cron_jobs` VALUES (2, 'php artisan cron:get-instagram-previews', 'App\\Console\\Commands\\GetInstagramPreviews', 'COMPLETED', '2021-04-16 09:11:22', '2021-04-16 09:11:25', '2021-04-16 09:11:22 - Started updating Instagram previews\n2021-04-16 09:11:22 - Downloading instagram data\n2021-04-16 09:11:23 - Instagram data downloaded\n2021-04-16 09:11:25 - Instagram data successfully updated!\n', NULL);
INSERT INTO `tager_cron_jobs` VALUES (3, 'php artisan cron:get-instagram-previews', 'App\\Console\\Commands\\GetInstagramPreviews', 'COMPLETED', '2021-05-22 16:21:47', '2021-05-22 16:21:48', '2021-05-22 16:21:47 - Started updating Instagram previews\n2021-05-22 16:21:47 - Downloading instagram data\n2021-05-22 16:21:48 - Instagram data downloaded\n2021-05-22 16:21:48 - Instagram data successfully updated!\n', NULL);
COMMIT;

-- ----------------------------
-- Table structure for tager_failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `tager_failed_jobs`;
CREATE TABLE `tager_failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_failed_jobs
-- ----------------------------
BEGIN;
INSERT INTO `tager_failed_jobs` VALUES (1, 'redis', 'default', '{\"uuid\":\"e8bc842d-f7dd-4ff6-9032-a2ca890cbf17\",\"displayName\":\"Ozerich\\\\FileStorage\\\\Jobs\\\\PrepareThumbnailsJob\",\"job\":\"Illuminate\\\\Queue\\\\CallQueuedHandler@call\",\"maxTries\":null,\"maxExceptions\":null,\"failOnTimeout\":false,\"backoff\":null,\"timeout\":null,\"retryUntil\":null,\"data\":{\"commandName\":\"Ozerich\\\\FileStorage\\\\Jobs\\\\PrepareThumbnailsJob\",\"command\":\"O:45:\\\"Ozerich\\\\FileStorage\\\\Jobs\\\\PrepareThumbnailsJob\\\":11:{s:51:\\\"\\u0000Ozerich\\\\FileStorage\\\\Jobs\\\\PrepareThumbnailsJob\\u0000file\\\";O:45:\\\"Illuminate\\\\Contracts\\\\Database\\\\ModelIdentifier\\\":4:{s:5:\\\"class\\\";s:31:\\\"Ozerich\\\\FileStorage\\\\Models\\\\File\\\";s:2:\\\"id\\\";i:903;s:9:\\\"relations\\\";a:0:{}s:10:\\\"connection\\\";s:5:\\\"mysql\\\";}s:3:\\\"job\\\";N;s:10:\\\"connection\\\";N;s:5:\\\"queue\\\";N;s:15:\\\"chainConnection\\\";N;s:10:\\\"chainQueue\\\";N;s:19:\\\"chainCatchCallbacks\\\";N;s:5:\\\"delay\\\";N;s:11:\\\"afterCommit\\\";N;s:10:\\\"middleware\\\";a:0:{}s:7:\\\"chained\\\";a:0:{}}\"},\"id\":\"JlFBucTjiP6v5fPu87aucxp057TmBnVp\",\"attempts\":0}', 'ErrorException: getimagesize(): Error reading from /var/www/app/storage/X97ktOgPSl! in /var/www/app/vendor/ozerich/laravel-filestorage-db/src/Services/ResizeImage.php:18\nStack trace:\n#0 [internal function]: Illuminate\\Foundation\\Bootstrap\\HandleExceptions->handleError(8, \'getimagesize():...\', \'/var/www/app/ve...\', 18)\n#1 /var/www/app/vendor/ozerich/laravel-filestorage-db/src/Services/ResizeImage.php(18): getimagesize(\'/var/www/app/st...\')\n#2 /var/www/app/vendor/ozerich/laravel-filestorage-db/src/Services/ImageService.php(89): Ozerich\\FileStorage\\Services\\ResizeImage->__construct(\'/var/www/app/st...\')\n#3 /var/www/app/vendor/ozerich/laravel-filestorage-db/src/Services/ImageService.php(43): Ozerich\\FileStorage\\Services\\ImageService::prepareThumbnailBySize(\'/var/www/app/st...\', Object(Ozerich\\FileStorage\\Structures\\Thumbnail), \'/var/www/app/st...\', 88)\n#4 /var/www/app/vendor/ozerich/laravel-filestorage-db/src/Storage.php(337): Ozerich\\FileStorage\\Services\\ImageService::prepareThumbnails(Object(Ozerich\\FileStorage\\Models\\File), Object(Ozerich\\FileStorage\\Structures\\Scenario), Object(Ozerich\\FileStorage\\Structures\\Thumbnail))\n#5 /var/www/app/vendor/ozerich/laravel-filestorage-db/src/Jobs/PrepareThumbnailsJob.php(27): Ozerich\\FileStorage\\Storage::staticPrepareThumbnails(Object(Ozerich\\FileStorage\\Models\\File))\n#6 /var/www/app/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(36): Ozerich\\FileStorage\\Jobs\\PrepareThumbnailsJob->handle()\n#7 /var/www/app/vendor/laravel/framework/src/Illuminate/Container/Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#8 /var/www/app/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#9 /var/www/app/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#10 /var/www/app/vendor/laravel/framework/src/Illuminate/Container/Container.php(614): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#11 /var/www/app/vendor/laravel/framework/src/Illuminate/Bus/Dispatcher.php(128): Illuminate\\Container\\Container->call(Array)\n#12 /var/www/app/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(128): Illuminate\\Bus\\Dispatcher->Illuminate\\Bus\\{closure}(Object(Ozerich\\FileStorage\\Jobs\\PrepareThumbnailsJob))\n#13 /var/www/app/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Ozerich\\FileStorage\\Jobs\\PrepareThumbnailsJob))\n#14 /var/www/app/vendor/laravel/framework/src/Illuminate/Bus/Dispatcher.php(132): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#15 /var/www/app/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(120): Illuminate\\Bus\\Dispatcher->dispatchNow(Object(Ozerich\\FileStorage\\Jobs\\PrepareThumbnailsJob), false)\n#16 /var/www/app/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(128): Illuminate\\Queue\\CallQueuedHandler->Illuminate\\Queue\\{closure}(Object(Ozerich\\FileStorage\\Jobs\\PrepareThumbnailsJob))\n#17 /var/www/app/vendor/laravel/framework/src/Illuminate/Pipeline/Pipeline.php(103): Illuminate\\Pipeline\\Pipeline->Illuminate\\Pipeline\\{closure}(Object(Ozerich\\FileStorage\\Jobs\\PrepareThumbnailsJob))\n#18 /var/www/app/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(122): Illuminate\\Pipeline\\Pipeline->then(Object(Closure))\n#19 /var/www/app/vendor/laravel/framework/src/Illuminate/Queue/CallQueuedHandler.php(70): Illuminate\\Queue\\CallQueuedHandler->dispatchThroughMiddleware(Object(Illuminate\\Queue\\Jobs\\RedisJob), Object(Ozerich\\FileStorage\\Jobs\\PrepareThumbnailsJob))\n#20 /var/www/app/vendor/laravel/framework/src/Illuminate/Queue/Jobs/Job.php(98): Illuminate\\Queue\\CallQueuedHandler->call(Object(Illuminate\\Queue\\Jobs\\RedisJob), Array)\n#21 /var/www/app/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(414): Illuminate\\Queue\\Jobs\\Job->fire()\n#22 /var/www/app/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(364): Illuminate\\Queue\\Worker->process(\'redis\', Object(Illuminate\\Queue\\Jobs\\RedisJob), Object(Illuminate\\Queue\\WorkerOptions))\n#23 /var/www/app/vendor/laravel/framework/src/Illuminate/Queue/Worker.php(158): Illuminate\\Queue\\Worker->runJob(Object(Illuminate\\Queue\\Jobs\\RedisJob), \'redis\', Object(Illuminate\\Queue\\WorkerOptions))\n#24 /var/www/app/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(117): Illuminate\\Queue\\Worker->daemon(\'redis\', \'default\', Object(Illuminate\\Queue\\WorkerOptions))\n#25 /var/www/app/vendor/laravel/framework/src/Illuminate/Queue/Console/WorkCommand.php(101): Illuminate\\Queue\\Console\\WorkCommand->runWorker(\'redis\', \'default\')\n#26 /var/www/app/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(36): Illuminate\\Queue\\Console\\WorkCommand->handle()\n#27 /var/www/app/vendor/laravel/framework/src/Illuminate/Container/Util.php(40): Illuminate\\Container\\BoundMethod::Illuminate\\Container\\{closure}()\n#28 /var/www/app/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(93): Illuminate\\Container\\Util::unwrapIfClosure(Object(Closure))\n#29 /var/www/app/vendor/laravel/framework/src/Illuminate/Container/BoundMethod.php(37): Illuminate\\Container\\BoundMethod::callBoundMethod(Object(Illuminate\\Foundation\\Application), Array, Object(Closure))\n#30 /var/www/app/vendor/laravel/framework/src/Illuminate/Container/Container.php(614): Illuminate\\Container\\BoundMethod::call(Object(Illuminate\\Foundation\\Application), Array, Array, NULL)\n#31 /var/www/app/vendor/laravel/framework/src/Illuminate/Console/Command.php(136): Illuminate\\Container\\Container->call(Array)\n#32 /var/www/app/vendor/symfony/console/Command/Command.php(288): Illuminate\\Console\\Command->execute(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#33 /var/www/app/vendor/laravel/framework/src/Illuminate/Console/Command.php(121): Symfony\\Component\\Console\\Command\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Illuminate\\Console\\OutputStyle))\n#34 /var/www/app/vendor/symfony/console/Application.php(974): Illuminate\\Console\\Command->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#35 /var/www/app/vendor/symfony/console/Application.php(291): Symfony\\Component\\Console\\Application->doRunCommand(Object(Illuminate\\Queue\\Console\\WorkCommand), Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#36 /var/www/app/vendor/symfony/console/Application.php(167): Symfony\\Component\\Console\\Application->doRun(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#37 /var/www/app/vendor/laravel/framework/src/Illuminate/Console/Application.php(92): Symfony\\Component\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#38 /var/www/app/vendor/laravel/framework/src/Illuminate/Foundation/Console/Kernel.php(129): Illuminate\\Console\\Application->run(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#39 /var/www/app/artisan(37): Illuminate\\Foundation\\Console\\Kernel->handle(Object(Symfony\\Component\\Console\\Input\\ArgvInput), Object(Symfony\\Component\\Console\\Output\\ConsoleOutput))\n#40 {main}', '2021-06-08 09:26:48');
COMMIT;

-- ----------------------------
-- Table structure for tager_mail_logs
-- ----------------------------
DROP TABLE IF EXISTS `tager_mail_logs`;
CREATE TABLE `tager_mail_logs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `template_id` bigint(20) unsigned DEFAULT NULL,
  `recipient` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `error` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `attachments` text COLLATE utf8mb4_unicode_ci,
  `template` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service_template` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service_template_params` text COLLATE utf8mb4_unicode_ci,
  `from_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tager_mail_logs_template_id_foreign` (`template_id`),
  CONSTRAINT `tager_mail_logs_template_id_foreign` FOREIGN KEY (`template_id`) REFERENCES `tager_mail_templates` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_mail_logs
-- ----------------------------
BEGIN;
INSERT INTO `tager_mail_logs` VALUES (1, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> Alex</p><p><b>Company:</b> ozitag</p><p><b>E-Mail</b> v.ozierski@ozitag.com</p><p><b>Message</b> Hello!</p>', 'SUCCESS', NULL, '2021-03-29 12:58:39', '2021-03-29 12:58:41', '[]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (2, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> Ilya</p><p><b>Company:</b> test</p><p><b>E-Mail</b> test@test.com</p><p><b>Message</b> test</p>', 'SUCCESS', NULL, '2021-03-29 14:49:12', '2021-03-29 14:49:14', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/4o\\/d8\\/4Od8en99FY.txt\",\"as\":\"New Text Document.txt\",\"mime\":\"text\\/plain\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/4o\\/d8\\/4Od8en99FY.txt\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (3, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> dgdgdg</p><p><b>Company:</b> dgdggd</p><p><b>E-Mail</b> dggddg@fdfd.com</p><p><b>Message</b> sffsf</p>', 'SUCCESS', NULL, '2021-03-30 00:18:55', '2021-03-30 00:18:57', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/9h\\/mx\\/9hmxnKt4eq.txt\",\"as\":\"test.txt\",\"mime\":\"text\\/plain\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/9h\\/mx\\/9hmxnKt4eq.txt\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (4, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> sdfsdfsdf</p><p><b>Company:</b> sdfsdfsfd</p><p><b>E-Mail</b> sdfsdf@efwefe.com</p><p><b>Message</b> asdasdadsa\nad\nad\na\n\nad\na\nad\na\na\nsd\nas\nad\nad\nada\n\nad\nad\nad\nasd</p>', 'SUCCESS', NULL, '2021-03-30 00:41:27', '2021-03-30 00:41:28', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\",\"as\":\"furylion.net \\u2013 [...slug].tsx Administrator 2021-03.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (5, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> ascascasc</p><p><b>Company:</b> ascasc</p><p><b>E-Mail</b> asc@sesf.com</p><p><b>Message</b> sascasc</p>', 'SUCCESS', NULL, '2021-03-30 00:48:57', '2021-03-30 00:48:58', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\",\"as\":\"furylion.net \\u2013 [...slug].tsx Administrator 2021-03.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (6, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> fwfwf</p><p><b>Company:</b> wfwef</p><p><b>E-Mail</b> test@test.com</p><p><b>Message</b> test@test.com</p>', 'SUCCESS', NULL, '2021-03-30 00:52:29', '2021-03-30 00:52:32', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\",\"as\":\"furylion.net \\u2013 [...slug].tsx Administrator 2021-03.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (7, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> test@test.com</p><p><b>Company:</b> test@test.com</p><p><b>E-Mail</b> test@test.com</p><p><b>Message</b> test@test.com</p>', 'SUCCESS', NULL, '2021-03-30 00:53:00', '2021-03-30 00:53:02', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\",\"as\":\"furylion.net \\u2013 [...slug].tsx Administrator 2021-03.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (8, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> test@test.com</p><p><b>Company:</b> test@test.com</p><p><b>E-Mail</b> test@test.com</p><p><b>Message</b> test@test.com</p>', 'SUCCESS', NULL, '2021-03-30 00:54:40', '2021-03-30 00:54:41', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\",\"as\":\"furylion.net \\u2013 [...slug].tsx Administrator 2021-03.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (9, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> test@test.com</p><p><b>Company:</b> test@test.com</p><p><b>E-Mail</b> test@test.com</p><p><b>Message</b> test@test.com</p>', 'SUCCESS', NULL, '2021-03-30 00:55:52', '2021-03-30 00:55:53', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\",\"as\":\"furylion.net \\u2013 [...slug].tsx Administrator 2021-03.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (10, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> test@test.com</p><p><b>Company:</b> test@test.com</p><p><b>E-Mail</b> test@test.com</p><p><b>Message</b> test@test.comtest@test.comtest@test.comtest@test.comtest@test.comtest@test.comtest@test.comtest@test.comtest@test.comtest@test.comtest@test.com</p>', 'SUCCESS', NULL, '2021-03-30 00:56:08', '2021-03-30 00:56:08', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\",\"as\":\"furylion.net \\u2013 [...slug].tsx Administrator 2021-03.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/7x\\/nf\\/7XnfuAg9rm.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (11, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> test@test.com</p><p><b>Company:</b> test@test.com</p><p><b>E-Mail</b> test@test.com</p><p><b>Message</b> test@test.com</p>', 'SUCCESS', NULL, '2021-03-30 01:19:52', '2021-03-30 01:19:54', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/qz\\/tc\\/QZTCZxZTTG.png\",\"as\":\"furylion.net \\u2013 [...slug].tsx Administrator 2021-03.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/qz\\/tc\\/QZTCZxZTTG.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (12, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> isSentSuccess</p><p><b>Company:</b> isSentSuccess</p><p><b>E-Mail</b> isSentSuccess@yt.com</p><p><b>Message</b> isSentSuccess</p>', 'SUCCESS', NULL, '2021-03-30 01:29:30', '2021-03-30 01:29:30', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/of\\/ux\\/oFUXTWkNh0.png\",\"as\":\"furylion.net \\u2013 [...slug].tsx Administrator 2021-03.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/of\\/ux\\/oFUXTWkNh0.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (13, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> test@test.com</p><p><b>Company:</b> test@test.com</p><p><b>E-Mail</b> test@test.com</p><p><b>Message</b> test@test.com</p>', 'SUCCESS', NULL, '2021-03-30 01:45:23', '2021-03-30 01:45:25', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/ug\\/71\\/ug718LE6qw.png\",\"as\":\"furylion.net \\u2013 [...slug].tsx Administrator 2021-03.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/ug\\/71\\/ug718LE6qw.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (14, 2, 'v.ozierski@ozitag.com', 'New feedback', '<p><b>Name:</b> Test</p><p><b>Company:</b> Test</p><p><b>E-Mail</b> Test@test.com</p><p><b>Message</b> Test</p>', 'SUCCESS', NULL, '2021-03-30 09:58:43', '2021-03-30 09:58:45', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/ru\\/tx\\/RUtxUfnfg2.png\",\"as\":\"0_7Ro6rq6z52PZ1pmL.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/ru\\/tx\\/RUtxUfnfg2.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (15, 2, 'n.mazurenko@ozitag.com', 'New feedback', '<p><strong>Name:</strong> Test</p><p><strong>Company:</strong> Test</p><p><strong>E-Mail</strong> Test@Test.com</p><p><strong>Message</strong> Test</p>', 'SUCCESS', NULL, '2021-03-30 11:25:20', '2021-03-30 11:25:21', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/pk\\/4j\\/PK4juc9d2R.jpeg\",\"as\":\"1_izAQxr6CAuV578ENirDpMA.jpeg\",\"mime\":\"image\\/jpeg\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/pk\\/4j\\/PK4juc9d2R.jpeg\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (16, 2, 'n.mazurenko@ozitag.com', 'New feedback', '<p><strong>Name:</strong> End dk</p><p><strong>Company:</strong> Did rn</p><p><strong>E-Mail</strong> test@test.com</p><p><strong>Message</strong> And fl</p>', 'SUCCESS', NULL, '2021-03-31 07:28:20', '2021-03-31 07:28:21', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/aq\\/ea\\/AQeAjZh98j.png\",\"as\":\"C064E20A-DF6F-43FD-9E3B-5840FF32E498.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/aq\\/ea\\/AQeAjZh98j.png\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (17, 2, 'n.mazurenko@ozitag.com', 'New feedback', '<p><strong>Name:</strong> dvdv</p><p><strong>Company:</strong> dvdv</p><p><strong>E-Mail</strong> dvdv@oekf.com</p><p><strong>Message</strong> efef</p>', 'SUCCESS', NULL, '2021-04-09 06:58:59', '2021-04-09 06:59:00', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/b4\\/ck\\/b4ckbnYa2x.gitignore\",\"as\":\".gitignore\",\"mime\":\"text\\/plain\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/b4\\/ck\\/b4ckbnYa2x.gitignore\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (18, 2, 'n.mazurenko@ozitag.com', 'New feedback', '<p><strong>Name:</strong> scsc</p><p><strong>Company:</strong> scsc</p><p><strong>E-Mail</strong> scsc@ed.com</p><p><strong>Message</strong> wdwddw</p>', 'SUCCESS', NULL, '2021-04-09 12:45:11', '2021-04-09 12:45:14', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/xu\\/xv\\/xUxVVH56s5.jpg\",\"as\":\"Desktop_1366 - 78.jpg\",\"mime\":\"image\\/jpeg\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/xu\\/xv\\/xUxVVH56s5.jpg\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (19, 2, 'n.mazurenko@ozitag.com', 'New feedback', '<p><strong>Name:</strong> asdasddas</p><p><strong>Company:</strong> adsdasasd</p><p><strong>E-Mail</strong> asdadsds@gmail.com</p><p><strong>Message</strong> ewdwddw</p>', 'SUCCESS', NULL, '2021-04-09 12:53:02', '2021-04-09 12:53:05', '[{\"path\":\"\\/var\\/www\\/app\\/vendor\\/ozerich\\/laravel-filestorage-db\\/src\\/Utils\\/..\\/..\\/..\\/..\\/..\\/storage\\/app\\/public\\/uploads\\/feedback\\/id\\/52\\/id52ol1rdX.jpg\",\"as\":\"vacancies_Desktop_1366 - 81.jpg\",\"mime\":\"image\\/jpeg\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/id\\/52\\/id52ol1rdX.jpg\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (20, 2, 'n.mazurenko@ozitag.com', 'New feedback', '<p><strong>Name:</strong> terminator</p><p><strong>Company:</strong> terminator</p><p><strong>E-Mail</strong> terminator@gmail.com</p><p><strong>Message</strong> aterminator</p>', 'SUCCESS', NULL, '2021-06-04 17:02:09', '2021-06-04 17:02:11', '[]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (21, 2, 'n.mazurenko@ozitag.com', 'New feedback', '<p><strong>Name:</strong> adasdasdasd</p><p><strong>Company:</strong> asdasdasdasdasdas</p><p><strong>E-Mail</strong> dasdasd@gmai.com</p><p><strong>Message</strong> adsasdasdasdasdasdasd</p>', 'SUCCESS', NULL, '2021-06-04 17:02:33', '2021-06-04 17:02:36', '[]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (22, 3, 'v.ozierski@ozitag.com', 'New Cv', '<p><b>Name:</b> asdasdas</p><p><b>Phone:</b> +34343532423</p><p><b>E-Mail</b> adasdsa@gmail.com</p><p><b>Message</b> adasdasdasdasd</p>', 'SUCCESS', NULL, '2021-06-04 17:03:09', '2021-06-04 17:03:12', '[{\"path\":\"\\/var\\/www\\/app\\/storage\\/app\\/public\\/uploads\\/feedback\\/jg\\/5i\\/JG5iYmuVMN.jpg\",\"as\":\"Rectangle 704.jpg\",\"mime\":\"image\\/jpeg\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/jg\\/5i\\/JG5iYmuVMN.jpg\"}]', 'Cv', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (23, 3, 'v.ozierski@ozitag.com', 'New Cv', '<p><b>Name:</b> adasadsasdasdasd</p><p><b>Phone:</b> +23423423432</p><p><b>E-Mail</b> adsasd@gmail.com</p><p><b>Message</b> adadasd</p>', 'SUCCESS', NULL, '2021-06-04 17:03:54', '2021-06-04 17:03:57', '[{\"path\":\"\\/var\\/www\\/app\\/storage\\/app\\/public\\/uploads\\/feedback\\/cs\\/wk\\/cSWKltzP20.png\",\"as\":\"pctJnGISku.png\",\"mime\":\"image\\/png\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/cs\\/wk\\/cSWKltzP20.png\"}]', 'Cv', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (24, 2, 'n.mazurenko@ozitag.com', 'New feedback', '<p><strong>Name:</strong> child 123 child123</p><p><strong>Company:</strong> adsasdadasd</p><p><strong>E-Mail</strong> asd@gmail.com</p><p><strong>Message</strong> asdasdasdas</p>', 'SUCCESS', NULL, '2021-06-08 09:44:45', '2021-06-08 09:44:46', '[{\"path\":\"\\/var\\/www\\/app\\/storage\\/app\\/public\\/uploads\\/feedback\\/p3\\/8g\\/p38gdd99Jo.jpg\",\"as\":\"0ZTuOqGvng.jpg\",\"mime\":\"image\\/jpeg\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/p3\\/8g\\/p38gdd99Jo.jpg\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (25, 2, 'n.mazurenko@ozitag.com', 'New feedback', '<p><strong>Name:</strong> иаси</p><p><strong>Company:</strong> сичси</p><p><strong>E-Mail</strong> nina.mazurenko.o@gmail.com</p><p><strong>Message</strong> счичсич</p>', 'SUCCESS', NULL, '2021-06-09 15:48:38', '2021-06-09 15:48:38', '[{\"path\":\"\\/var\\/www\\/app\\/storage\\/app\\/public\\/uploads\\/feedback\\/vi\\/19\\/vI19yL255n.doc\",\"as\":\"\\u041b\\u0435\\u043a\\u0446\\u0438\\u044f_9 (1).doc\",\"mime\":\"application\\/msword\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/vi\\/19\\/vI19yL255n.doc\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (26, 3, 'v.ozierski@ozitag.com', 'New Cv', '<p><b>Name:</b> Test</p><p><b>Phone:</b> +37529996633</p><p><b>E-Mail</b> test@test.com</p><p><b>Message</b> vgdsg</p>', 'SUCCESS', NULL, '2021-06-10 07:58:27', '2021-06-10 07:58:28', '[{\"path\":\"\\/var\\/www\\/app\\/storage\\/app\\/public\\/uploads\\/feedback\\/1s\\/ct\\/1SctVy7D55.doc\",\"as\":\"\\u041b\\u0435\\u043a\\u0446\\u0438\\u044f_9 (1).doc\",\"mime\":\"application\\/msword\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/1s\\/ct\\/1SctVy7D55.doc\"}]', 'Cv', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (27, 3, 'v.ozierski@ozitag.com', 'New Cv', '<p><b>Name:</b> test</p><p><b>Phone:</b> 623544444</p><p><b>E-Mail</b> test@test.com</p><p><b>Message</b> massage</p>', 'SUCCESS', NULL, '2021-06-10 07:59:25', '2021-06-10 07:59:28', '[{\"path\":\"\\/var\\/www\\/app\\/storage\\/app\\/public\\/uploads\\/feedback\\/p2\\/72\\/p272KGp67t.doc\",\"as\":\"\\u041b\\u0435\\u043a\\u0446\\u0438\\u044f_9 (1).doc\",\"mime\":\"application\\/msword\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/p2\\/72\\/p272KGp67t.doc\"}]', 'Cv', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (28, 2, 'n.mazurenko@ozitag.com', 'New feedback', '<p><strong>Name:</strong> asd</p><p><strong>Company:</strong> asd</p><p><strong>E-Mail</strong> asdasd@gmail.com</p><p><strong>Message</strong> adasdasd</p>', 'SUCCESS', NULL, '2021-06-10 11:17:16', '2021-06-10 11:17:17', '[{\"path\":\"\\/var\\/www\\/app\\/storage\\/app\\/public\\/uploads\\/feedback\\/ii\\/my\\/IimyLA7NLA.txt\",\"as\":\"LICENSE.txt\",\"mime\":\"text\\/plain\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/ii\\/my\\/IimyLA7NLA.txt\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (29, 2, 'n.mazurenko@ozitag.com', 'New feedback', '<p><strong>Name:</strong> asdasd</p><p><strong>Company:</strong> asdasdasd</p><p><strong>E-Mail</strong> asdasd@gmail.com</p><p><strong>Message</strong> asdasdasdsad</p>', 'SUCCESS', NULL, '2021-06-10 11:22:55', '2021-06-10 11:22:56', '[{\"path\":\"\\/var\\/www\\/app\\/storage\\/app\\/public\\/uploads\\/feedback\\/7g\\/c8\\/7GC8Tvi05T.txt\",\"as\":\"LICENSE.txt\",\"mime\":\"text\\/plain\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/7g\\/c8\\/7GC8Tvi05T.txt\"}]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (30, 3, 'v.ozierski@ozitag.com', 'New Cv', '<p><b>Name:</b> dgfdfgdfgfdg</p><p><b>Phone:</b> +475552321423</p><p><b>E-Mail</b> adsasdasdasd@gmail.com</p><p><b>Message</b> asdasdasdasdas</p>', 'SUCCESS', NULL, '2021-06-10 16:24:32', '2021-06-10 16:24:34', '[{\"path\":\"\\/var\\/www\\/app\\/storage\\/app\\/public\\/uploads\\/feedback\\/fz\\/n4\\/FzN4pERtcd.txt\",\"as\":\"LICENSE.txt\",\"mime\":\"text\\/plain\",\"url\":\"https:\\/\\/furylion.dev.ozitag.com\\/uploads\\/feedback\\/fz\\/n4\\/FzN4pERtcd.txt\"}]', 'Cv', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (31, 2, 'n.mazurenko@ozitag.com', 'FuryLion WebSite - Feedback Form', '<p><strong>Name:</strong> Nina</p><p><strong>Company:</strong> Test</p><p><strong>E-Mail</strong> nina.mazurenko.o@gmail.com</p><p><strong>Message</strong> gdgdggdg</p>', 'SUCCESS', NULL, '2021-06-11 14:28:20', '2021-06-11 14:28:22', '[]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
INSERT INTO `tager_mail_logs` VALUES (32, 2, 'n.mazurenko@ozitag.com', 'FuryLion WebSite - Feedback Form', '<p><strong>Name:</strong> Nina</p><p><strong>Company:</strong> Test</p><p><strong>E-Mail</strong> nina.mazurenko.o@gmail.com</p><p><strong>Message</strong> gdgdggdg</p>', 'SUCCESS', NULL, '2021-06-11 14:28:20', '2021-06-11 14:28:22', '[]', 'Feedback', NULL, NULL, 'info@ozitag.com', 'TAGER');
COMMIT;

-- ----------------------------
-- Table structure for tager_mail_templates
-- ----------------------------
DROP TABLE IF EXISTS `tager_mail_templates`;
CREATE TABLE `tager_mail_templates` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `template` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci,
  `recipients` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `changed_by_admin` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `service_template` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_mail_templates
-- ----------------------------
BEGIN;
INSERT INTO `tager_mail_templates` VALUES (1, 'Contact', 'Contact form', 'FuryLion WebSite - Contacts Form', '<p><strong>Name:</strong> {{name}}</p><p><strong>E-mail:</strong> {{email}}</p><p><strong>Message:</strong> {{message}}</p>', 'v.ozierski@ozitag.com,n.mazurenko@ozitag.com', 1, '2021-03-10 14:01:12', '2021-06-11 14:26:04', NULL, NULL);
INSERT INTO `tager_mail_templates` VALUES (2, 'Feedback', 'Home feedback form', 'FuryLion WebSite - Feedback Form', '<p><strong>Name:</strong> {{name}}</p><p><strong>Company:</strong> {{company}}</p><p><strong>E-Mail</strong> {{email}}</p><p><strong>Message</strong> {{message}}</p>', 'n.mazurenko@ozitag.com', 1, '2021-03-29 11:26:19', '2021-06-11 09:31:59', NULL, NULL);
INSERT INTO `tager_mail_templates` VALUES (3, 'Cv', 'Cv form', 'FuryLion WebSite - Vacancies Form', '<p><strong>Name:</strong> {{name}}</p><p><strong>Phone:</strong> {{phone}}</p><p><strong>E-Mail</strong> {{email}}</p><p><strong>Message</strong> {{message}}</p>', 'v.ozierski@ozitag.com,n.mazurenko@ozitag.com', 1, '2021-05-25 16:54:30', '2021-06-11 14:26:10', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for tager_menu_items
-- ----------------------------
DROP TABLE IF EXISTS `tager_menu_items`;
CREATE TABLE `tager_menu_items` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `menu_alias` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_new_tab` tinyint(1) NOT NULL DEFAULT '0',
  `_lft` int(10) unsigned NOT NULL DEFAULT '0',
  `_rgt` int(10) unsigned NOT NULL DEFAULT '0',
  `parent_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tager_menu_items__lft__rgt_parent_id_index` (`_lft`,`_rgt`,`parent_id`),
  KEY `tager_menu_items_menu_alias_index` (`menu_alias`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_menu_items
-- ----------------------------
BEGIN;
INSERT INTO `tager_menu_items` VALUES (105, 'header', 'Services', '/services', 0, 1, 2, NULL);
INSERT INTO `tager_menu_items` VALUES (106, 'header', 'Playable ADS', '/ads', 0, 3, 4, NULL);
INSERT INTO `tager_menu_items` VALUES (107, 'header', 'Contact us', '#contacts', 0, 5, 6, NULL);
INSERT INTO `tager_menu_items` VALUES (108, 'header', 'Vacancies', '/vacancies', 0, 7, 8, NULL);
INSERT INTO `tager_menu_items` VALUES (109, 'footer', 'Services', '/services', 0, 1, 2, NULL);
INSERT INTO `tager_menu_items` VALUES (110, 'footer', 'Playable ADS', '/ads', 0, 3, 4, NULL);
INSERT INTO `tager_menu_items` VALUES (111, 'footer', 'Vacancies', '/vacancies', 0, 5, 6, NULL);
COMMIT;

-- ----------------------------
-- Table structure for tager_module_settings
-- ----------------------------
DROP TABLE IF EXISTS `tager_module_settings`;
CREATE TABLE `tager_module_settings` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `module` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `param` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_module_settings
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for tager_page_field_files
-- ----------------------------
DROP TABLE IF EXISTS `tager_page_field_files`;
CREATE TABLE `tager_page_field_files` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `field_id` bigint(20) unsigned NOT NULL,
  `file_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `tager_page_field_files_field_id_foreign` (`field_id`),
  KEY `tager_page_field_files_file_id_foreign` (`file_id`),
  CONSTRAINT `tager_page_field_files_field_id_foreign` FOREIGN KEY (`field_id`) REFERENCES `tager_page_fields` (`id`) ON DELETE CASCADE,
  CONSTRAINT `tager_page_field_files_file_id_foreign` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30212 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_page_field_files
-- ----------------------------
BEGIN;
INSERT INTO `tager_page_field_files` VALUES (29534, 91393, 924);
INSERT INTO `tager_page_field_files` VALUES (29535, 91394, 1031);
INSERT INTO `tager_page_field_files` VALUES (29536, 91396, 926);
INSERT INTO `tager_page_field_files` VALUES (29537, 91397, 927);
INSERT INTO `tager_page_field_files` VALUES (29538, 91399, 928);
INSERT INTO `tager_page_field_files` VALUES (29539, 91400, 1032);
INSERT INTO `tager_page_field_files` VALUES (29540, 91402, 930);
INSERT INTO `tager_page_field_files` VALUES (29541, 91403, 1033);
INSERT INTO `tager_page_field_files` VALUES (29542, 91405, 932);
INSERT INTO `tager_page_field_files` VALUES (29543, 91406, 1034);
INSERT INTO `tager_page_field_files` VALUES (29544, 91408, 934);
INSERT INTO `tager_page_field_files` VALUES (29545, 91409, 1035);
INSERT INTO `tager_page_field_files` VALUES (29546, 91428, 937);
INSERT INTO `tager_page_field_files` VALUES (29547, 91429, 936);
INSERT INTO `tager_page_field_files` VALUES (29548, 91431, 938);
INSERT INTO `tager_page_field_files` VALUES (29549, 91432, 939);
INSERT INTO `tager_page_field_files` VALUES (29550, 91434, 940);
INSERT INTO `tager_page_field_files` VALUES (29551, 91435, 941);
INSERT INTO `tager_page_field_files` VALUES (29552, 91442, 869);
INSERT INTO `tager_page_field_files` VALUES (29553, 91445, 870);
INSERT INTO `tager_page_field_files` VALUES (29554, 91449, 871);
INSERT INTO `tager_page_field_files` VALUES (29555, 91452, 872);
INSERT INTO `tager_page_field_files` VALUES (29556, 91471, 1029);
INSERT INTO `tager_page_field_files` VALUES (29557, 91476, 480);
INSERT INTO `tager_page_field_files` VALUES (29558, 91481, 819);
INSERT INTO `tager_page_field_files` VALUES (29559, 91484, 481);
INSERT INTO `tager_page_field_files` VALUES (29560, 91489, 885);
INSERT INTO `tager_page_field_files` VALUES (29561, 91492, 952);
INSERT INTO `tager_page_field_files` VALUES (29562, 91495, 482);
INSERT INTO `tager_page_field_files` VALUES (29563, 91500, 816);
INSERT INTO `tager_page_field_files` VALUES (29564, 91503, 948);
INSERT INTO `tager_page_field_files` VALUES (29565, 91506, 822);
INSERT INTO `tager_page_field_files` VALUES (29566, 91511, 823);
INSERT INTO `tager_page_field_files` VALUES (29567, 91514, 949);
INSERT INTO `tager_page_field_files` VALUES (29568, 91517, 831);
INSERT INTO `tager_page_field_files` VALUES (29569, 91522, 826);
INSERT INTO `tager_page_field_files` VALUES (29570, 91525, 950);
INSERT INTO `tager_page_field_files` VALUES (29571, 91528, 828);
INSERT INTO `tager_page_field_files` VALUES (29572, 91533, 830);
INSERT INTO `tager_page_field_files` VALUES (29573, 91536, 951);
INSERT INTO `tager_page_field_files` VALUES (29574, 91560, 218);
INSERT INTO `tager_page_field_files` VALUES (29575, 91561, 219);
INSERT INTO `tager_page_field_files` VALUES (29576, 91570, 230);
INSERT INTO `tager_page_field_files` VALUES (29577, 91570, 231);
INSERT INTO `tager_page_field_files` VALUES (29578, 91570, 803);
INSERT INTO `tager_page_field_files` VALUES (29579, 91570, 804);
INSERT INTO `tager_page_field_files` VALUES (29580, 91570, 805);
INSERT INTO `tager_page_field_files` VALUES (29581, 91570, 806);
INSERT INTO `tager_page_field_files` VALUES (29582, 91570, 807);
INSERT INTO `tager_page_field_files` VALUES (29583, 91570, 808);
INSERT INTO `tager_page_field_files` VALUES (29584, 91570, 809);
INSERT INTO `tager_page_field_files` VALUES (29585, 91570, 810);
INSERT INTO `tager_page_field_files` VALUES (29586, 91570, 811);
INSERT INTO `tager_page_field_files` VALUES (29587, 91570, 891);
INSERT INTO `tager_page_field_files` VALUES (29588, 91570, 892);
INSERT INTO `tager_page_field_files` VALUES (29589, 91570, 893);
INSERT INTO `tager_page_field_files` VALUES (29590, 91570, 894);
INSERT INTO `tager_page_field_files` VALUES (29591, 91570, 895);
INSERT INTO `tager_page_field_files` VALUES (29592, 91570, 896);
INSERT INTO `tager_page_field_files` VALUES (29593, 91570, 897);
INSERT INTO `tager_page_field_files` VALUES (29594, 91570, 898);
INSERT INTO `tager_page_field_files` VALUES (29735, 91691, 157);
INSERT INTO `tager_page_field_files` VALUES (30024, 93100, 774);
INSERT INTO `tager_page_field_files` VALUES (30025, 93105, 762);
INSERT INTO `tager_page_field_files` VALUES (30026, 93110, 763);
INSERT INTO `tager_page_field_files` VALUES (30027, 93115, 765);
INSERT INTO `tager_page_field_files` VALUES (30028, 93120, 766);
INSERT INTO `tager_page_field_files` VALUES (30029, 93125, 775);
INSERT INTO `tager_page_field_files` VALUES (30030, 93130, 942);
INSERT INTO `tager_page_field_files` VALUES (30031, 93136, 777);
INSERT INTO `tager_page_field_files` VALUES (30032, 93141, 769);
INSERT INTO `tager_page_field_files` VALUES (30033, 93146, 770);
INSERT INTO `tager_page_field_files` VALUES (30034, 93151, 771);
INSERT INTO `tager_page_field_files` VALUES (30035, 93156, 772);
INSERT INTO `tager_page_field_files` VALUES (30036, 93161, 773);
INSERT INTO `tager_page_field_files` VALUES (30037, 93182, 256);
INSERT INTO `tager_page_field_files` VALUES (30038, 93216, 239);
INSERT INTO `tager_page_field_files` VALUES (30039, 93216, 240);
INSERT INTO `tager_page_field_files` VALUES (30040, 93216, 241);
INSERT INTO `tager_page_field_files` VALUES (30041, 93216, 242);
INSERT INTO `tager_page_field_files` VALUES (30042, 93217, 245);
INSERT INTO `tager_page_field_files` VALUES (30043, 93217, 243);
INSERT INTO `tager_page_field_files` VALUES (30044, 93217, 244);
INSERT INTO `tager_page_field_files` VALUES (30045, 93217, 246);
INSERT INTO `tager_page_field_files` VALUES (30046, 93221, 238);
INSERT INTO `tager_page_field_files` VALUES (30047, 93228, 779);
INSERT INTO `tager_page_field_files` VALUES (30048, 93232, 787);
INSERT INTO `tager_page_field_files` VALUES (30049, 93236, 786);
INSERT INTO `tager_page_field_files` VALUES (30050, 93240, 802);
INSERT INTO `tager_page_field_files` VALUES (30051, 93244, 782);
INSERT INTO `tager_page_field_files` VALUES (30052, 93248, 783);
INSERT INTO `tager_page_field_files` VALUES (30053, 93252, 784);
INSERT INTO `tager_page_field_files` VALUES (30054, 93256, 785);
INSERT INTO `tager_page_field_files` VALUES (30055, 93261, 788);
INSERT INTO `tager_page_field_files` VALUES (30056, 93265, 801);
INSERT INTO `tager_page_field_files` VALUES (30057, 93269, 800);
INSERT INTO `tager_page_field_files` VALUES (30058, 93273, 812);
INSERT INTO `tager_page_field_files` VALUES (30059, 93277, 799);
INSERT INTO `tager_page_field_files` VALUES (30060, 93281, 405);
INSERT INTO `tager_page_field_files` VALUES (30061, 93285, 798);
INSERT INTO `tager_page_field_files` VALUES (30062, 93289, 407);
INSERT INTO `tager_page_field_files` VALUES (30063, 93294, 797);
INSERT INTO `tager_page_field_files` VALUES (30064, 93298, 795);
INSERT INTO `tager_page_field_files` VALUES (30065, 93302, 794);
INSERT INTO `tager_page_field_files` VALUES (30066, 93306, 793);
INSERT INTO `tager_page_field_files` VALUES (30067, 93310, 792);
INSERT INTO `tager_page_field_files` VALUES (30068, 93314, 791);
INSERT INTO `tager_page_field_files` VALUES (30069, 93318, 790);
INSERT INTO `tager_page_field_files` VALUES (30070, 93322, 789);
INSERT INTO `tager_page_field_files` VALUES (30071, 93327, 428);
INSERT INTO `tager_page_field_files` VALUES (30072, 93332, 486);
INSERT INTO `tager_page_field_files` VALUES (30073, 93333, 12);
INSERT INTO `tager_page_field_files` VALUES (30074, 93338, 2);
INSERT INTO `tager_page_field_files` VALUES (30075, 93343, 500);
INSERT INTO `tager_page_field_files` VALUES (30076, 93348, 499);
INSERT INTO `tager_page_field_files` VALUES (30077, 93353, 753);
INSERT INTO `tager_page_field_files` VALUES (30078, 93361, 477);
INSERT INTO `tager_page_field_files` VALUES (30079, 93369, 471);
INSERT INTO `tager_page_field_files` VALUES (30080, 93377, 470);
INSERT INTO `tager_page_field_files` VALUES (30081, 93388, 472);
INSERT INTO `tager_page_field_files` VALUES (30082, 93396, 473);
INSERT INTO `tager_page_field_files` VALUES (30083, 93404, 491);
INSERT INTO `tager_page_field_files` VALUES (30084, 93414, 943);
INSERT INTO `tager_page_field_files` VALUES (30085, 93414, 944);
INSERT INTO `tager_page_field_files` VALUES (30086, 93414, 945);
INSERT INTO `tager_page_field_files` VALUES (30087, 93414, 946);
INSERT INTO `tager_page_field_files` VALUES (30088, 93415, 488);
INSERT INTO `tager_page_field_files` VALUES (30089, 93416, 489);
INSERT INTO `tager_page_field_files` VALUES (30090, 93427, 520);
INSERT INTO `tager_page_field_files` VALUES (30091, 93427, 521);
INSERT INTO `tager_page_field_files` VALUES (30092, 93427, 522);
INSERT INTO `tager_page_field_files` VALUES (30093, 93436, 544);
INSERT INTO `tager_page_field_files` VALUES (30094, 93436, 546);
INSERT INTO `tager_page_field_files` VALUES (30095, 93436, 548);
INSERT INTO `tager_page_field_files` VALUES (30096, 93436, 549);
INSERT INTO `tager_page_field_files` VALUES (30097, 93436, 550);
INSERT INTO `tager_page_field_files` VALUES (30098, 93436, 551);
INSERT INTO `tager_page_field_files` VALUES (30099, 93436, 552);
INSERT INTO `tager_page_field_files` VALUES (30100, 93436, 553);
INSERT INTO `tager_page_field_files` VALUES (30101, 93436, 554);
INSERT INTO `tager_page_field_files` VALUES (30102, 93436, 556);
INSERT INTO `tager_page_field_files` VALUES (30103, 93436, 557);
INSERT INTO `tager_page_field_files` VALUES (30104, 93436, 558);
INSERT INTO `tager_page_field_files` VALUES (30105, 93436, 559);
INSERT INTO `tager_page_field_files` VALUES (30106, 93436, 560);
INSERT INTO `tager_page_field_files` VALUES (30107, 93436, 561);
INSERT INTO `tager_page_field_files` VALUES (30108, 93436, 562);
INSERT INTO `tager_page_field_files` VALUES (30109, 93436, 564);
INSERT INTO `tager_page_field_files` VALUES (30110, 93436, 566);
INSERT INTO `tager_page_field_files` VALUES (30111, 93436, 567);
INSERT INTO `tager_page_field_files` VALUES (30112, 93436, 568);
INSERT INTO `tager_page_field_files` VALUES (30113, 93436, 569);
INSERT INTO `tager_page_field_files` VALUES (30114, 93436, 570);
INSERT INTO `tager_page_field_files` VALUES (30115, 93436, 571);
INSERT INTO `tager_page_field_files` VALUES (30116, 93436, 573);
INSERT INTO `tager_page_field_files` VALUES (30117, 93436, 574);
INSERT INTO `tager_page_field_files` VALUES (30118, 93436, 575);
INSERT INTO `tager_page_field_files` VALUES (30119, 93436, 576);
INSERT INTO `tager_page_field_files` VALUES (30120, 93436, 596);
INSERT INTO `tager_page_field_files` VALUES (30121, 93436, 597);
INSERT INTO `tager_page_field_files` VALUES (30122, 93436, 601);
INSERT INTO `tager_page_field_files` VALUES (30123, 93436, 602);
INSERT INTO `tager_page_field_files` VALUES (30124, 93436, 603);
INSERT INTO `tager_page_field_files` VALUES (30125, 93436, 604);
INSERT INTO `tager_page_field_files` VALUES (30126, 93436, 614);
INSERT INTO `tager_page_field_files` VALUES (30127, 93436, 615);
INSERT INTO `tager_page_field_files` VALUES (30128, 93436, 616);
INSERT INTO `tager_page_field_files` VALUES (30129, 93436, 617);
INSERT INTO `tager_page_field_files` VALUES (30130, 93436, 619);
INSERT INTO `tager_page_field_files` VALUES (30131, 93436, 618);
INSERT INTO `tager_page_field_files` VALUES (30132, 93436, 621);
INSERT INTO `tager_page_field_files` VALUES (30133, 93436, 623);
INSERT INTO `tager_page_field_files` VALUES (30134, 93436, 625);
INSERT INTO `tager_page_field_files` VALUES (30135, 93436, 955);
INSERT INTO `tager_page_field_files` VALUES (30136, 93436, 956);
INSERT INTO `tager_page_field_files` VALUES (30137, 93436, 957);
INSERT INTO `tager_page_field_files` VALUES (30138, 93436, 958);
INSERT INTO `tager_page_field_files` VALUES (30139, 93436, 959);
INSERT INTO `tager_page_field_files` VALUES (30140, 93436, 961);
INSERT INTO `tager_page_field_files` VALUES (30141, 93436, 960);
INSERT INTO `tager_page_field_files` VALUES (30142, 93436, 962);
INSERT INTO `tager_page_field_files` VALUES (30143, 93436, 963);
INSERT INTO `tager_page_field_files` VALUES (30144, 93436, 964);
INSERT INTO `tager_page_field_files` VALUES (30145, 93436, 965);
INSERT INTO `tager_page_field_files` VALUES (30146, 93436, 966);
INSERT INTO `tager_page_field_files` VALUES (30147, 93436, 967);
INSERT INTO `tager_page_field_files` VALUES (30148, 93436, 968);
INSERT INTO `tager_page_field_files` VALUES (30149, 93436, 969);
INSERT INTO `tager_page_field_files` VALUES (30150, 93436, 970);
INSERT INTO `tager_page_field_files` VALUES (30151, 93436, 971);
INSERT INTO `tager_page_field_files` VALUES (30152, 93436, 972);
INSERT INTO `tager_page_field_files` VALUES (30153, 93436, 973);
INSERT INTO `tager_page_field_files` VALUES (30154, 93436, 975);
INSERT INTO `tager_page_field_files` VALUES (30155, 93436, 974);
INSERT INTO `tager_page_field_files` VALUES (30156, 93436, 976);
INSERT INTO `tager_page_field_files` VALUES (30157, 93436, 979);
INSERT INTO `tager_page_field_files` VALUES (30158, 93436, 980);
INSERT INTO `tager_page_field_files` VALUES (30159, 93436, 978);
INSERT INTO `tager_page_field_files` VALUES (30160, 93436, 977);
INSERT INTO `tager_page_field_files` VALUES (30161, 93436, 981);
INSERT INTO `tager_page_field_files` VALUES (30162, 93436, 982);
INSERT INTO `tager_page_field_files` VALUES (30163, 93436, 983);
INSERT INTO `tager_page_field_files` VALUES (30164, 93436, 984);
INSERT INTO `tager_page_field_files` VALUES (30165, 93436, 985);
INSERT INTO `tager_page_field_files` VALUES (30166, 93436, 986);
INSERT INTO `tager_page_field_files` VALUES (30167, 93436, 987);
INSERT INTO `tager_page_field_files` VALUES (30168, 93436, 988);
INSERT INTO `tager_page_field_files` VALUES (30169, 93436, 989);
INSERT INTO `tager_page_field_files` VALUES (30170, 93436, 990);
INSERT INTO `tager_page_field_files` VALUES (30171, 93436, 991);
INSERT INTO `tager_page_field_files` VALUES (30172, 93436, 992);
INSERT INTO `tager_page_field_files` VALUES (30173, 93436, 993);
INSERT INTO `tager_page_field_files` VALUES (30174, 93436, 994);
INSERT INTO `tager_page_field_files` VALUES (30175, 93436, 995);
INSERT INTO `tager_page_field_files` VALUES (30176, 93436, 996);
INSERT INTO `tager_page_field_files` VALUES (30177, 93436, 997);
INSERT INTO `tager_page_field_files` VALUES (30178, 93436, 999);
INSERT INTO `tager_page_field_files` VALUES (30179, 93436, 998);
INSERT INTO `tager_page_field_files` VALUES (30180, 93436, 1000);
INSERT INTO `tager_page_field_files` VALUES (30181, 93436, 1001);
INSERT INTO `tager_page_field_files` VALUES (30182, 93436, 1002);
INSERT INTO `tager_page_field_files` VALUES (30183, 93436, 1003);
INSERT INTO `tager_page_field_files` VALUES (30184, 93436, 1004);
INSERT INTO `tager_page_field_files` VALUES (30185, 93436, 1005);
INSERT INTO `tager_page_field_files` VALUES (30186, 93436, 1006);
INSERT INTO `tager_page_field_files` VALUES (30187, 93436, 1007);
INSERT INTO `tager_page_field_files` VALUES (30188, 93436, 1008);
INSERT INTO `tager_page_field_files` VALUES (30189, 93436, 1009);
INSERT INTO `tager_page_field_files` VALUES (30190, 93436, 1010);
INSERT INTO `tager_page_field_files` VALUES (30191, 93436, 1011);
INSERT INTO `tager_page_field_files` VALUES (30192, 93436, 1012);
INSERT INTO `tager_page_field_files` VALUES (30193, 93436, 1013);
INSERT INTO `tager_page_field_files` VALUES (30194, 93436, 1014);
INSERT INTO `tager_page_field_files` VALUES (30195, 93436, 1015);
INSERT INTO `tager_page_field_files` VALUES (30196, 93436, 1016);
INSERT INTO `tager_page_field_files` VALUES (30197, 93436, 1017);
INSERT INTO `tager_page_field_files` VALUES (30198, 93436, 1018);
INSERT INTO `tager_page_field_files` VALUES (30199, 93436, 1019);
INSERT INTO `tager_page_field_files` VALUES (30200, 93436, 1020);
INSERT INTO `tager_page_field_files` VALUES (30201, 93436, 1021);
INSERT INTO `tager_page_field_files` VALUES (30202, 93442, 113);
INSERT INTO `tager_page_field_files` VALUES (30203, 93442, 114);
INSERT INTO `tager_page_field_files` VALUES (30204, 93442, 116);
INSERT INTO `tager_page_field_files` VALUES (30205, 93442, 118);
INSERT INTO `tager_page_field_files` VALUES (30206, 93443, 109);
INSERT INTO `tager_page_field_files` VALUES (30207, 93443, 110);
INSERT INTO `tager_page_field_files` VALUES (30208, 93443, 119);
INSERT INTO `tager_page_field_files` VALUES (30209, 93443, 751);
INSERT INTO `tager_page_field_files` VALUES (30210, 93443, 111);
INSERT INTO `tager_page_field_files` VALUES (30211, 93443, 112);
COMMIT;

-- ----------------------------
-- Table structure for tager_page_fields
-- ----------------------------
DROP TABLE IF EXISTS `tager_page_fields`;
CREATE TABLE `tager_page_fields` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `page_id` bigint(20) unsigned NOT NULL,
  `field` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci,
  `parent_id` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tager_page_fields_page_id_index` (`page_id`),
  KEY `tager_page_fields_parent_id_foreign` (`parent_id`),
  CONSTRAINT `tager_page_fields_page_id_foreign` FOREIGN KEY (`page_id`) REFERENCES `tager_pages` (`id`),
  CONSTRAINT `tager_page_fields_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `tager_page_fields` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=93445 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_page_fields
-- ----------------------------
BEGIN;
INSERT INTO `tager_page_fields` VALUES (91373, 3, 'headId', 'art', NULL);
INSERT INTO `tager_page_fields` VALUES (91374, 3, 'headText', 'We love making cool ART and Animation.', NULL);
INSERT INTO `tager_page_fields` VALUES (91375, 3, 'firstArtId', '2d', NULL);
INSERT INTO `tager_page_fields` VALUES (91376, 3, 'firstArtTitle', '2D ART', NULL);
INSERT INTO `tager_page_fields` VALUES (91377, 3, 'firstArtTitle1', 'With love to art creation', NULL);
INSERT INTO `tager_page_fields` VALUES (91378, 3, 'firstArtText1', 'We offer the development of 2D graphics of any complexity together with our fully equipped teams consisting of an art leader, 2D artists and managers. We can either create everything ourselves or expand your team of specialists with our artists. Our teams are scalable. You can add or subtract commands at any time.', NULL);
INSERT INTO `tager_page_fields` VALUES (91379, 3, 'firstArtTitle2', 'Art Production', NULL);
INSERT INTO `tager_page_fields` VALUES (91380, 3, 'firstArtText2', 'We create concept art for games, promotional assets, motion graphics, mobile, desktop and non-digital projects. And produce concept art for mobile games: iOS and Android, concept art for video games including PC, Mac, Apple TV and various consoles, as well as illustration and concept art for board games', NULL);
INSERT INTO `tager_page_fields` VALUES (91381, 3, 'firstArtTitle3', 'UI/UX Design', NULL);
INSERT INTO `tager_page_fields` VALUES (91382, 3, 'firstArtText3', 'We focus on user interfaces for projects with gaming mechanics only. Our artists work closely with game designers to create UI that enhances user experience. Starloop designed graphical user interfaces and user experiences for games of various styles: from cartoon mobile games to hardcore sci-fi multiplayer shooters', NULL);
INSERT INTO `tager_page_fields` VALUES (91383, 3, 'firstArtTitleAdditional', 'Our services:', NULL);
INSERT INTO `tager_page_fields` VALUES (91384, 3, 'firstArtTextAdditional', '<p>2D Art, Concept Art, UI/UX Design, Illustrations</p>', NULL);
INSERT INTO `tager_page_fields` VALUES (91385, 3, 'firstArtButtonFirstLabel', 'I want the same!', NULL);
INSERT INTO `tager_page_fields` VALUES (91386, 3, 'firstArtButtonFirstUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (91387, 3, 'firstArtButtonFirstIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (91388, 3, 'firstArtButtonSecondLabel', 'i can do the same', NULL);
INSERT INTO `tager_page_fields` VALUES (91389, 3, 'firstArtButtonSecondUrl', '#vacancies', NULL);
INSERT INTO `tager_page_fields` VALUES (91390, 3, 'firstArtButtonSecondIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (91391, 3, 'firstArtImages', '[[{\"name\":\"desktop\",\"value\":\"412e57da-749a-4af4-a4fc-4450bbe98554\"},{\"name\":\"mobile\",\"value\":\"b3d73ae9-edbc-4f63-9510-1a820030ccea\"}],[{\"name\":\"desktop\",\"value\":\"cfc5e027-7065-47b9-918e-8d8d35372aa5\"},{\"name\":\"mobile\",\"value\":\"ccd22a5d-a9a7-491d-abee-4e2bf6f57793\"}],[{\"name\":\"desktop\",\"value\":\"b1339663-8686-469c-b92e-318ce0b030ce\"},{\"name\":\"mobile\",\"value\":\"4ab0ac8f-2073-40c5-b79f-229e7d698c95\"}],[{\"name\":\"desktop\",\"value\":\"8761f1d4-e64e-47f2-afc1-9a3c3fad976c\"},{\"name\":\"mobile\",\"value\":\"42f9142b-7138-4f12-935e-a70e677e0137\"}],[{\"name\":\"desktop\",\"value\":\"0f7517e4-15b8-4695-b023-77574cb941c8\"},{\"name\":\"mobile\",\"value\":\"1e6345f3-cfba-4aa3-a1a9-7f6eb40c5bb5\"}],[{\"name\":\"desktop\",\"value\":\"3cc96fcf-0ae9-4f36-9040-f1006f370a68\"},{\"name\":\"mobile\",\"value\":\"0396e99d-943b-43aa-bfaf-74c59700ff9c\"}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (91392, 3, 'firstArtImages[0]', NULL, 91391);
INSERT INTO `tager_page_fields` VALUES (91393, 3, 'desktop', '924', 91392);
INSERT INTO `tager_page_fields` VALUES (91394, 3, 'mobile', '1031', 91392);
INSERT INTO `tager_page_fields` VALUES (91395, 3, 'firstArtImages[1]', NULL, 91391);
INSERT INTO `tager_page_fields` VALUES (91396, 3, 'desktop', '926', 91395);
INSERT INTO `tager_page_fields` VALUES (91397, 3, 'mobile', '927', 91395);
INSERT INTO `tager_page_fields` VALUES (91398, 3, 'firstArtImages[2]', NULL, 91391);
INSERT INTO `tager_page_fields` VALUES (91399, 3, 'desktop', '928', 91398);
INSERT INTO `tager_page_fields` VALUES (91400, 3, 'mobile', '1032', 91398);
INSERT INTO `tager_page_fields` VALUES (91401, 3, 'firstArtImages[3]', NULL, 91391);
INSERT INTO `tager_page_fields` VALUES (91402, 3, 'desktop', '930', 91401);
INSERT INTO `tager_page_fields` VALUES (91403, 3, 'mobile', '1033', 91401);
INSERT INTO `tager_page_fields` VALUES (91404, 3, 'firstArtImages[4]', NULL, 91391);
INSERT INTO `tager_page_fields` VALUES (91405, 3, 'desktop', '932', 91404);
INSERT INTO `tager_page_fields` VALUES (91406, 3, 'mobile', '1034', 91404);
INSERT INTO `tager_page_fields` VALUES (91407, 3, 'firstArtImages[5]', NULL, 91391);
INSERT INTO `tager_page_fields` VALUES (91408, 3, 'desktop', '934', 91407);
INSERT INTO `tager_page_fields` VALUES (91409, 3, 'mobile', '1035', 91407);
INSERT INTO `tager_page_fields` VALUES (91410, 3, 'secondArtId', '3d', NULL);
INSERT INTO `tager_page_fields` VALUES (91411, 3, 'secondArtTitle', '3D ART', NULL);
INSERT INTO `tager_page_fields` VALUES (91412, 3, 'secondArtTitle1', 'The big team', NULL);
INSERT INTO `tager_page_fields` VALUES (91413, 3, 'secondArtText1', '3D department is the largest department of the company. It employs over 70 high-quality artists and technicians producing 3D graphics of the highest possible quality.', NULL);
INSERT INTO `tager_page_fields` VALUES (91414, 3, 'secondArtTitle2', 'We are flexible', NULL);
INSERT INTO `tager_page_fields` VALUES (91415, 3, 'secondArtText2', 'We provide a full range of services such as modeling, lodding, environment creation, etc. Our specialists know how and love to make graphics for a wide variety of tasks - from hyper-casual models to cinematic quality.', NULL);
INSERT INTO `tager_page_fields` VALUES (91416, 3, 'secondArtTitle3', 'We are scalable', NULL);
INSERT INTO `tager_page_fields` VALUES (91417, 3, 'secondArtText3', 'Our specialists, if necessary, go beyond the classical scaling of content. We will be happy to participate in pre-production and develop the visual style of the future world hit together with our partners.', NULL);
INSERT INTO `tager_page_fields` VALUES (91418, 3, 'secondArtTitleAdditional', 'Our services:', NULL);
INSERT INTO `tager_page_fields` VALUES (91419, 3, 'secondArtTextAdditional', '<p>3D Art, Lodding, Props, Realistic hairs</p>', NULL);
INSERT INTO `tager_page_fields` VALUES (91420, 3, 'secondArtButtonFirstLabel', 'I want the same!', NULL);
INSERT INTO `tager_page_fields` VALUES (91421, 3, 'secondArtButtonFirstUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (91422, 3, 'secondArtButtonFirstIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (91423, 3, 'secondArtButtonSecondLabel', 'i can do the same', NULL);
INSERT INTO `tager_page_fields` VALUES (91424, 3, 'secondArtButtonSecondUrl', '#vacancies', NULL);
INSERT INTO `tager_page_fields` VALUES (91425, 3, 'secondArtButtonSecondIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (91426, 3, 'secondArtImages', '[[{\"name\":\"desktop\",\"value\":\"25aea05f-4198-4d04-b011-a5bf134d59c2\"},{\"name\":\"mobile\",\"value\":\"d3ccea96-f748-4f95-bea7-02f1c3705cde\"}],[{\"name\":\"desktop\",\"value\":\"fe5fc480-2a51-4cb4-aa09-78623632c4e2\"},{\"name\":\"mobile\",\"value\":\"78fa0625-9206-4aaa-b0e2-1f79057f0302\"}],[{\"name\":\"desktop\",\"value\":\"ca96c369-d0df-40d6-9234-17d75cf71aa0\"},{\"name\":\"mobile\",\"value\":\"6cb3d68b-4f29-4b34-af60-6bca01e09ce5\"}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (91427, 3, 'secondArtImages[0]', NULL, 91426);
INSERT INTO `tager_page_fields` VALUES (91428, 3, 'desktop', '937', 91427);
INSERT INTO `tager_page_fields` VALUES (91429, 3, 'mobile', '936', 91427);
INSERT INTO `tager_page_fields` VALUES (91430, 3, 'secondArtImages[1]', NULL, 91426);
INSERT INTO `tager_page_fields` VALUES (91431, 3, 'desktop', '938', 91430);
INSERT INTO `tager_page_fields` VALUES (91432, 3, 'mobile', '939', 91430);
INSERT INTO `tager_page_fields` VALUES (91433, 3, 'secondArtImages[2]', NULL, 91426);
INSERT INTO `tager_page_fields` VALUES (91434, 3, 'desktop', '940', 91433);
INSERT INTO `tager_page_fields` VALUES (91435, 3, 'mobile', '941', 91433);
INSERT INTO `tager_page_fields` VALUES (91436, 3, 'productionId', 'servicesAnimation', NULL);
INSERT INTO `tager_page_fields` VALUES (91437, 3, 'productionTitle', 'FuryLion provides a wide range of animation services', NULL);
INSERT INTO `tager_page_fields` VALUES (91438, 3, 'productionText1', 'Our 2D animators team works on casual projects of any complexity. Our tools include technologies such as Spine and Animate.', NULL);
INSERT INTO `tager_page_fields` VALUES (91439, 3, 'productionText2', 'We provide characters animation and environments, animation clean up, implementation into the game and VFXs development', NULL);
INSERT INTO `tager_page_fields` VALUES (91440, 3, 'productionMediaTop', '[[{\"name\":\"image\",\"value\":\"5d45671f-1f17-4c44-ae5b-73a17911cba6\"},{\"name\":\"videoId\",\"value\":\"O6h6Zr7yACw\"}],[{\"name\":\"image\",\"value\":\"78e5e92a-04e1-4de1-825d-43846fe59447\"},{\"name\":\"videoId\",\"value\":\"Sg6DIz70icQ\"}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (91441, 3, 'productionMediaTop[0]', NULL, 91440);
INSERT INTO `tager_page_fields` VALUES (91442, 3, 'image', '869', 91441);
INSERT INTO `tager_page_fields` VALUES (91443, 3, 'videoId', 'O6h6Zr7yACw', 91441);
INSERT INTO `tager_page_fields` VALUES (91444, 3, 'productionMediaTop[1]', NULL, 91440);
INSERT INTO `tager_page_fields` VALUES (91445, 3, 'image', '870', 91444);
INSERT INTO `tager_page_fields` VALUES (91446, 3, 'videoId', 'Sg6DIz70icQ', 91444);
INSERT INTO `tager_page_fields` VALUES (91447, 3, 'productionMediaBottom', '[[{\"name\":\"image\",\"value\":\"34e09a91-b73a-45e5-a779-ddf8fc213f6d\"},{\"name\":\"videoId\",\"value\":\"XMRIwIIElug\"}],[{\"name\":\"image\",\"value\":\"ce3a1305-fc66-4070-b897-22c88b00ea3a\"},{\"name\":\"videoId\",\"value\":\"rgZtB48MBeI\"}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (91448, 3, 'productionMediaBottom[0]', NULL, 91447);
INSERT INTO `tager_page_fields` VALUES (91449, 3, 'image', '871', 91448);
INSERT INTO `tager_page_fields` VALUES (91450, 3, 'videoId', 'XMRIwIIElug', 91448);
INSERT INTO `tager_page_fields` VALUES (91451, 3, 'productionMediaBottom[1]', NULL, 91447);
INSERT INTO `tager_page_fields` VALUES (91452, 3, 'image', '872', 91451);
INSERT INTO `tager_page_fields` VALUES (91453, 3, 'videoId', 'rgZtB48MBeI', 91451);
INSERT INTO `tager_page_fields` VALUES (91454, 3, 'productionButtonFirstLabel', 'I want the same!', NULL);
INSERT INTO `tager_page_fields` VALUES (91455, 3, 'productionButtonFirstUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (91456, 3, 'productionButtonFirstIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (91457, 3, 'productionButtonSecondLabel', 'i can do the same', NULL);
INSERT INTO `tager_page_fields` VALUES (91458, 3, 'productionButtonSecondUrl', 'https://furylion.net/', NULL);
INSERT INTO `tager_page_fields` VALUES (91459, 3, 'productionButtonSecondIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (91460, 3, 'portingId', 'porting', NULL);
INSERT INTO `tager_page_fields` VALUES (91461, 3, 'portingTitle', 'PORTING', NULL);
INSERT INTO `tager_page_fields` VALUES (91462, 3, 'portingText1', 'FuryLion provides services for porting games and applications to various platforms and systems', NULL);
INSERT INTO `tager_page_fields` VALUES (91463, 3, 'portingText2', 'Furylion provide porting both the engine between platforms and from native systems making the game cross-platform', NULL);
INSERT INTO `tager_page_fields` VALUES (91464, 3, 'portingText3', 'The studio has a wide range of rare DevKits which allows us start the task as quickly as possible and reduce technical risks', NULL);
INSERT INTO `tager_page_fields` VALUES (91465, 3, 'portingButtonFirstLabel', 'I want the same!', NULL);
INSERT INTO `tager_page_fields` VALUES (91466, 3, 'portingButtonFirstUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (91467, 3, 'portingButtonFirstIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (91468, 3, 'portingButtonSecondLabel', 'i can do the same', NULL);
INSERT INTO `tager_page_fields` VALUES (91469, 3, 'portingButtonSecondUrl', 'https://furylion.net/', NULL);
INSERT INTO `tager_page_fields` VALUES (91470, 3, 'portingButtonSecondIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (91471, 3, 'portingImage', '1029', NULL);
INSERT INTO `tager_page_fields` VALUES (91472, 3, 'developmentId', 'development', NULL);
INSERT INTO `tager_page_fields` VALUES (91473, 3, 'developmentTitle', '*Full stack* development', NULL);
INSERT INTO `tager_page_fields` VALUES (91474, 3, 'developmentItems', '[[{\"name\":\"image\",\"value\":\"6f684bf6-5ce2-405d-9f83-b1f590ca2b83\"},{\"name\":\"title\",\"value\":\"GOLFRIENDS\"},{\"name\":\"text\",\"value\":\"Golfriends is a colorful mini-golf game for the gamers of all ages and tastes. Play with yourself or up to 8 friends and use your phone\\u2019s gyroscope to control your golf club.\"},{\"name\":\"logos\",\"value\":[[{\"name\":\"image\",\"value\":\"59c21518-0d2f-45b8-87ac-c48b48cefb28\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/www.airconsole.com\\/play\\/sport-games\\/golfriends\"}]]}],[{\"name\":\"image\",\"value\":\"a7c06603-9e9d-4f7c-ae14-2432558c8b06\"},{\"name\":\"title\",\"value\":\"COLORS UNITED\"},{\"name\":\"text\",\"value\":\"Beautiful puzzle game about colors! A simple adventure that will challenge you!\\nRelaxing, addictive and super fun! The most colorful puzzle game with multiplayer mode!\"},{\"name\":\"logos\",\"value\":[[{\"name\":\"image\",\"value\":\"63eb5661-963d-45f7-856e-2fcaa5f6c4ab\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/apps.apple.com\\/us\\/app\\/colors-united\\/id984075115\"}],[{\"name\":\"image\",\"value\":\"34c0cb14-afba-4af4-978e-e1f56a78fa5b\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/play.google.com\\/store\\/apps\\/details?id=com.furylion.colorsunited&hl=ru&gl=US\"}]]}],[{\"name\":\"image\",\"value\":\"dc13505c-3c5b-4745-b270-58e290cd5061\"},{\"name\":\"title\",\"value\":\"DUCK STORY\"},{\"name\":\"text\",\"value\":\"Welcome to the world of fun educational games where you can explore, learn, train your brain, solve puzzles & play with cute little duck & animal friends!\"},{\"name\":\"logos\",\"value\":[[{\"name\":\"image\",\"value\":\"a2ef853e-713c-4a46-8076-f88a3b20e772\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/apps.apple.com\\/us\\/app\\/duck-story-world\\/id1525342957\"}],[{\"name\":\"image\",\"value\":\"aec9e6c9-f293-4a88-90ca-486d2ccaf46d\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/play.google.com\\/store\\/apps\\/details?id=com.tutotoons.app.duckstory&hl=ru&gl=US\"}]]}],[{\"name\":\"image\",\"value\":\"b61ef696-c583-4e88-8f75-fd70d50c1fef\"},{\"name\":\"title\",\"value\":\"RESTAURANT LIFE\"},{\"name\":\"text\",\"value\":\"Enjoy the chef experience with many mini games! Sort the fridge, wash dishes!\\nPrepare global favorites and serve them to customers. Use very simple mechanics like swipe, tap, drag and hold to play each mini game.\"},{\"name\":\"logos\",\"value\":[[{\"name\":\"image\",\"value\":\"c40e39c8-1b3a-4024-b9aa-dd9422d49ba2\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/apps.apple.com\\/us\\/app\\/restaurant-life-3d\\/id1527750006\"}],[{\"name\":\"image\",\"value\":\"3009fe06-56ba-474e-b4f2-993715da7add\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/play.google.com\\/store\\/apps\\/details?id=com.furylion.restaurantlife\"}]]}],[{\"name\":\"image\",\"value\":\"b4b16950-42e5-4bba-9e09-87542678b0f9\"},{\"name\":\"title\",\"value\":\"AIRPORT LIFE 3D\"},{\"name\":\"text\",\"value\":\"Grab your device, fasten your seat belt, stow your tray, and make sure your seat is in the upright position because Airport Life 3D  a colorful airport simulator that brings you the full experience of international air travel.\"},{\"name\":\"logos\",\"value\":[[{\"name\":\"image\",\"value\":\"b5ff7198-e88d-4e56-9db1-487f915f311c\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/apps.apple.com\\/us\\/app\\/airport-life-3d\\/id1552444624\"}],[{\"name\":\"image\",\"value\":\"a6932335-b656-44cc-b9f4-003f2deb9b46\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/play.google.com\\/store\\/apps\\/details?id=com.furylion.airportlife3d&hl=ru&gl=US\"}]]}],[{\"name\":\"image\",\"value\":\"fe1ede94-4236-4247-a614-5bbb5720ed37\"},{\"name\":\"title\",\"value\":\"BEATS RUNNER\"},{\"name\":\"text\",\"value\":\"Beats Runner is a bite-sized retro-cyberpunk rhythm action platform game. Rush forward and collect as much stars and coins as possible! Unlock unique characters for more fun, and level up for more challenges!\"},{\"name\":\"logos\",\"value\":[[{\"name\":\"image\",\"value\":\"ebcce70f-09ad-47cf-a990-b0a2316d493d\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/www.nintendo.com\\/games\\/detail\\/beats-runner-switch\\/\"}],[{\"name\":\"image\",\"value\":\"df478507-fd93-4165-a939-906f2671bfc1\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/play.google.com\\/store\\/apps\\/details?id=com.furylion.beatsrunner\"}]]}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (91475, 3, 'developmentItems[0]', NULL, 91474);
INSERT INTO `tager_page_fields` VALUES (91476, 3, 'image', '480', 91475);
INSERT INTO `tager_page_fields` VALUES (91477, 3, 'title', 'GOLFRIENDS', 91475);
INSERT INTO `tager_page_fields` VALUES (91478, 3, 'text', 'Golfriends is a colorful mini-golf game for the gamers of all ages and tastes. Play with yourself or up to 8 friends and use your phone’s gyroscope to control your golf club.', 91475);
INSERT INTO `tager_page_fields` VALUES (91479, 3, 'logos', '[[{\"name\":\"image\",\"value\":\"59c21518-0d2f-45b8-87ac-c48b48cefb28\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/www.airconsole.com\\/play\\/sport-games\\/golfriends\"}]]', 91475);
INSERT INTO `tager_page_fields` VALUES (91480, 3, 'logos[0]', NULL, 91479);
INSERT INTO `tager_page_fields` VALUES (91481, 3, 'image', '819', 91480);
INSERT INTO `tager_page_fields` VALUES (91482, 3, 'linkUrl', 'https://www.airconsole.com/play/sport-games/golfriends', 91480);
INSERT INTO `tager_page_fields` VALUES (91483, 3, 'developmentItems[1]', NULL, 91474);
INSERT INTO `tager_page_fields` VALUES (91484, 3, 'image', '481', 91483);
INSERT INTO `tager_page_fields` VALUES (91485, 3, 'title', 'COLORS UNITED', 91483);
INSERT INTO `tager_page_fields` VALUES (91486, 3, 'text', 'Beautiful puzzle game about colors! A simple adventure that will challenge you!\nRelaxing, addictive and super fun! The most colorful puzzle game with multiplayer mode!', 91483);
INSERT INTO `tager_page_fields` VALUES (91487, 3, 'logos', '[[{\"name\":\"image\",\"value\":\"63eb5661-963d-45f7-856e-2fcaa5f6c4ab\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/apps.apple.com\\/us\\/app\\/colors-united\\/id984075115\"}],[{\"name\":\"image\",\"value\":\"34c0cb14-afba-4af4-978e-e1f56a78fa5b\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/play.google.com\\/store\\/apps\\/details?id=com.furylion.colorsunited&hl=ru&gl=US\"}]]', 91483);
INSERT INTO `tager_page_fields` VALUES (91488, 3, 'logos[0]', NULL, 91487);
INSERT INTO `tager_page_fields` VALUES (91489, 3, 'image', '885', 91488);
INSERT INTO `tager_page_fields` VALUES (91490, 3, 'linkUrl', 'https://apps.apple.com/us/app/colors-united/id984075115', 91488);
INSERT INTO `tager_page_fields` VALUES (91491, 3, 'logos[1]', NULL, 91487);
INSERT INTO `tager_page_fields` VALUES (91492, 3, 'image', '952', 91491);
INSERT INTO `tager_page_fields` VALUES (91493, 3, 'linkUrl', 'https://play.google.com/store/apps/details?id=com.furylion.colorsunited&hl=ru&gl=US', 91491);
INSERT INTO `tager_page_fields` VALUES (91494, 3, 'developmentItems[2]', NULL, 91474);
INSERT INTO `tager_page_fields` VALUES (91495, 3, 'image', '482', 91494);
INSERT INTO `tager_page_fields` VALUES (91496, 3, 'title', 'DUCK STORY', 91494);
INSERT INTO `tager_page_fields` VALUES (91497, 3, 'text', 'Welcome to the world of fun educational games where you can explore, learn, train your brain, solve puzzles & play with cute little duck & animal friends!', 91494);
INSERT INTO `tager_page_fields` VALUES (91498, 3, 'logos', '[[{\"name\":\"image\",\"value\":\"a2ef853e-713c-4a46-8076-f88a3b20e772\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/apps.apple.com\\/us\\/app\\/duck-story-world\\/id1525342957\"}],[{\"name\":\"image\",\"value\":\"aec9e6c9-f293-4a88-90ca-486d2ccaf46d\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/play.google.com\\/store\\/apps\\/details?id=com.tutotoons.app.duckstory&hl=ru&gl=US\"}]]', 91494);
INSERT INTO `tager_page_fields` VALUES (91499, 3, 'logos[0]', NULL, 91498);
INSERT INTO `tager_page_fields` VALUES (91500, 3, 'image', '816', 91499);
INSERT INTO `tager_page_fields` VALUES (91501, 3, 'linkUrl', 'https://apps.apple.com/us/app/duck-story-world/id1525342957', 91499);
INSERT INTO `tager_page_fields` VALUES (91502, 3, 'logos[1]', NULL, 91498);
INSERT INTO `tager_page_fields` VALUES (91503, 3, 'image', '948', 91502);
INSERT INTO `tager_page_fields` VALUES (91504, 3, 'linkUrl', 'https://play.google.com/store/apps/details?id=com.tutotoons.app.duckstory&hl=ru&gl=US', 91502);
INSERT INTO `tager_page_fields` VALUES (91505, 3, 'developmentItems[3]', NULL, 91474);
INSERT INTO `tager_page_fields` VALUES (91506, 3, 'image', '822', 91505);
INSERT INTO `tager_page_fields` VALUES (91507, 3, 'title', 'RESTAURANT LIFE', 91505);
INSERT INTO `tager_page_fields` VALUES (91508, 3, 'text', 'Enjoy the chef experience with many mini games! Sort the fridge, wash dishes!\nPrepare global favorites and serve them to customers. Use very simple mechanics like swipe, tap, drag and hold to play each mini game.', 91505);
INSERT INTO `tager_page_fields` VALUES (91509, 3, 'logos', '[[{\"name\":\"image\",\"value\":\"c40e39c8-1b3a-4024-b9aa-dd9422d49ba2\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/apps.apple.com\\/us\\/app\\/restaurant-life-3d\\/id1527750006\"}],[{\"name\":\"image\",\"value\":\"3009fe06-56ba-474e-b4f2-993715da7add\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/play.google.com\\/store\\/apps\\/details?id=com.furylion.restaurantlife\"}]]', 91505);
INSERT INTO `tager_page_fields` VALUES (91510, 3, 'logos[0]', NULL, 91509);
INSERT INTO `tager_page_fields` VALUES (91511, 3, 'image', '823', 91510);
INSERT INTO `tager_page_fields` VALUES (91512, 3, 'linkUrl', 'https://apps.apple.com/us/app/restaurant-life-3d/id1527750006', 91510);
INSERT INTO `tager_page_fields` VALUES (91513, 3, 'logos[1]', NULL, 91509);
INSERT INTO `tager_page_fields` VALUES (91514, 3, 'image', '949', 91513);
INSERT INTO `tager_page_fields` VALUES (91515, 3, 'linkUrl', 'https://play.google.com/store/apps/details?id=com.furylion.restaurantlife', 91513);
INSERT INTO `tager_page_fields` VALUES (91516, 3, 'developmentItems[4]', NULL, 91474);
INSERT INTO `tager_page_fields` VALUES (91517, 3, 'image', '831', 91516);
INSERT INTO `tager_page_fields` VALUES (91518, 3, 'title', 'AIRPORT LIFE 3D', 91516);
INSERT INTO `tager_page_fields` VALUES (91519, 3, 'text', 'Grab your device, fasten your seat belt, stow your tray, and make sure your seat is in the upright position because Airport Life 3D  a colorful airport simulator that brings you the full experience of international air travel.', 91516);
INSERT INTO `tager_page_fields` VALUES (91520, 3, 'logos', '[[{\"name\":\"image\",\"value\":\"b5ff7198-e88d-4e56-9db1-487f915f311c\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/apps.apple.com\\/us\\/app\\/airport-life-3d\\/id1552444624\"}],[{\"name\":\"image\",\"value\":\"a6932335-b656-44cc-b9f4-003f2deb9b46\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/play.google.com\\/store\\/apps\\/details?id=com.furylion.airportlife3d&hl=ru&gl=US\"}]]', 91516);
INSERT INTO `tager_page_fields` VALUES (91521, 3, 'logos[0]', NULL, 91520);
INSERT INTO `tager_page_fields` VALUES (91522, 3, 'image', '826', 91521);
INSERT INTO `tager_page_fields` VALUES (91523, 3, 'linkUrl', 'https://apps.apple.com/us/app/airport-life-3d/id1552444624', 91521);
INSERT INTO `tager_page_fields` VALUES (91524, 3, 'logos[1]', NULL, 91520);
INSERT INTO `tager_page_fields` VALUES (91525, 3, 'image', '950', 91524);
INSERT INTO `tager_page_fields` VALUES (91526, 3, 'linkUrl', 'https://play.google.com/store/apps/details?id=com.furylion.airportlife3d&hl=ru&gl=US', 91524);
INSERT INTO `tager_page_fields` VALUES (91527, 3, 'developmentItems[5]', NULL, 91474);
INSERT INTO `tager_page_fields` VALUES (91528, 3, 'image', '828', 91527);
INSERT INTO `tager_page_fields` VALUES (91529, 3, 'title', 'BEATS RUNNER', 91527);
INSERT INTO `tager_page_fields` VALUES (91530, 3, 'text', 'Beats Runner is a bite-sized retro-cyberpunk rhythm action platform game. Rush forward and collect as much stars and coins as possible! Unlock unique characters for more fun, and level up for more challenges!', 91527);
INSERT INTO `tager_page_fields` VALUES (91531, 3, 'logos', '[[{\"name\":\"image\",\"value\":\"ebcce70f-09ad-47cf-a990-b0a2316d493d\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/www.nintendo.com\\/games\\/detail\\/beats-runner-switch\\/\"}],[{\"name\":\"image\",\"value\":\"df478507-fd93-4165-a939-906f2671bfc1\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/play.google.com\\/store\\/apps\\/details?id=com.furylion.beatsrunner\"}]]', 91527);
INSERT INTO `tager_page_fields` VALUES (91532, 3, 'logos[0]', NULL, 91531);
INSERT INTO `tager_page_fields` VALUES (91533, 3, 'image', '830', 91532);
INSERT INTO `tager_page_fields` VALUES (91534, 3, 'linkUrl', 'https://www.nintendo.com/games/detail/beats-runner-switch/', 91532);
INSERT INTO `tager_page_fields` VALUES (91535, 3, 'logos[1]', NULL, 91531);
INSERT INTO `tager_page_fields` VALUES (91536, 3, 'image', '951', 91535);
INSERT INTO `tager_page_fields` VALUES (91537, 3, 'linkUrl', 'https://play.google.com/store/apps/details?id=com.furylion.beatsrunner', 91535);
INSERT INTO `tager_page_fields` VALUES (91538, 3, 'outStaffingId', 'outstaffing', NULL);
INSERT INTO `tager_page_fields` VALUES (91539, 3, 'outStaffingTitle', 'OUTSTAFFING', NULL);
INSERT INTO `tager_page_fields` VALUES (91540, 3, 'outStaffingText1', 'FuryLion provides dedicated professionals and fully staffed teams to meet the challenges of our partners and customers.', NULL);
INSERT INTO `tager_page_fields` VALUES (91541, 3, 'outStaffingText2', 'Together with our specialists, partners get all our experience and technologies, accumulated over many years of work and development of the company.', NULL);
INSERT INTO `tager_page_fields` VALUES (91542, 3, 'outStaffingItems', '[[{\"name\":\"title\",\"value\":\"Game Design\"},{\"name\":\"tags\",\"value\":\"Pre-production analysis, Game concepts, GDD, Game scenarios and balance\"}],[{\"name\":\"title\",\"value\":\"Game  Programming\"},{\"name\":\"tags\",\"value\":\"Unity, Unreal, Cross-platform development, Server architecture\"}],[{\"name\":\"title\",\"value\":\"Art Production\"},{\"name\":\"tags\",\"value\":\"3D Modeling, 2D Art & UI Design, UI\\/UX, Animation\"}],[{\"name\":\"title\",\"value\":\"Live Operation\"},{\"name\":\"tags\",\"value\":\"QA and testing, Server administration, Game analytics, Comunity management, Monetization\"}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (91543, 3, 'outStaffingItems[0]', NULL, 91542);
INSERT INTO `tager_page_fields` VALUES (91544, 3, 'title', 'Game Design', 91543);
INSERT INTO `tager_page_fields` VALUES (91545, 3, 'tags', 'Pre-production analysis, Game concepts, GDD, Game scenarios and balance', 91543);
INSERT INTO `tager_page_fields` VALUES (91546, 3, 'outStaffingItems[1]', NULL, 91542);
INSERT INTO `tager_page_fields` VALUES (91547, 3, 'title', 'Game  Programming', 91546);
INSERT INTO `tager_page_fields` VALUES (91548, 3, 'tags', 'Unity, Unreal, Cross-platform development, Server architecture', 91546);
INSERT INTO `tager_page_fields` VALUES (91549, 3, 'outStaffingItems[2]', NULL, 91542);
INSERT INTO `tager_page_fields` VALUES (91550, 3, 'title', 'Art Production', 91549);
INSERT INTO `tager_page_fields` VALUES (91551, 3, 'tags', '3D Modeling, 2D Art & UI Design, UI/UX, Animation', 91549);
INSERT INTO `tager_page_fields` VALUES (91552, 3, 'outStaffingItems[3]', NULL, 91542);
INSERT INTO `tager_page_fields` VALUES (91553, 3, 'title', 'Live Operation', 91552);
INSERT INTO `tager_page_fields` VALUES (91554, 3, 'tags', 'QA and testing, Server administration, Game analytics, Comunity management, Monetization', 91552);
INSERT INTO `tager_page_fields` VALUES (91555, 3, 'coDevelopmentId', 'codev', NULL);
INSERT INTO `tager_page_fields` VALUES (91556, 3, 'coDevelopmentTitle', 'Co-development', NULL);
INSERT INTO `tager_page_fields` VALUES (91557, 3, 'coDevelopmentText1', 'Our incredible experience in content production opens up great opportunities for collaboration and experimentation.', NULL);
INSERT INTO `tager_page_fields` VALUES (91558, 3, 'coDevelopmentText2', 'The result of this successful collaboration was such wonderful games as Restaurant Life and Airport Life 3D. In total these games collected more than 20 million installs and that\'s just the beginning!', NULL);
INSERT INTO `tager_page_fields` VALUES (91559, 3, 'coDevelopmentText3', 'We are open to new proposals for cooperation on casual games! Let\'s make new hits together!', NULL);
INSERT INTO `tager_page_fields` VALUES (91560, 3, 'leftLogo', '218', NULL);
INSERT INTO `tager_page_fields` VALUES (91561, 3, 'rightLogo', '219', NULL);
INSERT INTO `tager_page_fields` VALUES (91562, 3, 'coDevelopmentButtonLabel', 'I want', NULL);
INSERT INTO `tager_page_fields` VALUES (91563, 3, 'coDevelopmentButtonUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (91564, 3, 'coDevelopmentButtonIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (91565, 3, 'adsId', 'playable', NULL);
INSERT INTO `tager_page_fields` VALUES (91566, 3, 'adsTitle', 'Playable ADS', NULL);
INSERT INTO `tager_page_fields` VALUES (91567, 3, 'adsText1', 'We create beautiful ads that are very close to original product and sometimes even surpass an original product.', NULL);
INSERT INTO `tager_page_fields` VALUES (91568, 3, 'adsText2', 'We produce high performance creatives and provide a lot of features to control and test each creative productivity.', NULL);
INSERT INTO `tager_page_fields` VALUES (91569, 3, 'adsText3', 'Our ads are adaptable to landscape and portrait screen orientation and work in any ad network.', NULL);
INSERT INTO `tager_page_fields` VALUES (91570, 3, 'adsImages', '230,231,803,804,805,806,807,808,809,810,811,891,892,893,894,895,896,897,898', NULL);
INSERT INTO `tager_page_fields` VALUES (91571, 3, 'adsButtonLabel', 'MORE INFO', NULL);
INSERT INTO `tager_page_fields` VALUES (91572, 3, 'adsButtonUrl', '#ads', NULL);
INSERT INTO `tager_page_fields` VALUES (91573, 3, 'adsButtonIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (91690, 2, 'headId', 'vacancies', NULL);
INSERT INTO `tager_page_fields` VALUES (91691, 2, 'headImage', '157', NULL);
INSERT INTO `tager_page_fields` VALUES (91692, 2, 'teamLifeId', 'team-life', NULL);
INSERT INTO `tager_page_fields` VALUES (91693, 2, 'teamLifeTitle', 'We connect great minds  to create brilliant projects', NULL);
INSERT INTO `tager_page_fields` VALUES (91694, 2, 'teamLifeDescription', '<p>Our company is 130+ highly qualified specialists who work in 3 offices and remotely - from different places of our planet. Our team is our path to success!</p>', NULL);
INSERT INTO `tager_page_fields` VALUES (91695, 2, 'teamLifeButton', '{\"label\":\"LOOK AT\",\"link\":\"https:\\/\\/www.instagram.com\\/furylion_group\\/\",\"isNewTab\":true}', NULL);
INSERT INTO `tager_page_fields` VALUES (91696, 2, 'formTitle', 'Send us a few words about yourself and attach your CV', NULL);
INSERT INTO `tager_page_fields` VALUES (91697, 2, 'buttonTitle', 'Полная', NULL);
INSERT INTO `tager_page_fields` VALUES (93096, 4, 'headAdsId', 'playable-ads', NULL);
INSERT INTO `tager_page_fields` VALUES (93097, 4, 'headAdsText', 'See how fun it works', NULL);
INSERT INTO `tager_page_fields` VALUES (93098, 4, 'headAdsItemsTop', '[[{\"name\":\"image\",\"value\":\"f31a1205-d071-4ca1-b12d-9110f2b67d80\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/plunger-hero-voodoo\\/demo.html\"},{\"name\":\"titleGame\",\"value\":\"Plunger Hero\"},{\"name\":\"descriptionGame\",\"value\":\"by Voodoo\"}],[{\"name\":\"image\",\"value\":\"92fd21e8-1021-4bee-bc2b-2a1eadafcc07\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/idle-mechanic-azur-games\\/option1.html\"},{\"name\":\"titleGame\",\"value\":\"Idle Mechanic Manager\"},{\"name\":\"descriptionGame\",\"value\":\"by Azur Games\"}],[{\"name\":\"image\",\"value\":\"15bad40e-9a00-4b5e-8fd4-69a95edd7066\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/hit-the-roof-azur-games\\/demo.html\"},{\"name\":\"titleGame\",\"value\":\"Hit The Roof\"},{\"name\":\"descriptionGame\",\"value\":\"by Azur Games\"}],[{\"name\":\"image\",\"value\":\"0efed1e1-894c-4cff-8d97-1b9fc9cda3b2\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/playable-sandbox\\/sandballs\\/sandballs.html\"},{\"name\":\"titleGame\",\"value\":\"Sand Balls\"},{\"name\":\"descriptionGame\",\"value\":\"by SayGames\"}],[{\"name\":\"image\",\"value\":\"5c7e050c-2f87-41f8-af1e-79227c812847\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/pixel-gun-3d\\/facebook\\/pg3d_option_1.html\"},{\"name\":\"titleGame\",\"value\":\"Pixel Gun 3D\"},{\"name\":\"descriptionGame\",\"value\":null}],[{\"name\":\"image\",\"value\":\"ceb4af81-1c97-48b3-b703-cd82892fefc0\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/tricky-castle\\/level_1_chest_endcard.html\"},{\"name\":\"titleGame\",\"value\":\"Tricky castle\"},{\"name\":\"descriptionGame\",\"value\":\"by Azur Games\"}],[{\"name\":\"image\",\"value\":\"532c8507-2ea7-407b-94cf-bf0b6dabd302\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/tear-the-cloth\\/donut.html\"},{\"name\":\"titleGame\",\"value\":\"Tear the cloth\"},{\"name\":\"descriptionGame\",\"value\":\"by Azur Games\"}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (93099, 4, 'headAdsItemsTop[0]', NULL, 93098);
INSERT INTO `tager_page_fields` VALUES (93100, 4, 'image', '774', 93099);
INSERT INTO `tager_page_fields` VALUES (93101, 4, 'linkUrl', 'https://playableads.pages.furylion.net/plunger-hero-voodoo/demo.html', 93099);
INSERT INTO `tager_page_fields` VALUES (93102, 4, 'titleGame', 'Plunger Hero', 93099);
INSERT INTO `tager_page_fields` VALUES (93103, 4, 'descriptionGame', 'by Voodoo', 93099);
INSERT INTO `tager_page_fields` VALUES (93104, 4, 'headAdsItemsTop[1]', NULL, 93098);
INSERT INTO `tager_page_fields` VALUES (93105, 4, 'image', '762', 93104);
INSERT INTO `tager_page_fields` VALUES (93106, 4, 'linkUrl', 'https://playableads.pages.furylion.net/idle-mechanic-azur-games/option1.html', 93104);
INSERT INTO `tager_page_fields` VALUES (93107, 4, 'titleGame', 'Idle Mechanic Manager', 93104);
INSERT INTO `tager_page_fields` VALUES (93108, 4, 'descriptionGame', 'by Azur Games', 93104);
INSERT INTO `tager_page_fields` VALUES (93109, 4, 'headAdsItemsTop[2]', NULL, 93098);
INSERT INTO `tager_page_fields` VALUES (93110, 4, 'image', '763', 93109);
INSERT INTO `tager_page_fields` VALUES (93111, 4, 'linkUrl', 'https://playableads.pages.furylion.net/hit-the-roof-azur-games/demo.html', 93109);
INSERT INTO `tager_page_fields` VALUES (93112, 4, 'titleGame', 'Hit The Roof', 93109);
INSERT INTO `tager_page_fields` VALUES (93113, 4, 'descriptionGame', 'by Azur Games', 93109);
INSERT INTO `tager_page_fields` VALUES (93114, 4, 'headAdsItemsTop[3]', NULL, 93098);
INSERT INTO `tager_page_fields` VALUES (93115, 4, 'image', '765', 93114);
INSERT INTO `tager_page_fields` VALUES (93116, 4, 'linkUrl', 'https://playableads.pages.furylion.net/playable-sandbox/sandballs/sandballs.html', 93114);
INSERT INTO `tager_page_fields` VALUES (93117, 4, 'titleGame', 'Sand Balls', 93114);
INSERT INTO `tager_page_fields` VALUES (93118, 4, 'descriptionGame', 'by SayGames', 93114);
INSERT INTO `tager_page_fields` VALUES (93119, 4, 'headAdsItemsTop[4]', NULL, 93098);
INSERT INTO `tager_page_fields` VALUES (93120, 4, 'image', '766', 93119);
INSERT INTO `tager_page_fields` VALUES (93121, 4, 'linkUrl', 'https://playableads.pages.furylion.net/pixel-gun-3d/facebook/pg3d_option_1.html', 93119);
INSERT INTO `tager_page_fields` VALUES (93122, 4, 'titleGame', 'Pixel Gun 3D', 93119);
INSERT INTO `tager_page_fields` VALUES (93123, 4, 'descriptionGame', NULL, 93119);
INSERT INTO `tager_page_fields` VALUES (93124, 4, 'headAdsItemsTop[5]', NULL, 93098);
INSERT INTO `tager_page_fields` VALUES (93125, 4, 'image', '775', 93124);
INSERT INTO `tager_page_fields` VALUES (93126, 4, 'linkUrl', 'https://playableads.pages.furylion.net/tricky-castle/level_1_chest_endcard.html', 93124);
INSERT INTO `tager_page_fields` VALUES (93127, 4, 'titleGame', 'Tricky castle', 93124);
INSERT INTO `tager_page_fields` VALUES (93128, 4, 'descriptionGame', 'by Azur Games', 93124);
INSERT INTO `tager_page_fields` VALUES (93129, 4, 'headAdsItemsTop[6]', NULL, 93098);
INSERT INTO `tager_page_fields` VALUES (93130, 4, 'image', '942', 93129);
INSERT INTO `tager_page_fields` VALUES (93131, 4, 'linkUrl', 'https://playableads.pages.furylion.net/tear-the-cloth/donut.html', 93129);
INSERT INTO `tager_page_fields` VALUES (93132, 4, 'titleGame', 'Tear the cloth', 93129);
INSERT INTO `tager_page_fields` VALUES (93133, 4, 'descriptionGame', 'by Azur Games', 93129);
INSERT INTO `tager_page_fields` VALUES (93134, 4, 'headAdsItemsBottom', '[[{\"name\":\"image\",\"value\":\"fce769fb-33a0-47dc-a6e7-9e5d25bd4420\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/sorting-beads-azur-games\\/banana.html\"},{\"name\":\"titleGame\",\"value\":\"Bead Sort\"},{\"name\":\"descriptionGame\",\"value\":\"by Azur Games\"}],[{\"name\":\"image\",\"value\":\"a9daebff-14ba-44e4-81a4-4256d6392788\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/draw-joust-voodoo\\/demo.html\"},{\"name\":\"titleGame\",\"value\":\"Draw Joust\"},{\"name\":\"descriptionGame\",\"value\":\"by Voodoo\"}],[{\"name\":\"image\",\"value\":\"665c15a4-015f-4ac8-8c3b-e37775cc256e\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/playable-sandbox\\/turbostars\\/public_options_single_2.html\"},{\"name\":\"titleGame\",\"value\":\"Turbo Stars\"},{\"name\":\"descriptionGame\",\"value\":\"by SayGames\"}],[{\"name\":\"image\",\"value\":\"9e70b462-d5fa-4ac6-afcc-fc0e06ffb7e1\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/hs-playable2006-playrix\\/demo.html\"},{\"name\":\"titleGame\",\"value\":\"Homescapes\"},{\"name\":\"descriptionGame\",\"value\":\"by Playrix\"}],[{\"name\":\"image\",\"value\":\"7d5a29fe-9b0a-491b-9b8d-957f66d93f8d\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/playrix-playables\\/production\\/Pack5\\/ws_104.html\"},{\"name\":\"titleGame\",\"value\":\"Wildscapes\"},{\"name\":\"descriptionGame\",\"value\":\"by Playrix\"}],[{\"name\":\"image\",\"value\":\"0d35c68e-404c-4d0f-bedc-fbc82c3a785b\"},{\"name\":\"linkUrl\",\"value\":\"https:\\/\\/playableads.pages.furylion.net\\/restaurant-life-playable\\/\"},{\"name\":\"titleGame\",\"value\":\"Restaurant Life 3D\"},{\"name\":\"descriptionGame\",\"value\":\"by FuryLion\"}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (93135, 4, 'headAdsItemsBottom[0]', NULL, 93134);
INSERT INTO `tager_page_fields` VALUES (93136, 4, 'image', '777', 93135);
INSERT INTO `tager_page_fields` VALUES (93137, 4, 'linkUrl', 'https://playableads.pages.furylion.net/sorting-beads-azur-games/banana.html', 93135);
INSERT INTO `tager_page_fields` VALUES (93138, 4, 'titleGame', 'Bead Sort', 93135);
INSERT INTO `tager_page_fields` VALUES (93139, 4, 'descriptionGame', 'by Azur Games', 93135);
INSERT INTO `tager_page_fields` VALUES (93140, 4, 'headAdsItemsBottom[1]', NULL, 93134);
INSERT INTO `tager_page_fields` VALUES (93141, 4, 'image', '769', 93140);
INSERT INTO `tager_page_fields` VALUES (93142, 4, 'linkUrl', 'https://playableads.pages.furylion.net/draw-joust-voodoo/demo.html', 93140);
INSERT INTO `tager_page_fields` VALUES (93143, 4, 'titleGame', 'Draw Joust', 93140);
INSERT INTO `tager_page_fields` VALUES (93144, 4, 'descriptionGame', 'by Voodoo', 93140);
INSERT INTO `tager_page_fields` VALUES (93145, 4, 'headAdsItemsBottom[2]', NULL, 93134);
INSERT INTO `tager_page_fields` VALUES (93146, 4, 'image', '770', 93145);
INSERT INTO `tager_page_fields` VALUES (93147, 4, 'linkUrl', 'https://playableads.pages.furylion.net/playable-sandbox/turbostars/public_options_single_2.html', 93145);
INSERT INTO `tager_page_fields` VALUES (93148, 4, 'titleGame', 'Turbo Stars', 93145);
INSERT INTO `tager_page_fields` VALUES (93149, 4, 'descriptionGame', 'by SayGames', 93145);
INSERT INTO `tager_page_fields` VALUES (93150, 4, 'headAdsItemsBottom[3]', NULL, 93134);
INSERT INTO `tager_page_fields` VALUES (93151, 4, 'image', '771', 93150);
INSERT INTO `tager_page_fields` VALUES (93152, 4, 'linkUrl', 'https://playableads.pages.furylion.net/hs-playable2006-playrix/demo.html', 93150);
INSERT INTO `tager_page_fields` VALUES (93153, 4, 'titleGame', 'Homescapes', 93150);
INSERT INTO `tager_page_fields` VALUES (93154, 4, 'descriptionGame', 'by Playrix', 93150);
INSERT INTO `tager_page_fields` VALUES (93155, 4, 'headAdsItemsBottom[4]', NULL, 93134);
INSERT INTO `tager_page_fields` VALUES (93156, 4, 'image', '772', 93155);
INSERT INTO `tager_page_fields` VALUES (93157, 4, 'linkUrl', 'https://playableads.pages.furylion.net/playrix-playables/production/Pack5/ws_104.html', 93155);
INSERT INTO `tager_page_fields` VALUES (93158, 4, 'titleGame', 'Wildscapes', 93155);
INSERT INTO `tager_page_fields` VALUES (93159, 4, 'descriptionGame', 'by Playrix', 93155);
INSERT INTO `tager_page_fields` VALUES (93160, 4, 'headAdsItemsBottom[5]', NULL, 93134);
INSERT INTO `tager_page_fields` VALUES (93161, 4, 'image', '773', 93160);
INSERT INTO `tager_page_fields` VALUES (93162, 4, 'linkUrl', 'https://playableads.pages.furylion.net/restaurant-life-playable/', 93160);
INSERT INTO `tager_page_fields` VALUES (93163, 4, 'titleGame', 'Restaurant Life 3D', 93160);
INSERT INTO `tager_page_fields` VALUES (93164, 4, 'descriptionGame', 'by FuryLion', 93160);
INSERT INTO `tager_page_fields` VALUES (93165, 4, 'advantagesId', 'advantages', NULL);
INSERT INTO `tager_page_fields` VALUES (93166, 4, 'advantagesTitle', 'advantages', NULL);
INSERT INTO `tager_page_fields` VALUES (93167, 4, 'advantagesText1', 'We create beautiful ads that are very close to original product and sometimes even surpass an original product.', NULL);
INSERT INTO `tager_page_fields` VALUES (93168, 4, 'advantagesText2', 'We produce high performance creatives and provide a lot of features to control and test each creative productivity.', NULL);
INSERT INTO `tager_page_fields` VALUES (93169, 4, 'advantagesText3', 'Our ads are adaptable to landscape and portrait screen orientation and work in any ad network.', NULL);
INSERT INTO `tager_page_fields` VALUES (93170, 4, 'advantagesList', '<ul><li>Better Engagement</li><li>Bigger Conversion</li><li>Lower CPI</li></ul><p>&nbsp;</p><ul><li>More targeted audience</li><li>A clearer display of the functionality</li><li>Higher ROI</li></ul>', NULL);
INSERT INTO `tager_page_fields` VALUES (93171, 4, 'rateMainId', 'ctr', NULL);
INSERT INTO `tager_page_fields` VALUES (93172, 4, 'rateMainTitle', 'CTR BIGGER', NULL);
INSERT INTO `tager_page_fields` VALUES (93173, 4, 'rateText', 'Boost the conversion rate in your ad campaigns, lowering your CPA (Cost Per Acquisition) and CPC (Cost Per Click). They drive the most engaged users, deliver higher eCPM to the publishers.', NULL);
INSERT INTO `tager_page_fields` VALUES (93174, 4, 'rateLeftTitle', 'Regular ADS', NULL);
INSERT INTO `tager_page_fields` VALUES (93175, 4, 'rateLeftText', '1,5%', NULL);
INSERT INTO `tager_page_fields` VALUES (93176, 4, 'rateRightTitle', 'Playable ADS', NULL);
INSERT INTO `tager_page_fields` VALUES (93177, 4, 'rateRightText', '>5.0%', NULL);
INSERT INTO `tager_page_fields` VALUES (93178, 4, 'rateButtonLabel', 'order Playable ADS', NULL);
INSERT INTO `tager_page_fields` VALUES (93179, 4, 'rateButtonUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (93180, 4, 'cpiId', 'cpi', NULL);
INSERT INTO `tager_page_fields` VALUES (93181, 4, 'cpiTitle', 'CPI LOWER', NULL);
INSERT INTO `tager_page_fields` VALUES (93182, 4, 'cpiImage', '256', NULL);
INSERT INTO `tager_page_fields` VALUES (93183, 4, 'cpiButtonLabel', 'Save my money', NULL);
INSERT INTO `tager_page_fields` VALUES (93184, 4, 'cpiButtonUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (93185, 4, 'reengagementId', 'reengagement', NULL);
INSERT INTO `tager_page_fields` VALUES (93186, 4, 'reengagementTitle', 'reengagement', NULL);
INSERT INTO `tager_page_fields` VALUES (93187, 4, 'reengagementText1', 'Re-engage old players with interesting updates in your game. Save marketing budgets on it!', NULL);
INSERT INTO `tager_page_fields` VALUES (93188, 4, 'reengagementText2', 'Show updated functionality. Let the player see how you improved the game while he was not playing!', NULL);
INSERT INTO `tager_page_fields` VALUES (93189, 4, 'reengagementText3', 'Take full advantage of flexible playable customization to hook the player with fond memories of your game!', NULL);
INSERT INTO `tager_page_fields` VALUES (93190, 4, 'reengagementButtonLabel', 'order Playable ADS', NULL);
INSERT INTO `tager_page_fields` VALUES (93191, 4, 'reengagementButtonUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (93192, 4, 'frameworkId', 'frameworks', NULL);
INSERT INTO `tager_page_fields` VALUES (93193, 4, 'frameworkTitle', 'frameworks', NULL);
INSERT INTO `tager_page_fields` VALUES (93194, 4, 'frameworkText', 'Boost the conversion rate in your ad campaigns, lowering your CPA (Cost Per Acquisition) and CPC (Cost Per Click). They drive the most engaged users, deliver higher eCPM to the publishers.', NULL);
INSERT INTO `tager_page_fields` VALUES (93195, 4, 'frameworkItems', '[[{\"name\":\"title\",\"value\":\"2d\\/3d\"},{\"name\":\"topText\",\"value\":\"PixiJS (WebGL, Canvas)\"},{\"name\":\"bottomText\",\"value\":\"Three.js (WebGL)\"}],[{\"name\":\"title\",\"value\":\"Physics\"},{\"name\":\"topText\",\"value\":\"Box2d.js, Matter.js, Plank.js\"},{\"name\":\"bottomText\",\"value\":\"Oimo.js, Cannon.js, Ammo.js\"}],[{\"name\":\"title\",\"value\":\"Spine animation\"},{\"name\":\"topText\",\"value\":\"Spine, Tween.js\"},{\"name\":\"bottomText\",\"value\":\"Tween.js\"}],[{\"name\":\"title\",\"value\":\"Sound\"},{\"name\":\"topText\",\"value\":\"Howler.js\"},{\"name\":\"bottomText\",\"value\":null}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (93196, 4, 'frameworkItems[0]', NULL, 93195);
INSERT INTO `tager_page_fields` VALUES (93197, 4, 'title', '2d/3d', 93196);
INSERT INTO `tager_page_fields` VALUES (93198, 4, 'topText', 'PixiJS (WebGL, Canvas)', 93196);
INSERT INTO `tager_page_fields` VALUES (93199, 4, 'bottomText', 'Three.js (WebGL)', 93196);
INSERT INTO `tager_page_fields` VALUES (93200, 4, 'frameworkItems[1]', NULL, 93195);
INSERT INTO `tager_page_fields` VALUES (93201, 4, 'title', 'Physics', 93200);
INSERT INTO `tager_page_fields` VALUES (93202, 4, 'topText', 'Box2d.js, Matter.js, Plank.js', 93200);
INSERT INTO `tager_page_fields` VALUES (93203, 4, 'bottomText', 'Oimo.js, Cannon.js, Ammo.js', 93200);
INSERT INTO `tager_page_fields` VALUES (93204, 4, 'frameworkItems[2]', NULL, 93195);
INSERT INTO `tager_page_fields` VALUES (93205, 4, 'title', 'Spine animation', 93204);
INSERT INTO `tager_page_fields` VALUES (93206, 4, 'topText', 'Spine, Tween.js', 93204);
INSERT INTO `tager_page_fields` VALUES (93207, 4, 'bottomText', 'Tween.js', 93204);
INSERT INTO `tager_page_fields` VALUES (93208, 4, 'frameworkItems[3]', NULL, 93195);
INSERT INTO `tager_page_fields` VALUES (93209, 4, 'title', 'Sound', 93208);
INSERT INTO `tager_page_fields` VALUES (93210, 4, 'topText', 'Howler.js', 93208);
INSERT INTO `tager_page_fields` VALUES (93211, 4, 'bottomText', NULL, 93208);
INSERT INTO `tager_page_fields` VALUES (93212, 4, 'frameworkButtonLabel', 'order Playable ADS', NULL);
INSERT INTO `tager_page_fields` VALUES (93213, 4, 'frameworkButtonUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (93214, 4, 'networksId', NULL, NULL);
INSERT INTO `tager_page_fields` VALUES (93215, 4, 'networksTitle', 'Support All  Ad Networks', NULL);
INSERT INTO `tager_page_fields` VALUES (93216, 4, 'networksFirstGallery', '239,240,241,242', NULL);
INSERT INTO `tager_page_fields` VALUES (93217, 4, 'networksSecondGallery', '245,243,244,246', NULL);
INSERT INTO `tager_page_fields` VALUES (93218, 4, 'editorId', 'editor', NULL);
INSERT INTO `tager_page_fields` VALUES (93219, 4, 'editorTitle', 'Playable ADS  editor', NULL);
INSERT INTO `tager_page_fields` VALUES (93220, 4, 'editorText', 'Boost the conversion rate in your ad campaigns, lowering your CPA (Cost Per Acquisition) and CPC (Cost Per Click). They drive the most engaged users, deliver higher eCPM to the publishers.', NULL);
INSERT INTO `tager_page_fields` VALUES (93221, 4, 'editorImage', '238', NULL);
INSERT INTO `tager_page_fields` VALUES (93222, 4, 'editorButtonLabel', 'order Playable ADS', NULL);
INSERT INTO `tager_page_fields` VALUES (93223, 4, 'editorButtonUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (93224, 4, 'doYouWantId', 'order-ads', NULL);
INSERT INTO `tager_page_fields` VALUES (93225, 4, 'doYouWantTitle', 'do you want to play more?', NULL);
INSERT INTO `tager_page_fields` VALUES (93226, 4, 'doYouWantFirstGallery', '[[{\"name\":\"image\",\"value\":\"b3cb2bf0-1237-43d9-a6b7-38543478eb33\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"0102dd81-d274-4f70-afbc-0f3596549b51\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"6bc950fe-9328-4626-8254-f16250bff89d\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"443b4c4b-fabe-415d-92ae-559492d030fb\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"18eb1293-8bba-4a50-8b01-df4023667e0e\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"6da6e94e-8565-4cba-9187-56f691f8b19b\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"9b69e830-d309-4392-9b13-c4cdd12b2841\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"e16424c9-78dc-4024-9de9-1c0230e6c831\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (93227, 4, 'doYouWantFirstGallery[0]', NULL, 93226);
INSERT INTO `tager_page_fields` VALUES (93228, 4, 'image', '779', 93227);
INSERT INTO `tager_page_fields` VALUES (93229, 4, 'action', 'scroll', 93227);
INSERT INTO `tager_page_fields` VALUES (93230, 4, 'link', '#contacts', 93227);
INSERT INTO `tager_page_fields` VALUES (93231, 4, 'doYouWantFirstGallery[1]', NULL, 93226);
INSERT INTO `tager_page_fields` VALUES (93232, 4, 'image', '787', 93231);
INSERT INTO `tager_page_fields` VALUES (93233, 4, 'action', 'scroll', 93231);
INSERT INTO `tager_page_fields` VALUES (93234, 4, 'link', '#contacts', 93231);
INSERT INTO `tager_page_fields` VALUES (93235, 4, 'doYouWantFirstGallery[2]', NULL, 93226);
INSERT INTO `tager_page_fields` VALUES (93236, 4, 'image', '786', 93235);
INSERT INTO `tager_page_fields` VALUES (93237, 4, 'action', 'scroll', 93235);
INSERT INTO `tager_page_fields` VALUES (93238, 4, 'link', '#contacts', 93235);
INSERT INTO `tager_page_fields` VALUES (93239, 4, 'doYouWantFirstGallery[3]', NULL, 93226);
INSERT INTO `tager_page_fields` VALUES (93240, 4, 'image', '802', 93239);
INSERT INTO `tager_page_fields` VALUES (93241, 4, 'action', 'scroll', 93239);
INSERT INTO `tager_page_fields` VALUES (93242, 4, 'link', '#contacts', 93239);
INSERT INTO `tager_page_fields` VALUES (93243, 4, 'doYouWantFirstGallery[4]', NULL, 93226);
INSERT INTO `tager_page_fields` VALUES (93244, 4, 'image', '782', 93243);
INSERT INTO `tager_page_fields` VALUES (93245, 4, 'action', 'scroll', 93243);
INSERT INTO `tager_page_fields` VALUES (93246, 4, 'link', '#contacts', 93243);
INSERT INTO `tager_page_fields` VALUES (93247, 4, 'doYouWantFirstGallery[5]', NULL, 93226);
INSERT INTO `tager_page_fields` VALUES (93248, 4, 'image', '783', 93247);
INSERT INTO `tager_page_fields` VALUES (93249, 4, 'action', 'scroll', 93247);
INSERT INTO `tager_page_fields` VALUES (93250, 4, 'link', '#contacts', 93247);
INSERT INTO `tager_page_fields` VALUES (93251, 4, 'doYouWantFirstGallery[6]', NULL, 93226);
INSERT INTO `tager_page_fields` VALUES (93252, 4, 'image', '784', 93251);
INSERT INTO `tager_page_fields` VALUES (93253, 4, 'action', 'scroll', 93251);
INSERT INTO `tager_page_fields` VALUES (93254, 4, 'link', '#contacts', 93251);
INSERT INTO `tager_page_fields` VALUES (93255, 4, 'doYouWantFirstGallery[7]', NULL, 93226);
INSERT INTO `tager_page_fields` VALUES (93256, 4, 'image', '785', 93255);
INSERT INTO `tager_page_fields` VALUES (93257, 4, 'action', 'scroll', 93255);
INSERT INTO `tager_page_fields` VALUES (93258, 4, 'link', '#contacts', 93255);
INSERT INTO `tager_page_fields` VALUES (93259, 4, 'doYouWantSecondGallery', '[[{\"name\":\"image\",\"value\":\"070eac0c-7273-4aeb-9bc8-1cd5be7bbb05\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"58983ef3-f116-422a-848d-d8fc194f2735\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"67365a4a-d6b9-4561-bf06-93ba3e422830\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"e975b5be-d1c7-44e6-bd90-7639e09ae545\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"422a9cb2-ea8c-4d5d-b35c-27a30f3edae4\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"9a4c594e-4b12-423c-93bc-e641453f83b7\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"cbccc8cf-67bc-47bf-9a5b-769d8e929585\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"7034b002-fcfc-4786-a617-6b22022a0f6a\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (93260, 4, 'doYouWantSecondGallery[0]', NULL, 93259);
INSERT INTO `tager_page_fields` VALUES (93261, 4, 'image', '788', 93260);
INSERT INTO `tager_page_fields` VALUES (93262, 4, 'action', 'scroll', 93260);
INSERT INTO `tager_page_fields` VALUES (93263, 4, 'link', '#contacts', 93260);
INSERT INTO `tager_page_fields` VALUES (93264, 4, 'doYouWantSecondGallery[1]', NULL, 93259);
INSERT INTO `tager_page_fields` VALUES (93265, 4, 'image', '801', 93264);
INSERT INTO `tager_page_fields` VALUES (93266, 4, 'action', 'scroll', 93264);
INSERT INTO `tager_page_fields` VALUES (93267, 4, 'link', '#contacts', 93264);
INSERT INTO `tager_page_fields` VALUES (93268, 4, 'doYouWantSecondGallery[2]', NULL, 93259);
INSERT INTO `tager_page_fields` VALUES (93269, 4, 'image', '800', 93268);
INSERT INTO `tager_page_fields` VALUES (93270, 4, 'action', 'scroll', 93268);
INSERT INTO `tager_page_fields` VALUES (93271, 4, 'link', '#contacts', 93268);
INSERT INTO `tager_page_fields` VALUES (93272, 4, 'doYouWantSecondGallery[3]', NULL, 93259);
INSERT INTO `tager_page_fields` VALUES (93273, 4, 'image', '812', 93272);
INSERT INTO `tager_page_fields` VALUES (93274, 4, 'action', 'scroll', 93272);
INSERT INTO `tager_page_fields` VALUES (93275, 4, 'link', '#contacts', 93272);
INSERT INTO `tager_page_fields` VALUES (93276, 4, 'doYouWantSecondGallery[4]', NULL, 93259);
INSERT INTO `tager_page_fields` VALUES (93277, 4, 'image', '799', 93276);
INSERT INTO `tager_page_fields` VALUES (93278, 4, 'action', 'scroll', 93276);
INSERT INTO `tager_page_fields` VALUES (93279, 4, 'link', '#contacts', 93276);
INSERT INTO `tager_page_fields` VALUES (93280, 4, 'doYouWantSecondGallery[5]', NULL, 93259);
INSERT INTO `tager_page_fields` VALUES (93281, 4, 'image', '405', 93280);
INSERT INTO `tager_page_fields` VALUES (93282, 4, 'action', 'scroll', 93280);
INSERT INTO `tager_page_fields` VALUES (93283, 4, 'link', '#contacts', 93280);
INSERT INTO `tager_page_fields` VALUES (93284, 4, 'doYouWantSecondGallery[6]', NULL, 93259);
INSERT INTO `tager_page_fields` VALUES (93285, 4, 'image', '798', 93284);
INSERT INTO `tager_page_fields` VALUES (93286, 4, 'action', 'scroll', 93284);
INSERT INTO `tager_page_fields` VALUES (93287, 4, 'link', '#contacts', 93284);
INSERT INTO `tager_page_fields` VALUES (93288, 4, 'doYouWantSecondGallery[7]', NULL, 93259);
INSERT INTO `tager_page_fields` VALUES (93289, 4, 'image', '407', 93288);
INSERT INTO `tager_page_fields` VALUES (93290, 4, 'action', 'scroll', 93288);
INSERT INTO `tager_page_fields` VALUES (93291, 4, 'link', '#contacts', 93288);
INSERT INTO `tager_page_fields` VALUES (93292, 4, 'doYouWantThirdGallery', '[[{\"name\":\"image\",\"value\":\"ade620e5-570b-4ed3-876b-befb9fd7db1a\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"7567c92c-9246-47c2-b1e2-bfbb102cf61a\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"92b1d3c1-01a0-4fae-b040-2a33ad34ba55\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"fc2bbdd8-b1e4-424c-892e-8ef44af11ad8\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"2a1401e5-2c3f-4fd5-96f5-f49d5757f533\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"6d2c2a45-06e8-44d8-8417-9eace3c080e0\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"5b0aff76-e33f-457b-aea7-3c0f5252b23a\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}],[{\"name\":\"image\",\"value\":\"37c95a80-7d6c-4111-950f-8be2759507be\"},{\"name\":\"action\",\"value\":\"scroll\"},{\"name\":\"link\",\"value\":\"#contacts\"}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (93293, 4, 'doYouWantThirdGallery[0]', NULL, 93292);
INSERT INTO `tager_page_fields` VALUES (93294, 4, 'image', '797', 93293);
INSERT INTO `tager_page_fields` VALUES (93295, 4, 'action', 'scroll', 93293);
INSERT INTO `tager_page_fields` VALUES (93296, 4, 'link', '#contacts', 93293);
INSERT INTO `tager_page_fields` VALUES (93297, 4, 'doYouWantThirdGallery[1]', NULL, 93292);
INSERT INTO `tager_page_fields` VALUES (93298, 4, 'image', '795', 93297);
INSERT INTO `tager_page_fields` VALUES (93299, 4, 'action', 'scroll', 93297);
INSERT INTO `tager_page_fields` VALUES (93300, 4, 'link', '#contacts', 93297);
INSERT INTO `tager_page_fields` VALUES (93301, 4, 'doYouWantThirdGallery[2]', NULL, 93292);
INSERT INTO `tager_page_fields` VALUES (93302, 4, 'image', '794', 93301);
INSERT INTO `tager_page_fields` VALUES (93303, 4, 'action', 'scroll', 93301);
INSERT INTO `tager_page_fields` VALUES (93304, 4, 'link', '#contacts', 93301);
INSERT INTO `tager_page_fields` VALUES (93305, 4, 'doYouWantThirdGallery[3]', NULL, 93292);
INSERT INTO `tager_page_fields` VALUES (93306, 4, 'image', '793', 93305);
INSERT INTO `tager_page_fields` VALUES (93307, 4, 'action', 'scroll', 93305);
INSERT INTO `tager_page_fields` VALUES (93308, 4, 'link', '#contacts', 93305);
INSERT INTO `tager_page_fields` VALUES (93309, 4, 'doYouWantThirdGallery[4]', NULL, 93292);
INSERT INTO `tager_page_fields` VALUES (93310, 4, 'image', '792', 93309);
INSERT INTO `tager_page_fields` VALUES (93311, 4, 'action', 'scroll', 93309);
INSERT INTO `tager_page_fields` VALUES (93312, 4, 'link', '#contacts', 93309);
INSERT INTO `tager_page_fields` VALUES (93313, 4, 'doYouWantThirdGallery[5]', NULL, 93292);
INSERT INTO `tager_page_fields` VALUES (93314, 4, 'image', '791', 93313);
INSERT INTO `tager_page_fields` VALUES (93315, 4, 'action', 'scroll', 93313);
INSERT INTO `tager_page_fields` VALUES (93316, 4, 'link', '#contacts', 93313);
INSERT INTO `tager_page_fields` VALUES (93317, 4, 'doYouWantThirdGallery[6]', NULL, 93292);
INSERT INTO `tager_page_fields` VALUES (93318, 4, 'image', '790', 93317);
INSERT INTO `tager_page_fields` VALUES (93319, 4, 'action', 'scroll', 93317);
INSERT INTO `tager_page_fields` VALUES (93320, 4, 'link', '#contacts', 93317);
INSERT INTO `tager_page_fields` VALUES (93321, 4, 'doYouWantThirdGallery[7]', NULL, 93292);
INSERT INTO `tager_page_fields` VALUES (93322, 4, 'image', '789', 93321);
INSERT INTO `tager_page_fields` VALUES (93323, 4, 'action', 'scroll', 93321);
INSERT INTO `tager_page_fields` VALUES (93324, 4, 'link', '#contacts', 93321);
INSERT INTO `tager_page_fields` VALUES (93325, 4, 'formTitle', 'Making playable  In a week', NULL);
INSERT INTO `tager_page_fields` VALUES (93326, 4, 'formProfileTitle', 'Your personal manager', NULL);
INSERT INTO `tager_page_fields` VALUES (93327, 4, 'formProfileImage', '428', NULL);
INSERT INTO `tager_page_fields` VALUES (93328, 4, 'formProfileLabel', 'Alexander Valkovich', NULL);
INSERT INTO `tager_page_fields` VALUES (93329, 1, 'heroId', 'create', NULL);
INSERT INTO `tager_page_fields` VALUES (93330, 1, 'heroTitle', 'CREATE WITH US', NULL);
INSERT INTO `tager_page_fields` VALUES (93331, 1, 'heroText', 'We are committed to providing the highest quality content for games, custom development and maintenance services since 2012', NULL);
INSERT INTO `tager_page_fields` VALUES (93332, 1, 'heroImage', '486', NULL);
INSERT INTO `tager_page_fields` VALUES (93333, 1, 'heroMobileImage', '12', NULL);
INSERT INTO `tager_page_fields` VALUES (93334, 1, 'worksId', 'works', NULL);
INSERT INTO `tager_page_fields` VALUES (93335, 1, 'worksTitle', 'WORKS', NULL);
INSERT INTO `tager_page_fields` VALUES (93336, 1, 'worksItems', '[[{\"name\":\"image\",\"value\":\"3a85f6cb-df00-41eb-8c1d-3a4fae88244d\"},{\"name\":\"title\",\"value\":\"THE ELDER SCROLLS ONLINE\"},{\"name\":\"text\",\"value\":\"For the last 5 years FuryLion have been offering high quality services such as providing exclusive models of warlike armour and ammunition for one of the most significant MMORPG of modern times, TESO by ZeniMax Media.\"},{\"name\":\"logos\",\"value\":[]}],[{\"name\":\"image\",\"value\":\"f39dd5bf-3a63-45a3-8590-11d5688f0efe\"},{\"name\":\"title\",\"value\":\"HOMESCAPES\"},{\"name\":\"text\",\"value\":\"One of the most outstanding projects of the company is the one with carrying out a full cycle of a mini-game development for the wildly successful Homescapes and the entire game lineup Playrix.\"},{\"name\":\"logos\",\"value\":[]}],[{\"name\":\"image\",\"value\":\"69c191a2-6805-4295-8642-e0b4c6196cd0\"},{\"name\":\"title\",\"value\":\"FIFA 21\"},{\"name\":\"text\",\"value\":\"FuryLion is one of the largest suppliers of the upscale soccer player models for the most famous and well-known soccer simulator FIFA.\"},{\"name\":\"logos\",\"value\":[]}],[{\"name\":\"image\",\"value\":\"eadab5c4-41eb-4499-89b5-41bdc26462b4\"},{\"name\":\"title\",\"value\":\"RESTAURANT LIFE 3D\"},{\"name\":\"text\",\"value\":\"Enjoy the chef experience with many mini games!\\nSort the fridge, wash dishes!\\nPrepare meals and serve them to customers.\\nUse very simple mechanics like swipe, tap, drag and hold to play each mini game.\\nGet ready to enjoy an experience of restaurant life!\"},{\"name\":\"logos\",\"value\":[]}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (93337, 1, 'worksItems[0]', NULL, 93336);
INSERT INTO `tager_page_fields` VALUES (93338, 1, 'image', '2', 93337);
INSERT INTO `tager_page_fields` VALUES (93339, 1, 'title', 'THE ELDER SCROLLS ONLINE', 93337);
INSERT INTO `tager_page_fields` VALUES (93340, 1, 'text', 'For the last 5 years FuryLion have been offering high quality services such as providing exclusive models of warlike armour and ammunition for one of the most significant MMORPG of modern times, TESO by ZeniMax Media.', 93337);
INSERT INTO `tager_page_fields` VALUES (93341, 1, 'logos', NULL, 93337);
INSERT INTO `tager_page_fields` VALUES (93342, 1, 'worksItems[1]', NULL, 93336);
INSERT INTO `tager_page_fields` VALUES (93343, 1, 'image', '500', 93342);
INSERT INTO `tager_page_fields` VALUES (93344, 1, 'title', 'HOMESCAPES', 93342);
INSERT INTO `tager_page_fields` VALUES (93345, 1, 'text', 'One of the most outstanding projects of the company is the one with carrying out a full cycle of a mini-game development for the wildly successful Homescapes and the entire game lineup Playrix.', 93342);
INSERT INTO `tager_page_fields` VALUES (93346, 1, 'logos', NULL, 93342);
INSERT INTO `tager_page_fields` VALUES (93347, 1, 'worksItems[2]', NULL, 93336);
INSERT INTO `tager_page_fields` VALUES (93348, 1, 'image', '499', 93347);
INSERT INTO `tager_page_fields` VALUES (93349, 1, 'title', 'FIFA 21', 93347);
INSERT INTO `tager_page_fields` VALUES (93350, 1, 'text', 'FuryLion is one of the largest suppliers of the upscale soccer player models for the most famous and well-known soccer simulator FIFA.', 93347);
INSERT INTO `tager_page_fields` VALUES (93351, 1, 'logos', NULL, 93347);
INSERT INTO `tager_page_fields` VALUES (93352, 1, 'worksItems[3]', NULL, 93336);
INSERT INTO `tager_page_fields` VALUES (93353, 1, 'image', '753', 93352);
INSERT INTO `tager_page_fields` VALUES (93354, 1, 'title', 'RESTAURANT LIFE 3D', 93352);
INSERT INTO `tager_page_fields` VALUES (93355, 1, 'text', 'Enjoy the chef experience with many mini games!\nSort the fridge, wash dishes!\nPrepare meals and serve them to customers.\nUse very simple mechanics like swipe, tap, drag and hold to play each mini game.\nGet ready to enjoy an experience of restaurant life!', 93352);
INSERT INTO `tager_page_fields` VALUES (93356, 1, 'logos', NULL, 93352);
INSERT INTO `tager_page_fields` VALUES (93357, 1, 'servicesId', 'services-top', NULL);
INSERT INTO `tager_page_fields` VALUES (93358, 1, 'servicesTitle', 'Services', NULL);
INSERT INTO `tager_page_fields` VALUES (93359, 1, 'servicesItems', '[[{\"name\":\"image\",\"value\":\"a3d99b35-dc76-456c-bafb-c6ab6cfdbefe\"},{\"name\":\"title\",\"value\":\"2D & 3D Animation\"},{\"name\":\"text\",\"value\":\"FuryLion provides 2D and 3D animation of high quality for  wide-ranging product categories. We work on animation, storyboarding, rigging, skinning, modeling and a full cycle of additional services to achieve your desired goals with the help of our skills and experience.\"},{\"name\":\"linkLabel\",\"value\":\"more info\"},{\"name\":\"linkUrl\",\"value\":\"\\/services\"},{\"name\":\"scrollTo\",\"value\":\"servicesAnimation\"},{\"name\":\"isNewTab\",\"value\":false}],[{\"name\":\"image\",\"value\":\"f9fbd133-3d60-419b-8599-23a83c5634a9\"},{\"name\":\"title\",\"value\":\"PLAYABLE ADS DEVELOPMENT\"},{\"name\":\"text\",\"value\":\"FuryLion is known for being one of the largest developers of Playable ADS in the industry. Our own developments allow us to make Playable very light-weight, flexible and incredibly efficient.\"},{\"name\":\"linkLabel\",\"value\":\"more info\"},{\"name\":\"linkUrl\",\"value\":\"\\/ads\"},{\"name\":\"scrollTo\",\"value\":\"playable\"},{\"name\":\"isNewTab\",\"value\":false}],[{\"name\":\"image\",\"value\":\"a3acc096-3f43-48b8-bb52-f0e63ea7aad7\"},{\"name\":\"title\",\"value\":\"FULL STACK DEVELOPMENT\"},{\"name\":\"text\",\"value\":\"FuryLion ensures the entire process of the game production. Starting with the concept, we work on the alpha and beta versions of the game. Moreover, we assure the first release of the game and its further development.\"},{\"name\":\"linkLabel\",\"value\":\"more info\"},{\"name\":\"linkUrl\",\"value\":\"\\/services\"},{\"name\":\"scrollTo\",\"value\":\"development\"},{\"name\":\"isNewTab\",\"value\":false}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (93360, 1, 'servicesItems[0]', NULL, 93359);
INSERT INTO `tager_page_fields` VALUES (93361, 1, 'image', '477', 93360);
INSERT INTO `tager_page_fields` VALUES (93362, 1, 'title', '2D & 3D Animation', 93360);
INSERT INTO `tager_page_fields` VALUES (93363, 1, 'text', 'FuryLion provides 2D and 3D animation of high quality for  wide-ranging product categories. We work on animation, storyboarding, rigging, skinning, modeling and a full cycle of additional services to achieve your desired goals with the help of our skills and experience.', 93360);
INSERT INTO `tager_page_fields` VALUES (93364, 1, 'linkLabel', 'more info', 93360);
INSERT INTO `tager_page_fields` VALUES (93365, 1, 'linkUrl', '/services', 93360);
INSERT INTO `tager_page_fields` VALUES (93366, 1, 'scrollTo', 'servicesAnimation', 93360);
INSERT INTO `tager_page_fields` VALUES (93367, 1, 'isNewTab', '0', 93360);
INSERT INTO `tager_page_fields` VALUES (93368, 1, 'servicesItems[1]', NULL, 93359);
INSERT INTO `tager_page_fields` VALUES (93369, 1, 'image', '471', 93368);
INSERT INTO `tager_page_fields` VALUES (93370, 1, 'title', 'PLAYABLE ADS DEVELOPMENT', 93368);
INSERT INTO `tager_page_fields` VALUES (93371, 1, 'text', 'FuryLion is known for being one of the largest developers of Playable ADS in the industry. Our own developments allow us to make Playable very light-weight, flexible and incredibly efficient.', 93368);
INSERT INTO `tager_page_fields` VALUES (93372, 1, 'linkLabel', 'more info', 93368);
INSERT INTO `tager_page_fields` VALUES (93373, 1, 'linkUrl', '/ads', 93368);
INSERT INTO `tager_page_fields` VALUES (93374, 1, 'scrollTo', 'playable', 93368);
INSERT INTO `tager_page_fields` VALUES (93375, 1, 'isNewTab', '0', 93368);
INSERT INTO `tager_page_fields` VALUES (93376, 1, 'servicesItems[2]', NULL, 93359);
INSERT INTO `tager_page_fields` VALUES (93377, 1, 'image', '470', 93376);
INSERT INTO `tager_page_fields` VALUES (93378, 1, 'title', 'FULL STACK DEVELOPMENT', 93376);
INSERT INTO `tager_page_fields` VALUES (93379, 1, 'text', 'FuryLion ensures the entire process of the game production. Starting with the concept, we work on the alpha and beta versions of the game. Moreover, we assure the first release of the game and its further development.', 93376);
INSERT INTO `tager_page_fields` VALUES (93380, 1, 'linkLabel', 'more info', 93376);
INSERT INTO `tager_page_fields` VALUES (93381, 1, 'linkUrl', '/services', 93376);
INSERT INTO `tager_page_fields` VALUES (93382, 1, 'scrollTo', 'development', 93376);
INSERT INTO `tager_page_fields` VALUES (93383, 1, 'isNewTab', '0', 93376);
INSERT INTO `tager_page_fields` VALUES (93384, 1, 'servicesBottomId', 'services-bottom', NULL);
INSERT INTO `tager_page_fields` VALUES (93385, 1, 'servicesBottomTitle', NULL, NULL);
INSERT INTO `tager_page_fields` VALUES (93386, 1, 'servicesBottomItems', '[[{\"name\":\"image\",\"value\":\"16146bbf-a95e-4a83-9c78-bed7bee7f3fd\"},{\"name\":\"title\",\"value\":\"CO-DEVELOPMENT\"},{\"name\":\"text\",\"value\":\"Our incredible experience in content production opens up great opportunities for collaboration and experimentation.\"},{\"name\":\"linkLabel\",\"value\":\"more info\"},{\"name\":\"linkUrl\",\"value\":\"\\/services\"},{\"name\":\"scrollTo\",\"value\":\"codev\"},{\"name\":\"isNewTab\",\"value\":false}],[{\"name\":\"image\",\"value\":\"510988c6-52ca-4a80-9a9f-d2bc98cbbbdb\"},{\"name\":\"title\",\"value\":\"HTML 5 DEVELOPMENT\"},{\"name\":\"text\",\"value\":\"A modern, fast and efficient way to implement your ideas. FuryLion is perfect for mini-games and Playable ADS.\"},{\"name\":\"linkLabel\",\"value\":\"more info\"},{\"name\":\"linkUrl\",\"value\":\"\\/services\"},{\"name\":\"scrollTo\",\"value\":\"development\"},{\"name\":\"isNewTab\",\"value\":false}],[{\"name\":\"image\",\"value\":\"e41212ff-eb3d-4b59-9991-16ae82a3b312\"},{\"name\":\"title\",\"value\":\"2D & 3D Art\"},{\"name\":\"text\",\"value\":\"FuryLion provides the whole process of 2D and 3D art production. Starting from concepts and ending with a high-quality render. We adore creating charismatic and memorable characters, as well as unique and inimitable game worlds.\"},{\"name\":\"linkLabel\",\"value\":\"more info\"},{\"name\":\"linkUrl\",\"value\":\"\\/services\"},{\"name\":\"scrollTo\",\"value\":\"2d\"},{\"name\":\"isNewTab\",\"value\":false}]]', NULL);
INSERT INTO `tager_page_fields` VALUES (93387, 1, 'servicesBottomItems[0]', NULL, 93386);
INSERT INTO `tager_page_fields` VALUES (93388, 1, 'image', '472', 93387);
INSERT INTO `tager_page_fields` VALUES (93389, 1, 'title', 'CO-DEVELOPMENT', 93387);
INSERT INTO `tager_page_fields` VALUES (93390, 1, 'text', 'Our incredible experience in content production opens up great opportunities for collaboration and experimentation.', 93387);
INSERT INTO `tager_page_fields` VALUES (93391, 1, 'linkLabel', 'more info', 93387);
INSERT INTO `tager_page_fields` VALUES (93392, 1, 'linkUrl', '/services', 93387);
INSERT INTO `tager_page_fields` VALUES (93393, 1, 'scrollTo', 'codev', 93387);
INSERT INTO `tager_page_fields` VALUES (93394, 1, 'isNewTab', '0', 93387);
INSERT INTO `tager_page_fields` VALUES (93395, 1, 'servicesBottomItems[1]', NULL, 93386);
INSERT INTO `tager_page_fields` VALUES (93396, 1, 'image', '473', 93395);
INSERT INTO `tager_page_fields` VALUES (93397, 1, 'title', 'HTML 5 DEVELOPMENT', 93395);
INSERT INTO `tager_page_fields` VALUES (93398, 1, 'text', 'A modern, fast and efficient way to implement your ideas. FuryLion is perfect for mini-games and Playable ADS.', 93395);
INSERT INTO `tager_page_fields` VALUES (93399, 1, 'linkLabel', 'more info', 93395);
INSERT INTO `tager_page_fields` VALUES (93400, 1, 'linkUrl', '/services', 93395);
INSERT INTO `tager_page_fields` VALUES (93401, 1, 'scrollTo', 'development', 93395);
INSERT INTO `tager_page_fields` VALUES (93402, 1, 'isNewTab', '0', 93395);
INSERT INTO `tager_page_fields` VALUES (93403, 1, 'servicesBottomItems[2]', NULL, 93386);
INSERT INTO `tager_page_fields` VALUES (93404, 1, 'image', '491', 93403);
INSERT INTO `tager_page_fields` VALUES (93405, 1, 'title', '2D & 3D Art', 93403);
INSERT INTO `tager_page_fields` VALUES (93406, 1, 'text', 'FuryLion provides the whole process of 2D and 3D art production. Starting from concepts and ending with a high-quality render. We adore creating charismatic and memorable characters, as well as unique and inimitable game worlds.', 93403);
INSERT INTO `tager_page_fields` VALUES (93407, 1, 'linkLabel', 'more info', 93403);
INSERT INTO `tager_page_fields` VALUES (93408, 1, 'linkUrl', '/services', 93403);
INSERT INTO `tager_page_fields` VALUES (93409, 1, 'scrollTo', '2d', 93403);
INSERT INTO `tager_page_fields` VALUES (93410, 1, 'isNewTab', '0', 93403);
INSERT INTO `tager_page_fields` VALUES (93411, 1, 'technologiesId', NULL, NULL);
INSERT INTO `tager_page_fields` VALUES (93412, 1, 'technologiesTitle', 'technologies', NULL);
INSERT INTO `tager_page_fields` VALUES (93413, 1, 'technologiesText', 'The large database of used technologies allows quick and effective solutions of the tasks! We enjoy learning new modern techniques and we actively use them in our work.', NULL);
INSERT INTO `tager_page_fields` VALUES (93414, 1, 'technologiesLogos', '943,944,945,946', NULL);
INSERT INTO `tager_page_fields` VALUES (93415, 1, 'technologiesImage', '488', NULL);
INSERT INTO `tager_page_fields` VALUES (93416, 1, 'technologiesMobileImage', '489', NULL);
INSERT INTO `tager_page_fields` VALUES (93417, 1, 'technologiesTextAdditional', '<p>Unreal Engine, C#, C++, Java, CD implementation, AWS, GCP, Go, JavaScript, CI, Kubernetes, Docker, MySQL</p>', NULL);
INSERT INTO `tager_page_fields` VALUES (93418, 1, 'technologiesButtonFirstLabel', 'I want the same!', NULL);
INSERT INTO `tager_page_fields` VALUES (93419, 1, 'technologiesButtonFirstUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (93420, 1, 'technologiesButtonFirstIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (93421, 1, 'technologiesButtonSecondLabel', 'i can do the same', NULL);
INSERT INTO `tager_page_fields` VALUES (93422, 1, 'technologiesButtonSecondUrl', '/vacancies', NULL);
INSERT INTO `tager_page_fields` VALUES (93423, 1, 'technologiesButtonSecondIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (93424, 1, 'platformId', 'platforms', NULL);
INSERT INTO `tager_page_fields` VALUES (93425, 1, 'platformTitle', 'PlATFORM', NULL);
INSERT INTO `tager_page_fields` VALUES (93426, 1, 'platformText', 'We are going to make your game work on any platform you need, whether it\'s a smartphone, smart TV or even a refrigerator!', NULL);
INSERT INTO `tager_page_fields` VALUES (93427, 1, 'platformLogos', '520,521,522', NULL);
INSERT INTO `tager_page_fields` VALUES (93428, 1, 'platformAdditional', '<p>Nintendo Switch, Windows, PlayStation, XBOX, Web, tvOS, VR, AR&nbsp;</p>', NULL);
INSERT INTO `tager_page_fields` VALUES (93429, 1, 'platformButtonFirstLabel', 'I want the same!', NULL);
INSERT INTO `tager_page_fields` VALUES (93430, 1, 'platformButtonFirstUrl', '#contacts', NULL);
INSERT INTO `tager_page_fields` VALUES (93431, 1, 'platformButtonFirstIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (93432, 1, 'platformButtonSecondLabel', 'i can do the same', NULL);
INSERT INTO `tager_page_fields` VALUES (93433, 1, 'platformButtonSecondUrl', '/vacancies', NULL);
INSERT INTO `tager_page_fields` VALUES (93434, 1, 'platformButtonSecondIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (93435, 1, 'teamId', 'team', NULL);
INSERT INTO `tager_page_fields` VALUES (93436, 1, 'teamItems', '544,546,548,549,550,551,552,553,554,556,557,558,559,560,561,562,564,566,567,568,569,570,571,573,574,575,576,596,597,601,602,603,604,614,615,616,617,619,618,621,623,625,955,956,957,958,959,961,960,962,963,964,965,966,967,968,969,970,971,972,973,975,974,976,979,980,978,977,981,982,983,984,985,986,987,988,989,990,991,992,993,994,995,996,997,999,998,1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021', NULL);
INSERT INTO `tager_page_fields` VALUES (93437, 1, 'teamButtonLabel', 'join our family', NULL);
INSERT INTO `tager_page_fields` VALUES (93438, 1, 'teamButtonUrl', '/vacancies', NULL);
INSERT INTO `tager_page_fields` VALUES (93439, 1, 'teamButtonIsNewTab', '0', NULL);
INSERT INTO `tager_page_fields` VALUES (93440, 1, 'clientsId', 'clients', NULL);
INSERT INTO `tager_page_fields` VALUES (93441, 1, 'clientsTitle', 'CLIENTS & PARTNERS', NULL);
INSERT INTO `tager_page_fields` VALUES (93442, 1, 'clientsFirstGallery', '113,114,116,118', NULL);
INSERT INTO `tager_page_fields` VALUES (93443, 1, 'clientsSecondGallery', '109,110,119,751,111,112', NULL);
INSERT INTO `tager_page_fields` VALUES (93444, 1, 'formTitle', 'Tell us about  everything test', NULL);
COMMIT;

-- ----------------------------
-- Table structure for tager_pages
-- ----------------------------
DROP TABLE IF EXISTS `tager_pages`;
CREATE TABLE `tager_pages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `template` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url_path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `body` longtext COLLATE utf8mb4_unicode_ci,
  `image_id` bigint(20) unsigned DEFAULT NULL,
  `page_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `page_description` text COLLATE utf8mb4_unicode_ci,
  `page_keywords` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `open_graph_image_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `_lft` int(10) unsigned NOT NULL DEFAULT '0',
  `_rgt` int(10) unsigned NOT NULL DEFAULT '0',
  `parent_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `tager_pages_url_path_index` (`url_path`),
  KEY `tager_pages_image_id_foreign` (`image_id`),
  KEY `tager_pages_open_graph_image_id_foreign` (`open_graph_image_id`),
  KEY `tager_pages__lft__rgt_parent_id_index` (`_lft`,`_rgt`,`parent_id`),
  CONSTRAINT `tager_pages_image_id_foreign` FOREIGN KEY (`image_id`) REFERENCES `files` (`id`),
  CONSTRAINT `tager_pages_open_graph_image_id_foreign` FOREIGN KEY (`open_graph_image_id`) REFERENCES `files` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_pages
-- ----------------------------
BEGIN;
INSERT INTO `tager_pages` VALUES (1, 'home', '/', 'Home', NULL, NULL, NULL, 'FuryLion', 'We are committed to providing the highest quality content for games, custom development and maintenance services since 2012', NULL, 1036, '2021-03-10 14:40:47', '2021-06-11 08:56:48', NULL, 1, 2, NULL);
INSERT INTO `tager_pages` VALUES (2, 'vacancies', '/vacancies', 'Vacancies', NULL, NULL, NULL, 'FuryLion - Vacancies', 'Our company is 130+ highly qualified specialists who work in 3 offices and remotely - from different places of our planet. Our team is our path to success!', NULL, 1037, '2021-03-10 14:41:05', '2021-06-11 08:57:17', NULL, 3, 4, NULL);
INSERT INTO `tager_pages` VALUES (3, 'services', '/services', 'Services', NULL, NULL, NULL, 'FuryLion - Services', 'We provides a wide range of art production and engineering services', NULL, 1038, '2021-03-10 14:41:23', '2021-06-11 08:57:32', NULL, 5, 6, NULL);
INSERT INTO `tager_pages` VALUES (4, 'playable-ads', '/ads', 'Playable Ads', NULL, NULL, NULL, 'FuryLion - Playable ADS', 'We create beautiful ads that are very close to original product and sometimes even surpass an original product', NULL, 1039, '2021-03-10 15:18:57', '2021-06-11 08:59:53', NULL, 7, 8, NULL);
COMMIT;

-- ----------------------------
-- Table structure for tager_roles
-- ----------------------------
DROP TABLE IF EXISTS `tager_roles`;
CREATE TABLE `tager_roles` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `is_super_admin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_roles
-- ----------------------------
BEGIN;
INSERT INTO `tager_roles` VALUES (1, 'Super Administrator', '*', NULL, NULL, NULL, 1);
INSERT INTO `tager_roles` VALUES (2, 'Vacancies Manager', 'vacancies.view,vacancies.create,vacancies.edit,vacancies.delete', NULL, '2021-06-11 08:19:32', '2021-06-11 08:19:32', 0);
INSERT INTO `tager_roles` VALUES (3, 'Content Manager', 'vacancies.view,vacancies.create,vacancies.edit,vacancies.delete,pages.view,pages.edit', NULL, '2021-06-11 08:20:27', '2021-06-11 08:20:27', 0);
COMMIT;

-- ----------------------------
-- Table structure for tager_seo_templates
-- ----------------------------
DROP TABLE IF EXISTS `tager_seo_templates`;
CREATE TABLE `tager_seo_templates` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `template` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `keywords` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `open_graph_image_id` bigint(20) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tager_seo_templates_template_unique` (`template`),
  KEY `tager_seo_templates_open_graph_image_id_foreign` (`open_graph_image_id`),
  CONSTRAINT `tager_seo_templates_open_graph_image_id_foreign` FOREIGN KEY (`open_graph_image_id`) REFERENCES `files` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_seo_templates
-- ----------------------------
BEGIN;
INSERT INTO `tager_seo_templates` VALUES (1, 'page', '{{title}}', '{{excerpt}}', NULL, NULL);
INSERT INTO `tager_seo_templates` VALUES (2, 'vacancies-single', 'FuryLion Vacancy - {{title}}', '{{excerpt}}', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for tager_settings
-- ----------------------------
DROP TABLE IF EXISTS `tager_settings`;
CREATE TABLE `tager_settings` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `key` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `label` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` longtext COLLATE utf8mb4_unicode_ci,
  `changed` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `priority` bigint(20) unsigned NOT NULL DEFAULT '0',
  `public` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tager_settings_key_unique` (`key`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of tager_settings
-- ----------------------------
BEGIN;
INSERT INTO `tager_settings` VALUES (2, 'FORM_TITLE', 'STRING', 'Form Title', 'Tell us about  everything', 1, '2021-03-12 16:01:52', '2021-06-11 14:24:43', NULL, 7, 1);
INSERT INTO `tager_settings` VALUES (3, 'FOOTER_OFFICES', 'REPEATER', 'Offices', '[[{\"name\":\"title\",\"value\":\"Novopolotsk\"},{\"name\":\"text\",\"value\":\"Yakuba Kolosa 46, Floor 2<br>\\nNovopolotsk 211501,<br>\\nRepublic of Belarus\"},{\"name\":\"phone\",\"value\":\"+375 (29) 290-50-50\"},{\"name\":\"email\",\"value\":null}],[{\"name\":\"title\",\"value\":\"Minsk\"},{\"name\":\"text\",\"value\":\"Klary Tsetkin 24,  Floor 4, Office 2<br>Minsk 220030,<br> \\nRepublic of Belarus\"},{\"name\":\"phone\",\"value\":\"+375 (33) 676-77-33\"},{\"name\":\"email\",\"value\":\"info@furylion.net\"}],[{\"name\":\"title\",\"value\":\"Saint Petersburg\"},{\"name\":\"text\",\"value\":\"Saint-Petersburg, Bolshoy prospect V.O. 80<br>Letters A. 199106,<br>\\nRussia\"},{\"name\":\"phone\",\"value\":\"8 (905) 813-79-89\"},{\"name\":\"email\",\"value\":null}]]', 1, '2021-03-12 16:01:52', '2021-06-11 14:24:43', NULL, 9, 1);
INSERT INTO `tager_settings` VALUES (4, 'INSTAGRAM_URL', 'URL', 'Instagram URL', 'https://www.instagram.com/furylion_group/', 1, '2021-03-12 16:01:52', '2021-06-11 14:24:43', NULL, 10, 1);
INSERT INTO `tager_settings` VALUES (5, 'VKONTAKTE_URL', 'URL', 'VKontakte URL', 'https://vk.com/dread.core', 1, '2021-03-12 16:01:52', '2021-06-11 14:24:43', NULL, 11, 1);
INSERT INTO `tager_settings` VALUES (6, 'APPSTORE_URL', 'URL', 'App Store URL', 'https://apps.apple.com/ru/developer/furylion/id1271317258', 1, '2021-03-12 16:01:52', '2021-06-11 14:24:43', NULL, 12, 1);
INSERT INTO `tager_settings` VALUES (7, 'GOOGLEPLAY_URL', 'URL', 'Google Play URL', 'https://play.google.com/store/apps/developer?id=FuryLion', 1, '2021-03-12 16:01:52', '2021-06-11 14:24:43', NULL, 13, 1);
INSERT INTO `tager_settings` VALUES (8, 'FORM_VACANCIES_TITLE', 'STRING', 'Form Vacancies Title', 'РАССКАЖИТЕ О СЕБЕ И ПРИКРЕПИТЕ CV', 1, '2021-04-05 15:11:14', '2021-06-11 14:24:43', NULL, 8, 1);
INSERT INTO `tager_settings` VALUES (9, 'OPEN_VACANCY_TITLE', 'STRING', 'Title', 'Supеrhеro', 1, '2021-04-08 14:02:56', '2021-06-11 14:24:43', NULL, 1, 1);
INSERT INTO `tager_settings` VALUES (10, 'OPEN_VACANCY_IMAGE', 'IMAGE', 'Image', '874', 1, '2021-04-08 14:02:56', '2021-06-11 14:24:43', NULL, 2, 1);
INSERT INTO `tager_settings` VALUES (11, 'OPEN_VACANCY_DESCRIPTION', 'TEXT', 'Description', 'Вы не нашли подходящей вакансии, но очень хотите с нами работать?\nПросто напишите пару слов о себе :)', 1, '2021-04-08 14:02:57', '2021-06-11 14:24:43', NULL, 3, 1);
INSERT INTO `tager_settings` VALUES (12, 'INSTAGRAM', 'REPEATER', 'Previews', '[[{\"name\":\"type\",\"value\":\"IMAGE\"},{\"name\":\"preview\",\"value\":\"598405bb-9ba2-422d-8374-463c2c83f82b\"},{\"name\":\"url\",\"value\":\"https:\\/\\/www.instagram.com\\/p\\/COBF9C7sg3_\\/\"}],[{\"name\":\"type\",\"value\":\"IMAGE\"},{\"name\":\"preview\",\"value\":\"4fa01373-cc5a-4678-bb88-54047d549581\"},{\"name\":\"url\",\"value\":\"https:\\/\\/www.instagram.com\\/p\\/CMxP4RsME8f\\/\"}],[{\"name\":\"type\",\"value\":\"IMAGE\"},{\"name\":\"preview\",\"value\":\"10459c38-bcc9-49bb-b7d1-6010bbe57142\"},{\"name\":\"url\",\"value\":\"https:\\/\\/www.instagram.com\\/p\\/CMb7EByFytc\\/\"}],[{\"name\":\"type\",\"value\":\"IMAGE\"},{\"name\":\"preview\",\"value\":\"53e259ca-9bdf-4b2e-ae01-e760620c2cfb\"},{\"name\":\"url\",\"value\":\"https:\\/\\/www.instagram.com\\/p\\/CK1X7YjlSQd\\/\"}],[{\"name\":\"type\",\"value\":\"IMAGE\"},{\"name\":\"preview\",\"value\":\"eb2b5243-2e01-4903-8d57-48b3e87c28a9\"},{\"name\":\"url\",\"value\":\"https:\\/\\/www.instagram.com\\/p\\/B26oEK4oGWL\\/\"}],[{\"name\":\"type\",\"value\":\"IMAGE\"},{\"name\":\"preview\",\"value\":\"89f9ab6d-caf1-4d78-9e55-fec55aff624e\"},{\"name\":\"url\",\"value\":\"https:\\/\\/www.instagram.com\\/p\\/Bu4Cl6GlklU\\/\"}]]', 1, '2021-04-15 14:38:20', '2021-06-11 14:24:43', NULL, 14, 1);
INSERT INTO `tager_settings` VALUES (13, 'NOT_FOUND_TEXT', 'TEXT', 'Text', 'Oh, snap! Something went wrong. While we\'re furiously \nfixing everything, you can try out Playable ADS', 1, '2021-04-29 14:44:53', '2021-06-11 14:24:43', NULL, 15, 1);
INSERT INTO `tager_settings` VALUES (14, 'NOT_FOUND_BUTTON_URL', 'STRING', 'Button URL', 'https://furylion.dev.ozitag.com/', 1, '2021-04-29 14:44:53', '2021-06-11 14:24:43', NULL, 17, 1);
INSERT INTO `tager_settings` VALUES (15, 'NOT_FOUND_BUTTON_LABEL', 'STRING', 'Button Label', 'Playable ADS', 1, '2021-04-29 14:44:53', '2021-06-11 14:24:43', NULL, 16, 1);
INSERT INTO `tager_settings` VALUES (16, 'FirstHeaderTitle', 'STRING', 'First title', 'Требования:', 1, '2021-06-04 14:41:14', '2021-06-11 14:24:43', NULL, 4, 1);
INSERT INTO `tager_settings` VALUES (17, 'SecondHeaderTitle', 'STRING', 'Second title', 'Будет плюсом:', 1, '2021-06-04 14:41:14', '2021-06-11 14:24:43', NULL, 5, 1);
INSERT INTO `tager_settings` VALUES (18, 'BenefitsTitle', 'STRING', 'Benefits', 'Предлагаем:', 1, '2021-06-04 14:41:14', '2021-06-11 14:24:43', NULL, 6, 1);
COMMIT;

-- ----------------------------
-- Table structure for vacancies
-- ----------------------------
DROP TABLE IF EXISTS `vacancies`;
CREATE TABLE `vacancies` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `priority` int(10) unsigned NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_alias` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `introduction` text COLLATE utf8mb4_unicode_ci,
  `introduction_second` text COLLATE utf8mb4_unicode_ci,
  `introduction_third` text COLLATE utf8mb4_unicode_ci,
  `body` text COLLATE utf8mb4_unicode_ci,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `level` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `technologies` text COLLATE utf8mb4_unicode_ci,
  `duties` text COLLATE utf8mb4_unicode_ci,
  `requirements` text COLLATE utf8mb4_unicode_ci,
  `conditions` text COLLATE utf8mb4_unicode_ci,
  `tags` text COLLATE utf8mb4_unicode_ci,
  `location_id` bigint(20) unsigned NOT NULL,
  `image_id` bigint(20) unsigned DEFAULT NULL,
  `page_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `page_description` text COLLATE utf8mb4_unicode_ci,
  `open_graph_image_id` bigint(20) unsigned DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vacancies_location_id_foreign` (`location_id`),
  KEY `vacancies_image_id_foreign` (`image_id`),
  KEY `vacancies_open_graph_image_id_foreign` (`open_graph_image_id`),
  CONSTRAINT `vacancies_image_id_foreign` FOREIGN KEY (`image_id`) REFERENCES `files` (`id`),
  CONSTRAINT `vacancies_location_id_foreign` FOREIGN KEY (`location_id`) REFERENCES `vacancy_locations` (`id`),
  CONSTRAINT `vacancies_open_graph_image_id_foreign` FOREIGN KEY (`open_graph_image_id`) REFERENCES `files` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of vacancies
-- ----------------------------
BEGIN;
INSERT INTO `vacancies` VALUES (1, 1, 'Java Script Developer', 'js-developer', 'FuryLion расширяет отдел программирования в Новополоцке JavaScript разработчиками для работы над HTML5 играми и Playable ADS', 'FuryLion расширяет отдел программирования в Новополоцке JavaScript разработчиками для работы над HTML5 играми и Playable ADS', 'FuryLion - это более 150 профессионалов своего дела, работающих в 3-ех офисах\n\nУдаленно не рассматриваются!\n\nПроекты предполагаются как на аутсорс, так и внутренние разработки студии', 'Возможность поработать над самыми успешными, всемирно известными мобильными и консольными продуктами', NULL, 'Full time', 'Junior, Middle, Senior', 'JavaScript, ES6, Node.JS', '<ul><li>Знание и опыт работы с Javascript ES6 и выше</li><li>Знание html5</li><li>Умение писать читабельный код без ошибок, следуя общим стандартам программирования и особенностям проекта</li><li>Умение и нормальное отношение задачам в которых нужно разбираться в чужом коде</li><li>Знание распространенных алгоритмов</li><li>Знание паттернов проектирования</li><li>Владение системами контроля версий (git)</li></ul>', '<ul><li>Опыт работы с Node.JS, webpack, babel</li><li>Опыт разработки игр на Pixi.js, Three.js или других игровых движках</li><li>Знание Front-End фреймворков (Vue.js, React)</li><li>Высшее образование по ИТ специальности</li><li>Знание основ гейм-дизайна</li><li>Умение работать с Photoshop (не рисовать)</li><li>Умение работать с Spine (не анимировать)</li><li>Уверенный английский язык</li></ul>', '<ul><li>Работу в уютном офисе в центре Новополоцка</li><li>Вкусные комплексные обеды за счет компании</li></ul><p style=\"margin-left:20px;\">&nbsp;</p><ul><li>Адекватное руководство и опытных коллег</li><li>Своевременную и достойную оплату труда на карту Приорбанка в $</li></ul><p style=\"margin-left:20px;\">&nbsp;</p><ul><li>При желании и необходимости - курсы английского прямо в офисе с преподавателем</li><li>Возможность бесконечного карьерного роста в компании</li></ul>', 'JavaScript, ES6, Node.JS', 3, 875, NULL, NULL, NULL, '2021-06-11 08:55:58');
INSERT INTO `vacancies` VALUES (2, 2, '2D Artist', '2d-middle-artist', 'We invite Middle-Senior 2D UI / UX artist to FuryLion to work on mobile game projects.\nRequired work experience: 3-6 years', 'FuryLion is a Design-driven Software Development Company with almost 10+ years of experience in working with different types of digital projects and markets. When you work with us, you\'re working with the best experts in the design field.', 'We are looking for a colleague and like-minded person, ready to connect to our team, to work on the best projects to design effective user interaction and experience and eye-popping design of mobile and web application interfaces, solving complex UX problems, and achieving measurable targets.', 'Our future colleague must be a perfectionist, have an inquisitive mind, be able to manage personal time, be ready to work with 200% effectiveness.', NULL, 'Full time', 'Middle', 'Technologie 1, Technologies 2, Technologies 3', '<ul><li>Профессиональное отношение к работе и коллегам</li><li>Адекватное восприятие фидбэка</li><li>Наличие актуального портфолио&nbsp;</li><li>Умение анализировать стиль проекта и подстраиваться под него.&nbsp;</li><li>Предлагать решения в рамках проекта&nbsp;</li><li>Желание расти и развиваться&nbsp;</li><li>Умение переключаться с проекта на проект&nbsp;</li><li>Высокий уровень работ, художественный вкус, чувство цвета и композиции&nbsp;</li><li>Знание тенденций в 2D и 3D графике, понимание трендов современных мобильных игр&nbsp;</li><li>Самостоятельность, ответственность, коммуникативные навыки&nbsp;</li><li>Английский на уровне чтения и понимания фидбэка&nbsp;</li><li>Опыт работы над играми для мобильных платформ&nbsp;</li><li>Умение следовать заданной стилистике и подстраиваться под пайплайн проекта&nbsp;</li><li>Умение находить общий язык с командой и заказчиками&nbsp;</li><li>Будет плюсом: Опыт работы с UX UI Опыт работы с 3D моделлерами (составление тз и умение давать фидбэк, делать оверы, если необходимо)&nbsp;</li><li>Умение разрабатывать уникальный стиль проекта</li></ul>', '<ul><li>Официальное оформление&nbsp;</li><li>Компенсация больничных и отпусков,&nbsp;</li><li>Работа уютном офисе в БЦ Титан (ст.м. Петровщина)&nbsp;</li><li>Комфортные условия труда: чай-кофе-молоко, печеньки и конфеты&nbsp;</li><li>Гибкий график работы&nbsp;</li><li>Корпоративные праздники&nbsp;</li><li>Дружный и веселый коллектив&nbsp;</li><li>Посещение конференций&nbsp;</li><li>Возможность профессионального роста и развития&nbsp;</li><li>Динамичный пересмотр ЗП</li></ul>', '<ul><li>Официальное оформление</li><li>Компенсация больничных и отпусков,</li><li>Работа уютном офисе в БЦ Титан (ст.м. Петровщина)</li></ul><p>&nbsp;</p><ul><li>Комфортные условия труда: чай-кофе-молоко, печеньки и конфеты</li><li>Гибкий график работы</li><li>Корпоративные праздники</li></ul><p>&nbsp;</p><ul><li>Дружный и веселый коллектив</li><li>Посещение конференций</li><li>Возможность профессионального роста и развития</li></ul>', 'Unity, HTML5', 1, 359, NULL, NULL, NULL, '2021-06-01 12:26:09');
INSERT INTO `vacancies` VALUES (3, 3, '2D Artist', '2d-artist', 'FuryLion в поисках талантливого художника в арт отдел Минского офиса. В задачи будет входить разработка казуальных игр и около игрового арта (стикеры, промо материалы, игровые логотипы)', 'FuryLion в поисках талантливого художника в арт отдел Минского офиса. В задачи будет входить разработка казуальных игр и около игрового арта (стикеры, промо материалы, игровые логотипы)', 'FuryLion - это более 150 профессионалов своего дела, работающих в 3-ех офисах\n\nУдаленно не рассматриваются!\n\nПроекты предполагаются как на аутсорс, так и внутренние разработки студии', 'Обязательно прикрепляйте ссылку на портфолио (арт стейшн или беханс в сообщении или в описании)\n\nПриветствуется и в приоритете художественное образование', NULL, 'Full time', 'Junior, Middle, Senior', 'Photoshop, Illustrator', '<ul><li>Художественный вкус, чувство цвета, знание композиции</li><li>Умение и желание работать в разных стилях (флэт, казуальный) и подстраиваться под стиль проекта</li><li>Умение создавать персонажей, фоны, элементы интерфейса</li><li>Любовь к играм и понимание зачем пришли в геймдев</li><li>Умение рисовать от руки и на графическом планшете</li><li>Наличие в портфолио игрового арта (скетчи, концепты, локации, интерфейс и т.д)</li><li>Аккуратность, внимательность и усидчивость в работе</li><li>Гибкость при переходе на новый софт\\задачи</li><li>Быстрая обучаемость</li><li>Умение работать в команде, коммуникабельность</li><li>Огромное желание развиваться</li><li>Готовность к переработкам в случае кранчей</li></ul>', '<ul><li>Насмотренность и опыт геймера</li><li>Любовь к казуальным играм</li><li>Интерес к комиксам</li><li>Отсутсвие вредных привычек несовместимых с работой в офисе</li></ul>', '<ul><li>Работу над разными проектами</li><li>Укомплектованное рабочее место в офисе в БЦ \"Имперский\"</li><li>Возможность быстрого роста</li></ul><p>&nbsp;</p><ul><li>Компьютер с 2 мониторами и новым графическим планшетом</li><li>Удобный график работы</li></ul><p>&nbsp;</p><ul><li>Дружный коллектив и демократичную атмосферу</li><li>Тимбилдинги и другие радостные события корпоративной жизни</li></ul>', '2D Art', 1, 877, NULL, NULL, 1041, NULL);
INSERT INTO `vacancies` VALUES (4, 4, 'Middle Game Designer', 'gd-mid', 'FuryLion в поисках талантливого гейм-дизайнера в Питерский офис. В задачи будет входить разработка игровых механик и документации', 'FuryLion в поисках талантливого гейм-дизайнера в Питерский офис. В задачи будет входить разработка игровых механик и документации', 'FuryLion - это более 150 профессионалов своего дела, работающих в 3-ех офисах\n\nУдаленно не рассматриваются!\n\nПроекты предполагаются как на аутсорс, так и внутренние разработки студии', 'Мы ищем специалиста, который дополнит нашу команду', NULL, 'Full time', 'Middle', 'Game Design', '<ul><li>Опыт работы в качестве геймдизайнера от 1-го года</li><li>Богатое воображение</li><li>Умение правильно излагать свои мысли как устно, так и письменно</li><li>Аналитический склад ума</li><li>Владение математическими знаниями</li><li>Внимательность к деталям</li><li>Умение составлять документацию</li><li>Любовь к играм и богатый игровой опыт</li><li>Целеустремленность и способность всегда доводить начатое до конца</li><li>Наличие представления о программировании и дизайне</li></ul>', '<ul><li>Разработка концепции и дизайна игры</li><li>Разработка новых и поддержка старых проектов</li><li>Работа над сценарием</li><li>Участие в разработке игровых механик</li><li>Знание Unity</li><li>Знание английского языка</li><li>Наличие навыков технического письма</li></ul>', '<ul><li style=\"margin-left:20px;\">Интересную сложную работу над уникальными игровыми проектами мирового уровня</li><li style=\"margin-left:20px;\">Обучение замечательной профессии “Гейм-дизайнер” в разных жанрах</li><li style=\"margin-left:20px;\">Возможность профессионального роста и развития, посещение тематических конференций</li></ul><p style=\"margin-left:20px;\">&nbsp;</p><ul><li style=\"margin-left:20px;\">Комфортные условия труда, гибкий график работы</li><li style=\"margin-left:20px;\">Дружный коллектив и демократичную атмосферу</li></ul><p style=\"margin-left:20px;\">&nbsp;</p><ul><li style=\"margin-left:20px;\">Тимбилдинги и другие радостные события корпоративной жизни</li><li style=\"margin-left:20px;\">Работа в офисе в Питере или в Минске</li></ul>', 'Game Design', 4, 878, NULL, NULL, 1042, NULL);
INSERT INTO `vacancies` VALUES (5, 5, 'Senior Game Designer', 'gd-senior', 'FuryLion в поисках опытного гейм-дизайнера в Питерский офис. В задачи будет входить разработка игровых механик и документации', 'FuryLion в поисках опытного гейм-дизайнера в Питерский офис. В задачи будет входить разработка игровых механик и документации', 'FuryLion - это более 150 профессионалов своего дела, работающих в 3-ех офисах\n\nУдаленно не рассматриваются!\n\nПроекты предполагаются как на аутсорс, так и внутренние разработки студии', 'Мы ищем специалиста, который дополнит нашу команду', NULL, 'Full time', 'Senior', 'Game Design, Unity', '<ul><li>Опыт работы в качестве геймдизайнера от 1-го года</li><li>Богатое воображение</li><li>Умение правильно излагать свои мысли как устно, так и письменно</li><li>Аналитический склад ума</li><li>Владение математическими знаниями</li><li>Внимательность к деталям</li><li>Умение составлять документацию</li><li>Любовь к играм и богатый игровой опыт</li><li>Целеустремленность и способность всегда доводить начатое до конца</li><li>Наличие представления о программировании и дизайне</li><li>Разработка концепции и дизайна игры</li><li>Разработка новых и поддержка старых проектов</li><li>Работа над сценарием</li><li>Участие в разработке игровых механик</li></ul>', '<ul><li>Знание Unity</li><li>Знание английского языка</li><li>Наличие навыков технического письма</li></ul>', '<ul><li>Интересную сложную работу над уникальными игровыми проектами мирового уровня</li><li>Обучение замечательной профессии “Гейм-дизайнер” в разных жанрах</li><li>Возможность профессионального роста и развития, посещение тематических конференций</li></ul><p style=\"margin-left:20px;\">&nbsp;</p><ul><li>Комфортные условия труда, гибкий график работы</li><li>Дружный коллектив и демократичную атмосферу</li></ul><p style=\"margin-left:20px;\">&nbsp;</p><ul><li>Тимбилдинги и другие радостные события корпоративной жизни</li><li>Работа в офисе в Питере или в Минске</li></ul>', 'Game Design', 4, 879, NULL, NULL, NULL, NULL);
INSERT INTO `vacancies` VALUES (6, 6, 'Junior 3D Artist', 'junior-3d-artist', 'FuryLion в поисках талантливого начинающего 3D художника в Питерский офис. В задачи будет входить разработка 3Д моделей персонажей, техники и окружения', 'FuryLion в поисках талантливого начинающего 3D художника в Питерский офис. В задачи будет входить разработка 3Д моделей персонажей, техники и окружения', 'FuryLion - это более 150 профессионалов своего дела, работающих в 3-ех офисах\n\nУдаленно не рассматриваются!\n\nПроекты предполагаются как на аутсорс, так и внутренние разработки студии', 'Возможность поработать над самыми успешными, всемирно известными мобильными и консольными продуктами\nБез портфолио и резюме не рассматриваем', NULL, 'Full time', 'Junior', '3D Art', '<ul><li>Знание софта ZBrush, Maya\\3Ds Max (в зависимости от курса), Substance Painter, Photoshop</li><li>Наличие в портфолио GameReady моделей или анатомии в ZBrush для курса \"Анатомия лица\"</li><li>Аккуратность, внимательность и усидчивость в работе</li><li>Четкое следование фидбеку</li><li>Гибкость при переходе на новый софт\\задачи</li><li>Быстрая обучаемость</li><li>Умение работать в команде, коммуникабельность</li><li>Огромное желание развиваться</li></ul>', '<p style=\"margin-left:0px;\">Набираем желающий пройти очное\\дистанционное, бесплатное обучение с дальнейшим трудоустройством по программе FuryLion School. На данный момент проводим обучение по направлениям</p><p style=\"margin-left:0px;\">&nbsp;</p><ul><li>Анатомия лица. Клинап 3D скана головы (ZBrush, Substance Painter, Maya, Photoshop) 8 дней</li><li>Фентези оружие. (3ds Max+Zbrush+xNormal) 10 дней</li></ul><p style=\"margin-left:0px;\">&nbsp;</p><p style=\"margin-left:0px;\">В случае успешного прохождения курса возьмем Вас в команду!</p>', '<ul><li>Работу над разными проектами</li><li>Укомплектованное рабочее место в офисе в БЦ \"Сенатор\"</li><li>Возможность быстрого роста</li></ul><p>&nbsp;</p><ul><li>Компьютер с 2 мониторами и графическим планшетом</li><li>Удобный график работы</li></ul><p>&nbsp;</p><ul><li>Дружный коллектив и демократичную атмосферу</li><li>Тимбилдинги и другие радостные события корпоративной жизни</li></ul>', '3D Art', 4, 882, NULL, NULL, NULL, '2021-06-11 09:30:16');
INSERT INTO `vacancies` VALUES (7, 7, '2D Animator', '2d-animator', 'FuryLion в поисках талантливого аниматора в арт отдел Минского офиса. В задачи будет входить разработка казуальных игр и около игровой анимации', 'FuryLion в поисках талантливого аниматора в арт отдел Минского офиса. В задачи будет входить разработка казуальных игр и около игровой анимации', 'FuryLion - это более 150 профессионалов своего дела, работающих в 3-ех офисах\n\nУдаленно не рассматриваются!\n\nПроекты предполагаются как на аутсорс, так и внутренние разработки студии', 'Проекты предполагаются как на аутсорс, так и внутренние разработки студии. Проекты разные: от казуала до аниме, от гиперказуала до ААА', NULL, 'Full time', 'Junior, Middle, Senior', 'Spine, Photoshop, Adobe Animate', '<ul><li>Создание высококачественных анимаций персонажей, окружения и UI</li><li>Нарезка изображений и материала для анимаций</li><li>Подготовка анимаций для интеграции</li><li>Знание принципов анимации</li><li>Владение инструментом создания анимаций Spine, Flash будет плюсом</li><li>Наличие готовых работ (с предыдущей работы, с курсов или в рамках самообучения)</li><li>Готовность изучать инструменты 3D анимации</li><li>Владение Adobe Photoshop</li><li>Желание работать в игровой индустрии</li><li>Невероятное желание стать профессионалом, лучшим в своем деле</li><li>Адекватность и жизнерадостность, открытость к новым людям и знаниям</li><li>Отсутствие причин, не совместимых с работой в офисе</li></ul>', '<ul><li>Знание анатомии или опыт работы с персонажной анимацией</li><li>Понимание английского языка</li><li>Готовность осваивать новые программы и инструменты;</li><li>Знание принципов графического дизайна и психологии зрительного восприятия</li><li>Будет плюсом умение рисовать и дорисовывать графический материал</li><li>Будет плюсом умение делать эффекты в Unity</li></ul>', '<ul><li>Работу над разными проектами</li><li>Укомплектованное рабочее место в офисе в БЦ \"Имперский\"</li><li>Возможность быстрого роста</li></ul><p>&nbsp;</p><ul><li>Компьютер с 2 мониторами и новым графическим планшетом</li><li>Удобный график работы</li></ul><p>&nbsp;</p><ul><li>Дружный коллектив и демократичную атмосферу</li><li>Тимбилдинги и другие радостные события корпоративной жизни</li></ul>', 'Spine, Adobe Animate', 1, 881, NULL, NULL, 1043, NULL);
INSERT INTO `vacancies` VALUES (8, 8, 'UI/UX  Designer', 'uiux-designer', 'Excerpt', 'FuryLion is a Design-driven Software Development Company with almost 10+ years of experience in working with different types of digital projects and markets. When you work with us, you\'re working with the best experts in the design field.', 'We are looking for a colleague and like-minded person, ready to connect to our team, to work on the best projects to design effective user interaction and experience and eye-popping design of mobile and web application interfaces, solving complex UX problems, and achieving measurable targets.', 'Our future colleague must be a perfectionist, have an inquisitive mind, be able to manage personal time, be ready to work with 200% effectiveness.', NULL, 'Full time', 'Senior', 'Unity, HTML5,  Spine', '<ul><li>Collaborate with project leaders, product management, developers, and the client to define and implement user interface designs for web and mobile applications.</li><li>Execute all visual design stages from concept to final hand-off (User Flows, IA, Low fidelity wireframes, clickable prototypes, visual UI).</li><li>Conceptualize original ideas that bring simplicity and user-friendliness to complex design.</li><li>Create wireframes (prototypes) to effectively communicate interaction and design ideas.</li><li>Establish and promote design guidelines, best practices, and standards.</li></ul>', '<ul><li>Collaborate with project leaders, product management, developers, and the client to define and implement user interface designs for web and mobile applications.</li><li>Execute all visual design stages from concept to final hand-off (User Flows, IA, Low fidelity wireframes, clickable prototypes, visual UI).</li><li>Conceptualize original ideas that bring simplicity and user-friendliness to complex design.</li><li>Create wireframes (prototypes) to effectively communicate interaction and design ideas.</li><li>Establish and promote design guidelines, best practices, and standards.</li></ul>', '<ul><li>Work in a modern growing IT company</li><li>Interesting projects</li><li>Good salary</li></ul><p>&nbsp;</p><ul><li>Modern office in the center of Minsk, Novopolotsk or Saint Petersburg</li><li>Medical Insurance, 100% sick leave coverage</li><li>The supportive environment where you can learn and grow with us!</li></ul><p>&nbsp;</p><ul><li>Work in a modern growing IT company</li><li>Interesting projects</li><li>Good salary</li></ul>', 'no tags', 5, 366, NULL, NULL, NULL, '2021-06-01 12:57:47');
INSERT INTO `vacancies` VALUES (9, 9, 'Unity Developer', 'unity-developer', 'FuryLion расширяет отдел программирования в Новополоцке Unity разработчиками для работы над казуальными играми.', 'FuryLion расширяет отдел программирования в Новополоцке Unity разработчиками для работы над казуальными играми.', 'FuryLion - это более 150 профессионалов своего дела, работающих в 3-ех офисах.\n\nУдаленно не рассматриваются!\n\nПроекты предполагаются как на аутсорс, так и внутренние разработки студии.', 'Возможность поработать над самыми успешными, всемирно известными мобильными и консольными продуктами.', NULL, 'Full Time', 'Junior, Middle, Senior', 'Unity, C#', '<ul><li>Опыт разработки игр на Unity3D</li><li>Отличное знание C#</li><li>Умение писать читабельный код без ошибок, следуя общим стандартам программирования и особенностям проекта</li><li>Умение и нормальное отношение задачам в которых нужно разбираться в чужом коде</li><li>Знание распространенных алгоритмов</li><li>Знание паттернов проектирования</li><li>Хорошее знание математической базы</li><li>Владение системами контроля версий (git)</li><li>Уверенный английский язык</li></ul>', '<ul><li>Знание Unreal Engine</li><li>Знание веб фреймворков для написания PlayableAds</li><li>Высшее образование по ИТ специальности</li><li>Знание основ гейм-дизайна</li><li>Умение работать с Photoshop (не рисовать)</li><li>Опыт работы с протоколами сериализации, такими как “proto-buf”</li><li>Опыт внедрения кастомных модулей, расширения редактора</li></ul>', '<ul><li>Работу в уютном офисе в центре Новополоцка</li><li>Вкусные комплексные обеды за счет компании</li></ul><p style=\"margin-left:20px;\">&nbsp;</p><ul><li>Адекватное руководство и опытных коллег</li><li>Своевременную и достойную оплату труда на карту Приорбанка в $</li></ul><p style=\"margin-left:20px;\">&nbsp;</p><ul><li>При желании и необходимости курсы английского прямо в офисе с преподавателем</li><li>Возможность бесконечного карьерного роста в компании</li></ul>', 'Unity, C#', 3, 876, NULL, NULL, NULL, NULL);
INSERT INTO `vacancies` VALUES (10, 10, 'Intern Developer', 'intern', 'Хотите связать свою жизнь с разработкой? FuryLion в поиске талантливых программистов C# и JavaScript для прохождения курсов по основам разработки игр. Курсы проходят офлайн в офисе нашей компании.', 'Хотите связать свою жизнь с разработкой? FuryLion в поиске талантливых программистов C# и JavaScript для прохождения курсов по основам разработки игр. Курсы проходят офлайн в офисе нашей компании.', 'FuryLion - это более 150 профессионалов своего дела, работающих в 3-ех офисах\n\nУдаленно не рассматриваются!\n\nПроекты предполагаются как на аутсорс, так и внутренние разработки студии', 'Возможность поработать над самыми успешными, всемирно известными мобильными и консольными продуктами', NULL, 'Full Time', 'Junior', 'Unity, JS, C#, HTML5', '<ul><li>Знание и опыт работы с C# или Javascript ES6 и выше</li><li>Знание объектно ориентированного программирования</li><li>Умение писать читабельный код без ошибок, следуя общим стандартам программирования и особенностям проекта</li><li>Умение и нормальное отношение задачам в которых нужно разбираться в чужом коде</li><li>Знание распространенных алгоритмов</li><li>Знание паттернов проектирования</li><li>Владение системами контроля версий (git)</li></ul>', '<ul><li>Знание Unreal Engine</li><li>Знание веб фреймворков для написания PlayableAds</li><li>Высшее образование по ИТ специальности</li><li>Умение работать с Photoshop (не рисовать)</li><li>Опыт внедрения кастомных модулей, расширения редактора</li><li>Знание Front-End фреймворков (Vue.js, React)</li><li>Уверенный английский язык</li></ul>', '<ul><li>Работу в уютном офисе в центре Новополоцка</li><li>Вкусные комплексные обеды за счет компании</li></ul><p style=\"margin-left:20px;\">&nbsp;</p><ul><li>Адекватное руководство и опытных коллег</li><li>Своевременную и достойную оплату труда на карту Приорбанка в $</li></ul><p style=\"margin-left:20px;\">&nbsp;</p><ul><li>При желании и необходимости курсы Английского прямо в офисе с преподавателем</li><li>Возможность бесконечного карьерного роста в компании</li></ul>', 'Unity, JS, C#, HTML5', 3, 873, NULL, NULL, NULL, NULL);
INSERT INTO `vacancies` VALUES (11, 11, 'test', 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, '2021-06-11 09:29:43');
COMMIT;

-- ----------------------------
-- Table structure for vacancy_locations
-- ----------------------------
DROP TABLE IF EXISTS `vacancy_locations`;
CREATE TABLE `vacancy_locations` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `priority` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_alias` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of vacancy_locations
-- ----------------------------
BEGIN;
INSERT INTO `vacancy_locations` VALUES (1, 1, 'Minsk', 'minsk', NULL);
INSERT INTO `vacancy_locations` VALUES (2, 2, 'Gomel', 'gomel', NULL);
INSERT INTO `vacancy_locations` VALUES (3, 3, 'Novopolotsk', 'novopolotsk', NULL);
INSERT INTO `vacancy_locations` VALUES (4, 4, 'Saint-Petersburg', 'saint-petersburg', NULL);
INSERT INTO `vacancy_locations` VALUES (5, 5, 'Remote', 'remote', NULL);
INSERT INTO `vacancy_locations` VALUES (6, 6, 'test', 'test', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
