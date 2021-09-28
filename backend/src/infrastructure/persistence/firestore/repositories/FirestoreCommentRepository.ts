import { db } from "..";
import { CommentRepository } from "../../../../aplications/repositories/CommentRepository";
import { Comment } from "../../../../domain/entities/Comment";
import { Service } from "../../../../domain/entities/Service";
import { ServiceRepository } from "../../../../aplications/repositories/ServiceRepository";

export class FirestoreCommentRepository implements CommentRepository {

    public async create(data: Comment): Promise<Comment> {
        const { author, text, idService } = data

        var comment = {
            author: '',
            text: '',
            idService: ''
        };

        const serviceRef = db.collection('services');
        const serviceDoc = await serviceRef.get();

        serviceDoc.forEach(async doc => {
            if (doc.id === idService) {
                if (doc.data().situation === "Aberto") {
                    comment = {
                        author: author,
                        text: text,
                        idService: idService
                    }
                    await db.collection('comments').add(comment);
                    return comment as Comment;
                }
            }
        });
        return comment as Comment
    }


    public async all(): Promise<Comment[]> {
        const commentsRef = db.collection('comments');
        const commentsDoc = await commentsRef.get();

        const comments: Comment[] = []
        commentsDoc.forEach((doc: any) => {
            comments.push({ id: doc.id, ...doc.data() })
        });

        return comments as Comment[];
    }


    public async update(data: Comment, id: string): Promise<Comment> {
        const commentsRef = db.collection('comments');
        const commentsDoc = commentsRef.doc(id);
        const { author, text } = data

        const comment = {
            author: author,
            text: text,
        }

        await commentsDoc.update({ comment })

        return comment as Comment
    }

    public async getCommentIdService(idService: string): Promise<Comment[]> {
        const commentsRef = db.collection('comments')
        const commentsDoc = await commentsRef.get();

        const comments: Comment[] = []
        commentsDoc.forEach((doc: any) => {
            console.log(doc.id);
            if (doc.data().idService === idService) {
                comments.push({ id: doc.id, ...doc.data() })
            }
        });

        return comments as Comment[];
    }
}
