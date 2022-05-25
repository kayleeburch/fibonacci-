# 0 1 1 2 3 5 8 13 21 34 55
def fibonacci(n):
  firstNum = 0
  secondNum = 1
  for i in range(n):
    adding = firstNum + secondNum
    firstNum = secondNum
    secondNum = adding
  return firstNum


