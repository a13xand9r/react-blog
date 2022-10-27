import { classNames } from 'shared/lib/classNames/classNames'
import { useThemeContext } from 'shared/theme/ThemeContext'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from './providers/router'
import { Sidebar } from 'widgets/Sidebar'
import './styles/index.scss'
import { useTranslation } from 'react-i18next'
import { Suspense } from 'react'

export const App = () => {
    const {theme} = useThemeContext();

    return (
        <div className={classNames('app', theme)}>
            <Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}