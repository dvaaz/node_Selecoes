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


CREATE SCHEMA db_selecao DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
## Tabela para criacao de selecoes aleatórias
-- Tabela de posições
CREATE TABLE `db_selecao`.`tb_posicao` (
  `id_posicao` INT NOT NULL AUTO_INCREMENT,
  `nome_posicao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_posicao`)
);

-- Tabela de times
CREATE TABLE `db_selecao`.`tb_time` (
  `id_time` INT NOT NULL AUTO_INCREMENT,
  `nome_time` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_time`)
);

-- Tabela de países
CREATE TABLE `db_selecao`.`tb_pais` (
  `id_pais` INT NOT NULL AUTO_INCREMENT,
  `nome_pais` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_pais`)
);

-- Tabela de jogadores
CREATE TABLE `db_selecao`.`tb_jogadores` (
  `id_jogador` INT NOT NULL AUTO_INCREMENT,
  `nome_jogador` VARCHAR(60) NOT NULL,
  `id_time` INT NOT NULL,
  `id_pais` INT NOT NULL,
  PRIMARY KEY (`id_jogador`),
  CONSTRAINT `fk_jogador_time`
    FOREIGN KEY (`id_time`)
    REFERENCES `db_selecao`.`tb_time`(`id_time`),
  CONSTRAINT `fk_jogador_pais`
    FOREIGN KEY (`id_pais`)
    REFERENCES `db_selecao`.`tb_pais`(`id_pais`)
);

-- Relação N:N entre jogador e posição
CREATE TABLE `db_selecao`.`tb_jogador_posicao` (
  `id_jogador` INT NOT NULL,
  `id_posicao` INT NOT NULL,
  PRIMARY KEY (`id_jogador`, `id_posicao`),
  CONSTRAINT `fk_jogador_posicao_jogador`
    FOREIGN KEY (`id_jogador`)
    REFERENCES `db_selecao`.`tb_jogadores`(`id_jogador`),
  CONSTRAINT `fk_jogador_posicao_posicao`
    FOREIGN KEY (`id_posicao`)
    REFERENCES `db_selecao`.`tb_posicao`(`id_posicao`)
);

-- Tabela de seleção 
CREATE TABLE `db_selecao`.`tb_selecao` (
  `id_selecao` INT NOT NULL AUTO_INCREMENT,
  `nome_selecao` VARCHAR(100) NOT NULL,
  `id_pais` INT NOT NULL UNIQUE,
  PRIMARY KEY (`id_selecao`),
  CONSTRAINT `fk_selecao_pais`
    FOREIGN KEY (`id_pais`)
    REFERENCES `db_selecao`.`tb_pais`(`id_pais`)
);

-- Relação entre seleção e jogadores
CREATE TABLE `db_selecao`.`tb_escalacao_selecao` (
  `id_escalacao_selecao` INT NOT NULL AUTO_INCREMENT,
  `id_selecao` INT NOT NULL,
  `id_jogador` INT NOT NULL,
  `id_posicao` INT NOT NULL,
  PRIMARY KEY (`id_escalacao_selecao`),
  CONSTRAINT `fk_escalacao_selecao_selecao`
    FOREIGN KEY (`id_selecao`)
    REFERENCES `db_selecao`.`tb_selecao`(`id_selecao`),
  CONSTRAINT `fk_escalacao_selecao_jogador`
    FOREIGN KEY (`id_jogador`)
    REFERENCES `db_selecao`.`tb_jogadores`(`id_jogador`),
  CONSTRAINT `fk_escalacao_selecao_posicao`
    FOREIGN KEY (`id_posicao`)
    REFERENCES `db_selecao`.`tb_posicao`(`id_posicao`)
);

-- Anotação da escalação da seleção
CREATE TABLE `tb_escalacao` (
  `id_escalacao` INT AUTO_INCREMENT,
  `id_selecao` INT NOT NULL,
  `data_escalacao` DATETIME,
  PRIMARY KEY (`id_escalacao`),

  CONSTRAINT `fk_escalacao_selecao`
  FOREIGN KEY (`id_selecao`)
  REFERENCES tb_selecao(`id_selecao`)
);
