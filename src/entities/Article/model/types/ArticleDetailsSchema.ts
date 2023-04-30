import { Article } from './article';

export interface ArticleDetailsSchema {
    article?: Article;
    isLoading: boolean;
    error?: string;
}
