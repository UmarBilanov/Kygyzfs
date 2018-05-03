# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import *

# Register your models here.
class ContactAdmin(admin.ModelAdmin):
	list_display = [field.name for field in Contact._meta.fields]
	
	class Meta:
		model = Contact
			

admin.site.register(Contact, ContactAdmin)