
const coin = document.getElementById('coin')
  function compMove(){

      const random = Math.random();

      if(random <= 0.5){
        return 'Heads';
      }
      else {
        return 'Tails';
      }
  }

   

  function play(guess){

     const score = JSON.parse(localStorage.getItem('score')) ||{
      wins: 0,
      losses: 0
    };


     let computer = compMove();

       coin.classList.remove("flip-heads","flip-tails");

       setTimeout(()=>{
        if(computer==='Heads'){
          coin.classList.add("flip-heads")
        }
        else{
          coin.classList.add("flip-tails")
        }
       },100);

      let result ='';


    if(guess===computer){
      result = 'You Win 🥳'
    }
    else{
      result = 'You Lose 🤪'
    }
 
    if(result==='You Win 🥳'){
      score.wins += 1;
    }
    else{
      score.losses +=1;
    }


    localStorage.setItem('score',JSON.stringify(score));

  document.getElementById("result").innerText=(`Computer chose: ${computer} , Your choice :${guess}\n${result}\nWins: ${score.wins} , Losses: ${score.losses}`);

  }

 function reset(){
    localStorage.removeItem('score');
    document.getElementById("result").innerText = "Score reset successfully";
    }