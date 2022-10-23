import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { MainPageLazy } from 'pages/MainPage'
import { AboutPageLazy } from 'pages/AboutPage'
import { useThemeContext } from 'shared/theme/ThemeContext'
import { routesConfig } from 'shared/config/routeConfig/routeConfig'

export const App = () => {
    const {theme, toggleTheme} = useThemeContext();

    return (
        <div className={classNames('app', theme)}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>main</Link>
            <Link to='/about'>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routesConfig).map(({path, element}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    )
}