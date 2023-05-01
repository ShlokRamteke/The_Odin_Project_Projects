const compArray= ["Rock", "Paper", "Scissor"]

function getComputerChoice(Arr) {
    return Arr[Math.floor(Math.random()*Arr.length)]
}
console.log(getComputerChoice(compArray))
const playerSelection =prompt("Select from: 'Rock', 'Paper', 'Scissor'")
console.log(playerSelection)
function plyGround(playerSelection, getComputerChoice){
    

}