const compArray= ["rock", "paper", "scissor"];
let roundWinner='';
let computerScore='';
let playerScore='';


function playRround(playerSelection, computerSelection){
    
    if (computerSelection===playerSelection){
        roundWinner='tie'
    }
    if (
        (playerSelection==='rock' && computerSelection==='scissor') ||
        (playerSelection==='scissor' && computerSelection==='paper') ||
        (playerSelection==='paper' && computerSelection==='rock')
    ){
        playerScore++
        roundWinner='player'
    }
    if (
        (playerSelection==='scissor' && computerSelection==='rock') ||
        (playerSelection==='paper' && computerSelection==='scissor') ||
        (playerSelection==='rock' && computerSelection==='paper')
    ){
        computerScore++
        roundWinner='computer'
    }

    updateScoreMessage(roundWinner, playerSelection, computerSelection)

}

function getComputerChoice(Arr) {
    return Arr[Math.floor(Math.random()*Arr.length)];
}

function isGameOver(){
    return playerScore===5 || computerScore===5
}

//UI

const scoreInfo= document.getElementById('scoreInfo')
const scoreMessage= document.getElementById('scoreMessage')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')

rockBtn.addEventListener('click',()=> handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorsBtn.addEventListener('click', () => handleClick('scissor'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelection){
    if (isGameOver()){
        openEndgameModal()
        return
    }

    const computerSelection = getComputerChoice()
    playRround(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()

    if (isGameOver()){
        openEndgameModal()
        setFinalMessage()
    }
}

function updateChoices(playerSelection, computerSelection){
    switch (playerSelection){
        case 'rock':
            playerSign.textContent='✊'
            break
        case 'paper':
            playerSign.textContent = '✋'
            break
        case 'scissor':
            playerSign.textContent = '✌'
            break
    }

    switch (computerSelection) {
        case 'rock':
          computerSign.textContent = '✊'
          break
        case 'paper':
          computerSign.textContent = '✋'
          break
        case 'scissor':
          computerSign.textContent = '✌'
          break
    }
}

function updateScore(){
    if (roundWinner==='tie'){
        scoreInfo.textContent="It is a Tie"
    } else if (roundWinner==='player'){
        scoreInfo.textContent="Player Wins"
    }else if (roundWinner==='computer'){
        scoreInfo.textContent='Computer Wins'
    }
    playerScorePara.textContent='Player: ${playerScore}'
    computerScorePara.textContent='Computer: ${computerScore}'
}

function updateScoreMessage(winner, playerSelection, computerSelection){
    if (winner ==='player'){
        scoreMessage.textContent='${capitalizeFirstLetter(playerSelecion)} beats ${computerSelection}'
        return
    }
    if (winner ==='computer'){
        scoreMessage.textContent='${capitalizeFirstLetter(playerSelecion)} is beaten by ${computerSelection}'
        return
    }
    scoreMessage.textContent='${capitalizeFirstLetter(playerSelection)} ties with ${computerSelection.toLowerCase()}'
    return
}

function capitalizeFirstLetter(string){
    return string.charAt(0).toUpperCase() +string.slice(1)
}

function openEndgameModal(){
    endgameModal.classList.add('active')
    overlay.classList.add('active')
}

function closeEndgameModal(){
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}

function setFinalMessage(){
    return playerScore>computerScore 
    ? (endgameMsg.textContent = "Player Won")
    : (endgameMsg.textContent="Player Lost")
}

function restartGame(){
    playerScore=0
    computerScore=0
    scoreInfo.textContent='Select your choice'
    scoreMessage.textContent="First to win 5 round, wins the game"
    playerScorePara.textContent='Player : 0'
    computerScorePara='Computer :0'
    playerSign.textContent='?'
    computerSign.textContent='?'
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
}