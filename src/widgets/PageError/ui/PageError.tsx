import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();
    const onReloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(className, styles.PageError)}>
            {t('ErrorMessage')}
            <Button theme={ButtonTheme.PRIMARY} onClick={onReloadPage}>
                {t('ReloadPage')}
            </Button>
        </div>
    );
};
