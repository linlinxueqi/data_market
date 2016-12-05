;(function(){
	'use strict';

	angular
		.module('myApp.filters')
		.filter('firstUpperCaseFilter',firstUpperCaseFilter);

	firstUpperCaseFilter.$inject = [];

	function firstUpperCaseFilter(){
		var func = function(value){
			if(typeof value !== 'undefined'){
				var values = value.split(' ');
				values.forEach(function(v,index){
					values[index].charAt(0).toUpperCase();
				});
				return values.join(' ');
			}else{
				return value;
			}
		}
		return func;
	}
})();