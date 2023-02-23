import { Article } from './Article';

export interface ArticleDetailsSchema {
    article?: Article;
    isLoading: boolean;
    error?: string;
}
