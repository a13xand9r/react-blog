import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { FC, memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Dropdown, DropdownItem } from 'shared/ui/Dropdown/Dropdown';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { routesPaths } from 'shared/config/routeConfig/routeConfig';

import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = memo(({ className }) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();

    const closeLoginModal = useCallback(() => {
        setIsLoginModalOpen(false);
    }, []);

    const openLoginModal = useCallback(() => {
        setIsLoginModalOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const dropdownItems = useMemo<DropdownItem[]>(
        () => [
            {
                content: t('Profile'),
                href: routesPaths.profile + authData?.id,
            },
            {
                content: t('Logout'),
                onClick: onLogout,
            },
        ],
        [authData?.id, onLogout, t]
    );

    if (authData) {
        return (
            <header className={classNames(className, styles.Navbar)}>
                <div className={styles.links}>
                    <Dropdown
                        buttonElement={<Avatar src={authData.avatar} size={30} />}
                        items={dropdownItems}
                        position="bottom left"
                    />
                </div>
            </header>
        );
    }

    return (
        <header className={classNames(className, styles.Navbar)}>
            <div className={styles.links}>
                <Button onClick={openLoginModal} theme={ButtonTheme.CLEAR_INVERTED} size="M">
                    {t('Login')}
                </Button>
            </div>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </header>
    );
});
