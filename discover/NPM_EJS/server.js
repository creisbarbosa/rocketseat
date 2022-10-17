const express = require('express');
const app = express();
const hostname = 'localhost';
const port = 8080;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        { 
            title: "D",
            message: "esenvolver aplicações e serviços de forma fácil"
        },
        {
            title: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            title: "M",
            message: "uito fácil de usar"
        },
        {
            title: "A",
            message: "mor de método"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        }
    ]
    res.render('pages/index', {
        qualitys: items,
    });
})

app.get("/sobre", function (req, res) {
    res.render('pages/about');
})

app.listen(port, hostname, () => {
    console.log(`Server runing at http://${hostname}:${port}/`);
});