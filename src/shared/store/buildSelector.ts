import { useSelector } from 'react-redux';

import { StateSchema } from '@/app/providers/StoreProvider';

type Selector<T> = (state: StateSchema) => T;
type Return<T> = [() => T, Selector<T>];

export const buildSelector = <T>(selector: Selector<T>): Return<T> => {
    const useSelectorHook = () => useSelector(selector);

    return [useSelectorHook, selector];
};
