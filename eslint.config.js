// @ts-check
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(eslintPluginPrettierRecommended, {
	rules: {
		'@typescript-eslint/explicit-function-return-type': [
			`error`,
			{
				allowExpressions: true,
			},
		],
		'vue/multi-word-component-names': [
			'error',
			{
				ignores: ['default'],
			},
		],
	},
});
