import { defineStore } from 'pinia';
import { postCommentsApi } from 'shared/api';
import type { Comment } from './Comment';

type PostId = number;

type CommentsList = Record<PostId, Comment[]>;

interface CommentState {
	commentList: CommentsList;
}

export const useCommentStore = defineStore('comment', {
	state: (): CommentState => ({
		commentList: {},
	}),
	getters: {
		getListByPostId: state => (postId: number) => state.commentList[postId] ?? [],
		getCommentsCount: state => (postId: number) => state.commentList[postId]?.length ?? 0,
	},
	actions: {
		async fetchCommentsList(postId: number): Promise<void> {
			/*
			 * Не перезапрашиваем комменты с бэка потому, что удаление комментариев происходит только на фронте.
			 * Иначе при переходе между страницами сбросится состояние удаленных комментариев. Можно было хранить массив
			 * удаленных комментариев отдельно, но сделал так для простоты
			 */
			if (this.commentList[postId]) {
				return;
			}

			try {
				/*
				 * Используем здесь useFetch, а не оборачиваем fetchCommentsList в useAsyncData для корректной работы
				 * статической генерации. Иначе, при переходе на страницу [id]/comments не произойдет инициализация состояния.
				 * Пример с useAsyncData можно посмотреть в ветке `with-use-async-data`. В нем корректно работает `dev`, `build`,
				 * но при статической генерации список комментариев не инициализируется при переходе с главной страницы
				 */
				const apiCommentsResponse = await postCommentsApi.useFetchPostComments(postId);

				this.commentList[postId] = apiCommentsResponse.comments.map(comment => ({
					...comment,
					date: new Date(), // Фейковая дата. Добавлена, так как в дизайне она выводится
				}));
			} catch (error) {
				console.error(error);
			}
		},
		remove(postId: number, commentId: number): void {
			this.commentList[postId] = this.commentList[postId]?.filter(comment => comment.id !== commentId);
		},
	},
});
