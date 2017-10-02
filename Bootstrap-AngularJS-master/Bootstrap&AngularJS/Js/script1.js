var myapp=angular.module("mymodule",[]).controller("mycontroller",function($scope){ 
														var employees=[
														{firstName:"Raghu Nayudu",lastName:"Rayapudi",sex:"male"},
														{firstName:"Poorna Chandra",lastName:"Rallapalli",sex:"male"},
														{firstName:"Chaitanya",lastName:"Nandamuri",sex:"male"}
																	 ];
														$scope.employees=employees;
														});
														console.log(myapp);