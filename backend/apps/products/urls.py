from django.urls import path
from .views import ProductListCreateView
from .views import CategoryListView


urlpatterns = [
    path('', ProductListCreateView.as_view(), name='product-list-create'),
    path("categories/", CategoryListView.as_view(), name="category-list"),

]
