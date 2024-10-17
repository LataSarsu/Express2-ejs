import express from 'express';

const app = express();

// Config ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/',(req, res) => {
    res.render('index', {
        title: 'My Website',
        message: 'Hello from ejs',
        people: ['John', 'Jane', 'Jack']
    });   

});

app.listen(8000, () => console.log('Server started'));
