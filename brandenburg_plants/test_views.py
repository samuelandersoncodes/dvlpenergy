import unittest
from django.test import TestCase, Client
from .models import SolarPlant

# Define the API endpoint URL
apiUrlEndpoint = "http://127.0.0.1:8000/api/solar_plants/"


