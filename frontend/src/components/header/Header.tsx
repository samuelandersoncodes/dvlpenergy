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
                    <a href="/" aria-label="Go to home page">
                        <img src="https://kidomart.s3.eu-central-1.amazonaws.com/media/userprofile/dvlp-logo.webp"
                            className={styles.logo} alt="company logo" />
                    </a>
                </div>
                {/* Links for desktop view */}
                <div className={styles.links}>
                    <a href="/" aria-label="Go to home page" >Home</a>
                    <a href="https://github.com/samuelandersoncodes/dvlpenergy-task"
                        target="_blank"
                        rel="noopener"
                        aria-label="Open the project repository on GitHub in a new tab"
                    >Project repo&nbsp;&nbsp;&nbsp;</a>
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
                {/* Dropdown menu for mobile view */}
                <div className={`${styles.dropdown} ${isOpen ? styles.show : ""}`}>
                    <a href="/" aria-label="Go to home page">
                        Home
                    </a>
                    <a href="https://github.com/samuelandersoncodes/dvlpenergy-task"
                        aria-label="Open the project repository on GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Project repo
                    </a>
                </div>
            </div>
        </div>
    )

};

export default Header;