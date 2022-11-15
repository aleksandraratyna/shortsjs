// rest operator in use
const sum = (...args) => {
    let sumArgs = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            console.log('All elements must be numbers!');
            return;
        }
        sumArgs += args[i];
        console.log(sumArgs);
    }

};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));