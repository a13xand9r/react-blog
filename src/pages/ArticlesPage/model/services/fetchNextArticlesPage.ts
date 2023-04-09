import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getArticlesHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNumber,
} from '../selectors/articlesPageSelectors';
import { fetchArticles } from './fetchArticles';
import { articlesPageActions } from '../slice/articlesPageSlice';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, { dispatch, getState }) => {
        const hasMore = getArticlesHasMore(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        const page = getArticlesPageNumber(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticles());
        }
    }
);
