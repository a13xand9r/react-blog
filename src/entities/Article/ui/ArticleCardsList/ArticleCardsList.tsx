import { FC } from 'react';
import styles from './ArticleCardsList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleCard, ArticleCardView } from '../ArticleCard/ArticleCard';
import { ArticleCardSkeleton } from '../ArticleCard/ArticleCardSkeleton';
import { Article } from '../../model/types/article';

interface ArticleCardsListProps {
    articles?: Article[];
    view?: ArticleCardView;
    isLoading?: boolean;
    className?: string;
    target?: string;
}

const getSkeletons = (view: ArticleCardView) => {
    return new Array(view === 'SMALL' ? 9 : 3)
        .fill(undefined)
        .map((_, idx) => <ArticleCardSkeleton view={view} key={idx} className={styles.card} />);
};

export const ArticleCardsList: FC<ArticleCardsListProps> = ({
    articles,
    isLoading,
    view = 'SMALL',
    target,
    className,
}) => {
    return (
        <div className={classNames(className, styles[view], styles.ArticleCardsList)}>
            {!!articles?.length &&
                articles.map(article => (
                    <ArticleCard
                        view={view}
                        article={article}
                        key={article.id}
                        target={target}
                        className={styles.card}
                    />
                ))}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
