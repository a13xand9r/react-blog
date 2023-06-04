import { ArticleCardsList, ArticleDetails } from 'entities/Article';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentsList } from 'entities/Comment';
import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { routesPaths } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Title } from 'shared/ui/Title/Title';
import { Page } from 'widgets/Page';

import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendations';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from '../model/slice';
import { commentsSelectors } from '../model/slice/articleDetailsCommentsSlice';
import { recommendationsSelectors } from '../model/slice/articleDetailsRecommendationsSlice';

import styles from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: FC = () => {
    const { t } = useTranslation('articleDetailsPage');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(commentsSelectors.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(recommendationsSelectors.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const dispatch = useAppDispatch();

    useDynamicReducerLoader('articleDetailsPage', articleDetailsPageReducer);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(id));
            dispatch(fetchArticleRecommendations());
        }
    }, [dispatch, id]);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    if (!id) {
        return <>{t('Article not found')}</>;
    }

    return (
        <Page>
            <AppLink to={routesPaths.articles}>{`< ${t('Go to all articles')}`}</AppLink>
            <ArticleDetails id={id} />
            <Title>{t('Recommendations')}</Title>
            <ArticleCardsList
                articles={recommendations}
                isLoading={recommendationsIsLoading}
                className={styles.recommendations}
                view="SMALL"
                target="_blank"
                isRecommendations
            />
            <Title>{t('Comments')}</Title>
            <AddCommentForm onSend={onSendComment} />
            <CommentsList comments={comments} isLoading={commentsIsLoading} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
