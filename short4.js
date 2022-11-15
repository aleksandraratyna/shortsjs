const yourNumber = Number(prompt('Give me any number you like:'));

function even(a) {
    return a;
}

function odd(b) {
    return b * 2;
}

function checkNumber(x) {
    console.log('-----------------------');
    if (x % 2 === 0) {
        console.log(even(x));
        return even(x);
    }

    else if (x % 2 !== 0) {
        console.log(odd(x));
        return odd(x);
    }

    else {
        console.log('You did not enter correct numbers. Try again!')
    }
}


checkNumber(yourNumber);