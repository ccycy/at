/*
Navicat MySQL Data Transfer

Source Server         : ccy
Source Server Version : 50618
Source Host           : localhost:3306
Source Database       : awt

Target Server Type    : MYSQL
Target Server Version : 50618
File Encoding         : 65001

Date: 2018-11-03 16:46:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `class`
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `year` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of class
-- ----------------------------
INSERT INTO `class` VALUES ('1', '一年级', 'https://img.alicdn.com/imgextra/i3/1699775349/TB225mKd8fM8KJjSZFhXXcRyFXa_!!1699775349.jpg');

-- ----------------------------
-- Table structure for `hour`
-- ----------------------------
DROP TABLE IF EXISTS `hour`;
CREATE TABLE `hour` (
  `hour_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '课时',
  `hour_name` varchar(255) DEFAULT NULL COMMENT '课时名称',
  `hour_url` varchar(255) DEFAULT NULL COMMENT '听力文件链接',
  `unit_id` int(11) DEFAULT NULL COMMENT '单元名称',
  PRIMARY KEY (`hour_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hour
-- ----------------------------

-- ----------------------------
-- Table structure for `unit`
-- ----------------------------
DROP TABLE IF EXISTS `unit`;
CREATE TABLE `unit` (
  `unit_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '单元表',
  `unitName` varchar(255) DEFAULT NULL COMMENT '单元名称',
  `class_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`unit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of unit
-- ----------------------------
