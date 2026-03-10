
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
      let result ='';
      console.log(computer);

    if(guess===computer){
      result = 'Win 🥳'
    }
    else{
      result = 'Lose 🤪'
    }
 
    if(result==='Win 🥳'){
      score.wins += 1;
    }
    else{
      score.losses +=1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    
  alert(`Computer chose: ${computer} , Your chose :${guess}\n${result} \n Wins: ${score.wins} , Losses: ${score.losses}`);


  }