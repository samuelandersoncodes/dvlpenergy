import json
from django.core.management.base import BaseCommand
from brandenburg_plants.models import SolarPlant
import logging
import os

# Set up logging
logger = logging.getLogger(__name__)

class Command(BaseCommand):
    help = 'Load solar plants data from the GeoJSON file'

    def add_arguments(self, parser):
        parser.add_argument('geojson_file', type=str, help='Path to GeoJSON file')

    def handle(self, *args, **kwargs):
        """
        This function opens the specified GeoJSON file
        containing the solar plants data, parses each feature
        and creates corresponding SolarPlant objects in the
        database. Each SolarPlant object is created with a 
        name extracted from the GeoJSON properties and a 
        geometry stored as a GeoJSON string.
        """
        geojson_file = kwargs['geojson_file']
        logger.debug(f'Loading solar plants from GeoJSON file: {geojson_file}')
        
        # Verify the file path
        if not os.path.exists(geojson_file):
            logger.error(f'File not found: {geojson_file}')
            self.stdout.write(self.style.ERROR(f'File not found: {geojson_file}'))
            return
        
        try:
            with open(geojson_file) as f:
                data = json.load(f)
                for feature in data['features']:
                    geometry = json.dumps(feature['geometry'])
                    name = feature['properties'].get('name', 'Unnamed')
                    SolarPlant.objects.create(
                        name=name,
                        geometry=geometry
                    )
                    logger.debug(f'Loaded solar plant: {name}')
            self.stdout.write(self.style.SUCCESS('Successfully loaded solar plants'))
        except json.JSONDecodeError as e:
            logger.error(f'Error parsing JSON: {e}')
            self.stdout.write(self.style.ERROR(f'Error parsing JSON: {e}'))
        except Exception as e:
            logger.error(f'An error occurred: {e}')
            self.stdout.write(self.style.ERROR(f'An error occurred: {e}'))
