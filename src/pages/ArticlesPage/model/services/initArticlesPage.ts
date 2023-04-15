import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIsArticlesPageInitialized } from '../selectors/articlesPageSelectors';
import { fetchArticles } from './fetchArticles';
import { articlesPageActions } from '../slice/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<void>>(
    'articlesPage/initArticlesPage',
    async (_, { dispatch, getState }) => {
        const isInitialized = getIsArticlesPageInitialized(getState());

        if (!isInitialized) {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchArticles());
            }
            dispatch(articlesPageActions.initState());
        }
    }
);
