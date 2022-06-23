//XOR logical gate

function xor(x, y){ 
  let z = (x && !y) || (!x && y); 
  return `The result of ${x} xor ${y} is ${z}`}

console.log(xor(false, false)); //false
console.log(xor(true, false));  //true
console.log(xor(false, true));  //true
console.log(xor(true, true));   //false
