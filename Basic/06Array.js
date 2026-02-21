/* array creation by two way:
1. by using literal:
2. By using Array constructor

*/

let arr = [1,2,3,4,5] //litral method
let arr1 = new Array(2,2,2,23,1,)
console.log(`array 1 by litral ${arr}. Array 2 by using constructor ${arr1} type of both array is :`);
console.log(typeof arr + " and "+typeof arr1);

//Array methods 

const len = arr.length
console.log("length of array "+len);

//at for get position of perfect position of array
let pos = arr.at(2)
console.log("Pos at 3 "+pos);

//toString method 
let myList = arr.toString()
console.log(`String of array ${myList} typye of my list ${typeof myList}`);

//pop and push 
let popedItem = arr.pop()
let pushEdItem = arr.push(9) // it return the new length of array after push

console.log(`pop item is that ${popedItem} and new length after push ${pushEdItem} array ${arr}`);

//shift and unshift
let shiftItem = arr.shift() // remove from beg
let LenghtUnshift = arr.unshift(10,10,88) //

// splice and slice 
// splice method is to add item and remove item array anwhere easily (a1,a2,a3)
// a1= how many item should add
//a2= how many item should be removed
// a3= items.. which is going to add or replace existing one 


let spliceItem = arr.splice(3,2,24,22)
console.log(`after splice array ${arr}. and what is return ${spliceItem}`);

//slice
let sliceIetem = arr.slice(2,arr.length) // it does'nt change original array
console.log(`after slice array ${arr} and return sliceIetem ${sliceIetem}`);


// array iterations

//foreach

arr.forEach((val,index)=>{
    console.log("Array value at index "+(index+1)+" "+val);
})

//map it return the new array after performing operation on every element of array

let arrnew = arr.map((val)=>{
    //increament every by 2
    return val = val+2
})
 console.log("Array value at index "+arrnew);


// Filter it check every element for specific condition
let filerarry = arr.filter((val)=>{
 return (val>18)
}) 

console.log("filter array "+filerarry);

//Reduce it work every element and it also make rocrd of previous return value

let reduceArray = arr.reduce(myfunction,100)

function myfunction(total,val){
return total + val
}

console.log(reduceArray);

//some it return true or false

let somecheck = arr.some((value)=>{
    return(value==4)
})

console.log(somecheck);

 q







