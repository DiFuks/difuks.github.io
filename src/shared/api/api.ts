import { mande, type MandeInstance } from 'mande';

export const createApi = (url: string): MandeInstance => {
	const runtimeConfig = useRuntimeConfig();

	return mande(`${runtimeConfig.public.apiUrl}${url}`);
};
