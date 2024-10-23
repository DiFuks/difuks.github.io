<script setup lang="ts">
import type { Comment } from '../model/Comment';
const { comment } = defineProps<{ comment: Comment }>();
</script>

<template>
	{{ comment.body }}
</template>

<style scoped></style>
