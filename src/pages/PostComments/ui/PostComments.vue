<script setup lang="ts">
import { usePostStore } from 'entities/Post';
import { PostWidget } from 'widgets/PostWidget';

const { postId } = defineProps<{ postId: number }>();

const postStore = usePostStore();

const { getById } = storeToRefs(postStore);
</script>

<template>
	<PostWidget :post="getById(postId)" />
</template>

<style scoped></style>
