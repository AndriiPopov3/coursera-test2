(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'templates/categoryList.template.html',
  bindings: {
    items: '<'
  }
});


})();
