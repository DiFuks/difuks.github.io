<script setup lang="ts">
import { type Post, PostCard } from 'entities/Post';
import { SwitchPostReaction } from 'features/switchPostReaction';
import { OpenPostComments } from 'features/openPostComments';

const { post } = defineProps<{ post: Post }>();
</script>

<template>
	<PostCard :post="post">
		<template #switchReactions>
			<SwitchPostReaction :post-id="post.id" :reactions="post.reactions" />
		</template>
		<template #openComments>
			<OpenPostComments :post-id="post.id" />
		</template>
	</PostCard>
</template>
