'use strict';
angular.module('aboot').factory('Aboots', ['$resource',
	function($resource) {
		return $resource('aboot', {}, {
			list: {
				method: 'GET'
			}
		});
	}
]);
