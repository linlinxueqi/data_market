;(function(){
	'use strict';

	angular
		.module('myApp')
		.config(config)
		.run(['$rootScope','$state','$stateParams','$window','localStorageService',function($rootScope,$state,$stateParams,$window,localStorageService){
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;

			$rootScope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){

			});
		}]);

	config.$inject = ['$locationProvider','$stateProvider','$urlRouterProvider','$httpProvider','ngRapProvider'];

	function config($locationProvider,$stateProvider,$urlRouterProvider,$httpProvider,ngRapProvider){
		$stateProvider
			// 登录
			.state('signIn',{
				url:'/sign_in',
				templateUrl : '/modules/account/views/sign_in.html',
				controller:'signInCtrl',
				controllerAs:'vm'
			})
			//首页
			.state('home',{
				url:'/home',
				templateUrl : '/modules/home/views/home.html',
				controller:'homeCtrl',
				controllerAs:'vm'
			})
			//about
			.state('about',{
				url:'/about',
				templateUrl : '/modules/about/views/about.html',
				controller:'aboutCtrl',
				controllerAs:'vm'
			})
			//gallery
			.state('gallery',{
				url:'/gallery',
				templateUrl : '/modules/gallery/views/gallery.html',
				controller:'galleryCtrl',
				controllerAs:'vm'
			})
			//contact
			.state('contact',{
				url:'/contact',
				templateUrl : '/modules/contact/views/contact.html',
				controller:'contactCtrl',
				controllerAs:'vm'
			});

		$locationProvider.html5Mode(true);
	}
})();