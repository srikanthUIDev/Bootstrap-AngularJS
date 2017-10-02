  var myapp=angular.module("mymodule",[]).controller("mycontroller",function($scope){
											
										var movies=[{Name:"Batman:AkrahamCity",Director:"James Camaron",Actor:"Raghu Nayudu",ReleaseDate:new Date("January 25 2016"),Price:5.34,Likes:0,Dislikes:0},
										{Name:"Star Wars",Director:"Rajamouli",Actor:"Prabhas",ReleaseDate:new Date("January 25 2016"),Price:2.34,Likes:0,Dislikes:0},
										{Name:"Hacksaw Ridge",Director:"Swaroop",Actor:"vamsi",ReleaseDate:new Date("January 25 2016"),Price:1.34,Likes:0,Dislikes:0},
										{Name:"Sucide Squad",Director:"Bill Gates",Actor:"Sai",ReleaseDate:new Date("January 25 2016"),Price:3.34,Likes:0,Dislikes:0},
										{Name:"SuperMan",Director:"RaghuNayudu",Actor:"AmirKhan",ReleaseDate:new Date("January 25 2016"),Price:5.34,Likes:0,Dislikes:0}
							];
							$scope.movies=movies;
							$scope.givelikes=function(movie){
													movie.Likes++;
											};
							$scope.givedislikes=function(movie){
													movie.Dislikes++;
											};
							$scope.sortcolumn='Name';
							$scope.reversesort=false;
							$scope.reversecolumn=function(column){						//this function is for sorting the data 
											 $scope.reversesort=(column==$scope.sortcolumn)?!$scope.reversesort:false;
											 $scope.sortcolumn=column;
							};
										});