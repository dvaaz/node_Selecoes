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


// TODO:
CREATE SCHEMA db_selecao DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;

CREATE TABLE `db_selecao`.`tb_posicao` (
  `id_posicao` INT NOT NULL AUTO_INCREMENT,
  `nome_posicao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_posicao`));
)

CREATE TABLE `db_selecao`.`tb_time` (
  `id_time` INT NOT NULL AUTO_INCREMENT,
  `nome_time` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_time`));
)

CREATE TABLE `db_selecao`.`tb_pais` (
  `id_pais` INT NOT NULL AUTO_INCREMENT,
  `nome_pais` VARCHAR(45)  NOT NULL,
  PRIMARY KEY (`id_pais`));
)

CREATE TABLE `db_selecao`.`tb_jogadores` (
  `id_jogador` INT NOT NULL AUTO_INCREMENT,
  `nome_jogador` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id_jogador`)
)