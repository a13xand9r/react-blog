import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
};

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapseSidebar = () => {
        setIsCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(className, styles.Sidebar, { [styles.collapsed]: isCollapsed })}>
            <button onClick={toggleCollapseSidebar}>toggle</button>
            <div className={styles.switchersContainer}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
