import { useCallback, useEffect, useRef } from 'react';

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
    const isThrottled = useRef(false);
    const timerId = useRef();

    useEffect(() => () => clearTimeout(timerId.current), []);

    return useCallback(
        (...args: any[]) => {
            if (!isThrottled.current) {
                callback(...args);
                isThrottled.current = true;

                setTimeout(() => {
                    isThrottled.current = false;
                }, delay);
            }
        },
        [callback, delay]
    );
};
