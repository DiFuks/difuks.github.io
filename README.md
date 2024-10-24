# sasflix-test-assignment

Репозитория для тестового задания в sasflix

## Архитектура

Проект написан с использованием архитектуры [feature sliced design](https://feature-sliced.design/ru/docs)

## Стек

- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [TypeScript 5](https://www.typescriptlang.org/docs/)
- [Pinia](https://pinia.vuejs.org/core-concepts/)
- [Eslint](https://eslint.org/docs/latest/)
- [Prettier](https://prettier.io/docs/en/)

## Документация Nuxt

Доступна по адресу [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)

## Установка

```bash
nvm use
yarn install
```

## Dev-сервер

Запускается по адресу `http://localhost:3000`:

```bash
yarn dev
```

## Eslint

```bash
yarn lint
```

## Typescript

Проверка типов происходит только при сборке из-за соображений производительности

## Сборка

Запуск prod-сборки:

```bash
yarn build
```

Для локального просмотра prod-сборки:

```bash
yarn preview
```
