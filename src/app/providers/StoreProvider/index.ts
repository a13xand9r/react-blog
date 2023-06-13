import { AppDispatch } from './config/store';
import {
    ReducersList,
    StateSchema,
    StateSchemaKey,
    StoreWithReducerManager,
    ThunkConfig,
} from './config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';

export { StoreProvider };
export type {
    StateSchema,
    StoreWithReducerManager,
    StateSchemaKey,
    AppDispatch,
    ThunkConfig,
    ReducersList,
};
