import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
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
            <button data-testid="Sidebar-toggle" onClick={toggleCollapseSidebar}>{t('Toggle')}</button>
            <div className={styles.switchersContainer}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
