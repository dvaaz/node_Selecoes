// Controler de temas
import conexao from "../database/index.js";
import Sanitize from "../utils/Sanitize.js";
// regra de negocios
// functions
function conectionStatusHandler(error, result){
    // TODO: limpar os if elses de resposta
}
const san = new Sanitize();

class TemaController {
    // Listar todos os temas
    index(req, res){
        const sql = "SELECT * FROM db_matematica.tb_temas;"
        conexao.query(sql, (error, result)=>{
            if(error) {
                console.log(error);
                res.status(404).json({ error: "Temas não encontrados" });
            } else {
                res.status(200).json(result);
            }
        });
    }
}