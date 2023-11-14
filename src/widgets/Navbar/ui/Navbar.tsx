import { FC, memo } from 'react';

import { useGetUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { UserAvatarDropdown } from '@/features/UserAvatarDropdown';
import { NotificationButton } from '@/features/NotificationButton';
import { HStack } from '@/shared/ui/Stack';

import styles from './Navbar.module.scss';
import { LoginButton } from './LoginButton/LoginButton';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const authData = useGetUserAuthData();

    if (authData) {
        return (
            <header className={classNames(className, styles.Navbar)}>
                <HStack gap="16" className={styles.links}>
                    <NotificationButton />
                    <UserAvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(className, styles.Navbar)}>
            <div className={styles.links}>
                <LoginButton />
            </div>
        </header>
    );
});
