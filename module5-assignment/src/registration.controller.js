(function () {

angular.module('restaurant')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ["DataService"];
function RegistrationController(DataService) {
  var reg = this;
  reg.beacon = false;
  reg.infbeac = false;
  // reg.item = function(){
  reg.first_name = "";
  reg.last_name = "";
  reg.dish = "";
  reg.email = "";
  reg.phone = "";
  reg.submit = function (string) {
  	var promise = DataService.checkItem(reg.dish);
  	promise.then(function (response){
  		if(response == undefined){
  			// console.log("error call");
  			reg.beacon = true;
  		}else{
  			reg.array = response;
  			// console.log(reg.array);
  			reg.beacon = false;
  			DataService.saveInfo(reg.first_name, reg.last_name, reg.email, reg.phone, reg.dish);
  			reg.infbeac = true;
  		}
  	})
  	.catch(function (error) {
  		console.log(error);
  		reg.beacon = true;
  	})
  };

}

})();
