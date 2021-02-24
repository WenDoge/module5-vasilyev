let x = [12, 'pip', 'pop', true, 'ginga', 'binga', 'bongo'];
console.log(`array length - ${x.length}`);
x.forEach(function(item, i, x) 
   {
      console.log( i + ": " + item + " (array: " + x + ")" );
   });