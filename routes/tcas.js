const express = require('express') ;
const router = express.Router();
const TCA = require('../models/tca');
const User = require('../models/user');
const {isLoggedIn} = require('../middleware') ;

router.get('/', async (req, res) => { //route for index page
    const tcas = await TCA.find({})
    res.render('tcas/index', {tcas})
});

router.get('/new', isLoggedIn, (req, res) => {
    res.render('tcas/new') ;
})

router.post('/', isLoggedIn, async (req, res) => {     //post route to create a new TCA
    const tca = new TCA(req.body.tca);
    tca.author = req.user._id;
    //console.log(req.user._id)
    await tca.save();
    req.flash('success', 'Successfully made a new Financing Analysis') ;
    res.redirect(`/tcas/${tca._id}/edit`);
    
});

router.get('/:id', async (req, res) => { //get route to show dislay page 
    const tca = await TCA.findById(req.params.id).populate('author') ;
    res.render('tcas/show', { tca });
})

router.get('/:id/edit', isLoggedIn, async (req, res) => {     //get route to show the edit page
    const tca = await TCA.findById(req.params.id)
    res.render('tcas/edit', { tca });
})

router.patch('/:id', isLoggedIn, async(req, res) => {           //put route to update the TCA
    const { id } = req.params;
    const tca = await TCA.findByIdAndUpdate(id, {...req.body.tca})
})


router.delete('/:id', isLoggedIn, async (req,res) => {
    const { id } = req.params;
    await TCA.findByIdAndDelete(id)
    res.redirect('/tcas');
})

module.exports = router;