import { createSelector } from '@reduxjs/toolkit';

import { getUserAuthData } from '@/entities/User';
import { routesPaths } from '@/shared/consts/router';
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';

import { SidebarItemType } from '../types/sidebarItems';

export const getSidebarItems = createSelector(getUserAuthData, (userAuthData) => {
    const sidebarItems: SidebarItemType[] = [
        {
            url: routesPaths.getRouteMain(),
            title: 'Main',
            Icon: HomeIcon,
        },
        {
            url: routesPaths.getRouteAbout(),
            title: 'About',
            Icon: AboutIcon,
        },
    ];

    if (userAuthData) {
        sidebarItems.push(
            {
                url: routesPaths.getRouteProfile(userAuthData.id),
                title: 'Profile',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                url: routesPaths.getRouteArticles(),
                title: 'Articles',
                Icon: ArticleIcon,
                authOnly: true,
            }
        );
    }

    return sidebarItems;
});
