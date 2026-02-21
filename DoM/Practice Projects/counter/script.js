let val = document.getElementById('value')
const increament = document.getElementById('add')
const decreament = document.getElementById('min')
const reset = document.getElementById('reset')
const save = document.getElementById('save')
const load = document.getElementById('load')

let counter = 0

window.addEventListener("load",function(){
    val.innerHTML= counter
    increament.addEventListener("click",function(e){
        counter+=1
        val.innerHTML=counter
    })
    decreament.addEventListener("click",function(){
        counter-=1
        val.innerHTML=counter
    })
    reset.addEventListener("click",function(){
        counter=0
        val.innerHTML=counter
    })
    save.addEventListener("click",function(){
        console.log(counter);
        
        localStorage.setItem("savedValue",counter)
    })
    load.addEventListener("click",function(){
        let loaded = localStorage.getItem("savedValue")
        val.innerHTML=loaded
    })
})