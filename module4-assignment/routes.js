(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.template.html'
  })

  // Category list
  .state('category', {
    url: '/category',
    templateUrl: 'templates/categories.template.html',
    controller: 'MenuAppController as ctrl',
     resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
     }
  })

  // // Item list
  .state('item', {
    url: '/item/{itemId}',
    templateUrl: 'templates/items.template.html',
    controller: 'ItemListController as itemCtrl',
     resolve: {
      items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.itemId);
      }]
     }
  });

}

})();
