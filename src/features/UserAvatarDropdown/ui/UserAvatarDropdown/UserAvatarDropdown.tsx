import { FC, memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Dropdown, DropdownItem } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { getIsUserAdmin, getIsUserManager, getUserAuthData, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { routesPaths } from '@/shared/consts/router';

export const UserAvatarDropdown: FC = memo(() => {
    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const isUserAdmin = useSelector(getIsUserAdmin);
    const isUserManager = useSelector(getIsUserManager);

    const dispatch = useAppDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isShowAdminPanelItem = isUserAdmin || isUserManager;

    const dropdownItems = useMemo<DropdownItem[]>(
        () => [
            ...(isShowAdminPanelItem
                ? [
                      {
                          content: t('Admin panel'),
                          href: routesPaths.getRouteAdmin(),
                      },
                  ]
                : []),
            {
                content: t('Profile'),
                href: routesPaths.getRouteProfile(authData?.id ?? ''),
            },
            {
                content: t('Logout'),
                onClick: onLogout,
            },
        ],
        [authData?.id, isShowAdminPanelItem, onLogout, t]
    );

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            buttonElement={<Avatar src={authData.avatar} size={30} />}
            items={dropdownItems}
            position="bottom left"
        />
    );
});
