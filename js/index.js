var app = angular.module('myapps',[]);

     app.controller('filesystem',function($scope,$http){
		 
		 $scope.save = function()
		 {
			  var params = {
            
                       "email":$scope.email,          
                       "password":$scope.password,
                        "name":$scope.name,
                       "city":$scope.city,
                        "phone":$scope.phone,
                       "gender":$scope.gender

                 };
				 
				    $http({
                        method:"POST",
                        url:"http://127.0.0.1:8081/add/record/detail",
                        data:angular.toJson(params),
                        headers:{
                                "Content-Type":"application/json",
                                "charset":"utf-8"
                                }
                   }).then(function success(res){

                           console.log("record inserted successfully...",res);

                   },function error(res){
                           console.log("error",res);
                   });
           };
	 });