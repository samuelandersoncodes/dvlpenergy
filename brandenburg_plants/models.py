from django.db import models

class SolarPlant(models.Model):
    """
    brandenburg solar plants model
    with name and geometry fields
    """
    geometry = models.TextField()

    def __str__(self):
        """
        String representation
        of the solar plant object id
        """
        return f'SolarPlant {self.id}'