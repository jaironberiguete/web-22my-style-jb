from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# If you made a custom serializer view, import that instead

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
