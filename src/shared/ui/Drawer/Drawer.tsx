import { FC, memo, ReactNode, useCallback, useEffect } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/theme/ThemeContext';
import {
    AnimationProvider,
    useAnimationProvider,
} from '@/shared/lib/providers/AnimationProvider/AnimationProvider';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import styles from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const height = window.innerHeight - 100;

const DrawerContent: FC<DrawerProps> = memo(({ className, children, onClose, isOpen }) => {
    const { Spring, Gesture } = useAnimationProvider();
    const { theme } = useTheme();

    const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [api]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [isOpen, openDrawer]);

    const bind = Gesture.useDrag(
        ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel }) => {
            if (oy < -70) cancel();

            if (last) {
                oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close(vy) : openDrawer();
            } else api.start({ y: oy, immediate: true });
        },
        { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true }
    );

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div
                className={classNames(styles.Drawer, { [styles.opened]: isOpen }, className, theme)}
            >
                <Overlay />
                <Spring.a.div
                    className={styles.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
});

const DrawerAsync: FC<DrawerProps> = (props) => {
    const { isLoaded } = useAnimationProvider();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
};

export const Drawer: FC<DrawerProps> = (props) => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props} />
        </AnimationProvider>
    );
};
