import { defineStore } from 'pinia';
import { postCommentsApi } from 'shared/api';
import type { Comment } from './Comment';

type PostId = number;

type CommentsList = Record<PostId, Comment[]>;

interface CommentState {
	commentList: CommentsList;
}

export const useCommentStore = defineStore('comment', {
	state: (): CommentState => ({
		commentList: {},
	}),
	getters: {
		getListByPostId: state => (postId: number) => state.commentList[postId] ?? [],
		getCommentsCount: state => (postId: number) => state.commentList[postId]?.length ?? 0,
	},
	actions: {
		async fetchCommentsList(postId: number): Promise<Comment[]> {
			if (this.commentList[postId]) {
				return this.commentList[postId];
			}

			try {
				const apiCommentsResponse = await postCommentsApi.fetchPostComments(postId);

				this.commentList[postId] = apiCommentsResponse.comments.map(comment => ({
					...comment,
					date: new Date(), // Фейковая дата. Добавлена, так как в дизайне она выводится
				}));

				return this.commentList[postId];
			} catch (error) {
				console.error(error);

				return [];
			}
		},
		remove(postId: number, commentId: number): void {
			this.commentList[postId] = this.commentList[postId]?.filter(comment => comment.id !== commentId);
		},
	},
});
