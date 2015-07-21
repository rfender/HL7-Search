'use strict';

var startCtrl = angular.module('startCtrl',[]).controller('StartCtrl', function($scope, $log, $location, initialization) {

  $scope.testStr = "Start Route";

  if (initialization) {
    $log.debug(initialization.loadData.data);
  }

});

startCtrl.init = {
  
  initialization: function($q, $log, HL7Service) {
    var deferred = $q.defer();

    $q.all({

      // call the hl7 load service
      loadData: HL7Service.testLoad()

    })
      .then(function(results) {
        deferred.resolve(results);
      })
      .catch($log.error);

    return deferred.promise;
  }

};