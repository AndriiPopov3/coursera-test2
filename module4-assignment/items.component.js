(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'templates/itemList.template.html',
  bindings: {
    items: '<'
  }
});


})();
