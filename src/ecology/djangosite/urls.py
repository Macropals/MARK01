from django.contrib import admin
from django.urls import path, include
from django.views.generic import RedirectView

urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/', include('hackaton.urls')),
    path('', RedirectView.as_view(
        pattern_name='hackaton:index',
        permanent=False
    ))
]
