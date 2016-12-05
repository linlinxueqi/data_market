;(function(){
	'use strict';

	angular
		.module("myApp.contact")
		.factory("contactServer",contactServer);

	contactServer.$inject=['$http'];

	function contactServer($http){
		return {
			getContactInfo:getContactInfo
		};

		/**
		 * 
		 * @return {[type]} [description]
		 */
		function getContactInfo(){
			return $http.get("/json_datas/contact.json").then(function(response){
				return response.data;
			});
		}
	}
})();