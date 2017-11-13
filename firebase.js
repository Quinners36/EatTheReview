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

    var user;

//User registering
  $('#btnSignup').click(function(){

      var email=$('#signupemail').val();
      var password=$('#signuppassword').val();

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          console.log(error.code);
          console.log(error.message);
          $('#errorarea').html(error.code +'<br>'+ error.message);
          // ...
      });

  });

  $('#Login').click(function(){

      var email=$('#loginemail').val();
      var password=$('#loginpassword').val();

      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          $('#errorarea2').html(error.code +'<br>'+ error.message);
          // ...
      });

      user = firebase.auth().currentUser;

      if (user) {
          window.location = 'Home.html';
      } else {
          // No user is signed in.
      }

  });

  $('#signout').click(function(){
        firebase.auth().signOut().then(function() {
            window.location ='index.html'
        }, function(error) {
            // An error happened.
        });
    });

  $('#test').click(function(){
      user=firebase.auth().currentUser;
      console.log("Running1");
      console.log(user);

      if (user != null) {
          console.log("Running2");
          user.providerData.forEach(function (profile) {
              console.log("Sign-in provider: " + profile.providerId);
              console.log("  Provider-specific UID: " + profile.uid);
              console.log("  Name: " + profile.displayName);
              console.log("  Email: " + profile.email);
              console.log("  Photo URL: " + profile.photoURL);
          });
        }
    });

  $('#submitReview').click(function(){


        var ResterauntName=$('#RName').val();
        var ResterauntRating=$('#RRating').val();
        var ResterauntReview=$('#RReview').val();

        firebase.database().ref('Reviews').push({
            ResterauntName: ResterauntName,
            ResterauntRating: ResterauntRating,
            ResterauntReview : ResterauntReview
        });
    });

});

  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.uid);
      } else {

      }
  });
 
