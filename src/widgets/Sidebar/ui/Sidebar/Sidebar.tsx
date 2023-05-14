import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import styles from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const { t } = useTranslation();
    const sidebarItems = useSelector(getSidebarItems);

    const toggleCollapseSidebar = () => {
        setIsCollapsed(prev => !prev);
    };

    return (
        <menu
            data-testid="Sidebar"
            className={classNames(className, styles.Sidebar, {
                [styles.collapsed]: isCollapsed,
            })}
        >
            <div className={styles.links}>
                {sidebarItems.map(item => (
                    <SidebarItem
                        {...item}
                        title={t(item.title)}
                        collapsed={isCollapsed}
                        key={item.url}
                    />
                ))}
            </div>
            <Button
                data-testid="Sidebar-toggle"
                className={styles.toggleButton}
                onClick={toggleCollapseSidebar}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size="L"
                square
            >
                {isCollapsed ? '>' : '<'}
            </Button>
            <div className={styles.switchersContainer}>
                <ThemeSwitcher className={styles.themeSwitcher} />
                <LangSwitcher short={isCollapsed} buttonTheme={ButtonTheme.BACKGROUND_INVERTED} />
            </div>
        </menu>
    );
});
