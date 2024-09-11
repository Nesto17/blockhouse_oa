from django.urls import path
from . import views

urlpatterns = [
    path('candlestick-data/', views.get_candlestick_data, name='candlestick-data'),
    path('line-chart-data/', views.get_line_chart_data, name='line-chart-data'),
    path('bar-chart-data/', views.get_bar_chart_data, name='bar-chart-data'),
    path('pie-chart-data/', views.get_pie_chart_data, name='pie-chart-data'),
]