import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesFilterSortByField = (state: StateSchema) =>
    state.filterArticles?.sortByField;
export const getArticlesFilterSortOrder = (state: StateSchema) => state.filterArticles?.sortOrder;
export const getArticlesFilterSearchText = (state: StateSchema) => state.filterArticles?.searchText;
export const getArticlesFilterTabValue = (state: StateSchema) =>
    state.filterArticles?.tabFilter ?? 'ALL';
