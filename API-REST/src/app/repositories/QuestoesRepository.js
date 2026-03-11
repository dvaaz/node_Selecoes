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
                conexao.query(sql, theme, (error, result) => {
                    if (error) {
                        return reject (error);
                    }
                    const questoes = JSON.parse(JSON.stringify(result));
                    resolve(questoes);
                })
            })
    }
    // Buscar questão por id
    findById(id) {
        const sql = 'SELECT * FROM tb_questoes WHERE id = ?';
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, result) => {
                if (error) {
                    return reject(error);
                }
                const questao = JSON.parse(JSON.stringify(result))[0];
                resolve(questao);
            })
        })
    }
}