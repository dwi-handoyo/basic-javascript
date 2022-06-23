// GCD (Great Common Divisor ) / Faktor Persekutuan Terbesar

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

 let fpb = [];
 for(let i=0; i<xArr.length; i++){ 
  for(let j=0; j<yArr.length; j++){ 
   if (xArr[i] == yArr[j]){ 
    fpb.push(xArr[i]); 
   } 
  } 
 }
 return fpb[fpb.length-1]; 
}

console.log(gcd(35, 14)); //result: 7
console.log(gcd(24, 36)); //result: 12
