
const button = document.getElementById("btn")

button.addEventListener("click", ()=>fetchApi());

async function fetchApi(){

  const input = document.getElementById("userInput");
  const pokeName = document.getElementById("name");
  const image = document.getElementById("imgElement");
  const weight = document.getElementById("weight");
  const finderror = document.getElementById("error")
  
  pokeName.innerText = ""
  weight.innerText = ""
  image.src = ""
  finderror.innerText = ""

  try{
    const userInput = input.value;

    input.value = ""
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)

    if(!response.ok){
      throw new Error(`Pokemon not found`)
    }

    const data = await response.json()
    
    image.src = data.sprites.front_default;
    image.style.border = "2px solid black";

    pokeName.innerText = `Name : ${data.name}`;

    weight.innerText = `${userInput}'s weight is : ${data.weight}`;

  }

  catch(error){
    finderror.innerText = `Pokemon not found , Check the spelling`
  }

}



