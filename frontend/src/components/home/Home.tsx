import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import video from "/home-video.mp4";

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
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            {/* Button to trigger navigation to the map */}
            <button className={styles.btn} onClick={handleOpenMap}>
                Open Map
            </button>
        </div>
    );
};

export default Home;