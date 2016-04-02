ballyCyrk.controller('adminController', function(teamFactory){
  var _this = this;
  this.teams = ["Downtown","University District","Capitol Hill","Queen Anne", "Ballard", "Fremont"]

  this.newTeam = function(){
    teamFactory.add(_this.team, function(data) {
      console.log('return to ad_c with', data);
    })
  }
});
