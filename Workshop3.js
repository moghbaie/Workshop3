var myApp=angular.module('test01', ['ServicesModule']);


myApp.controller('MyController',function($scope,userpref){
	var self=this;


	self.pref=new userpref([]);

	self.songlist={
  Pop:[{SongName:'Black Space'},{SongName:'Mashup'}],
  Rock:[{SongName:'The Wolf'},{SongName:'Black Sun'},{SongName:'Delilah'},{SongName:'Psycho'}],
  Rap:[{SongName:'Blessings'},{SongName:'Ride Out'},{SongName:'Be Real'},{SongName:'R.I.C.O.'}]
  };

  self.genrechange=function(choice){
   		self.selectedlist=self.songlist[choice];
   };

  self.makelist=function(SongName,active){
      if(active){
            self.song.list.push(SongName);
        }else{
             self.song.list.splice(self.song.list.indexOf(SongName), 1);
        }      
   };

	self.addPref = function(song) {
		self.pref.song.addSong(song);
    
	};
});
