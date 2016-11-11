uver.controller('userCtrl', ['$scope', '$rootScope', '$location',
    function($scope, $rootScope, $location) {
      $scope.profile = {avatar : 'img/profile-avatar.png'};

      $scope.register = function(){
          $location.path('/app/register');
      };
      $scope.doLogin = function(){
          $location.path('/app/profile');
      };
      $scope.doRegister = function(){
          $scope.getDeliver();
      };
      $scope.getDeliver = function(){
          $location.path('/app/pickupFrom');
      };
      $scope.setting = function(){
          $location.path('/app/addPayment');
      };
    }
]);
uver.controller('pickupCtrl', ['$scope', '$rootScope', '$location', '$http', 'pickUpPlace',
    function($scope, $rootScope, $location, $http, pickUpPlace) {
      $scope.place = pickUpPlace;

      $scope.pickupTo = function(){
          $location.path('/app/pickupTo');
      };
      $scope.estimate = function(){
          $location.path('/app/estimate');
      };
      $scope.deliverTracking = function(){
        $location.path('/app/deliverTracking');
      };
      $scope.cancel = function(){
          $location.path('/app/cancel');
      };
      $scope.placePickupFrom = function() {
         $scope.place.from = this.getPlace();
      };
      $scope.placePickupTo = function() {
         $scope.place.to = this.getPlace();
      };
    }
]);
