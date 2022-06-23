// The digit sum of an integer is the sum of all its digits. For example, digitsum(192) is 12.

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

console.log(digitsum(572));
console.log(digitsum(39));
console.log(digitsum(793));
console.log(digitsum(8734));
