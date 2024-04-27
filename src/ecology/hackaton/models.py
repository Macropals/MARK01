from django.db import models


class Floor(models.Model):
    index = models.IntegerField(primary_key=True, null=False)
    name = models.CharField(max_length=50, blank=True, null=True)
    center_x = models.FloatField(blank=True, null=False, default=0)
    center_y = models.FloatField(blank=True, null=False, default=0)

class Device(models.Model):
    floor = models.ForeignKey('Floor', on_delete=models.RESTRICT)
    name = models.CharField(max_length=50, blank=True, null=True)
    x = models.FloatField(blank=True, null=True, default=0)
    y = models.FloatField(blank=True, null=True, default=0)
    x_extents = models.FloatField(blank=True, null=True, default=2)
    y_extents = models.FloatField(blank=True, null=True, default=1)

class DeviceData(models.Model):
    device = models.ForeignKey('Device', on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True, editable=False)
    data = models.JSONField()

class FloorRectangle(models.Model):
    floor = models.ForeignKey('Floor', on_delete=models.CASCADE)
    x = models.FloatField(blank=True, null=True, default=0)
    y = models.FloatField(blank=True, null=True, default=0)
    x_extents = models.FloatField(blank=True, null=True, default=2)
    y_extents = models.FloatField(blank=True, null=True, default=1)
    text = models.CharField(max_length=50, blank=False, null=False)
