// @ts-check
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(eslintPluginPrettierRecommended, {
	files: ['**/*.ts', '**/*.ts', '**/*.vue'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': [
			`error`,
			{
				allowExpressions: true,
			},
		],
	},
});
