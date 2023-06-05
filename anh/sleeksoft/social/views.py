from .models import *
from .serializers import *

import rest_framework.status
from rest_framework.response import Response
from rest_framework import viewsets
from rest_framework import generics

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.files.storage import default_storage

from rest_framework.parsers import MultiPartParser,FormParser
from rest_framework import  permissions


from rest_framework.authtoken.serializers import AuthTokenSerializer

from rest_framework.decorators import api_view,permission_classes,parser_classes
from rest_framework.parsers import JSONParser
from rest_framework.permissions import IsAuthenticated   
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from django.conf import settings 
from rest_framework import status

from django.http import HttpResponse
import requests
import time

import datetime
from django.db import models
from django.utils import timezone


class Post_data(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['Sites','Location','Title']


@api_view(['GET'])
def Keep(request):
	user_one = request.query_params.get('user_one')
	data_user_one = Post.objects.get(Sites=user_one)

	data_user_one_Json = PostSerializer(data_user_one).data
	message = {'Data':data_user_one_Json}
	return Response(message,status=status.HTTP_200_OK)

