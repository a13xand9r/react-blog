import { FC, useEffect } from 'react';
import styles from './ArticlesFilters.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { SortArticles } from '../SortArticles/SortArticles';
import {
    ArticlesViewSelector,
    ArticlesViewSelectorProps,
} from '../ArticlesViewSelector/ArticlesViewSelector';
import { SearchArticles } from '../SearchArticles/SearchArticles';
import { Card } from 'shared/ui/Card/Card';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import {
    filterArticlesActions,
    filterArticlesReducer,
} from 'features/FilterArticles/model/slice/filterArticlesSlice';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
    ArticleSortField,
    ArticleSortOrder,
} from 'features/FilterArticles/model/types/filterArticles';
import { ArticleType } from 'entities/Article';
import { FilterArticlesTypes } from '../FilterArticlesTypes/FilterArticlesTypes';

interface ArticlesFiltersProps extends ArticlesViewSelectorProps {
    className?: string;
    onSomeFilterChange: () => void;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = ({
    className,
    currentView,
    onChangeView,
    onSomeFilterChange,
}) => {
    useDynamicReducerLoader('filterArticles', filterArticlesReducer);
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const orderFromUrl = searchParams.get('order') as ArticleSortOrder | null;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const typeFromUrl = searchParams.get('type') as ArticleType;
        const searchFromUrl = searchParams.get('search');

        if (orderFromUrl) dispatch(filterArticlesActions.setSortOrder(orderFromUrl));
        if (sortFromUrl) dispatch(filterArticlesActions.setSortByField(sortFromUrl));
        if (searchFromUrl) dispatch(filterArticlesActions.setSearchText(searchFromUrl));
        if (typeFromUrl) dispatch(filterArticlesActions.setTypeFiler(typeFromUrl));
    }, [dispatch, searchParams]);

    return (
        <div className={classNames(className, styles.ArticlesFilters)}>
            <div className={styles.topBlock}>
                <SortArticles onChange={onSomeFilterChange} />
                <ArticlesViewSelector currentView={currentView} onChangeView={onChangeView} />
            </div>
            <Card className={styles.searchBlock}>
                <SearchArticles onChange={onSomeFilterChange} />
            </Card>
            <FilterArticlesTypes className={styles.typeTabs} onChange={onSomeFilterChange} />
        </div>
    );
};
