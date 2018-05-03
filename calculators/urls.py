from django.conf.urls import url, include
from django.contrib import admin
from calculators import views

urlpatterns = [
    url(r'^calc/$', views.calculators, name='calculators'),
]
