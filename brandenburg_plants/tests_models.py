from django.test import TestCase
from .models import SolarPlant

class SolarPlantModelTestCase(TestCase):
    def setUp(self):
        """
        This function sets up a test environment
        by creating a sample SolarPlant object
        and a GeoJSON geometry coordinate points
        """
        SolarPlant.objects.create(
            name='Test Plant', 
            geometry='{"type": "Point", "coordinates": [1.0, 2.0]}'
        )

    

