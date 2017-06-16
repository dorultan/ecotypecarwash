ecotypeCarwash.config(function($routeProvider){
	$routeProvider

	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})

	.when('/index.html', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})

	.when('/home/', {
		templateUrl: 'views/home.html',
		controller: 'homeController'
	})

	.when('/about', {
		templateUrl: 'views/about.html',
		controller: 'aboutController'
	})

	.when('/about/', {
		templateUrl: 'views/about.html',
		controller: 'aboutController'
	})
});