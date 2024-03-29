import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    container?: Element;
    children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ children, container = document.body }) => {
    return createPortal(children, container);
};
