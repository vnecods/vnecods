"""th URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
# from Data_Interaction.admin import admin_site
from django.urls import path

from social import views
from rest_framework.routers import DefaultRouter,SimpleRouter
from django.urls import path,include
from django.conf.urls.static import static
from django.conf import settings

from django.urls import re_path as url 

admin.site.site_header = 'EU2ANBK'                    
admin.site.index_title = 'Site EU2ANBK'                 
admin.site.site_title = 'EU2ANBK site admin' 

# router = DefaultRouter()
# router.register(r'post-data', views.Post_data)

urlpatterns = [
    # path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('post-data',views.Post_data.as_view()),
    path('keep', views.Keep),
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
