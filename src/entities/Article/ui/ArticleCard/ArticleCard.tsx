import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Title } from '@/shared/ui/Title';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { routesPaths } from '@/shared/consts/router';
import { AppLink } from '@/shared/ui/AppLink';

import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { Article, ArticleTextBlockType } from '../../model/types/article';

import styles from './ArticleCard.module.scss';

export type ArticleCardView = 'SMALL' | 'BIG';

interface ArticleCardProps {
    view: ArticleCardView;
    article?: Article;
    className?: string;
    target?: string;
    onArticleOpen?: () => void;
}

export const ArticleCard: FC<ArticleCardProps> = ({
    article,
    view,
    target,
    onArticleOpen,
    className,
}) => {
    const articleTypes = article?.type.join(', ');
    const { t } = useTranslation();

    if (view === 'BIG') {
        const textBlock = article?.blocks.find(
            (block) => block.type === 'TEXT'
        ) as ArticleTextBlockType;
        return (
            <Card className={classNames(styles.ArticleCardContent, styles[view], className)}>
                <div className={styles.header}>
                    <Avatar
                        className={styles.avatar}
                        src={article?.user.avatar}
                        alt={article?.user.username}
                        size={30}
                    />
                    <Text className={styles.username}>{article?.user.username}</Text>
                    <Text className={styles.date}>{article?.createdAt}</Text>
                </div>
                <div className={styles.topInfo}>
                    <Title size="l" className={styles.title}>
                        {article?.title}
                    </Title>
                    <Text className={styles.types}>{articleTypes}</Text>
                </div>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={article?.img} alt={article?.title} />
                </div>
                {textBlock && <ArticleTextBlock className={styles.text} textBlock={textBlock} />}
                <div className={styles.bottomTopContainer}>
                    <AppLink
                        onClick={onArticleOpen}
                        target={target}
                        className={styles.link}
                        to={routesPaths.articleDetails + article?.id}
                    >
                        <Button theme={ButtonTheme.OUTLINED}>{t('Read more...')}</Button>
                    </AppLink>
                    <Text className={styles.views}>
                        <EyeIcon />
                        {article?.views}
                    </Text>
                </div>
            </Card>
        );
    }
    return (
        <AppLink
            onClick={onArticleOpen}
            target={target}
            className={styles.link}
            to={routesPaths.articleDetails + article?.id}
        >
            <Card className={classNames(styles.ArticleCardContent, styles[view], className)}>
                <div className={styles.imgWrapper}>
                    <Text className={styles.date}>{article?.createdAt}</Text>
                    <img className={styles.img} src={article?.img} alt={article?.title} />
                </div>
                <div className={styles.bottomBlock}>
                    <div className={styles.bottomTopContainer}>
                        <Text className={styles.types}>{articleTypes}</Text>
                        <Text className={styles.views}>
                            <EyeIcon />
                            {article?.views}
                        </Text>
                    </div>
                    <Text className={styles.title}>{article?.title}</Text>
                </div>
            </Card>
        </AppLink>
    );
};
