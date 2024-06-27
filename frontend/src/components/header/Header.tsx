import logo from "/dvlp-logo-transparent.png";
import styles from "./Header.module.css"
import { useState } from "react";

const Header: React.FC = () => {
    // State for menu toggle
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                {/* logo */}
                <div>
                    <a href="/">
                        <img src={logo} className={styles.logo} alt="company logo" />
                    </a>
                </div>
                {/* Links for desktop view */}
                <div className={styles.links}>
                    <a href="/">Home</a>
                    <a href="/">About Task</a>
                    <a href="#footer">Contact</a>
                </div>
                {/* Mobile menu toggle */}
                <div className={styles.mobMenu}>
                    <div
                        className={`${isOpen
                            ? `${styles.hamburger} ${styles.animated}`
                            : styles.hamburger
                            }`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )

};

export default Header;