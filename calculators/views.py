# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def calculators(request):
	return render(request, 'calculators/calc.html', locals())
