const books = [
    {title: "Atomic Habits", available: true, genre: "Self-help", copies: 3},
    {title: "Clean Code", available: false, genre: "Programming", copies: 0},
    {title: "1984", available: true, genre: "Fiction", copies: 5},
    {title: "Deep Work", available: true, genre: "Self-help", copies: 1},
    {title: "The Hobbit", available: false, genre: "Fiction", copies: 0}
]

const userInput = document.getElementById("userInput")
const information = document.getElementById("details")

const searchBtn = document.createElement("button")
searchBtn.innerText = "Search" ;

const checkgenreBtn = document.createElement("button")
checkgenreBtn.innerText = "Check Genre";

const checkavailBtn = document.createElement("button")
checkavailBtn.innerText = "Check Availability" ;


searchBtn.addEventListener("click", ()=>{
    const input = userInput.value.trim().toLowerCase()
    userInput.value = ""

    const findBook = [...books]
    .find(book => book.title.toLowerCase() === input) 

   
      information.innerHTML = !findBook ?
        `<p style = "color: red"> ❌ Book not found </p>` :
        `<p> Title: ${findBook.title} (${findBook.genre}) </p>`  
   
})

checkgenreBtn.addEventListener("click",()=>{
    const input = userInput.value.trim().toLowerCase()
    userInput.value = ""

    const checkGenre = [...books]
    .some(book =>book.genre.toLowerCase() === input)

     information.innerHTML = !checkGenre ? `<strong>
             Genre (${input}) exists in library:
             </strong> ❌ No` : ` <strong>
              Genre (${input}) exists in library:
             </strong> ✅ Yes`

})

checkavailBtn.addEventListener("click",()=>{
    const input = userInput.value.trim().toLowerCase()
    userInput.value = ""
  
    const filterAvailGenre = [...books]
    .filter(book =>book.genre.toLowerCase() === input)

    const checkAvail = filterAvailGenre
    .every(book=>book.copies > 0)

     if(filterAvailGenre.length === 0 ){
        information.innerHTML = `<p style = 'color: red'>❌ No books found in that genre to check stock.</p>`
        return 
     }

    information.innerHTML =`
        <p>
          <strong>
            Genre checked :</strong>${input}
           <strong> <br>
              Are ALL books in this genre available?
          </strong>  
          ${checkAvail ? "✅ Yes, everything is ready" : "⚠️ No, some items are out of stock"}
         </p>`

    
})

document.body.append(searchBtn)
document.body.append(checkgenreBtn)
document.body.append(checkavailBtn)
