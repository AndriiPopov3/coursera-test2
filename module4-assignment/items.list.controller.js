(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

ItemListController.$inject = ['items'];
function ItemListController(items) {
  var itemCtrl = this;
  itemCtrl.array = items;
  
}

})();
