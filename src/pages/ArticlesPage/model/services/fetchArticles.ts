import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export const fetchArticles = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticles',
    async (_, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Article[]>(`/articles`, {
                params: {
                    _expand: 'user',
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
