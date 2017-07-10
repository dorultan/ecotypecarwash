
ecoType.controller('aboutController', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll){
		
	$scope.name = 'name cool name';

	$scope.goTofirst = function() {
		$location.hash('first');

		$anchorScroll();
	}

	$scope.goToSecond = function() {
		$location.hash('second');

		$anchorScroll();
	}

	$scope.goTothird = function() {	
		$location.hash('third');	

		$anchorScroll();
	}

}])
