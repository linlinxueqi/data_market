;(function(){
	'use strict';

	angular.module('myApp', [
		'ui.router',
		'ngRap',
		'LocalStorageModule',
		'ui.bootstrap',
		'myApp.home',
		'myApp.about',
		'myApp.gallery',
		'myApp.contact',
		'myApp.filters'
		]);
})();