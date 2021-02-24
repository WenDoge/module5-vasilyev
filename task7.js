let arr = [4, 0, 2, 3, null, undefined];
let countEven = 0;
let countOdd = 0;
let countZero = 0;
let countOther = 0;
function arrCheck()
{
   for (i = 0; i < arr.length; i++)
   {  
      if (typeof(arr[i]) == 'number' && arr[i]!= 0)
      {
         if (arr[i] % 2 == 0)
         {
            countEven++;
         }
         else if (arr[i] % 2 != 0 && arr[i] !== NaN)
         {
            countOdd++;
         }
      }
      else if (arr[i] == 0)
      {
         countZero++;
      }
      else
      {
         countOther++;
      }
      if (i == arr.length - 1)
      {
         return countEven, countOdd, countZero, countOther;
      }
   }
}
arrCheck.apply(arr);
console.log(`В массиве : ${countEven} четных, ${countOdd} нечетных, ${countZero} нулей и ${countOther} остальной ереси`);