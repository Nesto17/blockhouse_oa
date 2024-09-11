from rest_framework.decorators import api_view
from rest_framework.response import Response

from .hardcodedData import candlestickData, lineChartData, barChartData, pieChartData

# Candlestick Chart Data
@api_view(['GET'])
def get_candlestick_data(request):
    transformed_data = [
        [item["x"], item["low"], item["open"], item["close"], item["high"]]
        for item in candlestickData["data"]
    ]
    return Response([["Date", "Low", "Open", "Close", "High"]] + transformed_data)

# Line Chart Data
@api_view(['GET'])
def get_line_chart_data(request):
    zipped_data = list(zip(lineChartData["labels"], lineChartData["data"]))

    return Response([["Month", "Value"]] + zipped_data)

# Bar Chart Data
@api_view(['GET'])
def get_bar_chart_data(request):
    zipped_data = list(zip(barChartData["labels"], barChartData["data"]))

    return Response([["Product", "Value"]] + zipped_data)

# Pie Chart Data
@api_view(['GET'])
def get_pie_chart_data(request):
    zipped_data = list(zip(pieChartData["labels"], pieChartData["data"]))

    return Response([["Color", "Value"]] + zipped_data)

