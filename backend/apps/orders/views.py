from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Order
from .serializers import OrderSerializer
from apps.cart.models import Cart

class OrderListView(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

class CheckoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        cart = Cart.objects.get(user=request.user)

        if not cart.items.exists():
            return Response({"error": "Cart is empty"}, status=400)

        order = Order.objects.create(user=request.user)

        for item in cart.items.all():
            order.items.create(
                product=item.product,
                quantity=item.quantity,
                price=item.product.price
            )

        cart.items.all().delete()

        return Response({"order_id": order.id, "status": "created"})
