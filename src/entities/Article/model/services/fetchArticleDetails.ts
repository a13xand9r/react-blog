import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';

import { Article } from '../types/article';

export const fetchArticleDetails = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleDetails',
    async (articleId, { rejectWithValue, extra }) => {
        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`);

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
