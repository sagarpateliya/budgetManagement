'use strict';

module.exports = function (server) {
	// // Install a `/` route that returns server status
	// var router = server.loopback.Router();
	// router.get('/', server.loopback.status());
	// server.use(router);

	var router = server.loopback.Router();
	var multipart = require('connect-multiparty');
	router.get('/', server.loopback.status());
	server.use(router);
	var path = require('path');
	var appDir = path.dirname(require.main.filename);
	console.log("appDir", appDir);
	var fs = require('fs');
	var Guid = require('guid');
	var multipartMiddleware = multipart();
	var app = require("../server.js");

	router.post('/api/expence', multipartMiddleware, function (req, res) {
		app.models.expense.get()
	});

};