;(function(){
	'use strict';
	angular
	.module("myApp.home")
	.controller("homeCtrl",homeCtrl);

	homeCtrl.$inject=['HomeService'];
	function homeCtrl(HomeService){
		var vm=this;

		init();

		function init(){
			getHomeInfo();
		}

		function getHomeInfo(){
			HomeService.getHomeWelcomeInfo()
			.then(function(response){
				if(response.code === 10000){
					var responseWelcome = response.data.welcome;
					vm.welcomeName = responseWelcome.name;
					vm.welcomeTitle = responseWelcome.title;
					vm.welcomeDesc = responseWelcome.description;
					vm.welcomeImages = responseWelcome.images;
				}
			});
		}

	}
})();