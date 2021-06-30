from django.shortcuts import render
from .models import Qusetion, Choice

# Create your views here.
def form(request):
    questions = Qusetion.objects.all()
    choices = Choice.objects.all()

    total_count = questions.count()
    context = {
        'questions': questions,
        'choices': choices,
        'total_count': total_count,
    }
    return render(request, 'form.html', context)


def form_check(request, total_count):
    if request.method == 'POST':
        print(total_count)