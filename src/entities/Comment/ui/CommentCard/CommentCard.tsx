import { FC } from 'react';
import styles from './CommentCard.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { CommentType } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Title } from 'shared/ui/Title/Title';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { routesPaths } from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
    comment: CommentType;
    isLoading?: boolean;
    className?: string;
}

export const CommentCard: FC<CommentCardProps> = ({ comment, isLoading, className }) => {
    let content;

    if (isLoading) {
        content = (
            <>
                <div className={styles.cardHeader}>
                    <Skeleton border="50%" width={30} height={30} />
                    <Skeleton width={90} height={20} />
                </div>
                <Skeleton height={20} />
            </>
        );
    } else {
        content = (
            <>
                <AppLink
                    to={`${routesPaths.profile}${comment.user.id}`}
                    className={styles.cardHeader}
                >
                    <Avatar src={comment.user.avatar} size={30} />
                    <Title>{comment.user.username}</Title>
                </AppLink>
                <Text>{comment.text}</Text>
            </>
        );
    }
    return <div className={classNames(className, styles.CommentCard)}>{content}</div>;
};
