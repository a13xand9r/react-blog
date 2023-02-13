import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createStore } from '../config/store';

interface StoreProviderProps {
    initialState?: StateSchema;
    asyncReducers?: ReducersMapObject<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = ({
    initialState,
    asyncReducers,
    children,
}) => {
    const store = createStore(initialState, asyncReducers);
    return <Provider store={store}>{children}</Provider>;
};
