import datetime

size = input('Qual o tamanho desejado? ')

while(size>5 or size<1):
  size = input('Qual o tamanho desejado? ')


now = datetime.datetime.now()
print (now.hour, now.minute, now.second)