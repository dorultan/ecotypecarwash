ecotypeCarwash.controller('homeController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){

	$scope.go = function($event) {
		if($event.target.id === 'services') {
			$location.hash('services');
		}

		if($event.target.id === 'products') {
			$location.hash('products');
		}

		if($event.target.id === 'our-team') {
			$location.hash('our-team');
		}
	}
}]);