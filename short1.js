const firstNumber = Number(prompt('Give me one number:'));
const secondNumber = Number(prompt('Give me another number:'));
const operator = prompt('Give me +, -, * or / to add, substract, multiply or divide the numbers:').trim();

if (operator === "+") {
    console.log('The result is: ' + (firstNumber + secondNumber));
}

else if (operator === "-") {
    console.log('The result is: ' + (firstNumber - secondNumber));
}

else if (operator === "*") {
    console.log('The result is: ' + (firstNumber * secondNumber));
}

else if (operator === "/" && secondNumber !== 0) {
    console.log('The result is: ' + (firstNumber / secondNumber));
}

else if (operator === "/" && secondNumber === 0) {
    console.log('Sorry, it is impossible to divide by 0.');
}

else {
    alert('You have not given me the correct operator. Try again!')
}