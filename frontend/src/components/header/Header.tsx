import logo from "/dvlp-logo-transparent.png";
import styles from "./Header.module.css"
import { useState } from "react";

const Header: React.FC = () => {
    // State for menu toggle
    
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerWrapper}>
                {/* logo */}
                <div>
                    <a href="/">
                        <img src={logo} className={styles.logo} alt="company logo" />
                    </a>
                </div>
            </div>
        </div>
    )

};

export default Header;