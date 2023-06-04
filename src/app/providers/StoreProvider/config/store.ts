import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { axiosInstance } from 'shared/api/api';
import { pageReducer } from 'widgets/Page';

import { StateSchema, ThunkExtraArgs } from './StateSchema';
import { createReducerManager } from './reducerManager';

export const createStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        page: pageReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const thunkExtraArgs: ThunkExtraArgs = {
        api: axiosInstance,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState,
        devTools: __IS_DEV__,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
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
