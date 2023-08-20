import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;

export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view ?? 'SMALL';

export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page ?? 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit ?? 4;
export const getArticlesHasMore = (state: StateSchema) => state.articlesPage?.hasMore;

export const getIsArticlesPageInitialized = (state: StateSchema) => {
    return state.articlesPage?.isInitialized;
};
