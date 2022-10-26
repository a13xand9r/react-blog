import { classNames } from 'shared/lib/classNames/classNames'
import { useThemeContext } from 'shared/theme/ThemeContext'
import { Navbar } from 'widgets/Navbar'
import { AppRouter } from './providers/router'
import { Sidebar } from 'widgets/Sidebar'
import './styles/index.scss'

export const App = () => {
    const {theme} = useThemeContext();

    return (
        <div className={classNames('app', theme)}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}