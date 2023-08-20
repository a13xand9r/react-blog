import { FC } from 'react';
import { useSelector } from 'react-redux';

import { ArticleCardsList } from '@/entities/Article';

import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { articlesSelectors } from '../../model/slice/articlesPageSlice';

import styles from './InfiniteArticlesList.module.scss';

interface InfiniteArticlesListProps {
    className?: string;
}

export const InfiniteArticlesList: FC<InfiniteArticlesListProps> = ({ className }) => {
    const view = useSelector(getArticlesPageView);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const articles = useSelector(articlesSelectors.selectAll);

    return (
        <ArticleCardsList
            className={styles.articleCards}
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    );
};
