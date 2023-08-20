import { FC, memo, useCallback, useEffect } from 'react';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';
import { Page } from '@/widgets/Page';

import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage';
import { ArticlesHeaderFilters } from '../ArticlesHeaderFilters/ArticlesHeaderFilters';
import { InfiniteArticlesList } from '../InfiniteArticlesList/InfiniteArticlesList';

const ArticlesPage: FC = () => {
    const dispatch = useAppDispatch();

    useDynamicReducerLoader('articlesPage', articlesPageReducer, false);

    useEffect(() => {
        dispatch(initArticlesPage());
    }, [dispatch]);

    const onLoadMore = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <Page onScrollEnd={onLoadMore} isSaveScrollPosition>
            <ArticlesHeaderFilters />
            <InfiniteArticlesList />
        </Page>
    );
};

export default memo(ArticlesPage);
