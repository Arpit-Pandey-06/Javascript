// In js Number using 64-bit Floating number system which defined by ieee 754 floating representation standards 

let x = 12 
let y = new Number (12) // this object creation which is number
let z = new Number (12) // another object

console.log((x==y));//true
console.log((x===y));//false
console.log((z===y));//false object equlation every time gives false because of different reference in memory
console.log((z==y));//false object equlation every time gives false  because of different reference in memory

let a = 1233
a = a.toString()
console.log(typeof(a));


let b = 23477
b= b.toExponential(5)
console.log(b);//2.34770e+4 (4 signigy that we 10 pow 4=10000 which is 2.34770*10000= 23477 autual value)

let c = 23
c=c.toFixed(2) // two decimal value needed or depend on situation
console.log(c);//23.00 

console.log(2.226+2.23);// gives misinterpreted value

let v1 = 2.226
let v2 = 2.23
let total = Math.round((v1+v2)*1000)/1000
console.log(total);



