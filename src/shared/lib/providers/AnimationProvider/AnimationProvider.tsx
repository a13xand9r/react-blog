import {
    FC,
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextProps {
    Spring?: SpringType;
    Gesture?: GestureType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextProps>({});

const getAnimationLibsAsync = async () => {
    return await Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);
};

export const AnimationProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const Spring = useRef<SpringType>();
    const Gesture = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAnimationLibsAsync().then(([SpringLib, GestureLib]) => {
            Spring.current = SpringLib;
            Gesture.current = GestureLib;

            setIsLoaded(true);
        });
    }, []);

    const contextValue = useMemo<AnimationContextProps>(
        () => ({
            isLoaded,
            Gesture: Gesture.current,
            Spring: Spring.current,
        }),
        [isLoaded]
    );

    return <AnimationContext.Provider value={contextValue}>{children}</AnimationContext.Provider>;
};

export const useAnimationProvider = () => {
    return useContext(AnimationContext) as Required<AnimationContextProps>;
};
