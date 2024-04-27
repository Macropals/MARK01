from json import loads, JSONDecodeError

from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponseBadRequest, Http404

def device_data(request):
    if request.method == 'PUT':
        try:
            data = loads(request.body)
        except JSONDecodeError as e:
            return JsonResponse({"message": "error", "error": e.args})
    else:
        return HttpResponseBadRequest("This URL required PUT HTTP method")
    return JsonResponse({"message": 'NotImplemented'})

def floor(request):
    raise Http404('Not implemented')

def device(request):
    raise Http404('Not implemented')

def floor_rectangle(request):
    raise Http404('Not implemented')
