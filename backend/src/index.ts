import express from 'express'
import cors from 'cors'
import './infrastructure/persistence/firestore/repositories/FirestoreServiceRepository'
import { ServiceController } from './presentation/controllers/ServiceControllers';
import { CommentController } from './presentation/controllers/CommentControllers';

const app = express()
app.use(express.json())
app.use(cors())

const serviceController = new ServiceController()
const commentController = new CommentController()

app.get('/services', serviceController.getAllServices)

app.post('/service', serviceController.createService)

app.put('/service/:id', serviceController.updateService)

app.get('/service-called-off/:id', serviceController.setCalledOff)

app.get('/service-concluded/:id', serviceController.setConcluded)

app.get('/comments', commentController.getAllComment)

app.post('/comment', commentController.createComment)

app.post('/getCommentIdService', commentController.getCommentIdService)
// arrow function () => {}
app.listen(3000, () => {
    console.log('App running...')
})