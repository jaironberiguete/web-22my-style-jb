from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('apps.users.urls')),  # JWT auth
    path('api/', include('apps.products.urls')),   # Products API
    path('api/cart/', include('apps.cart.urls')),     # Cart API
]
