
let dice1 
let dice2 
let rollCount = 0
let userpoint = 0
const rollBtn = document.querySelector('.roll')
let diceImage1 = document.getElementById("dice1")
let diceImage2 = document.getElementById("dice2")

rollBtn.addEventListener('click', handleRoll)
rollBtn.addEventListener('click', handlePassline)
function handleRoll() {
    rollCount += 1
    dice1 = Math.floor(Math.random() * 6) + 1
    dice2 = Math.floor(Math.random() * 6) + 1
    console.log(dice1, dice2)
    if (dice1 === 1) {
        diceImage1.src = "https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-illustration-red-dice-games-casinos-points-d-rendering-169793588.jpg?w=768"
    } else if (dice1 === 2) {
        diceImage1.src = "https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-rendering-red-dice-games-casinos-points-d-illustration-169889418.jpg?w=768"
    } else if (dice1 === 3) {
        diceImage1.src = "https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-llustration-red-dice-games-casinos-points-d-rendering-169898140.jpg?w=768"
    } else if (dice1 === 4) {
        diceImage1.src ="https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-illustration-red-dice-games-casinos-points-d-rendering-170140095.jpg?w=768"
    } else if (dice1 === 5) {
        diceImage1.src = "https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-rendering-red-dice-games-casinos-points-d-illustration-170219644.jpg?w=768"
    } else if (dice1 === 6) {
        diceImage1.src = "https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-illustration-isolation-red-dice-games-casinos-points-d-rendering-isolation-170220936.jpg?w=768"
    }
    if (dice2 === 1) {
        diceImage2.src = "https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-illustration-red-dice-games-casinos-points-d-rendering-169793588.jpg?w=768"
    } else if (dice2 === 2) {
        diceImage2.src = "https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-rendering-red-dice-games-casinos-points-d-illustration-169889418.jpg?w=768"
    } else if (dice2 === 3) {
        diceImage2.src = "https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-llustration-red-dice-games-casinos-points-d-rendering-169898140.jpg?w=768"
    } else if (dice2 === 4) {
        diceImage2.src = "https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-illustration-red-dice-games-casinos-points-d-rendering-170140095.jpg?w=768"
    } else if (dice2 === 5) {
        diceImage2.src = "https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-rendering-red-dice-games-casinos-points-d-illustration-170219644.jpg?w=768"
    } else if (dice2 === 6) {
        diceImage2.src = "https://thumbs.dreamstime.com/z/red-dice-games-casinos-points-d-illustration-isolation-red-dice-games-casinos-points-d-rendering-isolation-170220936.jpg?w=768"
    }
}
function bet() {

}
// win condition
//1. passline ratio 1
function handlePassline () {
    if ((dice1 + dice2) === 7 && rollCount === 1|| (dice1 + dice2) === 11 && rollCount === 1) {
        console.log('you win');
    } else if ((dice1 + dice2) === 2 && rollCount === 1|| (dice1 + dice2) === 3 && rollCount === 1|| (dice1 + dice2) === 12 && rollCount === 1)  {
        console.log('you lose')
    } else if (rollCount === 1){
        //assign point to user's point
        userpoint = dice1 + dice2
    }
    if (rollCount > 1 && (dice1 + dice2) === userpoint && (dice1 + dice2)!== 7) {
        console.log('you win')
    } else if (rollCount > 1 && (dice1 + dice2) === 7) {
        console.log('you lose')
    }
}
console.log(handleRoll())
console.log(rollCount)
console.log(handlePassline())
console.log(userpoint)
console.log(handleRoll())
console.log(rollCount)
console.log(handlePassline())
console.log(userpoint)
//we need the way to stop the game 
