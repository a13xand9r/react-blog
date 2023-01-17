import { createReducerManager } from './reducerManager';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';
import { axiosInstance } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';

export const createStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: NavigateFunction,
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const thunkExtraArgs = {
        api: axiosInstance,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        devTools: __IS_DEV__,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: thunkExtraArgs,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
