const express = require('express');
const routes = express.Router();
const axios = require('axios');
const api = require('./api');
const URL = api.url();

routes.get('/', async (req, res) => {
    try {
        const news = await axios.get(URL);
        const articles = news.data.articles;
        // console.log(articles)
        res.render('index', {
            title: 'HOME',
            articles
        });
    } catch (error) {
        console.log(error);
    }
});


// Export routes
module.exports = routes;