import logo from "/dvlp-logo-transparent.png";
import styles from "./Header.module.css"

const Header: React.FC = () => {

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