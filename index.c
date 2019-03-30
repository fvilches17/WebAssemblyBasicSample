static int count = 0;

int MyCLanguageCounterFunction(int increaseValue) { 
  count = increaseValue + count;
  return count;
}

int MyCLanguageDoItFunction() { 
  return 42;
}