import QuestoesRepository from "../repositories/QuestoesRepository.js";
import Sanitize from "../utils/Sanitize.js";
// regra de negocios
// functions
function conectionStatusHandler(error, result){
    // TODO: limpar os if elses de resposta
}

// const san = new Sanitize();

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
    
    
    // Listar questoes por tema (trabalhando com id do tema)
    async findByTheme(req, res){
        try{
            if(isEmpty(req.id_tema)) {
                return res.status(400).json({ error: "Requisição vazia" });
            }
            // const clrReq = san.text(req.id_tema);
            const result = await QuestoesRepository.findByTheme(req.params.id_tema);
            res.status(200).json(result);
        } catch(error) {
                console.log(error);
                res.status(404).json({ error: "Questões não encontradas" });
            }
    }

    // Encontrar por Id
    async findById(req, res){
        try{
            if(isEmpty(req.params.id_questao)) {
                return res.status(400).json({ error: "Requisição vazia" });
            }
            // const clrReq = san.text(req);
            const result = await QuestoesRepository.findById(req.params.id_questao);
            res.status(200).json(result);
        } catch(error) {
            console.log(error);
            res.status(404).json({ error: "Questão não encontrada" });
        }
    }

    // Busca por trecho do enunciado com tratamento (funcionará????)
    async findByEnunciado(req, res){
        try{
            if(isEmpty(req.query.enunciado_questao)) {
                return res.status(400).json({ error: "Requisição vazia" });
            }
            // const clrReq = san.text(req.query.enunciado_questao);
            const result = await QuestoesRepository.findByEnunciado(req.query.enunciado_questao);
            res.status(200).json(result);
        } catch(error) {
            console.log(error);
            res.status(404).json({ error: "Questões não encontradas" });
        }
    }

    async showQuestaoComRespostas(req, res){
        try{
            if(isEmpty(req.params.id_questao)) {
                return res.status(400).json({ error: "Requisição vazia" });
            }
            // const clrReq = san.text(req.params.id_questao);
            const result = await QuestoesRespository.showQuestaoComRespostas(req.params.id_questao);
            res.status(200).json(result);
        } catch(error) {
            console.log(error);
            res.status(404).json({ error: "Questão não encontrada" });
        }
    }

    // Criar questão
    // tratamento do request atraves de sanitizacao 
    // campos: enunciado_questao
    // TODO:Haverá também o tratamento para associar a questão ao tema e as respostas
    async store(req, res){
        try{
            if(isEmpty(req.body.enunciado_questao)) {
                return res.status(400).json({error: "Enunciado vazio"});
            }
            // const clrReq = san.text(req.body.enunciado_questao); 
            // Cria questao com enunciado e retorna id
            const idQuestao = await QuestoesRepository.create({
                enunciado_questao: req.body.enunciado_questao
            });
            
            
            
            

        } catch(error) {
            console.log(error);
            res.status(400).json({ error: "Erro ao criar questão" });
        }

    }

    // Atualizar dados
    async update(req, res){
        if(isEmpty(req.params.id_questao) || isEmpty(req.body.enunciado_questao)) {
            return res.status(400).json({ error: "Requisição vazia" });
        }
        // const clrReq = san.text(req);
        try{
            const id = req.params.id_questao;
            const enunciado_questao = req.body.enunciado_questao;
            const result = await QuestoesRepository.update(id, enunciado_questao);
        }

    }
    
    // Remover dados, deletando também a relacao da questao com tema e delecao de respostas com o mesmo id
    async delete(req, res){
 
}
// Padrão Singleton
export default new QuestoesController()