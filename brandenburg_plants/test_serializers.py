from django.test import TestCase
from rest_framework.exceptions import ValidationError
from .models import SolarPlant
from .serializers import SolarPlantSerializer
from django.contrib.gis.geos import Polygon


class SolarPlantSerializerTest(TestCase):
    def setUp(self):
        """
        Sets up the initial data for the test case.
        This method is called before each test method
        to set up any state that is shared between tests.
        """
        self.solar_plant_attributes = {
            'name': 'Test Solar Plant',
            'geometry': Polygon(((8, 9), (6, 3), (1, 0), (4, 3))),
        }

        self.solar_plant = SolarPlant.objects.create(**self.solar_plant_attributes)
        self.serializer = SolarPlantSerializer(instance=self.solar_plant)