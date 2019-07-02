var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup')
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

// exports.home = function(req, res) {
//     res.render('home');
// }

exports.dashboard = function(req, res) {
 
    res.render('dashboard');
 
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });

exports.index = function(req, res) {
    
    res.render('index');
}
 
}