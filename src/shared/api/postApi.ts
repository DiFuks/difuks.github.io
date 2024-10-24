import { useApiFetch } from './useApiFetch';

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

const useFetchPosts = async (limit?: number): Promise<ApiPostResponse> => {
	const { data, error } = await useApiFetch<ApiPostResponse>(`/posts`, {
		query: {
			limit,
		},
	});

	if (error.value || data.value === null) {
		throw new Error('Could not fetch posts'); // Здесь должна быть адекватная обработка ошибок
	}

	return data.value;
};

export const postApi = {
	useFetchPosts,
};
