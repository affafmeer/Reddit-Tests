'use strict';

app.controller('MainCtrl', function($scope, $http, $uibModal) {

    $scope.isShowing = false;
    $scope.error = '';
    $scope.sortType = 'score';
    $scope.defaultReverse = false;

    $scope.getJson = function() {
        $http.get('https://www.reddit.com/r/worldnews/new.json')
            .success(function(response) {

                $scope.redditData = response.data.children;
                $scope.isShowing = true;
                
            }).error(function(err) {
                 console.log(err);
            });
    };
});