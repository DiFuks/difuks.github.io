<script setup lang="ts">
import { usePostStore } from 'entities/Post';
import { PostWidget } from 'widgets/PostWidget';
import { CommentCard, useCommentStore } from 'entities/Comment';

const { postId } = defineProps<{ postId: number }>();

const postStore = usePostStore();
const commentStore = useCommentStore();

const { getById } = storeToRefs(postStore);
const { commentList } = storeToRefs(commentStore);

await useAsyncData('posts', () => commentStore.fetchCommentsList(postId));
</script>

<template>
	<PostWidget :post="getById(postId)" />

	<ul>
		<li v-for="comment in commentList" :key="comment.id">
			<CommentCard :comment="comment" />
		</li>
	</ul>
</template>

<style scoped></style>
