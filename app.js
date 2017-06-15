var myapp = angular.module('smotikapp', ['ngRoute','ngSanitize']);

myapp.config(function ($routeProvider) {

  $routeProvider.
    when('/', { templateUrl: "view/pages/main.html", controller: "mainCtrl" })
    .when('/aboutus', { templateUrl: "view/pages/about.html", controller: "aboutusCtrl" })
    .when('/entrance_management', { templateUrl: "view/pages/entrance.html", controller: "entranceCtrl" })
    .when('/security_management', { templateUrl: "view/pages/security_man.html", controller: "securityCtrl" })
    .when('/smart_home_management', { templateUrl: "view/pages/smart_home_man.html", controller: "smarthomeCtrl" })
    .when('/music_zoning', { templateUrl: "view/pages/music_zone.html", controller: "musicCtrl" })
    .when('/hospitality_solutions', { templateUrl: "view/pages/hospitality_man.html", controller: "hospitalityCtrl" })
    .when('/conference_and_room_automation', { templateUrl: "view/pages/conferance_man.html", controller: "conferenceCtrl" })
    .when('/smart_solutions', { templateUrl: "view/pages/smart_sol_man.html", controller: "smartsolCtrl" })
    .when('/design_your_home', { templateUrl: "view/pages/design_home.html", controller: "designCtrl" })
    .when('/customer_service', { templateUrl: "view/pages/customer_service_man.html", controller: "customerCtrl" })
    .otherwise({ redirectTo: "view/pages/error.html" });

});

myapp.controller("mainCtrl", ['$scope', function ($scope) {

}]);


myapp.controller("aboutusCtrl", ['$scope', function ($scope) {
$scope.about_message = {message:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.          Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>"};
$scope.about_image = "img/about.jpg";
}]);