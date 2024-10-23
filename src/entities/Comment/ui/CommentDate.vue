<script setup lang="ts">
import { getPublishDateText } from 'shared/lib/getPublishDateText';

const { date } = defineProps<{ date: Date }>();

const dateText = getPublishDateText(date);
</script>

<template>
	<span class="comment-date">
		{{ dateText }}
	</span>
</template>

<style scoped>
.post-date {
	font-size: var(--text-size-secondary);
	color: var(--color-border);

	&::first-letter {
		text-transform: uppercase;
	}
}
</style>
