import { ArticleCardsList, ArticleCardView } from 'entities/Article';
import { ArticlesViewSelector } from 'features/ChangeArticlesListView/ui/ArticlesViewSelector/ArticlesViewSelector';
import { FC, memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import {
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import styles from './ArticlesPage.module.scss';
import { Page } from 'shared/ui/Page/Page';
import {
    articlesPageActions,
    articlesPageReducer,
    articlesSelectors,
} from '../model/slice/articlesPageSlice';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage';

const ArticlesPage: FC = () => {
    const view = useSelector(getArticlesPageView);
    // const error = useSelector(getArticlesPageError);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const articles = useSelector(articlesSelectors.selectAll);

    const dispatch = useAppDispatch();

    useDynamicReducerLoader('articlesPage', articlesPageReducer, false);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(initArticlesPage());
        }
    }, [dispatch]);

    const onChangeView = useCallback(
        (view: ArticleCardView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch]
    );

    const onLoadMore = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <Page onScrollEnd={onLoadMore}>
            <ArticlesViewSelector
                onChangeView={onChangeView}
                currentView={view}
                className={styles.viewSelector}
            />
            <ArticleCardsList isLoading={isLoading} view={view} articles={articles} />
        </Page>
    );
};

export default memo(ArticlesPage);
