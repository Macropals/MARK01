from json import loads, JSONDecodeError

from django.http.response import JsonResponse, HttpResponseBadRequest, HttpResponseForbidden

from ..models import Floor, Device, FloorRectangle


def device_data(request):
    return HttpResponseForbidden("Device data un-editable")


def floor(request):
    if request.method == 'PATCH':
        try:
            data = loads(request.body)
        except JSONDecodeError as e:
            return JsonResponse({"message": "error", "error": e.args})
    else:
        return HttpResponseBadRequest("This URL required PATCH HTTP method")
    assert isinstance(data, dict)
    pk = data.pop('index')
    try:
        floor = Floor.objects.get(pk=pk)
    except Floor.DoesNotExist:
        return JsonResponse({
            "message": 'error',
            "error": "Floor with index {pk} does not exist"
        })
    except Exception as e:
        return JsonResponse({
            "message": 'error',
            "error": e.args[0]
        })
    for key, value in data.items():
        setattr(floor, name=key, key=value)
    return JsonResponse({"message": 'OK'})


def device(request):
    if request.method == 'PATCH':
        try:
            data = loads(request.body)
        except JSONDecodeError as e:
            return JsonResponse({"message": "error", "error": e.args})
    else:
        return HttpResponseBadRequest("This URL required PATCH HTTP method")
    pk_floor = data['floor']
    try:
        data['floor'] = Floor.objects.get(pk=pk_floor)
    except Floor.DoesNotExist:
        return JsonResponse({
            "message": "error",
            "error": f"Floor {pk_floor} does not exist"
        })
    try:
        data = Device(**data)
    except Exception as e:
        return JsonResponse({
            "message": 'error',
            "error": e.args[0]
        })
    return JsonResponse({"message": 'OK'})


def floor_rectangle(request):
    if request.method == 'PATCH':
        try:
            data = loads(request.body)
        except JSONDecodeError as e:
            return JsonResponse({"message": "error", "error": e.args})
    else:
        return HttpResponseBadRequest("This URL required PUT HTTP method")
    try:
        data = FloorRectangle(**data)
    except Exception as e:
        return JsonResponse({
            "message": 'error',
            "error": e.args[0]
        })
    return JsonResponse({"message": 'NotImplemented'})
