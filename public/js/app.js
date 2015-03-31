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
      controller: "CardController"
    })
    .state('list_all', {
      url : '/list_all',
      templateUrl : "views/list_all.html",
    });
  }])
  .controller('CardController', ['$scope', function($scope){
    // have cards
    // choose one at random
    // display cards

    // display one card
    $scope.card = {
      meaning : "Fire",
      options : [
        {
          title : "ahi", //uppercase renders or do i need css?
          definition : "fire",
          correct : true
        },        
        {
          title : "ʻahi",
          definition : "tuna fish",
          correct : false
        },
        {
          title : "pale ahi",
          definition : "flame retardant",
          correct : false
        },
      ]
    },
    {
      meaning : "sacred",
      options : [
        {
          title : "ihi", //uppercase renders or do i need css?
          definition : "to tear off, remove",
          correct : false
        },        
        {
          title : "ʻihi",
          definition : "sacred",
          correct : true
        },
        {
          title : "hō ʻihi",
          definition : "flame retardant",
          correct : false
        },
      ]
    },
    {
      meaning : "to accept a challenge",
      options : [
        {
          title : "ʻaʻa",
          definition : "to accept a challenge",
          correct : true
        },        
        {
          title : "ʻaʻā",
          definition : "to burn, blaze, glow",
          correct : false
        },
        {
          title : "aʻa",
          definition : "small root, rootlet, vein, artery, nerve, tendon, muscle.",
          correct : false
        },
      ]
    },

  }])
  ;