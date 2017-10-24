  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD07XUsubZBt2kGhyG2xPOfOq49UZTyaw4",
    authDomain: "http://eatthereview.openode.io/",
    databaseURL: "https://eat-the-review.firebaseio.com",
    projectId: "eat-the-review",
    storageBucket: "",
    messagingSenderId: "847435972429"
  };
  firebase.initializeApp(config);

$(document).ready(function(){


//User registering
$('#signupbutton').click(function(){

    var email=$('#signupemail').val();
    var password=$('#signuppassword').val();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
        // ...
    });

});




//User Signing in
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location="RoughHomePage.html";
  } else {
    // No user is signed in.
  }
});
  
  
  
  
  });
