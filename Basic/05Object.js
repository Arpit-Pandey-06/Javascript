/* 
Most imported topic in js is Objects it use every where in js mostly

It store things in form of key:value pair
key must be string value counld be any dataTypes
*/
const Person ={
    name:"Arpit",
    age:20,
    study:"Gradution"
}

/* accesing the value :

1. Mostly used dot notation objectName.property
2. Using array bracket objectName.['property']
3.Using expression mostly used for when property store in varible  : variable = "propertyName" , objectName[variable]

*/

console.log(Person.age);
console.log(Person['study']);
let a = "name"
console.log(Person[a]);

// Inserting , deleting and updating property and value

//inserting new property
Person.job="no"
console.log(Person);

//Updating value
Person.age=21
console.log(Person);

//delete the property
delete Person.job
console.log(Person);

//method in object

const scoreCard = {
    math:89,
    cn:90,
    dsa:92,
    java:90,
    percentage:function (){
        let sum = 0;
        let count = 0
        for(key in this){
            if(typeof this[key]==='number'){
                sum+=this[key]
                count++
            }
        }
        return ((sum*100)/(count*100))
    }
}
let per = scoreCard.percentage()
console.log(`percentage ${per}%`);




