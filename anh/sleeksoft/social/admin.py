from django.contrib import admin
from django.contrib import auth

# from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.html import mark_safe
from social.models import *


admin.site.unregister(auth.models.Group)

class Image_Post_Admin(admin.StackedInline):
    model= Image_Post

    readonly_fields = ["Show_Avatar"]
    def Show_Avatar(self,Image_Post):
        return mark_safe("<img src='/{img_url}' alt='Image' style='width:120px;'/>".format(img_url=Image_Post.Image_post.name))


class Post_Admin(admin.ModelAdmin):
    list_display = ('id','Sites','Location','Title')
    search_fields = ('Sites','Location','Title',)
    inlines = [Image_Post_Admin]

admin.site.register(Post,Post_Admin)

