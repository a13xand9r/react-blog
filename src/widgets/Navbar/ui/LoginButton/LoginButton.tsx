import { FC, memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/AuthByUsername';

interface LoginButtonProps {
    className?: string;
}

export const LoginButton: FC<LoginButtonProps> = memo(({ className }) => {
    const { t } = useTranslation();
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const closeLoginModal = useCallback(() => {
        setIsLoginModalOpen(false);
    }, []);

    const openLoginModal = useCallback(() => {
        setIsLoginModalOpen(true);
    }, []);

    return (
        <>
            <Button onClick={openLoginModal} theme={ButtonTheme.CLEAR_INVERTED} size="M">
                {t('Login')}
            </Button>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </>
    );
});
