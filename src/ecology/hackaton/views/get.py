from json import loads, JSONDecodeError

from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponseBadRequest, Http404

from ..models import Device, DeviceData

def latest_device_data(request, device_id: int) -> JsonResponse:
    if request.method != 'GET':
        return JsonResponse({
            'message': 'error',
            'exception': f'Awaited HTTP method GET, got {request.method}'
        })
    assert isinstance(device_id, int)
    try:
        device = Device.objects.get(id=device_id)
    except Device.DoesNotExist as e:
        return JsonResponse({
            'message': 'error',
            'error': f"Device {device_id} does not exist"
        })
    value: DeviceData | None = (
        DeviceData.objects
        .filter(device=device)
        .order_by('-date')
        .first()
    )
    if value is None:
        return JsonResponse({
            'message': 'error',
            'error': f'Device {device_id} is silent'
        })
    
    return JsonResponse({
        'message': 'OK',
        'date': value.date,
        'data': value.data
    })

def devices(request) -> JsonResponse:
    if request.method != 'GET':
        return JsonResponse({
            'message': 'error',
            'exception': f'Awaited HTTP method GET, got {request.method}'
        })
    try:
        json: dict = loads(request.body)
    except JSONDecodeError:
        fields: list[str] = ['id', 'name']
    else:
        fields: list[str] = json['fields']
        assert isinstance(fields, list)
        assert all((isinstance(i, str) for i in fields))
    all_devices = Device.objects.values_list(*fields).all()
    return JsonResponse({
        'message': 'OK',
        'devices': list(all_devices)
    })

def device(request, device_id: int) -> JsonResponse:
    try:
        device = Device.objects.get(pk=device_id)
    except Device.DoesNotExist:
        return JsonResponse({
            'message': 'error',
            'error': f'Device {device_id} does not exist'
        })
    return JsonResponse({
        'message': 'OK',
        'device': {
            'floor': device.floor.index,
            'name': device.name if device.name is not None else '',
            'x': device.x,
            'y': device.y,
            'x_extents': device.x_extents,
            'y_extents': device.y_extents,
        }
    })

