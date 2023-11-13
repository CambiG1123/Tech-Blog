const express = require('express')
const app = express()
const expbhs = require('express-handlebars')
const hbs = expbhs.create({})

app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')
app.set('views', './views')

app.get('/', (req,res) =>{
    res.render('main')
})

app.listen(8080, ()=> {
    console.log('Server is starting at port', 8080)
})