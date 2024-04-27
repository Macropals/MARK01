from django.urls import path

from .views import *

urlpatterns = [
    path("", general.index, name='index'),
    path('add/device', add.device, name='add_device'),
    path('add/device-data', add.device_data, name='add_device_data'),
    path('add/floor', add.floor, name='add_floor'),
    path('add/floor-rectangle', add.floor_rectangle, name='add_floor_rectangle'),
    path('get/device', get.devices),
    path('get/device/<int:device_id>', get.device),
    path('get/device-data/<int:device_id>/latest', get.latest_device_data)
]
