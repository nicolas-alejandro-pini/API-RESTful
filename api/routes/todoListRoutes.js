'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // todoList Routes
  app.route('/hotels')
    .get(todoList.list_all_hotels)
    .post(todoList.create_a_hotel);

  app.route('/hotels/:hotelId')
    .get(todoList.read_a_hotel)
    .put(todoList.update_a_hotel)
    .delete(todoList.delete_a_hotel);
};
