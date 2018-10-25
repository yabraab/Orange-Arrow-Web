(function(){
	// Initialize Firebase
	var config = {
    	apiKey: "AIzaSyD0EsGzpK0w3HPnrmLNcnYkBAj3kYRhIxc",
    	authDomain: "orange-arrow-ios.firebaseapp.com",
    	databaseURL: "https://orange-arrow-ios.firebaseio.com",
    	projectId: "orange-arrow-ios",
    	storageBucket: "orange-arrow-ios.appspot.com",
    	messagingSenderId: "888562289094"
  	};
  	firebase.initializeApp(config);

	//Get Elements
	/*var field = document.getElementById('username');

	var dbRef = firebase.database().ref().child('text');

	dbRef.on("value", snap => field.innerText = snap.val());*/
	var app = angular.module('myApp', []);
    app.controller('passwordReset', function($scope, $http) {
      $scope.master = {};
      $scope.user = {};
      $scope.update = function(user) {
        $scope.master = angular.copy(user);
        $scope.user = {};
        console.log(user);
      };
      $http.get("data.json")
      .then(function(response) {
          $scope.myWelcome = response.data;
      });
    });
	/*$scope.submit = function(form) {
		$scope.submitted = true;

  		// If form is invalid, return and let AngularJS show validation errors.
  		if (form.$invalid) {
    		return;
  		}
  		var config = {
    		params : {
		      'callback' : 'JSON_CALLBACK',
		      'email' : $scope.email,
    		},
  		};
  		// Perform JSONP request.
	  var $promise = $http.jsonp('response.json', config)
	    .success(function(data, status, headers, config) {
	      if (data.status == 'OK') {
	        $scope.email = null;
	        $scope.goodmessages = 'Your form has been sent!';
	        $scope.submitted = false;
	      } else {
	        $scope.badmessages = 'Oops, we received your request, but there was an error processing it.';
	        $log.error(data);
	      }
	    })
	    .error(function(data, status, headers, config) {
	      $scope.progress = data;
	      $scope.badmessages = 'There was a network error. Try again later.';
	      $log.error(data);
	    })
	    .finally(function() {
	      // Hide status messages after three seconds.
	      $timeout(function() {
	        $scope.goodmessages = null;
	        $scope.badmessages = null;
	      }, 3000);
	    });
  	}*/

	// updates the contents of the element with a value
	/*var updateFirstName = function(element, value) {
    	element.innerText = value;
	};

	//Synchronous change of UsersInfo
	var starCountRef = firebase.database().ref('UsersInfo/5XwWt1sXs2WdoScxbEdT9YJY18E2/First Name');
	starCountRef.on('value', function(snapshot) {
  		updateFirstName(field, snapshot.val());
	});*/
}());

