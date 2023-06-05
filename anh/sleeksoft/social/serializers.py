from rest_framework import serializers,validators
from .models import *
from rest_framework.validators import ValidationError
from django.conf import settings 
from rest_framework.response import Response
from rest_framework import status
import requests


class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model=User
		fields=('id','username','email','password','user_Member')
		extra_kwargs = {'password': {'write_only': True}}


class Image_PostSerializer(serializers.ModelSerializer):
	class Meta:
		model=Image_Post
		fields='__all__'

class PostSerializer(serializers.ModelSerializer):
	image_post = Image_PostSerializer(many=True,read_only=True)
	class Meta:
		model=Post
		fields='__all__'


