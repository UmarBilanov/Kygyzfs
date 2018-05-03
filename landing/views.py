# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .forms import ContactForm

# Create your views here.
def landing(request):
	form = ContactForm(request.POST or None)

	if request.method == "POST" and form.is_valid():
		print (request.POST)
		print (form.cleaned_data)
		data  = form.cleaned_data
		print (data["name"])

		new_form = form.save()

	return render(request, 'landing/home.html', locals())
