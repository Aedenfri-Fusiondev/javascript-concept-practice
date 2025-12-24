let result = document.getElementById("show")
const button = document.getElementById("btn")


function change(name){
       result.innerHTML = " Hello " + name;
} 

button.addEventListener("click",function(){
   let text = document.getElementById("txt").value;
    change(text);
});