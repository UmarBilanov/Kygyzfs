# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-03-21 09:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='subject',
            field=models.CharField(default='Subject', max_length=256),
        ),
    ]