import { ArticleDetails } from 'entities/Article';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage: FC = () => {
    const { t } = useTranslation('articleDetailsPage');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return <>{t('Article not found')}</>;
    }

    return <ArticleDetails id={id} />;
};

export default memo(ArticleDetailsPage);
