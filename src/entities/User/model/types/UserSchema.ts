import { User } from './user';

export interface UserSchema {
    authUser?: User;
    _isInit: boolean;
}
