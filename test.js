
var app=angular.module("mymodule",[])
            .controller("myctrl",function($scope,stringService){
             $scope.uppercasespacing=function(input){

                
                $scope.output=stringService.processtring(input);

             }



            });



