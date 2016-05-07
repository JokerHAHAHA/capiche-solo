function hangCtrl($scope, $http) {


	$scope.number = 0;
	$scope.good = [];
	$scope.bad = [];
	mainService.create('');

	// document.querySelector("#test").style.opacity = 0;
	// setTimeout(function(){

	// 		document.querySelector("#test").style.opacity = 1;

	// 	}, 1000);

	// MAIN CONTROLLER

	$scope.add = function(data){
		mainService.create(data);
	}

	$scope.whiteSpace = function() {

		$scope.numberPhp = 0;
		$scope.word = $scope.word.toUpperCase();
		$scope.word = $scope.word.split('');
		$scope.good.push($scope.word[0]);

		for (var i=0; i<$scope.word.length-2; i++) {
			$scope.good.push("_ ");
		}

		$scope.good.push($scope.word[$scope.word.length-1]);

		$scope.word.splice(0, 1, 'checked');
		$scope.word.splice($scope.word.length-1, 1, 'checked');
	}

	$scope.countBad = 0;
	$scope.countGood = 0;
	$scope.check = function(letter) {
		var indexLetter = $scope.word.indexOf(letter);
		if (indexLetter != -1) {
			$scope.good.splice(indexLetter, 1, letter);
			$scope.word.splice(indexLetter, 1, 'checked');

			if ($scope.word.indexOf(letter) != -1) $scope.check(letter);
			$scope.countGood++;
			if ($scope.countGood+2 == mainService.get().length){
				$scope.numberInit = 2;
			}
		}
		else {
			$scope.numberPhp++;
			$scope.bad.push(letter);
			$scope.countBad++;
			if ($scope.countBad == 8) {
				$scope.good = mainService.get();
				$scope.numberInit = 1;
			}
		}
	}
}
