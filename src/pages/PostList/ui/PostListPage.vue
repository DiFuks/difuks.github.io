<script lang="ts" setup>
import { PostCard, usePostStore } from 'entities/Post';
import { SwitchPostReaction } from 'features/switchPostReaction';
import { OpenPostComments } from 'features/openPostComments';

const postStore = usePostStore();

await useAsyncData('posts', () => postStore.fetchPostList());
const { postList } = storeToRefs(postStore);
</script>

<template>
	<ul class="post-list">
		<li v-for="post in postList" :key="post.id">
			<PostCard :post="post">
				<template #switchReactions>
					<SwitchPostReaction :post-id="post.id" :reactions="post.reactions" />
				</template>
				<template #openComments>
					<OpenPostComments :post-id="post.id" />
				</template>
			</PostCard>
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
