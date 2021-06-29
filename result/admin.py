from django.contrib import admin
from .models import Result, ResultInfo

# Register your models here.

class ResultAdmin(admin.ModelAdmin):
    list_display = ('number', 'name', 'count')


admin.site.register(Result, ResultAdmin)
admin.site.register(ResultInfo)