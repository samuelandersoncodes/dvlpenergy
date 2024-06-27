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

    def test_list_solar_plants(self):
        """
        Test listing solar plants via GET request
        to the API endpoint.
        """
        response = self.client.get(apiUrlEndpoint)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)

    def test_retrieve_solar_plant(self):
        """
        Test retrieving a specific solar plant by its ID via GET 
        request to the API endpoint.
        """
        response = self.client.get(f"{apiUrlEndpoint}{self.solar_plant.id}/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["name"], self.solar_plant_data["name"])


if __name__ == "__main__":
    unittest.main()
