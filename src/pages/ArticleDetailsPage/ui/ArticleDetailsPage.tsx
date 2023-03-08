import { ArticleDetails } from 'entities/Article';
import { CommentsList } from 'entities/Comment';
import { FC, memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import {
    articleDetailsCommentsReducer,
    commentsSelectors,
} from '../model/slice/articleDetailsCommentsSlice';

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

    if (!id) {
        return <>{t('Article not found')}</>;
    }

    return (
        <>
            <ArticleDetails id={id} />
            <CommentsList comments={comments} isLoading={commentsIsLoading} />
        </>
    );
};

export default memo(ArticleDetailsPage);
