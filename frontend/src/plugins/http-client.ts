export const httpClient = {
	GET: async (url: string) => {
		return await fetch(url);
	},
};
