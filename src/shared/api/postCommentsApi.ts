import { useApiFetch } from './useApiFetch';

interface ApiPostCommentUser {
	id: number;
	username: string;
	fullName: string;
}

interface ApiPostComment {
	id: number;
	body: string;
	postId: number;
	likes: number;
	user: ApiPostCommentUser;
}

interface ApiPostCommentsResponse {
	comments: ApiPostComment[];
	total: number;
	skip: number;
	limit: number;
}

const useFetchPostComments = async (postId: number): Promise<ApiPostCommentsResponse> => {
	const { data, error } = await useApiFetch<ApiPostCommentsResponse>(`/posts/${postId}/comments`);

	if (error.value || data.value === null) {
		throw new Error('Could not fetch comments'); // Здесь должна быть адекватная обработка ошибок
	}

	return data.value;
};

export const postCommentsApi = {
	useFetchPostComments,
};
