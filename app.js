const app = angular.module('app', ['ui.router'])

app.config(($stateProvider, $urlRouterProvider) => {

  $stateProvider.state('parent', {
    url: '/parent',
    templateUrl: './templates/parent.html'
  });

  $stateProvider.state('parent.child', {
    url: '/child',
    templateUrl: './templates/child.html'
  });

  $stateProvider.state('child', {
    url: '/child',
    templateUrl: './templates/child.html'
  });

  $urlRouterProvider.otherwise('/parent');

});

