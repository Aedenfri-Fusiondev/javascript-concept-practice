
// assigning var for id to easily access

let result = document.getElementById("show");
let button = document.getElementById("btn");

let quotes =[ "Turn the point into power",
  "Failure is Success in progress",
  "Change impossible to I'm possible"];

  let index=0;

button.addEventListener("click",function(){
    result.innerHTML=quotes[index]; 
      index++;

   if(index>=quotes.length){
    index=0;
  }
 
});

