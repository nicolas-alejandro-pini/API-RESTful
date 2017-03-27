var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
    var user = new User(req.body.user);
    user.token = 'token1234';
    user.bio = 'Breve descripcion';
    user.save(function(err, user) {
        if (err) {
            return next(err);
        }

        res.json({ "user": user });
    });
});
// { "username":"kakaroto" , "email":"kakaroto@vegita.com", "password": "roshi", "token":"bulma", "bio":"goku salvanos"}
// curl --data 'username=kakaroto&email=kakaroto@vegita.com&password=roshi&token=bulma&bio=goku salvanos' http://localhost:3000/users/register

router.post('/login', function(req, res, next) {
    User.findOne({
        'email': req.body.user.email
    }, 'username email password token', function(err, user) {
        if (err) {
            return next(err);
        }
        console.log('username: %s, email: %s, pass: %s, token: %s.', user.username, user.email, user.password, user.token);

        // On error password
        if (req.body.user.password !== user.password) {
            return next(new Error('Password incorrecta.'));
        }
        res.json({ "user": user });
    });
});

module.exports = router;
