(function () {
'use strict';

angular.module('MenuApp')
.controller("MenuAppController", MenuAppController);

MenuAppController.$inject = ["dataFactory", "dataItemFactory"];
function MenuAppController(dataFactory, dataItemFactory){
	var ctrl = this;
	ctrl.categories = [];
	ctrl.list = [];
	// ctrl.list = items.menu_items[$stateParams.itemId];
	ctrl.getCategories = function(){
		ctrl.categories = [];
		var promise = dataFactory.getCategories();
		promise.then(function(response){
			for(var i = 0; i < response.data.length; i++){
				var item = {
					short_name: response.data[i].short_name,
					name: response.data[i].name
				};
				ctrl.categories.push(item);
			};
			// console.log(ctrl.categories);
			return ctrl.categories;
		})
		.catch(function(error){
			console.log(error);
		})

	};

	ctrl.showInfo = function(itemIndex){
		ctrl.list = [];
		var promise = dataItemFactory.getItems(ctrl.categories[itemIndex].short_name);
		promise.then(function(response){
			for(var i = 0; i < response.data.menu_items.length; i++){
				var item = {
					short_name: response.data.menu_items[i].short_name,
					name: response.data.menu_items[i].name,
					description: response.data.menu_items[i].description
				};
				ctrl.list.push(item);
			};
			// console.log(ctrl.list);
			return ctrl.list;
		})
		.catch(function(error){
			console.log(error);
		})
	}
}
})();
