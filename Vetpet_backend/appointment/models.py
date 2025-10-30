from django.db import models

from django.conf import settings

# Create your models here.

class Pet(models.Model):
     owner = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True, null=True
    )
     name=models.CharField(max_length=100)
     species = models.CharField(max_length=50)
     age = models.IntegerField()
    
    
class Doctor(models.Model):
    name=models.CharField(max_length=50)
    location=models.CharField(max_length=50)
    age = models.IntegerField()
    specialty = models.CharField(max_length=100)
    
    
class Treatment(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    duration_minutes = models.IntegerField()
    cost = models.DecimalField(max_digits=6, decimal_places=2)
    
    
class Appointment(models.Model):
    pet = models.ForeignKey(Pet, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    treatment = models.ForeignKey(Treatment, on_delete=models.CASCADE)
    appointment_time = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)