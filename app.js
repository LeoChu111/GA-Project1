
let dice1 = Math.floor(Math.random() * 6) + 1
let dice2 = Math.floor(Math.random() * 6) + 1
let rollCount = 0
console.log(dice1,dice2)

function roll() {
    rollCount += 1
}
// win condition
//1. passline ratio 1
function passline () {
    if ((dice1 + dice2) === 7 && rollCount === 1|| (dice1 + dice2) === 11 && rollCount === 1) {
        console.log('you win');
    } else if ((dice1 + dice2) === 2 || (dice1 + dice2) === 3 || (dice1 + dice2) === 12) {
        console.log('you lose')
    } else {
        //assign point to user's point
    }
}


