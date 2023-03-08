export interface User {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    authUser?: User;
    _isInit: boolean;
}
