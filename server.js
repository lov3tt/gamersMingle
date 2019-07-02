// require('dotenv').config()
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const env = require('dotenv')
const exphbs = require('express-handlebars')
const path = require("path")

var app = express()

// access static content from "public directory"

// app.use(express.static(path.join(__dirname, '/public'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'static')));
// app.use(express.static(path.join(__dirname,"/public")));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})) // session secret
 
app.use(passport.initialize())
 
app.use(passport.session()) // persistent login sessions


 //For Handlebars
 app.engine('hbs', exphbs({
    defaultLayout: "main",
    extname: '.hbs'
 }))

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))
console.log(__dirname)


//For Handlebars
// app.set('views', './app/views')
// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }))
// app.set('view engine', '.hbs')


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}


//Models
var models = require("./models")


//Routes
var authRoute = require('./routes/auth.js')(app, passport);
var newPostApi = require("./routes/newPost-api-route")(app);


//load passport strategies
require('./config/passport/passport.js')(passport, models.user)
 

//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
})


app.listen(8080, function (err) {

    if (!err) {
        console.log("Site is live")
    }
    else console.log(err)

});

module.exports = app;