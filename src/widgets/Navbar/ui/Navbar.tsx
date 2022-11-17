import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { PortalModal } from 'shared/ui/Modal/PortalModal';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
};

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const { t } = useTranslation();

    const toggleLoginModal = useCallback(() => {
        setIsLoginModalOpen(prev => !prev);
    }, []);

    return (
        <div className={classNames(className, styles.Navbar)}>
            <div className={styles.links}>
                <Button
                    onClick={toggleLoginModal}
                    theme={ButtonTheme.CLEAR_INVERTED}
                    size='M'>
                    {t('Login')}
                </Button>
            </div>
            <PortalModal isOpen={isLoginModalOpen} onClose={toggleLoginModal}>
                {t('Test text')}
            </PortalModal>
        </div>
    );
};
