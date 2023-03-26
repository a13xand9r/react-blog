import { FC } from 'react';
import styles from './ArticleCardsList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article } from '../../model/types/Article';
import { ArticleCard, ArticleCardView } from '../ArticleCard/ArticleCard';
import { ArticleCardSkeleton } from '../ArticleCard/ArticleCardSkeleton';

interface ArticleCardsListProps {
    articles?: Article[];
    view?: ArticleCardView;
    isLoading?: boolean;
    className?: string;
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
    className,
}) => {
    if (isLoading) {
        return (
            <div className={classNames(className, styles[view], styles.ArticleCardsList)}>
                {getSkeletons(view)}
            </div>
        );
    }

    return (
        <div className={classNames(className, styles[view], styles.ArticleCardsList)}>
            {!!articles?.length &&
                articles.map(article => (
                    <ArticleCard
                        view={view}
                        article={article}
                        key={article.id}
                        className={styles.card}
                    />
                ))}
        </div>
    );
};
