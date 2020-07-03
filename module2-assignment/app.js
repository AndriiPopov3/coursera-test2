(function(){

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var ctrl1 = this;
        ctrl1.List1 = ShoppingListCheckOffService.getList1();

        ctrl1.moveitem = function (itemIndex){
                ShoppingListCheckOffService.moveitem(itemIndex);
        }
        ctrl1.errorMessage = ShoppingListCheckOffService.cnt1;

    }
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var ctrl2 = this;
        ctrl2.List2 = ShoppingListCheckOffService.getList2();
        ctrl2.errorMessage = ShoppingListCheckOffService.cnt2;
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var List1 = [
        {
        name: "cookies",
        quantity: "10"
        },
        {
        name: "chocolate bars",
        quantity: "3"
        },
        {
        name: "bottles of water",
        quantity: "3"
        },
        {
        name: "BEERS",
        quantity: "2"
        },
        {
        name: "donuts",
        quantity: "5"
        }
        ];
        var List2 = [];
        var initialList1size = List1.length;
        var cnt1 = List1.length;
        var cnt2 = List2.length;

        service.getList1 = function (){
            return List1;
        };
        service.getList2 = function (){
            return List2;
        };

        service.moveitem = function (itemIndex){
            List2.push(List1[itemIndex]);
            List1.splice(itemIndex, 1);
            cnt1 = List1.length;
            cnt2 = List2.length;
        };

        service.cnt1 = function(){
            if (cnt1 == 0){
                return true;
            }
        }

        service.cnt2 = function(){
            if (cnt2 == 0){
                return true;
            }
        }
        }
})();