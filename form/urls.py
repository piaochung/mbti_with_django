from django.urls import path
from . import views

urlpatterns = [
    path('', views.form, name='form'),
    path('form_check/', views.form_check, name='form_check'),
] 
