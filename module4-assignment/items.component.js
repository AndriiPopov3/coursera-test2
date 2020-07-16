(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'templates/itemList.template.html',
  controller: ItemListComponentController,
  bindings: {
    items: '<',
    myTitle: '@title'
  }
});


ItemListComponentController.$inject = []
function ItemListComponentController() {
  var $ctrl = this;
  // var totalItems;

  // $ctrl.$onInit = function () {
  //   totalItems = 0;
  // };


  // $ctrl.$doCheck = function () {
  //   if ($ctrl.items.length !== totalItems) {
  //     totalItems = $ctrl.items.length;

  //     $rootScope.$broadcast('shoppinglist:processing', {on: true});
  //     var promises = [];
  //     for (var i = 0; i < $ctrl.items.length; i++) {
  //       promises.push(WeightLossFilterService.checkName($ctrl.items[i].name));
  //     }

  //     $q.all(promises)
  //     .then(function (result) {
  //       // Remove cookie warning
  //       var warningElem = $element.find('div.error');
  //       warningElem.slideUp(900);
  //     })
  //     .catch(function (result) {
  //       // Show cookie warning
  //       var warningElem = $element.find('div.error');
  //       warningElem.slideDown(900);
  //     })
  //     .finally(function () {
  //       $rootScope.$broadcast('shoppinglist:processing', { on: false });
  //     });
  //   }
  // };

  // $ctrl.remove = function (myIndex) {
  //   $ctrl.onRemove({ index: myIndex });
  // };
}

})();
