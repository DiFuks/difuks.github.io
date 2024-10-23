<script lang="ts" setup>
import { usePostStore } from 'entities/Post';
import { PostWidget } from 'widgets/PostWidget';

const postStore = usePostStore();

const { postList } = storeToRefs(postStore);
</script>

<template>
	<ul class="post-list">
		<li v-for="post in postList" :key="post.id">
			<PostWidget :post="post" />
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
