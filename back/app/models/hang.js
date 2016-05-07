// MODEL HANG
var mongoose = require('mongoose');
var hangSchema = new mongoose.Schema({
	word: []
});
var Hang = {

	model: mongoose.model('Hang', hangSchema),

	create: function(req, res) {
		Hang.model.create({
			word: req.body
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Hang.model.find(function (err, data) {
			res.send(data);
		});
	}
}
module.exports = Hang;
