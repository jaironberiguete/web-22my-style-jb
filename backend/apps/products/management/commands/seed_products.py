from django.core.management.base import BaseCommand
from apps.products.models import Product, Category
import random

class Command(BaseCommand):
    help = "Seed database with demo products"

    def handle(self, *args, **kwargs):
        categories = list(Category.objects.all())

        if not categories:
            self.stdout.write(self.style.ERROR("No categories found. Create categories first."))
            return

        products = []
        for i in range(1, 21):
            products.append(
                Product(
                    name=f"Demo Product {i}",
                    price=random.randint(20, 300),
                    category=random.choice(categories),
                    description="Automatically generated demo product.",
                    image="/products/default.png",
                )
            )

        Product.objects.bulk_create(products)

        self.stdout.write(self.style.SUCCESS("✅ 20 demo products created successfully"))
