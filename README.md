# basic-javascript
Compilation of simple JS code

1. A function shortcut that takes two strings and returns the initial letters of the strings

function shortcut(x, y){
 return x.charAt(0) + y.charAt(0);
}

2. A function which returns the first character that is not a space when a string is passed.

function firstChar(x){
 let y = x.trim();
 return y.charAt(0);
 }
 
 3. A function that taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.
 
 function indexOfIgnoreCase(x, y){
 let x1 = x.toLowerCase();
 let y1 = y.toLowerCase();
 let n = x1.indexOf(y1);
 return n;
}




