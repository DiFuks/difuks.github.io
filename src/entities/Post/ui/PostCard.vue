<script setup lang="ts">
import type { Post } from '../model/Post';
import PostDate from './PostDate.vue';
import PostTags from './PostTags/PostTags.vue';

const { post } = defineProps<{ post: Post }>();
defineSlots<{ switchReactions: () => unknown; openComments: () => void }>();
</script>

<template>
	<article class="card">
		<h2 class="title">{{ post.title }}</h2>

		<div class="body">{{ post.body }}</div>

		<div class="footer">
			<slot name="switchReactions" />

			<slot name="openComments" />

			<PostDate :date="post.date" />

			<PostTags :tags="post.tags" />
		</div>
	</article>
</template>

<style scoped>
.card {
	color: var(--color-text);
}
.title {
	font-size: var(--text-size-h2);
	font-weight: bold;
}
.body {
	margin-top: 16px;
	font-size: var(--text-size-primary);
}
.footer {
	margin-top: 24px;
	display: flex;
	gap: 8px;
	align-items: center;
}
</style>
