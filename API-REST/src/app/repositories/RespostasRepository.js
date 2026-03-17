import conexao from "../database/index.js";

class RespostasRepository {
    // Buscar Respostas de uma questão
    findByIdQuestao(id){
        const sql = `SELECT r.id_resposta, r.texto_resposta, r.correta_resposta
                    FROM tb_respostas r
                    JOIN tb_questoes q ON r.id_questao = q.id_questao
                    WHERE q.id_questao = ?;`;

        return new Promise ((resolve, reject) => {
            conexao.query(sql, [id], (error, result) => {
                if (error) {
                    return reject(error);
                }
                const respostas = JSON.parse(JSON.stringify(result));
                resolve(respostas);
            })
        })
    }

    // Criar respostas no banco de dados
    store(id_questao, texto_resposta, correta_resposta) {
        const sql = 'INSERT INTO tb_respostas (id_questao, texto_resposta, correta_resposta) VALUES (?, ?, ?)';
        return new Promise ((resolve, reject) => {
            conexao.query(sql, [id_questao, texto_resposta, correta_resposta], (error, result) => {
                if (error) {
                    return reject(error);
                }
            resolve(result.insertId)
            })
        })
    }

    // Atualizar resposta
    update(id_resposta, texto_resposta, correta_resposta) {
        const sql = 'UPDATE tb_respostas SET texto_resposta = ?, correta_resposta = ? WHERE id_resposta = ?';
        return new Promise ((resolve, reject) => {
            conexao.query(sql, [texto_resposta, correta_resposta, id_resposta], (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result.affectedRows);
            });
        });
    }

    // Delecao de UMA resposta por id da resposta
    deleteById(id_resposta) {
        const sql = 'DELETE FROM tb_respostas WHERE id_resposta = ?';
        return new Promise ((resolve, reject) => {
            conexao.query(sql, [id_resposta], (error, result) => {
                if (error) {
                    return reject(error);
                }
            resolve(result.affectedRows)
            })
        })
    }

    // Delecao de todas as respostas por id da questao
    deleteByIdQuestao(id_questao){
        const sql = 'DELETE FROM tb_respostas WHERE id_questao = ?';
        return new Promise ((resolve, reject) => {
            conexao.query(sql, [id_questao], (error, result) => {
                if (error) {
                    return reject(error);
                }
            resolve(result.affectedRows)
            })
        })
    }
}