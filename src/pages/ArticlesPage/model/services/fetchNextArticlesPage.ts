import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';

import {
    getArticlesHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNumber,
} from '../selectors/articlesPageSelectors';
import { articlesPageActions } from '../slice/articlesPageSlice';

import { fetchArticles } from './fetchArticles';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, { dispatch, getState }) => {
        const hasMore = getArticlesHasMore(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        const page = getArticlesPageNumber(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticles({ replace: false }));
        }
    }
);
