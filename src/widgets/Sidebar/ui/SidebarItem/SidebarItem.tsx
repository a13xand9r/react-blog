import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps extends SidebarItemType {
    collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ url, title, Icon, collapsed }) => {
    return (
        <AppLink
            className={classNames(styles.linkContainer, { [styles.collapsed]: collapsed })}
            theme={AppLinkTheme.SECONDARY} to={url}
        >
            <Icon className={styles.menuIcon} />
            <span className={styles.link}>{title}</span>
        </AppLink>
    );
});
