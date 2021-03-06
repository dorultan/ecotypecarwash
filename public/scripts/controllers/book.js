ecoType.controller('bookController', ['$scope', '$location', 'appService', '$http', '$filter', '$routeParams', function($scope, $location, appService, $http, $filter, $routeParams){
	var vm = this;
	var num = $routeParams.num;
	vm.checkedP = num !== undefined ? num : 'Refresh';
	vm.packets = appService.getPackets();
	vm.packet = function(){
		var p = $filter('filter')(vm.packets, vm.checkedP)[0];
		vm.checkedP = p.title;
		vm.price = p.price;
		return p;
	}
	vm.price;
	vm._packet = vm.packet(); 
	vm.clientDetails = {};
	vm.next = false;
	vm.complete = false;

	vm.appComplete = function(){
			$http.post('/appComplete', {
			email: vm.clientDetails.email,
			subject: 'Client order ' + vm.checkedP,
			content: {
				name: vm.clientDetails.name,
				address: vm.clientDetails.address,
				postcode: vm.clientDetails.postcode,
				mobile: vm.clientDetails.phone,
				message: vm.clientDetails.message,
				reg_nr: vm.clientDetails.registration_nr,
				title: vm.checkedP,
				day: vm.clientDetails.date_day,
				month: vm.clientDetails.date_month,
				year: vm.clientDetails.date_year
			}
		})
		vm.complete = true;
		vm.clientDetails = {};
	}

	vm._next = function() {
		vm.next = true;
	}
}])
