;(function(){
	'use strict';

/*	var app = angular.module('myApp.account');
	app.controller('signInCtrl',['$http',function($http){

	}]);
*/
	angular
		.module('myApp.account')
		.controller('signInCtrl',signInCtrl);

	signInCtrl.$inject = [];

	function signInCtrl(){
		//jshint validthis:true

		var vm = this;
		console.log('这里是登录页面的控制器!');
	}
})();