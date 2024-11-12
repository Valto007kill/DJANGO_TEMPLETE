from django.views.generic import View
from django.shortcuts import render

class Homeview(View):
    def get(self, request, *args, **kwargs):
        context = {
            # Aquí puedes añadir variables que quieras pasar al template
        }
        return render(request, 'index.html', context)









 # esto me daba error y que por la identacion
#from django.views.generic import View
#from django.shortcuts import render

#class Homeview(View):
#    def get(self,request,*args,**kwargs):
#        context = {
            
#        }
#     return render(request, 'index.html',context)