from django.shortcuts import render

# Create your views here.
def result(request):
    return render(request, 'result.html')


def result_set(request):
    return render(request, 'result_set.html')