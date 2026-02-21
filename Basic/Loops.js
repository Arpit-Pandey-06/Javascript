/* 
1.for 
2. while
3.do..while
4. for in - Objects
5. for of - (array,map,string,set)
6. foreach - (array)
*/

//for in loop
let obj = {
    name : "Arpit",
    roll: 50 ,
    subj : ["js","java","python"]
}
let subject = ""

for (let key in obj) {
    if(Array.isArray(obj[key]) ){
        obj[key].forEach(element => {
            subject+=element+" "  
        });
    }
    else{
        console.log(obj[key]);
    }
}
console.log(subject);


// for of loop
let arr = [1,2,3,4,5]
for(let i of arr){
    console.log(i);
    
}

// home made iterator 

function myNumber() {
    let a = 0;
    return {
        next : function(){
            a+=1
            return {value:a,done:false}
        }
    }
}
let count = myNumber()
console.log(count.next().value)
count.next().done="true"
console.log(count.next().value);
