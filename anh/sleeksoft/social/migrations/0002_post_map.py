# Generated by Django 4.1.3 on 2023-05-22 22:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('social', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='Map',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Chỉ đường'),
        ),
    ]