// Apps

var app = angular.module('app', ['ngRoute','ngAnimate']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider.
		when('/profile', {templateUrl: 'view/profile.html', controller: 'profileCtrl'}).
		when('/experience',{templateUrl: 'view/experience.html',controller: 'experienceCtrl'}).
		when('/skill',{templateUrl: 'view/skill.html',controller: 'skillCtrl'}).		
		when('/portfolio',{templateUrl: 'view/portfolio.html',controller: 'portfolioCtrl'}).
			when('/contact',{templateUrl: 'view/contact.html',controller: 'contactCtrl'}).	
		otherwise({ redirectTo: '/profile' });
	// $locationProvider.html5Mode(true);
});




//Controllers

