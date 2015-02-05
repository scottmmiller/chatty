'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];

    MessageService.getMessages().then(function(response) {
    	$scope.messages = response.data;
    })

    }
  });
