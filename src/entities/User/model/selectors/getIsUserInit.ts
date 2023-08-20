import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsUserInit = (state: StateSchema) => state.user._isInit;
