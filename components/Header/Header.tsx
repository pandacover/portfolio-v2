import React, { useEffect } from "react";
import NavItems from "./NavItems";
import headerStyles from "../../styles/Header.module.scss";

interface ActionInterface {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

type ActionType = {
    actions: ActionInterface
}

const Header: React.FC<ActionType> = ({ actions: { darkMode, setDarkMode } }) => {

    useEffect(() => {
        if (window.localStorage.length === 0) return;
        setDarkMode(window.localStorage.darkMode === "true" ? true : false);
        if (window.localStorage.darkMode === "true")
            document.querySelector("body").classList.add("dark");
    }, [setDarkMode])

    const scrollHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | any) => {
        e.preventDefault();
        document.getElementById(e.target.innerText.toLowerCase())?.scrollIntoView();
    }

    const toggleMode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setDarkMode(!darkMode);
        if (window.localStorage.length === 0) {
            window.localStorage.setItem("darkMode", darkMode ? "false" : "true");
        } else {
            window.localStorage.clear();
            window.localStorage.setItem("darkMode", darkMode ? "false" : "true");
        }
        document.querySelector("body").classList.toggle("dark");
    }

    return (
        <header id="about" className={headerStyles.header}>
            <div className={`${headerStyles["fixed-container"]} ${headerStyles[darkMode.toString()]}`}>
                <nav className={`${headerStyles.navbar} flex ${headerStyles[darkMode.toString()]}`}>
                    <ul className={`${headerStyles.nav} flex`}>
                        <li className={`li ${headerStyles.title}`}>
                            <span>L</span>
                        </li>
                        {NavItems.map(items => (
                            <li key={items._id} className={`li ${headerStyles["nav-list"]}`}>
                                <button onClick={scrollHandler} value={items.link} className="btn">
                                    {items.name}
                                </button>
                            </li>
                        ))}
                        <li className={`li ${headerStyles["nav-list"]}`}>
                            <a href="https://github.com/pandacover/portfolio-v2/">Source</a>
                        </li>
                    </ul>
                    <div className={`${headerStyles["theme-btn--container"]} flex`}>
                        <button className={`btn ${headerStyles["theme-btn"]} toggle ${headerStyles[darkMode.toString()]}`} onClick={toggleMode}>
                            <div />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;