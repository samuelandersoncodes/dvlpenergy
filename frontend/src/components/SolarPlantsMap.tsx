import React, { useEffect } from 'react';

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