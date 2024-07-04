const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const TCA = require('./models/tca');
const methodOverride = require('method-override');
const Scenario = require('./models/scenario');

mongoose.connect('mongodb://localhost:27017/mortgage-planning', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express()

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/tcas', async (req, res) => {
    const tcas = await TCA.find({})
    res.render('tcas/index', {tcas})
});

app.get('/tcas/new', (req, res) => {
    res.render('tcas/new')
})

app.post('/tcas', async (req, res) => {     //post route to create a new TCA
    const tca = new TCA(req.body.tca);
    await tca.save();
    res.redirect(`/tcas/${tca._id}/edit`);
});

app.get('/tcas/:id', async (req, res) => {
    const tca = await TCA.findById(req.params.id)
    res.render('tcas/show', { tca });
})

app.get('/tcas/:id/edit', async (req, res) => {     //get route to show the edit page
    const tca = await TCA.findById(req.params.id)
    res.render('tcas/edit', { tca });
})

app.put('/tcas/:id', async(req, res) => {           //put route to update the TCA
    const { id } = req.params;
    const tca = await TCA.findByIdAndUpdate(id, {...req.body.tca})
    res.redirect(`/tcas/${tca._id}`)
})

app.delete('/tcas/:id', async (req,res) => {
    const { id } = req.params;
    await TCA.findByIdAndDelete(id)
    res.redirect('/tcas');
})





app.get('/tcas/:id/scenarioone', async(req, res) =>{
    const tca = await TCA.findById(req.params.id);
    res.render('tcas/scenarioone', { tca });
})

app.put('/tcas/:id/scenarioone', async(req, res) => {
    const { id } = req.params;
    const tca = await TCA.findByIdAndUpdate(id, {...req.body.tca})
    res.redirect(`/tcas/${tca._id}/scenarioone`)
})



app.listen(3000, ()=> {
    console.log('serving on port 3000')
})