import type { CommentUser } from './CommentUser';

export interface Comment {
	id: number;
	body: string;
	postId: number;
	likes: number;
	user: CommentUser;
	date: Date;
}
