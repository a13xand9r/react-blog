import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { Article } from '@/entities/Article';
import {
    getArticlesFilterSearchText,
    getArticlesFilterSortByField,
    getArticlesFilterSortOrder,
    getArticlesFilterTabValue,
} from '@/features/FilterArticles';
import { addQueryParams } from '@/shared/lib/url/addQueryParams';

import { getArticlesPageLimit, getArticlesPageNumber } from '../selectors/articlesPageSelectors';

interface FetchArticlesProps {
    replace?: boolean;
}

export const fetchArticles = createAsyncThunk<Article[], FetchArticlesProps, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (_, { rejectWithValue, getState, extra }) => {
        const page = getArticlesPageNumber(getState());
        const limit = getArticlesPageLimit(getState());

        const sort = getArticlesFilterSortByField(getState());
        const order = getArticlesFilterSortOrder(getState());
        const search = getArticlesFilterSearchText(getState());
        const type = getArticlesFilterTabValue(getState());

        try {
            addQueryParams({
                sort,
                order,
                search,
                type,
            });
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
                    _sort: sort,
                    _order: order,
                    q: search ?? undefined,
                    type: type === 'ALL' ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    }
);
