# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Contact(models.Model):
	name = models.CharField(max_length=64, blank=True, null=True, default=None)
	email = models.EmailField()
	subject = models.CharField(max_length=64, blank=True, null=True, default=None)
	message = models.TextField(blank=True, null=True, default=None)
	created = models.DateTimeField(auto_now_add=True, auto_now=False)
	updated = models.DateTimeField(auto_now_add=False, auto_now=True)


	def __str__(self):
		return "User %s %s" % (self.name, self.email,)

	class Meta:
		verbose_name = 'MyUser'
		verbose_name_plural = 'A lot of Users'