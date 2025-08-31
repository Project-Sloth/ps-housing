UPDATE `properties` SET `price` = 0 WHERE `price` < 0;
ALTER TABLE `properties` MODIFY COLUMN `price` INT(11) UNSIGNED NOT NULL DEFAULT '0';