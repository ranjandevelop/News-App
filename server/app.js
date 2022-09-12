const express = require('express');
const PORT = process.env.PORT || 5000;
const app = express();

// register view engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

// Routes
app.get('/', require('../routes/news'))

// Listen to the port
app.listen(PORT, () => {
    console.log('Server is connected');
})