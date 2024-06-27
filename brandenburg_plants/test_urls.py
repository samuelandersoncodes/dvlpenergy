import unittest
from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from .models import SolarPlant

class SolarPlantViewSetTestCase(TestCase):
    """
    Test case for SolarPlantViewSet API endpoints.
    """

    def setUp(self):
        """
        Set up initial data and client for testing.
        """
        self.client = APIClient()
        self.url = reverse('solarplant-list')

        # Create a sample SolarPlant object for testing
        self.solar_plant_data = {
            'name': 'Test Solar Plant',
            'geometry': '{"type": "Point", "coordinates": [1.0, 2.0]}'
        }
        self.solar_plant = SolarPlant.objects.create(**self.solar_plant_data)


if __name__ == '__main__':
    unittest.main()