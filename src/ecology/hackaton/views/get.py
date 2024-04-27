from json import loads, JSONDecodeError

from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponseBadRequest, Http404

from ..models import Device, DeviceData

__all__ = (
    'latest_device',
)

def latest_device(request):
    if request.method != 'GET':
        return JsonResponse({
            'message': 'error',
            'exception': f'Awaited HTTP method GET, got {request.method}'
        })
    json: dict = loads(request.body)
    device_id: int = json['id']
    assert isinstance(device_id, int)
    try:
        device = Device.objects.get(id=device_id)
    except Device.DoesNotExist as e:
        return JsonResponse({
            'message': 'error',
            'error': f"Device {device_id} does not exist"
        })
    value: Device | None = device.objects.order_by('-date').first()
    if value is None:
        return JsonResponse({
            'message': 'error',
            'error': f'Device {device_id} is silent'
        })
    
    return JsonResponse({
        'message': 'OK',
        'data': value.data
    })
