ecotypeCarwash.controller('aboutController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
	$scope.name = 'dorultan';
	$scope.go = function($event) {
		if($event.target.id === '_services') {
			$location.hash('services');
		}
		if($event.target.id === '_products') {
			$location.hash('products');
		}

		if($event.target.id === '_our-team') {
			$location.hash('our-team');
		}
	}
}]);