'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];

    $scope.getMessages = function() {
    	MessageService.getMessages().then(function(response) {
    		$scope.messages = response.data;
    	})
    }

    $scope.addMessage = function(message) {
    	console.log(message)
    	MessageService.postMessages(message).then(function(res) {
    		$scope.getMessages(); 
    		$scope.message = '';
    	})
    }
    $scope.getMessages();

});
