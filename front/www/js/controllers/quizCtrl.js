function quizCtrl($scope, $http, $cordovaGeolocation) {
	$scope.step = 1;
	$scope.career = {};
	$scope.answer = [];

		// With the element initially hidden, we can show it slowly:
		$( "#clickme" ).click(function() {
		  $("#btn-culture:hidden").fadeIn(1500);
		  $("#btn-code:hidden").fadeIn(1500);
		});
	


	var posOptions = {timeout: 10000, enableHighAccuracy: true};
	$cordovaGeolocation
	.getCurrentPosition(posOptions)
	.then(function (position) {
		var lat  = position.coords.latitude;
		var long = position.coords.longitude;
		$scope.lat = lat;
		$scope.long = long;
	}, function(err) {
      // error
  	});

	function load () {
		$http.get('http://localhost:8000/careers').then(function (res) {
			$scope.careers = res.data; 
		});
		$http.get('./datas/data.json').success(function (data) {
			$scope.quiz = data;
		});
		$http.get('./datas/users.json').success(function (data) {
			$scope.users = data;
		});
	}

	$scope.add = function () {
		var data = $scope.career;
		$http.post('http://localhost:8000/careers', data);
		$scope.career = {};
	}
	$scope.checkRep = function (choice, indexQ) {
		console.log(typeof choice);
		console.log($scope.quiz.ruby[indexQ-1].answer);
		if (choice != $scope.quiz.ruby[indexQ-1].answer) {
			$scope.answer.push($scope.quiz.ruby[indexQ-1].answer);
			console.log($scope.answer);
		}
		else {
			$scope.answer.push("good");
			console.log($scope.answer);
		}
	}

	$scope.calculDistance = function () {
		 var distance = 0;
		 $scope.distance = Math.round(Math.sqrt(($scope.lat-($scope.lat-0.000000001))^2 + (($scope.long-($scope.long-0.000000001))^2))*100)/100;
	}

	load();
}