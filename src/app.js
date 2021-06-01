const static = require('express');
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const port = process.env.PORT || 8000;

//public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../Templates/views");
const partials_path = path.join(__dirname, "../Templates/partials");

app.set('view engine', 'hbs');
app.set('views', template_path);

hbs.registerPartials(partials_path);

app.use(express.static(static_path));

console.log(__dirname);


// By this, user requests and acoording to request, response is served to the user

//routing

app.get("", (req,res) => {
    res.render('index');
});

app.get("/About", (req,res) => {
    res.render('about');
});

app.get("/Weather", (req,res) => {
    res.render('weather');
});

app.get("*", (req,res) => {
    res.render('404error',{
        errorMsg: 'Oops! Msg not found'
    })
});

app.listen(port, () => {
    console.log(`Listening to port at ${port}`);
})