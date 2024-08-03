if(process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session  = require('express-session') ;
const flash = require('connect-flash') ;
const passport = require('passport');
const LocalStrategy = require('passport-local') ;
const User = require('./models/user') ;
const tcas = require('./routes/tcas');
const users = require('./routes/users');

const MongoStore = require('connect-mongo') ;
//const MongoDBstore = require('connect-mongo')(session);

const dbUrl = process.env.DB_URL ;
//const dbUrl = 'mongodb://localhost:27017/mortgage-planning' ;
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express() ;

app.engine('ejs', ejsMate) ;
app.set('view engine', 'ejs') ;
app.set('views', path.join(__dirname, 'views')) ;

app.use(express.urlencoded({ extended: true })) ;
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public'))) ;

const secret = process.env.SECRET || 'backup'
const store = MongoStore.create({
    mongoUrl: dbUrl,
    touchAfter: 24 * 60 * 60,
    secret
});
store.on("error", function (e) {
    console.log("session store error", e)
});

const sessionConfig = {
    store, //we should now be using mongo to store our information 
    name: 'sessName', //we dont want to use default name 
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        //secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, //miliseconds in a week. 
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
} ;

app.use(session(sessionConfig)) ;
app.use(flash()) ;

app.use(passport.initialize()) ;
app.use(passport.session()) ;
//asking passport to use the localStrategy that we required. Authenticate comes from passport  
passport.use(new LocalStrategy(User.authenticate())) ; 

//how are we storing users in  sessions and unstoring them 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Define a middleware in app.js so we have access to template messages on every since request. these are gloabal for every route 
app.use((req, res, next) => {
    console.log(req.query)
    res.locals.currentUser = req.user; //now all templates have access to currentUser
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next(); //make sure to proceed to next call 
}) ;


//test
app.get('/make', async (req, res) => {
    const user = new User({email: 'cw@gmail.com', username: 'cw'}) ;
    const newUser = await User.register(user, 'password') ;
    res.send(newUser) ;
}) ;

app.use('/tcas', tcas) ;
app.use('/', users) ;


app.get('/', (req, res) => {
    res.render('home')
}) ;

app.use((err, req, res, next) => {
    resizeTo.send('wrong')
}) ;


const port = process.env.PORT;
//const port = 3000
app.listen(port, ()=> {
    console.log(`serving on port ${port}`)
}) ;