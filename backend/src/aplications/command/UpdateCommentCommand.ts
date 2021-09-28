import { Comment } from '../../domain/entities/Comment';
import { CommentRepository } from '../repositories/CommentRepository';

export class UpdateCommentCommand {
    private commentRepository: CommentRepository;

    constructor(commentRepository: CommentRepository) {
        this.commentRepository = commentRepository;
    }

    public async execute(data: any, id: string): Promise<Comment> {
        return await this.commentRepository.update(data, id);
    }
}