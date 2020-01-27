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



    
  	
   // $scope.addItem = function(itemList, item) {
      // ISBN : 10 or 13 length and consisdt of only numbers
    //  if ((item.length == 10 || item.length == 13) && hasOnlyNumbers(item)) {
      //  console.log("ISBN");
        //$http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + item).success(function(data) {
         // itemList.push("Title: " + data.items[0].volumeInfo.title + " // Author(s):" + data.items[0].volumeInfo.authors)
       // })
      //} else {
       // console.log("Not an ISBN")
       // itemList.push(item);
     // }
   // }


   var SpotifyWebApi = require('spotify-web-api-node');

  // credentials are optional
  var spotifyApi = new SpotifyWebApi({
   // clientId: 'fcecfc72172e4cd267473117a17cbd4d',
   // clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
    redirectUri: 'http://www.example.com/callback'
  });


  
    $scope.addItem = function(itemList, item) {
      spotifyApi.getUserPlaylists(item)
  .then(function(data) {
    console.log('Retrieved playlists', data.body);
    itemList.push(data.body);

  },function(err) {
    console.log('Something went wrong!', err);
  })

    }
    
    


}]);