static int count = 0;

int MyCLanguageCounterFunction(int increaseValue)
{
  count = increaseValue + count;
  return count;
}

void MyCLanguageResetCountFunction()
{
  count = 0;
}

int MyCLanguageDoItFunction()
{
  return 42;
}