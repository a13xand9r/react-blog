import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

import { UserRole } from '../types/user';

export const getUserRoles = (state: StateSchema) => state.user.authUser?.roles;

export const hasUserRole = createSelector(
    [getUserRoles, (_, requestedRole: UserRole) => requestedRole],
    (userRoles, requestedRole) => userRoles?.includes(requestedRole)
);

export const getIsUserAdmin = createSelector(getUserRoles, (userRoles) =>
    userRoles?.includes('ADMIN')
);

export const getIsUserManager = createSelector(getUserRoles, (userRoles) =>
    userRoles?.includes('MANAGER')
);
