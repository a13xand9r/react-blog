import { FC, useEffect, useRef, useState } from 'react';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';

import { classNames } from '@/shared/lib/classNames/classNames';
import { ARTICLES_LIST_CLICKED_ITEM_IDX } from '@/shared/consts/sessionStorage';
import { usePageContext } from '@/shared/lib/contexts/PageContext';

import { ArticleCard, ArticleCardView } from '../ArticleCard/ArticleCard';
import { ArticleCardSkeleton } from '../ArticleCard/ArticleCardSkeleton';
import { Article } from '../../model/types/article';

import styles from './ArticleCardsList.module.scss';

interface ArticleCardsListProps {
    articles?: Article[];
    isRecommendations?: boolean;
    view?: ArticleCardView;
    isLoading?: boolean;
    className?: string;
    target?: string;
}

const getSkeletons = (view: ArticleCardView) => {
    return new Array(view === 'SMALL' ? 9 : 3)
        .fill(undefined)
        .map((_, idx) => (
            <ArticleCardSkeleton
                view={view}
                key={idx}
                className={classNames(styles.card, styles.skeleton)}
            />
        ));
};

interface ScrollSeekPlaceholderProps {
    height: number;
    index: number;
    width: number;
}

const ScrollSeekPlaceholder: FC<ScrollSeekPlaceholderProps> = ({ height, width, index }) => (
    <ArticleCardSkeleton
        view="SMALL"
        key={index}
        className={classNames(styles.card, styles.skeleton)}
    />
);

export const ArticleCardsList: FC<ArticleCardsListProps> = ({
    articles,
    isLoading,
    isRecommendations,
    view = 'SMALL',
    target,
    className,
}) => {
    const [isShowVirtuoso, setIsShowVirtuoso] = useState(false);
    const onArticleOpen = (idx: number) => () => {
        sessionStorage.setItem(ARTICLES_LIST_CLICKED_ITEM_IDX, idx.toString());
    };

    const { pageSectionRef } = usePageContext();

    useEffect(() => {
        if (pageSectionRef) {
            setIsShowVirtuoso(true);
        }
    }, [pageSectionRef]);

    const gridVirtuosoRef = useRef<VirtuosoGridHandle>(null);

    const articlesListClickedItemIdx =
        Number(sessionStorage.getItem(ARTICLES_LIST_CLICKED_ITEM_IDX)) || 0;

    useEffect(() => {
        let timerId: NodeJS.Timeout;

        if (view === 'SMALL' && articlesListClickedItemIdx) {
            timerId = setTimeout(() => {
                gridVirtuosoRef.current?.scrollToIndex({ index: articlesListClickedItemIdx });
            }, 100);
        }

        return () => clearTimeout(timerId);
    }, [articlesListClickedItemIdx, view]);

    if (isRecommendations) {
        return (
            <div
                className={classNames(
                    className,
                    styles.recommendationsContainer,
                    styles[view],
                    styles.ArticleCardsList
                )}
            >
                {!!articles?.length &&
                    articles.map((article) => (
                        <ArticleCard
                            view={view}
                            article={article}
                            key={article.id}
                            target={target}
                            className={styles.card}
                        />
                    ))}
            </div>
        );
    }

    const renderArticle = (idx: number, article: Article) => {
        return (
            <ArticleCard
                onArticleOpen={onArticleOpen(idx)}
                view={view}
                article={article}
                key={article.id}
                target={target}
                className={styles.card}
            />
        );
    };

    return (
        <div className={classNames(className, styles[view], styles.ArticleCardsList)}>
            {isShowVirtuoso &&
                (view === 'BIG' ? (
                    <Virtuoso
                        className={styles.list}
                        customScrollParent={pageSectionRef?.current}
                        totalCount={articles?.length}
                        initialTopMostItemIndex={articlesListClickedItemIdx}
                        data={articles}
                        itemContent={renderArticle}
                    />
                ) : (
                    <VirtuosoGrid
                        ref={gridVirtuosoRef}
                        customScrollParent={pageSectionRef?.current}
                        data={articles}
                        itemContent={renderArticle}
                        listClassName={styles.list}
                        components={{
                            ScrollSeekPlaceholder,
                        }}
                        // scrollSeekConfiguration={{
                        //     enter: velocity => Math.abs(velocity) > 200,
                        //     exit: velocity => Math.abs(velocity) < 30,
                        // }}
                    />
                ))}
            {isLoading && <div className={styles.skeletonsContainer}>{getSkeletons(view)}</div>}
        </div>
    );
};
