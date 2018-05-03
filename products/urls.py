from django.conf.urls import url, include
from django.contrib import admin
from products import views

urlpatterns = [
    url(r'^products/$', views.products, name='products'),
]