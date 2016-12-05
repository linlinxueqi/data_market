;(function(){
	'use strict';

	angular
		.module("myApp.about")
		.controller("aboutCtrl",aboutCtrl);

		aboutCtrl.$inject=['aboutService'];

		function aboutCtrl(aboutService){
			var vm=this;
			init();
			function init(){
				getAboutUsInfo();
				getAboutDescriptionInfo();
				getAboutTeamInfo();
			}
			/**
			 * 获取about us返回数据
			 * @return {[type]} [description]
			 */
			function getAboutUsInfo(){
				aboutService.getAboutUsInfo().then(function(response){
					//console.log(response.data);
					var responseAboutUs=response.data.aboutUs;
					vm.aboutUsName=responseAboutUs.name;
					vm.aboutUsImg=responseAboutUs.image;
					vm.aboutUsDesctitle=responseAboutUs.descTitle;
					vm.aboutUsDescDetail=responseAboutUs.descDetail;
				});
			};
			/**
			 * 获取后台返回的 about description 数据
			 * @return {[type]} [description]
			 */
			function getAboutDescriptionInfo(){
				aboutService.getAboutDescInfo().then(function(response){
					var responseAboutDesc=response.data.description;
					//console.log(responseAboutDesc);
					vm.aboutDescTitle=responseAboutDesc.title;
					vm.aboutDescDetail=responseAboutDesc.detail;
					vm.aboutDescBgimg=responseAboutDesc.bgImg;
				});
			};

			/**
			 * 获取后台返回的about Team数据
			 * @return {[type]} [description]
			 */
			function getAboutTeamInfo(){
				aboutService.getAboutTeamInfo().then(function(response){
					var responseAboutTeam=response.data.team;
					vm.AboutTeamTile=responseAboutTeam.title;
					vm.AboutTeamPerson=responseAboutTeam.person;
				});
			}








		}
})();