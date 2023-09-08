
let dice1 
let dice2 
let rollCount = 0
let winAmount
let userpoint
const rollBtn = document.querySelector('.roll')
const passlineBtn = document.querySelector('#passline')
const placeBetBtn = document.querySelector('#bet')
const depositBtn = document.querySelector('.deposit')
const exchangeBtn = document.querySelector('.exchange')
const ruleBtn = document.querySelectorAll('.rule')
const restartBtn = document.querySelector('.restart')
const betBtn = document.querySelector('.betBtn')
let depositAmount = document.querySelector('.depositA')
let exchangeAmount = document.querySelector('.exchangeA')
let diceImage1 = document.getElementById("dice1")
let diceImage2 = document.getElementById("dice2")
let balance = document.querySelector('.balance')
let cheque = document.querySelector('.cheque')
let betAmount = document.querySelector('.betamount')
let numberBet = document.querySelector('.betnumber')
let playerBetNumber = document.querySelector('.betN')
let playerBetAmount = document.querySelector('.betA')
let result = document.querySelector('.result')
let textPleaseBetNumber = document.querySelector('.text')
let textPleaseBetAmount = document.querySelector('.text2')
let displayUserPoint = document.querySelector('.displayuserpoint')
let chooseText = document.querySelector('.choose')
let error = document.querySelector('#error')
let error1 = document.querySelector('#error1')
let error2 = document.querySelector('#error2')
let error3 = document.querySelector('#error3')
let error4 = document.querySelector('#error4')

depositBtn.addEventListener('click', handleDeposit)
exchangeBtn.addEventListener('click', handleExchange)
rollBtn.addEventListener('click', handleRoll)
passlineBtn.addEventListener('click', handleDisplayPasslineUI)
passlineBtn.addEventListener('click', function(){
    betBtn.addEventListener('click', handlePassline)
})
passlineBtn.addEventListener('click', function(){
    rollBtn.addEventListener('click', handlePasslineResult)
})
placeBetBtn.addEventListener('click', handleDisplayPlaceBetUI)
placeBetBtn.addEventListener('click', function(){
    betBtn.addEventListener('click',handlePlaceBet)
})
placeBetBtn.addEventListener('click', function(){
    rollBtn.addEventListener('click', handlePlaceBetResult)
})
restartBtn.addEventListener('click', handleRestart)
function disableButtons() {
    for(let button of ruleBtn) {
        button.style.display = 'none';
    }
    betBtn.style.display = 'none'
}
function handleRoll() {
    for (let button of ruleBtn) {
        if(button.style.display !== 'none') {
            error4.textContent = 'Please select rule first!'
            error4.style.color = "red"
            return;
        }
    }
    if (betBtn.style.display !== 'none') {
        error4.textContent = 'Please select rule first!'
        error4.style.color = "red"
        return;
    }
    error4.textContent = ''
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
    if (depositAmount.value === '' || Number(depositAmount.value) < 0 || Number(depositAmount.value) % 1 !== 0){
        error.textContent = 'Please enter valid number'
        error.style.color = "red"
    } else {
        balance.innerText = Number(balance.innerText) + Number(depositAmount.value)
        error.textContent = ''
        depositAmount.value = ''
    }
}
function handleExchange() {
    if (exchangeAmount.value === '' || Number(exchangeAmount.value) < 0 || Number(exchangeAmount.value) > Number(balance.innerText) || Number(exchangeAmount.value) % 1 !== 0){
        error1.textContent = 'Please enter valid number'
        error1.style.color = "red"
    } else if (Number(balance.innerText) <  Number(exchangeAmount.value)) {
        error1.textContent = `You don't have enough balance`
        error1.style.color = "red"
    } else if (Number(balance.innerText) >= Number(exchangeAmount.value)) {
        cheque.innerText = Number(cheque.innerText) + Number(exchangeAmount.value)
        balance.innerText = Number(balance.innerText) - Number(exchangeAmount.value)
        error1.textContent = ''
        exchangeAmount.value = ''
    } 
}
function handlePlaceBet() {
    if(rollCount === 0) {
        if (playerBetNumber.value === '' || Number(playerBetNumber.value) < 0 || Number(playerBetNumber.value) % 1 !== 0) {
            error2.textContent = 'Please enter valid number'
            error2.style.color = "red"
        } else if (Number(playerBetNumber.value) === 4 || Number(playerBetNumber.value) === 5 || Number(playerBetNumber.value) === 9 || Number(playerBetNumber.value) === 10) {
            error2.textContent = ''
            if(Number(playerBetAmount.value) % 1 !== 0) {
                error3.textContent = 'Please enter valid number'
                error3.style.color = "red"
            } else if (Number(playerBetAmount.value) < 5) {
                error3.textContent ='The minimum bet amount for 4,5,9,10 is 5'
                error3.style.color = "red"
            } else if(Number(playerBetAmount.value) <= Number(cheque.innerText)) {
                betAmount.innerText = Number(playerBetAmount.value)
                cheque.innerText = Number(cheque.innerText) - Number(playerBetAmount.value)
                numberBet.innerText = `You bet on number ${Number(playerBetNumber.value)}`
                error3.textContent = ''
                textPleaseBetAmount.style.display = 'none'
                playerBetAmount.style.display = 'none'
                textPleaseBetNumber.style.display = 'none'
                playerBetNumber.style.display = 'none'
                disableButtons()
            } else {
                error3.textContent =`You don't have enough cheques to bet!`
                error3.style.color = "red"
            }
        } else if (Number(playerBetNumber.value) === 6 || Number(playerBetNumber.value) === 8) {
            error2.textContent = ''
            if (Number(playerBetAmount.value) < 6) {
                error3.textContent = 'The minimum bet amount for 6,8 is 6'
                error3.style.color = "red"
            } else if(Number(playerBetAmount.value)<= Number(cheque.innerText)) {
                betAmount.innerText = Number(playerBetAmount.value)
                cheque.innerText = Number(cheque.innerText) - Number(playerBetAmount.value)
                numberBet.innerText = `You bet on number ${Number(playerBetNumber.value)}`
                error3.textContent = ''
                textPleaseBetAmount.style.display = 'none'
                playerBetAmount.style.display = 'none'
                textPleaseBetNumber.style.display = 'none'
                playerBetNumber.style.display = 'none'
                disableButtons()
            } else {
                error3.textContent =`You don't have enough cheques to bet!`
                error3.style.color = "red"
            }
        } else {
            error2.textContent = 'Please select one of the following number:4,5,6,8,9,10'
        }
    } 
}
function handlePlaceBetResult() {
    if(rollCount > 1) {
        if (Number(playerBetNumber.value) === 4 && (dice1 + dice2) === 4 || Number(playerBetNumber.value) === 10 && (dice1 + dice2) === 10) {
            winAmount = Math.floor(Number(playerBetAmount.value) * 1.8)
            cheque.innerText = Number(cheque.innerText) + winAmount
            rollBtn.style.display = 'none'
            restartBtn.style.display ='block'
            result.innerText = `$$$$ You win $${winAmount}! $$$$`
        } else if (Number(playerBetNumber.value) === 5 && (dice1 + dice2) === 5 || Number(playerBetNumber.value) === 9 && (dice1 + dice2) === 9) {
            winAmount = Math.floor(Number(playerBetAmount.value) * 1.4)
            cheque.innerText = Number(cheque.innerText) + winAmount
            rollBtn.style.display = 'none'
            restartBtn.style.display ='block'
            result.innerText = `$$$$ You win $${winAmount}! $$$$`
        } else if (Number(playerBetNumber.value) === 6 && (dice1 + dice2) === 6 || Number(playerBetNumber.value) === 8 && (dice1 + dice2) === 8) {
            winAmount = Math.floor(Number(playerBetAmount.value) * 1.17)
            cheque.innerText = Number(cheque.innerText) + winAmount
            rollBtn.style.display = 'none'
            restartBtn.style.display ='block'
            result.innerText = `$$$$ You win $${winAmount}! $$$$`
        } else if ((dice1 + dice2) === 7) {
            rollBtn.style.display = 'none'
            restartBtn.style.display ='block'
            result.innerText = `$$$$ You lose $${playerBetAmount.value}! $$$$`
        }
    }
}
function handleDisplayPasslineUI() {
    textPleaseBetAmount.style.display = 'block'
    playerBetAmount.style.display = 'inline'
    placeBetBtn.style.display = 'none'
    passlineBtn.style.display = 'none'
    betBtn.style.display = 'inline'
    chooseText.style.display = 'none'
}
function handleDisplayPlaceBetUI() {
    textPleaseBetAmount.style.display = 'block'
    textPleaseBetNumber.style.display = 'block'
    playerBetNumber.style.display = 'inline'
    playerBetAmount.style.display = 'inline'
    placeBetBtn.style.display = 'none'
    passlineBtn.style.display = 'none'
    betBtn.style.display = 'inline'
    chooseText.style.display = 'none'
}
function handlePassline() {
    if(rollCount === 0) {
        if (playerBetAmount.value === '' || Number(playerBetAmount.value) < 0 || Number(playerBetAmount.value) % 1 !== 0) {
            error3.textContent = 'Please enter valid number'
            error3.style.color = "red"
        } else if(Number(playerBetAmount.value) <= Number(cheque.innerText)) {
            betAmount.innerText = Number(playerBetAmount.value)
            cheque.innerText = Number(cheque.innerText) - Number(playerBetAmount.value)
            textPleaseBetAmount.style.display = 'none';
            playerBetAmount.style.display = 'none';
            numberBet.style.display = 'none';
            error3.textContent = ''
            disableButtons()
        } else {
            error3.textContent =`You don't have enough cheques to bet!`
            error3.style.color = "red"
        }
    }
}
function handlePasslineResult() {
    if ((dice1 + dice2) === 7 && rollCount === 1|| (dice1 + dice2) === 11 && rollCount === 1) {
        winAmount = Number(playerBetAmount.value) * 2
        cheque.innerText = Math.floor(Number(cheque.innerText) + winAmount)
        rollBtn.style.display = 'none'
        restartBtn.style.display ='block'
        result.innerText = `$$$$ You win $${winAmount}! $$$$`
    } else if ((dice1 + dice2) === 2 && rollCount === 1|| (dice1 + dice2) === 3 && rollCount === 1|| (dice1 + dice2) === 12 && rollCount === 1)  {
        rollBtn.style.display = 'none'
        restartBtn.style.display ='block'
        result.innerText = `$$$$ You lose $${playerBetAmount.value}! $$$$`
    } else if (rollCount === 1){
        displayUserPoint.innerText = `Your bet number is ${Number(dice1+dice2)} now`
        userpoint = Number(dice1+dice2)
    }
    if (rollCount > 1 && (dice1 + dice2) === Number(userpoint) && (dice1 + dice2)!== 7) {
        winAmount = Number(playerBetAmount.value) * 2
        cheque.innerText = Number(cheque.innerText) + winAmount
        rollBtn.style.display = 'none'
        restartBtn.style.display ='block'
        result.innerText = `$$$$ You win $${winAmount}! $$$$`
    } else if (rollCount > 1 && (dice1 + dice2) === 7) {
        rollBtn.style.display = 'none'
        restartBtn.style.display ='block'
        result.innerText = `$$$$ You lose $${playerBetAmount.value}! $$$$`
    }
}
function handleRestart() {
    numberBet.innerText = 'You bet on number: ?'
    betAmount.innerText = '0'
    for(let button of ruleBtn) {
        button.style.display = 'inline';
    }
    rollBtn.style.display = 'block'
    playerBetAmount.value = ''
    playerBetNumber.value = ''
    result.innerText = ''
    displayUserPoint.innerText = ''
    userpoint = 0
    error.textContent = ''
    error1.textContent = ''
    error2.textContent = ''
    error3.textContent = ''
    rollCount = 0
    rollBtn.removeEventListener('click', handlePlaceBetResult)
    rollBtn.removeEventListener('click', handlePasslineResult) 
    betBtn.removeEventListener('click', handlePassline)
    betBtn.removeEventListener('click', handlePlaceBet)
    placeBetBtn.addEventListener('click', function(){
        rollBtn.addEventListener('click', handlePlaceBetResult)
    })
    passlineBtn.addEventListener('click', function(){
        rollBtn.addEventListener('click', handlePasslineResult)
    })
    diceImage1.src = ''
    diceImage2.src = ''
    chooseText.style.display = 'block'
    textPleaseBetAmount.style.display = 'block';
    playerBetAmount.style.display = 'inline';
    numberBet.style.display = 'block';
    textPleaseBetAmount.style.display = 'none'
    playerBetAmount.style.display = 'none'
    textPleaseBetNumber.style.display = 'none'
    playerBetNumber.style.display = 'none'
    restartBtn.style.display = 'none';
    
}

