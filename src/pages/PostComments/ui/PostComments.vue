<script setup lang="ts">
import { usePostStore } from 'entities/Post';
import { PostWidget } from 'widgets/PostWidget';
import { CommentCard, useCommentStore } from 'entities/Comment';
import { getPluralCountTitle } from '../lib/getPluralCountTitle';
import { RemoveComment } from 'features/removeComment';

const { postId } = defineProps<{ postId: number }>();

const postStore = usePostStore();
const commentStore = useCommentStore();

const { getById } = storeToRefs(postStore);
const { commentList, commentsCount } = storeToRefs(commentStore);

const commentsTitle = computed(() => getPluralCountTitle(commentsCount.value));

await useAsyncData(`comments-${postId}`, () => commentStore.fetchCommentsList(postId));
</script>

<template>
	<PostWidget :post="getById(postId)" />

	<section class="comments">
		<h2 class="comments-header">{{ commentsTitle }}</h2>

		<TransitionGroup name="comments-list" class="comments-list" tag="ul">
			<li v-for="comment in commentList" :key="comment.id">
				<CommentCard :comment="comment">
					<template #remove>
						<RemoveComment :comment-id="comment.id" />
					</template>
				</CommentCard>
			</li>
		</TransitionGroup>
	</section>
</template>

<style scoped>
.comments {
	margin-top: 50px;
}
.comments-header {
	font-size: var(--text-size-h2);
}
.comments-list {
	margin-top: 24px;
	display: flex;
	flex-direction: column;
	gap: 24px;
}
.comments-list-enter-active,
.comments-list-leave-active {
	transition: all 0.5s ease;
}
.comments-list-enter-from,
.comments-list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
