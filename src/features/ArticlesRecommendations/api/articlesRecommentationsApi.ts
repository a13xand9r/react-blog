import { rtkApi } from 'shared/api/rtkQuery';

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecommendations: build.query({
            query: (limit: number) => ({
                url: '/articles',
                params: {
                    _expand: 'user',
                    _limit: limit,
                },
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetRecommendationsQuery } = extendedApi;
