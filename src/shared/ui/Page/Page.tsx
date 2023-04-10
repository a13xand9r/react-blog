import { FC, MutableRefObject, useRef } from 'react';
import styles from './Page.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';

interface PageProps {
    className?: string;
    onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = ({ onScrollEnd, className, children }) => {
    const intersectScrollElRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    useInfiniteScroll({ targetRef: intersectScrollElRef, wrapperRef, callback: onScrollEnd });

    return (
        <section ref={wrapperRef} className={classNames(className, styles.Page)}>
            {children}
            <div ref={intersectScrollElRef} />
        </section>
    );
};
