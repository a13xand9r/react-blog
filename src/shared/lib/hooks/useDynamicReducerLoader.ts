import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey, StoreWithReducerManager } from 'app/providers/StoreProvider';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export const useDynamicReducerLoader = (key: StateSchemaKey, reducer: Reducer, removeAfterUnmount = true) => {
    const store = useStore() as StoreWithReducerManager;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: `@INIT ${key} reducer` });
        store.reducerManager.add('login', reducer);
        return () => {
            if (removeAfterUnmount) {
                store.reducerManager.remove('login');
                dispatch({ type: `@DESTROY ${key} reducer` });
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};
