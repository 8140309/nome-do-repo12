'use strict';
 module.exports = function(app) {
	 var controller = require('../controllers/tasksController');

	 app.route('/tasks')
		 .get(controller.list)
		 .post(controller.create);

	  app.route('/tasks/:id')
		 .get(controller.read)
		 .put(controller.update)
		 .delete(controller.delete);
};