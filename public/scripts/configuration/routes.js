ecoType
.config(function($routeProvider, $locationProvider, ngMetaProvider){
   $routeProvider

   .when('/', {
   	templateUrl: 'views/home.html',
   	controller: 'homeController',
      meta: {
         title: 'Ecotype carwash',
         titleSuffix: ' | High definition detailing.',
         description: 'Waterless, mobile hand carwash, offering premium service, valeting and impeccable customer service in London.'
      }
   })

   .when('/book', {
      templateUrl: 'views/book.html',
      controller: 'bookController',
      controllerAs: 'vm',
      meta: {
         title: 'Ecotype carwash',
         titleSuffix: ' | Services.',
         description: 'Our services were conceived around your needs. You can choose on of the following services: REFRESH, PURE or PURE +. However, we are aiming to be flexible as possible. For any special requests, please feel free to contact us.'
      }
   })

   .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'homeController',
      meta: {
         title: 'Ecotype carwash',
         titleSuffix: ' | High definition detailing.',
         description: 'Waterless, mobile hand carwash, offering premium service, valeting and impeccable customer service in London.'
      }
   })

   .when('/about', {
   	templateUrl: 'views/about.html',
   	controller: 'aboutController',
      meta: {
         title: 'Mobile Detailing',
         titleSuffix: ' | Convenient, high quality polishing and detailing',
         description: 'We are using only the highest quality Waterless products, therefore we truly are Eco friendly.'
      }
   })

   .when('/contact', {
   	templateUrl: 'views/contact.html',
   	controller: 'contactController',
      controllerAs: 'vm',
      meta: {
         title: 'Ecotype carwash',
         titleSuffix: '| Contact-us',
         description: 'We are very easy to reach. Either you choose to get in touch with us via email, website or phone, our response will always be professional due to our impeccable customer service.'
      }
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

   ngMetaProvider.useTitleSuffix(true);
})

.run(['ngMeta', function(ngMeta){
   ngMeta.init();
}])
