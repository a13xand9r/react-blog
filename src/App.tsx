import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { classNames } from './helpers/classNames'
import { AboutPageLazy } from './pages/AboutPage/AboutPageLazy'
import { MainPageLazy } from './pages/MainPage/MainPageLazy'
import { useThemeContext } from './theme/ThemeContext'

export const App = () => {
    const {theme, toggleTheme} = useThemeContext();

    return (
        <div className={classNames('app', theme)}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>main</Link>
            <Link to='/about'>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageLazy />} />
                    <Route path='/' element={<MainPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    )
}