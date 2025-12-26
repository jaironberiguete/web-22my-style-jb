from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CurrentUserView, RegisterView
# If you made a custom serializer view, import that instead

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("user/", CurrentUserView.as_view(), name="current-user"),
    path("register/", RegisterView.as_view(), name="register"),

]
