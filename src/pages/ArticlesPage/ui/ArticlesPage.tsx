import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage: FC = () => {
    const { t } = useTranslation('articlesPage');
    return <div>{t('Articles Page')}</div>;
};

export default memo(ArticlesPage);
