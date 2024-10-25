<script setup lang="ts">
import { type Reactions, type ReactionType, usePostStore } from 'entities/Post';
import ReactionButton from './PostReactionButton.vue';

const { postId, reactions } = defineProps<{ postId: number; reactions: Reactions }>();

const postStore = usePostStore();

const switchReaction = (type: ReactionType): void => {
	postStore.switchReaction(postId, type);
};
</script>

<template>
	<div class="post-reactions">
		<ReactionButton
			:is-active="reactions.activeType === 'likes'"
			:count="reactions.types.likes"
			button-type="likes"
			@click="switchReaction('likes')"
		/>
		<ReactionButton
			:is-active="reactions.activeType === 'dislikes'"
			:count="reactions.types.dislikes"
			button-type="dislikes"
			@click="switchReaction('dislikes')"
		/>
	</div>
</template>

<style scoped>
.post-reactions {
	display: flex;
	gap: 1px;
}
</style>
