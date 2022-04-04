import React from "react";
import footerStyles from "../../styles/Footer.module.scss";

const Footer: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
    return (
        <div className={`${footerStyles.container} ${footerStyles[darkMode.toString()]}`}>
            <footer className={footerStyles.footer}>
                <p>Made by me with Next.js. &nbsp;&nbsp;Happy Coding : )</p>
            </footer>
        </div>
    )
}

export default Footer;