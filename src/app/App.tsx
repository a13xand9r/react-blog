import { classNames } from 'shared/lib/classNames/classNames';
import { useThemeContext } from 'shared/theme/ThemeContext';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { Loader } from 'widgets/Loader';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getIsUserInit } from 'entities/User/model/selectors/getIsUserInit';
import { useLocation } from 'react-router-dom';
import { ARTICLES_LIST_CLICKED_ITEM_IDX } from 'shared/consts/sessionStorage';
import { routesPaths } from 'shared/config/routeConfig/routeConfig';

import { AppRouter } from './providers/router';

export const App = () => {
    const { theme } = useThemeContext();
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
        if (pathname !== routesPaths.articles && !pathname.includes(routesPaths.articleDetails)) {
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
