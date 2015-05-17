// Apps

var app = angular.module('app', ['ngRoute','ngAnimate']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider.
		when('/profile', {templateUrl: 'view/profile.html', controller: 'profileCtrl'}).
		when('/experience',{templateUrl: 'view/experience.html',controller: 'experienceCtrl'}).
		otherwise({ redirectTo: '/profile' });
	// $locationProvider.html5Mode(true);
});




//Controllers

