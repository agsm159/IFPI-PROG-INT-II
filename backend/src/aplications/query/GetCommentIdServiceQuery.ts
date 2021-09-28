import { Comment } from '../../domain/entities/Comment';
import { CommentRepository } from '../repositories/CommentRepository';

export class GetCommentIdServiceQuery {
    private commentRepository: CommentRepository;

    constructor(commentRepository: CommentRepository) {
        this.commentRepository = commentRepository;
    }

    public async execute(idService: string): Promise<Comment[]> {
        return await this.commentRepository.getCommentIdService(idService);
    }
}
