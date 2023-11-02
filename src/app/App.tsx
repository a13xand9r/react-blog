import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/theme/ThemeContext';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Loader } from '@/shared/ui/Loader';
import { userActions, getIsUserInit } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ARTICLES_LIST_CLICKED_ITEM_IDX } from '@/shared/consts/sessionStorage';
import { routesPaths } from '@/shared/consts/router';

import { AppRouter } from './providers/router';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const isUserInit = useSelector(getIsUserInit);
    const { pathname } = useLocation();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    useEffect(() => {
        sessionStorage.removeItem(ARTICLES_LIST_CLICKED_ITEM_IDX);
    }, []);
    useEffect(() => {
        if (
            pathname !== routesPaths.getRouteArticles() &&
            !pathname.includes(routesPaths.getRouteArticleDetails(''))
        ) {
            sessionStorage.removeItem(ARTICLES_LIST_CLICKED_ITEM_IDX);
        }
    }, [pathname]);

    return (
        <div className={classNames('app', theme)}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isUserInit && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};
