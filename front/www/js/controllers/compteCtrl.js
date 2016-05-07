function compteCtrl($scope, $http) {
    $scope.user = {};
    $scope.add = function () {
        var data = $scope.user;
        $http.post('http://localhost:8000/users', data);
        $scope.user = {};
    }

}