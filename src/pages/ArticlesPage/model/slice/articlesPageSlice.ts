// import { fetchCommentsByArticleId } from './../services/fetchCommentsByArticleId';
// import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { StateSchema } from 'app/providers/StoreProvider';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { Article, ArticleCardView } from 'entities/Article';
import { fetchArticles } from '../services/fetchArticles';
import { ARTICLES_VIEW_KEY } from 'shared/consts/localstorage';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: article => article.id,
});

export const articlesSelectors = articlesAdapter.getSelectors<StateSchema>(
    state => state.articlesPage ?? articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        entities: {},
        ids: [],
        isLoading: false,
        error: undefined,
        view: 'SMALL',
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleCardView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_KEY, action.payload);
        },
        initState: state => {
            state.view = localStorage.getItem(ARTICLES_VIEW_KEY) as ArticleCardView;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.error = undefined;
                state.isLoading = false;
                articlesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticles.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
