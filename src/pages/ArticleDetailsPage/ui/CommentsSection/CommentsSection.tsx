import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Title } from '@/shared/ui/Title/Title';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentsList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDynamicReducerLoader } from '@/shared/lib/hooks/useDynamicReducerLoader';

import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { commentsSelectors } from '../../model/slice/articleDetailsCommentsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId';
import { articleDetailsPageReducer } from '../../model/slice';

interface CommentsSectionProps {
    id: string;
}

export const CommentsSection: FC<CommentsSectionProps> = ({ id }) => {
    const { t } = useTranslation();
    const comments = useSelector(commentsSelectors.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useDynamicReducerLoader('articleDetailsPage', articleDetailsPageReducer);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchCommentsByArticleId(id));
        }
    }, [dispatch, id]);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch]
    );

    return (
        <>
            <Title>{t('Comments')}</Title>
            <AddCommentForm onSend={onSendComment} />
            <CommentsList comments={comments} isLoading={commentsIsLoading} />
        </>
    );
};
