// Sum of all multiples of 3 and of 5 that are less than x.
// All multiples of 3 and 5 less than 20 are 3, 5, 6, 9, 10, 12, 15 and 18. Their sum is 78. 

function sumMultiples(x){ 
 let arr = [];
 for(let i=1; i<x; i++){ 
  if(i%3 == 0){ 
   arr.push(i); 
  }else if(i%5 == 0){ 
   arr.push(i);
  } 
 }

 let jml = 0; 
 for(let i=0; i<arr.length; i++){ 
  jml = jml + arr[i]; 
 }

 return jml; 
}

console.log(sumMultiples(20)); // result: 78
console.log(sumMultiples(34)); // result: 258
console.log(sumMultiples(15)); // result: 45
