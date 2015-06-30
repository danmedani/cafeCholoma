'use strict';


angular.module('aboot').controller('AbootController', ['$scope', 'Authentication',
	function($scope, Authentication, Aboot) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.abootStuff = 'Cafe Honduras is all about selling coffee to you and making money to give to the Honduran people to use for medicalizing their wounds.Cafe Honduras is all about selling coffee to you and making money to give to the Honduran people to use for medicalizing their wounds.';

		// $scope.find = function() {
		// 	// $scope.articles = Aboot.list();
		// };

		// $scope.create = function() {
		// 	var aboot = new Aboots({
		// 		title: this.title,
		// 		content: this.content
		// 	});
		// };

		// 	aboot.parent = 'top'; //by default the articles list only shows where parent = 'top'
		// 	aboot.user = this.user;

		// 	aboot.$save(function(response) {
		// 		//$location.path('articles/' + response._id);

		// 		$scope.title = '';
		// 		$scope.content = '';
		// 		// $scope.articles.unshift(article); //push it to the display
		// 		$scope.createVisible = !$scope.createVisible;
		// 	}, function(errorResponse) {
		// 		$scope.error = errorResponse.data.message;
		// 	});
		// };
	}
]);