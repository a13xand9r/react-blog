import { ArticleType } from 'entities/Article';

import { ArticleSortField, ArticleSortOrder } from './filterArticles';

export interface FilterArticlesSchema {
    sortByField: ArticleSortField;
    sortOrder: ArticleSortOrder;
    tabFilter: ArticleType;
    searchText: string;
}
