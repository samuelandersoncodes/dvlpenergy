import unittest
from django.test import TestCase, Client
from .models import SolarPlant

# Define the API endpoint URL
apiUrlEndpoint = "http://127.0.0.1:8000/api/solar_plants/"


class SolarPlantViewSetTestCase(TestCase):
    def setUp(self):
        """
        Set up a test environment by creating a sample SolarPlant object.
        """
        self.client = Client()
        self.solar_plant_data = {
            "name": "Test Solar Plant",
            "geometry": '{"type": "Point", "coordinates": [1.0, 2.0]}',
        }
        self.solar_plant = SolarPlant.objects.create(**self.solar_plant_data)


if __name__ == "__main__":
    unittest.main()
