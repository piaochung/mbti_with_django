from django.shortcuts import render
from .models import Result, ResultInfo

# Create your views here.
def result(request):
    return render(request, 'result.html')


def result_set(request):
    result_info = ResultInfo.objects.all()

    context = {
        'result_info': result_info,
    }
    return render(request, 'result_set.html', context)