import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useThemeContext } from 'shared/theme/ThemeContext'
import { routesConfig } from 'shared/config/routeConfig/routeConfig'
import { Navbar } from 'widgets/Navbar'

export const App = () => {
    const {theme, toggleTheme} = useThemeContext();

    return (
        <div className={classNames('app', theme)}>
            <Navbar toggleTheme={toggleTheme} />
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