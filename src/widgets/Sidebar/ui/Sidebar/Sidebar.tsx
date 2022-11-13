import { routesPaths } from 'app/providers/router/config/routeConfig';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const { t } = useTranslation();

    const toggleCollapseSidebar = () => {
        setIsCollapsed(prev => !prev);
    };

    return (
        <div data-testid="Sidebar" className={classNames(className, styles.Sidebar, { [styles.collapsed]: isCollapsed })}>
            <div className={styles.links}>
                <AppLink className={styles.linkContainer} theme={AppLinkTheme.SECONDARY} to={routesPaths.main}>
                    <HomeIcon className={styles.menuIcon} />
                    <span className={styles.link}>{t('Main')}</span>
                </AppLink>
                <AppLink className={styles.linkContainer} theme={AppLinkTheme.SECONDARY} to={routesPaths.about}>
                    <AboutIcon className={styles.menuIcon} />
                    <span className={styles.link}>{t('About')}</span>
                </AppLink>
            </div>
            <Button
                data-testid="Sidebar-toggle"
                className={styles.toggleButton}
                onClick={toggleCollapseSidebar}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size='L'
                square
            >
                {isCollapsed ? '>' : '<'}
            </Button>
            <div className={styles.switchersContainer}>
                <ThemeSwitcher />
                <LangSwitcher short={isCollapsed} buttonTheme={ButtonTheme.BACKGROUND_INVERTED} />
            </div>
        </div>
    );
};
