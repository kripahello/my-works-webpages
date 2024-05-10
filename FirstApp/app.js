// const playersDetails={
//     Player1:"1000hp",
//     Player2:"1000hp"
// }

// Object.keys(playersDetails).forEach(key=> {playersHtml()})

//    const playersHtml=()=>{ 
// <section>
//  <div class="players-intro">
//    <h2>${key}</h2>
//    <h4 id="hpPlayer1">${playersDetails[key]}</h4>
//  </div>

//  <div class="life-denotation">
  
//     <div id="lifeWidthOfPlayer${(key==Player1)?1:2}">
     
//     </div>
    
// </div>
// </section>
//     };
// document.querySelector(".player-discription").innerHTML=playersHtml;
// // code from here
   

   const attackBlock=()=>{
    document.getElementById("attack").style.display="block";
   }

   const replayBlock=()=>{
    document.getElementById("replay").style.display="block";
}

const playBlock=()=>{
    document.getElementById("play").style.display="none";
}

const statsBlock=()=>{
    document.getElementById("stats").style.display="block";
}

const play=()=>{
    attackBlock();
    playBlock();
    replayBlock();
    statsBlock();
}

const lifeRemaining=()=>{
   
   const styles =getComputedStyle(document.getElementById('lifeWidthOfPlayer1'));
   const styles2 =getComputedStyle(document.getElementById('lifeWidthOfPlayer2'));
   const updatedWidth=styles.getPropertyValue('width');
   const updatedWidth2=styles2.getPropertyValue('width');
   let randomNumberPlayer1=Math.random()*(50-10+1);
   let widthOfFirstPlayer=parseFloat(updatedWidth)-randomNumberPlayer1;
   let randomNumberPlayer2=Math.random()*(50-10+1);
   let widthOfSecondPlayer=parseFloat(updatedWidth2)-randomNumberPlayer2;
   let hpValuePlayer1=parseFloat(document.querySelector("#hpPlayer1").innerHTML)-randomNumberPlayer1*2;
   let hpValuePlayer2=parseFloat(document.querySelector("#hpPlayer2").innerHTML)-randomNumberPlayer2*2;
   widthOfFirstPlayer=Math.floor(widthOfFirstPlayer);
   widthOfSecondPlayer=Math.floor(widthOfSecondPlayer);
   countPlayer(widthOfFirstPlayer, widthOfSecondPlayer);
   hpValuePlayer1=parseInt(hpValuePlayer1);
   hpValuePlayer2=parseInt(hpValuePlayer2);
    document.getElementById("lifeWidthOfPlayer1").style.width=`${widthOfFirstPlayer}px`
    document.getElementById("lifeWidthOfPlayer2").style.width=`${widthOfSecondPlayer}px`
    document.querySelector("#hpPlayer1").innerHTML=`${hpValuePlayer1}hp`;
    document.querySelector("#hpPlayer2").innerHTML=`${hpValuePlayer2}hp`;
    
     const attckColorRedPlayer1=()=>{
        document.getElementById("lifeWidthOfPlayer1").style.backgroundColor="red";
     }
       
     const attckColorRedPlayer2=()=>{
        document.getElementById("lifeWidthOfPlayer1").style.backgroundColor="red";
     }
        

    if(widthOfFirstPlayer<=20) {
        attckColorRedPlayer1();
    }

    if(widthOfSecondPlayer<=20){
        attckColorRedPlayer2()
    }

    if(widthOfFirstPlayer<=9) {
        document.getElementById("attack").innerHTML="YOU LOST";
        document.querySelector("h1:first-child").innerHTML="LOOSER !!!!!!!";
        document.querySelector(".pictures").style.display="block";
        document.querySelector("h1:first-child").style.color="yellow";
        document.querySelector("#hpPlayer1").innerHTML=`0hp`;
        document.getElementById("lifeWidthOfPlayer1").style.backgroundColor="red";
        return;

    }
    else if(widthOfSecondPlayer<=9){
        document.getElementById("attack").innerHTML="YOU WON";
        document.querySelector("h1:first-child").innerHTML="WINNER !!!!!!!";
        document.querySelector(".pictures").style.display="block"
        document.querySelector("h1:first-child").style.color="yellow";
        document.querySelector("#hpPlayer2").innerHTML=`0hp`;
        document.getElementById("lifeWidthOfPlayer2").style.backgroundColor="red";
    
    }

}

const replay=()=>{
    document.getElementById("lifeWidthOfPlayer1").style.width="18rem";
    document.querySelector("#hpPlayer1").innerHTML=`1000hp`;
    document.querySelector("#hpPlayer2").innerHTML=`1000hp`;
    document.getElementById("lifeWidthOfPlayer1").style.backgroundColor="chartreuse";
    document.getElementById("attack").innerHTML=varAttack;
    document.querySelector("h1:first-child").innerHTML=varHeading;
    document.querySelector("h1:first-child").style.color="black";
    document.querySelector('.pictures').style.display="none";
    countPlayer(0,0)
    {
        countOfPlayer1=0
        countOfPLayer2=0
    };
// life for player2
    document.getElementById("lifeWidthOfPlayer2").style.width="18rem";
    document.getElementById("lifeWidthOfPlayer2").style.backgroundColor="chartreuse";
}








// statistics4
let countOfPlayer1=0;
    let countOfPLayer2=0;

const countPlayer=(widthOfFirstPlayer,widthOfSecondPlayer) =>{
   countOfPlayer1+=widthOfSecondPlayer;
   countOfPLayer2+=widthOfFirstPlayer;
   document.querySelector("#stats>div>div:first-child small").innerHTML=countOfPlayer1;
   document.querySelector("#stats>div>div:last-child small").innerHTML=countOfPLayer2;
}

