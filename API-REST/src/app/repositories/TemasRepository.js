import conexao from "../database/index.js";

class TemasRepository {
    // Buscar todas os temas
    findall() {
        const sql = 'SELECT * FROM tb_temas';
        return  new Promise ((resolve, reject) => {
            conexao.query(sql, (error, result) => {
                if (error) {
                    return reject(error);
                } 
            const temas = JSON.parse(JSON.stringify(result));
            resolve(temas);                
            });
        }); 
}

    // Criar novo tema
    store() {
        const sql = 'INSERT INTO tb_temas (nome_tema) VALUES (?)';
        return new Promise ((resolve, reject) => {
            conexao.query(sql, [nome_tema], (error, result) => {
                if (error) {
                    return reject(error);
                }
            resolve(result.insertId)
            })
        })

    }
}