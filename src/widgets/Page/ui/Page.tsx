import { FC, MutableRefObject, useRef, UIEvent, useEffect, useMemo, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import { PageContext } from '@/shared/lib/contexts/PageContext';
import { TestProps } from '@/shared/types/tests';

import { getPageScrollPosition } from '../model/selectors/getPageScrollPosition';
import { pageActions } from '../model/slice/pageSlice';

import styles from './Page.module.scss';

interface PageProps extends TestProps {
    className?: string;
    isSaveScrollPosition?: boolean;
    onScrollEnd?: () => void;
    children: ReactNode;
}

export const Page: FC<PageProps> = ({
    onScrollEnd,
    isSaveScrollPosition = false,
    className,
    children,
    dataTestid,
}) => {
    const intersectScrollElRef = useRef() as MutableRefObject<HTMLDivElement>;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    useInfiniteScroll({ targetRef: intersectScrollElRef, wrapperRef, callback: onScrollEnd });

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getPageScrollPosition(state, pathname)
    );

    useEffect(() => {
        if (isSaveScrollPosition) {
            wrapperRef.current.scrollTop = scrollPosition;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        if (isSaveScrollPosition) {
            dispatch(
                pageActions.setScrollPosition({ pathname, position: e.currentTarget.scrollTop })
            );
        }
    }, 300);

    const pageContextValue = useMemo(() => ({ pageSectionRef: wrapperRef }), [wrapperRef]);

    return (
        <main
            id="page-section-scroll"
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(className, styles.Page)}
            data-testid={dataTestid}
        >
            <PageContext.Provider value={pageContextValue}>{children}</PageContext.Provider>
            <div ref={intersectScrollElRef} />
        </main>
    );
};
