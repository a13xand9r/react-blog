import { AboutPageLazy } from 'pages/AboutPage';
import { MainPageLazy } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = '404',
}

export const routesPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: routesPaths[AppRoutes.MAIN],
        element: <MainPageLazy />,
    },
    [AppRoutes.ABOUT]: {
        path: routesPaths[AppRoutes.ABOUT],
        element: <AboutPageLazy />,
    },
    [AppRoutes.PROFILE]: {
        path: routesPaths[AppRoutes.PROFILE],
        element: <ProfilePageLazy />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: routesPaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};