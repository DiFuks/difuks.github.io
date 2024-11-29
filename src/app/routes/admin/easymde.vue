<template>
	<div class="content-container">
		<h2 class="sub-header">
			<a href="https://github.com/Ionaru/easy-markdown-editor" target="_blank">EasyMDE</a>
		</h2>

		<ul class="default-list">
			<li>
				<strong>Плюсы</strong>
				<ul class="default-list">
					<li>Есть всё основное – жирный, курсив, заголовки, списки, ссылки</li>
					<li>Отображает preview</li>
					<li>Имеет fullscreen</li>
					<li>Поддерживает хоткеи</li>
					<li>Позволяет легко кастомизировать стили и скрывать ненужное</li>
				</ul>
			</li>
			<li>
				<strong>Минусы</strong>
				<ul class="default-list">
					<li>Очень похож на wysiwyg. Зачем-то занимается стилизацией даже без preview</li>
					<li>
						Достаточно громоздкий. Много всего, что нам сейчас не нужно. Например, загрузка картинок внутрь
						поста, проверка орфографии. Ненужный функционал можно скрыть, но может что угодно вылезти, что
						нам будет мешать и усложнять работу
					</li>
					<li>
						Не очень нравится как работает. Например, если сделать всю строку жирным и выделить её, нет
						возможности убрать "жирность"
					</li>
					<li>В некоторых ситуациях путает жирный и курсив</li>
					<li>Не очень активно поддерживается. 224 issue и всего 2 коммита за год</li>
				</ul>
			</li>
		</ul>

		<textarea ref="textareaElement"></textarea>
	</div>
</template>

<script setup lang="ts">
import EasyMDE from 'easymde';
import 'easymde/dist/easymde.min.css';

const textareaElement = ref<HTMLTextAreaElement>();

onMounted(() => {
	new EasyMDE({
		element: textareaElement.value,
		hideIcons: ['image', 'quote', 'heading'],
		sideBySideFullscreen: false,
		spellChecker: false,
		styleSelectedText: false,
		initialValue: `
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
`,
	});
});
</script>

<style scoped>
.content-container {
	& ::v-deep(h1),
	& ::v-deep(h2),
	& ::v-deep(h3),
	& ::v-deep(h4),
	& ::v-deep(h5),
	& ::v-deep(h6) {
		margin-bottom: 8px;
	}
	& ::v-deep(.editor-preview-full) ul,
	& ::v-deep(.editor-preview-full) ol {
		list-style: revert;
		padding: revert;
	}
}
</style>
