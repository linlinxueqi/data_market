;(function(){
	'use strict';

	angular
		.module("myApp.contact")
		.controller("contactCtrl",contactCtrl);

	contactCtrl.$inject=['contactServer'];

	function contactCtrl(contactServer){
		var vm=this;

		init();

		function init(){
			getContactConnect();
		};

		/**
		 * 获取后台返回的联系方式数据
		 * @return {[type]} [description]
		 */
		function getContactConnect(){
			contactServer.getContactInfo().then(function(response){
				var contactData=response.data.contact;
				vm.contactData=contactData;
				console.log(vm.contactData);
			});
		}

	}
})();