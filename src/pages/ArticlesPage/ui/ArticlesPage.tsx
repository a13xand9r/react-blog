import { ArticleCardsList, ArticleCardView } from 'entities/Article';
import { ArticlesViewSelector } from 'features/ChangeArticlesListView/ui/ArticlesViewSelector/ArticlesViewSelector';
import { FC, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchArticles } from '../model/services/fetchArticles';
import {
    articlesPageActions,
    articlesPageReducer,
    articlesSelectors,
} from '../model/slice/ArticlesPageSlice';
import styles from './ArticlesPage.module.scss';

const ArticlesPage: FC = () => {
    const view = useSelector(getArticlesPageView);
    // const error = useSelector(getArticlesPageError);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const articles = useSelector(articlesSelectors.selectAll);

    const dispatch = useAppDispatch();

    useDynamicReducerLoader('articlesPage', articlesPageReducer);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticles());
        }
        dispatch(articlesPageActions.initState());
    }, [dispatch]);

    const onChangeView = useCallback(
        (view: ArticleCardView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch]
    );

    return (
        <>
            <ArticlesViewSelector
                onChangeView={onChangeView}
                currentView={view}
                className={styles.viewSelector}
            />
            <ArticleCardsList isLoading={isLoading} view={view} articles={articles} />
        </>
    );
};

export default memo(ArticlesPage);
