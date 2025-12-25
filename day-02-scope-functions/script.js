let text = document.getElementById("txt");
let result = document.getElementById("show");
const button = document.getElementById("btn");


function change(name){
       if(name.trim() ===""){
         result.textContent = "Kindly fill the required field";
         result.style.color="red";
       }
       else{
       result.textContent = " Hello " + name;
       result.style.color="black";
       }
       
} 

button.addEventListener("click",function(){
   let input= text.value ;
    change(input);
});