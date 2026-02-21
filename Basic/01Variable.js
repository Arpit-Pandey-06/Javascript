var a = 12 // this not suitable for now because of resigning problem scope problem 
console.log(a);
{
    var a = 13
}
console.log(a); // gives 13 because it use global scope 

// From ES6 2015 introduce let and cosnt for block scope and solve reassigning problem


let x  = 12
const y = 11 
var z = 10 

{
  let  x= 20
  const y = 12
    var z =111

}

console.log(`x=:${x} and y=:${y} z=:${z} `)
