const randomBtn = document.querySelector('#quoteBtn');

const text  = document.querySelector('.text');
const author = document.querySelector('.author');


async function getQuotes() {

    try {
        const response = await fetch('https://api.quotable.io/random');

        const data = await response.json();
        text.innerHTML = 'Quote: ' + data.content;
        author.innerHTML = 'Author: ' +data.author;
    }
    catch(error) {
        console.log(error)
    }
}

randomBtn.addEventListener('click', getQuotes);