import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage: FC = () => {
    const { t } = useTranslation('articleDetailsPage');
    return <div>{t('Article details page')}</div>;
};

export default memo(ArticleDetailsPage);
