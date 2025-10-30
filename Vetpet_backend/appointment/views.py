from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import Pet, Doctor, Treatment, Appointment
from .serializers import PetSerializer, DoctorSerializer, TreatmentSerializer, AppointmentSerializer

from django.shortcuts import get_object_or_404


# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def appointment_list(request):
    appointments=Appointment.objects.filter(owner=request.user)
    serializer=AppointmentSerializer(appointments,many=True)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_appointment(request):
    data = request.data.copy()        
    data['owner'] = request.user.id   
    serializer = AppointmentSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def appointment_detail(request, pk):
    appointment = get_object_or_404(Appointment, pk=pk, owner=request.user)
    serializer = AppointmentSerializer(appointment)
    return Response(serializer.data)



@api_view(["PATCH"])
@permission_classes([IsAuthenticated])
def update_appointment(request, pk):
    appointment = get_object_or_404(Appointment, pk=pk, owner=request.user)
    serializer = AppointmentSerializer(appointment, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_appointment(request, pk):
    appointment = get_object_or_404(Appointment, pk=pk, owner=request.user)
    appointment.delete()
    return Response({"message": "Appointment deleted successfully"}, status=204)
