<script setup lang="ts">
import type { Reactions } from '../../model/Reactions';
import ReactionButton from './PostReactionButton.vue';

const { reactions } = defineProps<{ reactions: Reactions }>();
</script>

<template>
	<div class="post-reactions">
		<ReactionButton :is-active="true" button-type="like" :count="reactions.likes" />
		<ReactionButton :is-active="false" button-type="dislike" :count="reactions.dislikes" />
	</div>
</template>

<style scoped>
.post-reactions {
	display: flex;
	gap: 1px;
}
</style>
