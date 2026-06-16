import { Suspense } from "react";
import './styles/index.scss'
import { Routes, Route, Link } from 'react-router-dom'
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "../shared/lib/classNames/classNames";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import MainPage from "pages/MainPage/ui/MainPage";
import { AppRouter } from "./providers/router";



const App = () => {
    
    const {theme, toggleTheme} = useTheme()

    return ( 
        <div className={classNames('app',{},[theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Glavnaya</Link>
            <Link to={'/about'}>Aboutttt</Link>
            <AppRouter />
        </div>
    )
}

export default App;