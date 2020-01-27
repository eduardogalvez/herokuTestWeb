app.controller('MainController', ['$scope', '$http', function($scope, $http) { 
  	$scope.todo = {
  		title: "SpotifyMatcher",
  		list: []
  	}

  	$scope.books = {
  		title: "Add additional songs",
  		list: []
  	}

    function hasOnlyNumbers(item) {
      return /^[0-9]*$/.test(item)
    }


    var SpotifyWebApi = require('spotify-web-api-node');

    var spotifyApi = new SpotifyWebApi();

    var holder;

    // Get a user's playlists
    /*
spotifyApi.getUserPlaylists( item)
.then(function(data) {
  console.log('Retrieved playlists', data.body);
  holder = data.body.toString();
},function(err) {
  console.log('Something went wrong!', err);
});
*/


    $scope.addItem = function(itemList, item) {
      var holder;

      spotifyApi.getUserPlaylists(item).then(function(data){
          holder = data.body.href;
      },     itemList.push(holder)
      
       
    }


    

}]);