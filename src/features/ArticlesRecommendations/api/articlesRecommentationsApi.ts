import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkQuery';

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getRecommendations: build.query<Article[], number>({
            query: (limit) => ({
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
