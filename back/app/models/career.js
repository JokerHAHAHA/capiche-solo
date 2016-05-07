// MODEL CAREER
var mongoose = require('mongoose');
var careerSchema = new mongoose.Schema({
	game : {}
});
var Career = {

	model: mongoose.model('Career', careerSchema),

	create: function(req, res) {
		Career.model.create({
			game: req.body.game
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Career.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Career.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Career.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}
module.exports = Career;
