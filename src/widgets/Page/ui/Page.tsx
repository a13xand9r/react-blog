import { FC, MutableRefObject, useRef, UIEvent, useEffect } from 'react';
import styles from './Page.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { pageActions } from '../model/slice/pageSlice';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPageScrollPosition } from '../model/selectors/getPageScrollPosition';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle';

interface PageProps {
    className?: string;
    isSaveScrollPosition?: boolean;
    onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = ({
    onScrollEnd,
    isSaveScrollPosition = false,
    className,
    children,
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

    return (
        <section
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(className, styles.Page)}
        >
            {children}
            <div ref={intersectScrollElRef} />
        </section>
    );
};
