import { classNames } from 'shared/lib/classNames/classNames';
import { useThemeContext } from 'shared/theme/ThemeContext';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { Loader } from 'widgets/Loader';

export const App = () => {
    const { theme } = useThemeContext();

    return (
        <div className={classNames('app', theme)}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
