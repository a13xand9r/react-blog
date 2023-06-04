import { StateSchema } from 'app/providers/StoreProvider';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { CommentType } from 'entities/Comment';

import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

import { fetchCommentsByArticleId } from './../services/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id,
});

export const commentsSelectors = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments ?? commentsAdapter.getInitialState()
);

const articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        entities: {},
        ids: [],
        isLoading: false,
        error: undefined,
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: articleDetailsCommentsActions } = articleDetailsCommentsSlice;
export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
