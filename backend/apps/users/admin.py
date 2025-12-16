from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

@admin.register(User)
class UserAdmin(BaseUserAdmin):
    # Fields to display in the admin list view
    list_display = ('id', 'email', 'username', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_superuser', 'is_active')
    ordering = ('email',)
    search_fields = ('email', 'username')

    # Fields for creating/editing users in admin
    fieldsets = (
        (None, {'fields': ('email', 'username', 'password')}),
        ('Permissions', {'fields': ('is_staff', 'is_superuser', 'is_active', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'is_staff', 'is_superuser', 'is_active')}
        ),
    )
