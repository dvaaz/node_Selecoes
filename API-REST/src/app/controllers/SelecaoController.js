import conexao from "../../../infra/conexao.js"
// regra de negocios
// functions
function conectionStatusHandler(error, result){
    // TODO: limpar os if elses de resposta
}

class SelecaoController {
    // Listar tudo
    index(req,res){
        const sql = "SELECT * FROM db_selecoes.db_selecao;"
        conexao.query(sql, (error, result)=>{
            if(error) {
                console.log(error)
                // TODO: status 404 error
            } else {
                res.status(200).json(result)
            }
        })
    }
    
    // Listar por id
    show(req, res){
        console.log(req.params.id)
        const id = req.params.id;
        const sql = "SELECT * FROM db_selecoes.db_selecao WHERE id_selecao=?;"
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
        console.log(req.body.json)
        const selecao = req.body
        const sql = "INSERT into db_selecoes.db_selecao SET ?;"
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
        const id = req.params.id;
        const selecao = req.body;
        const sql = "UPDATE db_selecoes.db_selecao SET ? WHERE ?;"
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
        const id = req.body
        const sql = "DELETE from db_selecoes.db_selecao WHERE id_selecao=?;"
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
export default new SelecaoController()