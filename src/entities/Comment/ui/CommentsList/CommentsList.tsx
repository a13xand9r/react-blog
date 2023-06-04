import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Title } from 'shared/ui/Title/Title';

import { CommentType } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

import styles from './CommentsList.module.scss';

interface CommentsListProps {
    className?: string;
    comments?: CommentType[];
    isLoading?: boolean;
}

export const CommentsList: FC<CommentsListProps> = ({ comments, isLoading, className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(className, styles.CommentsList)}>
            {comments?.length ? (
                comments.map((comment) => (
                    <CommentCard
                        className={styles.commentCard}
                        key={comment.id}
                        comment={comment}
                        isLoading={isLoading}
                    />
                ))
            ) : (
                <Title size="s">{t('No comments')}</Title>
            )}
        </div>
    );
};
