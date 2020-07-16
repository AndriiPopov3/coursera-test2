(function () {
'use strict';

angular.module('data')
.service("MenuDataService", MenuDataService);

MenuDataService.$inject = ["$http"];
function MenuDataService($http){
	var service = this;
	var categoryItems = [];
	var listItems = [];
	service.getAllCategories = function(){
		return $http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/categories.json")
		}).then(function(result){
			categoryItems = result;
			return categoryItems;
		})
		.catch(function(error){
			console.log("Something went wrong (category)");
		})
	};

	service.getItemsForCategory = function(categoryShortName){
		var link = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
		return $http({
			method: "GET",
			url: (link)
		}).then(function(result){
			listItems = result;
			// console.log(listItems);
			return listItems;
		})
		.catch(function(error){
			console.log("Something went wrong (items)");
		})
	};

	service.getCategoriesArray = function(){
		return categoryItems;
	};

	service.getItemsArray = function(){
		return listItems;
	};
}

})();
