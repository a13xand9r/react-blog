import { FC, Suspense } from 'react';
import { PortalModal } from 'shared/ui/Modal/PortalModal';
import { Loader } from 'widgets/Loader';
import { LoginFormLazy } from '../LoginForm/LoginFormLazy';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
};

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
    return (
        <PortalModal isOpen={isOpen} onClose={onClose}>
            <Suspense fallback={<Loader />}>
                <LoginFormLazy onSuccess={onClose} />
            </Suspense>
        </PortalModal>
    );
};
