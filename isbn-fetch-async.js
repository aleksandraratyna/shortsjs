const isbn = prompt('Please give me valid ISBN number:');
//If you cannot think of any, try it with 978-83-803-2146-5 ;p
(async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    const data = await response.json();
    console.log(`This book \"${data.items[0].volumeInfo.title}\" was written by ${data.items[0].volumeInfo.authors}`);
})();