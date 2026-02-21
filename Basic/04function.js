/*Funtion is most topic of every programming language it makes code more readable and efficient, it makes do not write again and again for same work make it ones use it many times 

 It has many 3 parts :
 1.function declration : declaring function name , parameters and (return type in many language)
 2.funtion defination : defining the code which performing inside function
 3.funtion invoked or calling : time when calling the function and giving the arguments to funtion
 */

 function my(){
    return "hello"
 }

 let result = my

 console.log(result); // it gives [funtion : funtion_name ], to get result use ()

 console.log(result());

//Greatest of three no.

function greatest (){
    //we can get recive arguments in js with defining parameters

let larg = -Infinity;
for(let i=0;i<arguments.length;i++){
    if(arguments[i]>larg){
        larg = arguments[i]
    }
}
return larg;
}

let result1  = greatest(2,20,11,1)
console.log(result1);


// funtion declration vs function expressions 
/*
1.function declration is used hoisted that mean we can invoke them before they define they has top their scope
2.function expression is not used hoisted 
3. function expression is annonymous doest not name at time of defining but declartion function need the name
4.function declartion is for gernal purpose but function expression use in callback , eventHandler etc
*/ 

let sum = function(...agr){
let sum =0;
for(let i =0;i<agr.length;i++){
    sum+=arguments[i]
}
return sum
}

let total = sum(12,33,445,232,22,233)
 console.log(total);
 
 
 