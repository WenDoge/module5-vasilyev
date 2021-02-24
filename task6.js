let arr = [2, 2, 2, 2, 2, 2];
let count = 0;
function arrCheck()
{
  for (i = 0; i < arr.length; i++)
  {
      if (arr[0]===arr[i])
      {
         count++;
      }
      else if (i == arr.length - 1)
      {
         return count;
      }
  }
}
arrCheck.apply(arr);
if (count == arr.length)
{
   console.log('true');
}
else
{
   console.log('false');
}