import { createReducerManager } from './reducerManager';
import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { StateSchema, ThunkExtraArgs } from './StateSchema';
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

    const thunkExtraArgs: ThunkExtraArgs = {
        api: axiosInstance,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
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
