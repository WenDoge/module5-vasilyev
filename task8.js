let map = new Map([
   ['1', 'string'],
   [2, 'number'],
   [true, 'boolean']
 ]);
for (let [key, value] of map)
{
   console.log(`Ключ - ${key}, значение - ${value}`);
}