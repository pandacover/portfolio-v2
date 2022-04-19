import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Loader from "./Animation/Loader"
import { useState, useEffect } from "react"
import ThemeContext from './Context/theme-context'

interface Props {
    children: (darkMode: boolean) => JSX.Element | null
}

const Layout: React.FC<Props> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <Header />
            {children(darkMode)}
            <Footer />
        </ThemeContext.Provider>
    )
}

export default Layout;