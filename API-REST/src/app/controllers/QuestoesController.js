import QuestoesRepository from "../repositories/QuestoesRepository.js";
import Sanitize from "../utils/Sanitize.js";
// regra de negocios
// functions
function conectionStatusHandler(error, result){
    // TODO: limpar os if elses de resposta
}
const san = new Sanitize();

class QuestoesController {
    // Listar todas as questoes
    async index(req,res){
        try{
            const result = await QuestoesRepository.findall();
            res.status(200).json(result);
        } catch(error) {
                console.log(error);
                res.status(404).json({ error: "Questões não encontradas" });
            }
        }
    
    
    // Listar questoes por tema
    async findByTheme(req, res){
        try{
            const clrReq = san.text(req);
            const result = await QuestoesRepository.findByTheme(clrReq.query.tema);
            res.status(200).json(result);
        } catch(error) {
                console.log(error);
                res.status(404).json({ error: "Questões não encontradas" });
            }
    }

    // Encontrar por Id
    async findById(req, res){
        try{
            const clrReq = san.text(req);
            const result = await QuestoesRepository.findById(clrReq.params.id);
            res.status(200).json(result);
        } catch(error) {
            console.log(error);
            res.status(404).json({ error: "Questão não encontrada" });
        }
    }

    // Busca por trecho do enunciado com tratamento
    async findByEnunciado(req, res){
        try{
            const clrReq = san.text(req);
            const result = await QuestoesRepository.findByEnunciado(clrReq.query.enunciado);
            res.status(200).json(result);
        } catch(error) {
            console.log(error);
            res.status(404).json({ error: "Questões não encontradas" });
        }
    }

    // Criar questão
    // tratamento do request atraves de sanitizacao
    // campos: enunciado_questao
    // TODO:Haverá também o tratamento para associar a questão ao tema e as respostas
    async store(req, res){
        try{
            const clrReq = san.text(req);
            const result = await QuestoesRepository.create(clrReq.body);
            res.status(201).json(result);
        } catch(error) {
            console.log(error);
            res.status(400).json({ error: "Erro ao criar questão" });
        }

    }

    // Atualizar dados
    async update(req, res){
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
export default new QuestoesController()