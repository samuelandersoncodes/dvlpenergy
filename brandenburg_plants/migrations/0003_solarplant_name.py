# Generated by Django 5.0.6 on 2024-06-28 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("brandenburg_plants", "0002_remove_solarplant_name"),
    ]

    operations = [
        migrations.AddField(
            model_name="solarplant",
            name="name",
            field=models.CharField(default="unnamed", max_length=120),
        ),
    ]
