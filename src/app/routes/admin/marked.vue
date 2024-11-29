<template>
	<div class="content-container">
		<h2 class="sub-header">
			<a href="https://github.com/markedjs/marked" target="_blank">Marked (почти голый js)</a>
		</h2>

		<ul class="default-list">
			<li>
				<strong>Плюсы</strong>
				<ul class="default-list">
					<li>Для редактирования используется обычный textarea</li>
					<li>
						Библиотека только преобразует markdown в html, никак не занимается стилями, кнопками и т. д.
						Ничего лишнего
					</li>
					<li>Полностью поддерживает спецификацию markdown — нет отсебятины</li>
					<li>
						Автоматически удаляет больше 2-х переносы строк, что, оказывается, соответствует спецификации
						markdown. Если нужно явно добавить несколько переносов, нужно добавлять тег br или символ
						неразрывного пробела
					</li>
					<li>Библиотека самая популярная, постоянно поддерживаемая</li>
				</ul>
			</li>
			<li>
				<strong>Минусы</strong>
				<ul class="default-list">
					<li>
						Нет никакой помощи в виде кнопок для оборачивания текста в **, *, ~~ и т.д. Реализация их с нуля
						может быть совсем нетривиальной задачей (если это вообще нужно)
					</li>
				</ul>
			</li>
		</ul>

		<div class="text-editor">
			<div class="text-editor__panel">
				<button class="text-editor__preview-button" @click="switchPreview">
					{{ isPreviewOpen ? 'Редактировать' : 'Предпросмотр' }}
				</button>
			</div>
			<div v-if="isPreviewOpen" class="text-editor__preview" v-html="parsedValue"></div>
			<textarea v-else v-model="textareaValue" class="text-editor__textarea" rows="30"></textarea>
		</div>
	</div>
</template>

<script setup lang="ts">
import { marked } from 'marked';
const isPreviewOpen = ref(false);
const textareaValue = ref(`
# Заголовок первого уровня

Текст

[ссылка](https://google.com)

## Заголовок второго уровня

**Жирный текст**
*Курсив*
***Жирный курсив***
~~Зачеркнутый~~

- Марикрованный список
- Список
  - Вложенный список
  - Вложенный список
    - Вложенный список
    - Вложенный список

1. Нумерованный список
2. Список
   1. Вложенный список
   2. Вложенный список
      1. Вложенный список
      2. Вложенный список
`);

const renderer = new marked.Renderer();
const linkRenderer = renderer.link.bind(renderer);
renderer.link = ({ href, ...params }) => {
	console.log(href);
	const localLink = href.startsWith(`${location.protocol}//${location.hostname}`);
	const html = linkRenderer({ href, ...params });
	return localLink ? html : html.replace(/^<a /, `<a target="_blank" rel="noreferrer noopener nofollow" `);
};

const parsedValue = computed(() =>
	marked(textareaValue.value, {
		breaks: true,
		gfm: true,
		renderer,
	}),
);

const switchPreview = (): void => {
	isPreviewOpen.value = !isPreviewOpen.value;
};
</script>

<style scoped>
.text-editor {
	position: relative;
}

.text-editor__panel {
	width: 100%;
	display: flex;
	justify-content: flex-end;
	border: 1px solid var(--color-border);
	box-sizing: border-box;
	margin-bottom: -1px;
}

.text-editor__textarea {
	width: 100%;
	resize: vertical;
	box-sizing: border-box;
	border: 1px solid var(--color-border);
	border-radius: 0;
}

.text-editor__preview-button {
	border: none;
	padding: 8px;
	cursor: pointer;
}

.text-editor__preview {
	border: 1px solid var(--color-border);

	& ::v-deep(h1),
	& ::v-deep(h2),
	& ::v-deep(h3),
	& ::v-deep(h4),
	& ::v-deep(h5),
	& ::v-deep(h6) {
		margin-bottom: 8px;
	}
	& ::v-deep(ul) {
		list-style: revert;
		padding: revert;
	}
}
</style>
