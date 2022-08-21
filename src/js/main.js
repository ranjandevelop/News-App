import {
    api
} from "./api.js";

const api_key = api();

// Today date
const date = new Date()
const today = date.toISOString().split('T')[0]
console.log(today)


// fetch trending news
function trendingNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&from=${today}&sortBy=publishedAt&apiKey=${api_key}`;

    fetchData(url)
}

// fetch news by keyword
function byKeyword(keyword) {
    const url = `https://newsapi.org/v2/top-headlines?q=${keyword}&from=${today}&sortBy=publishedAt&apiKey=${api_key}`

    fetchData(url)
}

// trendingNews()


// set data to DOM
const newsFeed = document.querySelector('#newsFeed');

function setDataToDOM(articles) {
    const div = document.createElement('div');
    div.classList.add('newsFeedContainer');
    newsFeed.appendChild(div);
    articles.forEach(article => {
        console.table(article)
        const card = document.createElement('div')
        card.classList.add('card', 'p-1', 'm-1');
        card.style.width = '17rem';
        card.innerHTML = `
                <img src="${article.urlToImage}" alt="" class="card-img-top">
                <div class="card-body">
                    <h5 class=" card-title">${article.title}</h5>
                    <a href="${article.url}" target="_blank" class="btn btn-primary">Full Article</a>
                </div>
        `;
        div.appendChild(card)
    });
}


// fetch teh data using given url 
function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => setDataToDOM(data["articles"]))
        .catch(err => console.log(err))
}

// Diplay Trending News
trendingNews()

// event
const search = document.querySelector('#search');
search.addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.querySelector('#inputKeyword').value;
    document.querySelector('#newsFeed').innerHTML = '';
    byKeyword(input)
    console.log(input)
    // console.log(e)
    reset()
})
// Reset value
function reset() {
    document.querySelector('#inputKeyword').value = '';
}
// byKeyword('google')