import { MutableRefObject, useEffect } from 'react';

interface UseInfiniteScrollOptions {
    targetRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
    callback?: () => void;
}

export const useInfiniteScroll = ({
    targetRef,
    wrapperRef,
    callback,
}: UseInfiniteScrollOptions) => {
    useEffect(() => {
        let observer: null | IntersectionObserver = null;
        const targetEl = targetRef.current;

        if (callback) {
            const options = {
                root: wrapperRef.current,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(targetEl);
        }
        return () => observer?.unobserve(targetEl);
    }, [callback, targetRef, wrapperRef]);
};
