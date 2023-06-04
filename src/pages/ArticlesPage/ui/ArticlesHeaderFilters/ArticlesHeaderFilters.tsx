import { ArticleCardView } from 'entities/Article';
import { ArticlesFilters } from 'features/FilterArticles';
import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { fetchArticles } from '../../model/services/fetchArticles';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';

interface ArticlesHeaderFiltersProps {
    className?: string;
}

export const ArticlesHeaderFilters: FC<ArticlesHeaderFiltersProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const onFilterChange = useCallback(() => {
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticles({ replace: true }));
    }, [dispatch]);

    const onChangeView = useCallback(
        (view: ArticleCardView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch]
    );

    return (
        <ArticlesFilters
            onSomeFilterChange={onFilterChange}
            currentView={view}
            onChangeView={onChangeView}
        />
    );
};
