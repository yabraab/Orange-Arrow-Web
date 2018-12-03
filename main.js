(function() {

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD0EsGzpK0w3HPnrmLNcnYkBAj3kYRhIxc",
    authDomain: "orange-arrow-ios.firebaseapp.com",
    databaseURL: "https://orange-arrow-ios.firebaseio.com",
    projectId: "orange-arrow-ios",
    storageBucket: "orange-arrow-ios.appspot.com",
    messagingSenderId: "888562289094",
	
	
  };
  firebase.initializeApp(config);
  var first_name = document.getElementById("first_name");
  var last_name = document.getElementById("last_name");
  var email_field = document.getElementById("email_field");
var password_field = document.getElementById("password_field");
var age = document.getElementById("age");
var sport = document.getElementById("sport");
var school = document.getElementById("school");
 
}());

function register() {
	var firebaseRef = firebase.database().ref();
	
	firebaseRef.child("UsersInfo").push().set({
		first_name: "bayar",
	last_name: "bat"});
	});
	
	var email = document.getElementById("email_field").value;
	var pass = document.getElementById("password_field").value;
	
firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  
  window.alert("errorMessage");
});
}

	
