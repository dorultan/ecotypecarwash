ecoType.controller('checkout', ['$scope',
							 '$routeParams', 
							 'appService', 
							 '$location', 
							 '$filter', 
							 '$http', function($scope, $routeParams, appService, $location, $filter, $http){
	var vm = this;
	var packets = appService.getPackets();
	var num = $routeParams.num;
	vm.clientDetails = {};
	vm.packet = $filter('filter')(packets, num)[0];
	vm.appComplete = function(){
			$http.post('/appComplete', {
			email: vm.clientDetails.email,
			subject: 'Client order ' + vm.packet.title,
			content: {
				name: vm.clientDetails.name,
				address: vm.clientDetails.address,
				postcode: vm.clientDetails.postcode,
				mobile: vm.clientDetails.phone,
				message: vm.clientDetails.message,
				packet: vm.packet
			}
		})
		vm.clientDetails = {};
	}
}])