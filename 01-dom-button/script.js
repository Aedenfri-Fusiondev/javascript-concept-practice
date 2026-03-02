const text= `Hi there! , i'm Aafrin <br> Junior frontend Developer`;
const heading=document.getElementById("txt");
const box = document.getElementById("container")
const button =document.getElementById("btn");

button.addEventListener("click",function(){
    heading.innerHTML=text
    box.style.backgroundColor="azure";
    
});
