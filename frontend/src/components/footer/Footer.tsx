import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {

    // Get current copyright year dynamically
    const copyRightYear = new Date().getFullYear();

    return (
        /* Footer container */
        < div className={styles.footerContainer} id="footer" >
            <div className={styles.footerWrapper}>
                {/* Copyright an my github links */}
                <p>
                    © dvlp.energy {copyRightYear}
                    <a
                        href="https://github.com/samuelandersoncodes/dvlpenergy-task"
                        target="_blank"
                        rel="noopener"
                    >
                        <br />
                        Project repo
                    </a>
                </p>
            </div>
        </div >
    );
};

export default Footer;