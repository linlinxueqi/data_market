;(function(){
	'use strict';

	angular
		.module("myApp.news")
		.controller("newsCtrl",newsCtrl);

		newsCtrl.$inject=[];

		function newsCtrl(){

			var vm=this;
			console.log("news ctrl");
		}
})();