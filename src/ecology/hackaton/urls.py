from django.urls import path

from .views import index, add_info

urlpatterns = [
    path("", index, name='index'),
    path('add-info', add_info, name='upload')
]
