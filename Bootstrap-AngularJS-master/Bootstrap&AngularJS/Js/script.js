//first let me create a module for my controller

 var myapp=angular.module("mymodule",[]);//declaration of module
  myapp.controller("mycontroller",function($scope){
 /* $scope.message="Hi welcome to my website";
  $scope.greeting="hello world"}); */
  var employee={firstName:"Raghu Nayudu",
				LastName:"Rayapudi",
				Gender:"male",
  };
  $scope.employee=employee;
  });
  
  //declaration of the controller
 