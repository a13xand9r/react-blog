import { ReducersMapObject } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const store = createStore(initialState, asyncReducers, navigate);
    return <Provider store={store}>{children}</Provider>;
};
