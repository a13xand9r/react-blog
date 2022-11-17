import React, { FC, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';

export interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ className, children, isOpen, onClose }) => {
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isOpen, onClose]);

    return (
        <div onClick={onClose} className={classNames(styles.Modal, className, { [styles.opened]: isOpen })}>
            <div onClick={onContentClick} className={styles.content}>
                {children}
            </div>
        </div>
    );
};
