import React, { useContext } from "react";
import ThemeContext from "../Context/theme-context";
import footerStyles from "../../styles/Footer.module.scss";

const Footer: React.FC = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`${footerStyles.container} ${footerStyles[darkMode.toString()]}`}>
            <footer className={footerStyles.footer}>
                <p>Made by me with Next.js. &nbsp;&nbsp;Happy Coding : )</p>
            </footer>
        </div>
    )
}

export default Footer;