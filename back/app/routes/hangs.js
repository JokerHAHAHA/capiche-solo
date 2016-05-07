// ROUTES HANGS
var Hang = require('../models/hang.js');
module.exports 	= function(app) {
	app.get('/hangs', Hang.findAll);
	app.post('/hangs', Hang.create);    
}
