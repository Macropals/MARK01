from django.http.response import Http404


def device_data(request):
    raise Http404('Not implemented')
    # if request.method == 'PUT':
    #     try:
    #         data = loads(request.body)
    #     except JSONDecodeError as e:
    #         return JsonResponse({"message": "error", "error": e.args})
    # else:
    #     return HttpResponseBadRequest("This URL required PUT HTTP method")
    # return JsonResponse({"message": 'NotImplemented'})


def floor(request):
    raise Http404('Not implemented')


def device(request):
    raise Http404('Not implemented')


def floor_rectangle(request):
    raise Http404('Not implemented')
