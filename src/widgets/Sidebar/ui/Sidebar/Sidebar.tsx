import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { VStack } from '@/shared/ui/Stack';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const { t } = useTranslation();
    const sidebarItems = useSelector(getSidebarItems);

    const toggleCollapseSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <aside
            data-testid="Sidebar"
            className={classNames(className, styles.Sidebar, {
                [styles.collapsed]: isCollapsed,
            })}
        >
            <VStack gap="12" role="navigation">
                {sidebarItems.map((item) => (
                    <SidebarItem
                        {...item}
                        title={t(item.title)}
                        collapsed={isCollapsed}
                        key={item.url}
                    />
                ))}
            </VStack>
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
        </aside>
    );
});
