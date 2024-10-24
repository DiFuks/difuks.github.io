// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },

	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
	},

	srcDir: './src/app',

	alias: {
		app: '../src/app',
		features: '../src/features',
		entities: '../src/entities',
		pages: '../src/pages',
		shared: '../src/shared',
		widgets: '../src/widgets',
	},

	runtimeConfig: {
		public: {
			apiUrl: 'https://dummyjson.com',
		},
	},

	typescript: {
		typeCheck: 'build',
	},

	dir: {
		pages: './routes',
	},

	modules: ['@pinia/nuxt', '@nuxt/eslint'],
});
