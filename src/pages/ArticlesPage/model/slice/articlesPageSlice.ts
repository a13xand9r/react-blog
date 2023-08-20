// import { fetchCommentsByArticleId } from './../services/fetchCommentsByArticleId';
// import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleCardView } from '@/entities/Article';
import { ARTICLES_VIEW_KEY } from '@/shared/consts/localstorage';

import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { fetchArticles } from '../services/fetchArticles';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const articlesSelectors = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage ?? articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        entities: {},
        ids: [],
        isLoading: false,
        error: undefined,
        view: 'SMALL',
        hasMore: true,
        page: 1,
        isInitialized: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleCardView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_KEY, action.payload);
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_KEY) as ArticleCardView;
            state.view = view;
            state.limit = view === 'BIG' ? 4 : 9;
            state.isInitialized = true;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                }
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length >= (state.limit as number);
            })
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
