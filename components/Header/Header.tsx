import React, { useEffect, useContext } from "react";
import NavItems from "./NavItems";
import headerStyles from "../../styles/Header.module.scss";
import { IoSunny, IoMoon } from "react-icons/io5";
import ThemeContext from '../Context/theme-context';

interface Props {
    darkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

interface LinksProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | any) => void
}

const HeaderLinks: React.FC<LinksProps> = ({ onClick }) => (
    <ul className={`${headerStyles.nav} flex`}>
        <li className={`li ${headerStyles.title}`}>
            <span>LUV</span>
        </li>
        {NavItems.map(items => (
            <li key={items._id} className={`li ${headerStyles.navList}`}>
                <button onClick={onClick} value={items.link} className="btn">
                    {items.name}
                </button>
            </li>
        ))}
        <li className={`li ${headerStyles.navList}`}>
            <a href="https://github.com/pandacover/portfolio-v2/">Source</a>
        </li>
    </ul>
)

const Header: React.FC = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

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
            <div className={`${headerStyles.fixedContainer} ${headerStyles[darkMode.toString()]}`}>
                <nav className={`${headerStyles.navbar} flex ${headerStyles[darkMode.toString()]}`}>
                    <HeaderLinks onClick={scrollHandler} />
                    <div className={`${headerStyles.themeBtnWrapper} flex`}>
                        <div className={headerStyles.themeBtnLight}>
                            <IoSunny />
                        </div>
                        <button className={`btn ${headerStyles.themeBtn} toggle ${headerStyles[darkMode.toString()]}`} onClick={toggleMode}>
                            <div />
                        </button>
                        <div className={headerStyles.themeBtnDark}>
                            <IoMoon />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;