from django.db import models

class SolarPlant(models.Model):
    """
    brandenburg solar plants model
    with name and geometry fields
    """
    name = models.CharField(max_length=120)
    geometry = models.TextField()

    
