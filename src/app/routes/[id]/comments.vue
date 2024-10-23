<script setup lang="ts">
import { PostComments } from 'pages/PostComments';

const {
	params: { id },
} = useRoute();

const postIdParam = Array.isArray(id) ? id[0] : id;
const postId = parseInt(postIdParam, 10);
</script>

<template>
	<PostComments :post-id="postId" />
</template>
