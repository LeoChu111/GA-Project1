
let dice1 
let dice2 
let rollCount = 0
let userpoint = 0
let placeToBet = [4,5,6,8,9,10]
let playerBetNumber
let playerBetAmount
let depositAmount
let exchangeAmount
let winAmount
const rollBtn = document.querySelector('.roll')
const passlineBtn = document.querySelector('#passline')
const placeBetBtn = document.querySelector('#bet')
const depositBtn = document.querySelector('.deposit')
const exchangeBtn = document.querySelector('.exchange')
const ruleBtn = document.querySelectorAll('.rule')
let diceImage1 = document.getElementById("dice1")
let diceImage2 = document.getElementById("dice2")
let balance = document.querySelector('.balance')
let cheque = document.querySelector('.cheque')
let betAmount = document.querySelector('.betamount')
let numberBet = document.querySelector('.betnumber')

depositBtn.addEventListener('click', handleDeposit)
exchangeBtn.addEventListener('click', handleExchange)
rollBtn.addEventListener('click', handleRoll)
passlineBtn.addEventListener('click', function(){
    rollBtn.addEventListener('click', handlePassline)
    disableButtons()
})
placeBetBtn.addEventListener('click', handlePlaceBet)
placeBetBtn.addEventListener('click', function(){
    rollBtn.addEventListener('click', handlePlaceBetResult)
})
function disableButtons() {
    for(let button of ruleBtn) {
        button.style.display = 'none';
    }
}
function handleRoll() {
    for (let button of ruleBtn) {
        if(button.style.display !== 'none') {
            alert('Please select rule first!')
            return;
        }
    }
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
    if (isNaN(depositAmount) === true || depositAmount === '' || Number(depositAmount) < 0){
        alert('Please enter valid number')
    } else {
        balance.innerText = Number(balance.innerText) + Number(depositAmount)
    }
}
function handleExchange() {
    exchangeAmount = prompt('Please enter amount you want to exchange')
    if (isNaN(exchangeAmount) === true || exchangeAmount === '' || Number(exchangeAmount) < 0 || Number(exchangeAmount) > Number(balance.innerText)){
        alert('Please enter valid number')
    } else if (balance.innerText < exchangeAmount) {
        alert(`You don't have enough balance`)
    } else if (balance.innerText >= exchangeAmount) {
        cheque.innerText = Number(cheque.innerText) + Number(exchangeAmount)
        balance.innerText = Number(balance.innerText) - Number(exchangeAmount)
    } 
}
function handlePlaceBet() {
    if(rollCount === 0) {
        playerBetNumber = prompt('Please select number you want to bet')
        if (isNaN(playerBetNumber) === true || playerBetNumber === '' || Number(playerBetNumber) < 0) {
            alert('Please enter valid number')
        } else if (Number(playerBetNumber) === 4 || Number(playerBetNumber) === 5 || Number(playerBetNumber) === 9 || Number(playerBetNumber) === 10) {
            playerBetAmount = prompt('Please enter how much you want to bet')
            if(isNaN(playerBetAmount) === true) {
                alert('Please enter valid number')
            } else if (Number(playerBetAmount) < 5) {
                alert('The minimum bet amount for 4,5,9,10 is 5')
            } else if(playerBetAmount <= Number(cheque.innerText)) {
                betAmount.innerText = Number(playerBetAmount)
                cheque.innerText = Number(cheque.innerText) - Number(playerBetAmount)
                numberBet.innerText = `You bet on number ${Number(playerBetNumber)}`
                alert(`You have bet ${playerBetAmount} on Number ${playerBetNumber}`)
                disableButtons()
            } else {
                alert(`You don't have enough cheques to bet!`)
            }
        } else if (Number(playerBetNumber) === 6 || Number(playerBetNumber) === 8) {
            playerBetAmount = prompt('Please enter how much you want to bet')
            if (Number(playerBetAmount) < 6) {
                alert('The minimum bet amount for 6,8 is 6')
            } else if(playerBetAmount <= Number(cheque.innerText)) {
                betAmount.innerText = Number(playerBetAmount)
                cheque.innerText = Number(cheque.innerText) - Number(playerBetAmount)
                numberBet.innerText = `You bet on number ${Number(playerBetNumber)}`
                alert(`You have bet ${playerBetAmount} on Number ${playerBetNumber}`)
                disableButtons()
            } else {
                alert(`You don't have enough cheques to bet!`)
            }
        } else {
            alert('Please select one of the following number:4,5,6,8,9,10')
        }
    } 
}
function handlePlaceBetResult() {
    if(rollCount > 1) {
        if (numberBet && (dice1 + dice2) === 4 || numberBet && (dice1 + dice2) === 10) {
            winAmount = Number(playerBetAmount) * 1.8 
            cheque.innerText = Number(cheque.innerText) + winAmount
            alert(`You win $${winAmount}!`)
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
/*console.log(handleRoll())
console.log(rollCount)
console.log(handlePassline())
console.log(userpoint)
console.log(handleRoll())
console.log(rollCount)
console.log(handlePassline())
console.log(userpoint) */
//we need the way to stop the game 
