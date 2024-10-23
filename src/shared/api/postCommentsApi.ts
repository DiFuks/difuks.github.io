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
	const api = createApi(`/posts/${postId}/comments`);

	return api.get<ApiPostCommentsResponse>(postId);
};

export const postCommentsApi = {
	fetchPostComments,
};
