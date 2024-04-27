from django.contrib import admin
from .models import Floor, Device, DeviceData, FloorRectangle


class FloorAdmin(admin.ModelAdmin):
    pass


class DeviceAdmin(admin.ModelAdmin):
    pass


class DeviceDataAdmin(admin.ModelAdmin):
    pass


class FloorRectangleAdmin(admin.ModelAdmin):
    pass


admin.site.register(Floor, FloorAdmin)
admin.site.register(Device, DeviceAdmin)
admin.site.register(DeviceData, DeviceDataAdmin)
admin.site.register(FloorRectangle, FloorRectangleAdmin)
