console.log('JS OK!!!');

// even or odd
let oddOrEven = '';

while (oddOrEven !== 'odd' && oddOrEven !== 'even') { // per ciclare deve essere true
    oddOrEven = prompt('Choose from odd or even');
    if (oddOrEven !== undefined) {
        oddOrEven = oddOrEven.toLowerCase();
    }
    console.log(oddOrEven);
}

// type a number between 1 to 5
let number = 0;

while (isNaN(number) || number < 1 || number > 5) {
    number = parseInt(prompt('Type a number between 1 to 5'))
    console.log(number);
}

// random number
const pcNumber = getRandomNumber(1, 5);
console.log(pcNumber);

// add the 2 numbers
const total = number + pcNumber;
console.log(total);

// check odd or even
const checkOddOrEven = isOddOrEven(total) ? 'even' : 'odd';
console.log(checkOddOrEven);

// who win
if (oddOrEven === checkOddOrEven) {
    console.log(oddOrEven, total, 'You Win!!');
} else {
    console.log(oddOrEven, total, 'You Lose!!');
}

// function random number
function getRandomNumber(min, max) {
    const rangeNumber = max - min + 1;

    const randomNumber = Math.floor(Math.random() * rangeNumber) + min;

    return randomNumber;
}

// function is number even?
function isOddOrEven(checkNumberEven) {
    return (checkNumberEven % 2 === 0);
}