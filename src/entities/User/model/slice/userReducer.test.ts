import { User } from '../types/user';
import { UserSchema } from '../types/UserSchema';

import { userActions, userReducer } from './userSlice';

describe('user reducer', () => {
    it('auth data should be set', () => {
        const userData: User = { id: '1', username: 'name1', roles: [] };
        const state: DeepPartial<UserSchema> = {};
        const resultState = userReducer(state as UserSchema, userActions.setAuthData(userData));

        expect(resultState).toEqual({ authUser: userData });
    });
});
