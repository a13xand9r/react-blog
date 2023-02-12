import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUsername';
import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
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

    const onLogoutClick = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(className, styles.Navbar)}>
                <div className={styles.links}>
                    <Button
                        onClick={onLogoutClick}
                        theme={ButtonTheme.CLEAR_INVERTED}
                        size="M"
                    >
                        {t('Logout')}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(className, styles.Navbar)}>
            <div className={styles.links}>
                <Button
                    onClick={openLoginModal}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    size="M"
                >
                    {t('Login')}
                </Button>
            </div>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </div>
    );
});
