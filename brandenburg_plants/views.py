from rest_framework import viewsets
from .models import SolarPlant
from .serializers import SolarPlantSerializer


class SolarPlantViewSet(viewsets.ModelViewSet):
    """
    Viewset for viewing and editing SolarPlant instances.
    It provides CRUD actions for solar plant objects. 
    It also uses the Solar plant serializer for serialization
    and deserialization of data.
    """
    queryset = SolarPlant.objects.all()
    serializer_class = SolarPlantSerializer
