class Country {
    constructor(countryName, ...args) {
        this.countryName = countryName;
        this.medals = args;
    }

    addTakenPlace(takenPlace) {
        this.medals.push(takenPlace);
    }

    isGolden() {
        this.medals.forEach(place => {
            if (place === 1) {
                console.log('Brawka');
            }
            else {
                console.log(`${this.countryName} nic sie nie stało`);
            }
        })
    }
}

const poland = new Country('Polska', 1, 1, 2, 1, 3, 1, 1, 2);
const france = new Country('Francja', 1, 2, 2, 3, 3, 1);
poland.addTakenPlace(1);
poland.addTakenPlace(3);
console.log(poland.medals);
poland.isGolden();
france.addTakenPlace(1);
france.addTakenPlace(1);
console.log(france.medals);
france.isGolden();