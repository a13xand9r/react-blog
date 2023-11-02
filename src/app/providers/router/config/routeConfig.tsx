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
        path: routesPaths.getRouteMain(),
        element: <MainPageLazy />,
    },
    [AppRoutes.ABOUT]: {
        path: routesPaths.getRouteAbout(),
        element: <AboutPageLazy />,
    },
    [AppRoutes.ADMIN]: {
        path: routesPaths.getRouteAdmin(),
        element: <AdminPageLazy />,
        requiredRoles: ['ADMIN', 'MANAGER'],
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: routesPaths.getRouteArticles(),
        element: <ArticlesPageLazy />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: routesPaths.getRouteArticleDetails(':id'),
        element: <ArticleDetailsPageLazy />,
        authOnly: true,
    },
    [AppRoutes.PROFILE]: {
        path: routesPaths.getRouteProfile(':id'),
        element: <ProfilePageLazy />,
        authOnly: true,
    },
    // последний
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
