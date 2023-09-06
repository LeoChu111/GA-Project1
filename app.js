
let dice1 
let dice2 
let rollCount = 0
let userpoint = 0
let placeToBet = [4,5,6,8,9,10]
let playerBetNumber
let playerBetAmount
let depositAmount
let exchangeAmount
const rollBtn = document.querySelector('.roll')
const passlineBtn = document.querySelector('.passline')
const depositBtn = document.querySelector('.deposit')
const exchangeBtn = document.querySelector('.exchange')
let diceImage1 = document.getElementById("dice1")
let diceImage2 = document.getElementById("dice2")
let balance = document.querySelector('.balance')
let cheque = document.querySelector('.cheque')

depositBtn.addEventListener('click', handleDeposit)
exchangeBtn.addEventListener('click', handleExchange)
rollBtn.addEventListener('click', handleRoll)
passlineBtn.addEventListener('click', function(){
    rollBtn.addEventListener('click', handlePassline)
    passlineBtn.style.display = 'none';
})
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
function handleDeposit() {
    depositAmount = prompt('Please enter amount you want to deposit')
    balance.innerText = Number(depositAmount)
}
function handleExchange() {
    exchangeAmount = prompt('Please enter amount you want to exchange')
    if (balance.innerText < exchangeAmount) {
        alert(`You don't have enough balance`)
    } else if (balance.innerText >= exchangeAmount) {
        cheque.innerText = Number(exchangeAmount)
        balance.innerText = Number(balance.innerText) - exchangeAmount
    }
}
function bet() {
    playerBetNumber = prompt('Please select number you want to bet')
    if (playerBetNumber === 4 || playerBetNumber === 5 || playerBetNumber === 9 || playerBetNumber === 10) {
        playerBetAmount = prompt('Please enter how much you want to bet')
        if (playerBetAmount < 5) {
            alert('The minimum bet amount for 4,5,9,10 is 5')
        } else {
            alert(`You have bet ${playerBetAmount} on Number ${playerBetNumber}`)
        }
    }
}
// win condition
//1. passline ratio 1
function handlePassline () {
    if ((dice1 + dice2) === 7 && rollCount === 1|| (dice1 + dice2) === 11 && rollCount === 1) {
        alert('You win');
    } else if ((dice1 + dice2) === 2 && rollCount === 1|| (dice1 + dice2) === 3 && rollCount === 1|| (dice1 + dice2) === 12 && rollCount === 1)  {
        alert('You lose')
    } else if (rollCount === 1){
        //assign point to user's point
        userpoint = dice1 + dice2
        alert(`Now ${userpoint} is your bet`)
    }
    if (rollCount > 1 && (dice1 + dice2) === userpoint && (dice1 + dice2)!== 7) {
        alert('You win')
    } else if (rollCount > 1 && (dice1 + dice2) === 7) {
        alert('You lose')
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
