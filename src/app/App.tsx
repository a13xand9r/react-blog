import { classNames } from 'shared/lib/classNames/classNames';
import { useThemeContext } from 'shared/theme/ThemeContext';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { Loader } from 'widgets/Loader';
import { userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/AppDispatch';
import { useSelector } from 'react-redux';
import { getIsUserInit } from 'entities/User/model/selectors/getIsUserInit';

export const App = () => {
    const { theme } = useThemeContext();
    const dispatch = useAppDispatch();
    const isUserInit = useSelector(getIsUserInit);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
