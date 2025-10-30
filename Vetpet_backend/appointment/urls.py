
from django.urls import path
from . import views

app_name = "appointments"  # Helps with namespacing in larger projects

urlpatterns = [
    # List all appointments for the logged-in user
    path("", views.appointment_list, name="list"),
    
    # Create a new appointment
    path("create/", views.create_appointment, name="create"),
    
    # Retrieve, update, or delete a specific appointment
    path("<int:pk>/", views.appointment_detail, name="detail"),
    path("<int:pk>/update/", views.update_appointment, name="update"),
    path("<int:pk>/delete/", views.delete_appointment, name="delete"),
]
