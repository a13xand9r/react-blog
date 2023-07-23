import { rtkApi } from 'shared/api/rtkQuery';

import { UserNotification } from '../model/types/types';

const extendedApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<UserNotification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useGetNotificationsQuery } = extendedApi;
