from json import loads, JSONDecodeError

from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponseBadRequest, Http404

__all__ = (
    'index',
)

def index(request):
    return render(request, 'hackaton/index.html')
