import React, { useEffect, useRef } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import * as turf from '@turf/turf';

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
                        // Identify and add a polygon layer for each solar plant
                        map.current!.addLayer({
                            'id': solarPlant.id,
                            'type': 'fill',
                            'source': solarPlant.id,
                            'layout': {},
                            'paint': {
                                'fill-color': '#f00',
                                'fill-opacity': 0.8
                            }
                        });
                        // Add popup on click
                        map.current!.on('click', solarPlant.id, (e: any) => {
                            const area = turf.area(geometry);
                            new mapboxgl.Popup()
                                .setLngLat(e.lngLat)
                                .setHTML(`<p>Area: ${area.toFixed(2)} square meters</p>`)
                                .addTo(map.current!);
                        });
                    }
                });
            });
        // Cleanup, removes the map when the component unmounts
        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, []);

    return (
        <></>
    )

}

export default SolarPlantMap