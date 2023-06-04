import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getArticlesFilterSearchText,
    getArticlesFilterSortByField,
    getArticlesFilterSortOrder,
    getArticlesFilterTabValue,
} from 'features/FilterArticles';
import { addQueryParams } from 'shared/lib/url/addQueryParams';

import { getIsArticlesPageInitialized } from '../selectors/articlesPageSelectors';
import { articlesPageActions } from '../slice/articlesPageSlice';

import { fetchArticles } from './fetchArticles';

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
