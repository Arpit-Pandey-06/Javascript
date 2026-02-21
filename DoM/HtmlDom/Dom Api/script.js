const p1 = document.getElementById('me')
const classFirst = document.getElementsByClassName('demo')

console.log(p1.childNodes[1]);
console.log(classFirst);

classFirst[0].innerHTML = "First Element in class"
classFirst[1].innerHTML = "Second Element in class"
p1.childNodes[1].innerHTML = "My name is Arpit"

