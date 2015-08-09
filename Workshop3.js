var myApp=angular.module('test01', ['ServicesModule']);


myApp.controller('MyController',function($scope,userpref){
  var self=this;


  self.pref=new userpref(self.name, self.age, self.type, self.songcheck);
  self.pref.addtype();

  self.songlist={
  Pop:[{SongName:'Black Space'},{SongName:'Mashup'}],
  Rock:[{SongName:'The Wolf'},{SongName:'Black Sun'},{SongName:'Delilah'},{SongName:'Psycho'}],
  Rap:[{SongName:'Blessings'},{SongName:'Ride Out'},{SongName:'Be Real'},{SongName:'R.I.C.O.'}]
  };

  self.genrechange=function(choice){
      self.selectedlist=self.songlist[choice];
   };

  self.songcheck=[];

  self.makelist=function(SongName,active){
      if(active){
            self.songcheck.push(SongName);
        }else{
             self.songcheck.splice(self.songcheck.indexOf(SongName), 1);
        }      
   };
});
