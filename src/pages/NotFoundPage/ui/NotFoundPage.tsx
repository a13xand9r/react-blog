import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = memo(({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(className, styles.NotFoundPage)}>
            <h1 className={styles.title404}>404</h1>
            {t('NotFound')}
        </div>
    );
});
