import { FC } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { Modal, ModalProps } from './Modal';

export const PortalModal: FC<ModalProps> = (props) => {
    return (
        <Portal>
            <Modal {...props} />
        </Portal>
    );
};
