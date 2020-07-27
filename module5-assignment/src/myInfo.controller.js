(function () {

angular.module('restaurant')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ["DataService"];
function MyInfoController(DataService) {
  var myInfo = this;
  myInfo.firstName = DataService.getFirstName();
  myInfo.lastName = DataService.getLastName();
  myInfo.email = DataService.getEmail();
  myInfo.phone = DataService.getPhone();
  myInfo.dish = DataService.getDish();
  myInfo.beacon = true;
  if(myInfo.firstName == ""){
    myInfo.beacon = true;
  } else{
    myInfo.beacon = false;
  }

  // DataService.getFirstName();
}

})();
