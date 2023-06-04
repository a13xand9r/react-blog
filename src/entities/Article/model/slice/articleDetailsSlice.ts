import { createSlice } from '@reduxjs/toolkit';

import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { fetchArticleDetails } from '../services/fetchArticleDetails';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleDetails.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleDetails.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
                state.article = action.payload;
            })
            .addCase(fetchArticleDetails.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
