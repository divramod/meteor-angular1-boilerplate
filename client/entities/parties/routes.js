angular.module('ngOneApp').config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
  $stateProvider
    .state('parties', {
      url: '/parties/home',
      templateUrl: 'client/entities/parties/routes/home.ng.html',
      controller: 'PartiesListCtrl'
    })
    .state('partiesNew', {
      url: '/parties/new',
      templateUrl: 'client/entities/parties/routes/new.ng.html'
    });
}]);
