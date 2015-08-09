var myApp = angular.module('ServicesModule', []);



myApp.factory('userpref',function(){

	function userpref( name,age,type,songcheck) {
		this.name=name;
		this.age=age;
		this.songcheck=songcheck;
	}
	userpref.prototype.addtype= function () {

		if (this.age >18){
			this.type=type; 
			}
		else 
			{
			this.type='';}		
	}

	return userpref;
})
