const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(require('./routes/fetchData'));

app.get('/',(req,res) => {

    res.end("Hello there");
});

app.listen(port,(req,res) => {

    console.log(`App is running at ${port}`);
});