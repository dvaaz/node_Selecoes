import conexao from "../../../infra/conexao";
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
    findallByTheme(theme){
        const sql = 'SELECT  FROM tb_questoes WHERE '
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