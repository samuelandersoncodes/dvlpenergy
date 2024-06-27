from django.test import TestCase
from rest_framework.exceptions import ValidationError
from .models import SolarPlant
from .serializers import SolarPlantSerializer
from django.contrib.gis.geos import Polygon