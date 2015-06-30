'use strict';

// Setting up route
angular.module('aboot').config(['$stateProvider',
	function($stateProvider) {
		// boardroom state routing
		$stateProvider.
		state('aboot', {
			url: '/aboot',
			templateUrl: 'modules/aboot/views/aboot.client.view.html'
		});
	}
]);
