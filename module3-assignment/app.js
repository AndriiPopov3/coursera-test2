(function(){

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
    // .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective);


    function FoundItemsDirective() {
        var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
      items: '<',
      // myTitle: '@title',
      // badRemove: '=',
      onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'ctrl',
      bindToController: true
        };

    return ddo;
    }

    function FoundItemsDirectiveController() {
        var ctrl = this;
  // list.cookiesInList = function () {
  //   for (var i = 0; i < list.items.length; i++) {
  //     var name = list.items[i].name;
  //     if (name.toLowerCase().indexOf("cookie") !== -1) {
  //       return true;
  //     }
  //   }

  //   return false;
  // };
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var ctrl = this;
        ctrl.searchTerm = "";
        ctrl.NarrowDown = function (){
            MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
        };
        ctrl.fItems = MenuSearchService.getfItems();
        ctrl.removeItem = function (itemIndex){
            MenuSearchService.removeItem(itemIndex);
        };
    }

    MenuSearchService.$inject = ['$http']
    function MenuSearchService($http){
        var service = this;
        var fItems = [];
        var descr = "";
    service.getMatchedMenuItems = function (searchTerm) {
         
        return $http({
          method: "GET",
          url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
        }).then(function(result){

            // fItems = [];
             // console.log(searchTerm);
            for (var i = 0; i < result.data.menu_items.length; i++) {
            descr = result.data.menu_items[i].description.toLowerCase();
            if (descr.search(searchTerm) !== -1) {
        var item = {
        name: result.data.menu_items[i].name,
        short_name: result.data.menu_items[i].short_name,
        description: result.data.menu_items[i].description
      }; 
      fItems.push(item);     
    }
    };
     // console.log("works");
     // console.log(fItems);
    return fItems;
    })
    .catch(function (error) {
        console.log("Something went terribly wrong.");
    });
    };

    service.getfItems = function(){
        // console.log(fItems.length);
        // console.log("AAAAAAAAA");
        return fItems;
    };

    service.removeItem = function(itemIndex){
        fItems.splice(itemIndex, 1);
    };
    }
})();