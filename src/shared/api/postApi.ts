import { createApi } from './api';

interface ApiPostReactions {
	likes: number;
	dislikes: number;
}

interface ApiPost {
	id: number;
	title: string;
	body: string;
	tags: string[];
	reactions: ApiPostReactions;
	views: number;
	userId: number;
}

interface ApiPostResponse {
	posts: ApiPost[];
	total: number;
	skip: number;
	limit: number;
}

const fetchPosts = (limit?: number): Promise<ApiPostResponse> => {
	const searchParams = new URLSearchParams();

	if (limit !== undefined) {
		searchParams.set('limit', String(limit));
	}

	const api = createApi(`/posts?${searchParams.toString()}`);

	return api.get<ApiPostResponse>();
};

export const postApi = {
	fetchPosts,
};
