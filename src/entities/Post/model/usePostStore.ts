import { defineStore } from 'pinia';
import type { Post } from './Post';
import { postApi } from 'shared/api';
import type { ReactionType } from './Reactions';

interface PostState {
	postList: Post[];
}

export const usePostStore = defineStore('post', {
	state: (): PostState => ({
		postList: [],
	}),
	getters: {
		getById: state => (id: number) => {
			const post = state.postList.find(post => post.id === id);

			if (!post) {
				throw new Error('No post found');
			}

			return post;
		},
	},
	actions: {
		async fetchPostList(): Promise<void> {
			try {
				const apiPostsResponse = await postApi.useFetchPosts(5);

				this.postList = apiPostsResponse.posts.map(apiPost => ({
					...apiPost,
					date: new Date(), // Фейковая дата. Добавлена, так как в дизайне она выводится
					reactions: {
						likes: {
							isActive: false, // Фейковый статус. Меняем только на фронте
							count: apiPost.reactions.likes,
						},
						dislikes: {
							isActive: false, // Фейковый статус. Меняем только на фронте
							count: apiPost.reactions.dislikes,
						},
					},
				}));
			} catch (error) {
				console.error(error);
			}
		},
		switchReaction(postId: number, type: ReactionType): void {
			const post = this.postList.find(post => post.id === postId);

			if (!post) {
				return;
			}

			const currentState = post.reactions[type];

			currentState.isActive = !currentState.isActive;
			currentState.count = currentState.isActive ? currentState.count + 1 : currentState.count - 1;
		},
	},
});
