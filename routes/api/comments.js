var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var City = mongoose.model('City');

// router.param('comment', function(req, res, next, id) {
//
//     var query = Comment.findById(id);
//
//     query.exec(function(err, comment) {
//         if (err) {
//             return next(err);
//         }
//         if (!comment) {
//             return next(new Error('No se encuentra el comentario.'));
//         }
//
//         req.comment = comment;
//         return next();
//     });
// });
// router.post('/hoteles/:hotel/comments', function(req, res, next) {
//     var comment = new Comment(req.body);
//     comment.hotel = req.hotel;
//
//     comment.save(function(err, comment) {
//         if (err) {
//             return next(err);
//         }
//
//         req.hotel.comments.push(comment);
//         req.hotel.save(function(err, hotel) {
//             if (err) {
//                 return next(err);
//             }
//
//             res.json(comment);
//         })
//     })
// });
//
// router.put('/hoteles/:hotel/comments/:comment/upvote', function(req, res, next) {
//     if (!req.hotel) {
//         return next(new Error('No se encuentra el hotel.'));
//     }
//
//     req.comment.upvote(function(err, comment) {
//         if (err) {
//             return next(err);
//         }
//
//         res.json(comment);
//     });
// })
