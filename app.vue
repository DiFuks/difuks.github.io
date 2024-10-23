<script setup lang="ts">
// По fsd должен быть в src/app/app.vue, но в Nuxt не работает изменение дефолтного расположения для app https://github.com/nuxt/nuxt/discussions/26751
import { usePostStore } from 'entities/Post';

const postStore = usePostStore();

await useAsyncData('posts', () => postStore.fetchPostList());
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
body {
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;

	--color-text: rgb(0, 0, 0);
	--color-accent-primary: rgb(255, 107, 0);
	--color-accent-border: rgb(255, 107, 30);
	--color-bg: rgba(4, 4, 5, 0.04);
	--color-red: rgb(255, 59, 48);
	--color-white: rgba(255, 255, 255, 0.95);
	--color-border: rgba(4, 4, 5, 0.22);

	--text-size-h1: 40px;
	--text-size-h2: 28px;
	--text-size-primary: 20px;
	--text-size-secondary: 14px;
}
ul {
	padding: 0;
	margin: 0;
	list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
}
button {
	border: none;
	padding: 0;
}
</style>
