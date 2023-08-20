import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleCardsList } from '@/entities/Article';
import { Title } from '@/shared/ui/Title/Title';

import { useGetRecommendationsQuery } from '../../api/articlesRecommentationsApi';

import styles from './ArticlesRecommendations.module.scss';

export const ArticlesRecommendations: FC = memo(() => {
    const { t } = useTranslation();
    const { isError, isLoading, data: articles } = useGetRecommendationsQuery(4);

    if (isError) {
        return null;
    }

    return (
        <>
            <Title>{t('Recommendations')}</Title>
            <ArticleCardsList
                articles={articles}
                isLoading={isLoading}
                className={styles.recommendations}
                view="SMALL"
                target="_blank"
                isRecommendations
            />
        </>
    );
});
