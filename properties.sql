DROP table IF EXISTS `properties`;

CREATE TABLE IF NOT EXISTS `properties` (
    `property_id` int(11) NOT NULL AUTO_INCREMENT,
    `owner_citizenid` varchar(50) NULL,
    `label` VARCHAR(50) NOT NULL,
    `description` LONGTEXT NULL,
    `has_access` JSON NULL DEFAULT (JSON_ARRAY()), -- [citizenid1, citizenid2, ...]
    `extra_imgs` JSON NULL DEFAULT (JSON_ARRAY()),
    `furnitures` JSON NULL DEFAULT (JSON_ARRAY()),
    `for_sale` boolean NOT NULL DEFAULT 0,
    `price` int(11) NOT NULL DEFAULT 0,
    `shell` varchar(50) NOT NULL,
    `door_data` JSON NOT NULL DEFAULT (JSON_OBJECT()), -- {"x": 0.0, "y": 0.0, "z": 0.0, "h": 0.0, "length": 0.0, "width": 0.0}
    `garage_data` JSON NULL DEFAULT (JSON_OBJECT()), -- {"x": 0.0, "y": 0.0, "z": 0.0} -- NULL if no garage
    PRIMARY KEY (`property_id`),
    CONSTRAINT `FK_owner_citizenid` FOREIGN KEY (`owner_citizenid`) REFERENCES `players` (`citizenid`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1;

