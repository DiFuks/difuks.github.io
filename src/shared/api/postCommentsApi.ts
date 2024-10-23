import { createApi } from './api';

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

const fetchPostComments = (postId: number): Promise<ApiPostCommentsResponse> => {
	const api = createApi();

	return api.get<ApiPostCommentsResponse>(`/posts/${postId}/comments`);
};

export const postCommentsApi = {
	fetchPostComments,
};
