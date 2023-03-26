import { FC, useCallback } from 'react';
import styles from './ArticleCard.module.scss';
import { Article, ArticleTextBlockType } from '../../model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Title } from 'shared/ui/Title/Title';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routesPaths } from 'shared/config/routeConfig/routeConfig';

export type ArticleCardView = 'SMALL' | 'BIG';

interface ArticleCardProps {
    view: ArticleCardView;
    article?: Article;
    className?: string;
}

export const ArticleCard: FC<ArticleCardProps> = ({ article, view, className }) => {
    const articleTypes = article?.type.join(', ');
    const { t } = useTranslation();

    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(routesPaths.articleDetails + article?.id);
    }, [article?.id, navigate]);

    if (view === 'BIG') {
        const textBlock = article?.blocks.find(
            block => block.type === 'TEXT'
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
                <img className={styles.img} src={article?.img} alt={article?.title} />
                {textBlock && <ArticleTextBlock className={styles.text} textBlock={textBlock} />}
                <div className={styles.bottomTopContainer}>
                    <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINED}>
                        {t('Read more...')}
                    </Button>
                    <Text className={styles.views}>
                        <EyeIcon />
                        {article?.views}
                    </Text>
                </div>
            </Card>
        );
    }
    return (
        <Card
            onClick={onOpenArticle}
            className={classNames(styles.ArticleCardContent, styles[view], className)}
        >
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
    );
};
