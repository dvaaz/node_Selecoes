import express from 'express'
import SelecaoController from './app/controllers/SelecaoController.js'

const app = express()


// Indicar para o express ler o body como json
app.use(express.json())



// GET, todas as seleções
app.get('/selecoes', SelecaoController.index)

app.get('/selecoes/:id', SelecaoController.show)

// POST, selecao
app.post('/selecoes', SelecaoController.store)

// DELETE, selecao
// TODO está errado (refatorar)
app.delete('/selecoes/:id', SelecaoController.delete)
// Fazer o PUT
// PUT, selecao
app.put("/selecoes/:id", SelecaoController.update);


export default app
