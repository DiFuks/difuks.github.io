<script setup lang="ts">
const { text, isFirst } = defineProps<{ text: string; isFirst: boolean }>();
</script>

<template>
	<span class="tag" :class="{ first: isFirst }">
		<span class="text">{{ text }}</span>
	</span>
</template>

<style scoped>
.tag {
	display: flex;
	align-items: center;
}

.text {
	line-height: 10px;
	color: var(--color-text);
	font-size: var(--text-size-secondary);
	background: var(--color-bg);
	border-radius: 3px;
	padding: 4px;
}

.tag.first {
	&:before {
		content: '';
		width: 0;
		height: 0;
		border-top: 9px solid transparent;
		border-bottom: 9px solid transparent;
		border-right: 9px solid var(--color-bg);
	}

	.text {
		border-bottom-left-radius: 0;
		border-top-left-radius: 0;
	}
}
</style>
