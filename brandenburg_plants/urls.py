from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SolarPlantViewSet
from . import views

# Create a router object
router = DefaultRouter()

# Register SolarPlantViewSet with the router
router.register(r'solar_plants', SolarPlantViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.index, name='index'),
]
