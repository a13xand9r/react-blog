import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Title } from '@/shared/ui/Title';
import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { routesPaths } from '@/shared/consts/router';

import { CommentType } from '../../model/types/comment';

import styles from './CommentCard.module.scss';

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
                    <Skeleton border="50%" maxWidth={30} height={30} />
                    <Skeleton maxWidth={90} height={20} />
                </div>
                <Skeleton height={20} />
            </>
        );
    } else {
        content = (
            <>
                <AppLink
                    to={routesPaths.getRouteProfile(comment.user.id)}
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
