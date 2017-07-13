
ecoType.controller('homeController', ['$scope', '$log', '$location', 'appService', '$filter', '$routeParams', function($scope, $log, $location, appService, $filter, $routeParams){
	$scope.packets = appService.getPackets();

	$scope.choose = function(id) {
		$routeParams.num = id;
		$location.path(id);
	}
}])
	