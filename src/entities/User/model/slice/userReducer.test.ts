import { UserSchema } from 'entities/User';
import { userActions, userReducer } from './userSlice';

describe('user reducer', () => {
    it('auth data should be set', () => {
        const userData = { id: '1', username: 'name1' };
        const state: DeepPartial<UserSchema> = {};
        const resultState = userReducer(
            state as UserSchema,
            userActions.setAuthData(userData)
        );

        expect(resultState).toEqual({ authUser: userData });
    });
});
