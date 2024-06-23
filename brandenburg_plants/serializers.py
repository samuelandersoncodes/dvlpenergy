from rest_framework import serializers
from .models import SolarPlant

class SolarPlantSerializer(serializers.ModelSerializer):
    # Serializer for the SolarPlant model
    class Meta:
        """
        Meta class for SolarPlantSerializer.
        It specifies the model to be serialized and
        the fields to include in the serialization.
        """
        model = SolarPlant
        fields = ['id', 'name', 'geometry']
