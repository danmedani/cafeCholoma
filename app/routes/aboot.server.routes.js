'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller');
var aboot = require('../../app/controllers/aboot.server.controller');

module.exports = function(app) {
	app.route('/aboot')
		.get(aboot.list)
		.post(users.requiresLogin, aboot.create);

};
