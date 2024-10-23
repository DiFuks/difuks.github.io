<script setup lang="ts">
const { postId } = defineProps<{ postId: number }>();
const link = `/${postId}/comments`;
</script>

<template>
	<NuxtLink class="link" :href="link">Open comments</NuxtLink>
</template>

<style scoped>
.link {
	color: var(--color-accent-primary);
	font-size: var(--text-size-secondary);
	text-decoration-color: var(--color-accent-border);
	text-underline-offset: 3px;
}
.link:hover {
	text-decoration: none;
}
</style>
