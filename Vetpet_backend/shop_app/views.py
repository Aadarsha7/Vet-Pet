from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer

# Create your views here.

from rest_framework.response import Response
@api_view(["GET"])
def products(request):
    products= Product.objects.all()
    serializer = ProductSerializer(products,many=True)

    return Response(serializer.data)
