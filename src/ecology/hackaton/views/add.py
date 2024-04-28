from json import loads, JSONDecodeError

from django.http.response import Http404, JsonResponse, HttpResponseBadRequest

from ..models import Device, Floor, DeviceData

def device_data(request):
    if request.method == 'PUT':
        try:
            data = loads(request.body)
        except JSONDecodeError as e:
            return JsonResponse({"message": "error", "error": e.args})
    else:
        return HttpResponseBadRequest("This URL required PUT HTTP method")
    try:
        data = DeviceData(**data)
    except Exception as e:
        return JsonResponse({
            "message": 'error',
            "error": e.args[0]
        })
    return JsonResponse({"message": 'NotImplemented'})


def floor(request):
    if request.method == 'PUT':
        try:
            data = loads(request.body)
        except JSONDecodeError as e:
            return JsonResponse({"message": "error", "error": e.args})
    else:
        return HttpResponseBadRequest("This URL required PUT HTTP method")
    try:
        data = Floor(**data)
    except Exception as e:
        return JsonResponse({
            "message": 'error',
            "error": e.args[0]
        })
    return JsonResponse({"message": 'NotImplemented'})


def device(request):
    if request.method == 'PUT':
        try:
            data = loads(request.body)
        except JSONDecodeError as e:
            return JsonResponse({"message": "error", "error": e.args})
    else:
        return HttpResponseBadRequest("This URL required PUT HTTP method")
    try:
        data = Floor(**data)
    except Exception as e:
        return JsonResponse({
            "message": 'error',
            "error": e.args[0]
        })
    return JsonResponse({"message": 'NotImplemented'})


def floor_rectangle(request):
    if request.method == 'PUT':
        try:
            data = loads(request.body)
        except JSONDecodeError as e:
            return JsonResponse({"message": "error", "error": e.args})
    else:
        return HttpResponseBadRequest("This URL required PUT HTTP method")
    try:
        data = Floor(**data)
    except Exception as e:
        return JsonResponse({
            "message": 'error',
            "error": e.args[0]
        })
    return JsonResponse({"message": 'NotImplemented'})
