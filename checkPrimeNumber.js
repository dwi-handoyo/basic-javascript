// Check if a give number is a prime number

function isPrime(x){ 
 let number = 0; if(x == 1){ 
  return false; }else{ 
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

console.log(isPrime(56)); // result: false
console.log(isPrime(11)); // result: true
