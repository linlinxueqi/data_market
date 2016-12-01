;(function(){
	angular
		.module("myApp.detail")
		.controller("detailCtrl",detailCtrl);

		detailCtrl.$inject=[];

		function detailCtrl(){
			var vm=this;
			console.log("11111");
		}
})();