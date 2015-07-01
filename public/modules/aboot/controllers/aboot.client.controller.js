'use strict';

angular.module('aboot').controller('AbootController', ['$scope', 'Authentication', 'Aboots',
	function($scope, Authentication, Aboots) {
		$scope.authentication = Authentication;

		// $scope.abootStuff = 'Cafe Honduras is all about selling coffee to you and making money to give to the Honduran people to use for medicalizing their wounds.Cafe Honduras is all about selling coffee to you and making money to give to the Honduran people to use for medicalizing their wounds.';
		
		$scope.getAboot = function() {
			Aboots.query(function(t) {
				$scope.abootStuff = t[0].content;
			});
		};

		$scope.create = function() {
			var newAboot = new Aboots({
				title: this.title,
				content: this.content
			});

			newAboot.$save(function(response) {
				//$location.path('articles/' + response._id);

				$scope.title = '';
				$scope.content = '';
				$scope.getAboot();
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};
	}
]);
