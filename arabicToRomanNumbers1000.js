// Convert Arabic numbers (upto 1000) into Roman numerals

function romVal(x){ 
 let xRom = []; 
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
   }
   xRom.push(y1); 
   }else if(x[1] == 4){ 
    y1 = 'CD'; xRom.push(y1); 
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
   xhsl = [0, 0, 0]; 
   xhsl.push(x); 
  }
return romVal(xhsl); 
}

console.log(roman(241));  // result: "CCXLI"
console.log(roman(561));  // result: "DLXI"
console.log(roman(938));  // result: "CMXXXVIII"
console.log(roman(1000)); // result: "M"
