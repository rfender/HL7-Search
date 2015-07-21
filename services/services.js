'use strict';

var appServices = angular.module('hl7search.services', []);

appServices.factory('HL7Service', function($rootScope,$http,$timeout,$log) {

    var hl7service = {};
    
    /**
     * This is purely a dev method to test service method calls
     */
    hl7service.testLoad = function() {
      return {data: 'some data was returned and here it is'};
    };

    /**
     * This method gets all the pending notifications on the server
     *
     * @returns {*|HttpPromise}
     */
    hl7service.load = function() {
        return $http.jsonp('/api/getAccountNotifications?jsoncallback=JSON_CALLBACK', {
            params: {}
        })
            .success(function(result) {
                // not doing anything here at the moment
            })
            .error(function(error) {
                $log.error(error);
            });
    };

    /**
     * This method calls the notification longpoll API with a timeout of 30 seconds. If within
     * that 30 seconds we receive a "REFRESH" message, we call the getAccountNotifications()
     * method to retrieve the pending notifications and then resume the longpoll.
     *
     * If no "REFRESH" message is received, the GET is timed out after 30 seconds and another
     * call to notificationPoll is executed.
     *
     * Note that the server has a 60 second timeout.
     */
    hl7service.notificationPoll = function() {

        $http({
            url: '/notification',
            method: "GET",
            timeout: 30000,
            params: {someParam: 'someValue'}
        })
            .success(function(result) {
                // celebrate
            })
            .error(function(error) {
                // cry
            });
    };

   

    return hl7service;
});