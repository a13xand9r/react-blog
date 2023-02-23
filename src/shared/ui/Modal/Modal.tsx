import React, { FC, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';

export interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

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

    const modalRef = useRef(null);

    return (
        <CSSTransition
            nodeRef={modalRef}
            in={isOpen}
            timeout={200}
            unmountOnExit
            classNames={{
                enterActive: styles.modalTransitionEnterActive,
                enterDone: styles.modalTransitionEnterDone,
                enter: styles.modalTransitionEnter,
                exitActive: styles.modalTransitionExitActive,
                exitDone: styles.modalTransitionExitDone,
                exit: styles.modalTransitionExit,
            }}
        >
            <div ref={modalRef} onClick={onClose} className={classNames(styles.Modal, className)}>
                <div onClick={onContentClick} className={styles.content}>
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
};
