import { defineStore } from 'pinia';
import { postCommentsApi } from 'shared/api';
import type { Comment } from './Comment';

interface CommentState {
	commentList: Comment[];
}

export const useCommentStore = defineStore('comment', {
	state: (): CommentState => ({
		commentList: [],
	}),
	getters: {
		commentsCount: (state: CommentState) => state.commentList.length,
	},
	actions: {
		async fetchCommentsList(postId: number): Promise<Comment[]> {
			try {
				const apiCommentsResponse = await postCommentsApi.fetchPostComments(postId);

				this.commentList = apiCommentsResponse.comments.map(comment => ({
					...comment,
					date: new Date(), // Фейковая дата. Добавлена, так как в дизайне она выводится
				}));

				return this.commentList;
			} catch (error) {
				console.error(error);

				return [];
			}
		},
		remove(commentId: number): void {
			this.commentList = this.commentList.filter(comment => comment.id !== commentId);
		},
	},
});
