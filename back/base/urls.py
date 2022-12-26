
from django.contrib import admin
from django.urls import path
from . import views



urlpatterns = [
    path('', views.index),
    path('products',views.myProducts),\
    path('token/',views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]
