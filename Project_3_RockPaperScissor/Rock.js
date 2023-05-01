const compArray= ["rock", "paper", "scissor"];
let roundWinner='';
let computerScore='';
let playerScore='';
let winner='';
let round=5
winner=game(round);
console.log(winner)


function getComputerChoice(Arr) {
    return Arr[Math.floor(Math.random()*Arr.length)];
}

function playGround(){
    const input =prompt("Select from: 'Rock', 'Paper', 'Scissor'")
    var playerSelection=input.toLowerCase();
    var computerSelection = getComputerChoice(compArray);
    console.log(computerSelection);
    console.log(playerSelection);
    if (computerSelection===playerSelection){
        roundWinner='Tie'
    }
    if (
        (playerSelection==='rock' && computerSelection==='scissor') ||
        (playerSelection==='scissor' && computerSelection==='paper') ||
        (playerSelection==='paper' && computerSelection==='rock')
    ){
        roundWinner='Player'
    }
    if (
        (playerSelection==='scissor' && computerSelection==='rock') ||
        (playerSelection==='paper' && computerSelection==='scissor') ||
        (playerSelection==='rock' && computerSelection==='paper')
    ){
        roundWinner='Computer'
    }

    return roundWinner

}

function game(n){
    for ( let i=0; i<n; i++){
        roundWinner=playGround();
        if (roundWinner==='Player'){
            playerScore++
            console.log(playerScore);
        }
        if (roundWinner==='Computer'){
            computerScore++
            console.log(computerScore);
        }
    }
    if (playerScore> computerScore){
        return winner="Player"
    }
    if (playerScore< computerScore){
        return winner="Computer"
    }
    
}

