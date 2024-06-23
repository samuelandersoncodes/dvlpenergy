import json
from django.core.management.base import BaseCommand
from brandenburg_plants.models import SolarPlant

class Command(BaseCommand):
    help = 'Load solar plants data from the GeoJSON file'

    def handle(self, *args, **kwargs):
        """
        This function opens the GeoJSON file
        containing the solar plants data, parses each feature
        and creates corresponding SolarPlant objects in the
        database. Each SolarPlant object is created with a 
        name extracted from the GeoJSON properties and a 
        geometry stored as a GeoJSON string.
        """
        with open('data/bb_solar_plants.geojson') as f:
            data = json.load(f)
            for feature in data['features']:
                geometry = json.dumps(feature['geometry'])
                SolarPlant.objects.create(
                    name=feature['properties'].get('name', 'Unnamed'),
                    geometry=geometry
                )
        self.stdout.write(self.style.SUCCESS('Successfully loaded solar plants'))