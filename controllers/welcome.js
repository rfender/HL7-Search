'use strict';

angular.module('welcomeCtrl', []).controller('WelcomeCtrl', function($scope, $location) {

  $scope.welcomeStr = "HL7 Search-inator";

  /**
   * This simply navigates the user away from the super friendly,
   * and beautiful welcome page to the meat and potatoes of the 
   * application.
   */
  $scope.start = function() {
    $location.path('/start');
  };

});