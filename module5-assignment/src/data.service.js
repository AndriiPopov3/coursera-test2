(function (){

	angular.module("restaurant")
	.service("DataService", DataService);

	DataService.$inject = ["$http"];
	function DataService ($http){
		var service = this;
		var chosenItem = [];
		var chosenFirstName = "";
		var chosenLastName = "";
		var chosenEmail = "";
		var chosenPhone = "";
		var chosenDish = "";
		
		service.checkItem = function (string){
			// chosenItem = [];
			return $http({
			method: "GET",
			url: ("https://powerful-ocean-03186.herokuapp.com/menu_items/" + string + ".json")
		}).then(function(result){
			chosenItem = result.data;
			// console.log(chosenItem);
			// console.log("bullshit");
			return chosenItem;
		})
		.catch(function(error){
			console.log("Something went wrong");
		})
		};

		service.saveInfo = function(string1, string2, string3, string4, string5){
			chosenFirstName = string1;
			chosenLastName = string2;
			chosenEmail = string3;
			chosenPhone = string4;
			chosenDish = string5;
		};

		service.getFirstName = function(){
			return chosenFirstName;
		};
		service.getLastName = function(){
			return chosenLastName;
		};
		service.getEmail = function(){
			return chosenEmail;
		};
		service.getPhone = function(){
			return chosenPhone;
		};
		service.getDish = function(){
			console.log(chosenItem);
			return chosenItem;
		}

	};
})();