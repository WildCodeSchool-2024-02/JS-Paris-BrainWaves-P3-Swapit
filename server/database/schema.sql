-- MySQL Script generated by MySQL Workbench
-- Fri Jun 21 12:03:26 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema swapit_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema swapit_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `swapit_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `swapit_db` ;

-- -----------------------------------------------------
-- Table `swapit_db`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swapit_db`.`category` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`category_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 23
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `swapit_db`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swapit_db`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `picture` TEXT NULL DEFAULT NULL,
  `is_admin` TINYINT NOT NULL DEFAULT FALSE,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `phone_UNIQUE` (`phone` ASC) VISIBLE,
  UNIQUE INDEX `e-mail_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `swapit_db`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swapit_db`.`comment` (
  `comment_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `date` DATETIME NOT NULL,
  `content` TEXT NOT NULL,
  PRIMARY KEY (`comment_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `comment_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `swapit_db`.`user` (`user_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `swapit_db`.`transaction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swapit_db`.`transaction` (
  `transaction_id` INT NOT NULL AUTO_INCREMENT,
  `transaction_date` DATETIME NOT NULL,
  `Status` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`transaction_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `swapit_db`.`exchange`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swapit_db`.`exchange` (
  `exchange_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL DEFAULT NULL,
  `transaction_id` INT NULL DEFAULT NULL,
  `comment_id` INT NULL DEFAULT NULL,
  `date` DATETIME NOT NULL,
  PRIMARY KEY (`exchange_id`),
  INDEX `exchange_user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `exchange_transaction_id_idx` (`transaction_id` ASC) VISIBLE,
  INDEX `exchange_comment_id_idx` (`comment_id` ASC) VISIBLE,
  CONSTRAINT `exchange_comment_id`
    FOREIGN KEY (`comment_id`)
    REFERENCES `swapit_db`.`comment` (`comment_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `exchange_transaction_id`
    FOREIGN KEY (`transaction_id`)
    REFERENCES `swapit_db`.`transaction` (`transaction_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `exchange_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `swapit_db`.`user` (`user_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `swapit_db`.`item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swapit_db`.`item` (
  `item_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT NOT NULL,
  `conditions` VARCHAR(50) NOT NULL,
  `date_added` DATETIME NOT NULL,
  `image_url` TEXT NOT NULL,
  `location` VARCHAR(100) NOT NULL,
  `swap_request` TEXT NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  `category_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  INDEX `user_id_idx` (`user_id` ASC) VISIBLE,
  INDEX `category_id_idx` (`category_id` ASC) VISIBLE,
  CONSTRAINT `item_category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `swapit_db`.`category` (`category_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `item_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `swapit_db`.`user` (`user_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `swapit_db`.`transaction_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `swapit_db`.`transaction_item` (
  `transaction_item_id` INT NOT NULL AUTO_INCREMENT,
  `item_id` INT NULL DEFAULT NULL,
  `transaction_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`transaction_item_id`),
  INDEX `item_id_idx` (`item_id` ASC) VISIBLE,
  INDEX `transaction_id_idx` (`transaction_id` ASC) VISIBLE,
  CONSTRAINT `item_id`
    FOREIGN KEY (`item_id`)
    REFERENCES `swapit_db`.`item` (`item_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `transaction_id`
    FOREIGN KEY (`transaction_id`)
    REFERENCES `swapit_db`.`transaction` (`transaction_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;





SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
