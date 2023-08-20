import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = memo(({ className }) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames(className, styles.NotFoundPage)}>
            <h1 className={styles.title404}>404</h1>
            {t('NotFound')}
        </Page>
    );
});
