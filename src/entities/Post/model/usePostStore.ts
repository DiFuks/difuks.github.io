import { defineStore } from 'pinia';
import type { Post } from './Post';
import { postApi } from 'shared/api';

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
				}));

				return this.postList;
			} catch (error) {
				console.error(error);

				return [];
			}
		},
	},
});
