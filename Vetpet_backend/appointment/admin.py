from django.contrib import admin
from .models import Pet, Doctor, Treatment, Appointment

admin.site.register(Pet)
admin.site.register(Doctor)
admin.site.register(Treatment)
admin.site.register(Appointment)
