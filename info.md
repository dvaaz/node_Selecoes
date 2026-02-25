##
no package.json:   "type": "module"
é como informo que quero utilizar o ECMA JS

Banco de dados Selecoes => 
## Schema
CREATE SCHEMA db_selecoes DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
## table
CREATE TABLE `db_selecoes`.`db_selecao` (
  `id_selecao` INT NOT NULL AUTO_INCREMENT,
  `pais_selecao` VARCHAR(45) NOT NULL,
  `grupo_selecao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_selecao`));
