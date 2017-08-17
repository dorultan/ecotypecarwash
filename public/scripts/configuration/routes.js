ecoType
.config(function($routeProvider, $locationProvider, ngMetaProvider){
   $routeProvider

   .when('/', {
   	templateUrl: 'views/home.html',
   	controller: 'homeController',
      meta: {
         title: 'Ecotype carwash',
         titleSuffix: ' | High definition detailing.',
         description: 'Waterless, mobile hand carwash, offering premium service, valeting and impeccable customer service in London.',
         keywords: "Eco-friendly carwash London, eco friendly car wash London, eco carwash, mobile hand car wash Chelsea, mobile hand car wash London, mobile carwash Chelsea, mobile carwash south west London, car wash at your house, polish London, car polishing London, polish, scratch removal, car scratch removal, swirls removal, chips removal, chips repairing, detailing, car waxing, wax, waterless car cleaning, carnauba wax, black car cleaning London, waterless car wash London, interior detailing, interior car cleaning, interior stains removal, leather seats cleaning, leather seats dressing, leather seats maintenance, car seats stains removal, upholstery deep cleaning, upholstery stains removal, car ceiling cleaning, ceiling stains removal, dashboard cleaning, centre console, cleaning, interior plastic wiped, interior restauration, car restoration, car vacuuming, car deep cleaning, mats deep cleaning, car mats cleaning, car mats stains removal, under bonnet cleaning, car engine cover cleaning, best mobile carwash, high quality products car wash, waterless eco friendly mobile hand carwash, cars, Mercedes, BMW, Range Rover, Battersea mobile carwash, Battersea eco friendly car wash, Sloane Square eco friendly mobile carwash, London green hand carwash, London’s best quality car wash, Land Rover, Smart, ecotype, high quality detailing, car detailing at your home, we are coming to you, regular maintenance car wash, mobile wash in London, mobile car wash east London, mobile carwash Stratford, Mobile hand carwash covering London area, car wash at your work, Car wash mobile North London, central London carwash, best mobile carwash, quality waterless wash, washnwax, wash and wax, wash'n'wax, eco friendly car wash at your door in London, most convenient, taxi regular cleaning, Uber regular cleaning, transport cars maintenance, car selling preparing, after buy car cleaning, used car new feeling, used cars restoration, wheels cleaning, tyres cleaning and dressing, Car valeting, mobile valeting in London, mobile car valeting, quick valeting in London, regular valeting in London"
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
         keywords: "Eco-friendly carwash London, eco friendly car wash London, eco carwash, mobile hand car wash Chelsea, mobile hand car wash London, mobile carwash Chelsea, mobile carwash south west London, car wash at your house, polish London, car polishing London, polish, scratch removal, car scratch removal, swirls removal, chips removal, chips repairing, detailing, car waxing, wax, waterless car cleaning, carnauba wax, black car cleaning London, waterless car wash London, interior detailing, interior car cleaning, interior stains removal, leather seats cleaning, leather seats dressing, leather seats maintenance, car seats stains removal, upholstery deep cleaning, upholstery stains removal, car ceiling cleaning, ceiling stains removal, dashboard cleaning, centre console, cleaning, interior plastic wiped, interior restauration, car restoration, car vacuuming, car deep cleaning, mats deep cleaning, car mats cleaning, car mats stains removal, under bonnet cleaning, car engine cover cleaning, best mobile carwash, high quality products car wash, waterless eco friendly mobile hand carwash, cars, Mercedes, BMW, Range Rover, Battersea mobile carwash, Battersea eco friendly car wash, Sloane Square eco friendly mobile carwash, London green hand carwash, London’s best quality car wash, Land Rover, Smart, ecotype, high quality detailing, car detailing at your home, we are coming to you, regular maintenance car wash, mobile wash in London, mobile car wash east London, mobile carwash Stratford, Mobile hand carwash covering London area, car wash at your work, Car wash mobile North London, central London carwash, best mobile carwash, quality waterless wash, washnwax, wash and wax, wash'n'wax, eco friendly car wash at your door in London, most convenient, taxi regular cleaning, Uber regular cleaning, transport cars maintenance, car selling preparing, after buy car cleaning, used car new feeling, used cars restoration, wheels cleaning, tyres cleaning and dressing, Car valeting, mobile valeting in London, mobile car valeting, quick valeting in London, regular valeting in London"
      }
   })

   .when('/about', {
   	templateUrl: 'views/about.html',
   	controller: 'aboutController',
      meta: {
         title: 'Mobile Detailing',
         titleSuffix: ' | Convenient, high quality polishing and detailing',
         description: 'We are using only the highest quality Waterless products, therefore we truly are Eco friendly.'
         keywords: "Eco-friendly carwash London, eco friendly car wash London, eco carwash, mobile hand car wash Chelsea, mobile hand car wash London, mobile carwash Chelsea, mobile carwash south west London, car wash at your house, polish London, car polishing London, polish, scratch removal, car scratch removal, swirls removal, chips removal, chips repairing, detailing, car waxing, wax, waterless car cleaning, carnauba wax, black car cleaning London, waterless car wash London, interior detailing, interior car cleaning, interior stains removal, leather seats cleaning, leather seats dressing, leather seats maintenance, car seats stains removal, upholstery deep cleaning, upholstery stains removal, car ceiling cleaning, ceiling stains removal, dashboard cleaning, centre console, cleaning, interior plastic wiped, interior restauration, car restoration, car vacuuming, car deep cleaning, mats deep cleaning, car mats cleaning, car mats stains removal, under bonnet cleaning, car engine cover cleaning, best mobile carwash, high quality products car wash, waterless eco friendly mobile hand carwash, cars, Mercedes, BMW, Range Rover, Battersea mobile carwash, Battersea eco friendly car wash, Sloane Square eco friendly mobile carwash, London green hand carwash, London’s best quality car wash, Land Rover, Smart, ecotype, high quality detailing, car detailing at your home, we are coming to you, regular maintenance car wash, mobile wash in London, mobile car wash east London, mobile carwash Stratford, Mobile hand carwash covering London area, car wash at your work, Car wash mobile North London, central London carwash, best mobile carwash, quality waterless wash, washnwax, wash and wax, wash'n'wax, eco friendly car wash at your door in London, most convenient, taxi regular cleaning, Uber regular cleaning, transport cars maintenance, car selling preparing, after buy car cleaning, used car new feeling, used cars restoration, wheels cleaning, tyres cleaning and dressing, Car valeting, mobile valeting in London, mobile car valeting, quick valeting in London, regular valeting in London"
      }
   })

   .when('/contact', {
   	templateUrl: 'views/contact.html',
   	controller: 'contactController',
      controllerAs: 'vm',
      meta: {
         title: 'Ecotype carwash',
         titleSuffix: ' | Contact-us',
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
