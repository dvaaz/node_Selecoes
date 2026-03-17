import conexao from "../database/index.js";
// persistencia
class QuestoesRepository {
    // Buscar todas as questões
    findall() {
        const sql = 'SELECT * FROM tb_questoes';
        return  new Promise ((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if (error) {
                    return reject(error);
                } 
            const questoes = JSON.parse(JSON.stringify(result));
            resolve(questoes);                
            });
        }); 
}
    // Buscar todas as questões por tema
    findByTheme(theme){
        const sql = `SELECT q.enunciado_questao, t.nome_tema
                    FROM tb_questoes q
                    JOIN tb_questoes_temas qt ON q.id_questao = qt.id_questao
                    JOIN tb_temas t ON qt.id_tema = t.id_tema
                    WHERE t.nome_tema = ?;`;
            return new Promise ((resolve, reject) => {
                conexao.query(sql, [theme], (error, result) => {
                    if (error) {
                        return reject (error);
                    }
                    const questoes = JSON.parse(JSON.stringify(result));
                    resolve(questoes);
                })
            })
    }
    // Buscar questão por id
    // apenas enunciado e id para associar a resposta e tema
    findById(id) {
        const sql = 'SELECT * FROM tb_questoes WHERE id = ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, [id], (error, result) => {
                if (error) {
                    return reject(error);
                }
                const questao = JSON.parse(JSON.stringify(result))[0];
                resolve(questao);
            })
        })
    }

    // Buscar questão por trecho do enunciado (teste)
    findByEnunciado(enunciado) {
        const sql = 'SELECT * FROM tb_questoes WHERE enunciado_questao LIKE ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, [`%${enunciado}%`], (error, result) => {
                if (error) {
                    return reject(error);
                }
                const questoes = JSON.parse(JSON.stringify(result));
                resolve(questoes);
            })
        });
    }

    // Buscar questao e respostas por id da questao (teste)
    showQuestaoComRespostas(id) {
        const sql = `SELECT q.enunciado_questao, r.texto_resposta, r.correta_resposta
                    FROM tb_questoes q
                    JOIN tb_respostas r ON q.id_questao = r.id_questao
                    WHERE q.id_questao = ?;`;
        return new Promise((resolve, reject) => {
            conexao.query(sql, [id], (error, result) => {
                if (error) {
                    return reject(error);
                }
                const questaoRespostas = JSON.parse(JSON.stringify(result));
                resolve(questaoComRespostas);
            })
        });
    }

    // Criar questão no banco de dados via conexao.query
    // request deve conter: enunciado_questao
    // returns o id da questão para associar ao tb_questoes_temas e tb_respostas
    create(enunciado) {
        const sql = 'INSERT INTO tb_questoes (enunciado_questao) VALUES (?)';
        const values = [enunciado.enunciado_questao];
        return new Promise((resolve, reject) => {
            conexao.query(sql, values, (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result.insertId);
            })
        });
    }

    // Alterar questão
        update(id, enunciado) {
        const sql = 'UPDATE tb_questoes SET ? WHERE id = ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, [enunciado, id], (error, result) => {
                if (error) {
                    return reject(error);
                }
                resolve(result);
            })
        });
    }

    // Remover questão
        delete(id) {
            const sql = 'DELETE FROM tb_questoes WHERE id = ?';
            return new Promise((resolve, reject)=> {
                conexao.query(sql, id, (error, result) => {
                    if(error) {
                        return reject(error);
                    }
                    resolve(result);
                })
            })
        }
}
export default new QuestoesRepository();