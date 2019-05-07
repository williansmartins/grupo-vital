var myApp = angular.module('principal',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/inicio', {
        templateUrl: 'telas/inicio.html',
        controller: 'IndexController'
    })
    .when('/sobre', {
        templateUrl: 'telas/sobre.html',
        controller: 'IndexController'
    })
    .when('/404', {
        templateUrl: 'telas/404.html',
    })
    .otherwise({
        redirectTo: '404'
    });
}]);