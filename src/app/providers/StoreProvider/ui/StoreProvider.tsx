import { FC } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createStore } from '../config/store';

interface StoreProviderProps {
    initialState?: StateSchema;
};

export const StoreProvider: FC<StoreProviderProps> = ({ initialState, children }) => {
    const store = createStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
