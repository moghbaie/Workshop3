var myApp = angular.module('ServicesModule', []);



myApp.factory('userpref',function(){

	function userpref( songs) {
		
		this.songs=songs;
	}
	userpref.prototype.addSong = function (song) {
		this.songs.push(song);

		if (this.user.age >18){
			this.song.type=song.type; 
			}
		else 
			{
			this.song.type='';}		
	}

	return userpref;
})
