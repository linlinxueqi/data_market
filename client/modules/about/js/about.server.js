;(function(){
	'use strict';
	 angular
	 	.module("myApp.about")
	 	.factory("aboutService",aboutService);

	 aboutService.$inject=['$http'];

	 function aboutService($http){
	 	return {
	 		getAboutUsInfo:getAboutUsInfo,
	 		getAboutDescInfo:getAboutDescInfo,
	 		getAboutTeamInfo:getAboutTeamInfo
	 	};

	 	/**
	 	 * 取得about us页面数据
	 	 * @return {[type]} [description]
	 	 */
	 	function getAboutUsInfo(){
	 		return $http.get("/json_datas/about.json").then(function(response){
	 			return response.data;
	 		});
	 	};

	 	/**
	 	 * 取得about description 数据
	 	 * @return {[type]} [description]
	 	 */
	 	function getAboutDescInfo(){
	 		return $http.get("/json_datas/aboutDesc.json").then(function(response){
	 			return response.data;
	 		});
	 	};

	 	/**
	 	 * 取得 about team数据
	 	 * @return {[type]} [description]
	 	 */
	 	function getAboutTeamInfo(){
	 		return $http.get("/json_datas/aboutTeam.json").then(function(response){
	 			return response.data;
	 		});
	 	}
	 }
})();