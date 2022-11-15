class Calc {
    constructor(a, b) {
        this.a = a;
        this.b = b;

        if (Number.isNaN(this.a)) {
            throw new Error('First value is not a number!');
        }
        else if (Number.isNaN(this.b)) {
            throw new Error('Second value is not a number!');
        }
    };

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divide() {
        if (this.b === 0) {
            throw new Error('Division by 0? No way!');
        }
        return this.a / this.b;
    }
}

const firstNum = Number(prompt(`Let\'s do some math! Think of one number:`));
const secondNum = Number(prompt(`Now think of another number:`));

const newCalc = new Calc(firstNum, secondNum);

try {
    newCalc.add();
    console.log('OK');
} catch (error) {
    alert(`${error.message}`);
}

try {
    newCalc.subtract();
    console.log('OK');
} catch (error) {
    alert(`${error.message}`);
}

try {
    newCalc.multiply();
    console.log('OK');
} catch (error) {
    alert(`${error.message}`);
}

try {
    newCalc.divide();
    console.log('OK');
} catch (error) {
    alert(`${error.message}`);
}

console.log(newCalc.add());
console.log(newCalc.subtract());
console.log(newCalc.multiply());
console.log(newCalc.divide());