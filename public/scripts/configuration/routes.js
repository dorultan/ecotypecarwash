ecoType.config(function($routeProvider, $locationProvider){
   $routeProvider

   .when('/', {
   	templateUrl: 'views/home.html',
   	controller: 'homeController',
      data: {
         title: 'Ecotype carwash',
         description: 'Ecotype is a manual carwash company wich use only eco products to acomplish'
      }
   })

   .when('/book', {
      templateUrl: 'views/book.html',
      controller: 'bookController',
      controllerAs: 'vm'
   })

   .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'homeController'
   })

   .when('/about', {
   	templateUrl: 'views/about.html',
   	controller: 'aboutController'
   })

   .when('/contact', {
   	templateUrl: 'views/contact.html',
   	controller: 'contactController',
      controllerAs: 'vm'
   })
   
   .when('/:num', {
      templateUrl: 'views/book.html',
      controller: 'bookController',
      controllerAs: 'vm'
   })
   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
   });
});

