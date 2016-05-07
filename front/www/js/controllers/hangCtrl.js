function hangCtrl($scope, $http) {
	$scope.number = 0;
	$scope.good = [];
	$scope.bad = [];
	$scope.hang = {};

	function load () {
		$http.get('http://localhost:8000/hangs').then(function (res) {
			$scope.hangs = res.data; 
		});
	}

	$scope.add = function(){
		var data = $scope.hang.word.toUpperCase();
		console.log("data : " + data)
		$http.post('http://localhost:8000/hangs', data);
	}
	$scope.whiteSpace = function() {
console.log("scope.hang : " + $scope.hang);
		$scope.numberPhp = 0;
		$scope.hang.word = $scope.hang.word.toUpperCase();
		$scope.hang.word = $scope.hang.word.split('');
		$scope.good.push($scope.hang.word[0]);

		for (var i=0; i<$scope.hang.word.length-2; i++) {
			$scope.good.push("_ ");
		}

		$scope.good.push($scope.hang.word[$scope.hang.word.length-1]);

		$scope.hang.word.splice(0, 1, 'checked');
		$scope.hang.word.splice($scope.hang.word.length-1, 1, 'checked');
	}

	$scope.countBad = 0;
	$scope.countGood = 0;
	$scope.check = function(letter) {
		var indexLetter = $scope.hang.word.indexOf(letter);
		if (indexLetter != -1) {
			$scope.good.splice(indexLetter, 1, letter);
			$scope.hang.word.splice(indexLetter, 1, 'checked');

			if ($scope.hang.word.indexOf(letter) != -1) $scope.check(letter);
			$scope.countGood++;
			if ($scope.countGood+2 == $http.get('http://localhost:8000/hangs').length){
				$scope.numberInit = 2;
			}
		}
		else {
			$scope.numberPhp++;
			$scope.bad.push(letter);
			$scope.countBad++;
			if ($scope.countBad == 8) {
				$scope.good = $http.get('http://localhost:8000/hangs').get();
				$scope.numberInit = 1;
			}
		}
	}
}
