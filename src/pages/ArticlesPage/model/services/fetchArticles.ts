import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { getArticlesPageLimit, getArticlesPageNumber } from '../selectors/articlesPageSelectors';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (_, { rejectWithValue, getState, extra }) => {
        const page = getArticlesPageNumber(getState());
        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
                    _page: page,
                    _limit: limit,
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
