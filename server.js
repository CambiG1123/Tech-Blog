const express = require("express");
const exphbs = require("express-handlebars");
const allRoutes = require("./controllers");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require('dotenv').config();

const app = express()

const hbs = exphbs.create({})

app.engine('handlebars', hbs.engine)
app.set('view engine','handlebars')
app.set('views', './views')

app.get('/', (req,res) =>{
    res.render('main')
})

app.listen(8080, ()=> {
    console.log('Server is starting at port', 8080)
})