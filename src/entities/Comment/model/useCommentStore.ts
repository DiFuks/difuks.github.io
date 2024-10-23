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
	actions: {
		async fetchCommentsList(postId: number): Promise<Comment[]> {
			try {
				const apiCommentsResponse = await postCommentsApi.fetchPostComments(postId);

				this.commentList = apiCommentsResponse.comments;

				return this.commentList;
			} catch (error) {
				console.error(error);

				return [];
			}
		},
	},
});
