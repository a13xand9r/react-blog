import { EntityState } from '@reduxjs/toolkit';

import { Article, ArticleCardView } from '@/entities/Article';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading: boolean;
    error?: string;

    view: ArticleCardView;

    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;

    isInitialized: boolean;
}
