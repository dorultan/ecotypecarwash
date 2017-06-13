ecoType.config(function($routeProvider){
   $routeProvider

   .when('/', {
   	templateUrl: 'views/home.html',
   	controller: 'homeController'
   })

   .when('/about', {
   	templateUrl: 'views/about.html',
   	controller: 'aboutController'
   })

   .when('/hire', {
   	templateUrl: 'views/hire.html',
   	controller: 'hireController'
   })

   .when('/contact', {
   	templateUrl: 'views/contact.html',
   	controller: 'contactController'
   })

});

