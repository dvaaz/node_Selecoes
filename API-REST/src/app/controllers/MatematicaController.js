import conexao from "../../../infra/conexao.js";
import Sanitize from "../utils/Sanitize.js";
// regra de negocios
// functions
function conectionStatusHandler(error, result){
    // TODO: limpar os if elses de resposta
}
const san = new Sanitize();

class MatematicaController {
    // Listar todas as questoes
    index(req,res){
        const sql = "SELECT * FROM db_matematica.tb_questoes;"
        conexao.query(sql, (error, result)=>{
            if(error) {
                console.log(error)
                // TODO: status 404 error
            } else {
                res.status(200).json(result)
            }
        })
    }
    
    // Listar todos os temas
    indexThemes(req, res){
        const sql = "SELECT * FROM db_matematica.tb_temas;"
        conexao.query(sql, (error, result)=>{
            if(error) {
                console.log(error)
                // TODO: status 404 error
            } else {
                res.status(200).json(result)
            }
        })
    }

    // Listar todas as questoes de um tema
    indexByTheme(req, res){
        const clrReq = san.text(req)
        console.log(clr_req.params.id)
        const id = clr_req.params.id;
        const sql = "SELECT * FROM db_matematica.tb_questoes WHERE id_tema=?;"
        conexao.query(sql, id, (error, result)=>{
            if(error) {
                console.log(error)
                // TODO: status 404 error
            } else {
                res.status(200).json(result)
            }
        })
    }

    // Buscar por id
    show(req, res){
        const clrReq = san.text(req)
        console.log(clr_req.params.id)
        const id = clr_req.params.id;
        const sql = "SELECT * FROM db_matematica.tb_questoes WHERE id=?;"
        conexao.query(sql, id, (error, result)=>{
            if(error) {
                console.log(error)
                // TODO: status 404 error
            } else {
                res.status(200).json(result)
            }
    })
    }

    // Listar por grupo
    // TODO: organizar para que sejam exibidos apenas os times de determinado grupo
    showGroup(){}

    // Criar dados
    store(req, res){
        const clrReq = san.text(req);
        console.log(req.body.json)
        const selecao = req.body
        const sql = "INSERT into db_matematica.tb_selecao (pais_selecao, grupo_delecao) values (?, ?);"
        conexao.query(sql, selecao, (error, resultado)=>{
            if(error) {
                console.log(error)
                // TODO: status 404 error
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    // Atualizar dados
    update(req, res){
        const clrReq = san.text(req);
        const id = clrReq.params.id;
        const selecao = clrReq.body;
        const sql = "UPDATE db_matematica.tb_selecao SET ? WHERE ?;"
        conexao.query(sql, [selecao, id], (error, resultado)=> {
            if(error) {
                console.log(error)
            } else {
                res.status(201).json(resultado)
            }
        })
    }
    
    // Remover dados
    delete(req, res){
        const clrReq = san.text(req);
        const id = clrReq.body
        const sql = "DELETE from db_matematica.tb_selecao WHERE id_selecao=?;"
        conexao.query(sql, id, (error, resultado)=>{
            if(error) {
                console.log(error)
                // TODO: status 404 error
            } else {
                res.status(200).json(resultado)
            }
        })
    }
}
// Padrão Singleton
export default new MatematicaController()