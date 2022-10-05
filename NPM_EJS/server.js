const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 8080;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render('pages/index');
})

app.get("/sobre", function (req, res) {
    res.render('pages/about');
})

app.listen(port, hostname, () => {
    console.log(`Server runing at http://${hostname}:${port}/`);
});