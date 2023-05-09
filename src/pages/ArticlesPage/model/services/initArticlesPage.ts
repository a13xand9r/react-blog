import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getIsArticlesPageInitialized } from '../selectors/articlesPageSelectors';
import { fetchArticles } from './fetchArticles';
import { articlesPageActions } from '../slice/articlesPageSlice';
import {
    getArticlesFilterSearchText,
    getArticlesFilterSortByField,
    getArticlesFilterSortOrder,
    getArticlesFilterTabValue,
} from 'features/FilterArticles';
import { addQueryParams } from 'shared/lib/url/addQueryParams';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<void>>(
    'articlesPage/initArticlesPage',
    async (_, { dispatch, getState }) => {
        const isInitialized = getIsArticlesPageInitialized(getState());

        const sort = getArticlesFilterSortByField(getState());
        const order = getArticlesFilterSortOrder(getState());
        const search = getArticlesFilterSearchText(getState());
        const type = getArticlesFilterTabValue(getState());

        addQueryParams({
            sort,
            order,
            search,
            type,
        });

        if (!isInitialized) {
            dispatch(articlesPageActions.initState());

            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchArticles({ replace: false }));
            }
        }
    }
);
