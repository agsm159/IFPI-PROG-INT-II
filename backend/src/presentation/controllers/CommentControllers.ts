import { Request, Response } from 'express';
import { FirestoreCommentRepository } from '../../infrastructure/persistence/firestore/repositories/FirestoreCommentRepository';
import { CreateCommentCommand } from '../../aplications/command/CreateCommentCommands';
import { GetAllCommentsQuery } from '../../aplications/query/GetAllCommentsQuery';
import { UpdateCommentCommand } from '../../aplications/command/UpdateCommentCommand';
import { GetCommentIdServiceQuery } from '../../aplications/query/GetCommentIdServiceQuery';

export class CommentController {
    public async createComment(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreCommentRepository();
        const query = new CreateCommentCommand(repoService);

        const { author, text, idService } = req.body;

        const comment = await query.execute({
            author: author,
            text: text,
            idService: idService
        });

        return res.status(200).json(comment);
    }


    public async getAllComment(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreCommentRepository();
        const query = new GetAllCommentsQuery(repoService);
        const services = await query.execute();

        return res.status(200).json(services);
    }

    public async updateComment(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreCommentRepository();
        const query = new UpdateCommentCommand(repoService);

        const { author, text } = req.body;

        const comment = await query.execute({
            author: author,
            text: text
        }, req.params.id);

        return res.status(200).json(comment)
    }

    public async getCommentIdService(req: Request, res: Response): Promise<Response> {
        const repoService = new FirestoreCommentRepository();
        const query = new GetCommentIdServiceQuery(repoService);

        const { idService } = req.body

        const comments = await query.execute(idService)

        return res.status(200).json(comments)
    }
}

