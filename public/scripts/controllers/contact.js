ecoType.controller('contactController', ['$scope', '$http', '$location', function($scope, $http, $location){
	var vm = this;
	vm.emailDetails = {email: '',subject: 'Select a subject',message: ''};
	vm.sent = false;
	vm.subj;
	vm.submit = function(){
		$http.post('/sendEmail', {
			email: vm.emailDetails.email,
			subject: vm.emailDetails.subject,
			message: vm.emailDetails.message
		})
		console.log(vm.emailDetails.subject)
		vm.subj = vm.emailDetails.subject;
		vm.sent = true;

		vm.emailDetails.email = ' ';
		vm.emailDetails.subject = ' ';
		vm.emailDetails.message = ' ';
		console.log('something');
	}
}])