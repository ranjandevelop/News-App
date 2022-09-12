require('dotenv').config();
// Today date
const date = new Date()
const today = date.toISOString().split('T')[0]
console.log(today)
const api_key = process.env.API_KEY;

const url = () => {
    return `https://newsapi.org/v2/top-headlines?country=in&from=${today}&sortBy=publishedAt&apiKey=${api_key}`;
}

const search = (keyword) => {
    return `https://newsapi.org/v2/top-headlines?q=${keyword}&from=${today}&sortBy=publishedAt&apiKey=${api_key}`;
}

module.exports = {
    url,
    search
}