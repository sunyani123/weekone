app.controller('main',['$scope','$http',function($scope,$http){
    $http({
        url:'http://localhost:8080/datajson'
    }).then(function(result){
        $scope.data=result;
    },function(erroe){
        return -1;
    })
}]);