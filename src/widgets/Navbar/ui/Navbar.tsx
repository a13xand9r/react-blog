import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
};

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(className, styles.Navbar)}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/'>{t('Main')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>{t('About')}</AppLink>
            </div>
        </div>
    );
};
