import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        /* Footer container */
        < div className={styles.footerContainer} id="footer" >
            <div className={styles.footerWrapper}>
                {/* Copyright an my github links */}
                <p>
                    © dvlp.energy 2024
                    <a
                        href="https://github.com/samuelandersoncodes"
                        target="_blank"
                        rel="noopener"
                    >
                        {" "}
                        <br />
                        Samuel Anderson's GitHub{" "}
                    </a>
                </p>
            </div>
        </div >
    );
};

export default Footer;