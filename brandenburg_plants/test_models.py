import unittest
from django.test import TestCase
from .models import SolarPlant

class SolarPlantModelTestCase(TestCase):
    def setUp(self):
        """
        This function sets up a test environment
        by creating a sample SolarPlant object
        """
        SolarPlant.objects.create(
            name='Test Plant', 
            geometry='{"type": "Point", "coordinates": [1.0, 2.0]}'
        )

    def test_solar_plant_str(self):
        """
        This function tests the string representation
        of the solar plant object
        """
        plant = SolarPlant.objects.get(name='Test Plant')
        self.assertEqual(str(plant), 'Test Plant')

if __name__ == '__main__':
    unittest.main()