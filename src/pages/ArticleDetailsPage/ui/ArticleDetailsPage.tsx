import { ArticleDetails } from 'entities/Article';
import { CommentsList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { Title } from 'shared/ui/Title/Title';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import {
    articleDetailsCommentsReducer,
    commentsSelectors,
} from '../model/slice/articleDetailsCommentsSlice';
import { Page } from 'widgets/Page';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { routesPaths } from 'shared/config/routeConfig/routeConfig';

const ArticleDetailsPage: FC = () => {
    const { t } = useTranslation('articleDetailsPage');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(commentsSelectors.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useDynamicReducerLoader('articleDetailsComments', articleDetailsCommentsReducer);

    useEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
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
            <Title>{t('Comments')}</Title>
            <AddCommentForm onSend={onSendComment} />
            <CommentsList comments={comments} isLoading={commentsIsLoading} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
