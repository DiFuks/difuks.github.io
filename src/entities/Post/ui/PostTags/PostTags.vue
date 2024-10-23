<script setup lang="ts">
import PostTag from './PostTag.vue';

const { tags } = defineProps<{ tags: string[] }>();
</script>

<template>
	<ul class="list">
		<li v-for="(tag, index) in tags" :key="tag">
			<PostTag :text="tag" :is-first="index === 0" />
		</li>
	</ul>
</template>

<style scoped>
.list {
	display: flex;
	gap: 4px;
}
</style>
