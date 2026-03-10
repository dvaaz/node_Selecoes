-- Tabela de questões de matemática
CREATE SCHEMA db_matematica DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
-- Tabela de temas (adição, subtração, potenciação, mmc, etc...)
CREATE TABLE temas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

-- Tabela de questões
CREATE TABLE questoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    enunciado TEXT NOT NULL,
);

-- Tabela de respostas
CREATE TABLE respostas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    questao_id INT NOT NULL,
    texto VARCHAR(255) NOT NULL,
    correta BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT fk_respostas_questoes
    FOREIGN KEY (questao_id) REFERENCES questoes(id)
);

-- Tabela de ligação (questões podem ter mais de um tema)
CREATE TABLE questoes_temas (
    questao_id INT NOT NULL,
    tema_id INT NOT NULL,
    PRIMARY KEY (questao_id, tema_id),
    CONSTRAINT fk_questoes_temas_questao
    FOREIGN KEY (questao_id) REFERENCES questoes(id),
    CONSTRAINT fk_questoes_temas_temas
    FOREIGN KEY (tema_id) REFERENCES temas(id)
);