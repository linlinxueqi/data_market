;(function(){
	'use strict';

	angular
		.module("myApp.home")
		.factory('HomeService',HomeService);

	HomeService.$inject = ['$http'];

	function HomeService($http){
		return {
			getHomeWelcomeInfo : getHomeWelcomeInfo
		};

		/**
		 * 获取首页
		 * @return {[type]} [description]
		 */
		function getHomeWelcomeInfo(){
			return $http.get('/json_datas/home.json').then(function(response){
				return response.data;
			});
		}
	}
})();