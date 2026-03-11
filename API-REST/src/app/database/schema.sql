-- Tabela de questões de matemática
CREATE SCHEMA db_matematica DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
-- Tabela de temas (adição, subtração, potenciação, mmc, etc...)
CREATE TABLE tb_temas (
    id_tema INT PRIMARY KEY AUTO_INCREMENT,
    nome_tema VARCHAR(100) NOT NULL
);

-- Tabela de questões
CREATE TABLE tb_questoes (
    id_questao INT PRIMARY KEY AUTO_INCREMENT,
    enunciado_questao TEXT NOT NULL,
);

-- Tabela de respostas
CREATE TABLE tb_respostas (
    id_resposta INT PRIMARY KEY AUTO_INCREMENT,
    id_questao INT NOT NULL,
    texto_resposta VARCHAR(255) NOT NULL,
    resposta_correta BOOLEAN NOT NULL DEFAULT FALSE,
    CONSTRAINT fk_respostas_questoes
    FOREIGN KEY (id_questao) REFERENCES tb_questoes(id_questao)
);

-- Tabela de ligação (questões podem ter mais de um tema)
CREATE TABLE tb_questoes_temas (
    id_questao INT NOT NULL,
    id_tema INT NOT NULL,
    PRIMARY KEY (id_questao, id_tema),
    CONSTRAINT fk_questoes_temas_questao
    FOREIGN KEY (id_questao) REFERENCES tb_questoes(id_questao),
    CONSTRAINT fk_questoes_temas_temas
    FOREIGN KEY (id_tema) REFERENCES tb_temas(id_tema)
);