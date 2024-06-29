import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    // Initialize navigate function
    const navigate = useNavigate();
    // Function to navigate to '/destination' route
    const handleOpenMap = () => {
        navigate("/destination");
    };

    return (
        <div className={styles.container}>
            {/* Container div for the home component */}
            <div className={styles.videoContainer}>
                {/* video background */}
                <video autoPlay loop muted className={styles.videoBackground}>
                    <source
                        src="https://kidomart.s3.eu-central-1.amazonaws.com/media/userprofile/home-video-optimized.mp4"
                        type="video/mp4" />
                </video>
            </div>
            {/* Button to trigger navigation to the map */}
            <button
                className={styles.btn}
                onClick={handleOpenMap}
                aria-label="Open Map"
            >
                Open Map
            </button>
        </div>
    );
};

export default Home;