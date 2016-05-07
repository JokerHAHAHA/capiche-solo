// ROUTES CAREERS
var Career = require('../models/career.js');
module.exports 	= function(app) {
	app.get('/careers', Career.findAll);
	app.post('/careers', Career.create);
	app.put('/careers/:id', Career.update);
	app.delete('/careers/:id', Career.delete);
    
}
