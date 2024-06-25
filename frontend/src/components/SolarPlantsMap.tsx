import React, { useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';

// Load Mapbox access token from environment variables
const ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;

// Ensure Mapbox access token is set
if (!ACCESS_TOKEN) {
    throw new Error('Mapbox access token is required');
}

mapboxgl.accessToken = ACCESS_TOKEN;

const SolarPlantMap: React.FC = () => {

    // Creates a reference to store the Mapbox map instance
    const map = useRef<Map | null>(null);

    useEffect(() => {

        // Fetch solar plant data from the Django API
        fetch('/api/solar_plants/')
            .then(response => response.json())
            .then(data => {
                data.forEach((solarPlant: any) => {
                    const geometry = JSON.parse(solarPlant.geometry);
                    // Add solar plant polygon to the map
                    if (map.current) {
                        map.current.on('load', () => {
                            map.current!.addSource(solarPlant.id, {
                                'type': 'geojson',
                                'data': {
                                    'type': 'Feature',
                                    'geometry': geometry,
                                    'properties': {}
                                }
                            });
                        });
                    }
                });
            });
    }, []);

    return (
        <></>
    )

}

export default SolarPlantMap