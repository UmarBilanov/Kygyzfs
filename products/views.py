# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def products(request):
	return render(request, 'products/products.html', locals())
