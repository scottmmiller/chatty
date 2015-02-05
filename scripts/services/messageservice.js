'use strict';

angular.module('chattyApp')
  .factory('MessageService', function MessageService($http) {
    return {
    	getMessages = function() {
    		$http({
    			method: 'POST',
    			url: 'http://localhost:9999',
    			data: {
    				message: message,
    				user: username
    			}
    		});
    	}
    }
  });
