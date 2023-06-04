import { ArticleDetails } from 'entities/Article';
import { ArticlesRecommendations } from 'features/ArticlesRecommendations';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { routesPaths } from 'shared/config/routeConfig/routeConfig';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Page } from 'widgets/Page';

import { CommentsSection } from '../CommentsSection/CommentsSection';

const ArticleDetailsPage: FC = () => {
    const { t } = useTranslation('articleDetailsPage');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <>{t('Article not found')}</>;
    }

    return (
        <Page>
            <AppLink to={routesPaths.articles}>{`< ${t('Go to all articles')}`}</AppLink>
            <ArticleDetails id={id} />
            <ArticlesRecommendations />
            <CommentsSection id={id} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
