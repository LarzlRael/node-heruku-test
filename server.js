const express = require('express')
const app = express();
const path = require('path');
const exphbs = require('express-handlebars');

//modificando el puerto
const port = process.env.PORT || 3000




app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {
        name: 'juancito'
    })
})
app.get('/home', (req, res) => {
    res.render('home')
})
//rutas estaticas
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('escuando peticion en el puerto ' + port)
});