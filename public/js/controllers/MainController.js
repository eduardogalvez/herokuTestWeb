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


$scope.addItem = function(itemList, item) {
  // ISBN : 10 or 13 length and consisdt of only numbers
  if ((item.length == 10 || item.length == 13) && hasOnlyNumbers(item)) {
    console.log("ISBN");
    $http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + item).success(function(data) {
      itemList.push("Title: " + data.items[0].volumeInfo.title + " // Author(s):" + data.items[0].volumeInfo.authors)
    })
  } else {
    console.log("Not an ISBN")
    itemList.push(item);
  }
}



    

}]);