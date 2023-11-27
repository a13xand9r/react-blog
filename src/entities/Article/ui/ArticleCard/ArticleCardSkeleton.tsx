import { FC } from 'react';

import { Card } from '@/shared/ui/Card';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';

import styles from './ArticleCard.module.scss';

type ArticleCardView = 'SMALL' | 'BIG';

interface ArticleCardProps {
    view: ArticleCardView;
    className?: string;
}

export const ArticleCardSkeleton: FC<ArticleCardProps> = ({ view, className }) => {
    if (view === 'BIG') {
        return (
            <Card className={classNames(styles.ArticleCardContent, styles[view], className)}>
                <div className={styles.header}>
                    <Skeleton className={styles.avatar} maxWidth={30} height={30} border="50px" />
                    <Skeleton className={styles.username} maxWidth={100} height={15} />
                    <Skeleton className={styles.date} maxWidth={70} height={15} />
                </div>
                <div className={styles.topInfo}>
                    <Skeleton className={styles.title} maxWidth={200} height={20} />
                    <div className={styles.typesContainer}>
                        <Skeleton className={styles.types} maxWidth={45} height={15} />
                        <Skeleton className={styles.types} maxWidth={45} height={15} />
                    </div>
                </div>
                <Skeleton className={styles.img} height={250} />
                <Skeleton className={styles.text} height={90} />
                <Skeleton className={styles.text} height={50} />
                <div className={styles.bottomTopContainer}>
                    <Skeleton maxWidth={80} height={25} />
                </div>
            </Card>
        );
    }
    return (
        <Card className={classNames(styles.ArticleCardContent, styles[view], className)}>
            <div className={styles.imgWrapper}>
                <Skeleton height={300} />
            </div>
            <div className={styles.bottomBlock}>
                <div className={styles.bottomTopContainer}>
                    <Skeleton maxWidth={130} height={16} />
                </div>
                <Skeleton maxWidth={150} height={16} className={styles.title} />
            </div>
        </Card>
    );
};
