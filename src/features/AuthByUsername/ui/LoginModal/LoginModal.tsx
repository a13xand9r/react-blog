import { FC } from 'react';
import { PortalModal } from 'shared/ui/Modal/PortalModal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
};

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose }) => {
    return (
        <PortalModal isOpen={isOpen} onClose={onClose}>
            <LoginForm />
        </PortalModal>
    );
};
