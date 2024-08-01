module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        console.log('here')
        req.flash('error', 'You must be logged in') ;
        return res.redirect('/login') ;
    }
}



