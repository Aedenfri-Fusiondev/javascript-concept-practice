const button = document.getElementById("searchBtn");

button.addEventListener("click", () => fetchApi());

async function fetchApi() {
  const users = document.getElementById("search");
  const box = document.getElementById("container");
  const output = document.getElementById("output");
  const userInput = users.value.trim(); 

  output.innerHTML = ""
 
  if(!userInput){
  output.innerHTML = `<p style="color:red"> Kindly enter a name to search </p>`;
  return;
  }

  output.innerHTML = `<p style="color: blue; font-weight: bold;">Loading user profiles...</p>`;

  try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?name=${userInput}`);

    if(!response.ok){
      throw new Error(`Status: ${response.status}`)
    }

    const data = await response.json()
    

  if(data.length > 0){
      
        output.innerHTML = data.map(user => `
        <p><strong>Name: </strong> ${user.name}</p>
        <p><strong>Email: </strong>${user.email}</p>
        <p><strong>UserName: </strong>${user.username}</p>`
      ).join("")
    }
    else{
      output.innerHTML = `<p style="color:red">No user found</p>`
    }

}

  catch(error){
    output.innerHTML = `<p> Somethhing went wrong , ${error} </p>`
  }

  users.value =""
  
}
