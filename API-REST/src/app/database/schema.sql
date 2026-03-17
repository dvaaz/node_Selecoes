-- Tabela de questões de matemática
CREATE SCHEMA IF NOT EXISTS db_matematica DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
-- CREATE DATABASE IF NOT EXISTS db_matematica DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
-- Tabela de temas (adição, subtração, potenciação, mmc, etc...)
CREATE TABLE IF NOT EXISTS tb_temas (
    id_tema INT PRIMARY KEY AUTO_INCREMENT,
    nome_tema VARCHAR(100) NOT NULL UNIQUE
);

-- Tabela de questões
CREATE TABLE IF NOT EXISTS tb_questoes (
    id_questao INT PRIMARY KEY AUTO_INCREMENT,
    enunciado_questao TEXT NOT NULL UNIQUE
);

-- Tabela de respostas
CREATE TABLE IF NOT EXISTS tb_respostas (
    id_resposta INT PRIMARY KEY AUTO_INCREMENT,
    id_questao INT NOT NULL,
    texto_resposta VARCHAR(255) NOT NULL,
    resposta_correta BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT fk_respostas_questoes
    FOREIGN KEY (id_questao) REFERENCES tb_questoes(id_questao)
);

-- Tabela de ligação (questões podem ter mais de um tema)
CREATE TABLE IF NOT EXISTS tb_questoes_temas (
    id_questao INT NOT NULL,
    id_tema INT NOT NULL,
    PRIMARY KEY (id_questao, id_tema),
    CONSTRAINT fk_questoes_temas_questao
    FOREIGN KEY (id_questao) REFERENCES tb_questoes(id_questao),
    CONSTRAINT fk_questoes_temas_temas
    FOREIGN KEY (id_tema) REFERENCES tb_temas(id_tema)
);
-- possibilita o controle das primeiras questoes a serem inseridas, para evitar erros de chave primária
-- SET IDENTITY_INSERT db_matematica.tb_questoes ON; -- não está funcionando, confiar no auto_increment para resolver o problema de chaves primárias 
INSERT INTO db_matematica.tb_questoes (id_questao, enunciado_questao) VALUES
(1, '(CMRJ) As cutias estão economizando suas mesadas desde o início do ano. Até agora, nem Zilah nem seu irmão Thomaz alcançaram, separadamente, os mil reais. O valor que Thomaz economizou corresponde ao maior múltiplo de 32 e o de Zilah, ao maior múltiplo de 29. Juntos, eles vão comprar um novo computador para presentear a mãe, que faz aniversário no final do ano. O presente custa R$ 2.530,00. A quantia que está faltando é um número cuja soma dos algarismos é'),
(2, '(CMR) Considere que seja possível o produto das 6 (seis) letras da palavra RECIFE (vide anotação abaixo); onde x representa o sinal de multiplicação, letras iguais são um mesmo número e letras distintas são números diferentes e naturais de 1 a 13 inclusive. R x E x C x I x F x E = 390 Assim sendo, a soma dessas 6 letras é um número'),
(3, 'Quanto é 3 x 4?'),
(4, 'Quanto é 10 ÷ 2?');

INSERT INTO db_matematica.tb_temas (id_tema, nome_tema) VALUES
(1, 'Múltiplos e Divisores'),
(2, 'Adição'),
(3, 'Subtração'),
(4, 'Multiplicação'),
(5, 'Divisão'),
(6, 'Potenciação'),
(7, 'MMC e MDC');

INSERT INTO db_matematica.tb_questoes_temas (id_questao, id_tema) VALUES
(1, 1),
(2, 1);

INSERT INTO db_matematica.tb_respostas (id_resposta, id_questao, texto_resposta, resposta_correta) VALUES
(1, 1, '12', TRUE),
(2, 1, '17', FALSE),
(3, 1, '20', FALSE),
(4, 1, '23', FALSE),
(5, 1, '11', FALSE),
(6, 2, 'divisível por 3', FALSE),
(7, 2, 'múltiplo 4', FALSE),
(8, 2, 'múltiplo de 5', TRUE),
(9, 2, 'múltiplo de 7', FALSE),
(10, 2, 'par', FALSE);