# Generated by Django 5.0.6 on 2024-06-28 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="SolarPlant",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(default="unnamed", max_length=120)),
                ("geometry", models.TextField()),
            ],
        ),
    ]
