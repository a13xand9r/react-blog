import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const AdminPage: FC = memo(() => {
    const { t } = useTranslation('adminPage');

    return <Page>{t('Admin panel')}</Page>;
});

export default AdminPage;
