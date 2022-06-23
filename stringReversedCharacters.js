// Reversed characters of a given string

function reverse(x){ 
 if( x === ''){ 
  return '' 
  } 
  return reverse(x.substr(1)) + x.charAt(0); 
}

console.log(reverse('good'));   // result: 'doog'
console.log(reverse('batman')); // result: 'namtab'
