import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileFormValidateError = (state: StateSchema) =>
    state.profile?.validateErrors;
