<script setup lang="ts">
import { useCommentStore } from 'entities/Comment';

const { commentId } = defineProps<{ commentId: number }>();
const { remove } = useCommentStore();
</script>

<template>
	<a class="remove" href="#" @click.prevent="remove(commentId)">Удалить</a>
</template>

<style scoped>
.remove {
	font-size: var(--text-size-secondary);
	color: var(--color-red);

	&:hover {
		text-decoration: none;
	}
}
</style>
