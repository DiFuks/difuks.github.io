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
						activeType: null, // Фейковый статус. Меняем только на фронте
						types: {
							likes: apiPost.reactions.likes,
							dislikes: apiPost.reactions.dislikes,
						},
					},
				}));
			} catch (error) {
				console.error(error);
			}
		},
		switchReaction(postId: number, newReactionType: ReactionType): void {
			const post = this.postList.find(post => post.id === postId);

			if (!post) {
				return;
			}

			const reactionsTypes = post.reactions.types;
			const prevReactionType = post.reactions.activeType;

			if (prevReactionType === newReactionType) {
				post.reactions.activeType = null;
			} else {
				post.reactions.activeType = newReactionType;
			}

			Object.entries(reactionsTypes).forEach(([key, count]) => {
				const reactionType = key as ReactionType;

				if (prevReactionType === reactionType) {
					reactionsTypes[reactionType] = count - 1;
				}

				if (prevReactionType !== reactionType && reactionType === newReactionType) {
					reactionsTypes[reactionType] = count + 1;
				}
			});
		},
	},
});
