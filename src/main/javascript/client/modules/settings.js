(function() {
  var module = angular.module('app.settings', []);

	//STILL TO BE IMPLEMENTED

  module.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('settings', {
      url: '/settings',
      templateUrl: 'partials/settings/settings.html',
      controller: 'settings'
    });
  });

  module.controller('settings', function($scope) {
    $scope.machin = "truc";
  });

})();
