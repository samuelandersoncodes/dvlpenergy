from django.db import models

class SolarPlant(models.Model):
    """
    brandenburg solar plants model
    with name and geometry fields
    """

    name = models.CharField(max_length=120, default='unnamed')
    geometry = models.TextField()

    def __str__(self):
        """
        String representation of the solar plant object name.
        """
        return self.name