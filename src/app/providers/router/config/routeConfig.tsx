import { routesPaths, AppRoutes } from '@/shared/consts/router';
import { AppRouteProps } from '@/shared/types/router';
import { AboutPageLazy } from '@/pages/AboutPage';
import { AdminPageLazy } from '@/pages/AdminPage';
import { ArticleDetailsPageLazy } from '@/pages/ArticleDetailsPage';
import { ArticlesPageLazy } from '@/pages/ArticlesPage';
import { MainPageLazy } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePageLazy } from '@/pages/ProfilePage';

export const routesConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: routesPaths[AppRoutes.MAIN],
        element: <MainPageLazy />,
    },
    [AppRoutes.ABOUT]: {
        path: routesPaths[AppRoutes.ABOUT],
        element: <AboutPageLazy />,
    },
    [AppRoutes.ADMIN]: {
        path: routesPaths[AppRoutes.ADMIN],
        element: <AdminPageLazy />,
        requiredRoles: ['ADMIN', 'MANAGER'],
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: routesPaths[AppRoutes.ARTICLES],
        element: <ArticlesPageLazy />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: routesPaths[AppRoutes.ARTICLE_DETAILS] + ':id',
        element: <ArticleDetailsPageLazy />,
        authOnly: true,
    },
    [AppRoutes.PROFILE]: {
        path: routesPaths[AppRoutes.PROFILE] + ':id',
        element: <ProfilePageLazy />,
        authOnly: true,
    },
    // последний
    [AppRoutes.NOT_FOUND]: {
        path: routesPaths[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
