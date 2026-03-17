import conexao from "../database/index.js";

class QuestoesTemasRepository{
    // Buscar todas as associações entre questões e temas
    findall() {
        const sql = 'SELECT * FROM tb_questoes_temas';
        return  new Promise ((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if (error) {
                    return reject(error);
                } 
            const questoesTemas = JSON.parse(JSON.stringify(result));
            resolve(questoesTemas);                
            });
        }); 
    }

    // Criar nova associação entre questão e tema
    create(id_questao, id_tema) {
        const sql = 'INSERT INTO tb_questoes_temas (id_questao, id_tema) VALUES (?, ?)';
        return new Promise ((resolve, reject) => {
            conexao.query(sql, [id_questao, id_tema], (error, result) => {
                if (error) {
                    return reject(error);
                }
            resolve(result.insertId)
            })
        })

    }

    // Apagar associação entre questão e TEMAS por id da questão
    deleteByQuestao(id_questao) {
        const sql = 'DELETE FROM tb_questoes_temas WHERE id_questao = ?';
        return new Promise ((resolve, reject) => {
            conexao.query(sql, [id_questao], (error, result) => {
                if (error) {
                    return reject(error);
                }
            resolve(result.affectedRows)
            })
        })
    }
    
    // Apagar associação entre questão e TEMAS por id do tema
    deleteByTema(id_tema) {
        const sql = 'DELETE FROM tb_questoes_temas WHERE id_tema = ?';
        return new Promise ((resolve, reject) => {
            conexao.query(sql, [id_tema], (error, result) => {
                if (error) {
                    return reject(error);
                }
            resolve(result.affectedRows)
            })
        })
    }
           
}