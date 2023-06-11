export type UserRole = 'USER' | 'MANAGER' | 'ADMIN';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles: UserRole[];
}
