import { Comment } from '../../domain/entities/Comment';
import { CommentRepository } from '../repositories/CommentRepository';

export class GetAllCommentsQuery {
    private commentRepository: CommentRepository;

    constructor(commentRepository: CommentRepository) {
        this.commentRepository = commentRepository;
    }

    public async execute(): Promise<Comment[]> {
        return await this.commentRepository.all();
    }
}
