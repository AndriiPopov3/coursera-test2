(function () {
'use strict';

angular.module('data', [])
.config(function () {
  console.log("Data config fired.");
})
.run(function () {
  console.log("Data run fired.");
})
.factory('dataFactory', dataFactory)
.factory('dataItemFactory', dataItemFactory);

dataFactory.$inject = ["MenuDataService"];
function dataFactory (MenuDataService){
	return {
		getCategories: function(){
		console.log("MenuDataService categories works");
		return MenuDataService.getAllCategories();
		}
	};
	};

dataItemFactory.$inject = ["MenuDataService"];
function dataItemFactory (MenuDataService){
	return {
		getItems: function(string){
		console.log("MenuDataService items works");
		return MenuDataService.getItemsForCategory(string);
		}
	};
	};
})();
