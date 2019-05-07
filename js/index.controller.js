angular
.module('principal')
.controller('IndexController', 
	function ($scope, $timeout) {
        
        $scope.cursosCarregados = false;
		$scope.cor = "#FA690F";
		
        var init = function(){
        	console.info(123);
        }

        init();
    }
);