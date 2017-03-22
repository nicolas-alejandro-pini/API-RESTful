var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');
var Comment = mongoose.model('Comment');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'almundo.com'
    });
});

router.get('/hoteles', function(req, res, next) {
    Hotel.find(function(err, hotels) {
        if (err) {
            return next(err);
        }

        res.json(hotels);
    });
});
//curl http://localhost:3000/hoteles

router.post('/hoteles', function(req, res, next) {
    var hotel = new Hotel(req.body);
    hotel.save(function(err, hotel) {
        if (err) {
            return next(err);
        }

        res.json(hotel)
    })
});
// curl --data 'name=Hotel Emperador&stars=3&price=1596' http://localhost:3000/hoteles
// curl --data 'name=Petit Palace San Bernardo&stars=4&price=2145' http://localhost:3000/hoteles
// curl --data 'name=Hotel Nuevo Boston&stars=2&price=861' http://localhost:3000/hoteles

router.get('/hoteles/:hotel', function(req, res, next) {
    req.hotel.populate('comments', function(err, hotel) {
        if (err) {
            return next(err);
        }
        res.json(req.hotel);
    });
});
// curl http://localhost:3000/hoteles/58d1ba8ec0e0c40834302165

router.post('/hoteles/:hotel/comments', function(req, res, next) {
    var comment = new Comment(req.body);
    comment.hotel = req.hotel;

    comment.save(function(err, comment) {
        if (err) {
            return next(err);
        }

        req.hotel.comments.push(comment);
        req.hotel.save(function(err, hotel) {
            if (err) {
                return next(err);
            }

            res.json(comment);
        })
    })
});
//curl --data 'body=hotel de maravillas&author=un cliente' http://localhost:3000/hoteles/58d1ba8ec0e0c40834302165/comments

router.put('/hoteles/:hotel/comments/:comment/upvote', function(req, res, next) {
    if (!req.hotel) {
        return next(new Error('No se encuentra el hotel.'));
    }

    req.comment.upvote(function(err, comment) {
        if (err) {
            return next(err);
        }

        res.json(comment);
    });
})
//curl -X PUT http://localhost:3000/hoteles/58d1ba8ec0e0c40834302165/comments/58d1bbd08983ef08b26198c0/upvote

router.param('hotel', function(req, res, next, id) {
    var query = Hotel.findById(id);

    query.exec(function(err, hotel) {
        if (err) {
            return next(err);
        }
        if (!hotel) {
            return next(new Error('El hotel no existe.'));
        }

        req.hotel = hotel;
        return next();
    });
});


router.param('comment', function(req, res, next, id) {
    var query = Comment.findById(id);

    query.exec(function(err, comment) {
        if (err) {
            return next(err);
        }
        if (!comment) {
            return next(new Error('No se encuentra el comentario.'));
        }

        req.comment = comment;
        return next();
    });
});

module.exports = router;
