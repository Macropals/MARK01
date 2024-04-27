from json import loads, JSONDecodeError

from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt

def index(request):
    return render(request, 'hackaton/index.html')

@csrf_exempt
def add_info(request):
    if request.method == 'PUT':
        try:
            data = loads(request.body)
        except JSONDecodeError as e:
            return JsonResponse({"message": "error", "error": e.args})
    else:
        return HttpResponseBadRequest("This URL required PUT HTTP method")
    return JsonResponse({"message": 'OK'})
