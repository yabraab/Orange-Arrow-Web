<!DOCTYPE html>
<head>
	<title>Firebase Login</title>
	<link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet"/> 
	<link rel="stylesheet" href="style.css" />
	</head>
<body>

	<div id="login_div" class="main-div">
		<h3>Log In</h3>
		<input autofocus="autofocus" type="email" placeholder="Email..." id="email_field" />
		<input type="password" placeholder="Password..." id="password_field"/>
		<button class="btn" onclick="login()">Login to Account</button>
	
	</div>
	
	
	<div id="user_div" class="loggedin-div">
		<h3 id="user_para">Welcome</h3>
		<button class="btn" onclick="logout()">Logout</button>
		<button onclick="send_verification()">Send Verification</button>
	</div>
	

<script src="https://www.gstatic.com/firebasejs/5.5.3/firebase.js"></script>
<script>
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

  
</script>
<script src="index.js"></script>


</body>
</html>
