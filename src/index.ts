import express, { Request, Response } from 'express'
import cors from 'cors'
import './infrastructure/persistence/firestore/repositories/FirestoreServiceRepository'
import { db } from './infrastructure/persistence/firestore/index'
import { ServiceController } from './presentation/controllers/ServiceControllers';

const app = express()

// Inicilizando o Firebase: 
// movido para infra../firestore/index.ts

app.use(express.json())
app.use(cors())

const serviceController = new ServiceController()
// rotas (Filme: id, nome, tema, ano, duracao)
app.get('/services', serviceController.getAllServices)

app.post('/service', serviceController.createService)

app.put('/service/:id', serviceController.updateService)

app.put('/filmes/:id', (req, res) => {
    // 1. pegar no BD o obj de id, e atualizar seu dados
    // 2. return obj atualizado

    const { id } = req.params

    const filme = { id, nome: 'Lagoa Azul', ano: 1995 }

    // TODO

    return res.json(filme)
})

app.delete('/filmes/:id', (req, res) => {
    const { id } = req.params
    // TODO

    return res.status(204).send()
})


// arrow function () => {}
app.listen(3000, () => {
    console.log('App running...')
})