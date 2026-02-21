// String is immutable so any method use below only return new string not modify existed one 
 let s = "hello"
 v = s.charAt(2) // here we reassigning value not modification the existed one
 console.log(s +" and "+v);


 let s1 = "   hello world.   "
 console.log(s1.length);
 s1 = s1.trim()
 console.log(`s1 ${s1.length}`);



 let s2 = "HleoosaGG"
 s2 = s2.toLowerCase(s2)
 console.log(s2);
  s2 = s2.toUpperCase(s2)
 console.log(s2);



 let s3 = "hello every one"
 let arr = s3.split(" ")
 console.log(arr);


 let s4 = "helleo me using splice"
 let sp1 = s4.slice(2,8)
 console.log(sp1);
 //negative from back
 let sp2 = s4.slice(-1,1)
 console.log(sp2);
 

 let s5='1'
 s5= s5.padStart(5,'1222')
 console.log(s5);
 s5 = s5.padEnd(10,'00000')
 console.log(s5);
 

 let com = "hello"
 let com1 = new String("hello")
 let com2 = new String("hello")

console.log( (com==com1));
console.log( (com===com1));
console.log( (com1===com2));
console.log( (com1==com2));

 
 
 