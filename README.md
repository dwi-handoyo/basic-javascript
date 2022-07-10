# Basic Javascript

Compilation of simple JS codes to solve **JS Hero** tests.

### 1. Logging and Strings

Function "shout" that takes a string and returns this string duplicated. In addition, the return is logged.

Example: shout('Fire') should return 'FireFire' and should log 'FireFire'.

       function shout(x){
        let result = x + x;
        console.log(result);
        return result;
       }

"console log" shall be stated prior to "return"

### 2. String: toUpperCase()

Function "toCase" that takes a string and returns that string in lowercase and uppercase with "-" as delimiter.

Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.

       function toCase(word){
        let low = word.toLowerCase();
        let up = word.toUpperCase();
        return low + '-' + up;
       } 

### 3. String: charAt()

Function "shortcut" that takes two strings and returns the initial letters of theses strings.

Example: shortcut('Amnesty', 'International') should return 'AI'.

        function shortcut(word1, word2){
         let one = word1.charAt(0);
         let two = word2.charAt(0);
         return one + two;
        }

### 4. String: trim()

Function "firstChar", which returns the first character that is not a space when a string is passed.

Example: firstChar(' Rosa Parks ') should return 'R'.

        function firstChar(word){
         let input = word.trim();
         return input.charAt(0);  
        }

### 5. String: indexOf()

Function "indexOfIgnoreCase" taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.

Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.

       function indexOfIgnoreCase(word1, word2){
        let wordx1 = word1.toLowerCase();
        let wordx2 = word2.toLowerCase();
        let n = wordx1.indexOf(wordx2);
        return n;
       }

### 6. String: indexOf() with from index

Function "secondIndexOf", taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned.

Example: secondIndexOf('White Rabbit', 'it') should return 10.

       function secondIndexOf(word1, word2){
        let wordx1 = word1.toLowerCase();
        let wordx2 = word2.toLowerCase();
        let n1 = wordx1.indexOf(wordx2, 0);
        let n2 = wordx1.indexOf(wordx2, n1+1);
        return n2; 
       }

### 7. String: substr()

Function "firstWord", taking a string and returning the first word in that string. The first word are all characters up to the first space.

Example: firstWord('see and stop') should return 'see'.

       function firstWord(word){
        let n1 = word.indexOf(' ');
        let word1 = word.substr(0, n1);
        return word1;
       }

### 8. String: replace()

Function "normalize", that replaces '-' with '/' in a date string.

Example: normalize('20-05-2017') should return '20/05/2017'.

        function normalize(date){
         let newDate1 = date.replace('-', '/');
         let newDate2 = newDate1.replace('-', '/');
         return newDate2;
        }

### 9. Fahrenheit

Function "toFahrenheit" that converts a temperature from Celsius to Fahrenheit.

Example: toFahrenheit(0) should return 32.

        function toFahrenheit(c){
         let f = (9/5 * c) + 32;
         return f;
        }

### 10. Modulo

Function "onesDigit" that takes a natural number and returns the ones digit of that number.

Example: onesDigit(2674) should return 4.

         function onesDigit(x){
          let y = x % 10;
          return y;
         }

### 11. Math

Function "hypotenuse" that calculates the length of the hypotenuse of a right triangle. The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean theorem is valid. If a and b are the lengths of the two legs and c is the length of the hypotenuse, the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.

         function hypotenuse(a, b){
          let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
          return c;
         }

### 12. min and max

Function "midrange", that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.

Example: midrange(3, 9, 1) should return (9+1)/2 = 5.

         function midrange(x, y, z){
          let a = Math.max(x, y, z);
          let b = Math.min(x, y, z);
          let out = (a + b)/2;
         return out;
        }

### 13. Math.PI

Function "area" that calculates the area of a circle. The function is given the radius of the circle.

Example: area(1) should return PI and area(2) should return 4 * PI.

        function area(r){
         let circle = Math.PI * Math.pow(r, 2);
         return circle;
        }

### 14. Rounding

Function "round100" that rounds a number to the nearest hundred.

Example: round100(1749) should return 1700 and round100(856.12) should return 900.

        function round100(x){
         let out = Math.round(x/100);
         return out * 100;
        }

### 15. Random numbers

Function "dice" that returns like a dice a random number between 1 and 6.

         function dice(){
          let x = Math.random();
          let out = Math.floor(x * 6) + 1;
          return out;
         }

### 16. parseInt

Function "add" that takes a string with a summation task and returns its result as a number. Two natural numbers should be added. The summation task is a string of the form '102+17'.

Example: add('102+17') should return 119.

         function add(x){
          let n = x.indexOf('+');
          let x1 = parseInt(x.substr(0,n));
          let x2 = parseInt(x.substr(n+1));
          let out = x1 + x2;
         return out;
         }

### 17. Boolean

Function "nand" that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true.

I.e.: The call nand(true, true) should return false. The calls nand(true, false), nand(false, true) and nand(false, false) should return true.

         function nand(x, y){
          let z = !(x && y);
          return z;
         }

### 18. NOR

Function "nor" that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.

I.e.: The call nor(false, false) should return true. The calls nor(true, false), nor(false, true) and nor(true, true) should return false.

         function nor(x, y){
          let z = !(x || y);
          return z;
         }

### 19. XOR

Function "xor" that takes two Boolean values. If both values are different, the result should be true. If both values are the same, the result should be false.

I.e.: The calls xor(true, false) and xor(false, true) should return true. The calls xor(true, true) and xor(false, false) should return false.

        function xor(x, y){
         let z = (x && !y) || (!x && y);
         return z;
        }

* https://github.com/dwi-handoyo/basic-javascript/blob/main/boolean_xor.js

### 20. Strict equality

Function "equals" that checks two values for strict equality.

Example: equals(1, 1) should return true and equals(1, 2) should return false.

        function equals(x, y){
         return x === y;
        }

### 21. Three identical values

Function "equals" that checks 3 values for strict equality. The function should only return true if all 3 values are equal.

Example: equals(1, 1, 1) should return true and equals(1, 2, 1) should return false.

         function equals(x, y, z){
          let a = (x === y) && (x === z);
          return a;  
         }

### 22. Even numbers

Function "isEven" that checks if a passed number is even. If the given number is even, true should be returned, otherwise false.

Example: isEven(2) should return true and isEven(3) should return false.

       function isEven(x){
        let z = x%2 === 0;
        return z;
       }

### 23. Strict inequality

Function "unequal" that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.

Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2) should return false.

        function unequal(x, y, z){
         let a = (x !== y) && (x !== z) && (y !== z);
         return a;
        }

### 24. Compare numbers

Function isThreeDigit that checks if a number is greater than or equal to 100 and less than 1000.

Example: isThreeDigit(500) should return true and isThreeDigit(50) should return false.

        function isThreeDigit(x){
         return ((x/100 >= 1) && (x/100 < 10));
        }

### 25. if

Function "equals" that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.

Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.

        function equals(x, y){
         if(x === y){
          return 'EQUAL';
         }else{
          return 'UNEQUAL';
         }
        }

### 26. Two returns

function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.

Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'.

         function repdigit(x){
          let a = Math.floor(x/10);
          let b = x-(a*10);
          if(a == b){
           return 'Repdigit!';
          }
          return 'No Repdigit!';
         }

### 27. if...else

Function "addWithSurcharge" that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2.

Example: addWithSurcharge(5, 15) should return 23.

       function addWithSurcharge(x, y){
        if(x <= 10){
         x = x + 1;
        }else{ 
         x = x + 2;
        }
        if(y <= 10){
         y = y + 1;
        }else{ 
         y = y + 2;
        }
        return x + y;
       }

### 28. else if

Function "addWithSurcharge" that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.

Example: addWithSurcharge(10, 30) should return 44.

         function addWithSurcharge(x, y){
          if(x <= 10){
           x = x + 1;
          }else if(x > 10 && x <= 20){
           x = x + 2;
          }else{
           x = x + 3;
          }
          if(y <= 10){
           y = y + 1;
          }else if(y > 10 && y <= 20){
           y = y + 2;
          }else{
           y = y + 3;
          }
           return x + y;   
          }

### 29. Arrays

Function "toArray" that takes 2 values and returns these values in an array.

Example: toArray(5, 9) should return the array [5, 9].

         function toArray(x, y){
          return [x, y];
         }

### 30. Get array elements

Function "getFirstElement" that takes an array and returns the first element of the array.

Example: getFirstElement([1, 2]) should return 1.

         function getFirstElement(x){
          return x[0];
         }

31. Set array elements

Function "setFirstElement" that takes an array and an arbitrary variable. The variable should be inserted as the first element in the array. The array should be returned.

Example: setFirstElement([1, 2], 3) should return [3, 2].

function setFirstElement(x, y){
 x[0] = y;
 return x;
}

32. Array: length

Function "getLastElement" that takes an array and returns the last element of the array.

Example: getLastElement([1, 2]) should return 2.

function getLastElement(x){
 let n = x.length;
 return x[n-1];
}

33. Sorting arrays

Function "sort" that takes an array filled with 3 numbers and returns these 3 numbers sorted in ascending order as an array.

Example: sort([2, 3, 1]) should return [1, 2, 3].

function sort(x){
 let max = Math.max(x[0], x[1], x[2]);
 let min = Math.min(x[0], x[1], x[2]);
 let mid = 0; 
 if(x[0] > min && x[0] < max){
  mid = x[0];
 }else if(x[1] > min && x[1] < max){
  mid = x[1];
 }else if(x[2] > min && x[2] < max){
  mid = x[2];
 }
return [min, mid, max];
}

34. Array: shift() and push()

Function "rotate" that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.

Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].

function rotate(x){
 let firstElement = x.shift();
 x.push(firstElement);
 return x;
}

35. Array: indexOf()

Function "add" that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2].

function add(x,y){
 let n = x.indexOf(y);
 if(n == -1){
  x.push(y);
 }
 return x;
}

35. Array: concat()

Function "concatUp" that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array.

Example: concatUp([1, 2], [3]) should return [3, 1, 2] and concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8].

function concatUp(x, y){
 if(x.length > y.length){
  return y.concat(x);
 }else{
  return x.concat(y);
 }
}

36. Array: slice()

Function "halve" that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half.

Example: halve([1, 2, 3, 4]) should return [1, 2].

function halve(x){
 let n = x.length;
 if(n % 2 == 1){
  return x.slice(0, (n+1)/2);
 }else{
  return x.slice(0, n/2);
 }
}

37. Array: join()

Function "list" that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. An empty array should return an empty string.

Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'.

function list(x){
 let n = x.length;
 if(n >= 2){
  let firstArray = x.slice(0, n-1);
  let firstArrayJoin = firstArray.join(', ');
  let newArray = [firstArrayJoin];
  newArray[1] = x[n-1];
  let newArrayJoin = newArray.join(' and ');
  return newArrayJoin;
 }else{
  return x.join();
 } 
}

38. Array of arrays

Function "flat" that flattens a two-dimensional array with 3 entries.

Example: flat(loshu) should return [4, 9, 2, 3, 5, 7, 8, 1, 6]. Thereby loshu is the magic square from the example above.

function flat(x){
 let x1 = x[0];
 let x2 = x[1];
 let x3 = x[2];
 let x12 = x1.concat(x2);
 let x123 = x12.concat(x3);
 return x123; 
}

39. Comments

Function "median" that takes an array of ascending numbers and returns the median of that numbers.

Example: median([1, 2, 10]) should return 2 and median([1, 2, 10, 100]) should return 6.

function median(x){
 let n = x.length;
 if(n % 2 == 1){
  return x[(n-1)/2];
 }else{
  return (x[n/2]+x[n/2-1])/2
 }
}

40. undefined

Function "hello" having one parameter and returning 'Hello <parameter>!'. If hello is called without an argument, 'Hello world!' should be returned.

Example: hello('Nala') should return 'Hello Nala!'.

function hello(x){
 if(x === undefined){
  return 'Hello world!';
 }else{
  return 'Hello ' + x + '!';
 }
}

41. null

Function "cutComment" that takes one line of JavaScript and returns a possible line comment trimmed. If the line contains no line comment, null should be returned. For simplicity, we assume that the code does not contain the comment characters within a string.

Example: cutCommt('let foo; // bar') should return 'bar'.

function cutComment(x){
 let n = x.indexOf('//');
 if(n === -1){
  return null;
 }else{
  return x.substr(n+3);
 }
}

42. for loop

Function "addTo" that accepts a number as a parameter and adds all natural numbers smaller or equal than the parameter. The result is to be returned.

Example: addTo(3) should return 1+2+3 = 6.

function addTo(x){
 let sum = 0;
 for(let i=1; i<=x; i++){
  sum = sum + i;
 }
 return sum;
}

43. Factorial

Function "factorial" that calculates the factorial of a positive integer.

Example: factorial(3) should return 6.

function factorial(x){
 let fac = 1;
 for(let i=1; i <= x; i++){
  fac = fac * i;
 }
 return fac;
}

44. Loops and arrays

Function "mean" that accepts an array filled with numbers and returns the arithmetic mean of those numbers.

Example: mean([1, 2, 3]) should return (1+2+3)/3 = 2.

function mean(x){
 let sum = 0;
 for(let i=0; i < x.length; i++){
  sum = sum + x[i];
 }
 return sum/x.length;
}

45. while loop

Function "spaces" that takes a natural number n and returns a string of n spaces.

Example: spaces(1) should return ' '.

function spaces(x){
 let space = '';
 while(space.length < x){
  space = space + ' ';
 }
 return space; 
}

46. do...while loop

Function "lcm" that takes two natural numbers and calculates their least common multiple (lcm). The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b.

Example: lcm(4, 6) should return 12.

function lcm(x, y){
 let kpk = 0;
 do {
  kpk = kpk + x;
 } while ( kpk % y !== 0);
 return kpk;
}

47. gcd (Greatest Common Divisor) 

Function "gcd" that takes two natural numbers and calculates their gcd.

Example: gcd(6, 15) should return 3.

function gcd(x, y){
 let xArr = [];
 let yArr = [];
 for(let i=1; i<=x; i++){
  if( x % i === 0){
   xArr.push(i);
  }
  }
 for(let i=1; i<=y; i++){
  if( y % i === 0){
   yArr.push(i); 
  }
 }

let fpb = []
for(let i=0; i<xArr.length; i++){
 for(let j=0; j<yArr.length; j++){
  if(xArr[i] == yArr[j]){
   fpb.push(xArr[i]);
  }
 }
} 

return fpb[fpb.length-1]; 
}

* https://github.com/dwi-handoyo/basic-javascript/blob/main/greatCommonDivisor.js

48. break and continue - Prime Numbers

Function "isPrime" that checks whether a passed number is prime. In case of a prime number it should return true, otherwise false.

Example: isPrime(7) should return true and isPrime(8) should return false.

function isPrime(x){
let number = 0;
 if(x == 1){
   return false;
  }else{
  for(let i = 2; i <= x; i++){
   if(x % i === 0){
    number = i; 
    break;
   }
  }
  if(number == x){
   return true; 
  }else{
   return false;
  }
 } 
}

* https://github.com/dwi-handoyo/basic-javascript/blob/main/checkPrimeNumber.js

49. Nested loops

Function "sum" that calculates the sum of all elements of a two-dimensional array.

Example: sum([[1, 2], [3]]) should return 6.

function sum(a){
 let sum = 0;
 for(let i=0; i<a.length; i++){
  for(let j=0; j<a[i].length; j++){
   sum = sum + a[i][j];
  }
 }
 return sum;
}

50. The arguments object

Function "max" that calculates the maximum of an arbitrary number of numbers.

Example: max(1, 2) should return 2 and max(2, 3, 1) should return 3.

function max(){
let x = 0;
 for(let i=0; i<arguments.length; i++){
  if(arguments[i] > x){
   x = arguments[i];
  } 
 }
return x;
}

51. NaN

Function parseFirstInt that takes a string and returns the first integer present in the string. If the string does not contain an integer, you should get NaN.

Example: parseFirstInt('No. 10') should return 10 and parseFirstInt('Babylon') should return NaN.

function parseFirstInt(x){
 let y = '';
 let n = 0;
 for(let i=0; i<x.length; i++){ 
  if(Number.isNaN(parseInt(x[i]))){
   continue;
  }else{
   n = i;
   break;
  }
 }
 for(let i=n; i<x.length; i++){
  if(Number.isNaN(parseInt(x[i]))){
   break;
  }
  y = y + x[i];
 }

 if(x[n-1] == '-'){
  y = -y;
 }
 return parseInt(y);
}

52. String: split()

Function add that takes a string with a summation task and returns its result as a number. A finite number of natural numbers should be added. The summation task is a string of the form '1+19+...+281'.

Example: add('7+12+100') should return 119.

function add(x){
 let sum = 0;
 let numbers = x.split('+');
 for(let i=0; i<numbers.length; i++){
  sum = sum + parseInt(numbers[i]);
 }
 return sum; 
}

53. Functions call functions

Function "sum" that takes an array of numbers and returns the sum of these numbers. Write a function mean that takes an array of numbers and returns the average of these numbers. The mean function should use the sum function.

function sum(x){
 let total = 0;
 for(let i=0; i<x.length; i++){
  total = total + x[i];
 }
 return total;
}

function mean(y){
 let average = sum(y)/y.length;
 return average;
}

54. Recursion

Function "reverse" that reverses the order of the characters in a string. The function should be recursive.

Example: reverse('live') should return 'evil'.

function reverse(x){
 if( x === ''){
  return '';
 }
 return reverse(x.substr(1)) + x.charAt(0); 
}

* https://github.com/dwi-handoyo/basic-javascript/blob/main/stringReversedCharacters.js

55. Roman numerals I

Function "arabic" that converts a Roman number (up to 1000) into an Arabic.

Example: arabic('CDLXXXIII') should return 483.

function arabic(x){
 let arr = [];
 for(let i=0; i<x.length; i++){
  if(x[i] === 'I'){
   arr.push(1);
  }else if(x[i] === 'V'){
   arr.push(5);
  }else if(x[i] === 'X'){
   arr.push(10);
  }else if(x[i] === 'L'){
   arr.push(50);
  }else if(x[i] === 'C'){
   arr.push(100);
  }else if(x[i] === 'D'){
   arr.push(500);
  }else{
   arr.push(1000);
  }
 }
console.log(arr);

let arrSort = []; 
for(let i=0; i<arr.length-1; i++){
 if(arr[i]>=arr[i+1]){
  arrSort.push(arr[i])
 }else{
  arrSort.push(-arr[i])
 }
}
arrSort.push(arr[arr.length-1]);
console.log(arrSort);

let jumlah = 0;
for(let i = 0; i<arrSort.length; i++){
 jumlah = jumlah + arrSort[i];
}

return jumlah;
}

* https://github.com/dwi-handoyo/basic-javascript/blob/main/romanToArabicNumbers.js

56. Roman numerals II

Function "roman" that converts an Arabic number (up to 1000) into a Roman numeral.

Example: roman(483) should return 'CDLXXXIII'.

function romVal(x){
let xRom = []
let y1 = '';
let y2 = '';
let y3 = '';

if(x[0] == 0){
 xRom.push('');
}else{
 xRom.push('M');
}

if(x[1] == 0){
 xRom.push('');
}else if(x[1] > 0 && x[1] < 4){
 while(y1.length < x[1]){
  y1 = y1 + 'C';  
 }xRom.push(y1);
}else if(x[1] == 4){
  y1 = 'CD';
  xRom.push(y1);
}else if(x[1] == 5){
  y1 = 'D';
  xRom.push(y1);
}else if(x[1] > 5 && x[1] < 9){
  y1 = 'D';
 while(y1.length < x[1]-4){
  y1 = y1 + 'C';  
 }xRom.push(y1);
}else{
  y1 = 'CM';
  xRom.push(y1);
}

if(x[2] == 0){
 xRom.push('');
}else if(x[2] > 0 && x[2] < 4){
 while(y2.length < x[2]){
  y2 = y2 + 'X';  
 }xRom.push(y2);
}else if(x[2] == 4){
  y2 = 'XL';
  xRom.push(y2);
}else if(x[2] == 5){
  y2 = 'L';
  xRom.push(y2);
}else if(x[2] > 5 && x[2] < 9){
  y2 = 'L';
  while(y2.length < x[2]-4){
  y2 = y2 + 'X';  
 }xRom.push(y2);
}else{
  y2 = 'XC';
  xRom.push(y2);
}

if(x[3] == 0){
 xRom.push('');
}else if(x[3] > 0 && x[3] < 4){
 while(y3.length < x[3]){
  y3 = y3 + 'I';  
 }xRom.push(y3);
}else if(x[3] == 4){
  y3 = 'IV';
  xRom.push(y3);
}else if(x[3] == 5){
  y3 = 'V';
  xRom.push(y3);
}else if(x[3] > 5 && x[3] < 9){
  y3 = 'V';
 while(y3.length < x[3]-4){
  y3 = y3 + 'I';  
 }xRom.push(y3);
}else{
  y3 = 'IX';
  xRom.push(y3);
}

return xRom[0] + xRom[1] + xRom[2] + xRom[3];

}
 
function roman(x){
let xhsl = [];

 if(x == 1000){
  x1 = x/1000;
  xhsl = [1, 0, 0, 0];
 }else if(x>= 100 && x<1000){
  xhsl = [0];
  xhsl.push(Math.floor(x/100));
  xhsl.push(Math.floor((x%100)/10));
  xhsl.push((x%100)%10);
 }else if(x>=10 && x<100){
  xhsl = [0, 0];
  xhsl.push(Math.floor(x/10));
  xhsl.push(x%10);
 }else{
  xhsl = [0, 0, 0]
  xhsl.push(x);
 }
 
 return romVal(xhsl);
}

* https://github.com/dwi-handoyo/basic-javascript/blob/main/arabicToRomanNumbers1000.js

57. Project Euler

Function "sumMultiples" taking a natural number n and returning the sum of all multiples of 3 and of 5 that are truly less than n.

Example: All multiples of 3 and 5 less than 20 are 3, 5, 6, 9, 10, 12, 15 and 18. Their sum is 78. sumMultiples(20) should return 78.

function sumMultiples(x){
 let arr = [];
 
 for(let i=1; i<x; i++){
  if(i%3 == 0){
   arr.push(i);
  }else if(i%5 == 0){
   arr.push(i)  
  }
 }
 
 let jml = 0;
 for(let i=0; i<arr.length; i++){
  jml = jml + arr[i];
 }
 
 return jml;
}

* https://github.com/dwi-handoyo/basic-javascript/blob/main/sumMultiples35_ProjectEuler.js

58. Digit Sum of An Integer

Function "digitsum" that calculates the digit sum of an integer. The digit sum of an integer is the sum of all its digits.

Example: digitsum(192) should return 12.

function digit(x){
 if(x < 1){
  return 0; 
 }
return digit(x/10) + 1;
}

function digitsum(x){
 let n = digit(x);
 let arr = [];
 let hasil = 0;
 arr.push(Math.floor(x/(Math.pow(10, n-1))));
 
 for(let i=n-1; i>0; i--){
  arr.push(Math.floor(x%Math.pow(10, i)*10/Math.pow(10, i)));
 }
 for(let i=0; i<arr.length; i++){
  hasil = hasil + arr[i];
 }
 return hasil;
}

* https://github.com/dwi-handoyo/basic-javascript/blob/main/digitSumOfInteger.js













