const calc = (a, b) =>
    console.log('-----------------------');
if (typeof a === 'number' && typeof b === 'number') {
    console.log('Sum of your numbers: ' + (a + b));

    console.log('Substraction of your numbers: ' + (a - b));

    console.log('Multiplication of your numbers: ' + (a * b));

    if (b !== 0) {
        console.log('Division of your numbers: ' + (a / b));
    }

    else {
        console.log('You did not just urge me to divide by zero, did you?');
    }
}

else {
    console.log('You did not enter correct numbers. Try again!')
}

const firstNumber = Number(prompt('Give me one number:'));
const secondNumber = Number(prompt('Give me another number:'));

calc(firstNumber, secondNumber);