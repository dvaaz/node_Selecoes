import express from 'express'
import QuestoesController from './controllers/QuestoesController.js'
import TemaController from './controllers/TemaController.js'

const app = express()


// Indicar para o express ler o body como json
app.use(express.json())






export default app
