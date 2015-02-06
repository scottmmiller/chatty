'use strict';

angular.module('chattyApp')
	.service('MessageService', function MessageService($http, $q) {
    	this.postMessages = function(message, username) {
    		var deferred = $q.defer();
    		$http({
    			method: 'POST',
    			url: 'http://localhost:9999',
    			data: {
    				message: message,
    				user: username
    			}
    		}).then(function(res) {
    			deferred.resolve(res);
    		})
    		return deferred.promise;
    	}

    	this.getMessages = function() {
    		return $http.get('http://localhost:9999')
    	}
});
