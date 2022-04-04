import React from "react";
import Header from "./Header/Header";
import { useState } from "react";
import Footer from "./Footer/Footer";

interface Props {
    children: (darkMode: boolean) => JSX.Element | null
}

const Layout: React.FC<Props> = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <>
            <Header actions={{ darkMode, setDarkMode }} />
            {children(darkMode)}
            <Footer darkMode={darkMode} />
        </>
    )
}

export default Layout;