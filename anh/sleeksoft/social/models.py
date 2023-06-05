from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
	class Meta:
		ordering = ["id"]
		verbose_name_plural = "Quản lý tài khoản"
	AbstractUser._meta.get_field('email').blank = False
	AbstractUser._meta.get_field('email').null = False
	AbstractUser._meta.get_field('username').blank = False
	AbstractUser._meta.get_field('username').null = False
	AbstractUser._meta.get_field('password').blank = False
	AbstractUser._meta.get_field('password').null = False

class Post(models.Model):
	class Meta:
		ordering = ["-id"]
		verbose_name_plural = "Thêm địa điểm du lịch"
	Sites = models.CharField('Địa danh',max_length=500, null=True, blank=True)
	Location = models.CharField('Địa điểm',max_length=500, null=True, blank=True)
	Title = models.CharField('Tiêu đề',max_length=500, null=True, blank=True)
	Body = models.TextField('Nội dung',null=True,blank=True)
	Map = models.CharField('Chỉ đường',max_length=500, null=True, blank=True)
	def __str__(self):	
		return str(self.Sites)

class Image_Post(models.Model):
	class Meta:
		ordering = ["id"]
		verbose_name_plural = "Ảnh địa điểm"
	Image_post = models.ImageField('Ảnh',upload_to='location',null=True, blank=True)
	Post_link = models.ForeignKey(Post,related_name='image_post',on_delete=models.CASCADE,null=True,blank=True)
	def __str__(self):	
		return str(self.Image_post)



