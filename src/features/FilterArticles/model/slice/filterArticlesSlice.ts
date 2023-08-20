import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ArticleType } from '@/entities/Article';

import { FilterArticlesSchema } from '../types/FilterArticlesSchema';
import { ArticleSortField, ArticleSortOrder } from '../types/filterArticles';

const initialState: FilterArticlesSchema = {
    sortByField: 'createdAt',
    sortOrder: 'asc',
    tabFilter: 'ALL',
    searchText: '',
};

export const filterArticlesSlice = createSlice({
    name: 'filterArticles',
    initialState,
    reducers: {
        setSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        },
        setTypeFiler: (state, action: PayloadAction<ArticleType>) => {
            state.tabFilter = action.payload;
        },
        setSortByField: (state, action: PayloadAction<ArticleSortField>) => {
            state.sortByField = action.payload;
        },
        setSortOrder: (state, action: PayloadAction<ArticleSortOrder>) => {
            state.sortOrder = action.payload;
        },
    },
});

export const { actions: filterArticlesActions } = filterArticlesSlice;
export const { reducer: filterArticlesReducer } = filterArticlesSlice;
