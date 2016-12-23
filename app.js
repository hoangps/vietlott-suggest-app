var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $http){

    $scope.data = {};
    $scope.ballData = {};


    var readJSONData = function(){
        $http.get('data.json').then(function(res) {

            res.data.lastRoll.numbers = res.data.lastRoll.numbers.split(' ');

            for(var i=0;i<res.data.rolls.length;i++){
                res.data.rolls[i].numbers = res.data.rolls[i].numbers.split(' ');
            }

            $scope.data = res.data;
            processBallData();

        });
    }

    var processBallData = function(){

        var balls = {};

        for(var i=0; i<$scope.data.rolls.length; i++){
            var roll = $scope.data.rolls[i];
            for(var j=0; j<roll.numbers.length; j++){
                if(balls[roll.numbers[j]] == undefined){
                    balls[roll.numbers[j]] = [roll.date];
                } else {
                    balls[roll.numbers[j]].push(roll.date);
                }
            }
        }

        $scope.ballData = balls;

    }

    var init = function(){

        readJSONData();
    }

    init();
});
