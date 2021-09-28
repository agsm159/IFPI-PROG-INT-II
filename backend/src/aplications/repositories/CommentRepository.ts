import { Comment } from '../../domain/entities/Comment';

export interface CommentRepository {
    all(): Promise<Comment[]>;
    create(data: Comment): Promise<Comment>;
    update(data: Comment, id: string): Promise<Comment>
    getCommentIdService(idService: string): Promise<Comment[]>
}