uver.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
      url: '/app',
      controller: 'userCtrl',
      template: '<ion-nav-view></ion-nav-view>',
      abstract: true,
  })
  .state('app.login', {
      cache: false,
      url: '/login',
      controller: 'userCtrl',
      templateUrl: 'templates/login.html'
  })
  .state('app.register', {
    cache: false,
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'userCtrl'
  })
  .state('app.addPayment', {
    cache: false,
    url: '/addPayment',
    templateUrl: 'templates/addPayment.html',
    controller: 'userCtrl'
  })
  .state('app.profile', {
    cache: false,
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'userCtrl'
  })
  .state('app.cancel', {
    cache: false,
    url: '/cancel',
    templateUrl: 'templates/cancel.html',
    controller: 'pickupCtrl'
  })
  .state('app.estimate', {
    cache: false,
    url: '/estimate',
    templateUrl: 'templates/estimate.html',
    controller: 'pickupCtrl'
  })
  .state('app.pickupTo', {
    cache: false,
    url: '/pickupTo',
    templateUrl: 'templates/pickupTo.html',
    controller: 'pickupCtrl'
  })
  .state('app.pickupFrom', {
    cache: false,
    url: '/pickupFrom',
    templateUrl: 'templates/pickupFrom.html',
    controller: 'pickupCtrl'
  })
  .state('app.deliverTracking', {
    cache: false,
    url: '/deliverTracking',
    templateUrl: 'templates/deliverTracking.html',
    controller: 'pickupCtrl'
  });
  $urlRouterProvider.otherwise("/app/login");
});
