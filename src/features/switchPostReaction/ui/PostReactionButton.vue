<script setup lang="ts">
import type { ReactionType } from 'entities/Post';

const { buttonType, count, isActive } = defineProps<{
	buttonType: ReactionType;
	count: number;
	isActive: boolean;
}>();

defineEmits<{
	(event: 'click'): void;
}>();

const computedParams = computed(() => ({
	cssClass: [`button-${buttonType}`, { active: isActive }],
	text: buttonType === 'dislikes' ? 'Trash' : 'Like',
}));
</script>

<template>
	<button class="button" :class="[computedParams.cssClass]" @click="$emit('click')">
		<span class="text">{{ computedParams.text }}</span>
		<span class="count">{{ count }}</span>
	</button>
</template>

<style scoped>
.button {
	font-size: var(--text-size-secondary);
	line-height: 10px;
	padding: 8px;
	background-color: var(--color-bg);
	color: var(--color-text);
	cursor: pointer;

	transition-property: background-color, color;
	transition-duration: 0.2s;

	&:before {
		content: '';
		display: inline-block;
		width: 13px;
		height: 11px;
	}

	&.button-likes {
		border-bottom-left-radius: 16px;
		border-top-left-radius: 16px;
		padding-left: 12px;

		&:before {
			background-image: url(./assets/likeIcon.svg);
		}
	}
	&.button-dislikes {
		border-bottom-right-radius: 16px;
		border-top-right-radius: 16px;
		padding-right: 12px;

		&:before {
			background-image: url(./assets/dislikeButton.svg);
		}
	}
	.text {
		margin-left: 4px;
	}
	.count {
		transition: opacity 0.2s;
		margin-left: 6px;
		opacity: 0.3;
	}
}

.button.active {
	color: var(--color-white);

	&.button-likes {
		background-color: var(--color-red);

		.count {
			opacity: 1;
		}

		&:before {
			background-image: url(./assets/likeIcon-active.svg);
		}
	}

	&.button-dislikes {
		background-color: var(--color-text);

		&:before {
			background-image: url(./assets/dislikeButton-active.svg);
		}
	}
}
</style>
