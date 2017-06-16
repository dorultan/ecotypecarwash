ecotypeCarwash.config(function($routeProvider, $locationProvider){
	$routeProvider

	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})

	.when('home', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})

	.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})

	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'aboutController'
	})

	$locationProvider.html5Mode(true);
});