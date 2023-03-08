import { FC, useEffect } from 'react';
import styles from './ArticleDetails.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader';
import { fetchArticleDetails } from '../../model/services/fetchArticleDetails';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsLoading,
} from 'entities/Article/model/selectors/getArticleDetails';
import { useSelector } from 'react-redux';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Title, TitleTheme } from 'shared/ui/Title/Title';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { ArticleBlocks } from 'entities/Article/model/types/Article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon/Icon';

interface ArticleDetailsProps {
    id: string;
    className?: string;
}

const renderBlock = (block: ArticleBlocks) => {
    switch (block.type) {
        case 'TEXT':
            return <ArticleTextBlock key={block.id} textBlock={block} />;
        case 'CODE':
            return <ArticleCodeBlock key={block.id} codeBlock={block} />;
        case 'IMAGE':
            return <ArticleImageBlock key={block.id} imageBlock={block} />;
        default:
            break;
    }
};

export const ArticleDetails: FC<ArticleDetailsProps> = ({ id, className }) => {
    const { t } = useTranslation();
    useDynamicReducerLoader('articleDetails', articleDetailsReducer);
    const dispatch = useAppDispatch();
    const articleData = useSelector(getArticleDetailsData);
    const isLoading = useSelector(getArticleDetailsLoading);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleDetails(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={styles.articleMainImage}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton className={styles.skeleton} width={300} height={32} />
                <Skeleton className={styles.skeleton} width={600} height={24} />
                <Skeleton className={styles.skeleton} height={200} />
                <Skeleton className={styles.skeleton} height={200} />
            </>
        );
    } else if (error) {
        content = (
            <Title theme={TitleTheme.ERROR} size="l">
                {t('Article page loading error')}
            </Title>
        );
    } else {
        content = (
            <>
                <Avatar src={articleData?.img} size={200} className={styles.articleMainImage} />
                <Title size="l">{articleData?.title}</Title>
                <Title className={styles.subtitle}>{articleData?.subtitle}</Title>
                <div className={styles.views}>
                    <Icon SvgIcon={EyeIcon} />
                    <Text>{articleData?.views}</Text>
                </div>
                <div className={styles.date}>
                    <Icon SvgIcon={CalendarIcon} />
                    <Text>{articleData?.createdAt}</Text>
                </div>
                {articleData?.blocks.map(renderBlock)}
            </>
        );
    }

    return <div className={classNames(className, styles.ArticleDetails)}>{content}</div>;
};
