import mapboxgl, { Map, LngLatLike } from 'mapbox-gl';


// Load Mapbox access token from environment variables
const ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

// Ensure Mapbox access token is set
if (!ACCESS_TOKEN) {
    throw new Error('Mapbox access token is required');
}

mapboxgl.accessToken = ACCESS_TOKEN;

const SolarPlantMap: React.FC = () => {
    return (
        <>
        </>
    )
}

export default SolarPlantMap;