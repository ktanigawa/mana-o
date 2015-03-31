angular
  .module('manao', [
    'ui.router'
  ])
  // https://github.com/angular-ui/ui-router/wiki
  .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider, $stateProvider) {
    
    // '' means default/root state "/"
    $stateProvider.state('title', {
      url: '',
      templateUrl : "views/title.html",
    })
    .state('card', {
      url : '/card',
      templateUrl : "views/card.html",
    })
    .state('list_all', {
      url : '/list_all',
      templateUrl : "views/list_all.html",
    });
  }]);