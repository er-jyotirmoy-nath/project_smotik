var myapp = angular.module('smotikapp', ['ngRoute']);

myapp.config(function ($routeProvider) {

  $routeProvider.
    when('/', { templateUrl: "view/pages/main.html", controller: "mainCtrl" })
    /* when('/aboutus', { templateUrl: "view/pages/", controller: "aboutusCtrl" }),
     when('/entrance_management', { templateUrl: "view/pages/", controller: "entranceCtrl" }),
     when('/security_management', { templateUrl: "view/pages/", controller: "securityCtrl" }),
     when('/smart_home_management', { templateUrl: "view/pages/", controller: "smarthomeCtrl" }),
     when('/music_zoning', { templateUrl: "view/pages/", controller: "musicCtrl" }),
     when('/hospitality_solutions', { templateUrl: "view/pages/", controller: "hospitalityCtrl" }),
     when('/conference_and_room_automation', { templateUrl: "view/pages/", controller: "conferenceCtrl" }),
     when('/smart_solutions', { templateUrl: "view/pages/", controller: "smartsolCtrl" }),
     when('/design_your_home', { templateUrl: "view/pages/", controller: "designCtrl" }),
     when('/customer_service', { templateUrl: "view/pages/", controller: "customerCtrl" }),*/
    .otherwise({ templateUrl: "view/pages/error.html" });

});

myapp.controller("mainCtrl", ['$scope', function ($scope) {

}]);
