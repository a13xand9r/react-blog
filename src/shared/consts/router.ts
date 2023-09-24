export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articleDetails',
    ADMIN = 'admin',
    // последний
    NOT_FOUND = '404',
}
export const routesPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ADMIN]: '/admin',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/',

    // последний
    [AppRoutes.NOT_FOUND]: '*',
};
