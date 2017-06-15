ecotypeCarwash.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})

	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'aboutController'
	})
});