import React, { useEffect } from 'react';

// Load Mapbox access token from environment variables
const ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

// Ensure Mapbox access token is set
if (!ACCESS_TOKEN) {
    throw new Error('Mapbox access token is required');
}

mapboxgl.accessToken = ACCESS_TOKEN;

const SolarPlantMap: React.FC = () => {

    useEffect(() => {

        // Fetch solar plant data from the Django API
        fetch('/api/solar_plants/')
            .then(response => response.json())
            .then(data => {
                data.forEach((solarPlant: any) => {
                    const geometry = JSON.parse(solarPlant.geometry);
                });
            });
    }, []);

    return (
        <></>
    )

}

export default SolarPlantMap