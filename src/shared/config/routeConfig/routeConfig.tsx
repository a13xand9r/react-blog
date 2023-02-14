import { AboutPageLazy } from 'pages/AboutPage';
import { ArticleDetailsPageLazy } from 'pages/ArticleDetailsPage';
import { ArticlesPageLazy } from 'pages/ArticlesPage';
import { MainPageLazy } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articleDetails',
    // последний
    NOT_FOUND = '404',
}

export const routesPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/:id',
    // последний
    [AppRoutes.NOT_FOUND]: '*',
};

export const routesConfig: Record<AppRoutes, AppRouteProps> = {
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
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: routesPaths[AppRoutes.ARTICLES],
        element: <ArticlesPageLazy />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: routesPaths[AppRoutes.ARTICLE_DETAILS],
        element: <ArticleDetailsPageLazy />,
        authOnly: true,
    },
    // последний
    [AppRoutes.NOT_FOUND]: {
        path: routesPaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
