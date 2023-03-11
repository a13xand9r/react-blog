import { getUserAuthData } from 'entities/User';
import { createSelector } from '@reduxjs/toolkit';
import { routesPaths } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { SidebarItemType } from '../types/sidebarItems';

export const getSidebarItems = createSelector(getUserAuthData, userAuthData => {
    const sidebarItems: SidebarItemType[] = [
        {
            url: routesPaths.main,
            title: 'Main',
            Icon: HomeIcon,
        },
        {
            url: routesPaths.about,
            title: 'About',
            Icon: AboutIcon,
        },
    ];

    if (userAuthData) {
        sidebarItems.push(
            {
                url: routesPaths.profile + userAuthData.id,
                title: 'Profile',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                url: routesPaths.articles,
                title: 'Articles',
                Icon: ArticleIcon,
                authOnly: true,
            }
        );
    }

    return sidebarItems;
});
