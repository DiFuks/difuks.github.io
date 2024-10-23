import { mande, type MandeInstance } from 'mande';

export const createApi = (): MandeInstance => {
	const runtimeConfig = useRuntimeConfig();

	return mande(`${runtimeConfig.public.apiUrl}`);
};
