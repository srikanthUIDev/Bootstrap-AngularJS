var myapp=angular.module("mymodule",[]).controller("mycontroller",function($scope){
			
							var movies=[{Name:"Batman:AkrahamCity",Director:"James Camaron",Actor:"Raghu Nayudu",Likes:0,Dislikes:0},
										{Name:"Star Wars",Director:"Rajamouli",Actor:"Prabhas",Likes:0,Dislikes:0},
										{Name:"Hacksaw Ridge",Director:"Swaroop",Actor:"vamsi",Likes:0,Dislikes:0},
										{Name:"Sucide Squad",Director:"Bill Gates",Actor:"Sai",Likes:0,Dislikes:0}
							];
							$scope.movies=movies;//movies is model and mycontroller is the controller of the mymodule
							$scope.givelikes=function(movie){
													movie.Likes++;
											};
							$scope.givedislikes=function(movie){
													movie.Dislikes++;
											};
			
							});