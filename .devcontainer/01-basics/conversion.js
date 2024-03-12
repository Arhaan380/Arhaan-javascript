let a = null
console.log(typeof(a));
let valueOf = Number(a);
console.log(valueOf);
console.log(typeof valueOf);
// null is an object type but after conversion in Number it'll become NaN 
// but it'll return Number if we ask about 

/* same logic goes for undefined as it'll return  undefined but after 
converting in number it'll return NaN and in typeof it'll return number */

let b = undefined
console.log(typeof(b));
let value = Number(b);
console.log(value);
console.log(typeof (value));