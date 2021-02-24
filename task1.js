let x = prompt('введите значение');
x = +x % 2;
if (typeof x== 'number' && isNaN(x) == 0) 
{
   if(x===0)
   {
      console.log('Вы ввели четное число');
   }
   else
   {
      console.log('Вы ввели нечетное число');
   }
}
if (isNaN(x))
{
   console.log('Упс, кажется, вы ошиблись');
}