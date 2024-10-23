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
	actions: {
		async fetchPostList(): Promise<Post[]> {
			try {
				const apiPostsResponse = await postApi.fetchPosts();
				const firstFiveElements = apiPostsResponse.posts.slice(0, 5);

				this.postList = firstFiveElements.map(apiPost => ({
					...apiPost,
					date: new Date(), // fake date
					reactions: {
						likes: {
							isActive: false, // fake like
							count: apiPost.reactions.likes,
						},
						dislikes: {
							isActive: false, // fake dislike
							count: apiPost.reactions.dislikes,
						},
					},
				}));

				return this.postList;
			} catch (error) {
				console.error(error);

				return [];
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
