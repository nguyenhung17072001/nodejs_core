const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

app.use(morgan('combined'))
//console.log('__dirname: ', __dirname)
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//Template engine
app.engine('hbs', engine({
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'));
//console.log('PATH: ', path.join(__dirname, 'resources/views'))


app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});

app.get('/search', (req, res) => {
  res.render('search');
});
app.post('/search', (req, res) => {
  console.log('req.body: ', req.body)
  res.send('')
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})