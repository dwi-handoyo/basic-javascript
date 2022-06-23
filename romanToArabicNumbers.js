// Convert roman numeral into arabic

function arabic(x){ 
 let arr = []; 
 for(let i=0; i<x.length; i++){ 
  if(x[i] === 'I'){ 
   arr.push(1); }else if(x[i] === 'V'){ 
    arr.push(5); }else if(x[i] === 'X'){ 
     arr.push(10); }else if(x[i] === 'L'){ 
      arr.push(50); }else if(x[i] === 'C'){ 
       arr.push(100); }else if(x[i] === 'D'){ 
        arr.push(500); }else{ 
        arr.push(1000); 
        } 
 } 

 let arrSort = []; 
  for(let i=0; i<arr.length-1; i++){ 
   if(arr[i]>=arr[i+1]){ 
    arrSort.push(arr[i]) 
   }else{ 
    arrSort.push(-arr[i]) 
   } 
 } 
 arrSort.push(arr[arr.length-1]); 
 let jumlah = 0; 
 for(let i = 0; i<arrSort.length; i++){ 
  jumlah = jumlah + arrSort[i]; 
 }

return jumlah; 
}

console.log(arabic('MCLVI'));     // result: 1156
console.log(arabic('CCXLIV'));    // result: 244
console.log(arabic('DCLXXVIII')); // result: 678
