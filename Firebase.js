  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD07XUsubZBt2kGhyG2xPOfOq49UZTyaw4",
    authDomain: "eat-the-review.firebaseapp.com",
    databaseURL: "https://eat-the-review.firebaseio.com",
    projectId: "eat-the-review",
    storageBucket: "",
    messagingSenderId: "847435972429"
  };
  firebase.initializeApp(config);



//User registering
firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

//User Signing in
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
