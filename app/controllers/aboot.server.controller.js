'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Aboot = mongoose.model('Aboot'),
	_ = require('lodash');

/**
 * Aboot Section
 */
exports.list = function(req, res) {
	Aboot.find({parent:'top'}).exec(function(err, aboot) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(aboot);
		}
	});
};

exports.create = function(req, res) {
	var aboot = new Aboot(req.body);

	aboot.user = req.user;

	aboot.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(aboot);
		}
	});
};

exports.update = function(req, res) {
	var aboot = req.aboot;

	//console.log('resetting parent');
	//article.parent = '';//article.id;

	aboot = _.extend(aboot, req.body);

	aboot.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(aboot);
		}
	});
};

/**
 * Article authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.article.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
