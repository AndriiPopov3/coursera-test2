(function (){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchController', LunchController);

	LunchController.$inject = ['$scope'];
	function LunchController($scope){
		// console.log($scope.lunchList);
		$scope.LunchCheckController = function(){

		var lunchMenu = LunchCheckController($scope.lunchList);
	};

	function LunchCheckController(string){
		
        if(string == undefined || string == ""){ 
            $scope.message = "Please enter data first";
        }
        else { 
        	var lunchMessage = string.split(',');
        	var counter = 0;
        	for (var i = 0; i<lunchMessage.length; i++){
        		if(lunchMessage[i].replace(/\s/g, "").length != 0){
        			counter++;
        		}
        	}
    	    if(counter < 4){
            $scope.message = "Enjoy!";
        } else {
            $scope.message = "Too much!";
        }
    }
	}
}
})();