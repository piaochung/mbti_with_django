from django.urls import path
from . import views

urlpatterns = [
    path('', views.result, name='result'),
    path('result_set/<int:total_count>', views.result_set, name='result_set')
]
