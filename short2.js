const normalText = prompt('Write something and watch it go crazy!');

for (let i = 0; i < (normalText.length); i++) {
    if (i % 2 !== 0) {
        console.log(normalText[i].toUpperCase());
    }
    else {
        console.log(normalText[i].toLowerCase());
    }
}