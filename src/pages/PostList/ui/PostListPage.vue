<script lang="ts" setup>
import { PostCard, usePostStore } from 'entities/Post';

const postStore = usePostStore();

await useAsyncData('posts', () => postStore.fetchPostList());
const { postList } = storeToRefs(postStore);
</script>

<template>
	<ul class="post-list">
		<li v-for="post in postList" :key="post.id" >
			<PostCard :post="post" />
		</li>
	</ul>
</template>

<style scoped>
.post-list {
	display: flex;
	flex-direction: column;
	gap: 32px;
}
</style>
